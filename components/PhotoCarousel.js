import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoCarousel = () => {
  const images = [
    { src: "/images/sabrang2023_1.jpg", alt: "Sabrang 2023 Event 1" },
    { src: "/images/sabrang2023_2.jpg", alt: "Sabrang 2023 Event 2" },
    { src: "/images/sabrang2023_3.jpg", alt: "Sabrang 2023 Event 3" },
    { src: "/images/sabrang2023_4.jpg", alt: "Sabrang 2023 Event 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto md:my-12 h-[70vh] relative overflow-hidden md:rounded-xl shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 z-10" />
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
        <h3 className="text-3xl font-bold text-white mb-2">Highlights</h3>
        <p className="text-lg text-gray-200">Relive the magic of last year&apos;s extravaganza</p>
      </div>
      <div className="absolute top-4 right-4 z-30 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;