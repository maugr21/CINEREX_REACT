import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FunctionsPage from './pages/FunctionsPage';
import BuyTicketPage from './pages/BuyTicketPage';
import ProfilePage from './pages/ProfilePage';
import MyFunctionsPage from './pages/MyFunctionsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} /> {/* Default route after login */}
                <Route path="/funciones" element={<FunctionsPage />} />
                <Route path="/comprar/:functionId" element={<BuyTicketPage />} /> {/* Route with parameter */}
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/mis-funciones" element={<MyFunctionsPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
                {/* Add a catch-all route for 404 or redirect */}
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default App;