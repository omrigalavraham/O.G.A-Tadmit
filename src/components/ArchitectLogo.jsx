import React from 'react';
import { motion } from 'framer-motion';

const ArchitectLogo = ({ delay = 0.5 }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: delay
            }
        }
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 1.5,
            filter: "blur(20px)"
        },
        visible: (isDot) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: isDot
                ? "blur(0px) drop-shadow(0 0 15px rgba(212,175,55,1))"
                : "blur(0px) drop-shadow(0 0 25px rgba(255,255,255,0.8))",
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        })
    };

    const letters = "O.G.A".split("");

    return (
        <div className="w-full h-full flex items-center justify-center" dir="ltr">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-center space-x-2 sm:space-x-6 p-[60px] md:p-[120px] overflow-visible"
            >
                {letters.map((char, index) => (
                    <motion.span
                        key={index}
                        custom={char === '.'}
                        variants={letterVariants}
                        className={`
                            text-[80px] md:text-[140px] font-black tracking-tighter
                            ${char === '.' ? 'text-[var(--accent-gold)] pb-8' : 'text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300'}
                        `}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default ArchitectLogo;
