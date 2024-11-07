// src/pages/TeoriaNumeros.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaNumeros() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const verificarRespuesta = (opcion) => {
        const correcta = 3; // Número correcto de elementos en el ejemplo
        setOpcionSeleccionada(opcion);
        setRespuestaCorrecta(opcion === correcta);
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos los Números!</h2>
            <p className="intro-text">
                <span className="highlight">Los números</span> son mágicos. Nos ayudan a contar nuestras cosas favoritas como juguetes, dulces y ¡mucho más! 🎉
            </p>

            <div className="teoria-content">
                <p>
                    <span role="img" aria-label="finger">👆</span> Empezaremos con <b>contar</b> los números del <span className="highlight">1 al 10</span>. Míralos bien y repítelos en voz alta:
                </p>
                <div className="numeros-container">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <div key={num} className="numero-item">
                            {num}
                        </div>
                    ))}
                </div>
                <p>
                    ¡Muy bien! Ahora sabes contar hasta 10. Los números están por todos lados, y ahora puedes empezar a ver cuántas cosas tienes en tu casa o en el parque.
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: ¿Cuántos objetos ves?</h3>
                <p>Observa los objetos y selecciona la cantidad correcta.</p>
                {!juegoIniciado ? (
                    <button className="jugar-button" onClick={iniciarJuego}>
                        Jugar
                    </button>
                ) : (
                    <div className="juego">
                        <div className="objetos">
                            <span role="img" aria-label="estrella">⭐</span>
                            <span role="img" aria-label="estrella">⭐</span>
                            <span role="img" aria-label="estrella">⭐</span>
                        </div>
                        <div className="opciones">
                            {[2, 3, 4].map((opcion) => (
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

export default TeoriaNumeros;
