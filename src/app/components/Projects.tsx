import { Section } from "./Section"
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

//utiliser les lien raw pour les readme et react-mardown pour le rendering

const ReadmeCard = () => {
    return (
        <div className="bg-primary rounded-xl shadow-lg w-full max-w-3xl p-4 ml-10 h-[10vh] md:h-[70vh] transition-transform duration-300 hover:scale-105">
            <h3 className="font-montserrat text-4xl text-white font-bold mb-2">Readme.md</h3>
            <p className="font-poppins text-3xl text-white mb-4">
              https://raw.githubusercontent.com/demsCod/MyPortfolio/refs/heads/main/README.md
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
        // Réduction de la hauteur de h-96 à h-64
        <div className="bg-card-foreground border-4 rounded-lg h-64 shadow-lg flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 max-w-80">
            <div className="h-2/3 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
                <h3 className="text-2xl text-white font-montserrat font-extrabold">{title}</h3>
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
        // SOLUTION 1: Auto-fit avec largeur minimale - les cartes s'adaptent automatiquement
        <div className="w-1/2 max-w-screen-lg grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 auto-rows-min">
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
            <CardComponents
                key={4}
                title="CUB_3D"
                image="https://user-images.githubusercontent.com/55356071/112175931-f34c9f00-8bf7-11eb-8276-23382485172a.gif"
                link="#"
            />
          
        </div>
    )
}

export const Projects = () => {
    return (
        // Hauteur flexible qui s'adapte au contenu
        <Section className="h-screen ml-80 mt-40 justify-center items-center">
            <div className="flex flex-col items-center justify-center  w-md mb-8">
                </div>
                {/* Flex avec items-start pour éviter l'étirement vertical */}
                <div className="flex flex-row w-full items-start gap-8">
                    <ProjectsCards />
                    <ReadmeCard />
            </div>
        </Section>
    )
}