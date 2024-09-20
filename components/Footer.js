'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaShareAlt } from 'react-icons/fa';
import { toast, Toaster } from 'react-hot-toast';
import localFont from 'next/font/local'
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });
const spaceRanger = localFont({ src: '../public/fonts/spaceranger.ttf' })

const Footer = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            toast.success('Link copied to clipboard!', {
                duration: 3000,
                position: 'bottom-center',
                style: {
                    background: '#1F2937',
                    color: '#ffffff',
                },
            });
        }).catch(() => {
            toast.error('Failed to copy link. Please try again.');
        });
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-8 sm:py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                    <Image
                        src="/logo/jklu-logo-white.png"
                        alt="JKLU Logo"
                        width={100}
                        height={100}
                        className="mb-4"
                    />
                    <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 ${rubik.className} text-center`}>JK Lakshmipat University</h3>
                    <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 text-center">Presents</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
                        <Image
                            src="/logo/sabrang-high-res.png"
                            alt="Sabrang Logo"
                            width={80}
                            height={80}
                            className="sm:w-[100px] sm:h-[100px]"
                        />
                        <div className="flex flex-col items-center sm:items-start">
                            <motion.h2
                                className={`text-4xl sm:text-5xl md:text-6xl font-extrabold ${spaceRanger.className} text-center sm:text-left`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    SABRANG
                                </span>
                            </motion.h2>
                            <motion.h3
                                className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${spaceRanger.className} text-center sm:text-left`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    2024
                                </span>
                            </motion.h3>
                        </div>
                    </div>

                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-400 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Rejoice. Rejuvenate. Rave.
                    </motion.p>
                    <motion.button
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={copyToClipboard}
                    >
                        <FaShareAlt className="inline-block mr-2" /> Share the hype
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">Connect</h3>
                        <a href="https://www.instagram.com/jklusabrang" className="block hover:text-purple-400 transition duration-300 mb-3 text-base sm:text-lg">
                            <FaInstagram className="inline-block mr-2" /> @jklusabrang
                        </a>
                        <p className="block hover:text-purple-400 transition duration-300 text-base sm:text-lg mb-2">
                            <FaPhone className="inline-block mr-2" /> +91 7357791090
                        </p>
                        <p className="block hover:text-purple-400 transition duration-300 text-base sm:text-lg">
                            <FaPhone className="inline-block mr-2" /> +91 9414828604
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">Location</h3>
                        <a href="https://www.google.com/maps/place/JK+Lakshmipat+University/@26.8361186,75.6476541,872m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396c4af4fe68f403:0x3bf05f95df22b8c4!8m2!3d26.8361138!4d75.650229!16s%2Fm%2F0cp46q7!5m1!1e2?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" className="block hover:text-purple-400 transition duration-300 text-base sm:text-lg">
                            <FaMapMarkerAlt className="inline-block mr-2" /> JK Lakshmipat University
                        </a>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">Quick Links</h3>
                        <a href="/about" className="block hover:text-purple-400 transition duration-300 mb-3 text-base sm:text-lg">About Sabrang</a>
                        <a href="/events" className="block hover:text-purple-400 transition duration-300 mb-3 text-base sm:text-lg">Events</a>
                        <a href="http://sabrang.ticketless.online/" target='_blank' className="block hover:text-purple-400 transition duration-300 text-base sm:text-lg">Register Now</a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
                    <p className="mb-2 sm:mb-3 text-base sm:text-lg">
                        Designed with 💖 by <a href="https://www.linkedin.com/in/rupakshi-sharma-interaction-designer" className="hover:text-purple-400 transition duration-300">Rupakshi</a>
                    </p>
                    <p className="mb-3 sm:mb-4 text-base sm:text-lg">
                        Coded with 🧠 by <a href="https://adistrim.in" className="hover:text-purple-400 transition duration-300">adistrim</a>
                    </p>
                    <p className="text-sm sm:text-md text-gray-500">&copy; 2024 <a href="https://jklu.edu.in" className="hover:text-purple-400 transition duration-300">JK Lakshmipat University</a>. All rights reserved.</p>
                </div>
            </div>

            <Toaster />
        </footer>
    );
};

export default Footer;