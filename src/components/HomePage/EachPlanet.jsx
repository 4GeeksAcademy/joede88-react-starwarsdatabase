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
            <div className="container text-center bg-black mt-3">
                <div className="col-md-6 offset-md-3 fs-1 text-warning mb-5">
                    <h1>
                        {planet.name}
                    </h1>
                </div>
                <div className="col-md-6 offset-md-3 fs-1 text-warning">
                    <p>Terrain: {planet.terrain}</p>
                    <p>Climate: {planet.climate}</p>
                </div>
            </div>
        </>
    )
}