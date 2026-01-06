import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className }) => {
    return (
        <motion.div
            className={`flex items-center gap-2 ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ cursor: 'pointer' }}
        >
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[var(--accent-gold)]"
                    initial={{ rotate: 0, scale: 0.8 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ boxShadow: '0 0 10px var(--accent-glow)' }}
                />
                {/* Inner Abstract Shape */}
                <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 text-[var(--accent-gold)]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </motion.svg>
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider leading-none text-white">
                    O.G.A
                </span>
                <span className="text-[0.6rem] tracking-widest text-[var(--text-secondary)] uppercase">
                    Creation & Technology
                </span>
            </div>
        </motion.div>
    );
};

export default Logo;
