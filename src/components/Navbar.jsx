import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyles = {
        background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        transition: 'all 0.3s ease',
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex justify-between items-center"
            style={navbarStyles}
        >
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
                {NAV_LINKS.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium hover:text-[var(--accent-gold)] relative group transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-gold)] transition-all duration-300 group-hover:w-full" />
                    </motion.a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(true)}
            >
                <Menu size={28} />
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <button
                            className="absolute top-6 left-6 text-white/70 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {NAV_LINKS.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-bold hover:text-[var(--accent-gold)]"
                                onClick={() => setMobileMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
