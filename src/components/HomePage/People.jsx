import { useEffect, useState } from "react"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from "react-router";

export const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        getPeople()
    }, [])

    const getPeople = () => {
        fetch(`https://www.swapi.tech/api/people/`)
            .then(res => res.json())
            .then(data => {
                setPeople(data.results)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="mt-3">
            <h1 className="d-flex justify-content-center p-3">People</h1>
            <Row xs={1} md={2} className="g-4">
                {Array.from(people).map((person, idx) => (
                    <Col key={idx}>
                        <Card className="bg-black">
                            <Card.Body>
                                <Card.Title className="text-warning">
                                    <h1>
                                        {person.name}
                                    </h1>
                                </Card.Title>
                                <Card.Text>
                                    <NavLink to={`/people/${person.uid}`} end>
                                        view more
                                    </NavLink>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

