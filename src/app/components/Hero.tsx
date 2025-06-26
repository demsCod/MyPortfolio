import { Section } from "./Section";

export const Hero = () => {
    return (
        <Section className="flex flex-row   justify-center w-md  h-screen">
            <div className="flex-1 text-center mt-40">
                <h3 className="text-9xl font-montserrat font-extrabold mb-4"> Hi, i'm {" "}
                    <span className="text-primary font-extrabold font-poppins">
                    Mohamed
                    </span>
                </h3>
                <h1 className="text-3xl font-poppins font-light mb-6">
                    A Software Engineer specializing
                    in web development and<br />software
                    solutions.
                </h1>
            </div>
            <div className="mr-20 flex-1 flex items-center  justify-center">
                <img src="https://avatars.githubusercontent.com/u/151725068?v=4" alt="Mohamed Dembele" className="w-2xl h-2xl object-cover mb-40 border-8 border-accent shadow-xl" style={{borderRadius :"30% 70% 52% 48% / 27% 35% 65% 73% "}} 
                />
            </div>
        </Section>
    );
}