import React, { useState, useEffect } from 'react';
import { addCountdownTotalTime } from './utils';

interface CountdownProps {
   hours: number;
   minutes: number;
   seconds: number;
   onCountdownFinished?: () => void;
   onPercentage?: (percentage: number | string) => void;
   totalCountdownTime?: number;
}

const Countdown: React.FC<CountdownProps> = ({
   hours,
   minutes,
   seconds,
   onCountdownFinished,
   onPercentage,
   totalCountdownTime,
}) => {
   // Total time in seconds when the countdown starts
   const totalTime =
      totalCountdownTime || addCountdownTotalTime({ hours, minutes, seconds });

   // State to track the remaining time
   const [time, setTime] = useState<number>(
      addCountdownTotalTime({ hours, minutes, seconds })
   );

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
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;

      const formattedHours = hours > 0 ? `${hours}h ` : '0h ';
      const formattedMinutes = minutes > 0 ? `${minutes}m ` : '0m ';
      const formattedSeconds = seconds > 0 ? `${seconds}s` : '0s';

      return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
   };

   // Calculate the percentage of time passed
   const getPercentage = () => {
      const percentage = ((totalTime - time) / totalTime) * 100;
      onPercentage?.(percentage.toFixed(0));
   };

   return <span className="relative z-[5]">{formatTime(time)}</span>;
};

export default Countdown;
