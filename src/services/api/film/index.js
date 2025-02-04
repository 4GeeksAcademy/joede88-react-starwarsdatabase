import { fetchWrapper } from "../api";

const filmUrl = "films";

export const getMoviesList = () => {
  return fetchWrapper(filmUrl).then((moviesData) => moviesData.result);
};

export const getMovie = (uid) => {
  return fetchWrapper(`/${filmUrl}/${uid}`).then(
    (movieData) => movieData.result,
  );
};
