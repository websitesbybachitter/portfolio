import bachitterDrivingNight from '@photos/bachitter-driving-night.jpg';
import bachitterSeated from '@photos/bachitter-seated.jpg';
import photographyLibrary from '@photos/photography-library-bookshelves.JPG';
import photographyVancouverNight from '@photos/photography-vancouver-harbour-centre-night.jpg';
import photographySunset from '@photos/photography-vancouver-sunset-silhouette.jpg';
import vancouverSkytrain from '@photos/vancouver-metrotown-skytrain.JPG';
import vancouverBusStop from '@photos/vancouver-rainy-bus-stop.JPG';
import vancouverWaterfront from '@photos/vancouver-waterfront-mountains-sunset.JPG';
import type { ImageMetadata } from 'astro';

export interface PastClient {
  name: string;
  url: string;
}

export interface HoverPhoto {
  src: ImageMetadata;
  alt: string;
}

export interface HoverPhotoGroup {
  word: string;
  photos: HoverPhoto[];
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  studioName: string;
  email: string;
  mailtoHref: string;
  title: string;
  description: string;
  bookCallHref: string;
  heroTitle: string;
  heroSubtitle: string;
  pricingNote: string;
  introParagraphs: string[];
  aboutParagraphs: string[];
  pastClients: PastClient[];
  pricingPlans: PricingPlan[];
  faq: FaqItem[];
  hoverPhotos: HoverPhotoGroup[];
}

const name = 'Bachitter Singh';
const studioName = 'Websites by Bachitter';
const email = 'websitesbybachitter@gmail.com';

const heroTitle = 'Websites for contractors & local businesses';
const heroSubtitle = 'Custom design and development, built directly with you.';

const pastClients = [
  { name: 'Vancouver Railings', url: 'https://vancouverrailings.com/' },
  { name: 'GRM Closets & Shower Doors', url: 'https://grmclosetsandshowerdoors.com/' },
];

const pricingPlans = [
  {
    name: 'Simple site',
    price: 'CAD 599',
    description: 'For a business that needs a simple, professional website.',
    features: [
      'One-page website',
      'Custom design',
      'Responsive design',
      'Contact form',
      'Basic SEO',
    ],
  },
  {
    name: 'Contractor website',
    price: 'CAD 1,499',
    description: 'For contractors and service businesses.',
    features: [
      'Up to 5 pages',
      'Custom design and development',
      'Projects or portfolio',
      'Testimonials',
      'Contact or quote form',
      'Basic SEO',
      'Analytics and launch setup',
    ],
  },
  {
    name: 'Custom project',
    price: 'CAD 2,499+',
    description: 'For larger websites or projects with more complex requirements.',
    features: [
      'Everything included in the Contractor Website',
      'More complex functionality',
      'CMS or editable content',
      'Advanced SEO setup',
    ],
  },
] satisfies PricingPlan[];

const faq = [
  {
    question: 'How long does a website take?',
    answer:
      "Somewhere between two and six weeks, depending on how much we're building. You'll get a firm deadline before we start, and I'll keep it.",
  },
  {
    question: 'What do you need from me?',
    answer:
      "Less than you might expect. If you have photos, a logo, or a list of your services, that's a great start. If you don't, we'll figure it out together. I'll ask a few questions about your business, handle the design and writing, and keep the back-and-forth to WhatsApp, Telegram, or email — whichever you prefer.",
  },
  {
    question: 'Will I be able to update the website?',
    answer:
      "That depends on how your website is set up. If your project includes a CMS, you'll be able to update the agreed content yourself without touching code. For websites without editable content, you can request changes whenever you need them. One-off updates can be quoted separately, or ongoing changes can be covered by a maintenance plan. The website and its accounts remain under your ownership, so you're never locked in.",
  },
  {
    question: 'Is support available after launch?',
    answer:
      "Yes. I'll fix any issues caused by my work after launch and answer any questions about handing over the website. Future updates or ongoing support can be quoted separately or covered through a maintenance plan.",
  },
] satisfies FaqItem[];

export const siteConfig: SiteConfig = {
  name,
  studioName,
  email,
  mailtoHref: `mailto:${email}?subject=Website%20inquiry`,
  title: `${studioName} — Web designer & developer`,
  description:
    'Custom-designed, fast websites for contractors and local businesses. Built directly with you, from design to launch.',
  bookCallHref: `https://cal.com/websitesbybachitter/free-discovery-call`,
  heroTitle,
  heroSubtitle,
  pricingNote: 'Every project is quoted based on its scope.',
  introParagraphs: [
    'A website should do more than just look good. It should help people understand your business, trust it, and choose you.',
    'I design and build custom websites with that in mind — clear, considered, and made around the business behind them.',
  ],
  aboutParagraphs: [
    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ (Sat Sri Akal ji). I'm ਬਚਿੱਤਰ (Bachitter). I grew up in ਪੰਜਾਬ (Punjab), India, spent six and a half years living in Vancouver, and eventually found my way back home.",
    'Somewhere along the way, I became interested in clean design, photography, and the small details that make things feel considered. I like figuring out how things are put together, then making them simpler and easier to use.',
  ],
  pastClients,
  pricingPlans,
  faq,
  hoverPhotos: [
    {
      word: 'ਬਚਿੱਤਰ',
      photos: [
        {
          src: bachitterSeated,
          alt: 'Bachitter sitting with his phone',
        },
        {
          src: bachitterDrivingNight,
          alt: 'Driving at night',
        },
      ],
    },
    {
      word: 'ਪੰਜਾਬ',
      photos: [],
    },
    {
      word: 'vancouver',
      photos: [
        {
          src: vancouverWaterfront,
          alt: 'Waterfront and mountains at sunset',
        },
        {
          src: vancouverSkytrain,
          alt: 'SkyTrain at Metrotown',
        },
        {
          src: vancouverBusStop,
          alt: 'Rainy bus stop in Vancouver',
        },
      ],
    },
    {
      word: 'photography',
      photos: [
        {
          src: photographyVancouverNight,
          alt: 'Harbour Centre illuminated at night in Vancouver',
        },
        {
          src: photographySunset,
          alt: 'Silhouette at sunset',
        },
        {
          src: photographyLibrary,
          alt: 'Library bookshelves',
        },
      ],
    },
  ],
};
