import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section className="flex flex-row justify-center h-screen">
            <div className=" text-center mt-96">
                <h3 className="text-9xl font-montserrat font-extrabold mb-4"> Hi, I'm {" "}
                    <span className="text-primary font-extrabold font-poppins">
                        Mohamed Dembele, 
                    </span>
                </h3>
                <h1 className="text-4xl font-poppins font-light mb-6">
                    A Software Engineer specializing
                    in web development and<br />software
                    solutions.
                </h1>
            
            </div>
        </Section>
    );
}