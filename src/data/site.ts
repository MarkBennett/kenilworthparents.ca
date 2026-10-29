// Site content for the Kenilworth Parent Association (KPA).
// Update the values below to change what appears on the site.

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

export interface SupportArea {
  name: string;
  description: string;
  /** Optional spending figure shown as a badge, e.g. "$6,000+ a year". */
  figure?: string;
  icon: LineIconName;
}

export interface WayToHelp {
  name: string;
  description: string;
  icon: LineIconName;
  cta: {
    label: string;
    url: string;
  };
}

/** The line icons drawn by src/components/LineIcon.astro. */
export type LineIconName =
  | 'laptop'
  | 'ticket'
  | 'book'
  | 'star'
  | 'heart'
  | 'gift'
  | 'calendar'
  | 'users';

const KPA_NAME = 'Kenilworth Parent Association (KPA)';
const SCHOOLZONE_URL = 'https://schoolzone.epsb.ca';

export const site = {
  name: KPA_NAME,
  shortName: 'KPA',
  description:
    `The ${KPA_NAME} is an independent not-for-profit that supports the students, families, and staff of École Kenilworth School through community-building and fundraising.`,

  // Shown in the footer of every page.
  independence:
    'The KPA is an independent not-for-profit organization. It is not part of École Kenilworth School or Edmonton Public Schools (EPSB), and does not act for or represent either.',

  mission:
    'We bring together parents, guardians, and community of Kenilworth School to support student learning and well-being. We work to build community, share information, and raise funds for programs, resources, and events that enrich the school experience for every child.',

  presidentMessage: {
    message:
      'Welcome to the Kenilworth Parent Association! Our association is strongest when families share their time and ideas. Whether you can help at an event, support a fundraiser, or join a committee, your contribution makes a difference. We’d love to meet you; find a way to get involved that suits you best!',
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
    email: 'info@kenilworthparents.ca',
  },

  // Meeting dates and events are posted on the SchoolZone calendar.
  schoolZoneUrl: SCHOOLZONE_URL,

  // Our office is in the school, and it's also our mailing address.
  officeAddress: {
    recipient: KPA_NAME,
    lines: ['École Kenilworth School', '7005 89 Ave NW'],
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
      description:
        'The casino contributes the majority of our fundraising budget. Volunteering at the casino is simple, and a meal is supplied. If you pick one fundraiser to volunteer for, this is the one!',
      dates: 'Spring 2027',
      cta: { label: 'Sign Up To Volunteer', url: '/contact' },
    },
    {
      name: 'Donate Through SchoolZone',
      description:
        'Make a donation from the Fees section of SchoolZone. The school passes it on to the KPA to support everything we do.',
      dates: 'Any time',
      cta: { label: 'Donate on SchoolZone', url: SCHOOLZONE_URL },
    },
  ] as Fundraiser[],

  // The ways we support the school, shown on the What We Do page.
  supportAreas: [
    {
      name: 'Chromebooks',
      description:
        'We buy the shared Chromebooks that students in every grade use to learn, spending over $20,000 most years.',
      figure: '$20,000+ most years',
      icon: 'laptop',
    },
    {
      name: 'Field Trips & Special Events',
      description:
        'Together with the school, we pay for most field trips and special events each year, including Quest Theatre’s Shakespeare play.',
      figure: '$6,000+ a year',
      icon: 'ticket',
    },
    {
      name: 'Classroom & Library Resources',
      description:
        'We fund the tools that make lessons possible, from library resources to a new gym crash mat and a saw for the shop class.',
      icon: 'book',
    },
    {
      name: 'Clubs',
      description:
        'We help fund student clubs, giving kids more ways to explore their interests and make friends.',
      icon: 'star',
    },
    {
      name: 'Supporting Families',
      description: 'We help make sure every student has what they need to learn.',
      icon: 'heart',
    },
    {
      name: 'Teacher & Staff Appreciation',
      description:
        'We thank Kenilworth’s teachers and staff with snacks and a fun celebration at the end of the year.',
      icon: 'gift',
    },
  ] as SupportArea[],

  // The ways parents can help, shown on the Get Involved page.
  waysToHelp: [
    {
      name: 'Volunteer at a Fundraiser',
      description:
        'Our fundraisers run on volunteers. The casino is the big one: it raises the majority of our budget, the shifts are simple, and a meal is supplied.',
      icon: 'calendar',
      cta: { label: 'Sign Up To Volunteer', url: '/contact' },
    },
    {
      name: 'Donate',
      description:
        'Donate any time from the Fees section of SchoolZone. The school passes your donation on to the KPA.',
      icon: 'heart',
      cta: { label: 'Donate on SchoolZone', url: SCHOOLZONE_URL },
    },
    {
      name: 'Join the KPA or a Committee',
      description:
        'Help plan events and fundraisers alongside other parents. Get in touch and we’ll find a role that suits you.',
      icon: 'users',
      cta: { label: 'Get in Touch', url: '/contact' },
    },
  ] as WayToHelp[],
};
