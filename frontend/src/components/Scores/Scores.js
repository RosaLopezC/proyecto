import React from 'react';
import './Scores.css';

const Scores = () => {
  const levels = [
    { name: 'Matemático', xp: 10, image: require('../../assets/10.png') },
    { name: 'Aritmético', xp: 30, image: require('../../assets/30.png') },
    { name: 'Algebrista', xp: 50, image: require('../../assets/50.png') },
    { name: 'Geómetra', xp: 70, image: require('../../assets/70.png') },
    { name: 'Analista', xp: 90, image: require('../../assets/90.png') },
    { name: 'Calculista', xp: 110, image: require('../../assets/110.png') },
    { name: 'Estadístico', xp: 130, image: require('../../assets/130.png') },
    { name: 'Probabilista', xp: 150, image: require('../../assets/150.png') },
    { name: 'Topólogo', xp: 170, image: require('../../assets/170.png') },
    { name: 'Teórico', xp: 190, image: require('../../assets/190.png') },
  ];

  const userTotalXp = 120; 

  return (
    <div className="scores-container">
      <h2>Puntajes</h2>
      {levels.map((level, index) => (
        <div key={index} className={`score-item ${userTotalXp >= level.xp ? 'completed' : ''}`}>
          <img src={level.image} alt={level.name} className="score-image" />
          <div className="score-info">
            <div>{level.name}</div>
            <div>{level.xp} XP</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scores;