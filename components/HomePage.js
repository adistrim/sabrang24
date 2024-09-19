"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaMusic, FaAward, FaCalendarAlt, FaMoneyBillAlt, FaLaptop, FaChartLine, FaPalette, FaUserGraduate } from 'react-icons/fa';
import { useTypewriter } from 'react-simple-typewriter';
import TheBall from '@/components/TheBall';
import EventCard from '@/components/EventCard';
import { SiAmazongames } from "react-icons/si";
import { ImHappy2 } from "react-icons/im";
import FlagshipEventsSection from './FlagshipEventsSection';
import PhotoCarousel from './PhotoCarousel';
import HeroSection from './HeroSection';
import EarlyBirdPopup from './EarlyBirdPopup';

export default function HomePage() {
    
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

    const openModal = () => {
        window.open('http://sabrang.ticketless.online/', '_blank');
    };

    return (
        <div className="bg-black text-white overflow-hidden flex flex-col">
            <EarlyBirdPopup />
            <motion.div
                className="absolute inset-0 opacity-50"
                animate={backgroundControls}
            />

            <TheBall />

            <HeroSection />

            <div className="relative md:py-16 bg-gradient-to-b from-purple-900/20 to-blue-900/20">
                <PhotoCarousel />
            </div>

            <div className="relative py-24 bg-gradient-to-b from-blue-900/20 to-pink-900/20">
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

            {/* Exciting Events section */}
            <div className="relative py-24 bg-gradient-to-b from-pink-900/20 to-purple-900/20">
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

            {/* Coming Soon section */}
            <div className="relative py-24 bg-gradient-to-b from-purple-900/20 to-indigo-900/20">
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

            <div className="relative py-24 bg-gradient-to-b from-indigo-900/20 to-blue-900/20">
                <div className="flex-grow container mx-auto px-4 py-12 sm:py-20 relative z-10">
                    <FlagshipEventsSection />
                </div>
            </div>


        </div>
    );
}