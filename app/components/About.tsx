"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const paragraphs = [
        "I build and maintain production-grade software systems where correctness, performance, and reliability are non-negotiable.",
        "My work sits at the intersection of algorithms, automation, and applied GenAI. Over the past few years, I’ve worked on real-world engineering problems—designing and optimizing algorithms, building automation tooling, and integrating AI capabilities into systems that operate under practical constraints.",
        "I’m comfortable working close to the core of systems: debugging complex issues, reasoning about edge cases, and improving performance through iterative refinement. I’ve collaborated closely with product, software, testing, and application teams to translate requirements into robust, deployable solutions.",
        "I value clarity, ownership, and continuous learning, and I’m drawn to environments that emphasize strong engineering practices, thoughtful collaboration, and long-term impact over short-term wins."
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-[var(--color-bg-secondary)]/30">
            <div className="container mx-auto">
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h6 className="text-[#FD9000] font-bold tracking-widest uppercase mb-2">ABOUT</h6>
                    <h1 className="text-4xl md:text-5xl font-bold">I'M</h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    <motion.div
                        className="md:col-span-4"
                        initial={{ opacity: 0, x: -50, rotate: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        <div className="relative group perspective-1000">
                            {/* Decorative backdrop elements */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#FD9000]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="absolute inset-0 bg-[#FD9000] rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
                            <Image
                                src="/assets/images/person.webp"
                                alt="Profile Picture"
                                width={400}
                                height={500}
                                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 will-change-transform group-hover:-translate-y-2"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:col-span-8 relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Large Quote Mark */}
                        <div className="absolute -top-10 -left-6 text-[#FD9000]/20 text-9xl font-serif select-none pointer-events-none">
                            “
                        </div>

                        <div className="relative z-10 space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed font-light italic">
                            {paragraphs.map((text, pIndex) => (
                                <p key={pIndex}>
                                    {text.split(" ").map((word, wIndex) => (
                                        <motion.span
                                            key={wIndex}
                                            initial={{ opacity: 0, filter: "blur(10px)" }}
                                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                            transition={{
                                                duration: 0.5,
                                                delay: (pIndex * 1.5) + (wIndex * 0.05),
                                                ease: "easeOut"
                                            }}
                                            className="inline-block mr-1.5"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </p>
                            ))}
                        </div>

                        {/* Closing Quote */}
                        <div className="absolute -bottom-10 -right-6 text-[#FD9000]/20 text-9xl font-serif select-none pointer-events-none rotate-180">
                            “
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
