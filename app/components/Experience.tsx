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
            id: "zentron",
            title: "Associate Software Engineer (R&D)",
            company: "Zentron Labs",
            location: "Bangalore",
            duration: "Feb 2023 - Present",
            type: "Full-time",
            logo: "/assets/images/company/Zentron Labs.png",
            description: "Vision Algorithms, Gen AI, Automation, Industrial Quality Assurance.",
            skills: ["Gen AI", "Computer Vision", "Python", "C++"],
            items: [
                "Designed and implemented deterministic algorithmic systems for quality assurance products (iMM, GTron), operating under strict 3-micron accuracy and reliability requirements.",
                "Leveraged Generative AI and synthetic data techniques to perform edge-case and real-world simulation for improving robustness in production.",
                "Collaborated closely with cross-functional teams including product, software, testing, and application teams to translate requirements into robust, deployable solutions.",
                "Recognized as 5x Best Performer of the Month."
            ]
        },
        {
            id: "cdac",
            title: "Cloud Computing Trainee",
            company: "C-DAC",
            location: "Chennai",
            duration: "Jul 2022 - Aug 2022",
            type: "Internship",
            logo: "/assets/images/company/CDAC.png",
            description: "Cloud Infrastructure, Virtualization, Enterprise Networking.",
            skills: ["OpenStack", "Docker", "Linux", "Networking"],
            items: [
                "Gained hands-on experience with OpenStack and Docker.",
                "Built a foundational understanding of cloud infrastructure, virtualization, and enterprise networking.",
                "Worked with PowerBI, MySQL, and Figma for diverse project requirements."
            ]
        }
    ];

    return (
        <section id="work" className="min-h-screen py-24 px-4 overflow-hidden relative" ref={containerRef}>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FD9000]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center mb-24" data-aos="fade-up">
                    <h6 className="text-[#FD9000] font-bold tracking-widest uppercase mb-2">PROFESSIONAL JOURNEY</h6>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">WORK EXPERIENCE</h1>
                    <div className="w-20 h-1 bg-[#FD9000] mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-[#FD9000] shadow-[0_0_20px_#FD9000]"
                            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        />
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
                                    <div className="w-4 h-4 rounded-full bg-[#FD9000]"></div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-[45%]">
                                    <div className="relative group perspective-1000">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FD9000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"></div>

                                        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-[#FD9000]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg">
                                                        <Image src={exp.logo} alt={exp.company} width={50} height={50} className="object-contain" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white leading-tight">{exp.company}</h3>
                                                        <p className="text-sm font-medium text-gray-400">{exp.location}</p>
                                                    </div>
                                                </div>
                                                {index === 0 && (
                                                    <div className="px-3 py-1 rounded-full bg-[#FD9000]/10 border border-[#FD9000] text-[#FD9000] text-xs font-bold uppercase tracking-wider animate-pulse">
                                                        Current
                                                    </div>
                                                )}
                                            </div>

                                            <h4 className="text-xl font-bold text-[#FD9000] mb-2">{exp.title}</h4>
                                            <p className="text-sm font-mono text-gray-500 mb-6 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                                {exp.duration}
                                            </p>

                                            <ul className="space-y-3 mb-6">
                                                {exp.items.map((item, i) => (
                                                    <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                                                        <span className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-[#FD9000]/50"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                                {exp.skills.map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors">
                                                        {skill}
                                                    </span>
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
                </div>
            </div>
        </section>
    );
}
