import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-theme-one.vercel.app/",
  integrations: [tailwind(), icon(), sitemap()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
