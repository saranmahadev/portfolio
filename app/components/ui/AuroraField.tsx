"use client";

import { motion, useReducedMotion } from "framer-motion";

type Ember = {
    left: string;
    top: string;
    size: number;
    duration: number;
    delay: number;
    drift: number;
};

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const GRID_SIZE = "3.5rem 3.5rem";

const EMBERS: Ember[] = Array.from({ length: 16 }, (_, index) => {
    const seed = (index * 47 + 19) % 101;
    return {
        left: `${(seed * 37) % 100}%`,
        top: `${55 + ((seed * 17) % 45)}%`,
        size: index % 4 === 0 ? 3 : 2,
        duration: 7 + (seed % 9),
        delay: (seed % 16) / 2,
        drift: ((seed % 19) - 9) * 5,
    };
});

export default function AuroraField() {
    const reduceMotion = useReducedMotion();

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {/* Aurora light fields */}
            <motion.div
                className="absolute -left-1/4 -top-1/3 h-[75vw] w-[75vw] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(253,144,0,0.13) 0%, transparent 60%)",
                    filter: "blur(90px)",
                }}
                animate={{ x: [0, 90, -50, 0], y: [0, 50, 90, 0], scale: [1, 1.15, 0.95, 1] }}
                transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -right-1/4 top-1/4 h-[60vw] w-[60vw] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(255,94,0,0.09) 0%, transparent 60%)",
                    filter: "blur(100px)",
                }}
                animate={{ x: [0, -80, 40, 0], y: [0, -60, 30, 0], scale: [1, 0.9, 1.1, 1] }}
                transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-1/3 left-1/3 h-[50vw] w-[50vw] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(80,40,255,0.05) 0%, transparent 60%)",
                    filter: "blur(110px)",
                }}
                animate={{ x: [0, 60, -60, 0], scale: [1, 1.2, 0.9, 1] }}
                transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Faint base grid, fading in from the top */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: GRID_SIZE,
                    maskImage: "linear-gradient(to bottom, transparent, black 30%, black 75%, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 75%, transparent)",
                }}
            />

            {/* Orange grid revealed by the cursor torchlight (--mx/--my set by the Hero) */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(253,144,0,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(253,144,0,0.35) 1px, transparent 1px)",
                    backgroundSize: GRID_SIZE,
                    maskImage: "radial-gradient(340px circle at var(--mx, 50%) var(--my, 45%), black 0%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(340px circle at var(--mx, 50%) var(--my, 45%), black 0%, transparent 100%)",
                }}
            />

            {/* Rising embers (desktop only) */}
            {!reduceMotion && EMBERS.map((ember, i) => (
                <motion.div
                    key={i}
                    className="absolute hidden rounded-full bg-[#FD9000] md:block"
                    style={{
                        left: ember.left,
                        top: ember.top,
                        width: ember.size,
                        height: ember.size,
                        boxShadow: "0 0 6px rgba(253,144,0,0.8)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ y: -460, x: ember.drift, opacity: [0, 0.8, 0] }}
                    transition={{
                        duration: ember.duration,
                        delay: ember.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Film grain */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
                style={{ backgroundImage: GRAIN_SVG }}
            />

            {/* Vignette to focus the center */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
        </div>
    );
}
