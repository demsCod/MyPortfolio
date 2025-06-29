import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section className="flex flex-col-reverse justify-center items-center min-h-screen md:flex-row md:justify-between md:items-center md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <div className="w-full text-center mt-8 mb-12 md:text-left md:w-1/2 md:mt-0 md:mb-0 md:pr-4 lg:pr-8 xl:pr-12">
                <h3 className="text-3xl text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-montserrat font-extrabold mb-2 md:mb-3 lg:mb-4">
                    Mohamed Dembele 
                </h3>
                <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-poppins font-semibold mb-4 md:mb-6 text-primary-foreground">
                    Software Developer{""}<span className="text-foreground">, open to new opportunities. </span>
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <button className="bg-primary px-3 py-2 md:px-4 hover:ring-2 ring-ring md:py-3 lg:px-5 lg:py-3 rounded-lg font-poppins font-semibold transition-colors duration-200 hover:bg-primary/90">
                        Contact
                    </button>
                    <button className="bg-card px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3 rounded-lg font-poppins font-semibold transition-colors duration-200 hover:bg-primary/90">
                        More about me
                    </button>
                </div>
            </div>
            
            <div className="w-full flex justify-center md:w-1/2 md:justify-end">
                <img
                    src="/images/mdembele.png"
                    alt="Mohamed Dembele"
                    className="w-60 h-60 rounded-xl shadow-lg object-cover
                        sm:w-64 sm:h-64
                        md:w-72 md:h-72
                        lg:w-80 lg:h-80
                        xl:w-96 xl:h-96
                        2xl:w-[500px] 2xl:h-[500px]"
                />
            </div>
        </Section>
    );
}