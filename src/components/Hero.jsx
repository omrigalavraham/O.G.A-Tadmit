import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TechSphere from './TechSphere';
import ScrambleText from './ScrambleText';
import ArchitectLogo from './ArchitectLogo';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] md:w-[600px] md:h-[600px] rounded-full bg-[var(--accent-gold)] blur-[100px] md:blur-[150px] opacity-20"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] md:w-[500px] md:h-[500px] rounded-full bg-[var(--accent-cyan)] blur-[100px] md:blur-[150px] opacity-10"
                    animate={{ scale: [1.2, 1, 1.2], x: [0, 100, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* 3D Particles Layer */}
            <TechSphere />

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    <motion.h2
                        className="text-[var(--accent-gold)] text-base md:text-3xl font-light tracking-[0.3em] md:tracking-[0.5em] mb-10 uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                    >
                        <ScrambleText text="Welcome to the Future" delay={2.8} />
                    </motion.h2>

                    <h1 className="text-5xl md:text-9xl font-black mb-12 leading-tight">
                        <div className="h-auto min-h-[150px] md:min-h-[200px] mb-4 relative z-20 flex items-center justify-center pointer-events-auto overflow-visible">
                            <ArchitectLogo delay={0.5} />
                        </div>
                        <motion.span
                            dir="ltr"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.8, duration: 0.5 }}
                            className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,white_0%,white_40%,var(--accent-gold)_50%,white_60%,white_100%)] bg-[length:200%_auto] animate-[shine_3s_linear_infinite] pb-4 filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        >
                            <ScrambleText text="Creation By Technology" delay={5.0} />
                        </motion.span>
                    </h1>

                    <motion.p
                        className="text-lg md:text-3xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed px-4 backdrop-blur-none md:backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-white/5 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 7.5, duration: 0.8 }}
                    >
                        אנו מחברים בין <span className="text-white font-bold">אומנות</span> לבין <span className="text-[var(--accent-cyan)] font-bold">טכנולוגיה</span> כדי ליצור חוויות דיגיטליות עוצרות נשימה.
                    </motion.p>
                </motion.div>

                {/* Scroll Indicator Removed */}
            </div>
        </section>
    );
};

export default Hero;
