import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../src/styles.css'; // General styles for the app

const RegisterPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here (e.g., send data to NestJS backend)
        console.log('Register form submitted!');
    };

    return (
        <div className="form-page-wrapper"> {/* Add a wrapper for body styling */}
            <Container className="register-container">
                <h2 className="text-dark text-center mb-4">Registro de Usuario</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="nombre@ejemplo.com" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Mínimo 8 caracteres" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formConfirmPassword">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Repite tu contraseña" required />
                    </Form.Group>

                    <Button variant="success" type="submit" className="btn-register">
                        Crear Cuenta
                    </Button>
                </Form>
                <div className="login-link">
                    ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión aquí</Link>
                </div>
            </Container>
        </div>
    );
};

export default RegisterPage;