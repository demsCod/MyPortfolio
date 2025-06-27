import { Section } from "./Section"
import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

//utiliser les lien raw pour les readme et react-mardown pour le rendering

const ReadmeCard = () => {

    let markdownContent ='';
    fetch('https://raw.githubusercontent.com/demsCod/MyPortfolio/refs/heads/main/README.md')
        .then(response => response.text())
        .then(data => {
            markdownContent = data;
        })
    return (
        <div className="bg-primary rounded-xl shadow-lg w-full max-w-3xl p-4 ml-10 h-[10vh] md:h-[70vh] transition-transform duration-300 hover:scale-105">
            <h3 className="font-montserrat text-4xl text-white font-bold mb-2">Readme.md</h3>
          <ReactMarkdown>
            {markdownContent}
          </ReactMarkdown>
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
        <div className="bg-card-foreground rounded-lg h-64 shadow-xl flex flex-col border-2  overflow-hidden transition-transform duration-300 hover:scale-105 max-w-lg">
            <div className="h-2/3 w-full overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
                <h3 className="text-2xl text-background font-poppins ">{title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-primary font-medium hover:underline flex items-center gap-2"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-white"
                    >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};

const ProjectsCards = () => {
    return (
        // SOLUTION 1: Auto-fit avec largeur minimale - les cartes s'adaptent automatiquement
        <div className="w-5/6  grid grid-cols-1 sm:grid-cols-2  gap-6 p-7">
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
        <Section className="h-screen w-full  justify-center ">
            <div className="flex flex-col mt-10 items-center justify-center ">
                <h1 className="font-poppins text-xl font-bold">My projects</h1>
                <ProjectsCards />
            </div>                    
        </Section>
    )
}