import { baseUrl, fetchWrapper } from "../api";

export const postRegister = async (username, email, password) => {
  return await fetchWrapper(`${baseUrl}register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  }).then((data) => {
    return data;
  });
};

export const postLogin = async (username, password) => {
  return await fetchWrapper(`${baseUrl}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).then((data) => {
    sessionStorage.setItem("csrf_access_token", data.csrf_token);
    return data;
  });
};

export const postLogout = async () => {
  return await fetchWrapper(`${baseUrl}logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": sessionStorage.getItem("csrf_access_token") || "",
    },
  }).then((data) => {
    return data;
  });
};
