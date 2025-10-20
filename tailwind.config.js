/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is the main configuration file for Tailwind CSS.
  // It tells Tailwind where to find your files to scan for class names.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};