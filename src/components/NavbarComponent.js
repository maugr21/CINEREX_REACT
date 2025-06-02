import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // For react-router integration with react-bootstrap

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" className="sticky-top">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>Cinex</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Inicio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/funciones">
                            <Nav.Link>Funciones</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/perfil">
                            <Nav.Link>Perfil</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/mis-funciones">
                            <Nav.Link>Mis Funciones</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                            <Nav.Link>Admin Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/landing">
                            <Nav.Link>Cerrar Sesión</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;