import { useContext, useEffect, useState } from "react"

import { useParams } from "react-router";
import { ContextoFavoritos } from "../../context/Favoritos";
import { getPlanet } from "../../services/api/planets";

export const Planet = () => {
    const [planet, setPlanet] = useState({})
    const {isLoading,setIsLoading} = useContext(ContextoFavoritos)
    const { id } = useParams();
    console.log("ID obtenido de useParams:", id);

    useEffect(() => {
        if (!id) return;
        setIsLoading(true)
        getPlanet(id)
            .then(planet => {
                setPlanet(planet)
            })
            .finally(()=>setIsLoading(false))
    }, [id,setIsLoading])

    return (
        <>
            <div className="container-fluid bg-black mt-5">
                <div className="col-md-6 offset-md-3 text-warning mb-5">
                {isLoading && <h1>Loading....</h1>}
                    <h1>{planet.name}</h1>
                    <ul>
                        <li>Population: {planet.population} people</li>
                        <li>Climate: {planet.climate}</li>
                    </ul>
                </div>

            </div>
        </>
    )
}