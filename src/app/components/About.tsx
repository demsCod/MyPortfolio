export const About = () => {

    return (
        <div className="h-screen max-w-5/6 lg:max-w-full flex  px-10  max-w-5/6 flex-col lg:flex-row  lg:px-20 lg:py-10 text-primary">
            <div className="h-full items-center justify-center xl:flex xl:flex-row-reverse ">
                <img src="/images/mdembele.png" alt="Mohamed Dembele" className="w-full h-1/3 md:h-3/4   lg:w-1/2 mt-5 xl:mt-0 object-cover rounded-xl  border-primary "  
                        />
                <div className="flex flex-col w-1/2">
                    <h1 className="font-montserrat font-bold mt-5 mb-5 text-3xl">
                        ABOUT
                        <hr className="border-t-2 border-primary rounded-2xl w-full mx-auto my-4" />
                    </h1>
                    <p className="font-poppins w-full text-lg xl:text-2xl">
                       Hey, my name is Mohamed Dembele. I’m a software developer from France, currently studying at 42 Paris. I enjoy building useful tools and love learning new tech. I’m also into hackathons, creative coding, and always looking for ways to grow through real-world projects. 
                    </p>
                    <button
                        className=" mt-10 xl:mr-auto xl:text-xl border-primary font-poppins bg-transparent text-primary font-semibold transition-colors duration-200 hover:text-blue-600 hover:underline"
                    >
                        View My resume
                    </button>
                </div>
            </div>
        </div>
    )
}