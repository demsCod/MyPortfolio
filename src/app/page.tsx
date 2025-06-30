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
    <main>
      <Header />
      <div className="h-5/6  scroll-smooth">
        <Section id="hero" className="snap-start">
          <Hero />
        </Section>
        <Section id="projects" className="snap-start">
          <Projects />
        </Section>
        <Section id ="about" className="snap-start">
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
