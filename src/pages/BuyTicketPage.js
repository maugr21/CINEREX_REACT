import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get function ID from URL
import { Container, Form, Button, Row, Col, Badge } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import '../../src/styles.css'; // General styles for the app

const BuyTicketPage = () => {
    const { functionId } = useParams(); // Get function ID from URL (e.g., /comprar/1)
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const pricePerTicket = 95.00; // Example price

    // Dummy function data (in real app, fetch from NestJS using functionId)
    const functionDetails = {
        id: functionId,
        title: 'Pelicula X',
        date: '2025-06-15',
        time: '18:00 hrs',
        sala: 'Sala 1',
        seats: [
            { id: 'A1', status: 'available' }, { id: 'A2', status: 'available' }, { id: 'A3', status: 'available' },
            { id: 'A4', status: 'occupied' }, { id: 'A5', status: 'occupied' },
            { id: 'B1', status: 'available' }, { id: 'B2', status: 'available' }, { id: 'B3', status: 'available' },
            { id: 'B4', status: 'available' }, { id: 'B5', status: 'available' },
            { id: 'C1', status: 'occupied' }, { id: 'C2', status: 'available' }, { id: 'C3', status: 'available' },
            { id: 'C4', status: 'available' }, { id: 'C5', status: 'available' },
        ]
    };

    const handleSeatClick = (seatId, status) => {
        if (status === 'occupied') return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
        } else if (selectedSeats.length < quantity) {
            setSelectedSeats([...selectedSeats, seatId]);
        } else {
            alert(`Ya seleccionaste el número máximo de asientos (${quantity}).`);
        }
    };

    useEffect(() => {
        // When quantity changes, clear selected seats if new quantity is less than current selected count
        if (selectedSeats.length > quantity) {
            setSelectedSeats([]);
        }
    }, [quantity, selectedSeats]);

    const totalPrice = (selectedSeats.length * pricePerTicket).toFixed(2);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedSeats.length === 0) {
            alert('Por favor, selecciona al menos un asiento.');
            return;
        }
        if (selectedSeats.length !== parseInt(quantity)) {
            alert(`Debes seleccionar exactamente ${quantity} asientos.`);
            return;
        }
        // Handle purchase logic here (send data to NestJS backend)
        console.log('Purchase confirmed!', {
            functionId: functionDetails.id,
            seats: selectedSeats,
            totalPrice: totalPrice
        });
        alert('Compra simulada realizada con éxito!');
        // Redirect to a confirmation page or user's functions page
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarComponent />
            <main className="container flex-grow-1">
                <div className="ticket-purchase-container shadow-sm">
                    <h2 className="text-primary text-center mb-4">Comprar Boleto para "{functionDetails.title}"</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Group controlId="formDate">
                                    <Form.Label>Fecha de la Función</Form.Label>
                                    <Form.Control type="date" value={functionDetails.date} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formTime">
                                    <Form.Label>Hora de la Función</Form.Label>
                                    <Form.Control type="text" value={functionDetails.time} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formSala">
                                    <Form.Label>Sala</Form.Label>
                                    <Form.Control type="text" value={functionDetails.sala} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-4" controlId="formQuantity">
                            <Form.Label>Cantidad de Boletos</Form.Label>
                            <Form.Control
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                min="1"
                                max="10"
                                required
                            />
                        </Form.Group>

                        <div className="seat-map mb-4">
                            <h4>Selecciona tus Asientos</h4>
                            <div className="screen-indicator"></div>
                            <p className="text-muted">Pantalla</p>
                            {/* Render seats dynamically */}
                            {Array.from({ length: Math.ceil(functionDetails.seats.length / 5) }).map((_, rowIndex) => (
                                <div className="seat-row" key={`row-${rowIndex}`}>
                                    {functionDetails.seats.slice(rowIndex * 5, (rowIndex + 1) * 5).map(seat => (
                                        <div
                                            key={seat.id}
                                            className={`seat ${seat.status === 'occupied' ? 'occupied' : ''} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
                                            onClick={() => handleSeatClick(seat.id, seat.status)}
                                        >
                                            {seat.id}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className="d-flex justify-content-center mt-3">
                                <Badge bg="secondary" className="me-2">Disponible</Badge>
                                <Badge bg="primary" className="me-2">Seleccionado</Badge>
                                <Badge bg="danger">Ocupado</Badge>
                            </div>
                        </div>

                        <div className="mb-4 text-center">
                            <h3>Total: ${totalPrice} MXN</h3>
                        </div>

                        <Button type="submit" variant="success" className="btn-purchase">
                            Confirmar Compra
                        </Button>
                    </Form>
                </div>
            </main>
            <FooterComponent />
        </div>
    );
};

export default BuyTicketPage;