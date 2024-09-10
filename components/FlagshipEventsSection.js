import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGuitar, FaMusic } from 'react-icons/fa';
import { SiStylelint } from "react-icons/si";
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const FlagshipEventsSection = () => {
  const events = [
    {
      icon: SiStylelint,
      title: "Panache",
      description: "Strut your style in our electrifying fashion show"
    },
    {
      icon: FaGuitar,
      title: "Band Jam",
      description: "Rock the stage with your band's original compositions"
    },
    {
      icon: FaMusic,
      title: "Dance Battle",
      description: "Showcase your moves in this high-energy dance competition"
    },
  ];

  return (
    <motion.div
      className="bg-gradient-to-r from-purple-900 to-pink-900 p-8 rounded-xl shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2 }}
    >
      <motion.div
        className="absolute top-4 right-4 text-yellow-300"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <FaStar size={24} />
      </motion.div>
      <h2 className={`text-5xl font-bold mb-8 text-center ${playfair.className} text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300`}>
        Flagship Events
      </h2>
      <p className="text-lg leading-relaxed mb-8 text-gray-200">
        Sabrang 2024&apos;s flagship events are the highly anticipated, inter-college group spectacles that take center stage. We offer a magnificent opportunity for institutions nationwide to showcase their talent across fashion, music, and dance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
          >
            <event.icon className="text-4xl mb-4 mx-auto text-pink-300" />
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-300">{event.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="text-center text-lg font-semibold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        This year, we&apos;re elevating the experience with unparalleled technical support, professional set-ups, and a deep commitment to cultural awareness and sustainability.
      </motion.p>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
      >
        <p className="text-xl text-yellow-300 font-semibold mb-4">
          Guess what? There&apos;s more!
        </p>
        <Link href="/events" className="inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-700 transition duration-300">
          See More Events
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default FlagshipEventsSection;