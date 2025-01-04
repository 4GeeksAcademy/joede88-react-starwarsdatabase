import { useCallback, useContext,useEffect, useState } from "react"
import { useParams } from "react-router"
import { ContextoFavoritos } from "../../context/Favoritos"

export const Character = () => {
    const [character, setCharacter] = useState([])
    const {isLoading,setIsLoading} = useContext(ContextoFavoritos)
    let { uid } = useParams()

    const getChar = useCallback((id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data.result.properties)
            })
            .finally(()=>setIsLoading(false))
            .catch(err => console.error(err))
    },[setIsLoading])

    useEffect(() => {
        setIsLoading(true)
        getChar(uid)
    }, [uid,getChar,setIsLoading])

    return (
        <div className="container-fluid bg-black mt-5">
            <div className="col-md-6 offset-md-3 text-warning">
            {isLoading && <h1>Loading....</h1>}
                <h1>{character.name}</h1>
                <ul>
                    <li>
                        Birth year: {character.birth_year}
                    </li>
                    <li>
                        Eyes color: {character.eye_color}
                    </li>
                </ul>
            </div>
        </div>
    )
}