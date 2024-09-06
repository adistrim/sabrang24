"use client";
import NavBar from '@/components/NavBar';
import TheBall from './TheBall';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <TheBall />
      <div className='relative'>
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br text-white overflow-hidden px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-8 text-center"
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          Coming Soon!
        </motion.h1>
        
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm flex justify-center items-center sm:text-base text-gray-300 whitespace-nowrap">
          <FaInstagram className="text-xl sm:text-2xl mr-2 text-pink-700" />
            Stay tuned on our Instagram:
            <Link
              href="https://www.instagram.com/jklusabrang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent"
            >
              @jklusabrang
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;