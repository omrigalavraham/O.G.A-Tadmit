import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrambleText = ({ text, className, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

    useEffect(() => {
        if (!isInView) return;

        let iteration = 0;
        let interval = null;

        // Initial delay
        const startTimeout = setTimeout(() => {
            interval = setInterval(() => {
                setDisplayText(
                    text
                        .split('')
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            if (text[index] === ' ') return ' '; // Preserve layout
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3; // Speed of decoding
            }, 30);
        }, delay * 1000);

        return () => {
            clearTimeout(startTimeout);
            if (interval) clearInterval(interval);
        };
    }, [isInView, text, delay]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
            {displayText || text.split('').map(() => '0').join('')}
        </motion.span>
    );
};

export default ScrambleText;
