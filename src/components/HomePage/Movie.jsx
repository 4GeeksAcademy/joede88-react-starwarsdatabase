import { useContext,useEffect, useState } from "react"
import { useParams } from "react-router";
import { ContextoFavoritos } from "../../context/Favoritos";
import { getMovie } from "../../services/api/film";

export const Movie = () => {
    const [film, setFilm] = useState([])
    const {isLoading,setIsLoading} = useContext(ContextoFavoritos)
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getMovie(id)
            .then((movie) => {
                setFilm(movie)
            })
            .finally(()=>setIsLoading(false))
    }, [id,setIsLoading])

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