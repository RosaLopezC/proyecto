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

    const [activeLevel, setActiveLevel] = useState(null);

    const toggleSublevels = (level) => {
        setActiveLevel(activeLevel === level ? null : level);
    };

    const sublevels = {
        inicial: ['3 años', '4 años', '5 años'],
        primaria: ['1er grado', '2do grado', '3er grado', '4to grado', '5to grado', '6to grado'],
        secundaria: ['1ro', '2do', '3ro', '4to', '5to'],
    };

    return (
        <div className="menu-container">
            <header className="menu-header">
                <img src={require('../assets/logo.png')} alt="MathPlay" className="menu-logo" />
                <div className="menu-levels">
                    <div className="level-container">
                        <button className="level-button" onClick={() => toggleSublevels('inicial')}>
                            INICIAL
                        </button>
                        {activeLevel === 'inicial' && (
                            <div className="sublevels-container">
                                {sublevels.inicial.map((sublevel, index) => (
                                    <div key={index} className="sublevel-item">
                                        {sublevel}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="level-container">
                        <button className="level-button" onClick={() => toggleSublevels('primaria')}>
                            PRIMARIA
                        </button>
                        {activeLevel === 'primaria' && (
                            <div className="sublevels-container">
                                {sublevels.primaria.map((sublevel, index) => (
                                    <div key={index} className="sublevel-item">
                                        {sublevel}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="level-container">
                        <button className="level-button" onClick={() => toggleSublevels('secundaria')}>
                            SECUNDARIA
                        </button>
                        {activeLevel === 'secundaria' && (
                            <div className="sublevels-container">
                                {sublevels.secundaria.map((sublevel, index) => (
                                    <div key={index} className="sublevel-item">
                                        {sublevel}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
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