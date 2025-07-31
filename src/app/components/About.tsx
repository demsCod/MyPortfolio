"use client";
import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export const About = () => {
  const { t } = useLanguage();

  // Diviser la description pour pouvoir mettre en surbrillance certains mots
  const aboutDescription = t("aboutDescription").split("\n\n");

  // Fonction pour mettre en surbrillance des mots clés
  const highlightKeywords = (text: string) => {
    const keywords = [
      "software developer",
      "développeur logiciel",
      "42 Paris",
      "useful tools",
      "outils utiles",
      "mobile app development",
      "développement d'applications mobiles",
      "intuitive, user-focused experiences",
      "expériences intuitives et centrées sur l'utilisateur",
      "new frameworks",
      "nouveaux frameworks",
      "languages",
      "langages",
      "development paradigms",
      "paradigmes de développement",
      "hackathons",
      "hands-on learning",
      "apprentissage pratique",
      "challenging, real-world projects",
      "projets concrets et stimulants",
    ];

    let result = text;
    keywords.forEach((keyword) => {
      // Éviter de remplacer des mots déjà dans un span
      const regex = new RegExp(
        `(?<!<span[^>]*>)${keyword}(?![^<]*</span>)`,
        "gi"
      );
      result = result.replace(
        regex,
        `<span class=" font-medium">${keyword}</span>`
      );
    });

    return result;
  };

  return (
    <Section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
      <div className="w-full max-w-7xl flex flex-col items-center gap-6 md:gap-8">
        {/* Titre principal */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold text-primary-foreground">
            {t("aboutTitle")}
          </h1>
        </div>

        <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-8 xl:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end xl:justify-start order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-md"></div>
              <Image
                loading="lazy"
                fetchPriority="low"
                priority={false}
                src="/images/mdembele-about.png"
                alt="Mohamed Dembele"
                width={450}
                height={450}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-xl shadow-lg border-2 border-primary/20"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
            <h2 className="font-montserrat font-bold text-primary-foreground/80 text-2xl sm:text-3xl md:text-4xl mb-3">
              Mohamed Dembele
              <hr className="border-t-2 border-border rounded-2xl w-full mx-auto my-3" />
            </h2>
            <div className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed">
              {aboutDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: highlightKeywords(paragraph),
                  }}
                ></p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
