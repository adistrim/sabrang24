"use client";

import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion';
import { FaMusic, FaTheaterMasks, FaPaintBrush } from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import TheBall from '@/components/TheBall';
import NavBar from '@/components/NavBar';
import ScrollRevealAnimation from './ScrollRevealAnimation';

const DynamicCountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });

const ParallaxSection = ({ title, description, backgroundImage, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <motion.div
            ref={ref}
            className="h-screen flex items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <motion.div
                className="absolute inset-0 bg-black bg-opacity-60"
                style={{ y }}
            />
            <motion.div
                className="text-center z-10 px-4"
                style={{ opacity }}
            >
                <motion.h2
                    className="text-9xl md:text-[12rem] lg:text-[15rem] font-extrabold mb-6 text-white font-bebas-neue leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        textShadow: '10px 10px 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)',
                        letterSpacing: '0.05em',
                    }}
                >
                    {title}
                </motion.h2>

                <motion.hr
                    className="w-1/4 mx-auto border-t-4 border-white opacity-75 my-8"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "75%", opacity: 0.75 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                />

                <motion.p
                    className="text-2xl md:text-3xl text-white font-light max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        textShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    {description}
                </motion.p>
            </motion.div>
        </motion.div>
    );
};


export default function HomePage() {
    const [text] = useTypewriter({
        words: ['October 18-20, 2024'],
        loop: 1,
    });

    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const sections = [
        { title: "Tech", description: "Tech Wiz? Prove It.", backgroundImage: "/images/tech-background.jpg" },
        { title: "Design", description: "Design Guru? Join Us.", backgroundImage: "/images/design-background.jpg" },
        { title: "Culture", description: "Our Vibe is Different.", backgroundImage: "/images/culture-background.jpg" },
    ];

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <motion.div
                className="fixed inset-0 opacity-50 z-0"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(128,0,128,0.4), rgba(0,0,128,0.4), rgba(0,128,128,0.4))",
                    y: backgroundY
                }}
            />

            <TheBall />

            <div className='sticky top-0 z-50'>
                <NavBar />
            </div>

            <main className="relative">
                <section className="min-h-screen flex flex-col justify-center items-center">
                    <div className="text-center z-10">
                        <motion.h1
                            className="text-6xl md:text-8xl font-extrabold mb-4"
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

                        <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 font-light tracking-widest">
                            {text}<Cursor cursorColor='pink' />
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
                </section>

                {sections.map((section, index) => (
                    <ParallaxSection
                        key={index}
                        title={section.title}
                        description={section.description}
                        backgroundImage={section.backgroundImage}
                        index={index}
                    />
                ))}

            <ScrollRevealAnimation />
            </main>
        </div>
    );
}