import { useEffect, useState } from "react"
import { useParams } from "react-router"

export const Character = () => {
    const [character, setCharacter] = useState([])
    let { uid } = useParams()

    useEffect(() => {
        getChar(uid)
    }, [uid])

    const getChar = (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.result.properties)
                setCharacter(data.result.properties)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="container-fluid bg-black mt-5">
            <div className="col-md-6 offset-md-3 text-warning">
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