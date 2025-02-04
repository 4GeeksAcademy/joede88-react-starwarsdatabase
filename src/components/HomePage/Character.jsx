import { useContext,useEffect, useState } from "react"
import { useParams } from "react-router"
import { ContextoFavoritos } from "../../context/Favoritos"
import { getPerson } from "../../services/api/people"

export const Character = () => {
    const [character, setCharacter] = useState([])
    const {isLoading,setIsLoading} = useContext(ContextoFavoritos)
    const { uid } = useParams()


    useEffect(() => {
        setIsLoading(true)
        getPerson(uid)
            .then((person) => {
                setCharacter(person.properties)
            })
            .finally(()=>setIsLoading(false))
    }, [uid,setIsLoading])

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