---
title: Simple SSR React App + Styled Components + Docker.
excerpt: Building a simple SSR react app to use styled components and docker
Tools:
  [
    "SSR",
    "Express",
    "React",
    "Styled Components",
    "ReactDOM",
    "Webpack",
    "Docker",
  ]
---

# Simple SSR React App + Styled Components + Docker

Practice server side rendering of react with styled components and using docker to run it.

#### For local development

We are using `pnpm` to run and install dependencies.

> pnpm install --- Install dependencies
> pnpm run dev -- Run the scripts locally with watch command, so that we get refresh on server and client side.

Locally we have two options to run scripts in watch mode

> nodemon -- Nodemon is a common option to watch for folders and run a specific script on every change, for example `"nodemon --watch ./src --exec \"npm run build \""`. Nodemon can also run as a plugin with `webpack` and not run it as a script `plugins: [new NodemonPlugin()]`.
> webpack watch mode - We can also use the webpack `watch` mode to automatically watch for files and re-run the webpack.
> `cross-env NODE_ENV=development webpack --config webpack.server.config.js --watch`

**_ NOTE _**
We are not using docker locally because, Docker was not working well with the watch mode in parallel mode.

#### Styled Component in SSR

To use styled component with SSR we need to use the sever stylesheet function and seal the styles.

```js
const sheet = new ServerStyleSheet();
const htmlContent = renderToString(sheet.collectStyles(<App />));
const styleTags = sheet.getStyleTags();
sheet.seal();
```

### For Production

We can run docker `docker-compose up --build`

### Docker

- docker build . <imageId>
- docker run -p 5000:3000 <imageId>
- docker volumes --- to map local files to docker

  - docker run -p 5000:3000 -v /usr/ssrApp/node_modules -v ${pwd}:/usr/ssrApp <imageId>

- docker compose up
- docker-compose up --force-recreate
- docker-compose up -d --build
- docker-compose up --build
