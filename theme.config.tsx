import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>🚀 Start UI</span>,
  project: {
    link: "https://github.com/bearstudio/start-ui-web",
  },
  chat: {
    link: "https://go.bearstudio.fr/discord",
  },
  docsRepositoryBase: "https://github.com/bearstudio/start-ui-web",
  footer: {
    text: "Nextra Docs Template",
  },
  primaryHue: { dark: 60, light: 250 },
};

export default config;
