import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaFracciones() {
    const [videoVisto, setVideoVisto] = useState(false);
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [vidas, setVidas] = useState(3);
    const [puntaje, setPuntaje] = useState(0);
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
        setVidas(3);
        setPuntaje(0);
        setPreguntaActual(0);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const verificarRespuesta = (opcion) => {
        const correcta = preguntas[preguntaActual].respuesta;
        setOpcionSeleccionada(opcion);
        if (opcion === correcta) {
            setPuntaje((prev) => prev + 1);
            setRespuestaCorrecta(true);
        } else {
            setVidas((prev) => prev - 1);
            setRespuestaCorrecta(false);
        }
    };

    const siguientePregunta = () => {
        setPreguntaActual((prev) => prev + 1);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const reiniciarJuego = () => {
        setVidas(3);
        setPuntaje(0);
        setPreguntaActual(0);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos sobre Fracciones! 🎉</h2>
            <p className="intro-text">
                Las <span className="highlight">fracciones</span> son partes de algo. Por ejemplo, si tienes una pizza y la partes a la mitad, tienes dos pedazos iguales.
            </p>

            {!videoVisto && (
                <div className="teoria-content">
                    <div className="teoria-box fracciones">
                        <h4>Teoría: Fracciones</h4>
                        <p>Las fracciones representan partes de un todo. Por ejemplo:</p>
                        <ul>
                            <li>Si tienes una pizza entera 🍕🍕 y la divides en 2, obtienes dos mitades. Cada mitad es una fracción de la pizza completa.</li>
                            <li>Si divides una manzana 🍏 en dos partes, cada parte es una mitad de la manzana.</li>
                        </ul>
                        <img src="https://i.ytimg.com/vi/c9cTIjBqFTw/maxresdefault.jpg" alt="Fracciones" />
                    </div>
                    <div className="video-container">
                        <h3>¡Mira este video para aprender más! 📺</h3>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/37DTLwh8sUc"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="practicar-button-container">
                        <button className="practicar-button" onClick={() => setVideoVisto(true)}>
                            A Practicar 🎮
                        </button>
                    </div>
                </div>
            )}

            {videoVisto && !juegoIniciado && (
                <button className="jugar-button" onClick={iniciarJuego}>
                    Jugar 🎮
                </button>
            )}

            {juegoIniciado && (
                <div className="juego-container">
                    <h3>Juego: Encuentra la fracción correcta 🎮</h3>
                    <p>{preguntas[preguntaActual].pregunta}</p>
                    <p>Vidas restantes: {vidas} ❤️</p>
                    <p>Puntaje: {puntaje} 🌟</p>
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
                            Siguiente ➡️
                        </button>
                    )}
                    {respuestaCorrecta && preguntaActual === preguntas.length - 1 && (
                        <p className="felicitaciones">¡Felicidades! Has completado el juego. 🎉</p>
                    )}
                    {vidas === 0 && (
                        <div>
                            <p className="resultado incorrecto">¡Perdiste! 😅</p>
                            <button className="reiniciar-button" onClick={reiniciarJuego}>
                                Reiniciar 🔄
                            </button>
                        </div>
                    )}
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${(puntaje / preguntas.length) * 100}%` }}></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeoriaFracciones;