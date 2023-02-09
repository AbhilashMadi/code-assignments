import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/index.css";
import "./css/responsive.css";
import "./css/cssPrint/print.css";

const rootElem = document.getElementById("root");
const root = createRoot(rootElem);

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
