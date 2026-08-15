import { fileURLToPath } from 'node:url';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.websitesbybachitter.workers.dev',
  session: false,
  output: 'static',
  adapter: cloudflare({
    imageService: 'compile',
    prerenderEnvironment: 'node',
  }),
  integrations: [sitemap()],
  trailingSlash: 'never',
  devToolbar: {
    enabled: false,
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@photos': fileURLToPath(new URL('./assets', import.meta.url)),
      },
    },
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: 'Instrument Sans',
      cssVariable: '--font-instrument-sans',
      provider: fontProviders.fontsource(),
      weights: ['400', '500', '600', '700'],
      styles: ['normal'],
      subsets: ['latin'],
      formats: ['woff2', 'woff'],
    },
    {
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      provider: fontProviders.fontsource(),
      weights: ['400', '500', '600'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      formats: ['woff2', 'woff'],
    },
  ],
});
