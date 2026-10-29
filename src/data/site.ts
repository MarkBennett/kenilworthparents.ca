// Site content for the Kenilworth School Parent Association.
// Update the values below to change what appears on the home page.

import presidentPhoto from '../assets/president-headshot.jpg';

export interface Fundraiser {
  name: string;
  description: string;
  /** Human-readable date or date range, e.g. "November 1 – 30, 2026". */
  dates?: string;
  /** Optional link for more information or to participate. */
  url?: string;
}

const KPA_NAME = 'Kenilworth School Parent Association (KPA)';

export const site = {
  name: KPA_NAME,
  shortName: 'KPA',
  description:
    `The ${KPA_NAME} supports students, families, and staff through community-building and fundraising.`,

  mission:
    'We bring together parents, guardians, and staff of Kenilworth School to support student learning and well-being. We work to build community, share information, and raise funds for programs, resources, and events that enrich the school experience for every child.',

  presidentMessage: {
    message:
      'Welcome to Kenilworth! Our Parent Association is strongest when families share their time and ideas. Whether you can help at an event, support a fundraiser, or join a committee, your contribution makes a difference. We’d love to meet you; get in touch and find a way to get involved.',
    // TODO: Confirm the president's name.
    name: 'Mark Bennett',
    title: 'President',
    /** Square headshot in src/assets; shown as a small round avatar. */
    photo: presidentPhoto,
  },

  contact: {
    email: 'kenilworth.parent.association@gmail.com',
  },

  // TODO: Replace with the association's confirmed mailing address.
  mailingAddress: {
    recipient: KPA_NAME,
    lines: ['c/o École Kenilworth School', '7005 89 Ave NW'],
    city: 'Edmonton',
    province: 'AB',
    postalCode: 'T6B 0L5',
    country: 'Canada',
  },

  // TODO: List the fundraisers that are currently running.
  fundraisers: [
    {
      name: 'Hot Lunch Program',
      description:
        'Order healthy hot lunches for your child. A portion of every order supports school programs.',
      dates: 'Ongoing throughout the school year',
    },
    {
      name: 'Bottle Drive',
      description:
        'Drop off your refundable bottles and cans at the school to help fund classroom resources.',
      dates: 'Dates to be announced',
    },
  ] as Fundraiser[],
};
