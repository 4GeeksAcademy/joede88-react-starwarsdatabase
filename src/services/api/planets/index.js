import { fetchWrapper } from "../api";

const planetsUrl = "planets";

export const getPlanetsList = () => {
  return fetchWrapper(planetsUrl).then((planetsData) => planetsData.results);
};

export const getPlanet = (uid) => {
  return fetchWrapper(`/${planetsUrl}/${uid}`).then(
    (planetData) => planetData.result,
  );
};
