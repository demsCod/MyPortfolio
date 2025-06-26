import { Section } from "./Section";

export const Header = () => {
    return (
        <header >
            <Section className="flex items-baseline justify-between px-10 py-5 mb-20">
                <h1 className="text-3xl font-headtitle font-bold  ">
                    Mohamed Dembele</h1>
                <nav>
                    <ul className="flex gap-10 text-4xl font-montserrat font-light">
                        <li>
                        <a href="#about" className="hover:text-primary transition-colors">
                            About
                        </a>
                        </li>
                        <li>
                        <a href="#projects" className="hover:text-primary transition-colors">
                            Projects
                        </a>
                        </li>
                        <li>
                        <a href="#contact" className="hover:text-primary transition-colors">
                            Contact
                        </a>
                        </li>
                    </ul>
                </nav>
            </Section>
        </header>
    );
}