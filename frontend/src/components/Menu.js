import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';
import '../styles/Menu.css';

function Menu() {
    const navigate = useNavigate();

    const [activeLevel, setActiveLevel] = useState(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [sublevels, setSublevels] = useState({});
    const [selectedGrado, setSelectedGrado] = useState(null);
    const [cursos, setCursos] = useState([]); // Cursos dinámicos

    const temas = [
        { titulo: 'Números', imagen: require('../assets/numeros.jpeg'), ruta: '/teoria-numeros' },
        { titulo: 'Sumas y Restas', imagen: require('../assets/sumas_restas.jpeg'), ruta: '/teoria-sumas-restas' },
        { titulo: 'Secuencias', imagen: require('../assets/secuencias.jpeg'), ruta: '/teoria-secuencias' },
        { titulo: 'Geometría', imagen: require('../assets/geometria.jpeg'), ruta: '/teoria-geometria' },
        { titulo: 'Fracciones', imagen: require('../assets/fraccion.jpeg'), ruta: '/teoria-fracciones' },
        { titulo: 'División', imagen: require('../assets/division.jpeg'), ruta: '/teoria-division' },
    ];

    const temasVistos = [
        { titulo: 'Números', avance: '50%', puntos: '150' },
        { titulo: 'Sumas y Restas', avance: '75%', puntos: '200' },
        { titulo: 'Secuencias', avance: '25%', puntos: '50' },
    ];

    const handleLogout = () => {
        console.log('Cerrando sesión...');
        navigate('/');
    };

    const userProfileImage = require('../assets/iconde.png');

    // Obtener subniveles dinámicamente desde la API
    useEffect(() => {
        const fetchGrados = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/grados');
                const data = response.data;

                const groupedSublevels = data.reduce((acc, grado) => {
                    const nivel = grado.nivelAcademico.nombre;
                    if (!acc[nivel]) acc[nivel] = [];
                    acc[nivel].push({ id: grado.id, nombre: grado.nombreGrado });
                    return acc;
                }, {});

                setSublevels(groupedSublevels);
            } catch (error) {
                console.error('Error al obtener los grados:', error);
            }
        };

        fetchGrados();
    }, []);

    // Obtener cursos por grado
    const fetchCursosPorGrado = async (gradoId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/cursos`);
            const cursosFiltrados = response.data.filter(curso => curso.grado.id === gradoId);
            setCursos(cursosFiltrados);
        } catch (error) {
            console.error('Error al obtener los cursos:', error);
        }
    };

    const toggleSublevels = (level) => {
        setActiveLevel(activeLevel === level ? null : level);
    };

    const handleGradoClick = (grado) => {
        setSelectedGrado(grado);
        fetchCursosPorGrado(grado.id);
    };

    return (
        <div className="menu-container">
            {/* Encabezado */}
            <header className="menu-header">
                <img src={require('../assets/logo.png')} alt="MathPlay" className="menu-logo" />
                <div className="menu-levels">
                    {Object.keys(sublevels).map((level) => (
                        <div
                            className="level-container"
                            key={level}
                            onMouseEnter={() => toggleSublevels(level)}
                            onMouseLeave={() => toggleSublevels(null)}
                        >
                            <button className="level-button">{level.toUpperCase()}</button>
                            {activeLevel === level && (
                                <div className="sublevels-container">
                                    {sublevels[level].map((sublevel) => (
                                        <div
                                            key={sublevel.id}
                                            className="sublevel-item"
                                            onClick={() => handleGradoClick(sublevel)}
                                        >
                                            {sublevel.nombre}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="profile-logout-container">
                    <div
                        className="profile-container"
                        onMouseEnter={() => setShowProfileMenu(true)}
                        onMouseLeave={() => setShowProfileMenu(false)}
                    >
                        <img src={userProfileImage} alt="Profile" className="profile-icon" />
                        {showProfileMenu && (
                            <div className="profile-menu">
                                <div className="profile-menu-item" onClick={() => navigate('/profile')}>Mi Perfil</div>
                                <div className="profile-menu-item" onClick={() => navigate('/scores')}>Puntaje</div>
                                <div className="profile-menu-item" onClick={() => navigate('/medals')}>Medallas</div>
                            </div>
                        )}
                    </div>
                    <button className="logout-button" onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            {/* Buscador */}
            <div className="search-container">
                <input type="text" placeholder="Buscar..." />
                <button>Buscar</button>
            </div>

            {/* Cursos dinámicos */}
            {selectedGrado && (
                <div className="cursos-container">
                    <h3>Cursos para {selectedGrado.nombre}</h3>
                    <div className="cursos-buttons">
                        {cursos.map((curso) => (
                            <button key={curso.id} className="curso-button">
                                {curso.titulo}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Contenido principal */}
            <div className="content-container">
                <div className="cards-container">
                    {temas.map((tema, index) => (
                        <Card key={index} titulo={tema.titulo} imagen={tema.imagen} onClick={() => navigate(tema.ruta)} />
                    ))}
                </div>
                <div className="topics-viewed-container">
                    <h3>PROGRESO</h3>
                    {temasVistos.map((tema, index) => (
                        <div key={index} className={`topic-viewed-item topic-color-${index}`}>
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
