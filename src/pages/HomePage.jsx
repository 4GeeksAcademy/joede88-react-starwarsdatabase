import { Movies } from "../components/HomePage/MoviesList";
import { PeopleList } from "../components/HomePage/PeopleList";
import { Planets } from "../components/HomePage/PlanetsList";


const HomePage = () => {

  return (
    <>
      <Movies />
      <PeopleList />
      <Planets />
    </>
  );
};

export default HomePage;