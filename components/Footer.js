"use client";

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
        <footer className="bg-gray-900 text-gray-300 py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center mb-12">
                    <Image 
                        src="/logo/jklu-logo-white.png" 
                        alt="JKLU Logo" 
                        width={100} 
                        height={100}
                        className="mb-4"
                    />
                    <h3 className={`text-2xl font-bold text-white mb-2 ${rubik.className}`}>JK Lakshmipat University</h3>
                    <p className="text-lg text-gray-400">Presents</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mb-12">
                        <motion.h2
                            className="text-5xl md:text-6xl font-extrabold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${spaceRanger.className}`}>
                                SABRANG 2024
                            </span>
                        </motion.h2>
                        <motion.p
                            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Rejoice. Rejuvenate. Rave.
                        </motion.p>
                        <motion.button
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={copyToClipboard}
                        >
                            <FaShareAlt className="inline-block mr-2" /> Share the hype
                        </motion.button>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">Connect</h3>
                        <a href="https://www.instagram.com/jklusabrang" className="block hover:text-purple-400 transition duration-300 mb-3 text-lg">
                            <FaInstagram className="inline-block mr-2" /> @jklusabrang
                        </a>
                        <p className="block hover:text-purple-400 transition duration-300 text-lg">
                            <FaPhone className="inline-block mr-2" /> +91 9414828604
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">Location</h3>
                        <a href="https://www.google.com/maps/place/JK+Lakshmipat+University/@26.8361186,75.6476541,872m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396c4af4fe68f403:0x3bf05f95df22b8c4!8m2!3d26.8361138!4d75.650229!16s%2Fm%2F0cp46q7!5m1!1e2?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" className="block hover:text-purple-400 transition duration-300 text-lg">
                            <FaMapMarkerAlt className="inline-block mr-2" /> JK Lakshmipat University
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2 text-white">Quick Links</h3>
                        <a href="/about" className="block hover:text-purple-400 transition duration-300 mb-3 text-lg">About Sabrang</a>
                        <a href="/events" className="block hover:text-purple-400 transition duration-300 mb-3 text-lg">Events</a>
                        <a href="http://sabrang.ticketless.online/" target='_blank' className="block hover:text-purple-400 transition duration-300 text-lg">Register Now</a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="mb-3 text-lg">
                        Designed with 💖 by <a href="https://www.linkedin.com/in/rupakshi-sharma-interaction-designer" className="hover:text-purple-400 transition duration-300">Rupakshi</a>
                    </p>
                    <p className="mb-4 text-lg">
                        Coded with 🧠 by <a href="https://adistrim.in" className="hover:text-purple-400 transition duration-300">adistrim</a>
                    </p>
                    <p className="text-md text-gray-500">&copy; 2024 <a href="https://jklu.edu.in" className="hover:text-purple-400 transition duration-300">JK Lakshmipat University</a>. All rights reserved.</p>
                </div>
            </div>

            <Toaster />
        </footer>
    );
};

export default Footer;