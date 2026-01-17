"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const volunteering = [
    {
        title: "GCES Coderz Club",
        role: "Founder & Lead",
        items: [
            "Founded initiative to create technical ecosystem.",
            "Organized workshops and seminars.",
            "Guided 150+ students."
        ],
        image: "/assets/images/volunteer-1.webp"
    },
    {
        title: "Youth Red Cross (YRC)",
        role: "GCE Secretary",
        items: [
            "Designated as Overall GCE Secretary.",
            "Organized 'YRC Day - 2022'.",
            "Coordinated World Water Day Competitions."
        ],
        image: "/assets/images/volunteer-2.webp"
    },
    {
        title: "ƎLITE'22 - Tech Inauguration",
        role: "Event Manager",
        items: [
            "Introduced all technical clubs.",
            "Managed inter-department events."
        ],
        image: "/assets/images/volunteer-3.webp"
    },
    {
        title: "ZERONZ'22 - Symposium",
        role: "Overall Head",
        items: [
            "Conducted National Level Symposium.",
            "Managed 500+ participants."
        ],
        image: "/assets/images/volunteer-4.webp"
    }
];

export default function Volunteer() {
    // Duplicate data to create seamless loop
    const marqueeItems = [...volunteering, ...volunteering, ...volunteering];

    return (
        <section id="volunteer" className="min-h-screen py-24 overflow-hidden relative flex flex-col justify-center bg-[#050505]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(253,144,0,0.03),transparent_70%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 mb-16 relative z-10">
                <div className="text-center" data-aos="fade-up">
                    <h6 className="text-[#FD9000] font-bold tracking-widest uppercase mb-2">COMMUNITY IMPACT</h6>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">VOLUNTEER EXPERIENCE</h1>
                    <div className="w-20 h-1 bg-[#FD9000] mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Beyond coding, I lead initiatives that foster knowledge sharing and technical growth within the community.
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden py-10">
                {/* Gradient Masks for Fade visual effect on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

                {/* Marquee Track */}
                <motion.div
                    className="flex gap-8 w-max px-4"
                    animate={{ x: ["-33.33%", "0%"] }} // Left-to-Right: Start offset and move to 0
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed (seconds)
                    }}
                >
                    {marqueeItems.map((vol, index) => (
                        <div
                            key={index}
                            className="relative w-[400px] md:w-[500px] aspect-[16/10] rounded-3xl overflow-hidden group border border-white/10 bg-white/5 shrink-0"
                        >
                            {/* Image Background */}
                            <Image
                                src={vol.image}
                                alt={vol.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                unoptimized
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-2">
                                    <span className="text-[#FD9000] text-xs font-bold tracking-widest uppercase border border-[#FD9000] px-2 py-1 rounded">
                                        {vol.role}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{vol.title}</h3>

                                <ul className="space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto">
                                    {vol.items.map((item, i) => (
                                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                            <span className="text-[#FD9000] mt-1.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Decoration */}
            <div className="w-full flex justify-center mt-12 gap-2 opacity-30">
                <div className="w-2 h-2 rounded-full bg-[#FD9000] animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-[#FD9000] animate-pulse delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-[#FD9000] animate-pulse delay-200"></div>
            </div>
        </section>
    );
}
