export const About = () => {

    return (
        <div className="h-screen max-w-5/6 flex  px-10  max-w-5/6 flex-col ">
            <div className="h-full items-center justify-center ">
                <img src="/images/mdembele.png" alt="Mohamed Dembele" className="w-full h-1/2  mt-5 object-cover rounded-xl  border-primary "  
                        />
                <h1 className="font-montserrat font-bold mt-5 mb-5 text-3xl">
                    ABOUT
                </h1>
                <hr className="border-t-2 border-primary rounded-2xl w-full mx-auto my-4" />
                <div className="flex flex-row">
                    <p className="font-poppins w-full text-lg">
                       Hey, my name is Mohamed Dembele. I’m a software developer from France, currently studying at 42 Paris. I enjoy building useful tools and love learning new tech. I’m also into hackathons, creative coding, and always looking for ways to grow through real-world projects. 
                    </p>
                </div>
                <button
                    className=" mt-10 border-primary font-poppins bg-transparent text-primary font-semibold transition-colors duration-200 hover:text-accent hover:underline"
                >
                    View My resume
                </button>
            </div>
        </div>
    )
}