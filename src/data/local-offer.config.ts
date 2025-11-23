// src/data/local-offer.config.ts

export const offerLive = true;          // flip to false to stop offer
export const totalSlots = 16;
export const slotsRemaining = 10;       // update manually as slots go

export const discountPercent = 50;

// Eligibility list locked to 5 miles of Ilkley town centre
export const eligiblePlaces = [
  'Ilkley',
  'Ben Rhydding',
  'Burley-in-Wharfedale',
  'Menston',
  'Addingham',
  'Middleton',
];

export const quickStartPacks = [
  {
    name: 'Brand and website refresh',
    href: '/brand-website-refresh',
    desc: 'Modernise your logo and site without starting again.',
    before: '£500 to £1,000',
    after:  '£250 to £500',
    timeline: 'About 14 days once content is ready.',
    iconKey: 'Sparkles',
    highlight: false,
    popular: false,
  },
  {
    name: 'LaunchPad starter build',
    href: '/launchpad',
    desc: 'A simple new website or landing page that you can actually use.',
    before: '£600 to £1,500',
    after:  '£300 to £750',
    timeline: '7 to 14 days.',
    iconKey: 'Zap',
    highlight: true,
    popular: true, // most popular pill
  },
  {
    name: 'Outcomes First diagnostic',
    href: '/outcomes-first',
    desc: 'Brutal clarity on what result you want and what work will help.',
    before: '£500',
    after:  '£250',
    timeline: '48 to 72 hours.',
    iconKey: 'CheckCircle2',
    highlight: false,
    popular: false,
  },
  {
    name: 'Work Unblocked session',
    href: '/work-unblocked',
    desc: 'One stuck delivery problem, unpicked properly.',
    before: '£500',
    after:  '£250',
    timeline: '48 to 72 hours.',
    iconKey: 'Hammer',
    highlight: false,
    popular: false,
  },
];

export const otherServicesNote =
  `Yes. The same ${discountPercent}% hello discount applies to any ONE Reignite service booked under this offer
   (including Design Ignited pages, Team Accelerator, Engine Room, Leadership on Tap, Mission Control, or a larger build).
   One project per business, first come first served.`;
