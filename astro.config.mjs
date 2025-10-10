// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import { sidebar } from "./src/config/sidebar";
import { socials } from "./src/content/links";
import { head } from "./src/config/head";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Start UI Documentation",
      logo: {
        dark: "/public/logo-dark.svg",
        light: "/public/logo-light.svg",
        alt: "Start UI",
        replacesTitle: true,
      },
      favicon: "/favicon.ico",

      head,
      components: {
        SocialIcons: "./src/components/overrides/SocialIcons.astro",
        Footer: "./src/components/overrides/Footer.astro",
      },
      editLink: {
        baseUrl: "https://github.com/BearStudio/start-ui-web-docs/blob/main",
      },

      credits: true,
      customCss: ["./src/styles/app.css"],
      social: socials,
      sidebar,
    }),
  ],
});
