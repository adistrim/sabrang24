"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { Poppins, Rubik } from 'next/font/google';
import teamData from '@/data/teamlist.json';
import NavBar from './NavBar';

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const rubik = Rubik({ subsets: ['latin'] });

const TeamPage = () => {
    const ocMembers = teamData.filter(member => member.role === "OC");
    const coreMembers = teamData.filter(member => member.role === "Core");
    const adminMembers = teamData.filter(member => member.role === "Admin");

    const TeamMemberCard = ({ member }) => (
        <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
        >
            <Image
                src={member.img}
                alt={member.Name}
                width={300}
                height={300}
                layout="responsive"
                objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4">
                <div className="flex justify-between items-end">
                    <div className="text-left">
                        <h3 className="text-[0.8rem] sm:text-lg font-bold mb-1">{member.Name}</h3>
                        <p className="text-[0.6rem] sm:text-sm text-gray-300">
                            {member.role === 'Core' ? member.committee :
                                member.role === 'Admin' ? member.position :
                                    'Organizing Committee'}
                        </p>
                    </div>
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        aria-label={`LinkedIn profile of ${member.Name}`}
                    >
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>
        </motion.div>
    );

    const AdminSection = ({ title, members }) => (
        <>
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
                        {` ${title} `}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {members.map((member, index) => (
                    <div key={member.Name} className={`
                        ${index === 0 ? 'col-span-2 sm:col-span-1' : ''}
                        ${index === 1 ? 'sm:col-start-2' : ''}
                        ${index === 2 ? 'sm:col-start-3' : ''}
                    `}>
                        <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>
        </>
    );

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
                        Meet Our Team
                    </span>
                </motion.h1>

                <AdminSection title="ADMINISTRATIVE TEAM" members={adminMembers} />

                {/* Organizing Committee Section */}
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
                            {" ORGANIZING COMMITTEE "}
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
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {ocMembers.map((member) => (
                        <TeamMemberCard key={member.Name} member={member} />
                    ))}
                </div>

                {/* Core Team Section */}
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
                            {" CORE TEAM "}
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

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
                    {coreMembers.map((member) => (
                        <TeamMemberCard key={member.Name} member={member} />
                    ))}
                </div>

                <motion.div
                    className="mt-10 sm:mt-12 md:mt-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <FaStar className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 mx-auto mb-3 sm:mb-4 animate-pulse" />
                    <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${rubik.className} text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400`}>
                        Join the Excitement
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
                        Together, we will make sure to give you incredible, lifelong memories.
                        Our fest offer a platform for talent to shine and ideas to flourish.
                    </p>
                    <a
                        href="https://sabrang.ticketless.online/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                    >
                        Register Now
                    </a>
                </motion.div>
            </main>
        </div>
    );
};

export default TeamPage;