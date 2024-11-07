// src/pages/TeoriaSumasRestas.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaSumasRestas() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    // Preguntas del juego
    const preguntas = [
        {
            pregunta: "Si tienes 2 manzanas y te dan 3 más, ¿cuántas tienes en total?",
            opciones: [4, 5, 6],
            respuesta: 5
        },
        {
            pregunta: "Si tienes 5 caramelos y comes 2, ¿cuántos te quedan?",
            opciones: [2, 3, 4],
            respuesta: 3
        },
        {
            pregunta: "Si ves 4 pajaritos y luego llegan 2 más, ¿cuántos pajaritos hay ahora?",
            opciones: [6, 5, 7],
            respuesta: 6
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
            <h2>¡Aprendamos a Sumar y Restar!</h2>
            <p className="intro-text">
                La <span className="highlight">suma</span> nos ayuda a juntar cosas, y la <span className="highlight">resta</span> nos ayuda a quitar cosas. ¡Vamos a ver algunos ejemplos!
            </p>

            <div className="teoria-content">
                <h3>¿Qué es Sumar?</h3>
                <p>
                    Imagina que tienes 2 juguetes y te regalan 1 más. Ahora tienes 3 juguetes. 
                    <span className="highlight">Sumar</span> es juntar cosas.
                </p>

                <h3>¿Qué es Restar?</h3>
                <p>
                    Imagina que tienes 4 caramelos y te comes 2. Ahora tienes 2 caramelos. 
                    <span className="highlight">Restar</span> es quitar cosas.
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: Practica Sumas y Restas</h3>
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

export default TeoriaSumasRestas;
