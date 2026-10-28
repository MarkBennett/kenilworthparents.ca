import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { env } from 'cloudflare:workers';
import { site } from '../data/site';

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** Collapses line breaks so user input can't inject extra email headers. */
const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

/** Verifies a Cloudflare Turnstile token server-side. */
async function verifyTurnstile(token: string, remoteIp: string): Promise<boolean> {
  const { TURNSTILE_SECRET_KEY } = env as Env & { TURNSTILE_SECRET_KEY?: string };
  if (!TURNSTILE_SECRET_KEY) {
    console.error('TURNSTILE_SECRET_KEY is not set; rejecting contact form submission.');
    throw new ActionError({
      code: 'INTERNAL_SERVER_ERROR',
      message: `The contact form is not available right now. Please email us at ${site.contact.email}.`,
    });
  }

  const body = new FormData();
  body.append('secret', TURNSTILE_SECRET_KEY);
  body.append('response', token);
  body.append('remoteip', remoteIp);

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, { method: 'POST', body });
    const outcome = (await response.json()) as { success?: boolean; 'error-codes'?: string[] };
    if (outcome.success !== true) {
      console.warn('Turnstile verification failed', outcome['error-codes']);
    }
    return outcome.success === true;
  } catch (error) {
    console.error('Turnstile verification request failed', error);
    return false;
  }
}

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z
        .string({ error: 'Please enter your name.' })
        .trim()
        .min(1, 'Please enter your name.')
        .max(100, 'Name must be 100 characters or fewer.'),
      email: z
        .string()
        .trim()
        .max(254, 'Email must be 254 characters or fewer.')
        .pipe(z.email('Please enter a valid email address.'))
        .optional(),
      message: z
        .string({ error: 'Please enter a message.' })
        .trim()
        .min(10, 'Please enter a message of at least 10 characters.')
        .max(5000, 'Message must be 5000 characters or fewer.'),
      // Honeypot field: hidden from people, but naive bots fill in every field.
      website: z.string().optional(),
      'cf-turnstile-response': z.string().optional(),
    }),
    handler: async (input, context) => {
      if (input.website) {
        // Pretend the message was sent so bots don't learn they were caught.
        console.warn('Contact form honeypot triggered; discarding submission.');
        return { sent: true };
      }

      const { clientAddress } = context;

      const { success: withinLimit } = await env.CONTACT_RATE_LIMITER.limit({
        key: `contact:${clientAddress}`,
      });
      if (!withinLimit) {
        throw new ActionError({
          code: 'TOO_MANY_REQUESTS',
          message: 'Too many messages have been sent. Please wait a minute and try again.',
        });
      }

      const token = input['cf-turnstile-response'];
      if (!token || !(await verifyTurnstile(token, clientAddress))) {
        throw new ActionError({
          code: 'FORBIDDEN',
          message:
            'We could not verify that you are human. Please complete the challenge and try again.',
        });
      }

      const name = singleLine(input.name);
      const email = input.email ? singleLine(input.email) : undefined;

      try {
        await env.CONTACT_EMAIL.send({
          from: { name: `${site.shortName} Website`, email: env.CONTACT_FROM_EMAIL },
          to: site.contact.email,
          replyTo: email,
          subject: `Website contact form: ${name}`,
          text: [`Name: ${name}`, `Email: ${email ?? '(not provided)'}`, '', input.message].join(
            '\n',
          ),
        });
      } catch (error) {
        console.error('Failed to send contact form email', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Sorry, your message could not be sent. Please try again later or email us at ${site.contact.email}.`,
        });
      }

      return { sent: true };
    },
  }),
};
