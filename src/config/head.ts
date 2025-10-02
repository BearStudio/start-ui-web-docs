import type { StarlightUserConfig } from "@astrojs/starlight/types";

export const head: StarlightUserConfig["head"] = [
  {
    tag: "meta",
    attrs: { name: "msapplication-TileColor", content: "#000000" },
  },
  { tag: "meta", attrs: { name: "theme-color", content: "#000000" } },
  {
    tag: "meta",
    attrs: {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  },
  {
    tag: "meta",
    attrs: { "http-equiv": "Content-Language", content: "en" },
  },
  {
    tag: "meta",
    attrs: {
      name: "description",
      content:
        "Documentation of Start UI [web], an opinionated UI starter for React. From Bearstudio team",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "og:description",
      content:
        "Documentation of Start UI [web], an opinionated UI starter for React. From Bearstudio team",
    },
  },
  {
    tag: "meta",
    attrs: { name: "twitter:card", content: "summary_large_image" },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:image",
      content:
        "https://github.com/BearStudio/start-ui-web/raw/master/assets/thumbnail.png",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:site:domain",
      content: "https://github.com/bearstudio/start-ui-web-doc",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:url",
      content: "https://github.com/bearstudio/start-ui-web-doc",
    },
  },
  {
    tag: "meta",
    attrs: { name: "og:title", content: "Start UI [web] documentation" },
  },
  {
    tag: "meta",
    attrs: {
      name: "og:image",
      content:
        "https://github.com/BearStudio/start-ui-web/raw/master/assets/thumbnail.png",
    },
  },
  {
    tag: "link",
    attrs: { rel: "icon", href: "/favicon-16x16.png", type: "image/png" },
  },
];
