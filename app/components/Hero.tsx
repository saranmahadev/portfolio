"use client";

import { motion } from "framer-motion";
import { HeroSpotlight } from "./ui/HeroSpotlight";
import CyberGrid from "./ui/CyberGrid";
import { useState, useEffect } from "react";
import { ChevronRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const roles = ["AI Engineer", "Software Engineer (R&D)", "Open Source Contributor"];
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const word = roles[currentRole];

        const timer = setTimeout(() => {
            if (!isDeleting && displayText === word) {
                // Finished typing word, wait before deleting
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === "") {
                // Finished deleting, move to next word
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            } else {
                // Typing or deleting
                const nextText = isDeleting
                    ? word.substring(0, displayText.length - 1)
                    : word.substring(0, displayText.length + 1);
                setDisplayText(nextText);
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole, roles]);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-[#050505]"
        >
            {/* Hype Backgrounds */}
            <HeroSpotlight />
            <CyberGrid />

            <div className="container mx-auto z-10 relative">
                <div className="max-w-5xl mx-auto text-center md:text-left">

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6 tracking-tighter"
                    >
                        <span className="block text-2xl md:text-4xl text-[var(--color-text-secondary)] font-medium mb-2 tracking-normal">HI, I'M</span>
                        <span className="text-5xl md:text-7xl lg:text-8xl font-black">
                            <span className="text-white relative inline-block">
                                SARAN
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FD9000] to-transparent opacity-50"></span>
                            </span>{" "}
                            <span className="text-white">MAHA</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD9000] to-[#FF5E00]">
                                DEV
                            </span>
                        </span>
                    </motion.h1>

                    {/* Typing Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-10 md:h-12 mb-8 text-xl md:text-3xl text-[var(--color-text-secondary)] font-mono flex items-center justify-center md:justify-start gap-2"
                    >
                        <span className="text-[#FD9000]">{">"}</span>
                        <span>{displayText}</span>
                        <span className="animate-blink w-[2px] h-8 bg-[#FD9000]"></span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="max-w-2xl text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed mb-10 mx-auto md:mx-0"
                    >
                        Specialized in designing and delivering scalable, efficient, and innovative <span className="text-white font-semibold">enterprise-grade solutions</span>. Bridging the gap between complex systems and business requirements.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center"
                    >
                        <a
                            href="#about"
                            className="group relative px-8 py-4 bg-[#FD9000] text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(253,144,0,0.5)]"
                        >
                            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative flex items-center gap-2">
                                ABOUT ME <ChevronRight size={20} />
                            </span>
                        </a>

                        <a
                            href="/resume.pdf" // Assuming resume path
                            className="group px-8 py-4 bg-transparent border border-[var(--color-glass-border)] text-white font-bold rounded-lg hover:border-[#FD9000] hover:text-[#FD9000] transition-all flex items-center gap-2"
                        >
                            DOWNLOAD RESUME <Download size={18} />
                        </a>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-12 flex items-center justify-center md:justify-start gap-6 text-[var(--color-text-secondary)]"
                    >
                        {[Mail, Linkedin, Github].map((Icon, i) => (
                            <a key={i} href="#" className="hover:text-[#FD9000] hover:scale-125 transition-all">
                                <Icon size={24} />
                            </a>
                        ))}
                    </motion.div>

                </div>
            </div>

        </section>
    );
}
