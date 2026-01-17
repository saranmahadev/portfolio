"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const hobbies = [
    { src: "2.svg", label: "Trying New Food", color: "#F59E0B" },
    { src: "3.svg", label: "Music", color: "#EF4444" },
    { src: "4.svg", label: "Travel", color: "#10B981" },
    { src: "5.svg", label: "Reading", color: "#3B82F6" },
    { src: "6.svg", label: "Content Creation", color: "#8B5CF6" },
    { src: "7.svg", label: "Handball", color: "#EC4899" },
];

// Triple the list for a longer, smoother seamless loop on wide screens
const danceHobbies = [...hobbies, ...hobbies, ...hobbies];

function Card({ hobby, index }: { hobby: typeof hobbies[0]; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 30 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseXVal = event.clientX - rect.left;
        const mouseYVal = event.clientY - rect.top;
        x.set(mouseXVal / rect.width - 0.5);
        y.set(mouseYVal / rect.height - 0.5);
    }

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={onMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            // --- ROLLER COASTER ANIMATION ---
            // 1. Y: Moves Up and Down (Sine Wave)
            // 2. Rotate: Banks slightly with the curve
            // 3. Scale: Moves "Near" and "Far" (Z-depth simulation)
            animate={{
                y: [40, -40, 40],
                rotate: [-5, 5, -5],
                scale: [0.9, 1.1, 0.9],
                zIndex: [0, 50, 0] // Draws overlapping items correctly when "close"
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.8 // Stagger to create the wave shape
            }}
            className="relative w-64 h-80 flex-shrink-0 rounded-3xl bg-[#0a0a0a] border border-white/10 group cursor-pointer"
        >
            {/* Card Background Patterns */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>
            </div>

            {/* Floating Content Layer */}
            <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none">
                <div className="relative w-40 h-40 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110">
                    <Image
                        src={`/assets/images/hobbies/${hobby.src}`}
                        alt={hobby.label}
                        fill
                        className="object-contain"
                        unoptimized
                    />
                </div>
            </div>

            {/* Holographic Glare */}
            <motion.div
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 80%)`,
                    transform: "translateZ(1px)"
                }}
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Border Glow */}
            <div
                className="absolute inset-0 rounded-3xl border border-white/5 transition-all duration-300 group-hover:border-opacity-50 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            ></div>
        </motion.div>
    );
}

export default function Hobbies() {
    return (
        <section id="hobbies" className="min-h-[80vh] py-24 relative overflow-hidden bg-[#050505] perspective-1000 flex flex-col justify-center">

            {/* Dark Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-[#050505] to-black z-0"></div>
                {/* Track Guide (Visual Only) */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FD9000]/20 to-transparent blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 mb-16">
                <div className="text-center" data-aos="fade-up">
                    <h6 className="text-[#FD9000] font-bold tracking-widest uppercase mb-2">PERSONAL COLLECTION</h6>
                    <h1 className="text-4xl md:text-5xl font-bold">HOBBIES</h1>
                    <div className="w-20 h-1 bg-[#FD9000] mx-auto rounded-full mt-4"></div>
                </div>
            </div>

            {/* Roller Coaster Container */}
            <div className="w-full relative overflow-hidden flex z-20 py-20">
                <motion.div
                    className="flex gap-4 md:gap-12 px-8 items-center"
                    animate={{ x: ["0%", "-100%"] }} // Adjust based on list length logic
                    // Actually, for a seamless infinite loop of a set of N items copied K times:
                    // It should move exactly the width of the original N items.
                    // This is hard to calc perfectly in CSS % without known widths.
                    // Let's rely on a large negative % and just loop it visually 'good enough' or use a very large duplicate set.
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ minWidth: "max-content" }}
                >
                    {danceHobbies.map((hobby, index) => (
                        <Card key={index} hobby={hobby} index={index} />
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
