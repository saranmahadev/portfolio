"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Certificate = { src: string; label: string };

const primaryCerts: Certificate[] = [
    { src: "/assets/images/certs/Primary/AWS Cloud Practitioner.png", label: "AWS Certified Cloud Practitioner" },
    { src: "/assets/images/certs/Primary/1.webp", label: "DeepLearning.AI certificate" },
    { src: "/assets/images/certs/Primary/2.webp", label: "Networking certificate" },
    { src: "/assets/images/certs/Primary/3.webp", label: "Linux Essentials certificate" },
    { src: "/assets/images/certs/Primary/5.webp", label: "PCAP Programming certificate" },
    { src: "/assets/images/certs/Primary/6.webp", label: "Cybersecurity certificate" },
    { src: "/assets/images/certs/Primary/8.webp", label: "Oracle Cloud certificate" },
    { src: "/assets/images/certs/Primary/22.webp", label: "DevOps certificate" },
    { src: "/assets/images/certs/Primary/24.webp", label: "Postman API certificate" },
];

const secondaryCerts: Certificate[] = [9, 10, 12, 14, 20].map((id, index) => ({ src: `/assets/images/certs/Secondary/${id}.webp`, label: `Professional certificate ${index + 1}` }));
const udemyCerts: Certificate[] = [7, 16, 17, 21].map((id, index) => ({ src: `/assets/images/certs/Udemy/${id}.webp`, label: `Udemy course certificate ${index + 1}` }));

function TierLabel({ index }: { index: string }) {
    return (
        <div className="mb-7 flex items-center gap-4 font-mono text-[10px] tracking-[0.22em] text-white/40 md:text-xs">
            <span className="text-[#FD9000]">{"//"} TIER {index}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#FD9000]/40 to-transparent" />
        </div>
    );
}

function CertificateCard({ cert, index, compact = false, onSelect }: { cert: Certificate; index: number; compact?: boolean; onSelect: () => void }) {
    const reduceMotion = useReducedMotion();
    return (
        <motion.button
            type="button"
            aria-label={`Open ${cert.label}`}
            initial={reduceMotion ? false : { opacity: 0, y: 34, rotate: index % 2 ? 1.5 : -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", damping: 22, stiffness: 180, delay: reduceMotion ? 0 : Math.min(index * 0.055, 0.35) }}
            onClick={onSelect}
            className={`certificate-card group relative w-full overflow-hidden border border-white/10 bg-[#090909] text-left [clip-path:polygon(14px_0,100%_0,100%_calc(100%-14px),calc(100%-14px)_100%,0_100%,0_14px)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD9000] ${compact ? "aspect-[4/3]" : "aspect-[16/11]"}`}
        >
            <div className="absolute inset-2 overflow-hidden bg-black/60 md:inset-3">
                <Image src={cert.src} alt={cert.label} fill sizes={compact ? "(max-width: 768px) 50vw, 240px" : "(max-width: 768px) 100vw, 420px"} className="object-contain p-1 transition duration-500 group-hover:scale-[1.035]" />
            </div>
            <div className="certificate-shine" aria-hidden="true" />
            <span className="corner-bracket left-2 top-2 border-l border-t" aria-hidden="true" />
            <span className="corner-bracket bottom-2 right-2 border-b border-r" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 z-10 grid h-8 w-8 place-items-center border border-white/15 bg-black/70 text-white/50 opacity-0 transition group-hover:border-[#FD9000]/50 group-hover:text-[#FD9000] group-hover:opacity-100"><ExternalLink size={14} /></span>
        </motion.button>
    );
}

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (!selectedCert) return;
        const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setSelectedCert(null);
        window.addEventListener("keydown", closeOnEscape);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", closeOnEscape);
            document.body.style.overflow = "";
        };
    }, [selectedCert]);

    return (
        <section id="certificates" className="section-shell min-h-screen overflow-hidden bg-[#050505] py-24">
            <div className="section-grid" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
                <div className="section-heading mb-16 text-center md:mb-20">
                    <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-kicker">{"//"} VALIDATED EXPERTISE</motion.p>
                    <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title">PROOF OF <span>PRACTICE</span></motion.h2>
                    <p className="section-readout">18 CREDENTIALS · CLOUD · AI · ENGINEERING</p>
                </div>

                <TierLabel index="1" />
                <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {primaryCerts.map((cert, index) => <CertificateCard key={cert.src} cert={cert} index={index} onSelect={() => setSelectedCert(cert)} />)}
                </div>

                <TierLabel index="2" />
                <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                    {secondaryCerts.map((cert, index) => <CertificateCard key={cert.src} cert={cert} index={index} compact onSelect={() => setSelectedCert(cert)} />)}
                </div>

                <TierLabel index="3" />
                <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
                    {udemyCerts.map((cert, index) => <CertificateCard key={cert.src} cert={cert} index={index} compact onSelect={() => setSelectedCert(cert)} />)}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedCert.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl md:p-10"
                        onClick={() => setSelectedCert(null)}
                    >
                        <button type="button" aria-label="Close certificate" autoFocus onClick={() => setSelectedCert(null)} className="absolute right-4 top-4 z-20 grid h-12 w-12 place-items-center border border-white/15 bg-black/60 text-white/70 transition hover:border-[#FD9000]/60 hover:text-[#FD9000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD9000] md:right-8 md:top-8"><X /></button>
                        <motion.div
                            layoutId={reduceMotion ? undefined : `certificate-${selectedCert.src}`}
                            initial={reduceMotion ? false : { scale: 0.88, y: 35 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={reduceMotion ? undefined : { scale: 0.9, y: 20 }}
                            className="relative h-[78vh] w-full max-w-6xl"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <Image src={selectedCert.src} alt={selectedCert.label} fill sizes="95vw" className="object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.8)]" priority />
                        </motion.div>
                        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.2em] text-white/40">ESC TO CLOSE</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
