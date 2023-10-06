import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const container = document.getElementById("app");
hydrateRoot(
  container,
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
); // createRoot(container!) if you use TypeScript

// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<Home />);
