// src/pages/TeoriaDivision.js
import React, { useState } from 'react';
import '../styles/Teoria.css';

function TeoriaDivision() {
    const [juegoIniciado, setJuegoIniciado] = useState(false);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const iniciarJuego = () => {
        setJuegoIniciado(true);
        setRespuestaCorrecta(false);
        setOpcionSeleccionada(null);
    };

    const verificarRespuesta = (opcion) => {
        const correcta = "🍎"; // Respuesta correcta para el juego de división
        setOpcionSeleccionada(opcion);
        setRespuestaCorrecta(opcion === correcta);
    };

    return (
        <div className="teoria-container">
            <h2>¡Aprendamos sobre División!</h2>
            <p className="intro-text">
                La <span className="highlight">división</span> es cuando compartimos cosas en partes iguales. Por ejemplo, si tienes 4 manzanas y las compartes con 2 amigos, cada uno recibe 2 manzanas 🍎.
            </p>

            <div className="teoria-content">
                <p>
                    Si tienes 6 dulces y los divides entre 3 personas, cada persona recibe <b>2 dulces</b>. Así funciona la división: <span className="highlight">repartir en partes iguales</span>.
                </p>
                <p className="ejemplo">
                    🍬 🍬 🍬 🍬 🍬 🍬
                </p>
            </div>

            <div className="juego-container">
                <h3>Juego: ¿Cuántas manzanas tiene cada amigo?</h3>
                <p>Si tienes 2 amigos y 2 manzanas, ¿cuántas tiene cada uno?</p>
                {!juegoIniciado ? (
                    <button className="jugar-button" onClick={iniciarJuego}>
                        Jugar
                    </button>
                ) : (
                    <div className="juego">
                        <div className="opciones">
                            {["🍏", "🍎", "🍉"].map((opcion) => (
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

export default TeoriaDivision;
