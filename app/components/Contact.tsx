"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const socials = [
    { icon: Mail, href: "mailto:sarandevnet@gmail.com", label: "Email", handle: "sarandevnet@gmail.com" },
    { icon: Linkedin, href: "https://linkedin.com/in/saranmahadev", label: "LinkedIn", handle: "/in/saranmahadev" },
    { icon: Github, href: "https://github.com/saranmahadev", label: "GitHub", handle: "@saranmahadev" },
];

const inputClass = "peer w-full border border-white/10 bg-white/[0.035] px-4 pb-3 pt-7 text-sm text-white outline-none transition placeholder:text-transparent hover:border-white/20 focus:border-[#FD9000]/70 focus:bg-[#FD9000]/[0.025] focus:ring-1 focus:ring-[#FD9000]/30 disabled:cursor-not-allowed disabled:opacity-50 [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]";
const labelClass = "pointer-events-none absolute left-4 top-2.5 font-mono text-[9px] tracking-[0.2em] text-white/40 transition peer-focus:text-[#FD9000]";

export default function Contact() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const reduceMotion = useReducedMotion();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("submitting");
        const form = event.currentTarget;
        try {
            const response = await fetch("https://formspree.io/f/xdojzpyz", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });
            if (!response.ok) throw new Error(`Form service returned ${response.status}`);
            form.reset();
            setStatus("success");
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="section-shell flex min-h-screen items-center overflow-hidden bg-[#030303] px-5 py-24 md:px-8">
            <div className="section-grid" aria-hidden="true" />
            <div className="section-glow left-1/2 top-1/2" aria-hidden="true" />
            <div className="relative z-10 mx-auto w-full max-w-6xl">
                <div className="section-heading mb-14 text-center">
                    <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-kicker">{"//"} CONTACT</motion.p>
                    <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">LET’S BUILD <span>SOMETHING.</span></motion.h2>
                    <p className="section-readout">OPEN TO GENERATIVE AI · AGENTIC SYSTEMS · R&amp;D</p>
                </div>

                <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <motion.aside initial={reduceMotion ? false : { opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-6 [clip-path:polygon(18px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_18px)] md:p-8">
                        <span className="corner-bracket left-3 top-3 border-l border-t" aria-hidden="true" />
                        <p className="font-mono text-[10px] tracking-[0.22em] text-[#FD9000]">STATUS :: AVAILABLE</p>
                        <h3 className="mt-7 text-3xl font-black leading-tight md:text-4xl">Have a hard AI problem worth solving?</h3>
                        <p className="mt-5 max-w-md text-sm leading-7 text-white/55">I enjoy turning ambitious research ideas into dependable systems. Send the context, the constraint, or simply the first hello.</p>

                        <div className="mt-9 grid gap-3">
                            {socials.map((social, index) => (
                                <motion.a key={social.label} href={social.href} target={social.label === "Email" ? undefined : "_blank"} rel={social.label === "Email" ? undefined : "noopener noreferrer"} aria-label={`${social.label}: ${social.handle}`} initial={reduceMotion ? false : { opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: reduceMotion ? 0 : index * 0.08 }} className="group flex items-center gap-4 border border-white/10 bg-black/30 p-3 transition hover:border-[#FD9000]/45 hover:bg-[#FD9000]/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD9000]">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/10 text-white/60 transition group-hover:border-[#FD9000]/40 group-hover:text-[#FD9000]"><social.icon size={18} /></span>
                                    <span className="min-w-0"><span className="block font-mono text-[9px] tracking-[0.2em] text-white/35">{social.label.toUpperCase()}</span><span className="block truncate text-sm text-white/75">{social.handle}</span></span>
                                    <ArrowUpRight className="ml-auto text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FD9000]" size={17} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.aside>

                    <motion.div initial={reduceMotion ? false : { opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="terminal-panel overflow-hidden border border-white/10 bg-[#080808] [clip-path:polygon(18px_0,100%_0,100%_calc(100%-18px),calc(100%-18px)_100%,0_100%,0_18px)]">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.025] px-5 py-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                            <span className="ml-3 font-mono text-[9px] tracking-[0.18em] text-white/35">new-message.sh</span>
                            <span className="ml-auto flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-white/35"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FD9000]" />SECURE CHANNEL</span>
                        </div>

                        <form onSubmit={handleSubmit} className="relative space-y-4 p-5 md:p-8">
                            <p className="mb-6 font-mono text-xs text-white/45"><span className="text-[#FD9000]">saran@portfolio:~$</span> initiate --conversation</p>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="relative"><input id="contact-name" type="text" name="Name" placeholder="Name" className={inputClass} required disabled={status === "submitting"} /><label htmlFor="contact-name" className={labelClass}>01 / YOUR NAME</label></div>
                                <div className="relative"><input id="contact-email" type="email" name="email" placeholder="Email" className={inputClass} required disabled={status === "submitting"} /><label htmlFor="contact-email" className={labelClass}>02 / EMAIL ADDRESS</label></div>
                            </div>
                            <div className="relative"><input id="contact-subject" type="text" name="subject" placeholder="Subject" className={inputClass} required disabled={status === "submitting"} /><label htmlFor="contact-subject" className={labelClass}>03 / SUBJECT</label></div>
                            <div className="relative"><textarea id="contact-message" name="content" rows={6} placeholder="Message" className={`${inputClass} resize-none`} required disabled={status === "submitting"} /><label htmlFor="contact-message" className={labelClass}>04 / MESSAGE</label></div>

                            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                                <p className="font-mono text-[9px] tracking-[0.14em] text-white/30">RESPONSE WINDOW :: 24–48 HOURS</p>
                                <button type="submit" disabled={status === "submitting"} className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#FD9000] px-7 font-mono text-xs font-bold tracking-[0.16em] text-black transition hover:bg-[#ffab38] hover:shadow-[0_0_30px_rgba(253,144,0,.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait disabled:opacity-60 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
                                    {status === "submitting" ? "TRANSMITTING..." : "SEND SIGNAL"}<Send size={16} className="transition group-hover:translate-x-1" />
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                {status === "success" && <motion.div key="success" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-3 border border-[#FD9000]/30 bg-[#FD9000]/10 p-4 text-sm text-white/75"><CheckCircle className="text-[#FD9000]" size={20} /><span>Signal received. I’ll get back to you soon.</span><button type="button" onClick={() => setStatus("idle")} className="ml-auto font-mono text-[9px] text-white/40 hover:text-white">DISMISS</button></motion.div>}
                                {status === "error" && <motion.div key="error" role="alert" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-3 border border-red-400/30 bg-red-400/10 p-4 text-sm text-white/75"><AlertCircle className="text-red-300" size={20} /><span>Transmission failed. Please retry or email me directly.</span><button type="button" onClick={() => setStatus("idle")} className="ml-auto font-mono text-[9px] text-white/40 hover:text-white">DISMISS</button></motion.div>}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
