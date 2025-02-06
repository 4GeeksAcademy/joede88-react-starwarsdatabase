import { baseUrl, userUrl, fetchWrapper } from "../api";

export const getUsers = () => {
  return fetchWrapper(userUrl).then((data) => {
    return data;
  });
};

export const getUser = (uid) => {
  return fetchWrapper(`${userUrl}/${uid}`).then((data) => data.result);
};

export const getUserFavorites = (userId) => {
  return fetchWrapper(`${userUrl}${userId}/favorites`).then((data) => {
    return data;
  });
};
