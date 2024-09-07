import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';

const ScrollRevealAnimation = () => {
  const words = ['Yes', "It's", 'An', 'Absolute', 'Carnival'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const updateIndex = debounce(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerHeight = container.clientHeight;
    const scrollTop = container.scrollTop;
    const newIndex = Math.floor(scrollTop / containerHeight);

    setCurrentIndex(Math.max(0, Math.min(newIndex, words.length - 1)));
  }, 10);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener('scroll', updateIndex);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateIndex);
      }
    };
  }, [updateIndex, words.length]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      className="h-screen bg-black overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {words.map((word, index) => (
        <div
          key={index}
          className="h-screen flex items-center justify-center snap-start"
        >
          <AnimatePresence initial={false}>
            {currentIndex === index && (
              <motion.div
                key={index}
                custom={currentIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 100, damping: 5 },
                  opacity: { duration: 0.01 },
                }}
                className="text-7xl md:text-9xl font-extrabold text-white"
              >
                {word}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ScrollRevealAnimation;
