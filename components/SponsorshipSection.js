"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandshake, FaChartLine, FaTimes } from 'react-icons/fa';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const SponsorshipSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const benefits = [
        {
            icon: FaHandshake,
            title: "Brand Exposure",
            description: "Reach thousands of engaged young talents"
        },
        {
            icon: FaChartLine,
            title: "Growing Audience",
            description: "Be part of our exponential year-on-year growth"
        },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    return (
        <motion.div
            className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-8 rounded-xl shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            <h2 className={`text-4xl font-bold mb-4 text-center ${playfair.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300`}>
                Sponsor Sabrang 2024
            </h2>

            <p className="text-sm leading-relaxed mb-6 text-gray-300 max-w-2xl mx-auto text-center">
                Connect with a dynamic audience at India&apos;s premier cultural fest. We hosted 3,000+ attendees last year, and we&apos;re set for even bigger growth!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        className="bg-white bg-opacity-10 p-4 rounded-lg text-center shadow-md"
                        whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                    >
                        <benefit.icon className="text-3xl mb-2 mx-auto text-pink-300" />
                        <h3 className="text-lg font-semibold mb-1 text-white">{benefit.title}</h3>
                        <p className="text-xs text-gray-300">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <button
                    onClick={openModal}
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold py-2 px-6 rounded-full transition duration-300 hover:from-pink-600 hover:to-purple-700 hover:shadow-lg"
                >
                    Become a Sponsor
                </button>
            </motion.div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-lg p-6 max-w-sm mx-4 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                <FaTimes />
                            </button>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Thank You for Your Interest!</h3>
                            <p className="text-gray-600 mb-4">
                                We&apos;re excited about the possibility of partnering with you. Please contact our sponsorship core:
                            </p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="font-semibold text-gray-800">Piyush Agrawal</p>
                                <p className="text-gray-600">+91 9672293708</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SponsorshipSection;
