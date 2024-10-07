import React, { useState, useEffect } from 'react';

interface CountdownProps {
   hours: number;
   minutes: number;
   seconds: number;
   onCountdownFinished?: () => void;
   onPercentage?: (percentage: number | string) => void;
}

const Countdown: React.FC<CountdownProps> = ({
   hours,
   minutes,
   seconds,
   onCountdownFinished,
   onPercentage,
}) => {
   // Total time in seconds when the countdown starts
   const totalTime = hours * 3600 + minutes * 60 + seconds;

   // State to track the remaining time
   const [time, setTime] = useState<number>(totalTime);

   useEffect(() => {
      getPercentage();
      if (time > 0) {
         const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
         }, 1000);

         return () => clearInterval(interval); // Cleanup interval on unmount
      } else {
         console.log('Countdown finished!');
         onCountdownFinished?.();
      }
   }, [time]);

   const formatTime = (timeInSeconds: number) => {
      const h = Math.floor(timeInSeconds / 3600);
      const m = Math.floor((timeInSeconds % 3600) / 60);
      const s = timeInSeconds % 60;

      return `${h}h ${m}m ${s}s`;
   };

   // Calculate the percentage of time passed
   const getPercentage = () => {
      const percentage = ((totalTime - time) / totalTime) * 100;
      onPercentage?.(percentage.toFixed(0));
   };

   return <span className="relative z-[5]">{formatTime(time)}</span>;
};

export default Countdown;
