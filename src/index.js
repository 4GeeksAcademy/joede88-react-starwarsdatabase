import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { routerConfig } from "./routing/routerConfig";
import { NavBar } from "./components/HomePage/Navbar";
import { Film } from "./components/HomePage/Film";
import { Character } from "./components/HomePage/Character";
import { EachPlanet } from "./components/HomePage/EachPlanet";
import { ProviderFavoritos } from "./context/Favoritos";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderFavoritos>
        <NavBar />
        <Routes>
          {routerConfig.map((route) => {
            return (
              <Route key={route.name} path={route.path} element={route.page} />
            );
          })}
          <Route path="films/:uid" element={<Film />} />
          <Route path="people/:uid" element={<Character />} />
          <Route path="planets/:uid" element={<EachPlanet />} />
        </Routes>
      </ProviderFavoritos>
    </BrowserRouter>
  </React.StrictMode>,
);
