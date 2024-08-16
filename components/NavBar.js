'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NavBar = () => {
  const navItems = ['Home', 'About', 'Events', 'Schedule', 'Contact', 'Team'];

  return (
    <nav className="flex justify-center p-6 z-10">
      <motion.div
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-8 py-4 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-white z-50 text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default NavBar;