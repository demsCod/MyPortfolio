"use client";
import { Section } from "./Section";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TranslationKey } from "@/lib/i18n/translations";
import React from "react";

// Interface pour les données de compétence
interface Skill {
    name: string;
    icon: React.ReactElement;
    descriptionKey: TranslationKey;
}

export const Skills = () => {
    // Données des compétences
    const { t } = useLanguage();
    const skills: Skill[] = [
        {
            name: "React",
            icon: (
                <div className="w-full h-full relative">
                    <Image 
                        src="/images/react.svg"
                        alt="React"
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            ),
            descriptionKey: "React"
        },
        {
            name: "Tailwind CSS",
            icon: (
                <div className="w-full h-full relative">
                    <Image 
                        src="/images/tailwindcss-icon.svg"
                        alt="Tailwind CSS"
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            ),
            descriptionKey: "TailwindCSS"
        },
        {
            name: "C++",
            icon: (
                <div className="w-full h-full relative">
                    <Image 
                        src="/images/c-plusplus.svg"
                        alt="C++"
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            ),
            descriptionKey: "Cpp"
        },
        {
            name: "Expo",
            icon: (
                <div className="w-full h-full relative">
                    <Image 
                        src="/images/expo-icon.svg"
                        alt="Expo"
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            ),
            descriptionKey: "Expo"
        },
        {
            name: "TypeScript",
            icon: (
                <div className="w-full h-full relative">
                    <Image 
                        src="/images/typescript-icon.svg"
                        alt="TypeScript"
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            ),
            descriptionKey: "TypeScript"
        },
        {
            name: "Docker",
            icon: (
                <div className="w-full h-full relative">
                    <Image
                        src="/images/docker-icon.svg"
                        alt="Docker"
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            ),
            descriptionKey: "Docker"
        }
    ];

    return (
        <Section className="min-h-screen w-full flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16">
            <div className="max-w-7xl w-full flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat text-primary-foreground font-bold mb-4 text-center">
                   {t('skillsTitle')}
                </h2>
                <p className="text-center font-poppins text-foreground/80 text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto">
                    {t('skillsSubtitle')}
                </p>
                
                {/* Grid for skill cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-card rounded-xl p-6 border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/30 flex flex-col"
                        >
                            <div className="flex items-center mb-4">
                                {/* Icon */}
                                <div className="w-10 h-10 mr-4 text-primary">
                                    {skill.icon}
                                </div>
                                
                                {/* Skill name */}
                                <h3 className="text-xl sm:text-2xl font-semibold font-montserrat">
                                    {skill.name}
                                </h3>
                            </div>
                            
                            {/* Description */}
                            <p className="font-poppins text-foreground/70 mb-4 text-sm sm:text-base flex-grow">
                                {t(skill.descriptionKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};