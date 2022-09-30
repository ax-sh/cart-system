import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "virtual:windi.css";
import "virtual:windi-devtools";
import { store } from "./app/store";
import { Provider } from "react-redux";

import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import routes from "~react-pages";

console.log(routes);
const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
