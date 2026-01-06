import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';

const TechSphere = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />

                {/* Floating golden particles - Slower & Delicate */}
                <Float speed={isMobile ? 0.5 : 0.8} rotationIntensity={isMobile ? 0.1 : 0.2} floatIntensity={isMobile ? 0.1 : 0.2}>
                    <Sparkles
                        count={isMobile ? 40 : 150} // Significantly reduced for mobile
                        scale={isMobile ? 8 : 12}
                        size={isMobile ? 2 : 3}
                        speed={isMobile ? 0.05 : 0.1}
                        opacity={0.6}
                        color="#d4af37" // Gold
                    />
                </Float>

                {/* Subtle Cyan depth particles - Slower & Delicate */}
                <Float speed={1.0} rotationIntensity={0.4} floatIntensity={0.4}>
                    <Sparkles
                        count={isMobile ? 20 : 80} // Reduced
                        scale={15}
                        size={2}
                        speed={0.1}
                        opacity={0.3}
                        color="#00f0ff" // Cyan
                    />
                </Float>

                {/* NEW: Deep Blue Glow/Illumination from behind - Only on Desktop */}
                {!isMobile && (
                    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.2}>
                        <Sparkles
                            count={40}
                            scale={20}
                            size={15}
                            speed={0.2}
                            opacity={0.15}
                            color="#00ccff"
                        />
                    </Float>
                )}
            </Canvas>
        </div>
    );
};

export default TechSphere;
