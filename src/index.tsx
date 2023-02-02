import ReactDom from "react-dom/client";
import "./css/style.css";
import { App } from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
