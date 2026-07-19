"use client";

import { animate, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ScoreCount({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, value, {
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => setDisplay(latest),
        });
        return () => controls.stop();
    }, [inView, value]);

    return (
        <span ref={ref}>
            {display.toFixed(decimals)}
            {suffix}
        </span>
    );
}

export default function Education() {
    const education = [
        {
            year: "2019 - 2023",
            score: { value: 7.88, decimals: 2, suffix: " CGPA" },
            degree: "Bachelor of Engineering",
            major: "Computer Science and Engineering",
            school: "Government College of Engineering, Srirangam",
            logo: "/assets/images/education/gces_logo.png",
            desc: "Department Representative for 4 years. Tech Lead for Symposiums.",
            color: "#FD9000",
            highlight: true
        },
        {
            year: "2018 - 2019",
            score: { value: 82.2, decimals: 1, suffix: "%" },
            degree: "HSC (Class XII)",
            major: "Mathematics & Computer Science",
            school: "Y.R.T.V. Matriculation Hr. Sec. School",
            logo: "/assets/images/education/yrtv_logo.png",
            desc: "Scored 99/100 in Computer Science. Active in Quiz Competitions.",
            color: "#3b82f6",
            highlight: false
        }
    ];

    return (
        <section id="education" className="min-h-screen py-24 px-6 overflow-hidden relative">
            {/* Background glow */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#FD9000]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h6
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-3 font-mono text-sm tracking-[0.3em] text-[#FD9000]"
                    >
                        {"//"} EDUCATION
                    </motion.h6>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl font-black tracking-tight md:text-6xl"
                    >
                        ACADEMIC{" "}
                        <span className="bg-gradient-to-r from-[#FD9000] to-[#FF5E00] bg-clip-text text-transparent">
                            FOUNDATION
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-4 font-mono text-[11px] tracking-[0.25em] text-white/50 md:text-xs"
                    >
                        B.E. COMPUTER SCIENCE · 2019 — 2023
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Photo & Quote (Redesigned) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block sticky top-24"
                    >
                        {/* Corner brackets */}
                        <span className="absolute -left-2 -top-2 z-20 h-6 w-6 border-l-2 border-t-2 border-[#FD9000]"></span>
                        <span className="absolute -right-2 -top-2 z-20 h-6 w-6 border-r-2 border-t-2 border-[#FD9000]"></span>
                        <span className="absolute -bottom-2 -left-2 z-20 h-6 w-6 border-b-2 border-l-2 border-[#FD9000]"></span>
                        <span className="absolute -bottom-2 -right-2 z-20 h-6 w-6 border-b-2 border-r-2 border-[#FD9000]"></span>

                        {/* Main Award Photo Card */}
                        <div className="relative overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group h-[600px] [clip-path:polygon(24px_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%,0_24px)]">
                            {/* Image */}
                            <Image
                                src="/assets/images/education/awarded.png"
                                alt="Award Moment"
                                fill
                                className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                priority
                                unoptimized
                            />

                            {/* Scanline sweep */}
                            <motion.div
                                className="absolute left-0 right-0 z-10 h-24 bg-gradient-to-b from-transparent via-[#FD9000]/15 to-transparent"
                                animate={{ top: ["-15%", "112%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                                <div className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#FD9000]">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FD9000]"></span>
                                    CAMPUS LOG
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                                    Founded GCES Coderz Club — mentored 150+ engineers.
                                </h3>
                                <p className="font-mono text-[11px] tracking-[0.2em] text-white/50">
                                    DEPT REPRESENTATIVE ×4 YRS · SYMPOSIUM TECH LEAD
                                </p>
                            </div>
                        </div>

                        {/* Decorative background element behind photo */}
                        <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-[#FD9000]/20 bg-[#FD9000]/5 [clip-path:polygon(24px_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%,0_24px)]"></div>
                    </motion.div>

                    {/* Right Side: Timeline Cards (Redesigned) */}
                    <div className="space-y-8 mt-4">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className={`relative bg-[#0a0a0a]/80 backdrop-blur-xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-2 [clip-path:polygon(18px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_18px)] ${edu.highlight ? 'border-[#FD9000]/50 hover:border-[#FD9000]' : 'border-white/10 hover:border-white/30'}`}>

                                    <div className="flex justify-between items-start gap-4 mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`text-xs font-mono font-bold px-2.5 py-1 tracking-[0.15em] border [clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)] ${edu.highlight ? 'bg-[#FD9000]/10 border-[#FD9000]/30 text-[#FD9000]' : 'bg-white/5 border-white/10 text-gray-400'}`}>
                                                    {edu.year}
                                                </span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FD9000] transition-colors">{edu.degree}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{edu.major}</p>
                                        </div>

                                        {/* Logo Container - White bg for visibility */}
                                        {edu.logo && (
                                            <div className="w-16 h-16 bg-white p-2 shrink-0 shadow-lg flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-[#FD9000] transition-colors [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
                                                <Image
                                                    src={edu.logo}
                                                    alt="School Logo"
                                                    width={60}
                                                    height={60}
                                                    className="object-contain w-full h-full"
                                                    unoptimized
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <h4 className="text-sm font-bold text-gray-200 mb-4 flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${edu.highlight ? 'bg-[#FD9000] shadow-[0_0_10px_#FD9000]' : 'bg-gray-600'}`}></span>
                                        {edu.school}
                                    </h4>

                                    <div className="border-t border-white/10 pt-4 mt-4">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                                                {edu.desc}
                                            </p>
                                            <div className="whitespace-nowrap">
                                                <span className={`text-2xl font-black ${edu.highlight ? 'text-[#FD9000]' : 'text-white/20 group-hover:text-white transition-colors'}`}>
                                                    <ScoreCount value={edu.score.value} decimals={edu.score.decimals} suffix={edu.score.suffix} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
