import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./client/routes";

const app = express();

app.use(express.static("public"));

app.use("*", (req, res) => {
  // console.log(req.originalUrl);
  const App = () => (
    <StaticRouter location={req.originalUrl} context={{}}>
      <AppRoutes />
    </StaticRouter>
  );
  const sheet = new ServerStyleSheet();
  const htmlContent = renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  sheet.seal();

  const html = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${styleTags}
      </head>
      <body>
        <div id="app">${htmlContent}</div>
        <script src="clientBundle.js"></script>
      </body>
    </html>  
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("Server Listening on Port 3000");
});
