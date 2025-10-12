import type { StarlightUserConfig } from "@astrojs/starlight/types";

export const socials = [
  {
    icon: "github",
    label: "GitHub",
    href: "https://github.com/BearStudio/start-ui-web-docs/",
  },
  {
    icon: "discord",
    label: "Discord",
    href: "https://go.bearstudio.fr/discord",
  },
] satisfies StarlightUserConfig["social"];

export const extraLinks = [
  {
    label: "Contact",
    href: "https://twitter.com/startui_",
    isExternal: true,
  },
  { label: "About", href: "about" },
];
