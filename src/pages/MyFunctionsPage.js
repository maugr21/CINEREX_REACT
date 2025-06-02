import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Ticket, InfoCircle } from 'react-bootstrap-icons'; // For icons
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import '../../src/styles.css'; // General styles for the app

const MyFunctionsPage = () => {
    // In a real app, fetch user's tickets from NestJS
    const userTickets = [
        {
            id: '12345',
            title: 'Pelicula X',
            date: '15 de Junio, 2025',
            time: '18:00 hrs',
            sala: 'Sala 1',
            seats: 'A3, A4',
            totalPaid: '190.00'
        },
        {
            id: '67890',
            title: 'Obra de Teatro Y',
            date: '20 de Julio, 2025',
            time: '20:30 hrs',
            sala: 'Sala 2',
            seats: 'B7',
            totalPaid: '150.00'
        }
    ];

    const handleViewTicket = (ticketId) => {
        alert(`Ver boleto ${ticketId} (funcionalidad no implementada).`);
        // In a real app, you might show a modal with the ticket QR/barcode or navigate to a ticket detail page
    };

    const handleViewDetails = (functionTitle) => {
        alert(`Ver detalles de la función "${functionTitle}" (funcionalidad no implementada).`);
        // In a real app, you might navigate to the function detail page
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarComponent />
            <header className="header-section py-4 mb-4">
                <Container>
                    <h1 className="text-dark fw-bold">Mis Boletos y Funciones</h1>
                    <p className="lead text-secondary">Aquí puedes ver todas las funciones para las que has comprado boletos.</p>
                </Container>
            </header>

            <main className="container flex-grow-1">
                <Row className="justify-content-center">
                    <Col xs={12} md={8}>
                        {userTickets.length > 0 ? (
                            userTickets.map(ticket => (
                                <div className="ticket-card shadow-sm" key={ticket.id}>
                                    <h5 className="text-primary">{ticket.title} - Boleto #{ticket.id}</h5>
                                    <p><strong>Fecha:</strong> {ticket.date}</p>
                                    <p><strong>Hora:</strong> {ticket.time}</p>
                                    <p><strong>Sala:</strong> {ticket.sala}</p>
                                    <p><strong>Asiento(s):</strong> {ticket.seats}</p>
                                    <p><strong>Total Pagado:</strong> ${ticket.totalPaid} MXN</p>
                                    <div className="ticket-actions d-flex mt-3 pt-3">
                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => handleViewTicket(ticket.id)}
                                        >
                                            <Ticket className="me-1" /> Ver Boleto
                                        </Button>
                                        <Button
                                            variant="outline-info"
                                            size="sm"
                                            onClick={() => handleViewDetails(ticket.title)}
                                        >
                                            <InfoCircle className="me-1" /> Detalles de Función
                                        </Button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-tickets-message">
                                <p className="mb-0">Aún no tienes boletos comprados. ¡Explora nuestras <a href="/funciones">funciones</a>!</p>
                            </div>
                        )}
                    </Col>
                </Row>
            </main>
            <FooterComponent />
        </div>
    );
};

export default MyFunctionsPage;