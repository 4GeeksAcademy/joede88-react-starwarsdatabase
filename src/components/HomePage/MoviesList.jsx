import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router";

import { ContextoFavoritos } from "../../context/Favoritos";

import { Button, Card, Col, Row } from "react-bootstrap";
import { getMoviesList } from "../../services/api/film";

export const Movies = () => {
    const [movies, setMovies] = useState([])
    const { favoritos, addFavorite, deleteFavorite } = useContext(ContextoFavoritos);

    useEffect(() => {
        getMoviesList().then((movies) => {setMovies(movies)})
    }, [])
 
    return (
        <div className="container-fluid ">
            <h1 className="d-flex justify-content-center mt-5 p-3">Movies</h1>
            <Row xs={1} md={2} className="g-2">
                {movies.map((film, idx) => {
                    const isFavorite = favoritos.find((fav) => fav.external_id === film.id && fav.type_enum === "films")
                                
                    return (
                    <Col key={idx}>
                        <Card className="bg-black text-center">
                            <Card.Body>
                                <Card.Title className="text-warning">
                                    <h2>
                                        {film.name}
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    <NavLink to={`/films/${film.id}`} end>
                                        <Button className="m-1">
                                            view more
                                        </Button>
                                    </NavLink>
                                    <Button onClick={() => {
                                        isFavorite
                                            ? deleteFavorite(isFavorite.external_id, "films",isFavorite.favorite_id)
                                            : addFavorite(film.id, film.name, "films")
                                    }}>{isFavorite ? "Unfav" : "Add to favs"}
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
            </Row>
            <hr />
        </div>
    )
}