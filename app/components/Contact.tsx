"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen py-20 px-6 flex items-center justify-center">
            <div className="container mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h6 className="text-[#FD9000] font-bold tracking-widest uppercase mb-2">CONTACT</h6>
                    <h1 className="text-4xl md:text-5xl font-bold">LET'S TALK</h1>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="flex gap-6">
                        {[
                            { icon: Mail, href: "mailto:saranmahadevajc@gmail.com" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/saran-mahadev" },
                            { icon: Github, href: "https://github.com/Saran-Mahadev" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-white border border-[var(--color-glass-border)] hover:bg-[#FD9000] hover:text-black hover:scale-110 transition-all duration-300 shadow-lg"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <item.icon size={28} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="max-w-2xl mx-auto bg-[var(--color-bg-secondary)] p-8 rounded-3xl border border-[var(--color-glass-border)]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <form action="https://formspree.io/f/xdojzpyz" method="POST" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input type="text" name="Name" placeholder="Name" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FD9000] focus:ring-1 focus:ring-[#FD9000] transition-colors" required />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FD9000] focus:ring-1 focus:ring-[#FD9000] transition-colors" required />
                            </div>
                        </div>
                        <div>
                            <input type="text" name="subject" placeholder="Subject" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FD9000] focus:ring-1 focus:ring-[#FD9000] transition-colors" required />
                        </div>
                        <div>
                            <textarea name="content" rows={5} placeholder="Message" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FD9000] focus:ring-1 focus:ring-[#FD9000] transition-colors" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="px-10 py-3 bg-[#FD9000] text-black font-bold rounded-lg hover:bg-[#FF5E00] hover:shadow-[0_0_20px_rgba(253,144,0,0.5)] transition-all transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
