export const About = () => {

    return (
        <div className="h-screen flex  px-60 ml-10  max-w-1/2 flex-col ">
            <div className="h-1/2  items-center justify-center mt-40">
                <h1 className="font-poppins font-bold mt-20 mb-10 text-7xl">
                    About Me
                </h1>
                <div className="flex flex-row">
                    <p className="font-poppins w-1/2 text-xl">
                        I’m a passionate developer currently enrolled at 42 Paris, where I focus on system programming, algorithms, and software architecture through a hands-on, project-based curriculum. My journey started in sports science, which taught me the value of teamwork, discipline, and designing programs with the end user in mind.

                        I enjoy tackling real-world challenges, whether it’s building a lightweight mobile coaching app in React Native or developing a custom UNIX shell in C. I thrive in fast-paced environments and love working on projects with meaningful impact. My experience includes participating in hackathons like Mistral AI x Doctolib, where I combined AI, databases, and clean UI to deliver a working MVP in a limited time.

                        Versatile, curious, and driven, I’m looking to join a team where I can both contribute and continue growing in mobile development, backend systems, or generative AI.
                    </p>
                    <img src="https://avatars.githubusercontent.com/u/151725068?v=4" alt="Mohamed Dembele" className="w-4xl h-4xl ml-12  object-cover border-4 border-primary shadow-xl"  
                            />
                </div>
                <button
                    className="mr-20 px-12 py-12 rounded border-2 border-primary font-poppins bg-transparent text-primary font-semibold transition-colors duration-200 hover:bg-primary hover:text-white"
                >
                    View My CV
                </button>
            </div>
        </div>
    )
}