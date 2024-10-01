"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import { Poppins, Rubik } from 'next/font/google';
import { FaStar, FaBook } from 'react-icons/fa';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const rubik = Rubik({ subsets: ['latin'] });

const categories = ['Cultural', 'Management', 'Technical', 'Design', 'Literary', 'Mini Event'];

const EventsPage = ({ events }) => {
  const [activeCategory, setActiveCategory] = useState('Cultural');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filtered = events.filter(event => event.Category === activeCategory);
    setFilteredEvents(filtered);
  }, [activeCategory, events]);

  return (
    <div className={`min-h-screen bg-black text-white overflow-hidden flex flex-col ${poppins.className}`}>
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12 md:py-16 relative z-10">
        <motion.h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 text-center ${rubik.className}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400">
            Discover Our Events
          </span>
        </motion.h1>

        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            <span className="text-yellow-400">25+ Events</span> | Combined Prize Pool of <span className="text-green-400">INR 3,00,000+</span>
          </p>
          <p className="text-[0.5rem] md:text-xs mt-2 text-gray-500">*Final prize pool is subject to registrations.</p>
        </motion.div>

        <motion.div
          className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition-all duration-300`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="my-8 sm:my-12 md:my-16 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-sm sm:text-base text-gray-400">
              <motion.span
                className="inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
              {" SABRANG 2024 "}
              <motion.span
                className="inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
            </span>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {filteredEvents.map((event) => (
              <motion.div
                key={event.Event}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={event.img}
                  alt={event.Event}
                  width={400}
                  height={600}
                  layout="responsive"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{event.Event}</h3>
                    <p className="text-xs sm:text-sm">{event.Description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-10 sm:mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <FaStar className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 mx-auto mb-3 sm:mb-4 animate-pulse" />
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${rubik.className} text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400`}>Join the Excitement</h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            Immerse yourself in a world of creativity, innovation, and cultural richness.
            Our events offer a platform for talent to shine and ideas to flourish.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://sabrang.ticketless.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-md sm:text-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              Register Now
            </a>
            <a
              href="https://storageapi.ticketless.online/ticketify2/sabrang/Rulebook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-md sm:text-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <FaBook className="mr-2" /> Rule Book
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default EventsPage;