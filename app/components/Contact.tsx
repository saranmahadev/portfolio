"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xdojzpyz", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
                // Reset success message after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    className="max-w-2xl mx-auto bg-[var(--color-bg-secondary)] p-8 rounded-3xl border border-[var(--color-glass-border)] relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* Success Animation Overlay */}
                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-sm flex flex-col items-center justify-center z-50 rounded-3xl"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                >
                                    <CheckCircle size={80} className="text-[#FD9000] mb-6" />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-3xl font-bold text-white mb-2"
                                >
                                    Message Sent! 🚀
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-gray-400 text-center max-w-md"
                                >
                                    Thank you for reaching out! I'll get back to you as soon as possible.
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input type="text" name="Name" placeholder="Name" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FD9000] focus:ring-1 focus:ring-[#FD9000] transition-colors" required disabled={isSubmitting} />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FD9000] focus:ring-1 focus:ring-[#FD9000] transition-colors" required disabled={isSubmitting} />
                            </div>
                        </div>
                        <div>
                            <input type="text" name="subject" placeholder="Subject" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FD9000] focus:ring-1 focus:ring-[#FD9000] transition-colors" required disabled={isSubmitting} />
                        </div>
                        <div>
                            <textarea name="content" rows={5} placeholder="Message" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FD9000] focus:ring-1 focus:ring-[#FD9000] transition-colors" required disabled={isSubmitting}></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-10 py-3 bg-[#FD9000] text-black font-bold rounded-lg hover:bg-[#FF5E00] hover:shadow-[0_0_20px_rgba(253,144,0,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
