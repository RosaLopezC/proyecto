// src/pages/TeoriaSumasRestas.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaSumasRestas() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const verificarRespuesta = (opcion) => {
        const correcta = 5; // Resultado correcto de la suma
        setOpcionSeleccionada(opcion);
        setRespuestaCorrecta(opcion === correcta);
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos a Sumar y Restar!</h2>
            <p className="intro-text">
                <span className="highlight">Sumar</span> y <span className="highlight">Restar</span> es muy divertido. Sumar significa juntar cosas y restar significa quitar cosas. ¡Vamos a aprender con algunos ejemplos! 🌟
            </p>

            <div className="teoria-content">
                <p>
                    <span role="img" aria-label="plus">➕</span> <b>Sumar</b> significa <span className="highlight">agregar</span>. Por ejemplo, si tienes 2 manzanas y te dan 3 más, ¡ahora tienes <span className="highlight">5 manzanas</span> en total!
                </p>
                <div className="ejemplo">
                    <span role="img" aria-label="apple">🍎🍎</span> + <span role="img" aria-label="apple">🍎🍎🍎</span> = <span className="highlight">🍎🍎🍎🍎🍎</span>
                </div>

                <p>
                    <span role="img" aria-label="minus">➖</span> <b>Restar</b> significa <span className="highlight">quitar</span>. Si tienes 5 galletas y te comes 2, te quedan <span className="highlight">3 galletas</span> para después.
                </p>
                <div className="ejemplo">
                    <span role="img" aria-label="cookie">🍪🍪🍪🍪🍪</span> - <span role="img" aria-label="cookie">🍪🍪</span> = <span className="highlight">🍪🍪🍪</span>
                </div>
            </div>

            <div className="juego-container">
                <h3>Juego: ¿Cuánto es 2 + 3?</h3>
                <p>Selecciona la respuesta correcta.</p>
                {!juegoIniciado ? (
                    <button className="jugar-button" onClick={iniciarJuego}>
                        Jugar
                    </button>
                ) : (
                    <div className="juego">
                        <div className="pregunta">
                            <span role="img" aria-label="apple">🍎🍎</span> + <span role="img" aria-label="apple">🍎🍎🍎</span> = ?
                        </div>
                        <div className="opciones">
                            {[4, 5, 6].map((opcion) => (
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

export default TeoriaSumasRestas;
