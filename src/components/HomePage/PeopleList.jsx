import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router";

import { ContextoFavoritos } from "../../context/Favoritos";

import { Button, Card, Col, Row } from "react-bootstrap";

import { getPeople } from "../../services/api/people"

export const PeopleList = () => {
    const [people, setPeople] = useState([])
    const { favoritos, addFavorite,deleteFavorite } = useContext(ContextoFavoritos)

    useEffect(() => {
        getPeople().then((people) => {setPeople(people)})
    }, [])

    return (
        <div className=" container-fluid">
            <h1 className="d-flex justify-content-center mt-5 p-3">People</h1>
            <Row xs={1} md={2} className="g-2">
                {people.map((person, idx) => {
                    const isFavorite = favoritos.find((fav) => fav.external_id === person.id && fav.type_enum === "people")

                    return (
                        <Col key={idx}>
                            <Card className="bg-black text-center">
                                <Card.Body>
                                    <Card.Title className="text-warning">
                                        <h2>
                                            {person.name}
                                        </h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <NavLink to={`/people/${person.id}`} end>
                                            <Button className="m-1">
                                                view more
                                            </Button>
                                        </NavLink>
                                        <Button onClick={() => {
                                            isFavorite
                                                ? deleteFavorite(isFavorite.external_id, "people",isFavorite.favorite_id)
                                                : addFavorite( person.id, person.name, "people")
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
    );
}


