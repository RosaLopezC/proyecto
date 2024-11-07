// src/components/Card.js
import React from 'react';
import '../styles/Card.css';

function Card({ titulo, imagen, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={imagen} alt={titulo} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{titulo}</h3>
                <button className="card-button">Explorar</button>
            </div>
        </div>
    );
}

export default Card;
