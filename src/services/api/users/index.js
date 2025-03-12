import { baseUrl, fetchWrapper } from "../api";

const usersEndpoint = `${baseUrl}/favorites`;

export const getUserFavorites = async () => {
  return fetchWrapper(usersEndpoint, {
    credentials: "include",
  }).then((data) => {
    return data;
  });
};

export const postUserFavorite = async (external_id, name, type_enum) => {
  return await fetchWrapper(usersEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      external_id: external_id,
      name: name,
      type_enum: type_enum,
    }),
  }).then((data) => {
    return data;
  });
};

export const deleteUserFavorite = async (favoriteId) => {
  return await fetchWrapper(usersEndpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      favorite_id: favoriteId,
    }),
  }).then((data) => {
    return data;
  });
};
