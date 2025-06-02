import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../src/styles.css'; // General styles for the app

const LoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., send data to NestJS backend)
        console.log('Login form submitted!');
    };

    return (
        <div className="form-page-wrapper"> {/* Add a wrapper for body styling */}
            <Container className="login-container">
                <h2 className="text-dark text-center mb-4">Iniciar Sesión</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Tu contraseña" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="btn-login" href='/'>
                        Iniciar Sesión
                    </Button>
                </Form>
                <div className="register-link">
                    ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
                </div>
            </Container>
        </div>
    );
};

export default LoginPage;