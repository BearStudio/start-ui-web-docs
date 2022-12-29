<h1 align="center"><img src="assets/thumbnail.png" alt="Start UI Web" /></h1>

🚀 Start UI <small>[web]</small> is an opinionated frontend starter repository created & maintained by the [BearStudio Team](https://www.bearstudio.fr/team) and other contributors.
It represents our team's up-to-date stack that we use when creating web apps for our clients.

# This is Start UI [web] documentation repository

🚧 Is still in progress

# Contribution

## Getting Started

```bash
yarn
yarn dev
```

The documentation uses Nextra from Vercel, so it's based on NextJS. You can check the [documentation](https://nextra.site) for more information.

## Components

Some components have been developed and could be used in documentation pages.

### `ImageTabs`

A component to display images as content of Nextra Tabs component. It is used to display screenshots as desktop or mobile version.

### `Stack`

Flex container that allows to define direction and gap.

### `ResponsiveStack`

Horizontal Stack which will become vertical when the device width is lower than breakpoint prop (default is to 768px)

### `WorkInProgress`

Component based on Nextra Callout, to warn user that a page is not yet written.
