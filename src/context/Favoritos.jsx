import { createContext, useState } from "react";

export const ContextoFavoritos = createContext({
    favoritos: [],
    setFavoritos: () => { },
    deleteFavorite: () => { },
    addFavorite: () => { }
})

export const ProviderFavoritos = ({ children }) => {
    const [favoritos, setFavoritos] = useState([])

    const addFavorite = (id, name, type) => {
        setFavoritos([
            ...favoritos,
            {
                id: id,
                name: name,
                type: type
            },
        ])
    }

    const deleteFavorite = (id, type) => {
        setFavoritos(
            favoritos.filter((fav) => {
                return !(fav.id === id && fav.type === type)
            })
        )
    }

    return (
        <ContextoFavoritos.Provider value={{ favoritos, setFavoritos, addFavorite, deleteFavorite }}>
            {children}
        </ContextoFavoritos.Provider>
    )
}