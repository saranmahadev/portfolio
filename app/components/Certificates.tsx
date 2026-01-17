"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

// Data Structure
const primaryCerts = [
    { src: "/assets/images/certs/Primary/AWS Cloud Practitioner.png", label: "AWS Certified Cloud Practitioner" },
    { src: "/assets/images/certs/Primary/1.webp", label: "DeepLearning.AI" },
    { src: "/assets/images/certs/Primary/2.webp", label: "Networking" },
    { src: "/assets/images/certs/Primary/3.webp", label: "Linux Essentials" },
    { src: "/assets/images/certs/Primary/5.webp", label: "PCAP Programming" },
    { src: "/assets/images/certs/Primary/6.webp", label: "Cybersecurity" },
    { src: "/assets/images/certs/Primary/8.webp", label: "Oracle Cloud" },
    { src: "/assets/images/certs/Primary/22.webp", label: "DevOps" },
    { src: "/assets/images/certs/Primary/24.webp", label: "Postman API" },
];

const secondaryCerts = [
    "/assets/images/certs/Secondary/9.webp",
    "/assets/images/certs/Secondary/10.webp",
    "/assets/images/certs/Secondary/12.webp",
    "/assets/images/certs/Secondary/14.webp",
    "/assets/images/certs/Secondary/20.webp",
];

const udemyCerts = [
    "/assets/images/certs/Udemy/7.webp",
    "/assets/images/certs/Udemy/16.webp",
    "/assets/images/certs/Udemy/17.webp",
    "/assets/images/certs/Udemy/21.webp",
];

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <section id="certificates" className="min-h-screen py-24 relative overflow-hidden bg-[#050505]">

            {/* Elegant Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-24" data-aos="fade-up">
                    <h6 className="text-[#FD9000] font-bold tracking-widest uppercase mb-2">VALIDATED EXPERTISE</h6>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">CERTIFICATIONS</h1>
                    <div className="w-20 h-1 bg-[#FD9000] mx-auto rounded-full"></div>
                </div>

                {/* --- PRIMARY TIER (Large Grid) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {primaryCerts.map((cert, index) => (
                        <motion.div
                            key={`prim-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[16/11] bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FD9000]/50 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(253,144,0,0.1)]"
                            onClick={() => setSelectedCert(cert.src)}
                        >
                            {/* Image Container - Padded & Maintained */}
                            <div className="absolute inset-2 md:inset-4 flex items-center justify-center bg-[#0a0a0a] rounded-xl overflow-hidden">
                                <Image
                                    src={cert.src}
                                    alt={cert.label}
                                    fill
                                    className="object-contain hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* --- SECONDARY TIER (Medium Grid) --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
                    {secondaryCerts.map((src, index) => (
                        <motion.div
                            key={`sec-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/3] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all cursor-pointer"
                            onClick={() => setSelectedCert(src)}
                        >
                            <div className="absolute inset-2 flex items-center justify-center">
                                <Image
                                    src={src}
                                    alt="Skill Cert"
                                    fill
                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                    unoptimized
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* --- UDEMY TIER (Larger & No Crop) --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center max-w-5xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-500 transform translate-y-4">
                    {udemyCerts.map((src, index) => (
                        <motion.div
                            key={`udemy-${index}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative aspect-[4/3] bg-[#0a0a0a] rounded-xl border border-white/10 p-2 cursor-pointer hover:scale-105 transition-transform hover:border-[#FD9000]/30 shadow-md"
                            onClick={() => setSelectedCert(src)}
                        >
                            <div className="relative w-full h-full rounded bg-black/50">
                                <Image
                                    src={src}
                                    alt="Udemy"
                                    fill
                                    className="object-contain p-1" // Ensure full visibility
                                    unoptimized
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- ANIMATED MODAL --- */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedCert(null)}
                    >
                        {/* Close Button */}
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md">
                            <X size={28} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedCert}
                                alt="Full Certificate"
                                fill
                                className="object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                                unoptimized
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
