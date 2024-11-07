// src/pages/TeoriaFracciones.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaFracciones() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    // Preguntas del juego
    const preguntas = [
        {
            pregunta: "¿Cuál es la mitad de esta pizza? 🍕🍕",
            opciones: ["🍕", "🍕🍕🍕", "🍕🍕"],
            respuesta: "🍕"
        },
        {
            pregunta: "Si tienes una pizza dividida en 4 partes, ¿cuántas partes es un cuarto?",
            opciones: ["🍕🍕", "🍕", "🍕🍕🍕🍕"],
            respuesta: "🍕"
        },
        {
            pregunta: "Si divides una manzana en dos partes, ¿cómo se ve una mitad?",
            opciones: ["🍏", "🍏🍏", "🍏🍏🍏"],
            respuesta: "🍏"
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
            <h2>¡Aprendamos sobre Fracciones!</h2>
            <p className="intro-text">
                Las <span className="highlight">fracciones</span> son partes de algo. Por ejemplo, si tienes una pizza y la partes a la mitad, tienes dos pedazos iguales.
            </p>

            <div className="teoria-content">
                <p>
                    Si tienes una pizza entera 🍕🍕 y la divides en 2, obtienes dos mitades. Cada mitad es una fracción de la pizza completa.
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: Encuentra la fracción correcta</h3>
                {!juegoIniciado ? (
                    <button className="jugar-button" onClick={iniciarJuego}>
                        Jugar
                    </button>
                ) : (
                    <div className="juego">
                        <p>{preguntas[preguntaActual].pregunta}</p>
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

export default TeoriaFracciones;
