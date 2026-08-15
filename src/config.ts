import type { ImageMetadata } from 'astro';
import bachitterDrivingNight from '@photos/bachitter-driving-night.jpg';
import bachitterSeated from '@photos/bachitter-seated.jpg';
import photographyLibrary from '@photos/photography-library-bookshelves.JPG';
import photographyVancouverNight from '@photos/photography-vancouver-harbour-centre-night.jpg';
import photographySunset from '@photos/photography-vancouver-sunset-silhouette.jpg';
import vancouverSkytrain from '@photos/vancouver-metrotown-skytrain.JPG';
import vancouverBusStop from '@photos/vancouver-rainy-bus-stop.JPG';
import vancouverWaterfront from '@photos/vancouver-waterfront-mountains-sunset.JPG';

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
  hoverPhotos: HoverPhotoGroup[];
}

const name = 'Bachitter Chahal';
const email = 'websitesbybachitter@gmail.com';

const pastClients = [
  { name: 'Vancouver Railings', url: 'https://vancouverrailings.com/' },
  { name: 'GRM Closets & Shower Doors', url: 'https://grmclosetsandshowerdoors.com/' },
];

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
  hoverPhotos: [
    {
      word: 'bachitter',
      photos: [
        // {
        //   src: bachitterMirrorSelfie,
        //   alt: 'Mirror selfie of Bachitter',
        // },
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
