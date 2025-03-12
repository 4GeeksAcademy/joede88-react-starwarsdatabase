const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const validateEmail = (email) => emailRegex.test(email);
export const validateUsername = (username) => usernameRegex.test(username);
export const validatePassword = (password) => passwordRegex.test(password);
