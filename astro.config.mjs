// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import logoLight from "./public/logo-light.svg";
import logoDark from "./public/logo-dark.svg";
import { sidebar } from "./src/sidebar";
import { socials } from "./src/content/links";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Start UI Documentation",
      logo: {
        dark: logoDark,
        light: logoLight,
        alt: "Start UI",
        replacesTitle: true,
      },

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
      sidebar: sidebar,
    }),
  ],
});
