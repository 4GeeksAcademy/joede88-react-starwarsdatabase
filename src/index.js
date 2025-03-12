import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router";
import { ProviderFavoritos } from "./context/Favoritos";
import App from "./App";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProviderFavoritos>
          <App></App>
        </ProviderFavoritos>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
