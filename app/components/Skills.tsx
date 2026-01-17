"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "Python", icon: "devicon-python-plain colored" },
                { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                { name: "C++", icon: "devicon-cplusplus-plain colored" },
                { name: "SQL", icon: "devicon-mysql-plain colored" }
            ]
        },
        {
            title: "AI Libraries",
            skills: [
                { name: "PyTorch", icon: "devicon-pytorch-original colored" },
                { name: "OpenCV", icon: "devicon-opencv-plain colored" },
                { name: "Pandas", icon: "devicon-pandas-plain text-white" }, // Fixed visibility
                { name: "NumPy", icon: "devicon-numpy-plain colored" }
            ]
        },
        {
            title: "LLM Orchestration",
            skills: [
                { name: "LangChain", icon: "🦜" },
                { name: "LangGraph", icon: "🕸️" },
                { name: "LlamaIndex", icon: "🦙" },
                { name: "Gemini ADK", icon: "✨" }
            ]
        },
        {
            title: "Retrieval & Vector DBs",
            skills: [
                { name: "Pinecone", icon: "🌲" },
                { name: "ChromaDB", icon: "🌈" },
                { name: "Qdrant", icon: "🔮" },
                { name: "RAG", icon: "📚" }
            ]
        },
        {
            title: "Cloud & DevOps",
            skills: [
                { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
                { name: "Docker", icon: "devicon-docker-plain colored" },
                { name: "GitHub", icon: "devicon-github-plain text-white" },
                { name: "Jenkins", icon: "devicon-jenkins-line colored" }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "VS Code", icon: "devicon-vscode-plain colored" },
                { name: "Copilot", icon: "🤖" },
                { name: "Google Antigravity", icon: "🌌" },
                { name: "Claude Code", icon: "🧠" }
            ]
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-20 px-6 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="mb-16 text-center" data-aos="fade-up">
                    <h6 className="text-[#FD9000] font-bold tracking-widest uppercase mb-2">TECHNICAL ARSENAL</h6>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">MY SKILLS</h1>
                    <div className="w-20 h-1 bg-[#FD9000] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="relative group rounded-2xl p-[1px] overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Animated Border Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FD9000]/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Card Content */}
                            <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-[#FD9000]/30 transition-colors duration-300">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FD9000]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#FD9000] transition-colors relative z-10">{category.title}</h3>

                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    {category.skills.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 group/skill hover:bg-[#FD9000]/10 hover:border-[#FD9000]/30 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-3">
                                                {skill.icon.startsWith("devicon") ? (
                                                    <i className={skill.icon}></i>
                                                ) : (
                                                    <span role="img" aria-label={skill.name}>{skill.icon}</span>
                                                )}
                                            </div>
                                            <span className="text-xs font-medium text-gray-400 group-hover/skill:text-white text-center">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FD9000]/10 rounded-full blur-[100px] -z-0"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-0"></div>
        </section>
    );
}
