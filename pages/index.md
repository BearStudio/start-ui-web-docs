# Introduction

**🚀 Start-UI** is an opinionated frontend starter repository created & maintained by the [BearStudio](https://bearstudio.fr) Team and other contributors.
It represents our team's up-to-date stack that we use when creating web apps for our clients.

## Getting Started

```bash
npx create-start-ui@latest --web myApp
```

That will scaffold a new folder with the latest version of 🚀 Start UI [web] 🎉
Then just go to the created folder and start the dev server.

```bash
cd myApp
yarn dev
```

## Installation

```bash
yarn install
yarn build
```

### Development

```bash
yarn dev
```

### Storybook

```bash
yarn storybook
```

### Production

#### NodeJS (recommended)

```bash
yarn install
yarn storybook:build # Optional: Will expose the Storybook at `/storybook`
yarn build
yarn start
```

#### Docker

1. Build the Docker image (replace `start-ui-web` with your project name)

```
docker build -t start-ui-web .
```

2. Run the Docker image (replace `start-ui-web` with your project name)

```
docker run -p 80:3000 start-ui-web
```

Application will be exposed on port 80 ([http://localhost](http://localhost))

#### Static files

```bash
yarn storybook:build # Optional: Will expose the Storybook at `/storybook/index.html`
yarn static:build
```

Then expose the `/out` folder.

💡 You will need to setup your server to rewrite all `/app/*` urls to serve the `app.html` file.

##### Using Apache as your web server

If you are using [apache](https://httpd.apache.org/) to statically deploy your app, you can use the following configuration for `public/.htaccess` :

```bash
# public/.htaccess
Options -MultiViews
RewriteEngine On

# Rewrite /app/* to app.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule "^app/" "app.html" [QSA,L]
```
