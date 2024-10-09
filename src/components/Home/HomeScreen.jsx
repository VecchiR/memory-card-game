import { useState } from 'react';
import '../../style/homeScreen.css';

export default function HomeScreen({ setActiveScreen, setDifficulty, dogsArr }) {
  const goPlay = (n) => {
    setDifficulty(n);
    setActiveScreen('gameplay');
  };

  return (
    <div className="home-screen">
      <div className="logo-home">
      <img src="../../assets/shiba-logo-no-shadow.png" alt="" />
        <h1>Pawfect Memory</h1>
      </div>
      <div className="home-buttons">
        <button onClick={() => goPlay(1)}>Easy</button>
        <button onClick={() => goPlay(2)}>Medium</button>
        <button onClick={() => goPlay(3)}>Hard</button>
      </div>
    </div>
  );
}
