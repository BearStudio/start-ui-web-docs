import type { StarlightUserConfig } from "@astrojs/starlight/types";

export const sidebar: StarlightUserConfig["sidebar"] = [
  { label: "Introduction", slug: "" },
  { slug: "getting-started" },
  { slug: "technologies" },
  { slug: "features", badge: { text: "WIP", variant: "caution" } },
  {
    slug: "folders-architecture",
    badge: { text: "WIP", variant: "caution" },
  },
  {
    label: "Tutorials",
    autogenerate: { directory: "tutorials" },
    badge: { text: "WIP", variant: "caution" },
  },
  {
    label: "Guides",
    autogenerate: { directory: "guides" },
    badge: { text: "WIP", variant: "caution" },
  },
];
