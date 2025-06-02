import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../src/styles.css'; // General styles for the app

const LandingPage = () => {
    return (
        <div className="landing-page-wrapper"> {/* Add a wrapper for body styling */}
            <Container className="landing-container">
                <h1 className="text-primary">Bienvenido a Cinex</h1>
                <p className="text-secondary">Tu destino para comprar boletos y disfrutar de las mejores funciones.</p>
                <div className="d-grid gap-2">
                    <Button as={Link} to="/registro" variant="primary" size="lg" className="btn-action">
                        Registrarse
                    </Button>
                    <Button as={Link} to="/login" variant="outline-primary" size="lg" className="btn-action">
                        Iniciar Sesión
                    </Button>
                </div>
            </Container>
        </div>
    );
};


// LandingPage.js
export default LandingPage;