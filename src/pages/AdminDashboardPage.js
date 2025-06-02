import React from 'react';
// Import Navbar from react-bootstrap
import { Container, Row, Col, Nav, Card, Table, Button, Navbar } from 'react-bootstrap';
// Import Ticket icon along with others from react-bootstrap-icons
import { Speedometer, Film, Building, People, Receipt, Gear, Eye, Pencil, Trash, PlusCircle, Ticket } from 'react-bootstrap-icons'; // For icons

// This line is often unnecessary if you are building a custom Navbar directly in the page.
// If NavbarComponent is meant for the *user* facing navbar and this is admin, you might not use it here.
// If you DO intend to use NavbarComponent for the admin navbar, then import it and use <NavbarComponent />
// instead of the raw <Navbar> component from react-bootstrap.
// For now, based on your current code, we will assume you want to use react-bootstrap's Navbar directly.
// If you want to use NavbarComponent, you'd change the <Navbar> ... </Navbar> block to <NavbarComponent />
// and remove the Navbar import from react-bootstrap for this page.
// For now, let's remove it to avoid confusion and follow your current usage of <Navbar>.
// import NavbarComponent from '../components/NavbarComponent'; // <-- REMOVE THIS LINE IF YOU ARE NOT USING IT HERE

import FooterComponent from '../components/FooterComponent';
import '../../src/styles.css'; // General styles for the app

const AdminDashboardPage = () => {
    // Dummy data for dashboard cards and table
    const dashboardStats = {
        ticketsSold: 1250,
        activeFunctions: 25,
        newUsersMonth: 78
    };

    const upcomingFunctions = [
        { id: 1, title: 'Pelicula Fantástica', sala: 'Sala 5', date: '2025-06-05', time: '19:00', ticketsAvailable: 120 },
        { id: 2, title: 'Concierto Sinfónico', sala: 'Sala 3', date: '2025-06-07', time: '21:00', ticketsAvailable: 80 },
        { id: 3, title: 'Obra de Drama "El Reflejo"', sala: 'Sala 1', date: '2025-06-10', time: '17:30', ticketsAvailable: 50 }
    ];

    const handleAction = (action, id, title) => {
        alert(`${action} ${title} (ID: ${id}) - Funcionalidad en desarrollo.`);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Admin Navbar, slightly different from regular user navbar for branding */}
            {/* THIS IS THE Navbar that was causing "Navbar is not defined" */}
            <Navbar expand="lg" variant="dark" bg="dark" className="sticky-top">
                <Container fluid>
                    <Navbar.Brand href="/">Cinex Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="adminNavbar" />
                    <Navbar.Collapse id="adminNavbar">
                        <Nav className="ms-auto">
                            <Nav.Link href="#"><Speedometer className="me-1" /> Dashboard</Nav.Link>
                            <Nav.Link href="/landing"><i className="bi bi-box-arrow-right"></i> Cerrar Sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className="flex-grow-1">
                <Row>
                    <Col md={3} lg={2} className="sidebar d-none d-md-block">
                        <Nav className="flex-column position-sticky pt-3">
                            <Nav.Link href="#" className="active"><Speedometer className="me-2" /> Resumen</Nav.Link>
                            <Nav.Link href="#"><Film className="me-2" /> Funciones</Nav.Link>
                            <Nav.Link href="#"><Building className="me-2" /> Salas</Nav.Link>
                            <Nav.Link href="#"><People className="me-2" /> Usuarios</Nav.Link>
                            <Nav.Link href="#"><Receipt className="me-2" /> Transacciones</Nav.Link>
                            <Nav.Link href="#"><Gear className="me-2" /> Configuración</Nav.Link>
                        </Nav>
                    </Col>

                    <Col md={9} lg={10} className="px-md-4">
                        <div className="main-content shadow-sm">
                            <h2 className="text-dark mb-4">Panel de Administración</h2>

                            <Row xs={1} md={3} className="g-4 mb-4">
                                <Col>
                                    <Card className="dashboard-card shadow-sm">
                                        <Card.Body>
                                            {/* THIS IS THE Ticket that was causing "Ticket is not defined" */}
                                            <Ticket size={40} className="text-primary mb-2" />
                                            <Card.Title as="h4">Boletos Vendidos</Card.Title>
                                            <Card.Text className="fw-bold fs-4 text-success">{dashboardStats.ticketsSold}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="dashboard-card shadow-sm">
                                        <Card.Body>
                                            <i className="bi bi-calendar-event" /> {/* Assuming bootstrap-icons font is loaded globally */}
                                            <Card.Title as="h4">Funciones Activas</Card.Title>
                                            <Card.Text className="fw-bold fs-4 text-success">{dashboardStats.activeFunctions}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="dashboard-card shadow-sm">
                                        <Card.Body>
                                            <People size={40} className="text-primary mb-2" />
                                            <Card.Title as="h4">Nuevos Usuarios (Mes)</Card.Title>
                                            <Card.Text className="fw-bold fs-4 text-success">{dashboardStats.newUsersMonth}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <h3 className="text-dark mt-5 mb-3">Próximas Funciones</h3>
                            <div className="table-responsive">
                                <Table striped bordered hover className="table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Título</th>
                                            <th>Sala</th>
                                            <th>Fecha</th>
                                            <th>Hora</th>
                                            <th>Boletos Disp.</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {upcomingFunctions.map((func, index) => (
                                            <tr key={func.id}>
                                                <td>{index + 1}</td>
                                                <td>{func.title}</td>
                                                <td>{func.sala}</td>
                                                <td>{func.date}</td>
                                                <td>{func.time}</td>
                                                <td>{func.ticketsAvailable}</td>
                                                <td>
                                                    <Button variant="info" size="sm" className="me-2" onClick={() => handleAction('Ver', func.id, func.title)}>
                                                        <Eye /> Ver
                                                    </Button>
                                                    <Button variant="warning" size="sm" className="me-2" onClick={() => handleAction('Editar', func.id, func.title)}>
                                                        <Pencil /> Editar
                                                    </Button>
                                                    <Button variant="danger" size="sm" onClick={() => handleAction('Eliminar', func.id, func.title)}>
                                                        <Trash /> Eliminar
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>

                            <Button variant="primary" className="mt-4"><PlusCircle className="me-2" /> Agregar Nueva Función</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <FooterComponent />
        </div>
    );
};

export default AdminDashboardPage;