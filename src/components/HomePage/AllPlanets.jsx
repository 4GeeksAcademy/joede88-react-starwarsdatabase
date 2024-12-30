import { useEffect, useState } from "react"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { NavLink } from "react-router"

export const Planets = () => {
    const [planets, setPlanets] = useState([])

    const getPlanets = () => {
        fetch("https://www.swapi.tech/api/planets/")
            .then(res => res.json())
            .then(data => {
                setPlanets(data.results)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getPlanets()
    }, [])

    return (
        <div className="container-fluid">
            <h1 className="d-flex justify-content-center p-3">Planets</h1>
            <Row xs={1} md={2} className="g-4">
                {Array.from(planets).map((planet, idx) => (
                    <Col key={idx}>
                        <Card className="bg-black">
                            <Card.Body className="text-warning">
                                <Card.Title>
                                    <h1>
                                        {planet.name}
                                    </h1>
                                </Card.Title>
                                <Card.Text>
                                    <NavLink to={`/planets/${planet.uid}`} end>
                                        view more
                                    </NavLink>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    )
}