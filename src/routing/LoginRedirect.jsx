import { isEmpty } from "lodash";
import { useContext } from "react"
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router";
import { AccountPage } from "../pages/AccountPage";

export const LoginRedirect = () => {
    const {user} = useContext(UserContext);

    if(!isEmpty(user)){
        return <Navigate to="/" replace/>
    }
    
    return <AccountPage/>
}