import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true, // allows external connections
    port: 3000,
    strictPort: true,
    allowedHosts: ['.bestvalueearbuds.com', 'localhost']
  }
});

