"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleInteraction = (e: MouseEvent | null) => {
            const isTouch = window.matchMedia("(pointer: coarse)").matches;
            const isNearTop = e ? e.clientY < 100 : false;
            const isAtTop = window.scrollY < 50;
            setIsVisible(isTouch || isNearTop || isAtTop || isMobileMenuOpen);
        };

        const onMouseMove = (e: MouseEvent) => handleInteraction(e);
        const onScroll = () => handleInteraction(null);

        // Initial check
        handleInteraction(null);

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Work", link: "#work" },
        { name: "Education", link: "#education" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <div className="fixed top-0 left-0 w-full h-auto z-50 pointer-events-none flex justify-end pt-6 pr-6 md:pr-12">
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="pointer-events-auto"
                    >
                        {/* Desktop Nav */}
                        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-2 border border-white/15 bg-black/55 px-3 py-3 backdrop-blur-xl shadow-lg shadow-brand-primary/10 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    className="relative px-4 py-2 text-base font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-full group"
                                >
                                    <span className="relative z-10 group-hover:text-black transition-colors duration-200">{item.name}</span>
                                    <span className="absolute inset-0 bg-[#FD9000] rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-0"></span>
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Nav */}
                        <div className="md:hidden flex flex-col items-end gap-2">
                            <button
                                type="button"
                                aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
                                aria-expanded={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="border border-white/20 bg-black/70 p-3 text-white shadow-lg backdrop-blur-xl transition-all hover:border-[#FD9000]/50 hover:text-[#FD9000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD9000] [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>

                            <AnimatePresence>
                                {isMobileMenuOpen && (
                                    <motion.nav
                                        aria-label="Mobile navigation"
                                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                        className="flex min-w-[220px] flex-col gap-1 border border-white/15 bg-black/90 p-3 shadow-xl backdrop-blur-xl [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]"
                                    >
                                        {navItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.link}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="px-4 py-3 text-lg font-medium text-white/80 hover:text-[#FD9000] hover:bg-white/5 rounded-lg transition-all"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </motion.nav>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
