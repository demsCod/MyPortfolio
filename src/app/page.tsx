import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Section } from "./components/Section";
import {Skills} from "./components/Skills";
import { About } from "./components/About";
import {Contact} from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollIndicator } from "./components/ScrollIndicator";

export default function Home() {
  
  return (
    <main className="relative min-h-screen bg-background">
      
        <Header />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-primary/10 pointer-events-none"></div>
            <div className="absolute left-0 top-0 w-full h-40 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="h-5/6 scroll-smooth relative z-10">
          <Section id="hero" className="snap-start">
            <Hero />
          </Section>
          <Section id="projects" className="snap-start">
            <Projects />
          </Section>
          <Section id="about" className="snap-start">
            <About/>
          </Section>
          <Section id="skills" className="snap-start">
            <Skills />
          </Section>
          <Section id="contact" className="snap-start">
            <Contact />
          </Section>
          <Section id="footer" className="snap-start">
            <Footer />
          </Section>
        </div>
    </main>
  );
}