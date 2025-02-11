import { baseUrl, userUrl, fetchWrapper } from "../api";

const usersEndpoint = `${baseUrl}${userUrl}`;

export const getUsers = () => {
  return fetchWrapper(usersEndpoint).then((data) => {
    return data;
  });
};

export const getUser = (user_id) => {
  return fetchWrapper(`${usersEndpoint}${user_id}`).then((data) => {
    return data.content;
  });
};

export const getUserFavorites = (user_id) => {
  return fetchWrapper(`${usersEndpoint}${user_id}/favorites`).then((data) => {
    return data.content;
  });
};

export const postUserFavorite = (user_id, id, name, type_enum) => {
  return fetchWrapper(
    `https://upgraded-enigma-r4pgp656qv59f5g66-3000.app.github.dev/users/${user_id}/favorites`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        external_id: id,
        name: name,
        type_enum: type_enum,
      }),
    },
  ).then((data) => {
    console.log(data);

    return data;
  });
};

export const deleteUserFavorite = (user_id, favoriteId) => {
  return fetchWrapper(`${usersEndpoint}${user_id}/favorites`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      favorite_id: favoriteId,
    }),
  }).then((data) => {
    return data;
  });
};
