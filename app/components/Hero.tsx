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
import { Download, Github, Linkedin, Mail } from "lucide-react";
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
    { icon: Mail, href: "mailto:sarandevnet@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/saranmahadev", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/saranmahadev", label: "GitHub" },
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
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 pb-36 pt-24"
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
                    className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 md:text-xs">
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
                    <span className="pointer-events-none absolute -inset-x-12 top-1/2 h-[70%] -translate-y-1/2 rounded-full bg-[#FD9000]/10 blur-[90px]"></span>

                    <NameLetters word="SARAN" className="text-white" />{" "}
                    <NameLetters
                        word="MAHADEV"
                        className="bg-gradient-to-br from-[#FD9000] via-[#FF7A00] to-[#FF5E00] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(253,144,0,0.25)]"
                    />
                </motion.h1>

                {/* Energy line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 1.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 h-px w-56 bg-gradient-to-r from-transparent via-[#FD9000] to-transparent shadow-[0_0_20px_rgba(253,144,0,0.8)] md:w-80"
                />

                {/* Decrypting role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.25, duration: 0.6 }}
                    className="mt-7 flex h-7 items-center justify-center gap-3 font-mono text-sm tracking-[0.25em] text-[var(--color-text-secondary)] md:h-8 md:text-xl"
                >
                    <span className="text-[#FD9000]">{"//"}</span>
                    <span>{role}</span>
                    <span className="animate-blink h-5 w-[2px] bg-[#FD9000] md:h-6"></span>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.45, duration: 0.7 }}
                    className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
                >
                    <Magnetic>
                        <a
                            href="/assets/pdfs/resume.pdf"
                            download="Saran-Mahadev-Resume.pdf"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-br from-[#FD9000] to-[#FF5E00] py-3 pl-3 pr-7 font-bold text-black shadow-[0_8px_30px_rgba(253,144,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_45px_rgba(253,144,0,0.5)]"
                        >
                            {/* Sheen sweep */}
                            <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] skew-x-[-20deg] bg-white/30 blur-sm transition-transform duration-700 group-hover:translate-x-[400%]"></span>
                            <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-black/15">
                                <Download size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                            </span>
                            <span className="relative text-sm tracking-[0.15em] md:text-base">DOWNLOAD RESUME</span>
                        </a>
                    </Magnetic>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.65, duration: 0.8 }}
                    className="mt-12 flex items-center gap-8"
                >
                    {SOCIALS.map(({ icon: Icon, href, label }) => (
                        <Magnetic key={label}>
                            <a
                                href={href}
                                aria-label={label}
                                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                                className="text-white/50 transition-colors duration-300 hover:text-[#FD9000]"
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
                className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/5 py-4"
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
                                    className="mx-7 flex items-center gap-7 font-mono text-xs tracking-[0.35em] text-white/25"
                                >
                                    <span className="text-[#FD9000]/50">◆</span>
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
