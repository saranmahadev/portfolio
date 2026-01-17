"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
    const education = [
        {
            year: "2019 - 2023",
            score: "7.88 CGPA",
            degree: "Bachelor of Engineering",
            major: "Computer Science and Engineering",
            school: "Government College of Engineering, Srirangam",
            logo: "/assets/images/education/gces_logo.png",
            desc: "Department Representative for 4 years. Tech Lead for Symposiums.",
            color: "#FD9000",
            highlight: true
        },
        {
            year: "2018 - 2019",
            score: "82.2%",
            degree: "HSC (Class XII)",
            major: "Mathematics & Computer Science",
            school: "Y.R.T.V. Matriculation Hr. Sec. School",
            logo: "/assets/images/education/yrtv_logo.png",
            desc: "Scored 99/100 in Computer Science. Active in Quiz Competitions.",
            color: "#3b82f6",
            highlight: false
        }
    ];

    return (
        <section id="education" className="min-h-screen py-24 px-6 overflow-hidden relative">
            {/* Background Blobs for depth */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h6 className="text-[#FD9000] font-bold tracking-widest uppercase mb-2">ACADEMIC FOUNDATION</h6>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">EDUCATION</h1>
                    <div className="w-20 h-1 bg-[#FD9000] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Photo & Quote (Redesigned) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block sticky top-24"
                    >
                        {/* Main Award Photo Card */}
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group h-[600px]">
                            {/* Image */}
                            <Image
                                src="/assets/images/education/awarded.png"
                                alt="Award Moment"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                                unoptimized
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                                <div className="mb-4">
                                    {/* Tag Removed */}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight font-serif italic">
                                    "I have no special talent. I am only passionately curious."
                                </h3>
                                <p className="text-gray-400 text-sm font-serif italic">- Albert Einstein</p>
                            </div>
                        </div>

                        {/* Decorative background element behind photo */}
                        <div className="absolute -z-10 top-8 -right-8 w-full h-full rounded-3xl border border-[#FD9000]/20 bg-[#FD9000]/5"></div>
                    </motion.div>

                    {/* Right Side: Timeline Cards (Redesigned) */}
                    <div className="space-y-8 mt-4">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className={`relative bg-[#0a0a0a]/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,144,0,0.15)] hover:-translate-y-2 ${edu.highlight ? 'border-[#FD9000]/50 hover:border-[#FD9000]' : 'border-white/10 hover:border-white/30'}`}>

                                    <div className="flex justify-between items-start gap-4 mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`text-xs font-mono font-bold px-2 py-1 rounded border ${edu.highlight ? 'bg-[#FD9000]/10 border-[#FD9000]/30 text-[#FD9000]' : 'bg-white/5 border-white/10 text-gray-400'}`}>
                                                    {edu.year}
                                                </span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FD9000] transition-colors">{edu.degree}</h3>
                                            <p className="text-gray-400 text-sm mt-1">{edu.major}</p>
                                        </div>

                                        {/* Logo Container - White bg for visibility */}
                                        {edu.logo && (
                                            <div className="w-16 h-16 bg-white rounded-xl p-2 shrink-0 shadow-lg flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-[#FD9000] transition-colors">
                                                <Image
                                                    src={edu.logo}
                                                    alt="School Logo"
                                                    width={60}
                                                    height={60}
                                                    className="object-contain w-full h-full"
                                                    unoptimized
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <h4 className="text-sm font-bold text-gray-200 mb-4 flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${edu.highlight ? 'bg-[#FD9000] shadow-[0_0_10px_#FD9000]' : 'bg-gray-600'}`}></span>
                                        {edu.school}
                                    </h4>

                                    <div className="border-t border-white/10 pt-4 mt-4">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <p className="text-sm text-gray-400 leading-relaxed max-w-[90%]">
                                                {edu.desc}
                                            </p>
                                            <div className="whitespace-nowrap">
                                                <span className={`text-2xl font-black ${edu.highlight ? 'text-[#FD9000]' : 'text-white/20 group-hover:text-white transition-colors'}`}>
                                                    {edu.score}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
