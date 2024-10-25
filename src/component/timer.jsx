import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [time, time2] = useState(0);
    const [timemove1, timemove2] = useState(false);

    useEffect(() => {
        if (!timemove1) return;

        const timing = setTimeout(() => {
            time2(prevTime => prevTime + 1);
        }, 1000);

        return () => clearTimeout(timing);
    }, [timemove1, time]); 

    const timestop = () => timemove2(!timemove1);
    const reset = () => { 
        time2(0); 
        timemove2(false); 
    };

    return (
        <div>
            <h2>{time}</h2>
            <button onClick={timestop}>{timemove1 ? 'Pause' : 'Start'}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}