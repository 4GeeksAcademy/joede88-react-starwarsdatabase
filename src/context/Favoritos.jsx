import { createContext, useEffect, useState } from "react";
import { deleteUserFavorite, getUserFavorites, postUserFavorite } from "../services/api/users";

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


    const user_id = 1

    const getFavorites = () => {
        getUserFavorites(user_id).then((data) => {        
            setFavoritos(data)})
    }
                //OK ADDFAVORITE LLAMANDO A POSTUSERFAVORITE EN INDEX
    const addFavorite = (external_id,name,type_enum) => {
        postUserFavorite(user_id,external_id,name,type_enum).then(()=>{
            getFavorites();
        });
    }

 
                //OK DELETEFAVORITE LLAMANDO A DELETEUSERFAVORITE EN USER INDEX

    const deleteFavorite = (external_id,type_enum) => {
        const favoriteId = favoritos.find((fav)=>{
            return fav.type_enum === type_enum && fav.external_id === external_id}).favorite_id
        deleteUserFavorite(user_id,favoriteId).then(()=>{
            getFavorites()
        })
    }
      
    

    useEffect(()=> {
        getFavorites()
    },[])

    
    return (
        <ContextoFavoritos.Provider value={{ favoritos, setFavoritos, addFavorite, deleteFavorite,isLoading,setIsLoading }}>
            {children}
        </ContextoFavoritos.Provider>
    )
}