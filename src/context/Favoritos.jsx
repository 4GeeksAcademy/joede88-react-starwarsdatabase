import { createContext, useContext, useEffect, useState } from "react";
import { deleteUserFavorite, getUserFavorites, postUserFavorite } from "../services/api/users";
import { UserContext } from "./UserContext";
import { isEmpty } from "lodash";

export const ContextoFavoritos = createContext({
    favoritos: [],
    setFavoritos: () => { },
    deleteFavorite: (id) => { },
    addFavorite: () => { },
    isLoading: false,
    setIsLoading: ()=> {}
})

export const ProviderFavoritos = ({ children }) => {
    const [favoritos, setFavoritos] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(UserContext)

    const getFavorites = () => {
        getUserFavorites().then((data) => {        
            setFavoritos(data)})
    }
                //OK ADDFAVORITE LLAMANDO A POSTUSERFAVORITE EN INDEX
    const addFavorite = (external_id,name,type_enum) => {
        postUserFavorite(external_id,name,type_enum).then(()=>{
            getFavorites();
        });
    }

 
                //OK DELETEFAVORITE LLAMANDO A DELETEUSERFAVORITE EN USER INDEX

    const deleteFavorite = (external_id,type_enum) => {
        const favoriteId = favoritos.find((fav)=>{
            return fav.type_enum === type_enum && fav.external_id === external_id}).favorite_id
        deleteUserFavorite(favoriteId).then(()=>{
            getFavorites()
        })
    }
      
    

    useEffect(()=> {
        if (!isEmpty(user)){
        getFavorites();
    }
    },[user])

    
    return (
        <ContextoFavoritos.Provider value={{ favoritos, setFavoritos, addFavorite, deleteFavorite,isLoading,setIsLoading }}>
            {children}
        </ContextoFavoritos.Provider>
    )
}