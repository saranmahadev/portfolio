"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import type { MouseEvent } from "react";

const hobbies = [
    { src: "2.svg", label: "Trying New Food", code: "TASTE", detail: "Curiosity on a plate" },
    { src: "3.svg", label: "Music", code: "AUDIO", detail: "Focus through rhythm" },
    { src: "4.svg", label: "Travel", code: "ROAM", detail: "New places, new context" },
    { src: "5.svg", label: "Reading", code: "READ", detail: "Ideas beyond the screen" },
    { src: "6.svg", label: "Content Creation", code: "MAKE", detail: "Turning lessons into stories" },
    { src: "7.svg", label: "Handball", code: "PLAY", detail: "Energy, timing, teamwork" },
];

const loopedHobbies = [...hobbies, ...hobbies, ...hobbies];

function HobbyCard({ hobby, index, duplicate }: { hobby: (typeof hobbies)[number]; index: number; duplicate: boolean }) {
    const reduceMotion = useReducedMotion();
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const springX = useSpring(pointerX, { stiffness: 320, damping: 28 });
    const springY = useSpring(pointerY, { stiffness: 320, damping: 28 });
    const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);
    const iconX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
    const iconY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
    const glareX = useTransform(springX, [-0.5, 0.5], ["20%", "80%"]);
    const glareY = useTransform(springY, [-0.5, 0.5], ["20%", "80%"]);

    const handlePointer = (event: MouseEvent<HTMLElement>) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <div className="hobby-wave shrink-0" style={{ animationDelay: `${(index % hobbies.length) * -0.72}s` }}>
            <motion.article
                aria-hidden={duplicate}
                onMouseMove={handlePointer}
                onMouseLeave={() => { pointerX.set(0); pointerY.set(0); }}
                style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="hobby-card group relative h-72 w-56 overflow-hidden border border-white/10 bg-[#090909] [clip-path:polygon(18px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_18px)] md:h-80 md:w-64"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(253,144,0,0.08),transparent_48%)]" />
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:100%_18px]" />
                <span className="corner-bracket left-3 top-3 border-l border-t" aria-hidden="true" />
                <span className="corner-bracket bottom-3 right-3 border-b border-r" aria-hidden="true" />

                <motion.div style={reduceMotion ? undefined : { x: iconX, y: iconY, transform: "translateZ(45px)" }} className="absolute inset-x-8 top-10 aspect-square transition-transform duration-500 group-hover:scale-110">
                    <Image src={`/assets/images/hobbies/${hobby.src}`} alt="" fill sizes="180px" className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]" />
                </motion.div>

                <div className="absolute inset-x-5 bottom-5 z-10 border-t border-white/10 pt-4">
                    <div className="mb-1 flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-[#FD9000]">
                        <span>{hobby.code}</span><span>0{(index % hobbies.length) + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{hobby.label}</h3>
                    <p className="mt-1 text-xs text-white/45">{hobby.detail}</p>
                </div>

                <motion.div style={{ background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,.16), transparent 55%)` }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 border border-transparent transition duration-300 group-hover:border-[#FD9000]/50 group-hover:shadow-[inset_0_0_35px_rgba(253,144,0,.08)]" />
            </motion.article>
        </div>
    );
}

export default function Hobbies() {
    const reduceMotion = useReducedMotion();
    return (
        <section id="hobbies" className="section-shell flex min-h-[85vh] flex-col justify-center overflow-hidden bg-[#050505] py-24">
            <div className="section-grid" aria-hidden="true" />
            <div className="relative z-10 mx-auto mb-16 max-w-4xl px-6 text-center">
                <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-kicker">{"//"} OFFLINE SIGNALS</motion.p>
                <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">BEYOND THE <span>TERMINAL</span></motion.h2>
                <p className="section-readout">06 INTERESTS · CURIOSITY ALWAYS RUNNING</p>
            </div>

            <div className="hobby-marquee relative z-10 overflow-hidden py-14" aria-label="Personal interests">
                <div className="data-track" aria-hidden="true"><span /><span /><span /></div>
                <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#050505] to-transparent md:w-32" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#050505] to-transparent md:w-32" />
                <div className="hobby-track flex w-max items-center gap-5 px-5 md:gap-10">
                    {loopedHobbies.map((hobby, index) => <HobbyCard key={`${hobby.label}-${index}`} hobby={hobby} index={index} duplicate={index >= hobbies.length} />)}
                </div>
            </div>
            <p className="relative z-10 mt-5 text-center font-mono text-[10px] tracking-[0.22em] text-white/35">HOVER TO PAUSE · MOVE TO TILT</p>
        </section>
    );
}
