/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the crucial line that tells Next.js to export a static site.
  output: 'export',
  
  // This is required for your site to work on GitHub Pages,
  // as it hosts your site in a subdirectory.
  basePath: '/reignitesolutions.github.io',
};

export default nextConfig;