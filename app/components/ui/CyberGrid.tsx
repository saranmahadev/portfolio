"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CyberGrid() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Perspective Grid */}
            <div
                className="absolute inset-0 w-full h-full opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                              linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                    transformOrigin: 'top center',
                    maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 90%, transparent)'
                }}
            >
                <motion.div
                    className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(253,144,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"
                    animate={{
                        backgroundPosition: ['0px 0px', '0px 64px']
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Floating Particles - Client Side Only */}
            {mounted && (
                <div className="absolute inset-0">
                    {[...Array(60)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-[#FD9000] rounded-full"
                            initial={{
                                x: Math.random() * 100 + "vw",
                                y: Math.random() * 100 + "vh",
                                opacity: 0
                            }}
                            animate={{
                                y: [null, Math.random() * -100 - 50 + "vh"], // Move up
                                opacity: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
