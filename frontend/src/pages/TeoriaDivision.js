import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaDivision() {
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
            <h2>¡Aprendamos sobre División! 🎉</h2>
            <p className="intro-text">
                La <span className="highlight">división</span> es cuando compartimos cosas en partes iguales. Por ejemplo, si tienes 4 caramelos y los repartes con un amigo, cada uno recibe 2.
            </p>

            {!videoVisto && (
                <div className="teoria-content">
                    <div className="teoria-box division">
                        <h4>Teoría: División</h4>
                        <p>La división es una operación matemática que nos ayuda a compartir o repartir cosas en partes iguales. Por ejemplo:</p>
                        <ul>
                            <li>Si tienes <b>8 galletas</b> y las compartes con 4 amigos, ¡cada uno recibe 2! La división nos ayuda a compartir de manera justa.</li>
                            <li>Si tienes <b>6 manzanas</b> y las compartes entre 3 personas, cada una recibe 2 manzanas.</li>
                        </ul>
                        <img src="https://i.ytimg.com/vi/xNCGGEKh14s/maxresdefault.jpg" alt="División" />
                    </div>
                    <div className="video-container">
                        <h3>¡Mira este video para aprender más! 📺</h3>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/iA0fP4tL67s"
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
                    <h3>Juego: ¿Cuántas obtiene cada persona? 🎮</h3>
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

export default TeoriaDivision;