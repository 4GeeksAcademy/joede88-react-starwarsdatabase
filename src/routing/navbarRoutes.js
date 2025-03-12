import { Movies } from "../components/HomePage/MoviesList";
import { PeopleList } from "../components/HomePage/PeopleList";
import { PlanetsList } from "../components/HomePage/PlanetsList";

export const navbarRoutes = [
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
];
