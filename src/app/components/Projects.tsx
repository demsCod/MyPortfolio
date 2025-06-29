"use client"
import { Section } from "./Section"
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
// Composant ReadmeCard amélioré avec chargement asynchrone correct
const ReadmeCard = () => {
    const [markdownContent, setMarkdownContent] = useState<string>('Loading README...');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/demsCod/MyPortfolio/refs/heads/main/README.md')
            .then(response => response.text())
            .then(data => {
                setMarkdownContent(data);
            })
            .catch(error => {
                console.error('Error fetching README:', error);
                setMarkdownContent('Failed to load README');
            });
    }, []);

    return (
        <div className="bg-primary rounded-xl shadow-lg w-full max-w-3xl p-4 md:p-6 lg:p-8 h-[300px] md:h-[500px] lg:h-[600px] overflow-auto transition-transform duration-300 hover:scale-102">
            <h3 className="font-montserrat text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4">README.md</h3>
            <div className="prose prose-invert max-w-none">
                <ReactMarkdown>
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </div>
    )
}

type CardComponentsProps = {
    title: string;
    image: string;
    link: string;
    description?: string;
};

const CardComponents: React.FC<CardComponentsProps> = ({ title, image, link, description }) => {
    return (
        <div className="bg-card rounded-lg shadow-xl flex flex-col border border-primary/20 overflow-hidden transition-all duration-300 hover:scale-103 hover:ring-2 ring-ring hover:shadow-primary/20 hover:shadow-lg">
            <div className="h-48 sm:h-40 md:h-48 lg:h-56 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4 md:p-5">
                <div>
                    <h3 className="text-xl md:text-2xl font-montserrat font-bold mb-2">{title}</h3>
                    {description && (
                        <p className="text-lg font-poppins text-foreground/80 line-clamp-2 mb-3">{description}</p>
                    )}
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-primary font-medium hover:text-primary-foreground flex items-center gap-2 transition-colors duration-200"
                >
                    <span>View Project</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
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
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8">
            <CardComponents
                key={1}
                title="Minishell"
                description="A simple shell implementation with basic command execution and piping"
                image="https://media.geeksforgeeks.org/wp-content/uploads/20210825224545/1.gif"
                link="#"
            />
            <CardComponents
                key={2}
                title="Transcendence"
                description="Real-time multiplayer Pong game with user authentication and chat"
                image="https://i.gifer.com/QgxJ.gif"
                link="#"
            />
            <CardComponents
                key={3}
                title="So_long"
                description="2D game where player collects items and reaches the exit"
                image="https://media.tenor.com/llSAvv3PxdAAAAAM/pacman-namco.gif"
                link="#"
            />
            <CardComponents
                key={4}
                title="CUB_3D"
                description="3D raycasting game inspired by Wolfenstein 3D"
                image="https://user-images.githubusercontent.com/55356071/112175931-f34c9f00-8bf7-11eb-8276-23382485172a.gif"
                link="#"
            />
        </div>
    )
}

export const Projects = () => {
    return (
        <Section className="min-h-screen w-full flex flex-col items-center justify-start py-16 md:py-20 lg:py-24">
            <div className="w-full max-w-7xl flex flex-col items-center">
                <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                    My Projects
                </h1>
                <p className="font-poppins text-foreground/80 text-lg md:text-xl mb-8 md:mb-12 text-center max-w-2xl">
                    Here are some of my recent projects I've worked on
                </p>
                <hr className="border-t-2 border-border w-24 md:w-32 mx-auto mb-10 md:mb-14" />
                
                <ProjectsCards />
            </div>                    
        </Section>
    )
}