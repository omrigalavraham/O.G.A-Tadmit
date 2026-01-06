import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Zap } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulating the "Warp Drive" processing time
        await new Promise(resolve => setTimeout(resolve, 2500));

        setStatus('success');
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden min-h-[800px] flex items-center justify-center bg-black">

            {/* AMBIENT BACKGROUND - MOVING STARS/PORTAL */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] blur-[100px]" />
                {/* Rotating Portal Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-[var(--accent-gold)]/10 rounded-full border-dashed"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-white/5 rounded-full"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <AnimatePresence mode="wait">

                    {/* STATE 1: IDLE - THE CONTROL DECK */}
                    {status === 'idle' && (
                        <motion.div
                            key="form-view"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{
                                scale: 0,
                                opacity: 0,
                                filter: "blur(20px)",
                                transition: { duration: 0.8, ease: "backIn" }
                            }}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Left Panel: Holographic Info */}
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                        READY TO <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--accent-gold)] to-[var(--accent-gold)] animate-pulse">
                                            LAUNCH?
                                        </span>
                                    </h2>
                                    <p className="text-lg text-[var(--text-secondary)] border-l-2 border-[var(--accent-gold)] pl-6">
                                        השיגור שלך לעולם הדיגיטלי מתחיל כאן. <br />
                                        מלא את הבקרה והפעל את המנועים.
                                    </p>
                                </div>

                                <div className="space-y-6 md:pr-10">
                                    <InfoItem icon={Phone} label="COMM_LINK" value="050-1234567" delay={0.1} />
                                    <InfoItem icon={Mail} label="SIGNAL_FREQ" value="hello@ogacreation.com" delay={0.2} />
                                    <InfoItem icon={MapPin} label="BASE_STATION" value="Tel Aviv, IL" delay={0.3} />
                                </div>
                            </div>

                            {/* Right Panel: The Input Console */}
                            <div className="relative">
                                {/* Decorators */}
                                <div className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-[var(--accent-gold)]/30 rounded-tr-3xl" />
                                <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-[var(--accent-gold)]/30 rounded-bl-3xl" />

                                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                    <div className="space-y-6">
                                        <InputGroup label="IDENTIFIER / NAME" placeholder="שם מלא" type="text" />
                                        <InputGroup label="CONTACT / EMAIL" placeholder="אימייל לחזרה" type="email" />
                                        <div className="group relative">
                                            <label className="text-[10px] tracking-[0.2em] font-bold text-[var(--accent-gold)] mb-2 block uppercase">Transmission</label>
                                            <textarea
                                                rows="4"
                                                className="w-full bg-black/50 border-b border-white/20 focus:border-[var(--accent-gold)] pt-2 pb-2 text-white placeholder-white/20 focus:outline-none transition-all duration-300 resize-none hover:bg-black/70"
                                                placeholder="תוכן ההודעה..."
                                            />
                                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full box-shadow-[0_0_10px_var(--accent-gold)]" />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full group relative overflow-hidden bg-[var(--accent-gold)] text-black font-black tracking-widest py-5 px-8 mt-4 clip-path-polygon hover:bg-white transition-colors duration-300"
                                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 95% 100%, 0 100%)' }}
                                        >
                                            <div className="relative z-10 flex items-center justify-center gap-3">
                                                <span>INITIATE SEQUENCE</span>
                                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </div>
                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover:animate-[shine_1s_linear_infinite]" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )}

                    {/* STATE 2: SUBMITTING - WARP DRIVE */}
                    {status === 'submitting' && (
                        <motion.div
                            key="warp-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 2 }}
                            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                        >
                            <div className="relative">
                                {/* The Central Core */}
                                <motion.div
                                    animate={{ scale: [1, 1.5, 50] }}
                                    transition={{ duration: 2.5, times: [0, 0.8, 1], ease: "anticipate" }}
                                    className="w-4 h-4 rounded-full bg-white shadow-[0_0_50px_var(--accent-gold)]"
                                />
                                {/* Warp Lines */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, scale: [1, 3] }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/20"
                                />
                                <div className="absolute top-20 text-[var(--accent-gold)] font-mono text-xs tracking-[0.5em] animate-pulse">
                                    PROCESSING DATA STREAMS...
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STATE 3: SUCCESS - MISSION COMPLETE */}
                    {status === 'success' && (
                        <motion.div
                            key="success-view"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="text-center max-w-2xl mx-auto"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", delay: 0.2 }}
                                className="w-24 h-24 mx-auto mb-8 bg-[var(--accent-gold)] rounded-full flex items-center justify-center text-black shadow-[0_0_50px_var(--accent-gold)]"
                            >
                                <CheckCircle2 size={48} />
                            </motion.div>

                            <h3 className="text-4xl md:text-6xl font-black mb-6">MISSION COMPLETE</h3>
                            <p className="text-xl text-[var(--text-secondary)] mb-10">
                                השדרוג נקלט בהצלחה במערכות שלנו. <br />
                                צוות המשימה ייצור קשר בדקות הקרובות.
                            </p>

                            <button
                                onClick={() => setStatus('idle')}
                                className="text-sm font-mono text-[var(--accent-gold)] hover:text-white transition-colors border-b border-[var(--accent-gold)] pb-1"
                            >
                                [ SEND ANOTHER TRANSMISSION ]
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </section>
    );
};

// Sub-components for cleaner code
const InfoItem = ({ icon: Icon, label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="flex items-center gap-4 group cursor-pointer"
    >
        <div className="w-12 h-12 rounded-lg bg-[var(--bg-secondary)] border border-white/5 flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] group-hover:border-[var(--accent-gold)] transition-all duration-300">
            <Icon size={20} />
        </div>
        <div>
            <span className="text-[10px] tracking-widest text-[var(--text-secondary)] uppercase block mb-1">{label}</span>
            <span className="text-white font-bold group-hover:text-[var(--accent-gold)] transition-colors">{value}</span>
        </div>
    </motion.div>
);

const InputGroup = ({ label, placeholder, type }) => (
    <div className="group relative">
        <label className="text-[10px] tracking-[0.2em] font-bold text-[var(--accent-gold)] mb-2 block uppercase">{label}</label>
        <input
            type={type}
            className="w-full bg-black/50 border-b border-white/20 focus:border-[var(--accent-gold)] py-3 text-white placeholder-white/20 focus:outline-none transition-all duration-300 hover:bg-black/70"
            placeholder={placeholder}
        />
        {/* Animated Bottom Line */}
        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-gold)] transition-all duration-500 group-focus-within:w-full shadow-[0_0_10px_var(--accent-gold)]" />
    </div>
);

export default Contact;
