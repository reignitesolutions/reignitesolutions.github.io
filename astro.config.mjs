import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.reignites.co.uk",
  output: "static",
  adapter: cloudflare(),

  integrations: [
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
    plugins: [tailwindcss()],
    build: {
      reportCompressedSize: true,
    },
  },
});