export const About = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
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
                    <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
                        ABOUT
                        <hr className="border-t-2 border-border rounded-2xl w-full mx-auto my-4" />
                    </h1>
                    <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-8 leading-relaxed">
                       Hey, my name is Mohamed Dembele. I'm a software developer from France, currently studying at 42 Paris. I enjoy building useful tools and love learning new tech. I'm also into hackathons, creative coding, and always looking for ways to grow through real-world projects. 
                    </p>
                    <div className="flex justify-start">
                        <button
                            className="font-poppins text-lg sm:text-xl bg-transparent font-semibold transition-all duration-200 
                            hover:text-primary border-b-2 border-transparent hover:border-primary py-1"
                        >
                            View My Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
{/*  <img src="/images/mdembele.png" alt="Mohamed Dembele" className="w-full h-1/3 md:h-3/4   lg:w-1/2 mt-5 xl:mt-0 object-cover rounded-xl  border-primary "  
                        /> */}