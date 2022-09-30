import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.scss";
import "virtual:windi.css";
import "virtual:windi-devtools";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
