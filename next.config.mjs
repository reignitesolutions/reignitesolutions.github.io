/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js to export a static site.
  output: "export",

  // This is a dynamic basePath configuration.
  // It checks for the BASE_PATH environment variable set in our build script.
  // When you run 'npm run start:static' locally, BASE_PATH is not set, so it's null.
  // When you run 'npm run build' for deployment, it uses the correct path for GitHub Pages.
  basePath: process.env.BASE_PATH || null
};

// Use ES module syntax 'export default' for a .mjs file.
export default nextConfig;