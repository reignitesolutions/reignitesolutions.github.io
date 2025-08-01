/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is crucial for creating a static export that can be hosted on GitHub Pages.
  output: 'export', 

  // This is the key fix. It tells Next.js to prefix all paths with the repository name.
  // Replace 'reignitesolutions' with your actual repository name if it's different.
  basePath: '/reignitesolutions',

  // To prevent Next.js from trying to optimize images on a static site, which
  // can cause a build error.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;