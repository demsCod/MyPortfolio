import { Section } from "./Section"


const ReadmeCard = () => {
    return (
        <div className="bg-primary p-6 rounded-xl shadow-lg w-full max-w-3xl p-4 ml-10 h-3xl transition-transform duration-300 hover:scale-105">
            <h3 className="font-montserrat text-4xl text-white font-bold mb-2">Readme.md</h3>
                <p className="font-poppins text-3xl text-white mb-4">
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
        <div className="bg-card-foreground border-4 rounded-lg h-xl shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="h-2/3 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover "
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
                <h3 className="text-2xl text-white font-montserrat font-extrabold  ">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-primary font-medium hover:underline"
                >

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
                image="https://media.tenor.com/llSAvv3PxdAAAAAM/pacman-namco.gif"
                link="#"
            />
        </Section>
    )
}





export const Projects = () => {
    return (
        <Section className="h-screen max-h-4xl">
            <div className="flex flex-col items-center justify-center w-md">
                <h2 className="text-8xl font-montserrat font-extrabold mb-4">Projects</h2>
             
                {/* Add your project components here */}
            </div>
            <div className="flex flex-row  w-full h-full">
                <ProjectsCards />
                <ReadmeCard />
            </div>
        </Section>
    )
}