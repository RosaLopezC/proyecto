// src/pages/TeoriaSecuencias.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaSecuencias() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const verificarRespuesta = (opcion) => {
        const correcta = "🌕"; // Respuesta correcta para la secuencia
        setOpcionSeleccionada(opcion);
        setRespuestaCorrecta(opcion === correcta);
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos sobre Secuencias!</h2>
            <p className="intro-text">
                Una <span className="highlight">secuencia</span> es un orden en el que ocurren las cosas. Por ejemplo, al ponerte los zapatos, primero te pones uno y luego el otro. ¡Vamos a ver un ejemplo divertido! 🌟
            </p>

            <div className="teoria-content">
                <p>
                    Aquí tienes una secuencia: <span role="img" aria-label="sun">🌞</span> <span role="img" aria-label="moon">🌕</span> <span role="img" aria-label="sun">🌞</span> <span role="img" aria-label="moon">🌕</span>. ¿Qué sigue después?
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: ¿Qué sigue en esta secuencia?</h3>
                <p>Selecciona la imagen correcta para continuar la secuencia.</p>
                {!juegoIniciado ? (
                    <button className="jugar-button" onClick={iniciarJuego}>
                        Jugar
                    </button>
                ) : (
                    <div className="juego">
                        <div className="pregunta">
                            <span role="img" aria-label="sun">🌞</span> <span role="img" aria-label="moon">🌕</span> <span role="img" aria-label="sun">🌞</span> <span role="img" aria-label="moon">🌕</span> <span>?</span>
                        </div>
                        <div className="opciones">
                            {["🌞", "🌕", "⭐"].map((opcion) => (
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
                    </div>
                )}
            </div>
        </div>
    );
}

export default TeoriaSecuencias;
