import { Section } from "./Section"


const ReadmeCard = () => {
    return (
        <div className="bg-background border-4 p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-4xl overflow-y-auto">
            <h3 className="text-2xl font-semibold mb-2">Readme.md</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis consectetur dignissimos voluptas minus maxime libero ea, nobis in iure, rerum odio deleniti. Repellendus totam et dicta repellat numquam deleniti aliquam?
            </p>
            <a href="#" className="text-primary hover:underline">
            </a>
        </div>
    )
}


const ProjectsCards = () => {
    return (
        <Section className=" w-1/2 max-w-1/2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            {/* Example project cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should highlight the main features and technologies used.
                </p>
                <a href="#" className="text-primary hover:underline">
                    View Project
                </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should highlight the main features and technologies used.
                </p>
                <a href="#" className="text-primary hover:underline">
                    View Project
                </a>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should highlight the main features and technologies used.
                </p>
                <a href="#" className="text-primary hover:underline">
                    View Project
                </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should highlight the main features and technologies used.
                </p>
                <a href="#" className="text-primary hover:underline">
                    View Project
                </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should highlight the main features and technologies used.
                </p>
                <a href="#" className="text-primary hover:underline">
                    View Project
                </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should highlight the main features and technologies used.
                </p>
                <a href="#" className="text-primary hover:underline">
                    View Project
                </a>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should highlight the main features and technologies used.
                </p>
                <a href="#" className="text-primary hover:underline">
                    View Project
                </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-700 mb-4">
                    A brief description of the project goes here. It should highlight the main features and technologies used.
                </p>
                <a href="#" className="text-primary hover:underline">
                    View Project
                </a>
            </div>
        </Section>
    )
}





export const Projects = () => {
    return (
        <Section className="h-screen max-h-4xl">
            <div className="flex flex-col items-center justify-center w-md">
                <h2 className="text-5xl font-montserrat font-extrabold mb-4">My Projects</h2>
                <p className="text-xl font-poppins font-light mb-6 text-center">
                    Here are some of the projects I've worked on.
                </p>
                {/* Add your project components here */}
            </div>
        <div className="flex flex-row  w-full h-full">
            <ProjectsCards />
            <ReadmeCard />
        </div>
        </Section>
    )
}