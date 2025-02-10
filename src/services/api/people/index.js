import { peopleUrl, fetchWrapper, baseUrl } from "../api";

const peopleEndpoint = `${baseUrl}${peopleUrl}`;

export const getPeople = () => {
  return fetchWrapper(`${peopleEndpoint}`).then((peopleData) => {
    return peopleData.content;
  });
};

export const getPerson = (id) => {
  return fetchWrapper(`${peopleEndpoint}${id}`).then(
    (personData) => personData.content,
  );
};
