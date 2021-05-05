import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import reportWebVitals from "../reportWebVitals";

console.log("index in popup");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
