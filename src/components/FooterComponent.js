import React from 'react';
import { Container } from 'react-bootstrap';

const FooterComponent = () => {
    return (
        <footer className="bg-dark text-white py-3 text-center mt-auto">
            <Container>
                <p className="mb-0">&copy; {new Date().getFullYear()} Cinex S.A. de C.V. Todos los derechos reservados.</p>
            </Container>
        </footer>
    );
};

export default FooterComponent;