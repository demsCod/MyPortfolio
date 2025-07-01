"use client"
import { Section } from "./Section"
// Removed import of Parameters, use built-in TypeScript Parameters type
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";


type CardComponentsProps = {
    title: string;
    descriptionKey?: Parameters<ReturnType<typeof useLanguage>['t']>[0];
    image: string;
    link: string;
};

const CardComponents: React.FC<CardComponentsProps> = ({ title, image, link, descriptionKey }) => {
    const { t } = useLanguage();
    const viewProject = t('viewProject');

    const description = descriptionKey ? t(descriptionKey) : '';

    return (
        <div className="bg-card backdrop-blur-sm rounded-lg shadow-xl flex flex-col border border-primary/20 overflow-hidden transition-all duration-300 hover:scale-103 hover:ring-2 ring-ring hover:shadow-primary/20 hover:shadow-lg xl:min-h-fit">
            <div className="h-48 sm:h-40 md:h-48 lg:h-56 w-full overflow-hidden relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={false}
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
                    className="mt-auto font-poppins text-primary font-medium hover:text-primary-foreground flex items-center gap-2 transition-colors duration-200"
                >
                    <span>{viewProject}</span>
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


    // Import the type for translation keys

    type TranslationKey = Parameters<ReturnType<typeof useLanguage>['t']>[0];

    const projects: {
        id: number;
        title: string;
        descriptionKey: TranslationKey;
        image: string;
        link: string;
    }[] = [
        {
            id: 1,
            title: "Minishell",
            descriptionKey: 'projectMinishell',
            image: "https://github.com/iibabyy/minishell/blob/main/minishell.gif?raw=true",
            link: "https://github.com/iibabyy/minishell"
        },
        {
            id: 2,
            title: "Transcendence",
            descriptionKey: 'projectTranscendence',
            image: "https://i.gifer.com/QgxJ.gif",
            link: "https://github.com/42-alliance/transcendence"
        },
        {
            id: 3,
            title: "So_long",
            descriptionKey: 'projectSoLong',
            image: "https://github.com/demsCod/so_long/blob/main/so_long.gif?raw=true",
            link: "https://github.com/demsCod/so_long"
        },
        {
            id: 4,
            title: "CUB_3D",
            descriptionKey: 'projectCub3D',
            image: "https://github.com/demsCod/cub3D/blob/main/cub_3d.gif?raw=true",
            link: "https://github.com/demsCod/cub3D"
        }
    ];
     return (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8">
            {projects.map(project => (
                <CardComponents
                    key={project.id}
                    title={project.title}
                    descriptionKey={project.descriptionKey}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>
    );
}

export const Projects = () => {
    const { t } = useLanguage();
    return (
        <Section className="relative min-h-screen w-full flex flex-col items-center justify-start py-16 md:py-20 lg:py-24">
            {/* Gradient Background Effects */}
           
            
            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
                <h1 className="font-montserrat text-primary-foreground text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                     {t('projectsTitle')}
                </h1>
                <p className="font-poppins text-foreground/80 text-lg md:text-xl mb-8 md:mb-12 text-center max-w-2xl">
                    {t('projectsSubtitle')}
                </p>
                <div className="relative">
                    <hr className="border-t-2 border-border w-24 md:w-32 mx-auto mb-10 md:mb-14" />
                </div>
                
                <ProjectsCards />
            </div>                    
        </Section>
    )
}