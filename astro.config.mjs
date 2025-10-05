import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bespokefloorsanding.ie',
  integrations: [sitemap()],
  output: 'static',
});