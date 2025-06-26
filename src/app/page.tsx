import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Section } from "./components/Section";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { About } from "./components/About";

export default function Home() {
  return (
    <main>
      <Header />
        <ScrollIndicator />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Section id="hero" className="snap-start">
          <Hero />
        </Section>
        <Section id ="about" className="snap-start">
          <About/>
        </Section>
        <Section id="projects" className="snap-start">
          <Projects />
        </Section>
      </div>
    </main>
  );
}
