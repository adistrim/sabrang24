import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Star = ({ top, left, size, delay }) => (
    <motion.div
        className="absolute bg-white rounded-full"
        style={{
            top: `${top}%`,
            left: `${left}%`,
            width: size,
            height: size,
        }}
        animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8],
        }}
        transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: delay,
        }}
    />
);

export default function StarryBackground() {
    const [stars, setStars] = useState([]);
    const screenWidth = window.innerWidth;
    const starCount = screenWidth > 768 ? 150 : 50;

    useEffect(() => {
        const newStars = Array.from({ length: starCount }, (_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {stars.map((star) => (
                <Star key={star.id} {...star} />
            ))}
        </div>
    );
};
