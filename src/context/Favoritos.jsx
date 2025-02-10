import { createContext, useEffect, useState } from "react";
import { getUserFavorites } from "../services/api/users";

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
                // FUNCION POST OK, PDTE PASARLO AL INDEX
    const addFavorite = ( id, name, type_enum) => {
        return fetch(`https://upgraded-enigma-r4pgp656qv59f5g66-3000.app.github.dev/users/${user_id}/favorites`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                external_id: id,
                name: name,
                type_enum: type_enum
            })
        })
        .then((response)=> response.json())
        .then((data) =>  {
            setFavoritos(prevFavoritos=>[...prevFavoritos,data])
        })
    }
    
                // FUNCION DELETE OK, PDTE PASARLO AL INDEX
    const deleteFavorite = (external_id, type_enum,favorite_id) => {
        return fetch(`https://upgraded-enigma-r4pgp656qv59f5g66-3000.app.github.dev/users/${user_id}/favorites`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              external_id: external_id,
              type_enum: type_enum
            }),
          })
          .then((response)=> response.json())
          .then(() => {
          setFavoritos(prevFavoritos => prevFavoritos.filter(fav => fav.favorite_id !== favorite_id))
          });
        };
    

    useEffect(()=> {
        getFavorites()
    },[])

    
    return (
        <ContextoFavoritos.Provider value={{ favoritos, setFavoritos, addFavorite, deleteFavorite,isLoading,setIsLoading }}>
            {children}
        </ContextoFavoritos.Provider>
    )
}