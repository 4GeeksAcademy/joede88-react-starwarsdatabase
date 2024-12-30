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
        <div>
            <h1>{character.name}</h1>
            <p>
            eyes color: {character.eye_color}
            </p>
        </div>
    )
}