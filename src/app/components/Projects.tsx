"use client";
import { Section } from "./Section";
// Removed import of Parameters, use built-in TypeScript Parameters type
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

type CardComponentsProps = {
  title: string;
  descriptionKey?: Parameters<ReturnType<typeof useLanguage>["t"]>[0];
  image: string;
  link: string;
};

const CardComponents: React.FC<CardComponentsProps> = ({
  title,
  image,
  link,
  descriptionKey,
}) => {
  const { t } = useLanguage();
  const viewProject = t("viewProject");

  const description = descriptionKey ? t(descriptionKey) : "";

  return (
    <div className="bg-card backdrop-blur-sm rounded-lg shadow-xl flex flex-col border border-primary/20 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:ring-2 ring-ring hover:shadow-primary/20 hover:shadow-lg h-full">
      <div className="w-full aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-3 sm:p-4">
        <div>
          <h3 className="text-lg sm:text-xl  font-poppins font-bold mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-base sm:text-lg font-poppins text-foreground/80 line-clamp-2 mb-3">
              {description}
            </p>
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
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectsCards = () => {
  // Import the type for translation keys

  type TranslationKey = Parameters<ReturnType<typeof useLanguage>["t"]>[0];

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
      descriptionKey: "projectMinishell",
      image: "/github_render/minishell.gif",
      link: "https://github.com/iibabyy/minishell",
    },
    {
      id: 2,
      title: "Transcendence",
      descriptionKey: "projectTranscendence",
      image: "/github_render/transcendence.gif",
      link: "https://github.com/42-alliance/transcendence",
    },
    {
      id: 3,
      title: "So_long",
      descriptionKey: "projectSoLong",
      image: "/github_render/so_long.gif",
      link: "https://github.com/demsCod/so_long",
    },
    {
      id: 4,
      title: "CUB_3D",
      descriptionKey: "projectCub3D",
      image: "/github_render/cub_3d.gif",
      link: "https://github.com/demsCod/cub3D",
    },
  ];
  return (
    <div className="w-full px-4 lg:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 ">
      {projects.map((project) => (
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
};

export const Projects = () => {
  const { t } = useLanguage();
  return (
    <Section className="w-full flex items-center justify-center px-6 lg:px-4 lg:py-12 mt-10">
      {/* Gradient Background Effects */}

      {/* Content */}
      <div className="z-10 w-full flex flex-col ">
        <h1 className="text-xl sm:text-3xl md:text-4xl  font-poppins text-primary-foreground font-bold mb-3 sm:mb-4 text-start">
          {t("projectsTitle")}
        </h1>
        <p className="text-start font-poppins text-foreground/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
          {t("projectsSubtitle")}
        </p>
        <ProjectsCards />
      </div>
    </Section>
  );
};
