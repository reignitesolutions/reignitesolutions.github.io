import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'

export default defineConfig({
  // Your live site URL — required for sitemap and canonical generation
  site: 'https://reignites.co.uk',

  integrations: [
    // Tailwind CSS integration (default preflight and purge enabled)
    tailwind(),

    // Sitemap generator (uses the `site` value above)
    sitemap(),

    // Compression integration for minified, lightweight production output
    compress({
      html: true,
      css: true,
      js: true,
      svg: true,
      // Skip image compression here (handle via Cloudflare or external tools)
      image: false,
      gzip: true,
      brotli: true,
    }),
  ],

  vite: {
    build: {
      // Show compressed size stats when building
      reportCompressedSize: true,
    },
  },
})