import App from "../App";
import { Movies } from "../components/HomePage/Movies";
import { People } from "../components/HomePage/People";
import { Planets } from "../components/HomePage/AllPlanets";

export const routerConfig = [
  {
    name: "Home",
    path: "/",
    page: <App />,
  },

  {
    name: "Movies",
    path: "/movies",
    page: <Movies />,
  },
  {
    name: "People",
    path: "/people",
    page: <People />,
  },
  {
    name: "Planets",
    path: "/planets",
    page: <Planets />,
  },
];
