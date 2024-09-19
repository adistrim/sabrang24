import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { FaMusic, FaTheaterMasks, FaPaintBrush } from 'react-icons/fa';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import localFont from 'next/font/local'

const spaceRanger = localFont({ src: '../public/fonts/spaceranger.ttf' })

const DynamicCountdownTimer = dynamic(() => import('../components/CountdownTimer'), { ssr: false });

export default function HeroSection() {
    const [text] = useTypewriter({
        words: ['October 18-20, 2024'],
        loop: 1,
    });

    const openModal = () => {
        window.open('http://sabrang.ticketless.online/', '_blank');
    };

    return (
        <div className='min-h-screen'>
            <div className="relative">
                <NavBar />
            </div>

            <main className="flex-grow cursor-default container mx-auto px-4 pt-8 relative flex flex-col justify-center items-center">
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
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 ${spaceRanger.className}`}>
                            SABRANG 2024
                        </span>
                    </motion.h1>

                    <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 font-light tracking-widest">
                        {text}
                        <Cursor cursorColor="purple" />
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
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                rotate: 3,
                                boxShadow: '0 0 20px rgba(138, 43, 226, 0.7)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={openModal}
                        >
                            Register Now!
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
    )
}