import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";
//import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GridBackground } from "@/components/ui/grid-background";

export default function Home() {
  return (
    <main className="bg-background min-h-screen max-w-4xl">
      <GridBackground className="fixed inset-0 z-0">
        {/* Le contenu du background reste vide car c'est juste pour l'effet */}
      </GridBackground>

      <div className="relative z-10">
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
      </div>
    </main>
  );
}
