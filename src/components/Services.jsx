import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, PenTool, Layout as LayoutIcon, ArrowUpLeft } from 'lucide-react';
import { COLORS } from '../constants';

const services = [
    {
        id: 'tv',
        icon: Monitor,
        title: 'מוערכות תצוגה',
        shortTitle: 'ממשקי TV',
        description: 'עיצוב והקמת ממשקי תצוגה מרהיבים למסכים גדולים, מוקדים וקירות וידאו.',
        color: COLORS.primary
    },
    {
        id: 'web',
        icon: LayoutIcon,
        title: 'אתרי תדמית',
        shortTitle: 'אתרי WEB',
        description: 'אתרים סוחפים שמספרים את הסיפור שלך בצורה ויזואלית ומתקדמת, בסטנדרט בינלאומי.',
        color: '#00f0ff' // Cyan
    },
    {
        id: 'social',
        icon: Smartphone,
        title: 'סושיאל ודיגיטל',
        shortTitle: 'סושיאל',
        description: 'נוכחות דיגיטלית חזקה עם עיצובים שמותאמים בדיוק לפלטפורמות המובילות.',
        color: '#ff0055' // Pink/Red neon
    },
    {
        id: 'branding',
        icon: PenTool,
        title: 'מיתוג גראפי',
        shortTitle: 'מיתוג',
        description: 'יצירת שפה ויזואלית שלמה, מלוגו ועד מוצרי דפוס, שמשדרת יוקרה ומקצועיות.',
        color: '#aeff00' // Lime neon
    }
];

const Services = () => {
    const [activeId, setActiveId] = useState(null); // Default all closed

    return (
        <section id="services" className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden min-h-[800px] flex flex-col justify-center">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[var(--accent-gold)] opacity-[0.05] blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">השירותים <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--text-secondary)]">שלנו</span></h2>
                    <p className="text-[var(--text-secondary)]">בחר כרטיס כדי לגלות את העולם שלנו</p>
                </motion.div>

                {/* THE HOLOGRAPHIC ACCORDION */}
                <div
                    className="flex flex-col md:flex-row gap-4 h-[600px] w-full"
                    onMouseLeave={() => setActiveId(null)} // Reset on leave
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        const isActive = activeId === service.id;
                        const isAnyActive = activeId !== null;

                        return (
                            <motion.div
                                key={service.id}
                                layout
                                onClick={() => setActiveId(isActive ? null : service.id)} // Toggle on click
                                onHoverStart={() => {
                                    if (window.innerWidth > 768) setActiveId(service.id);
                                }}
                                className={`
                                    relative rounded-3xl overflow-hidden cursor-pointer border border-white/5
                                    transition-all duration-500 ease-out
                                    ${isActive
                                        ? 'flex-[3]'
                                        : isAnyActive
                                            ? 'flex-[0.5]'
                                            : 'flex-1' // Equal width when none active
                                    }
                                `}
                                style={{
                                    background: isActive
                                        ? `linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))`
                                        : 'rgba(10,10,10,0.6)',
                                    borderColor: isActive ? service.color : 'rgba(255,255,255,0.05)'
                                }}
                            >
                                {/* Active Glow Background */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 opacity-20 pointer-events-none"
                                        style={{ background: `linear-gradient(to bottom right, ${service.color}, transparent)` }}
                                    />
                                )}

                                {/* Content Container */}
                                <div className="relative h-full w-full p-6 flex flex-col md:flex-row justify-between overflow-hidden">

                                    {/* Collapsed State: Vertical Text (Desktop only) */}
                                    {!isActive && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-20 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <Icon size={32} style={{ color: service.color }} />
                                            <motion.span
                                                animate={{
                                                    opacity: [0.5, 1, 0.5],
                                                    textShadow: [
                                                        "0 0 5px rgba(255,255,255,0)",
                                                        "0 0 20px rgba(255,255,255,0.4)",
                                                        "0 0 5px rgba(255,255,255,0)"
                                                    ]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="hidden md:block text-2xl font-bold tracking-widest text-nowrap transform -rotate-90 text-[var(--text-secondary)]"
                                            >
                                                {service.shortTitle}
                                            </motion.span>
                                            {/* Mobile Title for collapsed state */}
                                            <span className="md:hidden text-lg font-bold text-[var(--text-secondary)]">
                                                {service.shortTitle}
                                            </span>
                                        </div>
                                    )}

                                    {/* Expanded State Content */}
                                    <AnimatePresence mode="popLayout">
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
                                                exit={{ opacity: 0 }}
                                                className="w-full h-full flex flex-col justify-end md:justify-between z-10"
                                            >
                                                {/* Top Icon Area */}
                                                <div className="flex justify-between items-start">
                                                    <div
                                                        className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
                                                        style={{ boxShadow: `0 0 30px ${service.color}30` }}
                                                    >
                                                        <Icon size={40} style={{ color: service.color }} />
                                                    </div>
                                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-50">
                                                        <ArrowUpLeft size={20} />
                                                    </div>
                                                </div>

                                                {/* Bottom Text Area */}
                                                <div className="space-y-4 max-w-lg">
                                                    <motion.h3
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.3 }}
                                                        className="text-3xl md:text-5xl font-black text-white leading-tight"
                                                    >
                                                        {service.title}
                                                    </motion.h3>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: 100 }}
                                                        className="h-1 bg-white/20 rounded-full"
                                                    />
                                                    <motion.p
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.4 }}
                                                        className="text-[var(--text-secondary)] text-lg leading-relaxed"
                                                    >
                                                        {service.description}
                                                    </motion.p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
