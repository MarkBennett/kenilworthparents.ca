// Site content for the Kenilworth School Parent Association.
// Update the values below to change what appears on the home page.

export interface Executive {
  role: string;
  name: string;
}

export interface Fundraiser {
  name: string;
  description: string;
  /** Human-readable date or date range, e.g. "November 1 – 30, 2026". */
  dates?: string;
  /** Optional link for more information or to participate. */
  url?: string;
}

export const site = {
  name: 'Kenilworth School Parent Association',
  shortName: 'Kenilworth Parents',
  description:
    'The Kenilworth School of Edmonton Parent Association supports students, families, and staff through community-building and fundraising.',

  mission:
    'We bring together parents, guardians, and staff of Kenilworth School to support student learning and well-being. We build community, share information, and raise funds for programs, resources, and events that enrich the school experience for every child.',

  contact: {
    // TODO: Confirm the association's contact email address.
    email: 'info@kenilworthparents.ca',
  },

  // TODO: Replace with the association's confirmed mailing address.
  mailingAddress: {
    recipient: 'Kenilworth School Parent Association',
    lines: ['c/o Kenilworth School', 'Street address to be confirmed'],
    city: 'Edmonton',
    province: 'AB',
    postalCode: '',
    country: 'Canada',
  },

  // TODO: Fill in the names of the current executive members.
  executives: [
    { role: 'Chair', name: 'To be announced' },
    { role: 'Vice-Chair', name: 'To be announced' },
    { role: 'Treasurer', name: 'To be announced' },
    { role: 'Secretary', name: 'To be announced' },
  ] as Executive[],

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
