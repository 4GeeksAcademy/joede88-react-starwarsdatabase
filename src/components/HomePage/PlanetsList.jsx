import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router"

import { ContextoFavoritos } from "../../context/Favoritos";

import { Button, Card, Col, Row } from "react-bootstrap";
import { getPlanetsList } from "../../services/api/planets";
import { getUserFavorites } from "../../services/api/users";

export const Planets = () => {
    const [planets, setPlanets] = useState([])
    const { favoritos, addFavorite, deleteFavorite,setFavoritos } = useContext(ContextoFavoritos)

    let user_id = 1

    useEffect(() => {
        getPlanetsList().then(planets => {setPlanets(planets)})
        getUserFavorites(user_id).then((favs)=>{setFavoritos(favs)})
    }, [user_id,setFavoritos])

    return (
        <div className="container-fluid">
            <h1 className="d-flex justify-content-center mt-5 p-3">Planets</h1>
            <Row xs={1} md={2} className="g-2">
                {planets.map((planet, idx) => {
                    const isFavorite = favoritos.find((fav)=> fav.external_id === planet.id && fav.type_enum === "planets")

                    return (
                    <Col key={idx}>
                        <Card className="bg-black text-center">
                            <Card.Body className="text-warning">
                                <Card.Title>
                                    <h2>
                                        {planet.name}
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    <NavLink to={`/planets/${planet.id}`} end>
                                        <Button className="m-1">
                                            view more
                                        </Button>
                                    </NavLink>
                                    <Button onClick={() => {
                                        isFavorite
                                            ? deleteFavorite(isFavorite.external_id, "planets",isFavorite.favorite_id)
                                            : addFavorite(planet.id, planet.name, "planets")
                                    }}>{isFavorite ? "Unfav" : "Add to favs"}</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
            </Row>
            <hr />
        </div >
    )
}