// src/components/Menu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import '../styles/Menu.css';

function Menu() {
    const navigate = useNavigate();

    const temas = [
        { titulo: 'Juegos de Números', imagen: require('../assets/numeros.jpeg'), ruta: '/teoria-numeros' },
        { titulo: 'Juegos de Sumas y Restas', imagen: require('../assets/sumas_restas.jpeg'), ruta: '/teoria-sumas-restas' },
        { titulo: 'Juegos de Secuencias', imagen: require('../assets/secuencias.jpeg'), ruta: '/teoria-secuencias' },
        { titulo: 'Juegos de Geometría', imagen: require('../assets/geometria.jpeg'), ruta: '/teoria-geometria' },
        { titulo: 'Juegos de Fracciones', imagen: require('../assets/fraccion.jpeg'), ruta: '/teoria-fracciones' },
        { titulo: 'Juegos de División', imagen: require('../assets/division.jpeg'), ruta: '/teoria-division' },
    ];

    return (
        <div className="menu-container">
            <header className="menu-header">
                <img src={require('../assets/logo.png')} alt="MathPlay" className="menu-logo" />
                <div className="menu-levels">
                    <button className="level-button">INICIAL</button>
                    <button className="level-button">PRIMARIA</button>
                    <button className="level-button">SECUNDARIA</button>
                </div>
            </header>

            <div className="search-container">
                <input type="text" placeholder="Buscar..." />
                <button>Buscar</button>
            </div>

            <div className="cards-container">
                {temas.map((tema, index) => (
                    <Card key={index} titulo={tema.titulo} imagen={tema.imagen} onClick={() => navigate(tema.ruta)} />
                ))}
            </div>
        </div>
    );
}

export default Menu;
