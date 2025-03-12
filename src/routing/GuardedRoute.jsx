import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { isEmpty } from "lodash";
import { Navigate, Outlet } from "react-router";

export const GuardedRoutes = () => {
    const { user } = useContext(UserContext);
    return !isEmpty(user) ? <Outlet/> : <Navigate to="/login"/>;
}