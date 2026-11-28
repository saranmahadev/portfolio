"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
    type Variants,
} from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import AuroraField from "./ui/AuroraField";

const ROLES = [
    "GENERATIVE AI ENGINEER",
    "AGENTIC AI ARCHITECT",
    "OPEN SOURCE CONTRIBUTOR",
];

const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#░▒▓";

const MARQUEE_ITEMS = [
    "AGENTIC AI",
    "RAG SYSTEMS",
    "LANGGRAPH",
    "MCP",
    "COMPUTER VISION",
    "LLM ORCHESTRATION",
    "3+ YEARS R&D",
    "OPEN SOURCE",
    "PYTHON",
    "FASTAPI",
];

const SOCIALS = [
    { icon: Mail, href: "mailto:mail@saranmahadev.in", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/saranmahadev", label: "LinkedIn" },
    { icon: Youtube, href: "http://youtube.com/@saranmahadev", label: "YouTube" },
    { icon: Github, href: "https://github.com/saranmahadev", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/everything.by.dev", label: "Instagram" },
];

/* Cycles through words with a decrypt/scramble resolve effect */
function useScramble(words: string[], enabled: boolean) {
    const [display, setDisplay] = useState(words[0]);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        if (!enabled) {
            setDisplay(words[0]);
            return;
        }

        const word = words[wordIndex];
        let frame = 0;

        const interval = setInterval(() => {
            frame++;
            const revealed = Math.max(0, frame - 6) * 0.8;
            setDisplay(
                word
                    .split("")
                    .map((char, i) => {
                        if (char === " " || i < revealed) return char;
                        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                    })
                    .join("")
            );
            if (revealed >= word.length) clearInterval(interval);
        }, 45);

        const timeout = setTimeout(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 3600);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [wordIndex, enabled, words]);

    return display;
}

/* Wrapper that pulls its child toward the cursor */
function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            className={className}
            onMouseMove={(e) => {
                const rect = ref.current?.getBoundingClientRect();
                if (!rect) return;
                x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
                y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
        >
            {children}
        </motion.div>
    );
}

const nameContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.35 } },
};

const letterVariants: Variants = {
    hidden: { y: 48, opacity: 0, filter: "blur(12px)" },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 120, damping: 16 },
    },
};

function NameLetters({ word, className = "" }: { word: string; className?: string }) {
    return (
        <span className="inline-block whitespace-nowrap">
            {word.split("").map((letter, i) => (
                <motion.span
                    key={i}
                    variants={letterVariants}
                    whileHover={{
                        y: -12,
                        scale: 1.06,
                        transition: { type: "spring", stiffness: 500, damping: 15 },
                    }}
                    className={`inline-block cursor-default ${className}`}
                >
                    {letter}
                </motion.span>
            ))}
        </span>
    );
}

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const reducedMotion = useReducedMotion() ?? false;
    const role = useScramble(ROLES, !reducedMotion);

    // Mouse parallax on the whole composition
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
        stiffness: 60,
        damping: 20,
    });
    const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), {
        stiffness: 60,
        damping: 20,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (reducedMotion) return;
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        mouseX.set(e.clientX / window.innerWidth - 0.5);
        mouseY.set(e.clientY / window.innerHeight - 0.5);
        // Torchlight position for the AuroraField grid reveal
        section.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        section.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <section
            id="home"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)] px-6 pb-36 pt-24"
        >
            <AuroraField />

            <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center"
            >
                {/* Status pill */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--border-glass)] bg-[var(--surface-elevated)] px-4 py-2 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-60"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]"></span>
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)] md:text-xs">
                        Open to opportunities · Bangalore, IN
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={nameContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative text-[clamp(3.2rem,11vw,8rem)] font-black leading-[0.95] tracking-tighter"
                >
                    {/* Glow behind the name */}
                    <span className="pointer-events-none absolute -inset-x-12 top-1/2 h-[70%] -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[90px]"></span>

                    <NameLetters word="SARAN" className="text-[var(--foreground)]" />{" "}
                    <NameLetters
                        word="MAHADEV"
                        className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary-hover)] to-[var(--primary-active)] bg-clip-text text-transparent drop-shadow-[0_0_25px_var(--accent-glow)]"
                    />
                </motion.h1>

                {/* Energy line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 1.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 h-px w-56 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent shadow-[0_0_20px_var(--accent)] md:w-80"
                />

                {/* Decrypting role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.25, duration: 0.6 }}
                    className="mt-7 flex h-7 items-center justify-center gap-3 font-mono text-sm tracking-[0.25em] text-[var(--text-secondary)] md:h-8 md:text-xl"
                >
                    <span className="text-[var(--primary)]">{"//"}</span>
                    <span>{role}</span>
                    <span className="animate-blink h-5 w-[2px] bg-[var(--primary)] md:h-6"></span>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.45, duration: 0.8 }}
                    className="mt-10 flex items-center gap-8"
                >
                    {SOCIALS.map(({ icon: Icon, href, label }) => (
                        <Magnetic key={label}>
                            <a
                                href={href}
                                aria-label={label}
                                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                                className="text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--primary)]"
                            >
                                <Icon size={22} />
                            </a>
                        </Magnetic>
                    ))}
                </motion.div>
            </motion.div>

            {/* Tech marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 1 }}
                className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-[var(--border-subtle)] py-4"
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                }}
            >
                <div className="animate-marquee flex w-max">
                    {[0, 1].map((half) => (
                        <div key={half} className="flex shrink-0 items-center">
                            {MARQUEE_ITEMS.map((item) => (
                                <span
                                    key={`${half}-${item}`}
                                    className="mx-7 flex items-center gap-7 font-mono text-xs tracking-[0.35em] text-[var(--text-disabled)]"
                                >
                                    <span className="text-[var(--primary)]/50">◆</span>
                                    {item}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
