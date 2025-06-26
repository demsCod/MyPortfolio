import Image from "next/image";
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import { Projects } from "./components/Projects";
import { Section } from "./components/Section";
export default function Home() {
  return (
   <main>
    <Header/>
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Section className="snap-start">
        <Hero />
      </Section>
      <Section className="snap-start">
        <Projects />
      </Section>
    </div>
   </main>
  );
}
