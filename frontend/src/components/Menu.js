import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
    const [selectedLevel, setSelectedLevel] = useState('INICIAL');
    const navigate = useNavigate();

    const temasInicial = [
        { id: 1, title: 'Juegos de Números', img: 'numeros.jpeg' },
        { id: 2, title: 'Juegos de Sumas y Restas', img: 'sumas_restas.jpeg' },
        { id: 3, title: 'Juegos de Secuencias', img: 'secuencias.jpeg' },
        { id: 4, title: 'Juegos de Geometría', img: 'geometria.jpeg' },
        { id: 5, title: 'Juegos de Fracciones', img: 'fraccion.jpeg' },
        { id: 6, title: 'Juegos de División', img: 'division.jpeg' },
    ];

    const renderTemas = () => {
        return temasInicial.map(tema => (
            <div key={tema.id} className="tema-card">
                <img src={tema.img} alt={tema.title} className="tema-img" />
                <div className="tema-content">
                    <p className="tema-title">{tema.title}</p>
                    <button className="explorar-button">Explorar</button>
                </div>
            </div>
        ));
    };

    const handleLogout = () => {
        navigate('/'); // Redirige al login
    };

    return (
        <div className="menu">
            <header className="menu-header">
                <img src="logo.png" alt="MathPlay" className="menu-logo" />
                <div className="search-container">
                    <input type="text" placeholder="Buscar..." className="search-input" />
                    <button className="search-button">Buscar</button>
                </div>
                <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
            </header>
            <nav className="levels">
                <button className={selectedLevel === 'INICIAL' ? 'active' : ''} onClick={() => setSelectedLevel('INICIAL')}>Inicial</button>
                <button className={selectedLevel === 'PRIMARIA' ? 'active' : ''} onClick={() => setSelectedLevel('PRIMARIA')}>Primaria</button>
                <button className={selectedLevel === 'SECUNDARIA' ? 'active' : ''} onClick={() => setSelectedLevel('SECUNDARIA')}>Secundaria</button>
            </nav>
            <div className="temas-container">
                {selectedLevel === 'INICIAL' && renderTemas()}
                {/* Puedes agregar condiciones para mostrar los temas de PRIMARIA y SECUNDARIA */}
            </div>
        </div>
    );
}

export default Menu;
