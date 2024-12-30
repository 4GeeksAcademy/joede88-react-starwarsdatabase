import { Movies } from "../components/HomePage/Movies";
import { People } from "../components/HomePage/People";
import { Planets } from "../components/HomePage/AllPlanets";


const HomePage = () => {

  return (
    <>
      <Movies />
      <People />
      <Planets />
    </>
  );
};

export default HomePage;