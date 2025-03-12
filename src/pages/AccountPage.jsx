import { Card, Nav } from "react-bootstrap"
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { useState } from "react";

export const AccountPage = () => {
    const [activeTab, setActiveTab] = useState("login");

    return (
        <div className="container-fluid mt-5 p-3 d-flex justify-content-center">
            <Card className="bg-black text-warning" style={{ width: '18rem' }}>
                <Card.Header>
                    <Nav 
                        fill
                        selectedkey="bg-black"
                        variant="tabs"
                        activeKey={activeTab}
                        onSelect={(selectedkey) => setActiveTab(selectedkey)}>
                        <Nav.Item className="bg-black">
                            <Nav.Link className={activeTab === "login" ? "custom-tab-active" : "custom-tab-inactive"} eventKey="login">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={activeTab === "register" ? "custom-tab-active" : "custom-tab-inactive"} eventKey="register">Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    {activeTab === "login" ? <LoginPage /> : <RegisterPage />}
                </Card.Body>
            </Card>
        </div>
    )
}