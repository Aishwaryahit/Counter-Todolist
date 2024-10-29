import React, { useState, useEffect } from 'react';

function Setinterval() {
  const [time, setTime] = useState(60); 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          return 60; 
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer-container">
      <h1 className="timer-title">Countdown Timer</h1>
      <p className="timer-display">Time Remaining: <span>{time} seconds</span></p>
    </div>
  );
}

export default Setinterval;
