import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";
//import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen max-w-4xl">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_2px)] bg-[size:24px_24px] pointer-events-none"></div>
      <Header />
      <div className="flex flex-col w-full">
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
        <Section id="footer">
          <Footer />
        </Section>
      </div>
    </main>
  );
}
