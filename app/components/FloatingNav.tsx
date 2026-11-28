"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";

const resources = [
    { name: "Blog", href: "https://blog.saranmahadev.in" },
    { name: "Workshops", href: "https://workshop.saranmahadev.in" },
    { name: "Shop", href: "https://shop.saranmahadev.in" },
    { name: "Courses", href: "https://courses.saranmahadev.in" },
    { name: "AI Base", href: "https://ai.saranmahadev.in" },
    { name: "Resume.pdf", href: "/assets/pdfs/resume.pdf" },
];

export default function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

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
                        <div className="relative hidden md:block">
                            <nav aria-label="Primary navigation" className="flex items-center gap-2 border border-[var(--border-glass)] bg-[var(--surface-glass-strong)] px-3 py-3 backdrop-blur-xl shadow-lg shadow-[var(--accent-glow)] [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    className="relative px-4 py-2 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-200 rounded-full group"
                                >
                                    <span className="relative z-10 group-hover:text-[var(--primary-foreground)] transition-colors duration-200">{item.name}</span>
                                    <span className="absolute inset-0 bg-[var(--primary)] rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-0"></span>
                                </a>
                            ))}
                                <button
                                    type="button"
                                    aria-expanded={isResourcesOpen}
                                    aria-haspopup="menu"
                                    aria-controls="resource-navigation"
                                    onClick={() => setIsResourcesOpen((open) => !open)}
                                    className="group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-base font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--primary-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
                                >
                                    <span className="relative z-10">Explore</span>
                                    <ChevronDown size={15} className={`relative z-10 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`} />
                                    <span className="absolute inset-0 z-0 scale-75 rounded-full bg-[var(--primary)] opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
                                </button>
                            </nav>
                            <AnimatePresence>
                                {isResourcesOpen && (
                                    <motion.div
                                        id="resource-navigation"
                                        role="menu"
                                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                        className="absolute right-0 top-[calc(100%+0.8rem)] z-10 w-56 overflow-hidden border border-[var(--border-glass-strong)] bg-[var(--surface-glass-strong)] p-2 shadow-xl shadow-[var(--shadow)] backdrop-blur-xl [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
                                    >
                                        {resources.map((resource) => (
                                            <div key={resource.name}>
                                                {resource.name === "Resume.pdf" && <div role="separator" className="my-2 border-t border-[var(--border-subtle)]" />}
                                                <a
                                                    href={resource.href}
                                                    role="menuitem"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={() => setIsResourcesOpen(false)}
                                                    className="group flex items-center justify-between rounded-md px-3 py-2.5 font-mono text-xs tracking-[0.12em] text-[var(--text-secondary)] transition hover:bg-[var(--accent-faint)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
                                                >
                                                    {resource.name}
                                                    <ExternalLink size={14} className="text-[var(--text-disabled)] transition group-hover:text-[var(--accent)]" />
                                                </a>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Nav */}
                        <div className="md:hidden flex flex-col items-end gap-2">
                            <button
                                type="button"
                                aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
                                aria-expanded={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="border border-[var(--border-glass-strong)] bg-[var(--background)] p-3 text-[var(--foreground)] shadow-lg backdrop-blur-xl transition-all hover:border-[var(--primary)]/50 hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]"
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
                                        className="flex min-w-[220px] flex-col gap-1 border border-[var(--border-glass)] bg-[var(--background)] p-3 shadow-xl backdrop-blur-xl [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]"
                                    >
                                        {navItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.link}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="px-4 py-3 text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--surface-strong)] rounded-lg transition-all"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <div className="mt-2 border-t border-[var(--border-subtle)] pt-2">
                                            <p className="px-4 py-2 font-mono text-[9px] tracking-[0.2em] text-[var(--text-disabled)]">EXPLORE</p>
                                            {resources.map((resource) => (
                                                <div key={resource.name}>
                                                    {resource.name === "Resume.pdf" && <div role="separator" className="mx-4 my-2 border-t border-[var(--border-subtle)]" />}
                                                    <a
                                                        href={resource.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-[var(--text-secondary)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--primary)]"
                                                    >
                                                        {resource.name}
                                                        <ExternalLink size={15} />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
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
