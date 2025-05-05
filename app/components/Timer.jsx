import { useState, useEffect } from "react";

function Timer() {
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    const start = Date.now();
    setStartTime(start);
    const id = setInterval(() => {
      setElapsed(Date.now() - start);
    }, 1000);
    setTimerId(id);
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
    const endTime = Date.now();
    const duration = endTime - startTime;
    // Save time entry to Supabase
    // Reset states
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>Elapsed Time: {Math.floor(elapsed / 1000)} seconds</p>
    </div>
  );
}
