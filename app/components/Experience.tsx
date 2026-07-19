"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const experiences = [
        {
            id: "cdac",
            title: "Cloud Computing Specialization Trainee",
            company: "C-DAC",
            location: "Chennai",
            duration: "Jul 2022 - Aug 2022",
            type: "Specialization Training",
            logo: "/assets/images/company/CDAC.png",
            description: "Cloud infrastructure, virtualization, and enterprise networking.",
            skills: ["OpenStack", "Docker", "Cloud Infrastructure", "Virtualization", "Networking"],
            items: [
                "Gained hands-on experience with OpenStack and Docker, building a foundational understanding of cloud infrastructure, virtualization, and enterprise networking."
            ]
        },
        {
            id: "zentron",
            title: "Associate Software Engineer (R&D)",
            company: "Zentron Labs",
            location: "Bangalore",
            duration: "Feb 2023 - Present",
            type: "Full-time",
            logo: "/assets/images/company/Zentron Labs.png",
            description: "Enterprise Computer Vision, Generative AI platforms, Agentic AI, and developer tooling.",
            skills: ["Computer Vision", "Generative AI", "LangGraph", "MCP", "RAG", "LLM Orchestration"],
            items: [
                "Design and prototype next-generation Computer Vision solutions with AI systems, developer platforms, and intelligent automation.",
                "Architect enterprise Generative AI platforms using LLMs, Agentic AI, LangGraph, MCP, RAG, and specification-driven workflows.",
                "Build AI-assisted software engineering pipelines for code generation, repository understanding, documentation automation, and process standardization.",
                "Research and evaluate foundation models, prompting strategies, and orchestration frameworks for the Model and Behavior Matrix.",
                "Collaborate with software, QA, and product teams to translate research prototypes into production-ready algorithm solutions.",
                "Develop deterministic Computer Vision algorithms and optimization systems for industrial inspection applications."
            ]
        }
    ];

    return (
        <section id="work" className="min-h-screen py-24 px-4 overflow-hidden relative" ref={containerRef}>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FD9000]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center mb-24">
                    <motion.h6
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-3 font-mono text-sm tracking-[0.3em] text-[#FD9000]"
                    >
                        {"//"} CAREER
                    </motion.h6>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl font-black tracking-tight md:text-6xl"
                    >
                        WORK{" "}
                        <span className="bg-gradient-to-r from-[#FD9000] to-[#FF5E00] bg-clip-text text-transparent">
                            EXPERIENCE
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-4 font-mono text-[11px] tracking-[0.25em] text-white/50 md:text-xs"
                    >
                        R&amp;D · GENERATIVE AI · COMPUTER VISION · 2022 — PRESENT
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block">
                        {/* Idle data pulse running down the unfilled track */}
                        <motion.span
                            className="absolute left-0 w-full h-16 bg-gradient-to-b from-transparent via-[#FD9000]/40 to-transparent"
                            animate={{ top: ["-10%", "105%"] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-[#FD9000] shadow-[0_0_20px_#FD9000]"
                            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        >
                            {/* Comet head riding the progress tip */}
                            <span className="absolute bottom-0 left-1/2 block h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#FD9000] shadow-[0_0_20px_6px_rgba(253,144,0,0.55)]"></span>
                        </motion.div>
                    </div>

                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Timeline Node (Desktop) */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black border-4 border-[#1a1a1a] z-20 group-hover:border-[#FD9000] transition-colors">
                                    {/* Ignition ping when the node scrolls into view */}
                                    <motion.span
                                        initial={{ scale: 0.5, opacity: 0.9 }}
                                        whileInView={{ scale: 2.4, opacity: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
                                        className="absolute inset-0 rounded-full border-2 border-[#FD9000]"
                                    />
                                    <div className="w-4 h-4 rounded-full bg-[#FD9000] shadow-[0_0_12px_#FD9000]"></div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-[45%]">
                                    <div className="relative group perspective-1000">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FD9000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                                        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-8 hover:border-[#FD9000]/50 transition-all duration-500 hover:-translate-y-2 [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 bg-white p-2 flex items-center justify-center shadow-lg [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
                                                        <Image src={exp.logo} alt={exp.company} width={50} height={50} className="object-contain" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white leading-tight">{exp.company}</h3>
                                                        <p className="text-sm font-medium text-gray-400">{exp.location}</p>
                                                    </div>
                                                </div>
                                                {exp.id === "zentron" && (
                                                    <div className="px-3 py-1 bg-[#FD9000]/10 border border-[#FD9000] text-[#FD9000] font-mono text-xs font-bold uppercase tracking-[0.2em] animate-pulse [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]">
                                                        Current
                                                    </div>
                                                )}
                                            </div>

                                            <h4 className="text-xl font-bold text-[#FD9000] mb-2">{exp.title}</h4>
                                            <p className="text-sm font-mono text-gray-500 mb-6 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                                {exp.duration}
                                            </p>

                                            <p className="mb-6 border-l border-[#FD9000]/40 pl-4 text-sm leading-relaxed text-white/60">
                                                {exp.description}
                                            </p>

                                            <ul className="space-y-3 mb-6">
                                                {exp.items.map((item, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -14 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.45, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                                                        className="text-gray-300 text-sm leading-relaxed flex items-start gap-3"
                                                    >
                                                        <span className="mt-0.5 shrink-0 text-[#FD9000]">▸</span>
                                                        {item}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                                {exp.skills.map((skill, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 + i * 0.07 }}
                                                        className="px-3 py-1.5 font-mono text-[11px] tracking-wider text-gray-400 bg-white/5 border border-white/10 hover:bg-[#FD9000]/10 hover:text-[#FD9000] hover:border-[#FD9000]/40 transition-colors [clip-path:polygon(7px_0,100%_0,100%_calc(100%-7px),calc(100%-7px)_100%,0_100%,0_7px)]"
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="w-full md:w-[45%]"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Roadmap continues */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative mt-24 flex items-center justify-center gap-4"
                    >
                        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                            <span className="absolute inset-0 animate-ping rounded-full border border-[#FD9000]/50"></span>
                            <span className="h-2 w-2 rounded-full border border-[#FD9000]"></span>
                        </span>
                        <span className="font-mono text-xs tracking-[0.3em] text-white/50">
                            {">"} NEXT MISSION LOADING
                            <span className="animate-blink ml-0.5 inline-block">_</span>
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
