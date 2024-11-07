// src/pages/TeoriaNumeros.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaNumeros() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    // Preguntas del juego
    const preguntas = [
        {
            pregunta: "¿Cuántas manzanas ves aquí?",
            imagen: "🍎 🍎 🍎 🍎",
            opciones: [2, 3, 4],
            respuesta: 4
        },
        {
            pregunta: "¿Cuántos gatos ves aquí?",
            imagen: "🐱 🐱 🐱",
            opciones: [3, 4, 5],
            respuesta: 3
        },
        {
            pregunta: "¿Cuántos globos ves aquí?",
            imagen: "🎈 🎈 🎈 🎈 🎈",
            opciones: [4, 5, 6],
            respuesta: 5
        }
    ];

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setPreguntaActual(0);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const verificarRespuesta = (opcion) => {
        const correcta = preguntas[preguntaActual].respuesta;
        setOpcionSeleccionada(opcion);
        setRespuestaCorrecta(opcion === correcta);
    };

    const siguientePregunta = () => {
        setPreguntaActual((prev) => prev + 1);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos a Contar!</h2>
            <p className="intro-text">
                Los <span className="highlight">números</span> nos ayudan a contar objetos. Contemos juntos algunos objetos y aprendamos los números.
            </p>

            <div className="teoria-content">
                <p>
                    Imagina que tienes algunas manzanas, ¿puedes contar cuántas hay? Los números nos dicen cuántos objetos hay en total.
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: Contemos los objetos</h3>
                {!juegoIniciado ? (
                    <button className="jugar-button" onClick={iniciarJuego}>
                        Jugar
                    </button>
                ) : (
                    <div className="juego">
                        <p>{preguntas[preguntaActual].pregunta}</p>
                        <p className="imagen">{preguntas[preguntaActual].imagen}</p>
                        <div className="opciones">
                            {preguntas[preguntaActual].opciones.map((opcion) => (
                                <button
                                    key={opcion}
                                    className={`opcion-button ${opcionSeleccionada === opcion ? 'seleccionada' : ''}`}
                                    onClick={() => verificarRespuesta(opcion)}
                                >
                                    {opcion}
                                </button>
                            ))}
                        </div>
                        {opcionSeleccionada !== null && (
                            <p className={`resultado ${respuestaCorrecta ? 'correcto' : 'incorrecto'}`}>
                                {respuestaCorrecta ? '¡Correcto! 🎉' : 'Intenta nuevamente 😅'}
                            </p>
                        )}
                        {respuestaCorrecta && preguntaActual < preguntas.length - 1 && (
                            <button className="siguiente-button" onClick={siguientePregunta}>
                                Siguiente
                            </button>
                        )}
                        {respuestaCorrecta && preguntaActual === preguntas.length - 1 && (
                            <p className="felicitaciones">¡Felicidades! Has completado el juego. 🎉</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TeoriaNumeros;
