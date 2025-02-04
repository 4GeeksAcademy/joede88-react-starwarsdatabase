import { useContext, useEffect, useState } from "react"

import { useParams } from "react-router";
import { ContextoFavoritos } from "../../context/Favoritos";
import { getPlanet } from "../../services/api/planets";

export const Planet = () => {
    const [planet, setPlanet] = useState([])
    const {isLoading,setIsLoading} = useContext(ContextoFavoritos)
    let { uid } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getPlanet(uid)
            .then(planet => {setPlanet(planet.properties)
            })
            .finally(()=>setIsLoading(false))
    }, [uid,setIsLoading])

    return (
        <>
            <div className="container-fluid bg-black mt-5">
                <div className="col-md-6 offset-md-3 text-warning mb-5">
                {isLoading && <h1>Loading....</h1>}
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