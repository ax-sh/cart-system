import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.scss";
import "virtual:windi.css";
import "virtual:windi-devtools";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
