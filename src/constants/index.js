export const NAV_LINKS = [
    { name: 'ראשי', href: '#hero' },
    { name: 'אודות', href: '#about' },
    { name: 'שירותים', href: '#services' },
    { name: 'יצירת קשר', href: '#contact' },
];

export const COLORS = {
    primary: '#d4af37', // Gold
    primaryGlow: 'rgba(212, 175, 55, 0.5)',
    bg: '#050505',
    bgGlass: 'rgba(5, 5, 5, 0.8)',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
};

export const VARIANTS = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    },
    item: {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    },
    fadeInUp: {
        initial: { y: 40, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" }
    },
    scaleIn: {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5 }
    }
};
