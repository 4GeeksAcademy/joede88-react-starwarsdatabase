import { useEffect, useState } from "react"
import { useParams } from "react-router";

export const Film = () => {
    const [film, setFilm] = useState([])
    let { uid } = useParams();


    useEffect(() => {
        getFilm(uid)
    }, [uid])

    const getFilm = (id) => {
        fetch(`https://www.swapi.tech/api/films/${id}`)
            .then(res => res.json())
            .then(data => {
                setFilm(data.result.properties)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <div className="container text-center bg-black">
                <div className="col-md-6 offset-md-3 fs-1  text-warning">{film.opening_crawl}</div>
            </div>
        </>
    )
}