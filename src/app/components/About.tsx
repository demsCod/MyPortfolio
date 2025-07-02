"use client"
import { Section } from "./Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export const About = () => {
    const { t } = useLanguage();
    
    // Diviser la description pour pouvoir mettre en surbrillance certains mots
    const aboutDescription = t('aboutDescription').split('\n\n');
    
    // Fonction pour mettre en surbrillance des mots clés
    const highlightKeywords = (text: string) => {
        const keywords = [
            'software developer', 'développeur logiciel',
            '42 Paris',
            'useful tools', 'outils utiles',
            'mobile app development', 'développement d\'applications mobiles',
            'intuitive, user-focused experiences', 'expériences intuitives et centrées sur l\'utilisateur',
            'new frameworks', 'nouveaux frameworks',
            'languages', 'langages',
            'development paradigms', 'paradigmes de développement',
            'hackathons',
            'hands-on learning', 'apprentissage pratique',
            'challenging, real-world projects', 'projets concrets et stimulants'
        ];
        
        let result = text;
        keywords.forEach(keyword => {
            // Éviter de remplacer des mots déjà dans un span
            const regex = new RegExp(`(?<!<span[^>]*>)${keyword}(?![^<]*</span>)`, 'gi');
            result = result.replace(regex, `<span class="text-primary-foreground font-medium">${keyword}</span>`);
        });
        
        return result;
    };

    return (
        <Section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 md:py-20">
            <div className=" w-5/6 flex flex-col items-center gap-8">
                {/* Titre principal */}
                <div className="text-center mb-6 md:mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold mb-4 text-primary-foreground">
                        {t('aboutTitle')}
                    </h1>
                    <div className="relative">
                        <hr className="border-t-2 border-4 border-border w-24 md:w-32 mx-auto" />
                    </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-16">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end xl:justify-start order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-md"></div>
                            <Image
                                src="/images/mdembele-about.png" 
                                alt="Mohamed Dembele" 
                                width={450}
                                height={450}
                                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] 
                                object-cover rounded-xl shadow-lg border-2 border-primary/20"  
                            />
                        </div>
                    </div>
                    
                    {/* Text Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
                        <h2 className="font-montserrat font-bold text-primary-foreground text-3xl sm:text-4xl md:text-5xl mb-4">
                            Mohamed Dembele
                            <hr className="border-t-2 border-border rounded-2xl w-full mx-auto my-4" />
                        </h2>
                        <div className="font-poppins text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl/8 mb-8 leading-relaxed">
                            {aboutDescription.map((paragraph, index) => (
                                <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: highlightKeywords(paragraph) }}></p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};