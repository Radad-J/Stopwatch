import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else if (!isRunning) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const centiseconds = time % 100;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(centiseconds).padStart(2, '0')}`;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-futuristicDark text-futuristicBlue p-10 rounded-lg shadow-lg">
        <div className="text-6xl mb-10">{formatTime(time)}</div>
        <div className="space-x-4">
          <button onClick={handleStartPause} className="px-5 py-2 bg-futuristicBlue text-futuristicDark rounded shadow hover:bg-white transition-all">
            {isRunning ? 'PAUSE' : 'START'}
          </button>
          <button onClick={handleReset} className="px-5 py-2 bg-red-500 text-white rounded shadow hover:bg-red-700 transition-all">
            RESET
          </button>
          <button onClick={handleLap} className="px-5 py-2 bg-green-500 text-white rounded shadow hover:bg-green-700 transition-all">
            LAP
          </button>
        </div>
        <div className="mt-10 space-y-2">
          {laps.map((lap, index) => (
            <div key={index} className="text-lg">
              Lap {index + 1}: {formatTime(lap)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
