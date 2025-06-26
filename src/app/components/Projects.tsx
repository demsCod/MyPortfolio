import { Section } from "./Section"


const ReadmeCard = () => {
    return (
        <div className="bg-background border-4 p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-4xl overflow-y-auto">
            <h3 className="font-montserrat text-4xl font-bold mb-2">Readme.md</h3>
                <p className="font-poppins text-2xl mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis consectetur dignissimos voluptas minus maxime libero ea, nobis in iure, rerum odio deleniti. Repellendus totam et dicta repellat numquam deleniti aliquam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    . Quisquam, quasi. Doloribus, cumque
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Doloribus, cumque
                </p>
            <a href="#" className="text-primary hover:underline">
            </a>
        </div>
    )
}

type CardComponentsProps = {
    title: string;
    image: string;
    link: string;
};

const CardComponents: React.FC<CardComponentsProps> = ({ title, image, link }) => {
    return (
        <div className="bg---card-foreground border-4 rounded-lg h-96 shadow-lg flex flex-col overflow-hidden">
            <div className="h-2/3 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
                <h3 className="text-2xl text-card-foreground font-poppins font-semibold mb-2 ">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-primary font-medium hover:underline"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

const ProjectsCards = () => {
    return (
        <Section className=" w-1/2 max-w-1/2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6 px-4">
            <CardComponents
                key={1}
                title="Minishell"
                image="https://media.geeksforgeeks.org/wp-content/uploads/20210825224545/1.gif"
                link="#"
            />
            <CardComponents
                key={2}
                title="Transcendence"
                image="https://i.gifer.com/QgxJ.gif"
                link="#"
            />
                <CardComponents
                key={3}
                title="So_long"
                image="https://miro.medium.com/v2/resize:fit:900/1*U6l8-jpVSwjbFPadVJVpjQ.png"
                link="#"
            />
            <CardComponents
                key={4}
                title="Transcendence"
                image="https://miro.medium.com/v2/resize:fit:900/1*U6l8-jpVSwjbFPadVJVpjQ.png"
                link="#"
            />
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