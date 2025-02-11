export const baseUrl =
  "https://upgraded-enigma-r4pgp656qv59f5g66-3000.app.github.dev/";

export const userUrl = "users/";
export const filmsUrl = "films/";
export const peopleUrl = "people/";
export const planetsUrl = "planets/";

export const fetchWrapper = (url, init) => {
  return fetch(url, init)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
