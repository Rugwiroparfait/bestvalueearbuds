// @ts-check

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite'; // This is the correct setup for Tailwind v4

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    sitemap(), 
    icon() 
  ],
  vite: {
    plugins: [tailwindcss()], // Add Tailwind as a Vite plugin
  },
});