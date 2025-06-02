import React from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import '../../src/styles.css'; // General styles for the app

const ProfilePage = () => {
    // In a real app, fetch user data from NestJS
    const userProfile = {
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        phone: '+52 55 1234 5678',
        registrationDate: '15/03/2024',
        role: 'Usuario'
    };

    const handleEditProfile = () => {
        // Logic to open an edit modal or navigate to an edit page
        alert('Funcionalidad de editar perfil en desarrollo.');
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarComponent />
            <main className="container flex-grow-1">
                <div className="profile-container shadow-sm">
                    <h2 className="text-primary text-center mb-4">Mi Perfil</h2>
                    <div className="profile-info">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Nombre:</strong> <span>{userProfile.name}</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Correo Electrónico:</strong> <span>{userProfile.email}</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Teléfono:</strong> <span>{userProfile.phone}</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Fecha de Registro:</strong> <span>{userProfile.registrationDate}</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Rol:</strong> <span>{userProfile.role}</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <Button variant="primary" onClick={handleEditProfile} className="btn-edit-profile mt-4">
                        Editar Perfil
                    </Button>
                </div>
            </main>
            <FooterComponent />
        </div>
    );
};

export default ProfilePage;