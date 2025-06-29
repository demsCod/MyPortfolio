import { Section } from "./Section";

export const Header = () => {
    return (
        <header>
            <Section className="flex justify-between px-10  border-b-2 border-border ">
                <p className="text-2xl font-montserrat mt-9 gap-1 font-bold mb-4">
                    MOHAMED
                </p>
                <div className="flex items-center gap-6 ">
                    {/* Light/Dark Mode Toggle */}
                    <button aria-label="Switch language" className="focus:outline-none">
                    {/* FR/EN icon (simple text for now) */}
                    <svg className="w-8 h-6" viewBox="0 0 24 24" fill="none">
                        <text x="2" y="17" fontSize="15" fontFamily="Montserrat" fill="currentColor">FR</text>
                    </svg>
                    </button>
                    <button aria-label="Toggle light/dark mode" className="focus:outline-none">
                    {/* Sun (light) icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                    </button>
                    {/* Language Switcher */}
                    {/* Menu (Hamburger) */}
                    <button aria-label="Open menu" className="focus:outline-none">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="17" x2="20" y2="17" />
                    </svg>
                    </button>
                </div>
            </Section>
        </header>
    );
}