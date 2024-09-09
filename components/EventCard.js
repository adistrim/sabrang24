import { motion } from 'framer-motion';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

const EventCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#1f2937] to-[#374151] p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gradient-to-br hover:from-[#374151] hover:to-[#1f2937] transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4 text-[#7c3aed]">{icon}</div>
        <h3 className={`text-2xl font-bold text-white ${rubik.className}`}>{title}</h3>
      </div>
      <p className="text-[#9ca3af]">{description}</p>
    </motion.div>
  );
};

export default EventCard;