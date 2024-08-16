"use client";

import dynamic from 'next/dynamic';
import { motion, useAnimation } from 'framer-motion';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';
import { FaMusic, FaTheaterMasks, FaPaintBrush } from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const DynamicCountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });

export default function HomePage() {
    const [text] = useTypewriter({
        words: ['October 18-20, 2024'],
        loop: 1,
    });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const backgroundControls = useAnimation();

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        backgroundControls.start({
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,255,0.3), rgba(0,0,255,0.3), rgba(0,255,255,0.3))`,
        });
    }, [mousePosition, backgroundControls]);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <motion.div
                className="absolute inset-0 opacity-50"
                animate={backgroundControls}
            />

            <motion.div
                className="fixed w-20 h-20 rounded-full bg-white opacity-10 pointer-events-none"
                animate={{
                    x: mousePosition.x - 40,
                    y: mousePosition.y - 40,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />

            <div className='relative'>
                <NavBar />
            </div>

            <main className="container mx-auto px-4 py-16 relative flex flex-col justify-center items-center">
                <div className="relative z-10 text-center">
                    <motion.h1
                        className="text-8xl font-extrabold mb-4"
                        animate={{
                            opacity: [0.8, 1, 0.8],
                            textShadow: [
                                "0 0 7px rgba(255,255,255,0.3)",
                                "0 0 10px rgba(255,255,255,0.5)",
                                "0 0 7px rgba(255,255,255,0.3)"
                            ]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                        }}
                        whileHover={{
                            scale: 1.025,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400">
                            Sabrang 2024
                        </span>
                    </motion.h1>

                    <h2 className="text-3xl mb-8 font-light tracking-widest">
                        {text}<Cursor cursorColor='pink' />
                    </h2>

                    <motion.div
                        className="flex justify-center items-center space-x-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <span className="text-2xl font-light italic text-green-400 flex items-center">
                            <FaMusic className="mr-2" /> Rejoice.
                        </span>
                        <span className="text-2xl font-light italic text-pink-400 flex items-center">
                            <FaTheaterMasks className="mr-2" /> Rejuvenate.
                        </span>
                        <span className="text-2xl font-light italic text-yellow-300 flex items-center">
                            <FaPaintBrush className="mr-2" /> Rave.
                        </span>
                    </motion.div>

                    <div className="flex justify-center mb-16">
                        <motion.button
                            aria-label="Join Sabrang 2024 Cultural Fest"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                rotate: 3,
                                boxShadow: "0 0 20px rgba(236, 72, 153, 0.7)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Join the Madness!
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <DynamicCountdownTimer />
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
