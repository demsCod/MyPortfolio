"use client";
import { useState, useEffect } from "react";
import { Section } from "./Section";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Header = () => {
  // État pour suivre le thème actuel
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Par défaut en mode sombre
  const { language, setLanguage, t } = useLanguage();

  // Effet pour initialiser le thème depuis localStorage ou préférence système
  useEffect(() => {
    // Vérifier les préférences stockées dans localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Déterminer le thème initial
    const initialDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDarkMode(initialDarkMode);

    // Appliquer le thème initial
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Mettre à jour la classe pour le document
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Sauvegarder la préférence
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  // Fonction pour changer de langue
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <header className="z-40 px-4 backdrop-blur-md w-full lg:w-2/4 justify-self-center">
      <Section className="flex justify-between items-center py-3 mx-auto w-full">
        <p className="text-lg sm:text-xl font-poppins font-bold">
          MOHAMED DEMBELE
        </p>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Toggle */}
          <button
            aria-label="Switch language"
            className="focus:outline-none hover:text-primary transition-colors duration-200 p-1.5"
            onClick={toggleLanguage}
          >
            <svg
              className="w-5 h-7 sm:w-6 sm:h-8"
              viewBox="0 0 24 24"
              fill="none"
            >
              <text
                x="2"
                y="17"
                fontSize="16"
                fontFamily="Poppins"
                fill="currentColor"
              >
                {t("language")}
              </text>
            </svg>
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            aria-label="Toggle dark/light mode"
            className="p-1.5 rounded-full hover:bg-primary/10 transition-colors duration-200 focus:outline-none"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <SunIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <MoonIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </Section>
    </header>
  );
};
