"use client";
import { Section } from "./Section";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { TranslationKey } from "@/lib/i18n/translations";
import React from "react";
import { WordPullUp } from "@/components/ui/word-pull-up";

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
      descriptionKey: "React",
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
      descriptionKey: "TailwindCSS",
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
      descriptionKey: "Cpp",
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
      descriptionKey: "Expo",
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
      descriptionKey: "TypeScript",
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
      descriptionKey: "Docker",
    },
  ];

  return (
    <Section className="w-full flex items-center justify-center px-4 lg:px-2 lg:py-12  ">
      <div className=" w-full flex flex-col">
        <WordPullUp
          className="text-xl sm:text-3xl md:text-4xl  font-poppins text-primary-foreground font-bold mb-3 sm:mb-4 text-start"
          words={t("skillsTitle")}
        />
        <p className="text-start font-poppins text-foreground/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
          {t("skillsSubtitle")}
        </p>

        {/* Grid for skill cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-3 sm:p-4 border border-border/50 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 hover:border-primary/30 flex flex-col group"
            >
              <div className="flex items-center flex-col mb-2 sm:mb-3">
                {/* Icon */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 text-primary transition-transform duration-200 group-hover:-translate-y-1">
                  {skill.icon}
                </div>

                {/* Skill name */}
                <h3 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-center font-medium font-poppins">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
