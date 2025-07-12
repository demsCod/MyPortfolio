"use client"
import { Section } from "./Section";
import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
// import Image from "next/image";

export const Hero = () => {
    const { t } = useLanguage();
    const resumeFile = "cv-mohamed-fr.pdf" ;
    
    return (
        <Section className="relative flex flex-col-reverse justify-center items-center min-h-screen xl:max-h-3.5 md:flex-row md:justify-between md:items-center md:px-8 lg:px-12 xl:px-16 2xl:px-24 overflow-hidden">
            {/* Gradient Background Effects - Inversé pour que le bas soit bg-background */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-primary/15 pointer-events-none"></div>
            
            {/* Points lumineux repositionnés */}
            <div className="absolute left-[-20%] top-[5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(var(--primary),0.2),rgba(255,255,255,0))] blur-xl pointer-events-none"></div>
            <div className="absolute right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(var(--primary),0.15),rgba(255,255,255,0))] blur-xl pointer-events-none"></div>
            
            {/* Transition douce vers le bas */}
            <div className="absolute left-0 bottom-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
            
            {/* Content */}
            <div className="w-full text-center mt-8 mb-12 md:text-left md:w-1/2 md:mt-0 md:mb-0 md:pr-4 lg:pr-8 xl:pr-12 relative z-10">
                <h3 className="text-3xl text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-montserrat font-extrabold mb-2 md:mb-3 lg:mb-4">
                    {t('heroTitle')}
                </h3>
                <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-poppins font-semibold mb-4 md:mb-6 text-primary-foreground">
                    {t('heroSubtitle')}{""}<span className="text-foreground">{t('heroOpportunities')}</span>
                </h2>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    {/* Bouton Contact avec lien d'ancrage */}
                    <Link 
                        href="#contact" 
                        className="inline-flex items-center bg-primary text-white px-3 py-2 md:px-4 hover:ring-2 ring-ring md:py-3 lg:px-5 lg:py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:bg-primary/90 border-2 border-border hover:shadow-lg hover:shadow-primary/20"
                    >
                        {t('contactMe')}
                        <ArrowRightIcon className="inline-block ml-2" />
                    </Link>
                    
                    {/* Bouton Resume avec téléchargement */}
                    <a 
                        href={`/resume/${resumeFile}`}
                        download={`Mohamed_Dembele_Resume.pdf`}
                        className="inline-flex items-center bg-background px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3 rounded-lg font-poppins font-semibold transition-all duration-200 hover:ring-2 ring-ring hover:bg-card/90 border-2 border-border hover:shadow-lg"
                    >
                        {t('myResume')}
                        <DownloadIcon className="inline-block ml-2" />
                    </a>
                </div>
                
                <div className="hidden font-poppins md:flex items-center gap-2 mt-8 text-sm text-foreground/70">
                    <span className="w-10 h-0.5 bg-primary/50"></span>
                    <span>{t('scrollDown')}</span>
                </div>
            </div>
            
            {/* <div className="w-full flex justify-center md:w-1/2 md:justify-end relative z-10">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-md"></div>
                    <Image
                        src="/images/mdembele.png"
                        alt="Mohamed Dembele"
                        width={384}
                        height={384}
                        className="relative w-60 h-60 rounded-xl object-cover shadow-lg
                            sm:w-64 sm:h-64
                            md:w-72 md:h-72
                            lg:w-80 lg:h-80
                            xl:w-96 xl:h-96
                            2xl:w-[500px] 2xl:h-[500px]"
                    />
                </div>
            </div> */}
        </Section>
    );
}