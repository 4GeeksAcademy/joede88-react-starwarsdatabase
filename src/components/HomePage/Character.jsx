import { useContext,useEffect, useState } from "react"
import { useParams } from "react-router"
import { ContextoFavoritos } from "../../context/Favoritos"
import { getPerson } from "../../services/api/people"

export const Character = () => {
    const [character, setCharacter] = useState([])
    const {isLoading,setIsLoading} = useContext(ContextoFavoritos)
    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        getPerson(id)
            .then((person) => {
                setCharacter(person)
            })
            .finally(()=>setIsLoading(false))
    }, [id,setIsLoading])

    return (
        <div className="container-fluid bg-black mt-5">
            <div className="col-md-6 offset-md-3 text-warning">
            {isLoading && <h1>Loading....</h1>}
                <h1>{character.name}</h1>
                <ul>
                    <li>
                        Species: {character.species}
                    </li>
                    <li>
                        Skin color: {character.skin_color}
                    </li>
                    <li>
                        ID: {character.id}
                    </li>
                </ul>
            </div>
        </div>
    )
}