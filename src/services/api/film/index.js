import { baseUrl, filmsUrl, fetchWrapper } from "../api";

const filmsEndpoint = `${baseUrl}${filmsUrl}`;

export const getMoviesList = () => {
  return fetchWrapper(`${filmsEndpoint}`).then((moviesData) => {
    return moviesData.content;
  });
};

export const getMovie = (id) => {
  return fetchWrapper(`${filmsEndpoint}}${id}`).then(
    (movieData) => movieData.content,
  );
};
