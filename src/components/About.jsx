import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Palette, Cpu, Star } from 'lucide-react';

const TimelineNode = ({ icon: Icon, title, description, side, index, scrollProgress, range }) => {
    // Determine visibility based on the global scroll progress passing this node's range
    // range should be something like [0.1, 0.3] meaning start appearing at 0.1, fully visible by 0.3
    const opacity = useTransform(scrollProgress, range, [0, 1]);
    const scale = useTransform(scrollProgress, range, [0.5, 1]);
    const x = useTransform(
        scrollProgress,
        range,
        side === 'left' ? [50, 0] : [-50, 0]
    );

    // Connector Line Animation
    const connectorScale = useTransform(scrollProgress, range, [0, 1]);

    return (
        <div
            className={`flex items-center justify-between w-full mb-32 relative ${side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* Content Card */}
            <motion.div
                style={{ opacity, scale, x }}
                className={`w-[45%] p-6 md:p-8 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-none md:backdrop-blur-md border border-[var(--accent-gold)]/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] 
                ${side === 'left' ? 'text-right' : 'text-left'}`}
            >
                <div className={`flex items-center gap-4 mb-4 ${side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="p-3 rounded-lg bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        <Icon size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </motion.div>

            {/* Central Dot & Connector */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                {/* The Dot on the Main Line */}
                <motion.div
                    style={{ scale: connectorScale }}
                    className="w-4 h-4 rounded-full bg-[var(--accent-gold)] shadow-[0_0_20px_var(--accent-gold)] z-20 relative"
                />

                {/* Horizontal Connector Line */}
                <motion.div
                    style={{
                        scaleX: connectorScale,
                        originX: side === 'left' ? 1 : 0
                    }}
                    className={`absolute h-[2px] w-[100px] md:w-[150px] bg-gradient-to-r from-[var(--accent-gold)] to-transparent
                    ${side === 'left' ? 'right-4' : 'left-4'}`}
                />
            </div>

            {/* Empty Spacer to balance flex */}
            <div className="w-[45%]" />
        </div>
    );
};

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    // Smooth out the progress for fluid animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // The Main Gold Line Height
    const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} id="about" className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                    למה <span className="text-[var(--accent-gold)]">אנחנו?</span>
                </h2>
                <p className="text-[var(--text-secondary)]">היתרונות שהופכים כל פרויקט ליצירת מופת</p>
            </motion.div>

            <div className="container mx-auto px-4 relative">

                {/* Main Vertical Track (Gray Background Line) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />

                {/* THE LIQUID GOLD FLOW (Filling Line) */}
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute left-1/2 top-0 w-[2px] bg-[var(--accent-gold)] -translate-x-1/2 shadow-[0_0_20px_var(--accent-gold)] z-10 hidden md:block origin-top"
                />

                {/* Timeline Nodes */}
                <div className="relative z-20 pb-20">
                    <TimelineNode
                        icon={Palette}
                        title="עיצוב פורץ גבולות"
                        description="אנו לא מסתפקים בסטנדרט. כל פיקסל מתוכנן בקפדנות כדי ליצור שפה ויזואלית ייחודית שמהפנטת את המשתמשים ומשדרת יוקרה וחדשנות."
                        side="left"
                        scrollProgress={smoothProgress}
                        range={[0.1, 0.35]}
                    />

                    <TimelineNode
                        icon={Cpu}
                        title="טכנולוגיית העתיד"
                        description="ביצועים הם לא מילה גסה. אנו משתמשים בטכנולוגיות המתקדמות ביותר (React, WebGL, Framer) כדי להבטיח שהאתר יטוס במהירות האור."
                        side="right"
                        scrollProgress={smoothProgress}
                        range={[0.4, 0.65]}
                    />

                    <TimelineNode
                        icon={Star}
                        title="חוויה על-חושית"
                        description="אנחנו יוצרים מסעות, לא סתם דפים. המיקרו-אנימציות, המעברים והזרימה של האתר יוצרים חווית משתמש שמרגישה כמעט כמו קסם."
                        side="left"
                        scrollProgress={smoothProgress}
                        range={[0.7, 0.95]}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
