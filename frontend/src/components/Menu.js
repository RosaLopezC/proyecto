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
    const [sesiones, setSesiones] = useState([]); // Sesiones dinámicas desde la API
    const [sesionesFiltradas, setSesionesFiltradas] = useState([]); // Sesiones filtradas

    const handleLogout = () => {
        console.log('Cerrando sesión...');
        navigate('/');
    };

    const userProfileImage = '/assets/iconde.png';

    // Datos de progreso y puntaje
    const temasVistos = [
        { titulo: 'Números', avance: '50%', puntos: '150' },
        { titulo: 'Sumas y Restas', avance: '75%', puntos: '200' },
        { titulo: 'Secuencias', avance: '25%', puntos: '50' },
    ];

    // Obtener grados dinámicos desde la API
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

    // Obtener sesiones dinámicas desde la API y eliminar duplicados
    useEffect(() => {
        const fetchSesiones = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/sesiones');
                const sesionesSinDuplicados = eliminarDuplicados(response.data, 'id');
                setSesiones(sesionesSinDuplicados);
                setSesionesFiltradas(sesionesSinDuplicados);
            } catch (error) {
                console.error('Error al obtener las sesiones:', error);
            }
        };

        fetchSesiones();
    }, []);

    // Función para eliminar duplicados por una clave específica
    const eliminarDuplicados = (array, key) => {
        const uniqueSet = new Set();
        return array.filter((item) => {
            const isDuplicate = uniqueSet.has(item[key]);
            uniqueSet.add(item[key]);
            return !isDuplicate;
        });
    };

    const fetchCursosPorGrado = async (gradoId) => {
        try {
            const response = await axios.get('http://localhost:8080/api/cursos');
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

    const handleCursoClick = (cursoId) => {
        const filtradas = sesiones.filter(sesion => sesion.curso.id === cursoId);
        setSesionesFiltradas(filtradas);
    };

    const handleQuitarFiltros = () => {
        setSesionesFiltradas(sesiones); // Restablece las sesiones originales
        setSelectedGrado(null); // Limpia selección de grado
        setCursos([]); // Limpia cursos
    };

    return (
        <div className="menu-container">
            {/* Encabezado */}
            <header className="menu-header">
                <img
                    src={require('../assets/logo.png')}
                    alt="MathPlay"
                    className="menu-logo"
                    onClick={() => navigate('/menu')}
                    style={{ cursor: 'pointer' }}
                />
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

            {/* Progreso y Puntaje */}
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


            {/* Cursos dinámicos */}
            {selectedGrado && (
                <div className="cursos-container">
                    <h3>Cursos para {selectedGrado.nombre}</h3>
                    <div className="cursos-buttons">
                        {cursos.map((curso) => (
                            <button
                                key={curso.id}
                                className="curso-button"
                                onClick={() => handleCursoClick(curso.id)}
                            >
                                {curso.titulo}
                            </button>
                        ))}
                        <button className="clear-filter-button" onClick={handleQuitarFiltros}>
                            Quitar Filtros
                        </button>
                    </div>
                </div>
            )}

            {/* Contenido principal */}
            <div className="content-container">
                <div className="cards-container">
                    {sesionesFiltradas.length > 0 ? (
                        sesionesFiltradas.map((sesion) => (
                            <Card
                                key={sesion.id}
                                titulo={sesion.nombre}
                                imagen={`/assets/${sesion.imagen}`}
                                onClick={() => navigate(sesion.ruta)}
                            />
                        ))
                    ) : (
                        <div className="no-content-message">
                            No hay contenidos en este curso por el momento, vuelve más tarde.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Menu;
