import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaNumeros() {
    const [videoVisto, setVideoVisto] = useState(false);
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [juegoActual, setJuegoActual] = useState(0);
    const [vidas, setVidas] = useState(3);
    const [puntaje, setPuntaje] = useState(0);
    const [numeroActual, setNumeroActual] = useState(null);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const juegos = [
        {
            nombre: 'Encuentra los números pares e impares',
            instrucciones: 'Selecciona si el número es par o impar.',
            teoria: (
                <div className="teoria-box par-impar">
                    <h4>Teoría: Números Pares e Impares</h4>
                    <p>Los números pares son aquellos que se pueden dividir exactamente entre 2, como 2, 4, 6, 8, 10. Los números impares no se pueden dividir exactamente entre 2, como 1, 3, 5, 7, 9.</p>
                    <img src="https://i.pinimg.com/736x/d2/c9/05/d2c905b3b8202bd9afb28cb2d8860f47.jpg" alt="Pares e Impares" />
                </div>
            ),
            video: "https://www.youtube.com/embed/M4ew1mz2UV8",
            generarNumero: () => {
                const numero = numeros[Math.floor(Math.random() * numeros.length)];
                setNumeroActual(numero);
                setRespuestaCorrecta(numero % 2 === 0 ? 'par' : 'impar');
            },
            verificarRespuesta: (respuesta) => {
                if (respuesta === respuestaCorrecta) {
                    setPuntaje((prev) => prev + 1);
                } else {
                    setVidas((prev) => prev - 1);
                }
                juegos[juegoActual].generarNumero();
            }
        },
        {
            nombre: 'Encuentra el número mayor y menor',
            instrucciones: 'Selecciona el número mayor y menor entre los dos.',
            teoria: (
                <>
                    <div className="teoria-box mayor">
                        <h4>Teoría: Números Mayores</h4>
                        <p>Para encontrar el número mayor entre dos números, simplemente compáralos. El número más grande es el mayor.</p>
                        <img src="https://i.ytimg.com/vi/v67X2aonkU4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfPZBehX2mlOEdEtz0XUpOFKbBDA" alt="Mayor" />
                    </div>
                    <div className="teoria-box menor">
                        <h4>Teoría: Números Menores</h4>
                        <p>Para encontrar el número menor entre dos números, simplemente compáralos. El número más pequeño es el menor.</p>
                        <img src="https://i.ytimg.com/vi/Rxj_0DsQzk8/mqdefault.jpg" alt="Menor" />
                    </div>
                </>
            ),
            video: "https://www.youtube.com/embed/2-T2kAO19Oc",
            generarNumero: () => {
                const num1 = numeros[Math.floor(Math.random() * numeros.length)];
                const num2 = numeros[Math.floor(Math.random() * numeros.length)];
                setNumeroActual([num1, num2]);
                setRespuestaCorrecta(num1 > num2 ? num1 : num2);
            },
            verificarRespuesta: (respuesta) => {
                if (respuesta === respuestaCorrecta) {
                    setPuntaje((prev) => prev + 1);
                } else {
                    setVidas((prev) => prev - 1);
                }
                juegos[juegoActual].generarNumero();
            }
        }
    ];

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setVidas(3);
        setPuntaje(0);
        juegos[juegoActual].generarNumero();
    };

    const siguienteJuego = () => {
        setJuegoActual((prev) => prev + 1);
        setVidas(3);
        setPuntaje(0);
        juegos[juegoActual].generarNumero();
    };

    const reiniciarJuego = () => {
        setVidas(3);
        setPuntaje(0);
        juegos[juegoActual].generarNumero();
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos a Contar! 🎉</h2>
            <p className="intro-text">
                Los <span className="highlight">números</span> nos ayudan a contar objetos. Contemos juntos algunos objetos y aprendamos los números.
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
                        {numeroActual}
                    </div>
                    <div className="opciones">
                        {Array.isArray(numeroActual) ? (
                            numeroActual.map((num) => (
                                <button
                                    key={num}
                                    className="opcion-button"
                                    onClick={() => juegos[juegoActual].verificarRespuesta(num)}
                                >
                                    {num}
                                </button>
                            ))
                        ) : (
                            <>
                                <button className="opcion-button" onClick={() => juegos[juegoActual].verificarRespuesta('par')}>
                                    Par 🟢
                                </button>
                                <button className="opcion-button" onClick={() => juegos[juegoActual].verificarRespuesta('impar')}>
                                    Impar 🔴
                                </button>
                            </>
                        )}
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

export default TeoriaNumeros;