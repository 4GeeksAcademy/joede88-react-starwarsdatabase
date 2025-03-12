import { Movies } from "../components/HomePage/MoviesList";
import { Movie } from "../components/HomePage/Movie";
import { PeopleList } from "../components/HomePage/PeopleList";
import { PlanetsList } from "../components/HomePage/PlanetsList";
import { Planet } from "../components/HomePage/Planet";
import { Character } from "../components/HomePage/Character";
import HomePage from "../pages/HomePage";

export const routerConfig = [
  {
    name: "Home Page",
    path: "/",
    page: <HomePage />,
  },
  {
    name: "Movies",
    path: "/films",
    page: <Movies />,
  },
  {
    name: "People",
    path: "/people",
    page: <PeopleList />,
  },
  {
    name: "Planets",
    path: "/planets",
    page: <PlanetsList />,
  },
  {
    name: "Character",
    path: "/people/:id",
    page: <Character />,
  },
  {
    name: "Planet",
    path: "/planets/:id",
    page: <Planet />,
  },
  {
    name: "Movie",
    path: "films/:id",
    page: <Movie />,
  },
];
