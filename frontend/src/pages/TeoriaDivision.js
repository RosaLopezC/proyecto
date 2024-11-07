// src/pages/TeoriaDivision.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaDivision() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    // Preguntas del juego
    const preguntas = [
        {
            pregunta: "Si tienes 4 galletas y las compartes con 2 amigos, ¿cuántas recibe cada uno?",
            opciones: [1, 2, 3],
            respuesta: 2
        },
        {
            pregunta: "Si tienes 6 manzanas y las compartes entre 3 personas, ¿cuántas recibe cada una?",
            opciones: [1, 2, 3],
            respuesta: 2
        },
        {
            pregunta: "Si tienes 8 dulces y los divides entre 4 amigos, ¿cuántos obtiene cada uno?",
            opciones: [2, 3, 4],
            respuesta: 2
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
            <h2>¡Aprendamos sobre División!</h2>
            <p className="intro-text">
                La <span className="highlight">división</span> es cuando compartimos cosas en partes iguales. Por ejemplo, si tienes 4 caramelos y los repartes con un amigo, cada uno recibe 2.
            </p>

            <div className="teoria-content">
                <p>
                    Si tienes <b>8 galletas</b> y las compartes con 4 amigos, ¡cada uno recibe 2! La división nos ayuda a compartir de manera justa.
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: ¿Cuántas obtiene cada persona?</h3>
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

export default TeoriaDivision;
