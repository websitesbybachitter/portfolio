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
  email: string;
  mailtoHref: string;
  title: string;
  description: string;
  bookCallHref: string;
  ogTagline: string;
  introParagraphs: string[];
  pastClients: PastClient[];
  pricingPlans: PricingPlan[];
  faq: FaqItem[];
  hoverPhotos: HoverPhotoGroup[];
}

const name = 'Bachitter Singh';
const email = 'websitesbybachitter@gmail.com';

const pastClients = [
  { name: 'Vancouver Railings', url: 'https://vancouverrailings.com/' },
  { name: 'GRM Closets & Shower Doors', url: 'https://grmclosetsandshowerdoors.com/' },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 'CAD 599',
    description: 'For a business that needs a clear, professional online presence.',
    features: [
      'One-page website',
      'Custom design',
      'Responsive design',
      'Contact form',
      'Basic SEO',
    ],
  },
  {
    name: 'Business',
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
    name: 'Growth',
    price: 'CAD 2,499+',
    description: 'For larger websites, more complex functionality, or custom requirements.',
    features: [
      'Everything in Business',
      'More complex functionality',
      'CMS or editable content',
      'Advanced SEO setup',
    ],
  },
] satisfies PricingPlan[];

const faq = [
  {
    question: 'How long does it take?',
    answer:
      "Somewhere between two and six weeks, depending on how much we're building. You'll get a firm deadline before we start, and I'll keep it.",
  },
  {
    question: 'Is there support after launch?',
    answer:
      "Yes. Once the site is live you're not on your own. I'm around for questions and fixes, and if you want regular changes there are maintenance plans from $49 a month, depending on how much editing you need.",
  },
  {
    question: 'What do you build with?',
    answer:
      'Astro. It ships as static files, so the site loads fast and stays fast, and the code is simple enough that you can host it anywhere. The site stays yours.',
  },
  {
    question: 'How do we get started?',
    answer:
      "Once we agree on scope and price, you pay 50% upfront and the rest when it's done. We work over WhatsApp, Telegram, or email. It takes a few days before there's something to look at; we go through it together and refine until it's right.",
  },
] satisfies FaqItem[];

export const siteConfig: SiteConfig = {
  name,
  email,
  mailtoHref: `mailto:${email}?subject=Website%20inquiry`,
  title: `${name} — Web designer and developer`,
  description:
    'Independent web designer and developer. I build fast, clean websites from a small studio.',
  bookCallHref: `https://cal.com/websitesbybachitter/free-discovery-call`,
  ogTagline: 'Fast, readable websites — yours to keep.',
  introParagraphs: [
    "I'm Bachitter, from Punjab, India. I spent six and a half years in Vancouver before moving back home, and somewhere along the way I got pulled into clean design, photography, and the small details that make things feel considered. I like figuring out how things are put together, then making them simpler and easier to use.",
    'Now I build fast, readable websites for contractors and local businesses from a small one-person studio. You work directly with me on the design, build, and small changes after launch, so the site feels clear, useful, and made for the business it represents.',
  ],
  pastClients,
  pricingPlans,
  faq,
  hoverPhotos: [
    {
      word: 'bachitter',
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
      word: 'punjab',
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
