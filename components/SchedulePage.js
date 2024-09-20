"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Poppins, Rubik } from 'next/font/google';
import { format, parse } from 'date-fns';
import { Search, Clock, Calendar } from 'lucide-react';
import NavBar from './NavBar';
import TheBall from './TheBall';
import scheduleData from '@/data/schedule.json';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const rubik = Rubik({ subsets: ['latin'] });

const parseCustomDate = (dateString) => {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
};

const formatCustomDate = (date) => {
    return format(parseCustomDate(date), 'MMMM d, yyyy');
};

const SchedulePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState('all');

    const dates = useMemo(() => [...new Set(scheduleData.map(event => event.Date))], []);

    const filteredEvents = useMemo(() => {
        return scheduleData
            .filter(event => 
                (event["Name of Event"].toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
                (event.Date === selectedDate || selectedDate === 'all')
            )
            .sort((a, b) => {
                const dateA = parse(`${a.Date} ${a["Start Time"]}`, 'dd-MM-yyyy HH:mm:ss', new Date());
                const dateB = parse(`${b.Date} ${b["Start Time"]}`, 'dd-MM-yyyy HH:mm:ss', new Date());
                return dateA.getTime() - dateB.getTime();
            });
    }, [searchTerm, selectedDate]);

    const EventNode = ({ event, index }) => {
        const isEven = index % 2 === 0;
        const nodeColor = isEven ? 'bg-pink-500' : 'bg-purple-500';
        const textAlign = isEven ? 'text-right' : 'text-left';
        const flexDirection = isEven ? 'flex-row-reverse' : 'flex-row';

        return (
            <motion.div 
                className={`flex ${flexDirection} items-center mb-8`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <div className={`w-1/2 ${textAlign} px-4`}>
                    <h3 className="text-xl font-bold text-white mb-2">{event["Name of Event"]}</h3>
                    <p className="text-gray-300 flex items-center justify-end">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatCustomDate(event.Date)}
                    </p>
                    <p className="text-gray-300 flex items-center justify-end">
                        <Clock className="w-4 h-4 mr-2" />
                        {`${event["Start Time"]} - ${event["End Time"]}`}
                    </p>
                </div>
                <div className="w-10 h-10 rounded-full border-4 border-white z-10 relative">
                    <div className={`w-6 h-6 ${nodeColor} rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className={`min-h-screen bg-black text-white ${poppins.className}`}>
            <NavBar />
            <TheBall />
            <main className="container mx-auto px-4 py-8 relative z-10">
                <motion.h1
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 sm:mb-12 text-center ${rubik.className}`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400">
                        Event Timeline
                    </span>
                </motion.h1>

                <div className="flex flex-col sm:flex-row justify-center items-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="pl-10 pr-4 py-3 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="w-full sm:w-64">
                        <Select onValueChange={setSelectedDate} value={selectedDate}>
                            <SelectTrigger className="w-full bg-gray-800 text-white rounded-full focus:ring-2 focus:ring-pink-400 px-4 py-3">
                                <SelectValue placeholder="Select a date" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 text-white">
                                <SelectItem value="all">All Dates</SelectItem>
                                {dates.map(date => (
                                    <SelectItem key={date} value={date}>
                                        {formatCustomDate(date)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>
                    {filteredEvents.map((event, index) => (
                        <EventNode key={index} event={event} index={index} />
                    ))}
                </div>

                {filteredEvents.length === 0 && (
                    <motion.p
                        className="text-center text-gray-400 mt-8 text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        No events found. Try adjusting your search or date filter.
                    </motion.p>
                )}

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${rubik.className} text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400`}>
                        Ready to Join the Journey?
                    </h2>
                    <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
                        Don&apos;t miss out on this epic adventure! Secure your spot now.
                    </p>
                    <a
                        href="https://sabrang.ticketless.online/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg"
                    >
                        Get Your Tickets Now!
                    </a>
                </motion.div>
            </main>
        </div>
    );
};

export default SchedulePage;