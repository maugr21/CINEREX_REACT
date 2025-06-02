import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import '../../src/styles.css'; // General styles for the app

const FunctionsPage = () => {
    // In a real app, you'd fetch this data from your NestJS backend
    const functions = [
        {
            id: 1,
            title: 'Pelicula X',
            subtitle: 'Sala 1 - 18:00 hrs',
            description: 'Una emocionante aventura que te mantendrá al borde de tu asiento. ¡No te la pierdas!',
            imageUrl: 'https://via.placeholder.com/400x200/505050/ffffff?text=Pelicula+X'
        },
        {
            id: 2,
            title: 'Obra de Teatro Y',
            subtitle: 'Sala 2 - 20:30 hrs',
            description: 'Una comedia hilarante que te sacará carcajadas de principio a fin. Ideal para toda la familia.',
            imageUrl: 'https://via.placeholder.com/400x200/505050/ffffff?text=Obra+de+Teatro+Y'
        },
        {
            id: 3,
            title: 'Concierto Z',
            subtitle: 'Sala 3 - 22:00 hrs',
            description: 'Disfruta de una noche mágica con la música en vivo de tu artista favorito. ¡Cupo limitado!',
            imageUrl: 'https://via.placeholder.com/400x200/505050/ffffff?text=Concierto+Z'
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarComponent />
            <header className="header-section py-4 mb-4">
                <Container>
                    <h1 className="text-dark fw-bold">Funciones Disponibles</h1>
                    <p className="lead text-secondary">Explora las funciones de cine y teatro que Cinex tiene para ti.</p>
                </Container>
            </header>

            <main className="container flex-grow-1">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {functions.map(func => (
                        <Col key={func.id}>
                            <Card className="function-card shadow-sm">
                                <Card.Img variant="top" src={func.imageUrl} alt={func.title} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-primary">{func.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{func.subtitle}</Card.Subtitle>
                                    <Card.Text className="flex-grow-1">
                                        {func.description}
                                    </Card.Text>
                                    <Button as={Link} to={`/comprar/${func.id}`} variant="primary" className="btn-buy mt-auto">
                                        Comprar Boleto
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </main>
            <FooterComponent />
        </div>
    );
};

export default FunctionsPage;