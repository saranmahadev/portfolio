"use client";

import {
    AnimatePresence,
    motion,
    useInView,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
    type Variants,
} from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrambleText from "./ui/ScrambleText";

type SkillItem = { name: string; core?: boolean };

type Domain = {
    id: string;
    name: string;
    module: string;
    blurb: string;
    skills: SkillItem[];
};

const DOMAINS: Domain[] = [
    {
        id: "01",
        name: "GENERATIVE AI & AGENTS",
        module: "generative-ai.sys",
        blurb: "Agentic systems, MCP, and multi-agent orchestration — built daily in R&D.",
        skills: [
            { name: "Agentic AI", core: true },
            { name: "MCP", core: true },
            { name: "Multi-Agent Systems" },
            { name: "Tool Calling" },
            { name: "Workflow Orchestration" },
            { name: "Memory Management" },
            { name: "Prompt Engineering", core: true },
            { name: "Context Engineering" },
            { name: "Prompt Chaining" },
            { name: "Claude" },
            { name: "Gemini" },
            { name: "OpenAI" },
            { name: "GLM" },
            { name: "Kimi" },
            { name: "Qwen" },
        ],
    },
    {
        id: "02",
        name: "LLM FRAMEWORKS",
        module: "llm-frameworks.sys",
        blurb: "Orchestration stacks powering production agent workflows.",
        skills: [
            { name: "LangChain", core: true },
            { name: "LangGraph", core: true },
            { name: "LlamaIndex" },
            { name: "CrewAI" },
            { name: "AutoGen" },
            { name: "Semantic Kernel" },
            { name: "HF Transformers" },
            { name: "OpenAI SDK" },
        ],
    },
    {
        id: "03",
        name: "RAG & VECTOR DBs",
        module: "rag-vectors.sys",
        blurb: "Enterprise retrieval — hybrid search, reranking, and vector infrastructure.",
        skills: [
            { name: "Enterprise RAG", core: true },
            { name: "Hybrid Search" },
            { name: "Semantic Search" },
            { name: "Embeddings" },
            { name: "Chunking" },
            { name: "Semantic Chunking" },
            { name: "Cross-Encoder Reranking" },
            { name: "Pinecone" },
            { name: "ChromaDB" },
            { name: "FAISS" },
            { name: "Weaviate" },
            { name: "Qdrant" },
        ],
    },
    {
        id: "04",
        name: "ML & COMPUTER VISION",
        module: "ml-vision.sys",
        blurb: "Deterministic CV algorithms and model training for industrial inspection.",
        skills: [
            { name: "PyTorch", core: true },
            { name: "TensorFlow" },
            { name: "Model Training" },
            { name: "Fine-tuning" },
            { name: "Transfer Learning" },
            { name: "Model Evaluation" },
            { name: "OpenCV", core: true },
            { name: "Image Processing" },
        ],
    },
    {
        id: "05",
        name: "LANGUAGES & BACKEND",
        module: "languages-backend.sys",
        blurb: "Scalable backend services and APIs behind the AI platforms.",
        skills: [
            { name: "Python", core: true },
            { name: "SQL" },
            { name: "JavaScript" },
            { name: "C++" },
            { name: "Golang" },
            { name: "FastAPI", core: true },
            { name: "Flask" },
            { name: "REST APIs" },
            { name: "Streamlit" },
        ],
    },
    {
        id: "06",
        name: "CLOUD, DEVOPS & LLMOPS",
        module: "cloud-llmops.sys",
        blurb: "Shipping and observing AI systems — containers, CI/CD, and LLM telemetry.",
        skills: [
            { name: "AWS" },
            { name: "Google Cloud" },
            { name: "Docker", core: true },
            { name: "Kubernetes" },
            { name: "Git" },
            { name: "GitHub Actions" },
            { name: "CI/CD" },
            { name: "PostgreSQL" },
            { name: "MySQL" },
            { name: "SQLite" },
            { name: "MongoDB" },
            { name: "Redis" },
            { name: "LangSmith" },
            { name: "Langfuse" },
            { name: "MLflow" },
            { name: "Observability" },
        ],
    },
];

const TOTAL_MODULES = DOMAINS.reduce((sum, d) => sum + d.skills.length, 0);

const TELEMETRY = [
    "0xFD90 :: agent.spawn OK",
    "ctx=128k",
    "rag.recall=0.97",
    "vec.dim=1536",
    "mcp.tools=24",
    "pipeline :: green",
    "gpu.mem 82%",
    "build ✓",
    "trace.export OK",
];

const chipVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 },
    },
};

type Spark = { x: number; y: number };

function Chip({
    skill,
    index,
    scramble,
    allowSparks,
}: {
    skill: SkillItem;
    index: number;
    scramble: boolean;
    allowSparks: boolean;
}) {
    const [burst, setBurst] = useState(0);
    const [sparks, setSparks] = useState<Spark[]>([]);

    return (
        <motion.div
            variants={chipVariants}
            onHoverStart={
                allowSparks
                    ? () => {
                          setSparks(
                              Array.from({ length: 6 }, () => ({
                                  x: (Math.random() - 0.5) * 56,
                                  y: (Math.random() - 0.5) * 44,
                              }))
                          );
                          setBurst((b) => b + 1);
                      }
                    : undefined
            }
            className={`group/chip relative flex items-center gap-2 overflow-hidden border border-white/10 bg-white/[0.04] px-3.5 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#FD9000]/60 hover:bg-[#FD9000]/10 hover:shadow-[0_6px_20px_rgba(253,144,0,0.25)] md:px-4 ${
                skill.core ? "chip-core border-[#FD9000]/30" : ""
            } [clip-path:polygon(9px_0,100%_0,100%_calc(100%-9px),calc(100%-9px)_100%,0_100%,0_9px)]`}
        >
            {/* Periodic shimmer */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden">
                <span
                    className="chip-shimmer-bar absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ animationDelay: `${(index % 7) * 1.15}s` }}
                />
            </span>

            {/* Spark burst on hover */}
            {burst > 0 &&
                sparks.map((spark, i) => (
                    <motion.span
                        key={`${burst}-${i}`}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        animate={{ x: spark.x, y: spark.y, opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-[#FD9000] shadow-[0_0_6px_#FD9000]"
                    />
                ))}

            {skill.core && <Star size={10} fill="currentColor" className="relative shrink-0 text-[#FD9000]" />}
            <ScrambleText
                text={skill.name}
                delay={index * 26}
                enabled={scramble}
                className="relative whitespace-nowrap font-mono text-[11px] tracking-wider text-white/75 transition-colors group-hover/chip:text-white md:text-xs"
            />
        </motion.div>
    );
}

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const consoleRef = useRef<HTMLDivElement>(null);
    const reducedMotion = useReducedMotion() ?? false;
    const inView = useInView(sectionRef, { once: true, amount: 0.2 });

    const [phase, setPhase] = useState<"idle" | "boot" | "online">("idle");
    const [bootText, setBootText] = useState("");
    const [active, setActive] = useState(0);
    const [switching, setSwitching] = useState(false);
    const [interacted, setInteracted] = useState(false);
    const [pointerFine, setPointerFine] = useState(false);

    useEffect(() => {
        setPointerFine(window.matchMedia("(pointer: fine)").matches);
    }, []);

    // Boot sequence
    useEffect(() => {
        if (!inView || phase !== "idle") return;
        if (reducedMotion) {
            setPhase("online");
            return;
        }
        setPhase("boot");
    }, [inView, phase, reducedMotion]);

    useEffect(() => {
        if (phase !== "boot") return;
        const message = `INITIALIZING ARSENAL :: ${TOTAL_MODULES} MODULES FOUND`;
        let i = 0;
        const typing = setInterval(() => {
            i++;
            setBootText(message.slice(0, i));
            if (i >= message.length) clearInterval(typing);
        }, 26);
        const done = setTimeout(() => setPhase("online"), message.length * 26 + 550);
        return () => {
            clearInterval(typing);
            clearTimeout(done);
        };
    }, [phase]);

    // Auto-cycle domains until the visitor interacts
    useEffect(() => {
        if (phase !== "online" || interacted || reducedMotion) return;
        const cycle = setInterval(() => {
            setSwitching(true);
            setActive((a) => (a + 1) % DOMAINS.length);
            setTimeout(() => setSwitching(false), 380);
        }, 6500);
        return () => clearInterval(cycle);
    }, [phase, interacted, reducedMotion]);

    const selectDomain = (i: number) => {
        setInteracted(true);
        if (i === active) return;
        setSwitching(true);
        setActive(i);
        setTimeout(() => setSwitching(false), 380);
    };

    // 3D console tilt (desktop pointers only)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });
    const rotateX = useTransform(smoothY, [-0.5, 0.5], [4.5, -4.5]);
    const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4.5, 4.5]);
    const glareLeft = useTransform(smoothX, (v) => `${(v + 0.5) * 100}%`);

    const tiltEnabled = pointerFine && !reducedMotion;

    const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!tiltEnabled) return;
        const rect = consoleRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const resetTilt = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const domain = DOMAINS[active];
    const scrambleChips = !reducedMotion;

    return (
        <section id="skills" ref={sectionRef} className="relative overflow-hidden px-6 py-28 md:py-36">
            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute right-0 top-1/4 h-[45vw] w-[45vw] rounded-full opacity-60"
                style={{
                    background: "radial-gradient(circle, rgba(253,144,0,0.06) 0%, transparent 60%)",
                    filter: "blur(100px)",
                }}
            />

            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-14 text-center">
                    <motion.h6
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-3 font-mono text-sm tracking-[0.3em] text-[#FD9000]"
                    >
                        {"//"} SKILLS
                    </motion.h6>
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl font-black tracking-tight md:text-6xl"
                        >
                            TECHNICAL{" "}
                            <span className="bg-gradient-to-r from-[#FD9000] to-[#FF5E00] bg-clip-text text-transparent">
                                ARSENAL
                            </span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-4 flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.25em] text-white/50 md:text-xs"
                    >
                        <span className={`h-1.5 w-1.5 rounded-full ${phase === "online" ? "bg-emerald-400" : "bg-[#FD9000]"}`}></span>
                        {phase === "online"
                            ? `SYSTEMS ONLINE · ${TOTAL_MODULES} MODULES · ${DOMAINS.length} DOMAINS`
                            : "STANDBY"}
                        <span className="animate-blink h-3 w-[2px] bg-[#FD9000]"></span>
                    </motion.div>
                </div>

                {/* Console */}
                {phase !== "idle" && (
                    <div style={{ perspective: 1400 }}>
                        <motion.div
                            ref={consoleRef}
                            onMouseMove={handleTilt}
                            onMouseLeave={resetTilt}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            style={tiltEnabled ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
                            className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl"
                        >
                            {/* Corner nodes */}
                            {["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map(
                                (pos, i) => (
                                    <span
                                        key={pos}
                                        className={`absolute ${pos} z-20 h-2 w-2 animate-pulse rounded-full bg-[#FD9000] shadow-[0_0_8px_#FD9000]`}
                                        style={{ animationDelay: `${i * 0.6}s` }}
                                    ></span>
                                )
                            )}

                            {/* Data pulses traveling the frame */}
                            {!reducedMotion && (
                                <>
                                    <motion.span
                                        className="absolute top-0 z-10 h-px w-28 bg-gradient-to-r from-transparent via-[#FD9000] to-transparent"
                                        animate={{ left: ["-10%", "100%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.span
                                        className="absolute right-0 z-10 h-28 w-px bg-gradient-to-b from-transparent via-[#FD9000] to-transparent"
                                        animate={{ top: ["-10%", "100%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                                    />
                                    <motion.span
                                        className="absolute bottom-0 z-10 h-px w-28 bg-gradient-to-r from-transparent via-[#FD9000] to-transparent"
                                        animate={{ left: ["100%", "-10%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                                    />
                                    <motion.span
                                        className="absolute left-0 z-10 h-28 w-px bg-gradient-to-b from-transparent via-[#FD9000] to-transparent"
                                        animate={{ top: ["100%", "-10%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 3 }}
                                    />
                                </>
                            )}

                            {/* Holographic glare */}
                            {tiltEnabled && (
                                <motion.div
                                    style={{ left: glareLeft }}
                                    className="pointer-events-none absolute -inset-y-6 z-10 w-40 -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
                                />
                            )}

                            {phase === "boot" ? (
                                /* Boot sequence */
                                <div className="flex min-h-[380px] flex-col items-center justify-center gap-6 p-8">
                                    <div className="font-mono text-xs tracking-[0.2em] text-[#FD9000] md:text-sm">
                                        {">"} {bootText}
                                        <span className="animate-blink ml-1 inline-block h-3.5 w-[7px] bg-[#FD9000] align-middle"></span>
                                    </div>
                                    <div className="h-1 w-64 overflow-hidden rounded-full bg-white/10 md:w-96">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                            className="h-full bg-gradient-to-r from-[#FD9000] to-[#FF5E00] shadow-[0_0_12px_rgba(253,144,0,0.8)]"
                                        />
                                    </div>
                                </div>
                            ) : (
                                /* Online console */
                                <div className="crt-flicker">
                                    <div className="grid gap-6 p-5 md:grid-cols-12 md:gap-8 md:p-8">
                                        {/* Domain selector */}
                                        <div className="flex gap-2 overflow-x-auto pb-1 md:col-span-4 md:flex-col md:overflow-visible md:pb-0 lg:col-span-4">
                                            {DOMAINS.map((d, i) => (
                                                <button
                                                    key={d.id}
                                                    onClick={() => selectDomain(i)}
                                                    className={`group/tab relative flex shrink-0 items-center gap-3 rounded-lg border px-4 py-2.5 text-left font-mono text-[11px] tracking-wider transition-colors duration-300 md:py-3 md:text-xs ${
                                                        i === active
                                                            ? "border-[#FD9000]/30 bg-[#FD9000]/10 text-white"
                                                            : "border-transparent text-white/45 hover:bg-white/5 hover:text-white"
                                                    }`}
                                                >
                                                    <span className={i === active ? "text-[#FD9000]" : "text-[#FD9000]/40"}>
                                                        {d.id}
                                                    </span>
                                                    <span className="whitespace-nowrap md:whitespace-normal">{d.name}</span>
                                                    {i === active && (
                                                        <motion.span
                                                            layoutId="domain-indicator"
                                                            className="absolute right-2 h-4 w-[3px] rounded-full bg-[#FD9000] shadow-[0_0_10px_#FD9000]"
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Chip field */}
                                        <div className="relative min-h-[280px] overflow-hidden md:col-span-8 lg:col-span-8">
                                            {/* Laser scanline */}
                                            {!switching && !reducedMotion && (
                                                <span className="laser-bar pointer-events-none absolute left-0 right-0 z-10 hidden h-14 bg-gradient-to-b from-transparent via-[#FD9000]/10 to-transparent md:block"></span>
                                            )}

                                            {/* Glitch flash on switch */}
                                            {switching && (
                                                <>
                                                    <div className="glitch-overlay pointer-events-none absolute inset-0 z-20 bg-[#FD9000]/20 mix-blend-screen"></div>
                                                    <div
                                                        className="glitch-overlay pointer-events-none absolute inset-0 z-20 bg-cyan-400/10 mix-blend-screen"
                                                        style={{ animationDelay: "0.05s" }}
                                                    ></div>
                                                </>
                                            )}

                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={domain.id}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit={{ opacity: 0, y: 22, transition: { duration: 0.16 } }}
                                                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.035 } } }}
                                                >
                                                    <div className="mb-1 flex items-center justify-between font-mono text-[11px] md:text-sm">
                                                        <span className="text-[#FD9000]">
                                                            {">"}{" "}
                                                            <ScrambleText
                                                                text={`loading ${domain.module}`}
                                                                enabled={!reducedMotion}
                                                            />
                                                        </span>
                                                        <span className="text-white/40">▸ {domain.skills.length} MODULES</span>
                                                    </div>
                                                    <motion.p
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.15, duration: 0.4 }}
                                                        className="mb-6 text-sm text-white/55 md:text-base"
                                                    >
                                                        {domain.blurb}
                                                    </motion.p>

                                                    <div className="flex flex-wrap gap-2.5 md:gap-3">
                                                        {domain.skills.map((skill, i) => (
                                                            <Chip
                                                                key={skill.name}
                                                                skill={skill}
                                                                index={i}
                                                                scramble={scrambleChips}
                                                                allowSparks={pointerFine && !reducedMotion}
                                                            />
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    {/* Telemetry strip */}
                                    <div
                                        className="overflow-hidden border-t border-white/5 py-2"
                                        style={{
                                            maskImage:
                                                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                                            WebkitMaskImage:
                                                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                                        }}
                                    >
                                        <div className="animate-marquee flex w-max">
                                            {[0, 1].map((half) => (
                                                <div key={half} className="flex shrink-0 items-center">
                                                    {TELEMETRY.map((item) => (
                                                        <span
                                                            key={`${half}-${item}`}
                                                            className="mx-5 flex items-center gap-5 font-mono text-[10px] tracking-[0.2em] text-white/20"
                                                        >
                                                            <span className="text-[#FD9000]/30">▸</span>
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
