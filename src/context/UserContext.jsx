import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { postLogin, postLogout, postRegister } from "../services/api/authentication/auth";
import { baseUrl, fetchWrapper, meUrl } from "../services/api/api";

const meEndpoint = `${baseUrl}me`

export const UserContext = createContext({
    user: {},
    register: () => { },
    login: () => { },
    logout: () => { },
    csrfToken: null
})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [csrfToken, setCsrfToken] = useState(null);

    let navigate = useNavigate();

        const fetchUser = async () => {
            return fetchWrapper(meEndpoint).then((data) => {
                setUser(data) });
        }
        // Cargar usuario cuando la app inicia
        useEffect(() => {
            fetchUser(meUrl);
        }, [meUrl]);

        const register = (username, email, password) => {
            postRegister(username, email, password).then(() => {
                login(username, password);
            });
        };

        const login = (email, password) => {
            postLogin(email, password).then((data) => {
                setUser(data.user);
                setCsrfToken(data.csrf_token);
                navigate("/");
            })
        }

        const logout = () => {
            postLogout().then(() => {
                setUser({});
                setCsrfToken(null);
            });
        };

        return (
            <UserContext.Provider value={{ user, register, login, logout, csrfToken }}>
                {children}
            </UserContext.Provider>
        )
    }