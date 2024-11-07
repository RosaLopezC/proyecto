// src/pages/TeoriaGeometria.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaGeometria() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    // Preguntas del juego
    const preguntas = [
        {
            pregunta: "¿Cuál de estas figuras es un triángulo?",
            opciones: ["🔺", "🟪", "⚪"],
            respuesta: "🔺"
        },
        {
            pregunta: "¿Cuál de estas figuras es un círculo?",
            opciones: ["🟥", "🔵", "🔶"],
            respuesta: "🔵"
        },
        {
            pregunta: "¿Cuál de estas figuras es un cuadrado?",
            opciones: ["🟦", "🔴", "🔷"],
            respuesta: "🟦"
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
            <h2>¡Aprendamos sobre Figuras Geométricas!</h2>
            <p className="intro-text">
                Las <span className="highlight">figuras geométricas</span> están por todas partes. Hay triángulos, círculos, cuadrados y muchas más. ¡Descubrámoslas juntas!
            </p>

            <div className="teoria-content">
                <p>
                    Un <b>triángulo</b> tiene 3 lados: 🔺 <br />
                    Un <b>círculo</b> es redondo: 🔵 <br />
                    Un <b>cuadrado</b> tiene 4 lados iguales: 🟦
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: Identifica la figura correcta</h3>
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

export default TeoriaGeometria;
