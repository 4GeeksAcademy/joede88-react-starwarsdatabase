import { planetsUrl, fetchWrapper } from "../api";

export const getPlanetsList = () => {
  return fetchWrapper(planetsUrl).then((planetsData) => planetsData.content);
};

export const getPlanet = (uid) => {
  return fetchWrapper(`${planetsUrl}${uid}`).then(
    (planetData) => planetData.result,
  );
};
