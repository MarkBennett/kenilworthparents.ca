// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  // The site doesn't use sessions. Disabling them stops the Cloudflare adapter from
  // adding a `SESSION` KV binding, which has no namespace ID and fails `wrangler preview`.
  session: false,
});
