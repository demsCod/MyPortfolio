import { Section } from "./Section";

export const About = () => {
    return (
        <Section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20">
            <div className=" w-5/6 flex flex-col items-center gap-8">
                {/* Titre principal */}
                <div className="text-center mb-6 md:mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold mb-4 text-primary-foreground">
                        About Me
                    </h1>
                    <div className="relative">
                        <hr className="border-t-2 border-4 border-border w-24 md:w-32 mx-auto" />
                    </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-16">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end xl:justify-start order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-md"></div>
                            <img 
                                src="https://avatars.githubusercontent.com/u/151725068?v=4" 
                                alt="Mohamed Dembele" 
                                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 
                                object-cover rounded-xl shadow-lg border-2 border-primary/20"  
                            />
                        </div>
                    </div>
                    
                    {/* Text Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
                        <h2 className="font-montserrat font-bold text-primary-foreground text-3xl sm:text-4xl md:text-5xl mb-4">
                            Mohamed Dembele
                            <hr className="border-t-2 border-border rounded-2xl w-full mx-auto my-4" />
                        </h2>
                        <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl/8 mb-8 leading-relaxed">
                            I'm a <span className="text-primary-foreground font-medium">software developer</span> from France, currently studying at <span className="text-primary-foreground font-medium">42 Paris</span>. I enjoy building <span className="text-primary-foreground font-medium">useful tools</span> that solve real problems and improve everyday workflows. I'm particularly interested in <span className="text-primary-foreground font-medium">mobile app development</span> and love creating <span className="text-primary-foreground font-medium">intuitive, user-focused experiences</span> for iOS and Android. 
                            
                            <br/><br/>
                            
                            Passionate about technology, I constantly explore <span className="text-primary-foreground font-medium">new frameworks, languages, and development paradigms</span> to sharpen my skills. I actively participate in <span className="text-primary-foreground font-medium">hackathons</span>, where I thrive under pressure and collaborate on innovative ideas.
                            
                            <br/><br/>
                            
                            Above all, I'm driven by <span className="text-primary-foreground font-medium">hands-on learning</span> and always looking for opportunities to grow through <span className="text-primary-foreground font-medium">challenging, real-world projects</span>.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};