import { useEffect, useState } from "react"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { NavLink } from "react-router";


export const Movies = () => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        fetch(`https://www.swapi.tech/api/films/`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.result)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className="container-fluid ">
            <h1 className="d-flex justify-content-center p-3">Movies</h1>
            <Row xs={1} md={2} className="g-4">
                {Array.from(movies).map((movie, idx) => (
                    <Col key={idx}>
                        <Card className="bg-black">
                            <Card.Body>
                                <Card.Title className="text-warning">
                                    <h1>
                                    {movie.properties.title}
                                    </h1>
                                </Card.Title>
                                <Card.Text>
                                    <NavLink to={`/films/${movie.uid}`} end>
                                        view more
                                    </NavLink>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}