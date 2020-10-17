import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./global-styles.js";
import "normalize.css";
import App from "./app";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
