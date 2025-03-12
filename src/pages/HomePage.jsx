import { Movies } from "../components/HomePage/MoviesList";
import { PeopleList } from "../components/HomePage/PeopleList";
import { PlanetsList } from "../components/HomePage/PlanetsList";


const HomePage = () => {

  return (
    <>
      <Movies />
      <PeopleList />
      <PlanetsList/>
    </>
  );
};

export default HomePage;