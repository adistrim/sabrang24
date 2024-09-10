"use client";


import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import { FaMusic, FaTheaterMasks, FaPaintBrush } from 'react-icons/fa';
import { Poppins, Playfair_Display, Rubik } from 'next/font/google';
import FlagshipEventsSection from './FlagshipEventsSection';
import SponsorshipSection from './SponsorshipSection';

const rubik = Rubik({ subsets: ['latin'] });

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const AboutPage = () => {
  return (
    <div className={`min-h-screen bg-black text-white overflow-hidden flex flex-col ${poppins.className}`}>
      <motion.div />

      <div className="relative z-10">
        <NavBar />
      </div>

      <main className="flex-grow container mx-auto px-4 py-12 sm:py-20 relative z-10">
        <motion.h1
          className={`text-5xl md:text-7xl font-extrabold mb-12 text-center ${rubik.className}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400">
            About SABRANG 2024
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/DSC06742.JPG"
              alt="Sabrang 2024 Collage"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-110"
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 ${rubik.className}`}>A Cultural Extravaganza</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Sabrang 2024 is an enigmatic, 3-day technical and cultural fest, bringing together diverse attendees from across the nation. With a rich tapestry of competitions, shows, and parties, our dedicated team of 300+ students infuse the event with dedication and innovation.
            </p>
            <p className="text-lg leading-relaxed">
              This year, our motto is to make the students the spotlight of the event, celebrating their brilliance and unique talents. We&apos;re transforming the fest into a vibrant carnival with round-the-clock games, workshops, and breathtaking student-made installations.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className={`text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 ${rubik.className}`}>Our Vision</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: FaMusic, text: "Celebrate", color: "text-pink-400" },
              { icon: FaTheaterMasks, text: "Innovate", color: "text-yellow-400" },
              { icon: FaPaintBrush, text: "Inspire", color: "text-blue-400" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <item.icon className={`text-5xl ${item.color} mb-2`} />
                <span className="text-xl font-semibold">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h2 className={`text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 ${rubik.className}`}>A New Era of Creativity</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Prepare for high-paced, thrilling events that will captivate young adults across the nation. Our student-centric approach embraces and showcases the individuality and creativity of each participant through a variety of artistic performances.
            </p>
            <p className="text-lg leading-relaxed">
              Self-expression, creativity, and collaboration take center stage, highlighted by exceptional and unmatched zeal. Focusing on Gen Z and contemporary culture, this year&apos;s fest promises a carnival unlike any seen before. Join us for an unforgettable experience!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/20231029_155904100_iOS.jpg"
              alt="Sabrang 2024 Performance"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-110"
              width={600}
              height={400}
            />
          </motion.div>
        </div>

        <FlagshipEventsSection />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-20 mb-16"
        >
          <h2 className={`text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 ${rubik.className}`}>
            Partner With Us
          </h2>
          <div className='md:mx-[10rem]'><SponsorshipSection /></div>
        </motion.div>
      </main>
    </div>
  );
};

export default AboutPage;