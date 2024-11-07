// src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    return (
        <div className="navbar">
            <img src="path/to/logo.png" alt="MathPlay Logo" className="logo" />
            <div className="levels">
                <button>Inicial</button>
                <button>Primaria</button>
                <button>Secundaria</button>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Buscar..." />
                <button>Buscar</button>
                <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
        </div>
    );
}

export default Navbar;
