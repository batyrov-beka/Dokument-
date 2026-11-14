// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL: сайт жайгаштырылган даректи ушул жерге жазыңыз (мисалы, https://kantip.kg)
export default defineConfig({
  site: process.env.SITE_URL || 'https://kantip-kg.netlify.app',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
