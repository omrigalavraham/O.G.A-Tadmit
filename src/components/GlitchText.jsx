import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text }) => {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10 block text-white mix-blend-difference">{text}</span>

            {/* Glitch Layer 1 - Cyan */}
            <motion.span
                className="absolute top-0 left-0 -z-10 text-[var(--accent-cyan)] opacity-70"
                initial={{ x: 0 }}
                animate={{
                    x: [-2, 2, -1, 0],
                    clipPath: [
                        'inset(0 0 0 0)',
                        'inset(10% 0 80% 0)',
                        'inset(40% 0 10% 0)',
                        'inset(80% 0 5% 0)',
                        'inset(0 0 0 0)'
                    ]
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    ease: "easeInOut",
                    repeatDelay: 3
                }}
            >
                {text}
            </motion.span>

            {/* Glitch Layer 2 - Gold */}
            <motion.span
                className="absolute top-0 left-0 -z-10 text-[var(--accent-gold)] opacity-70"
                initial={{ x: 0 }}
                animate={{
                    x: [2, -2, 1, 0],
                    clipPath: [
                        'inset(0 0 0 0)',
                        'inset(80% 0 5% 0)',
                        'inset(10% 0 60% 0)',
                        'inset(30% 0 20% 0)',
                        'inset(0 0 0 0)'
                    ]
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2.5,
                    ease: "easeInOut",
                    repeatDelay: 2
                }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchText;
