import App from "../App";
import { Movies } from "../components/HomePage/MoviesList";
import { PeopleList } from "../components/HomePage/PeopleList";
import { Planets } from "../components/HomePage/PlanetsList";

export const routerConfig = [
  {
    name: "Home",
    path: "/",
    page: <App />,
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
    page: <Planets />,
  },
];
