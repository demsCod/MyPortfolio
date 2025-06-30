export const About = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
                    <img 
                        src="https://avatars.githubusercontent.com/u/151725068?v=4" 
                        alt="Mohamed Dembele" 
                        className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 
                        object-cover rounded-xl shadow-lg border-2 border-primary/20"  
                    />
                </div>
                
                {/* Text Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
                    <h1 className="font-montserrat font-bold text-primary-foreground text-3xl sm:text-4xl md:text-5xl mb-4">
                        About me
                        <hr className="border-t-2 border-border rounded-2xl w-full mx-auto my-4" />
                    </h1>
                    <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-8 leading-relaxed">
                       Hey, my name is Mohamed Dembele. I'm a software developer from France, currently studying at 42 Paris. I enjoy building useful tools and love learning new tech. I'm also into hackathons, creative coding, and always looking for ways to grow through real-world projects. 
                    </p>
                </div>
            </div>
        </div>
    );
};
