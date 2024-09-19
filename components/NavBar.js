'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const navItems = ['Home', 'About', 'Events', 'Schedule', 'Team'];
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavItems = ({ mobile = false }) => (
    <ul className={mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}>
      {navItems.map((item) => {
        const href = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`;
        const isActive = pathname === href;

        return (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={href}
              className={`z-10 text-lg font-semibold transition-colors duration-300 ${isActive
                  ? 'text-yellow-300 hover:text-yellow-300'
                  : 'text-white hover:text-yellow-300'
                }`}
              onClick={() => mobile && setIsOpen(false)}
            >
              {item}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );

  return (
    <nav className="relative z-10">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center p-6">
        <motion.div
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-8 py-4 shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavItems />
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden block justify-center p-4">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-5 py-4 shadow-lg">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button onClick={toggleMenu} className="text-[] flex justify-center items-center focus:outline-none">
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
            <motion.div
              className="font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Sabrang
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl px-6 py-4 shadow-lg"
            >
              <NavItems mobile />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
