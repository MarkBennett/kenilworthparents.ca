// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  session: false,
  vite: {
    css: {
      // Lightning CSS compiles @custom-media, letting breakpoints be named constants.
      transformer: 'lightningcss',
      lightningcss: { drafts: { customMedia: true } },
    },
  },
});