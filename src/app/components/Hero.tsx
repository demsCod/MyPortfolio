import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section className="flex flex-row items-center justify-center  min-h-screen">
            <div className="w-5/6 text-center h-72  md:bg-red-400 sm:bg-red-500  xl:bg-transparent  3xl:bg-blue-500">
                <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-montserrat font-extrabold mb-4">
                    Hi, I'm{" "}
                    <span className="text-primary font-extrabold font-poppins">
                        Mohamed Dembele
                    </span>
                </h3>
                <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-poppins  mb-6">
                    A Software Engineer specializing <br className="hidden md:block" />
                     in web development and software solutions.
                </h1>
            </div>
        </Section>
    );
}