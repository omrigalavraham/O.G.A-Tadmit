import React from 'react';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import SmoothScroll from './SmoothScroll';

const Layout = ({ children }) => {
    return (
        <SmoothScroll>
            {/* Removed overflow-hidden from here to let Lenis handle scroll properly, added overflow-x-hidden to body in css instead if needed */}
            <div className="min-h-screen text-white relative bg-[var(--bg-primary)] cursor-none selection:bg-[var(--accent-gold)] selection:text-black">
                <CustomCursor />
                {/* Dynamic Background Noise/Texture */}
                <div
                    className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1]"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                    }}
                />

                <Navbar />

                {/* Removed max-w-[1400px] to allow full-width sections (Hero/Footer) */}
                <main className="relative z-10 w-full">
                    {children}
                </main>

                <footer className="py-8 text-center text-sm text-[var(--text-secondary)] border-t border-[rgba(255,255,255,0.05)] mt-20">
                    <p>© {new Date().getFullYear()} O.G.A Creation & Technology. כל הזכויות שמורות.</p>
                </footer>
            </div>
        </SmoothScroll>
    );
};

export default Layout;
