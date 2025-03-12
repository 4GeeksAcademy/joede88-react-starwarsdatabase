import { useContext, useState } from "react"
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { validateEmail, validatePassword, validateUsername } from "../utils/validation";
import { UserContext } from "../context/UserContext";

export const RegisterPage = () => {
    const [validated, setValidated] = useState(false)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({ email: "", username: "", password: "" })

    const { register} = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let formErrors = {};
        if (!validateEmail(email)) {
            formErrors.email = "Please insert a valid email."
        }
        if (!validateUsername(username)) {
            formErrors.username = "Username must be at least 3 characters, only letters and numbers."
        }
        if (!validatePassword(password)) {
            formErrors.password = "Password must be at least 8 characters long, include a number, an uppercase and a lowercase letter."
        }
        setErrors(formErrors)
        setValidated(true);
        if (Object.keys(formErrors).length === 0) {
            register(username, email, password);
        }
    };

    return (
        <div>
            <Card className="bg-black text-warning">
                <Form className="" noValidate onSubmit={handleSubmit}>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        isInvalid={!!errors.email}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        isInvalid={!!errors.username}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustomPassword">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        isInvalid={!!errors.password}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Button className="bg-black text-warning border border-warning" type="submit">Register</Button>
                    </Card.Body>
                </Form>
            </Card>
        </div>
    )
}