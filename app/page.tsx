import FloatingNav from "./components/FloatingNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Hobbies from "./components/Hobbies";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-20 overflow-hidden text-[var(--foreground)]">
      <FloatingNav />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Volunteer />
      <Certificates />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}
