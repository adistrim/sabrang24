"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export default function TheBall() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    setIsDesktop(isDesktop);
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed w-20 h-20 rounded-full bg-white opacity-10 pointer-events-none"
      animate={{
        x: mousePosition.x - 40,
        y: mousePosition.y - 40,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}