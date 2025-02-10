import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { routerConfig } from "./routing/routerConfig";
import { NavBar } from "./components/HomePage/Navbar";
import { Movie } from "./components/HomePage/Movie";
import { Character } from "./components/HomePage/Character";
import { Planet } from "./components/HomePage/Planet";
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
          <Route path="films/:id" element={<Movie />} />
          <Route path="people/:id" element={<Character />} />
          <Route path="planets/:id" element={<Planet />} />
        </Routes>
      </ProviderFavoritos>
    </BrowserRouter>
  </React.StrictMode>,
);
