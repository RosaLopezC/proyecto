// src/pages/TeoriaSecuencias.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaSecuencias() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    // Preguntas del juego
    const preguntas = [
        {
            pregunta: "Observa la secuencia: 🌞 🌕 🌞 🌕 ¿Qué sigue?",
            opciones: ["🌞", "🌕", "⭐"],
            respuesta: "🌞"
        },
        {
            pregunta: "Observa la secuencia: 🐶 🐱 🐶 🐱 ¿Qué sigue?",
            opciones: ["🐶", "🐱", "🐭"],
            respuesta: "🐶"
        },
        {
            pregunta: "Observa la secuencia: 🍎 🍌 🍎 🍌 ¿Qué sigue?",
            opciones: ["🍎", "🍌", "🍉"],
            respuesta: "🍎"
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
            <h2>¡Aprendamos sobre Secuencias!</h2>
            <p className="intro-text">
                Una <span className="highlight">secuencia</span> es un patrón que se repite. Observa cómo se repiten las cosas, como el día y la noche. ¡Vamos a ver algunos ejemplos!
            </p>

            <div className="teoria-content">
                <p>
                    Mira esta secuencia: 🌞 🌕 🌞 🌕. Primero está el sol, luego la luna, y se repite. La secuencia sigue un <b>patrón</b>.
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: ¿Qué sigue en la secuencia?</h3>
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

export default TeoriaSecuencias;
