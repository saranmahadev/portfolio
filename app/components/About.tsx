"use client";

import { animate, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STATS = [
    { value: 3, suffix: "+", label: "YEARS IN R&D" },
    { value: 6, suffix: "+", label: "AI PROJECTS" },
    { value: 150, suffix: "+", label: "STUDENTS MENTORED" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, value, {
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });
        return () => controls.stop();
    }, [inView, value]);

    return (
        <span ref={ref}>
            {display}
            <span className="text-[#FD9000]">{suffix}</span>
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden px-6 py-28 md:py-36">
            {/* Quiet aurora glow */}
            <div
                className="pointer-events-none absolute -left-1/4 top-1/4 h-[50vw] w-[50vw] rounded-full opacity-60"
                style={{
                    background: "radial-gradient(circle, rgba(253,144,0,0.07) 0%, transparent 60%)",
                    filter: "blur(90px)",
                }}
            />

            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-12">
                    {/* HUD Portrait */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-5"
                    >
                        <div className="group relative mx-auto w-full max-w-sm">
                            {/* Corner brackets */}
                            <span className="absolute -left-2 -top-2 z-20 h-6 w-6 border-l-2 border-t-2 border-[#FD9000]"></span>
                            <span className="absolute -right-2 -top-2 z-20 h-6 w-6 border-r-2 border-t-2 border-[#FD9000]"></span>
                            <span className="absolute -bottom-2 -left-2 z-20 h-6 w-6 border-b-2 border-l-2 border-[#FD9000]"></span>
                            <span className="absolute -bottom-2 -right-2 z-20 h-6 w-6 border-b-2 border-r-2 border-[#FD9000]"></span>

                            <div className="relative overflow-hidden rounded-2xl border border-white/10">
                                <Image
                                    src="/assets/images/person.webp"
                                    alt="Saran Mahadev"
                                    width={400}
                                    height={500}
                                    className="w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                                />
                                {/* Scanline sweep */}
                                <motion.div
                                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[#FD9000]/15 to-transparent"
                                    animate={{ top: ["-20%", "115%"] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Warm glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#FD9000]/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                            </div>

                            {/* Status readout */}
                            <div className="mt-5 flex items-center justify-center gap-5 font-mono text-[11px] tracking-[0.2em] text-white/50">
                                <span className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#FD9000]"></span>
                                    BANGALORE, IN
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#FD9000]"></span>
                                    R&D @ ZENTRON LABS
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Summary */}
                    <div className="md:col-span-7">
                        <motion.h6
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-3 font-mono text-sm tracking-[0.3em] text-[#FD9000]"
                        >
                            {"//"} ABOUT
                        </motion.h6>

                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="mb-8 text-3xl font-black tracking-tight md:text-5xl"
                            >
                                Building intelligent systems{" "}
                                <span className="bg-gradient-to-r from-[#FD9000] to-[#FF5E00] bg-clip-text text-transparent">
                                    that ship.
                                </span>
                            </motion.h2>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex divide-x divide-white/10"
                        >
                            {STATS.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`${i === 0 ? "pr-6 md:pr-10" : "px-6 md:px-10"}`}
                                >
                                    <div className="text-3xl font-black text-white md:text-5xl">
                                        <CountUp value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="mt-2 font-mono text-[9px] tracking-[0.2em] text-white/50 md:text-[11px]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
