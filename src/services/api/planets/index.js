import { planetsUrl, fetchWrapper, baseUrl } from "../api";

const planetsEndpoint = `${baseUrl}${planetsUrl}`;

export const getPlanetsList = () => {
  return fetchWrapper(`${planetsEndpoint}`).then(
    (planetsData) => planetsData.content,
  );
};

export const getPlanet = (id) => {
  return fetchWrapper(`${planetsEndpoint}${id}`).then((planetData) => {
    return planetData.content;
  });
};
