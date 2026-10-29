import React from "react"
import { useState, useEffect, useRef } from 'react';



function StopClock() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapseTime, setElapseTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {}, []);

    function start() {}

    function Stop() {}

    function reset() {}

    function formatTime() { }
    
    return (
      <>
        <div className="Stop-watch">
          <div className="display">
            {formatTime}
            <div className="display-buttons">
              <button onClick={start}>start</button>
              <button onClick={Stop}>stop</button>
              <button onClick={reset}>reset</button>
            </div>
          </div>
        </div>
      </>
    );

}





export default StopClock;