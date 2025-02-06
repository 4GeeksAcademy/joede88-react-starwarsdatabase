import { filmsUrl, fetchWrapper } from "../api";

export const getMoviesList = () => {
  return fetchWrapper(filmsUrl).then((moviesData) => moviesData.content);
};

export const getMovie = (uid) => {
  return fetchWrapper(`${filmsUrl}/${uid}`).then(
    (movieData) => movieData.result,
  );
};
