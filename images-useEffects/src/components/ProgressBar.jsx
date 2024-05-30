import { useEffect, useState } from 'react';

export default function ProgressBar({timerCount}) {
    const [remainingTime, setRemainingTime] = useState(timerCount);

    useEffect(() => {
        const interval = setInterval(() => {
          setRemainingTime(prev => prev - 10);
        }, 10);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return(
        <progress value={remainingTime} max={timerCount} />
    );
}