import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaSecuencias() {
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
            <h2>¡Aprendamos sobre Secuencias! 🎉</h2>
            <p className="intro-text">
                Una <span className="highlight">secuencia</span> es un patrón que se repite. Observa cómo se repiten las cosas, como el día y la noche. ¡Vamos a ver algunos ejemplos!
            </p>

            {!videoVisto && (
                <div className="teoria-content">
                    <div className="teoria-box secuencia">
                        <h4>Teoría: Secuencias</h4>
                        <p>Una secuencia es un patrón que se repite. Por ejemplo, el sol y la luna se alternan en un patrón diario.</p>
                        <img src="https://i.ytimg.com/vi/FUEa0JZjQHo/maxresdefault.jpg" alt="Secuencia" />
                    </div>
                    <div className="video-container">
                        <h3>¡Mira este video para aprender más! 📺</h3>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/TlxG2HGcQRA"
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
                    <h3>Juego: ¿Qué sigue en la secuencia? 🎮</h3>
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

export default TeoriaSecuencias;