import React, { useState, useRef } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const timerId = useRef(null); // Uchovává ID časovače mezi renderováními

  const startTimer = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null; // Resetujeme časovač
  };

  return (
    <div>
      <p>Počet sekund: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
