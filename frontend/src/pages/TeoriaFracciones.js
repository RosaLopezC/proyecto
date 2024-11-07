// src/pages/TeoriaFracciones.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaFracciones() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const verificarRespuesta = (opcion) => {
        const correcta = "🌗"; // Respuesta correcta para el juego de fracciones
        setOpcionSeleccionada(opcion);
        setRespuestaCorrecta(opcion === correcta);
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos sobre Fracciones!</h2>
            <p className="intro-text">
                Las <span className="highlight">fracciones</span> nos ayudan a entender partes de algo. Por ejemplo, si cortas una pizza a la mitad, tienes dos partes iguales. Cada parte es una fracción: un medio 🍕.
            </p>

            <div className="teoria-content">
                <p>
                    Aquí tienes una pizza dividida en <b>4 partes iguales</b>. Si tomas una, eso es un <span className="highlight">cuarto</span> de la pizza.
                </p>
                <p className="ejemplo">
                    <span role="img" aria-label="half pizza">🍕 🍕 🍕 🍕</span>
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: ¿Cuál es la fracción correcta?</h3>
                <p>Selecciona la fracción que representa "la mitad".</p>
                {!juegoIniciado ? (
                    <button className="jugar-button" onClick={iniciarJuego}>
                        Jugar
                    </button>
                ) : (
                    <div className="juego">
                        <div className="opciones">
                            {["🌕", "🌗", "🌑"].map((opcion) => (
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

export default TeoriaFracciones;
