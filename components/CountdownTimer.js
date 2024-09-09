'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date('2024-10-18T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });

  return (
    <div className={`flex ${isMobile ? 'flex-wrap justify-center space-x-0 gap-4 my-8' : 'justify-center space-x-8 my-16'} ${rubik.className}`}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        (!isMobile || unit !== 'seconds') && (
          <motion.div
            key={unit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-center bg-black bg-opacity-50 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-pink-500 hover:border-yellow-300 transition-colors duration-300 ${isMobile ? 'w-24' : 'w-32'}`}
          >
            <motion.div className={`text-3xl font-bold mb-1 text-neon-blue ${isMobile ? 'text-2xl' : 'text-5xl'}`}>
              {value.toString().padStart(2, '0')}
            </motion.div>
            <div className={`text-base uppercase text-neon-pink ${isMobile ? 'text-sm' : 'text-lg'}`}>{unit}</div>
          </motion.div>
        )
      ))}
    </div>
  );
};

export default CountdownTimer;
