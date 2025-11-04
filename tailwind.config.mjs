// tailwind.config.mjs
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: 'rgb(255 255 255)',
        ink: 'rgb(26 26 26)',
        black: 'rgb(0 0 0)',
        accent: 'rgb(225 6 0)', // Ignite Red
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
        display: ['"Noto Sans Display"', '"Noto Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};
