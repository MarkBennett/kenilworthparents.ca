// Site content for the Kenilworth School Parent Association.
// Update the values below to change what appears on the home page.

import presidentPhoto from '../assets/president-headshot.jpg';

export interface Fundraiser {
  name: string;
  description: string;
  /** Human-readable date or date range, e.g. "November 1 – 30, 2026". */
  dates?: string;
  /** Optional call-to-action button, e.g. to sign up or learn more. */
  cta?: {
    label: string;
    url: string;
  };
}

const KPA_NAME = 'Kenilworth Parent Association (KPA)';

export const site = {
  name: KPA_NAME,
  shortName: 'KPA',
  description:
    `The ${KPA_NAME} supports students, families, and staff through community-building and fundraising.`,

  mission:
    'We bring together parents, guardians, and community of Kenilworth School to support student learning and well-being. We work to build community, share information, and raise funds for programs, resources, and events that enrich the school experience for every child.',

  presidentMessage: {
    message:
      'Welcome to Kenilworth! Our Parent Association is strongest when families share their time and ideas. Whether you can help at an event, support a fundraiser, or join a committee, your contribution makes a difference. We’d love to meet you; get in touch and find a way to get involved.',
    name: 'Mark Bennett',
    title: 'President',
    /** Square headshot in src/assets; shown as a small round avatar. */
    photo: presidentPhoto,
  },

  // Mentions of the school in the mission are linked here automatically.
  school: {
    name: 'École Kenilworth School',
    url: 'https://kenilworth.epsb.ca/',
  },

  contact: {
    email: 'kenilworth.parent.association@gmail.com',
  },

  mailingAddress: {
    recipient: KPA_NAME,
    lines: ['c/o École Kenilworth School', '7005 89 Ave NW'],
    city: 'Edmonton',
    province: 'AB',
    postalCode: 'T6B 0N3',
    country: 'Canada',
  },

  fundraisers: [
    {
      name: 'Bottle Drive',
      description:
        'We host regular bottle drives where you can drop off your refundable bottles and cans at the school to help fund classroom resources.',
      dates: 'Dates to be announced',
    },
    {
      name: 'Casino',
      // TODO: confirm the description, e.g. whether volunteers are needed and what the funds support.
      description:
        'Our casino fundraiser raises funds for programs, resources, and events at the school.',
      dates: 'Spring 2027',
      cta: { label: 'Sign Up To Volunteer', url: '/#contact' },
    },
  ] as Fundraiser[],
};
