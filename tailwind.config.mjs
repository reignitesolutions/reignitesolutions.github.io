/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        surface: 'rgb(255 255 255)',
        ink: 'rgb(26 26 26)',
        black: 'rgb(0 0 0)',
        accent: 'rgb(225 6 0)',
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'system-ui', 'sans-serif'],
        display: ['"Noto Sans Display"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};