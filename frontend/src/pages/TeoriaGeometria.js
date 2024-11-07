// src/pages/TeoriaGeometria.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaGeometria() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const verificarRespuesta = (opcion) => {
        const correcta = "🔺"; // Respuesta correcta para el juego de figuras
        setOpcionSeleccionada(opcion);
        setRespuestaCorrecta(opcion === correcta);
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos sobre Figuras Geométricas!</h2>
            <p className="intro-text">
                Las <span className="highlight">figuras geométricas</span> están en todas partes. Hay triángulos, cuadrados, círculos y más. ¡Mira estos ejemplos y diviértete identificando figuras! 🌟
            </p>

            <div className="teoria-content">
                <p>
                    <span className="highlight">Triángulo</span>: Una figura con <b>3 lados</b> y se ve como una montaña. 
                </p>
                <p className="ejemplo">
                    <span role="img" aria-label="triangle">🔺</span>
                </p>
                <p>
                    <span className="highlight">Cuadrado</span>: Una figura con <b>4 lados iguales</b>. Es como una caja.
                </p>
                <p className="ejemplo">
                    <span role="img" aria-label="square">🟪</span>
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: ¿Cuál es el triángulo?</h3>
                <p>Selecciona el triángulo de las opciones.</p>
                {!juegoIniciado ? (
                    <button className="jugar-button" onClick={iniciarJuego}>
                        Jugar
                    </button>
                ) : (
                    <div className="juego">
                        <div className="opciones">
                            {["🔺", "🟪", "⚪"].map((opcion) => (
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

export default TeoriaGeometria;
