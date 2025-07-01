"use client"
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
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        // Déterminer le thème initial
        const initialDarkMode = savedTheme 
            ? savedTheme === "dark" 
            : prefersDark;
            
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
        setLanguage(language === 'en' ? 'fr' : 'en');
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/95">
            <Section className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 border-b border-border">
                <p className="text-xl sm:text-2xl font-montserrat font-bold">
                    MOHAMED
                </p>
                <div className="flex items-center gap-3 sm:gap-6">
                    {/* Language Toggle */}
                    <button 
                        aria-label="Switch language" 
                        className="focus:outline-none hover:text-primary transition-colors duration-200"
                        onClick={toggleLanguage}
                    >
                        <svg className="w-6 h-6 sm:w-8 sm:h-6" viewBox="0 0 24 24" fill="none">
                            <text x="2" y="17" fontSize="15" fontFamily="Montserrat" fill="currentColor">
                                {t('language')}
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
                            <SunIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                            <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                    </button>
                    
                    {/* Menu Button */}
                    <button 
                        aria-label="Open menu" 
                        className="p-1 focus:outline-none hover:text-primary transition-colors duration-200"
                    >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="17" x2="20" y2="17" />
                        </svg>
                    </button>
                </div>
            </Section>
        </header>
    );
}