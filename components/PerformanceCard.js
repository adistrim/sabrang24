import { motion } from 'framer-motion';

const PerformanceCard = ({ image, name, description }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-white text-2xl font-bold">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default PerformanceCard;