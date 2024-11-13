import React, { useState } from 'react';
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

    const temasVistos = [
        { titulo: 'Juegos de Números', avance: '50%', puntos: '150' },
        { titulo: 'Juegos de Sumas y Restas', avance: '75%', puntos: '200' },
        { titulo: 'Juegos de Secuencias', avance: '25%', puntos: '50' },
    ];

    const [activeLevel, setActiveLevel] = useState(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const toggleSublevels = (level) => {
        setActiveLevel(activeLevel === level ? null : level);
    };

    const sublevels = {
        inicial: ['3 años', '4 años', '5 años'],
        primaria: ['1er grado', '2do grado', '3er grado', '4to grado', '5to grado', '6to grado'],
        secundaria: ['1er grado', '2do grado', '3ro grado', '4to grado', '5to grado'],
    };

    const handleLogout = () => {
        console.log('Cerrando sesión...');
        navigate('/');
    };

    const userProfileImage = require('../assets/googlelogo.png'); // Imagen por defecto

    return (
        <div className="menu-container">
            <header className="menu-header">
                <img src={require('../assets/logo.png')} alt="MathPlay" className="menu-logo" />
                <div className="menu-levels">
                    {['inicial', 'primaria', 'secundaria'].map((level) => (
                        <div className="level-container" key={level} onMouseEnter={() => toggleSublevels(level)} onMouseLeave={() => toggleSublevels(null)}>
                            <button className="level-button">
                                {level.toUpperCase()}
                            </button>
                            {activeLevel === level && (
                                <div className="sublevels-container">
                                    {sublevels[level].map((sublevel, index) => (
                                        <div key={index} className="sublevel-item">
                                            {sublevel}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="profile-container" onMouseEnter={() => setShowProfileMenu(true)} onMouseLeave={() => setShowProfileMenu(false)}>
                    <img src={userProfileImage} alt="Profile" className="profile-icon" />
                    {showProfileMenu && (
                        <div className="profile-menu">
                            <div className="profile-menu-item">Configuración</div>
                            <div className="profile-menu-item">Puntaje</div>
                            <div className="profile-menu-item">Medallas</div>
                        </div>
                    )}
                </div>
                <button className="logout-button" onClick={handleLogout}>
                    Cerrar Sesión
                </button>
            </header>

            <div className="search-container">
                <input type="text" placeholder="Buscar..." />
                <button>Buscar</button>
            </div>

            <div className="content-container">
                <div className="cards-container">
                    {temas.map((tema, index) => (
                        <Card key={index} titulo={tema.titulo} imagen={tema.imagen} onClick={() => navigate(tema.ruta)} />
                    ))}
                </div>
                <div className="topics-viewed-container">
                    <h3>AVANCES</h3>
                    {temasVistos.map((tema, index) => (
                        <div key={index} className="topic-viewed-item">
                            <div className={`topic-color-box topic-color-${index}`}></div>
                            <div className="topic-info">
                                <div>{tema.titulo}</div>
                                <div className="progress-box">Avance: {tema.avance} 🚀</div>
                                <div className="score-box">Puntos: {tema.puntos} ⭐</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;