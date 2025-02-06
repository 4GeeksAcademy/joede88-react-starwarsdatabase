import { peopleUrl, fetchWrapper } from "../api";

export const getPeople = () => {
  return fetchWrapper(peopleUrl).then((peopleData) => peopleData.content);
};

export const getPerson = (uid) => {
  return fetchWrapper(`${peopleUrl}${uid}`).then(
    (personData) => personData.result,
  );
};
