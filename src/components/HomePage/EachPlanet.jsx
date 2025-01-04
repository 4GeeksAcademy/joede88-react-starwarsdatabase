import { useCallback, useContext, useEffect, useState } from "react"

import { useParams } from "react-router";
import { ContextoFavoritos } from "../../context/Favoritos";


export const EachPlanet = () => {
    const [planet, setPlanet] = useState([])
    const {isLoading,setIsLoading} = useContext(ContextoFavoritos)
    let { uid } = useParams();

    const getPlanet = useCallback((id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlanet(data.result.properties)
            })
            .finally(()=>setIsLoading(false))
            .catch(err => console.error(err))
    }, [setIsLoading])

    useEffect(() => {
        setIsLoading(true)
        getPlanet(uid)
    }, [uid,getPlanet,setIsLoading])

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