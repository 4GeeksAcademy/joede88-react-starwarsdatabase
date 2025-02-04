const baseUrl = "https://www.swapi.tech/api";

export const fetchWrapper = (url) => {
  return fetch(`${baseUrl}/${url}`)
    .then((data) => data.json())
    .catch((error) => {
      throw new Error(error);
    });
};
