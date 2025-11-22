import { defineConfig } from 'astro/config'
import cloudflare from "@astrojs/cloudflare";
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'

export default defineConfig({
  site: 'https://www.reignites.co.uk',
  output: "static",
  adapter: cloudflare(),

  integrations: [
    tailwind(),
    sitemap(),
    compress({
      html: true,
      css: true,
      js: true,
      svg: true,
      image: false,
      gzip: true,
      brotli: true,
    }),
  ],
  vite: {
    build: {
      reportCompressedSize: true,
    },
  },
})