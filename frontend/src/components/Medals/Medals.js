import React from 'react';
import './Medals.css';

const Medals = () => {
  const medals = [
    { topic: 'Números', completed: true, score: 150, image: require('../../assets/menumeros.png') },
    { topic: 'Sumas y Restas', completed: false, score: 0, image: require('../../assets/mesumares.png') },
    { topic: 'Secuencias', completed: true, score: 200, image: require('../../assets/mesecuencias.png') },
    { topic: 'Geometría', completed: false, score: 0, image: require('../../assets/megeometria.png') },
    { topic: 'Fracciones', completed: true, score: 180, image: require('../../assets/mefracciones.png') },
    { topic: 'División', completed: false, score: 0, image: require('../../assets/medivision.png') },
  ];

  return (
    <div className="medals-container">
      <h2>Medallas</h2>
      {medals.map((medal, index) => (
        <div key={index} className={`medal-item ${medal.completed ? 'completed' : ''}`}>
          <img src={medal.image} alt={medal.topic} className="medal-image" />
          <div className="medal-info">
            <div>{medal.topic}</div>
            <div>{medal.completed ? 'Completado' : 'No Completado'}</div>
            <div>{medal.score} XP</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Medals;