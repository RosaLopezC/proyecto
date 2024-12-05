import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaSumasRestas() {
    const [videoVisto, setVideoVisto] = useState(false);
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [juegoActual, setJuegoActual] = useState(0);
    const [vidas, setVidas] = useState(3);
    const [puntaje, setPuntaje] = useState(0);
    const [operacionActual, setOperacionActual] = useState(null);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);
    const [opciones, setOpciones] = useState([]);

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const juegos = [
        {
            nombre: 'Suma de números',
            instrucciones: 'Selecciona el resultado correcto de la suma.',
            teoria: (
                <div className="teoria-box suma">
                    <h4>Teoría: Suma de Números</h4>
                    <p>La suma es una operación matemática que combina dos números para obtener un resultado. Por ejemplo, 2 + 3 = 5.</p>
                    <img src="https://i.ytimg.com/vi/bmlYe14CoII/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygUMA8=&rs=AOn4CLD5jMKyj3BijA9z6mM8RHyCc8FgEg" alt="Suma" />
                </div>
            ),
            video: "https://www.youtube.com/embed/oexd_Dfic_Q", // URL de embebido
            generarOperacion: () => {
                const num1 = numeros[Math.floor(Math.random() * numeros.length)];
                const num2 = numeros[Math.floor(Math.random() * numeros.length)];
                const resultado = num1 + num2;
                setOperacionActual(`${num1} + ${num2}`);
                setRespuestaCorrecta(resultado);
                setOpciones(generarOpciones(resultado));
            },
            verificarRespuesta: (respuesta) => {
                if (respuesta === respuestaCorrecta) {
                    setPuntaje((prev) => prev + 1);
                } else {
                    setVidas((prev) => prev - 1);
                }
                juegos[juegoActual].generarOperacion();
            }
        },
        {
            nombre: 'Resta de números',
            instrucciones: 'Selecciona el resultado correcto de la resta.',
            teoria: (
                <>
                    <div className="teoria-box resta">
                        <h4>Teoría: Resta de Números</h4>
                        <p>La resta es una operación matemática que quita un número de otro para obtener un resultado. Por ejemplo, 5 - 3 = 2.</p>
                        <img src="https://i.ytimg.com/vi/HvuMleYdhG0/maxresdefault.jpg" alt="Resta" />
                    </div>
                </>
            ),
            video: "https://www.youtube.com/embed/42vjqtleG9E", // URL de embebido
            generarOperacion: () => {
                let num1, num2, resultado;
                do {
                    num1 = numeros[Math.floor(Math.random() * numeros.length)];
                    num2 = numeros[Math.floor(Math.random() * numeros.length)];
                    resultado = num1 - num2;
                } while (resultado < 0);
                setOperacionActual(`${num1} - ${num2}`);
                setRespuestaCorrecta(resultado);
                setOpciones(generarOpciones(resultado));
            },
            verificarRespuesta: (respuesta) => {
                if (respuesta === respuestaCorrecta) {
                    setPuntaje((prev) => prev + 1);
                } else {
                    setVidas((prev) => prev - 1);
                }
                juegos[juegoActual].generarOperacion();
            }
        }
    ];

    const generarOpciones = (correcta) => {
        const opciones = [correcta];
        while (opciones.length < 4) {
            const opcion = correcta + (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 1);
            if (!opciones.includes(opcion) && opcion >= 0) {
                opciones.push(opcion);
            }
        }
        return opciones.sort(() => Math.random() - 0.5);
    };

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setVidas(3);
        setPuntaje(0);
        juegos[juegoActual].generarOperacion();
    };

    const siguienteJuego = () => {
        setJuegoActual((prev) => prev + 1);
        setVidas(3);
        setPuntaje(0);
        juegos[juegoActual].generarOperacion();
    };

    const reiniciarJuego = () => {
        setVidas(3);
        setPuntaje(0);
        juegos[juegoActual].generarOperacion();
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos a Sumar y Restar! 🎉</h2>
            <p className="intro-text">
                Las <span className="highlight">sumas y restas</span> nos ayudan a manipular números. Practiquemos juntos estas operaciones.
            </p>

            {!videoVisto && (
                <div className="teoria-content">
                    {juegos.map((juego, index) => (
                        <div key={index} className="teoria-item">
                            {juego.teoria}
                            <div className="video-container">
                                <h3>¡Mira este video para aprender más! 📺</h3>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={juego.video}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
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
                    <h3>{juegos[juegoActual].nombre} 🎮</h3>
                    <p>{juegos[juegoActual].instrucciones}</p>
                    <p>Vidas restantes: {vidas} ❤️</p>
                    <p>Puntaje: {puntaje} 🌟</p>
                    <div className="numero-box">
                        {operacionActual}
                    </div>
                    <div className="opciones">
                        {opciones.map((opcion, index) => (
                            <button
                                key={index}
                                className="opcion-button"
                                onClick={() => juegos[juegoActual].verificarRespuesta(opcion)}
                            >
                                {opcion}
                            </button>
                        ))}
                    </div>
                    {vidas === 0 && (
                        <div>
                            <p className="resultado incorrecto">¡Perdiste! 😅</p>
                            <button className="reiniciar-button" onClick={reiniciarJuego}>
                                Reiniciar 🔄
                            </button>
                        </div>
                    )}
                    {puntaje === 5 && (
                        <div>
                            <p className="resultado correcto">¡Felicidades! Has completado el juego. 🎉</p>
                            {juegoActual < juegos.length - 1 ? (
                                <button className="siguiente-juego-button" onClick={siguienteJuego}>
                                    Siguiente Juego ➡️
                                </button>
                            ) : (
                                <p className="felicitaciones">¡Has completado todos los juegos! 🎉</p>
                            )}
                        </div>
                    )}
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${(puntaje / 5) * 100}%` }}></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeoriaSumasRestas;