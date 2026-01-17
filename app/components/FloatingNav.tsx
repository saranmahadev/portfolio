"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleInteraction = (e: MouseEvent | null) => {
            // Show if:
            // 1. Mouse is within top 100px (e.clientY < 100)
            // 2. OR User is at the very top of the page (window.scrollY < 50)

            const isNearTop = e ? e.clientY < 100 : false;
            const isAtTop = window.scrollY < 50;

            if (isNearTop || isAtTop) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
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
    }, []);

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Work", link: "#work" },
        { name: "Education", link: "#education" },
        { name: "Contact", link: "#contact" },
    ];

    // Make sure to add this import at the top if not present

    // ... (keep useEffect for isVisible logic, but maybe auto-close mobile menu on scroll?)
    // Actually, let's keep the existing useEffect and just update the UI.

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
                        <nav className="hidden md:flex items-center gap-2 px-3 py-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-xl shadow-lg shadow-brand-primary/10">
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
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-xl text-white shadow-lg hover:bg-white/10 transition-all"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>

                            <AnimatePresence>
                                {isMobileMenuOpen && (
                                    <motion.nav
                                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                        className="flex flex-col gap-2 p-4 rounded-2xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-xl min-w-[200px]"
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
