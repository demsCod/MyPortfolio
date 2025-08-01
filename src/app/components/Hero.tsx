"use client";
import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import { WordPullUp } from "@/components/ui/word-pull-up";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
// import Image from "next/image";

export const Hero = () => {
  const { t } = useLanguage();
  const resumeFile = "cv-mohamed-fr.pdf";

  return (
    <div className="relative flex justify-center items-center overflow-hidden mt-20 pt-20 pb-10 w-full">
      {/* Gradient Background Effects - Inversé pour que le bas soit bg-background */}
      <div className="absolute inset-0 pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h3>
              <WordPullUp
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-poppins font-bold mb-4"
                words={t("heroTitle")}
              />
            </h3>

            <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-poppins font-bold mb-6 text-primary-foreground">
              {t("heroSubtitle")}
              {""}
              <span className="text-foreground">{t("heroOpportunities")}</span>
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              {/* Bouton Contact avec lien d'ancrage */}
              <Link
                href="#contact"
                className="inline-flex items-center bg-primary text-white px-4 py-2 md:px-6 hover:ring-2 ring-ring md:py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-primary/90 border-2 border-border hover:shadow-lg hover:shadow-primary/20"
              >
                {t("contactMe")}
                <ArrowRightIcon className="inline-block ml-2" />
              </Link>

              {/* Bouton Resume avec téléchargement */}
              <a
                href={`/resume/${resumeFile}`}
                download={`Mohamed_Dembele_Resume.pdf`}
                className="inline-flex items-center bg-background px-4 py-2 md:px-6 md:py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:ring-2 ring-ring hover:bg-card/90 border-2 border-border hover:shadow-lg"
              >
                {t("myResume")}
                <DownloadIcon className="inline-block ml-2" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-md"></div>
              <Image
                src="/images/mdembele-about.png"
                alt="Mohamed Dembele"
                width={300}
                height={300}
                className="relative rounded-full object-cover shadow-lg
                w-48 h-48
                sm:w-56 sm:h-56
                md:w-64 md:h-64
                lg:w-72 lg:h-72"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
