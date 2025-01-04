import { useCallback, useContext,useEffect, useState } from "react"
import { useParams } from "react-router";
import { ContextoFavoritos } from "../../context/Favoritos";

export const Film = () => {
    const [film, setFilm] = useState([])
    const {isLoading,setIsLoading} = useContext(ContextoFavoritos)
    let { uid } = useParams();

    const getFilm = useCallback((id) => {
        fetch(`https://www.swapi.tech/api/films/${id}`)
            .then(res => res.json())
            .then(data => {
                setFilm(data.result.properties)
            })
            .finally(()=>setIsLoading(false))
            .catch(err => console.error(err))
    },[setIsLoading])

    useEffect(() => {
        setIsLoading(true)
        getFilm(uid)
    }, [uid,getFilm,setIsLoading])

    return (
        <>
            <div className="container text-center bg-black mt-5">
                <div className="col-md-6 offset-md-3 fs-1 text-warning">
                {isLoading && <h1>Loading....</h1>}
                {film.opening_crawl}</div>
            </div>
        </>
    )
}