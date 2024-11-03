/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'cottage': {
            100: '#f7f3eb',
            200: '#e5d5b7',
            800: '#44403c',
          }
        }
      },
    },
    plugins: [],
  }