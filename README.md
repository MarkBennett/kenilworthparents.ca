# kenilworthparents.ca
Website for the Kenilworth School of Edmonton Parent Association

An [Astro](https://astro.build) site deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/).

## Editing content

All page content (mission, contact details, mailing address, executives and active
fundraisers) lives in [`src/data/site.ts`](src/data/site.ts). Items marked `TODO`
still need to be confirmed.

## Commands

| Command           | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Install dependencies                                |
| `npm run dev`     | Start the local dev server at `localhost:4321`      |
| `npm run build`   | Build the site to `./dist/`                         |
| `npm run preview` | Preview the production build locally                |
| `npm run deploy`  | Build and deploy to Cloudflare Workers (`wrangler`) |

Worker settings are in [`wrangler.jsonc`](wrangler.jsonc).

## Contact form

The `/contact` page posts to an [Astro Action](https://docs.astro.build/en/guides/actions/)
(`src/actions/index.ts`) that runs in the Cloudflare Worker and emails the submission to
`contact.email` from `src/data/site.ts` using the
[`send_email` binding](https://developers.cloudflare.com/email-routing/email-workers/send-email-workers/).

Spam is prevented by:

- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/), verified server-side
  before any email is sent.
- A hidden honeypot field; submissions that fill it in are silently discarded.
- A [rate limit](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/)
  of 5 submissions per minute per IP address.
- Astro's built-in `Origin` check, which rejects cross-site form posts.

### Setup

1. Set up [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/) for
   `kenilworthparents.ca` and verify the destination address. The `destination_address` in
   `wrangler.jsonc` must match `contact.email` in `src/data/site.ts`, and `CONTACT_FROM_EMAIL`
   must be an address on the domain.
2. Create a Turnstile widget in the Cloudflare dashboard for the site's hostname. Put the
   **site key** in `TURNSTILE_SITE_KEY` in `wrangler.jsonc`, and store the **secret key** with
   `npx wrangler secret put TURNSTILE_SECRET_KEY`.

Until the site key is set, the form is hidden and visitors are asked to email instead. If the
secret key is missing, submissions are rejected rather than sent without verification.

For local development, create a `.dev.vars` file using Cloudflare's
[Turnstile test keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/):

```ini
TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

Emails sent during `npm run dev` are not delivered; Wrangler logs them and writes them to
`.wrangler/tmp/email/`.
