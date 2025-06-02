import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Film, PersonCircle } from 'react-bootstrap-icons'; // For icons
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import '../../src/styles.css'; // General styles for the app

const HomePage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarComponent />
            <header className="hero-section text-white text-center py-5 mb-4">
                <Container>
                    <h1 className="display-4 fw-bold mb-3">Bienvenido a Cinex</h1>
                    <p className="lead mb-4">Explora nuestras funciones y asegura tus boletos.</p>
                </Container>
            </header>

            <main className="container flex-grow-1">
                <Row xs={1} md={2} className="g-4 mb-5">
                    <Col>
                        <Card className="card-home shadow-sm">
                            <Card.Body>
                                <Film size={48} className="text-primary mb-3" />
                                <Card.Title as="h3">Ver Funciones</Card.Title>
                                <Card.Text>Explora la cartelera completa de todas las funciones disponibles en nuestras salas.</Card.Text>
                                <Button as={Link} to="/funciones" variant="primary" className="btn-action">
                                    Ir a Funciones
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card-home shadow-sm">
                            <Card.Body>
                                <PersonCircle size={48} className="text-primary mb-3" />
                                <Card.Title as="h3">Mi Perfil</Card.Title>
                                <Card.Text>Gestiona la información de tu cuenta y consulta tus boletos comprados.</Card.Text>
                                <Button as={Link} to="/perfil" variant="success" className="btn-action">
                                    Ver Perfil
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>
            <FooterComponent />
        </div>
    );
};

export default HomePage;