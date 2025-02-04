import { fetchWrapper } from "../api";

const peopleUrl = "people";

export const getPeople = () => {
  return fetchWrapper(peopleUrl).then((peopleData) => peopleData.results);
};

export const getPerson = (uid) => {
  return fetchWrapper(`/${peopleUrl}/${uid}`).then(
    (personData) => personData.result,
  );
};
