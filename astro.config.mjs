import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ['@fortawesome/*']
    }
  },
  output: 'static',
  build: {
    assets: 'assets',
    copyPublicDir: true
  },
  outDir: 'dist',
  publicDir: 'public',
  trailingSlash: 'never'
});