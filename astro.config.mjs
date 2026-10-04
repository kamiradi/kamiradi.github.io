import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kamiradi.github.io',
  publicDir: 'images',
  integrations: [sitemap()],
});
