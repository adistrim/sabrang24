"use client";

import dynamic from 'next/dynamic';
import { motion, useAnimation } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { useEffect, useState } from 'react';
import { FaMusic, FaTheaterMasks, FaPaintBrush, FaAward, FaCalendarAlt, FaMoneyBillAlt, FaLaptop, FaChartLine, FaPalette, FaUserGraduate } from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import TheBall from '@/components/TheBall';
import EventCard from '@/components/EventCard';
import PerformanceCard from '@/components/PerformanceCard';
import { Rubik } from 'next/font/google';
import { SiAmazongames } from "react-icons/si";
import { ImHappy2 } from "react-icons/im";

const rubik = Rubik({ subsets: ['latin'] });

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
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(128,0,128,0.4), rgba(0,0,128,0.4), rgba(0,128,128,0.4))`,
        });
    }, [mousePosition, backgroundControls]);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
            <motion.div
                className="absolute inset-0 opacity-50"
                animate={backgroundControls}
            />

            <TheBall />

            <div className="relative">
                <NavBar />
            </div>

            <main className="flex-grow cursor-default container mx-auto px-4 py-8 sm:py-16 relative flex flex-col justify-center items-center">
                <div className="relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-extrabold mb-4"
                        animate={{
                            opacity: [0.8, 1, 0.8],
                            textShadow: [
                                '0 0 7px rgba(255,255,255,0.3)',
                                '0 0 10px rgba(255,255,255,0.5)',
                                '0 0 7px rgba(255,255,255,0.3)',
                            ],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                        }}
                        whileHover={{
                            scale: 1.025,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 ${rubik.className}`}>
                            SABRANG 2024
                        </span>
                    </motion.h1>

                    <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 font-light tracking-widest">
                        {text}
                        <Cursor cursorColor="pink" />
                    </h2>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <span className="text-lg sm:text-xl md:text-2xl font-light italic text-green-400 flex items-center">
                            <FaMusic className="mr-2" /> Rejoice.
                        </span>
                        <span className="text-lg sm:text-xl md:text-2xl font-light italic text-pink-400 flex items-center">
                            <FaTheaterMasks className="mr-2" /> Rejuvenate.
                        </span>
                        <span className="text-lg sm:text-xl md:text-2xl font-light italic text-yellow-300 flex items-center">
                            <FaPaintBrush className="mr-2" /> Rave.
                        </span>
                    </motion.div>

                    <div className="flex justify-center mb-8 sm:mb-16">
                        <motion.button
                            aria-label="Join Sabrang 2024 Cultural Fest"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                rotate: 3,
                                boxShadow: '0 0 20px rgba(236, 72, 153, 0.7)',
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

            <div className="mt-16 sm:my-[10rem] mb-24">
                <motion.div
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-center"
                    >
                        Sabrang 2024: A Fusion of Cultures, Innovations, and Creativity
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full">
                                <div className="text-4xl text-white">
                                    <FaLaptop />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Tech</h3>
                            <p className="text-gray-400 text-center mt-2">
                                Immerse yourself in the latest technological innovations and
                                competitive coding challenges.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-4 rounded-full">
                                <div className="text-4xl text-white">
                                    <FaChartLine />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Management</h3>
                            <p className="text-gray-400 text-center mt-2">
                                Showcase your business acumen in exciting management-focused
                                events.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gradient-to-br from-orange-300 to-yellow-400 p-4 rounded-full">
                                <div className="text-4xl text-white">
                                    <FaPalette />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Design</h3>
                            <p className="text-gray-400 text-center mt-2">
                                Unleash your creativity through a variety of design-oriented
                                workshops and competitions.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full">
                                <div className="text-4xl text-white">
                                    <FaUserGraduate />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Culture</h3>
                            <p className="text-gray-400 text-center mt-2">
                                Celebrate the rich cultural diversity through performances,
                                workshops, and more.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="mt-16 sm:mt-24 mb-24">
                <motion.div
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-center"
                    >
                        Exciting Events at Sabrang 2024
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EventCard
                            icon={<FaAward className="text-4xl text-purple-500" />}
                            title="Competitions"
                            description="Test your skills in a variety of competitive events and win exciting prizes."
                        />
                        <EventCard
                            icon={<FaCalendarAlt className="text-4xl text-blue-400" />}
                            title="3-Day Festival"
                            description="Immerse yourself in the vibrant culture of Sabrang over three days of unforgettable experiences."
                        />
                        <EventCard
                            icon={<FaMoneyBillAlt className="text-4xl text-pink-400" />}
                            title="Prize Pool: INR 6,00,000+"
                            description="Compete for a chance to win a share of the generous prize pool."
                        />
                        <EventCard
                            icon={<ImHappy2 className="text-4xl text-blue-400" />}
                            title="Wall of Goodness"
                            description="Explore the vibrant cultural diversity through interactive displays and installations."
                        />
                        <EventCard
                            icon={<FaMusic className="text-4xl text-pink-400" />}
                            title="Music Fusion: DJ Night"
                            description="Experience the fusion of diverse musical styles from around the world through captivating DJ performances."
                        />
                        <EventCard
                            icon={<SiAmazongames className="text-4xl text-orange-300" />}
                            title="Mini Games Open for All"
                            description="Participate in a variety of fun and engaging mini-games for everyone to enjoy."
                        />
                    </div>
                </motion.div>
            </div>

            <div className="mt-16 sm:mt-24 mb-24">
                <motion.div
                    className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-center"
                    >
                        Coming Soon
                    </motion.h2>
                    <p className="text-center text-lg sm:text-xl text-gray-500 mb-12">
                        Stay tuned for exclusive performances. Follow us on Instagram <span className="font-bold">@jklusabrang</span> for updates!
                    </p>
                    <div className="text-center">
                        <motion.div
                            className="inline-block px-6 py-3 text-sm font-medium bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            We will reveal it soon!
                        </motion.div>
                    </div>
                </motion.div>
            </div>


        </div>
    );
}