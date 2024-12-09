import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Usaremos axios, pero puedes usar fetch si prefieres.
import '../styles/Navbar.css';

function Navbar({ onLogout }) {
    const navigate = useNavigate();
    const [niveles, setNiveles] = useState([]); // Estado para almacenar los niveles académicos.

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    // Fetch de los datos de la API
    useEffect(() => {
        const fetchNiveles = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/niveles-academicos');
                setNiveles(response.data); // Guarda los niveles en el estado
            } catch (error) {
                console.error('Error al obtener los niveles académicos:', error);
            }
        };
        fetchNiveles();
    }, []);

    return (
        <div className="navbar">
            <img src="path/to/logo.png" alt="MathPlay Logo" className="logo" />
            <div className="levels">
                {niveles.map((nivel) => (
                    <button key={nivel.id}>{nivel.nombre}</button> // Renderiza un botón por cada nivel
                ))}
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
