import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';

const TechSphere = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                {/* Floating golden particles - Slower & Delicate */}
                <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.2}>
                    <Sparkles
                        count={150}
                        scale={12}
                        size={3}
                        speed={0.1} // Reduced speed
                        opacity={0.6}
                        color="#d4af37" // Gold
                    />
                </Float>

                {/* Subtle Cyan depth particles - Slower & Delicate */}
                <Float speed={1.0} rotationIntensity={0.4} floatIntensity={0.4}>
                    <Sparkles
                        count={80}
                        scale={15}
                        size={2}
                        speed={0.1} // Reduced speed
                        opacity={0.3}
                        color="#00f0ff" // Cyan
                    />
                </Float>

                {/* NEW: Deep Blue Glow/Illumination from behind */}
                <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.2}>
                    <Sparkles
                        count={40} // Fewer but larger
                        scale={20} // Wide spread
                        size={15} // Very large "glow" spots
                        speed={0.2}
                        opacity={0.15} // Subtle glow
                        color="#00ccff" // Light Blue (Tekhelet)
                    />
                </Float>
            </Canvas>
        </div>
    );
};

export default TechSphere;
