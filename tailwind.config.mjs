/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#02284d',
        'primary-dark': '#011a33',
        'primary-light': '#03396d',
        secondary: '#229807',
        'secondary-dark': '#1a7605',
        'secondary-light': '#2eb309',
        white: '#ffffff',
        'light-gray': '#f8f9fa',
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      }
    },
  },
  plugins: [],
}