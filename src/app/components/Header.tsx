import { Section } from "./Section";

export const Header = () => {
    return (
        <header >
            <Section className="flex items-baseline justify-between px-10  mb-20">
                    <img src="https://avatars.githubusercontent.com/u/151725068?v=4" alt="Mohamed Dembele" className="w-24 h-24 mt-4  object-cover border-4 border-primary shadow-xl rounded-full" /*style={{borderRadius :"30% 70% 52% 48% / 27% 35% 65% 73% "}}*/ 
                    />
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