'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const NavBar = () => {
  const navItems = ['Home', 'About', 'Events', 'Schedule', 'Contact'];

  return (
    <nav className="bg-transparent p-6 z-10">
      <ul className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href={`/${item.toLowerCase()}`} className="text-white z-50 text-xl font-semibold hover:text-yellow-300 transition-colors duration-300">
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;