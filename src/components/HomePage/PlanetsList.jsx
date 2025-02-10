import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router"

import { ContextoFavoritos } from "../../context/Favoritos";

import { Button, Card, Col, Row } from "react-bootstrap";
import { getPlanetsList } from "../../services/api/planets";

export const Planets = () => {
    const [planets, setPlanets] = useState([])
    const { favoritos, addFavorite, deleteFavorite } = useContext(ContextoFavoritos)


    useEffect(() => {
        getPlanetsList()
            .then(planets => {
                setPlanets(planets)
            })
    }, [])

    const isFavorite = (id, type) => {
        return Array.isArray(favoritos) && favoritos.some((fav) => { 
            return fav.external_id === id && fav.type_enum === type
        })
        
    }

    return (
        <div className="container-fluid">
            <h1 className="d-flex justify-content-center mt-5 p-3">Planets</h1>
            <Row xs={1} md={2} className="g-2">
                {Array.from(planets).map((planet, idx) => (
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
                                        isFavorite(planet.id, "planets")
                                            ? deleteFavorite(planet.id, "planets")
                                            : addFavorite(planet.id, planet.name, "planets")
                                    }}>{isFavorite(planet.id, "planets") ? "Unfav" : "Add to favs"}</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </div >
    )
}