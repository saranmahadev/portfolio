"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const volunteering = [
    { title: "GCES Coderz Club", role: "Founder & Lead", items: ["Founded a student-led technical ecosystem.", "Organized workshops and seminars.", "Guided 150+ students."], image: "/assets/images/volunteer-1.webp" },
    { title: "Youth Red Cross", role: "GCE Secretary", items: ["Served as overall GCE secretary.", "Organized YRC Day 2022.", "Coordinated World Water Day competitions."], image: "/assets/images/volunteer-2.webp" },
    { title: "ELITE '22", role: "Event Manager", items: ["Introduced the college technical clubs.", "Managed inter-department events."], image: "/assets/images/volunteer-3.webp" },
    { title: "ZERONZ '22", role: "Overall Head", items: ["Led a national-level symposium.", "Managed an event for 500+ participants."], image: "/assets/images/volunteer-4.webp" },
];

const marqueeItems = [...volunteering, ...volunteering, ...volunteering];

export default function Volunteer() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="volunteer" className="section-shell min-h-screen overflow-hidden bg-[#050505] py-24">
            <div className="section-grid" aria-hidden="true" />
            <div className="section-glow left-1/2 top-1/3" aria-hidden="true" />

            <div className="section-heading relative z-10 mx-auto mb-14 max-w-4xl px-6 text-center">
                <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-kicker">{"//"} COMMUNITY</motion.p>
                <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="section-title">VOLUNTEER <span>EXPERIENCE</span></motion.h2>
                <motion.p initial={reduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: reduceMotion ? 0 : 0.25 }} className="section-readout">04 INITIATIVES · 500+ PARTICIPANTS · 150+ MENTORED</motion.p>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">Building communities where curiosity becomes confidence, leadership, and shared technical momentum.</p>
            </div>

            <div className="kinetic-marquee relative z-10 overflow-hidden py-8" aria-label="Volunteer highlights">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#050505] to-transparent md:w-32" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#050505] to-transparent md:w-32" />
                <div className="kinetic-track flex w-max gap-5 px-4 md:gap-8">
                    {marqueeItems.map((vol, index) => (
                        <article aria-hidden={index >= volunteering.length} key={`${vol.title}-${index}`} className="kinetic-card group relative aspect-[4/5] w-[78vw] max-w-[360px] shrink-0 overflow-hidden border border-white/10 bg-[#0a0a0a] transition-[opacity,transform,border-color] duration-500 [clip-path:polygon(18px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_18px)] hover:z-10 hover:scale-[1.035] hover:border-[#FD9000]/60 md:aspect-[16/10] md:w-[500px]">
                            <Image src={vol.image} alt="" fill sizes="(max-width: 768px) 78vw, 500px" className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                            <div className="scanline" aria-hidden="true" />
                            <span className="corner-bracket left-3 top-3 border-l border-t" aria-hidden="true" />
                            <span className="corner-bracket bottom-3 right-3 border-b border-r" aria-hidden="true" />
                            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                                <span className="inline-flex border border-[#FD9000]/50 bg-black/50 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-[#FD9000] [clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]">{vol.role.toUpperCase()}</span>
                                <h3 className="mt-3 text-2xl font-black tracking-tight text-white">{vol.title}</h3>
                                <ul className="mt-3 grid gap-1.5 text-sm text-white/70 md:max-h-0 md:translate-y-3 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-28 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                                    {vol.items.map((item) => <li key={item} className="flex gap-2"><span className="text-[#FD9000]">›</span><span>{item}</span></li>)}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <p className="relative z-10 mt-7 text-center font-mono text-[10px] tracking-[0.25em] text-white/35">HOVER TO HOLD · EXPLORE THE FIELD LOG</p>
        </section>
    );
}
