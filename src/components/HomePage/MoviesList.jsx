import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router";

import { ContextoFavoritos } from "../../context/Favoritos";

import { Button, Card, Col, Row } from "react-bootstrap";
import { getMoviesList } from "../../services/api/film";

export const Movies = () => {
    const [movies, setMovies] = useState([])
    const { favoritos, addFavorite, deleteFavorite } = useContext(ContextoFavoritos);


    useEffect(() => {
        getMoviesList()
            .then(movies => {
                console.log(movies);
                
                setMovies(movies)})
    }, [])

    const isFavorite = (id, type) => {
        return favoritos.some((fav) => {
            return fav.id === id && fav.type === type
        })
    }

    return (
        <div className="container-fluid ">
            <h1 className="d-flex justify-content-center mt-5 p-3">Movies</h1>
            <Row xs={1} md={2} className="g-2">
                {Array.from(movies).map((movie, idx) => (
                    <Col key={idx}>
                        <Card className="bg-black text-center">
                            <Card.Body>
                                <Card.Title className="text-warning">
                                    <h2>
                                        {movie.title}
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    <NavLink to={`/films/${movie.id}`} end>
                                        <Button className="m-1">
                                            view more
                                        </Button>
                                    </NavLink>
                                    <Button onClick={() => {
                                        isFavorite(movie.id, "films")
                                            ? deleteFavorite(movie.id, "films")
                                            : addFavorite(movie.id, movie.title, "films")
                                    }}>{isFavorite(movie.id, "films") ? "Unfav" : "Add to favs"}</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </div>
    )
}