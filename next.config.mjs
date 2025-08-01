/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to export as static HTML/CSS/JS

  // Configuration for GitHub Pages:
  // When hosted at https://reignitesolutions.github.io/
  // basePath should be an empty string if it's the root domain.
  basePath: '',
  assetPrefix: '',
};

export default nextConfig; // Use 'export default' for .mjs files