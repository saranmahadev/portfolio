import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";

const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const destinations = [
    { label: "Blog", href: "https://blog.saranmahadev.in" },
    { label: "Workshops", href: "https://workshop.saranmahadev.in" },
    { label: "Shop", href: "https://shop.saranmahadev.in" },
    { label: "Courses", href: "https://courses.saranmahadev.in" },
    { label: "AI Base", href: "https://ai.saranmahadev.in" },
    { label: "Resume.pdf", href: "/assets/pdfs/resume.pdf" },
];

const socials = [
    { label: "Email", href: "mailto:mail@saranmahadev.in", icon: Mail },
    { label: "LinkedIn", href: "https://linkedin.com/in/saranmahadev", icon: Linkedin },
    { label: "YouTube", href: "http://youtube.com/@saranmahadev", icon: Youtube },
    { label: "GitHub", href: "https://github.com/saranmahadev", icon: Github },
    { label: "Instagram", href: "https://instagram.com/everything.by.dev", icon: Instagram },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
            <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[var(--accent-faint)] blur-[110px]" />

            <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-8 md:pt-20">
                <div className="grid gap-12 lg:grid-cols-[1.6fr_0.65fr_0.8fr] lg:gap-16">
                    <div className="max-w-lg">
                        <p className="font-mono text-xs tracking-[0.28em] text-[var(--primary)]">{"//"} SARAN MAHADEV</p>
                        <h2 className="mt-4 text-4xl font-black leading-none tracking-tight text-[var(--foreground)] md:text-5xl">
                            Building the next <span className="text-[var(--accent)]">intelligent system.</span>
                        </h2>
                        <p className="mt-5 max-w-md text-sm leading-7 text-[var(--foreground-muted)]">
                            Generative AI engineer exploring agentic systems, developer tooling, and applied research.
                        </p>
                        <a
                            href="mailto:mail@saranmahadev.in"
                            className="mt-7 inline-flex items-center gap-2 border-b border-[var(--primary)] pb-1 font-mono text-xs tracking-[0.16em] text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
                        >
                            START A CONVERSATION <ArrowUpRight size={15} />
                        </a>
                    </div>

                    <div>
                        <h3 className="font-mono text-[10px] tracking-[0.24em] text-[var(--text-disabled)]">NAVIGATE</h3>
                        <nav aria-label="Footer navigation" className="mt-5 grid gap-2">
                            {navigation.map((item) => (
                                <a key={item.label} href={item.href} className="w-fit text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]">
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h3 className="font-mono text-[10px] tracking-[0.24em] text-[var(--text-disabled)]">EXPLORE</h3>
                        <div className="mt-5 grid gap-2">
                            {destinations.map((item) => (
                                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex w-fit items-center gap-1.5 text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]">
                                    {item.label}<ArrowUpRight size={13} className="opacity-50 transition group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-6 border-t border-[var(--border-subtle)] pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[10px] tracking-[0.14em] text-[var(--text-disabled)]">© {new Date().getFullYear()} SARAN MAHADEV · BUILT WITH INTENT</p>
                    <div className="flex items-center gap-4">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="text-[var(--text-muted)] transition hover:-translate-y-0.5 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
