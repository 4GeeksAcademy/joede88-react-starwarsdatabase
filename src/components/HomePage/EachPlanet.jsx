import { useEffect, useState } from "react"
import { useParams } from "react-router";

export const EachPlanet = () => {
    const [planet, setPlanet] = useState([])
    let { uid } = useParams();


    useEffect(() => {
        getPlanet(uid)
    }, [uid])

    const getPlanet = (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlanet(data.result.properties)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <div className="container-fluid bg-black mt-5">
                <div className="col-md-6 offset-md-3 text-warning mb-5">
                    <h1>{planet.name}</h1>
                    <ul>
                        <li>Terrain: {planet.terrain}</li>
                        <li>Climate: {planet.climate}</li>
                    </ul>
                </div>

            </div>
        </>
    )
}