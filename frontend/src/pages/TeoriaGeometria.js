import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaGeometria() {
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
            <h2>¡Aprendamos sobre Figuras Geométricas! 🎉</h2>
            <p className="intro-text">
                Las <span className="highlight">figuras geométricas</span> están por todas partes. Hay triángulos, círculos, cuadrados y muchas más. ¡Descubrámoslas juntas!
            </p>

            {!videoVisto && (
                <div className="teoria-content">
                    <div className="teoria-box geometria">
                        <h4>Teoría: Figuras Geométricas</h4>
                        <p>Las figuras geométricas son formas básicas que encontramos en nuestro entorno. Algunos ejemplos son:</p>
                        <ul>
                            <li>Un <b>triángulo</b> tiene 3 lados: 🔺</li>
                            <li>Un <b>círculo</b> es redondo: 🔵</li>
                            <li>Un <b>cuadrado</b> tiene 4 lados iguales: 🟦</li>
                        </ul>
                        <img src="https://i.ytimg.com/vi/SkMtFUv0DAI/maxresdefault.jpg" alt="Figuras Geométricas" />
                    </div>
                    <div className="video-container">
                        <h3>¡Mira este video para aprender más! 📺</h3>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/SXONzObzFk0"
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
                    <h3>Juego: Identifica la figura correcta 🎮</h3>
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

export default TeoriaGeometria;