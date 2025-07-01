"use client"
import React from 'react'
import { Section } from "./Section";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const Contact = () => {
    const { t } = useLanguage();
    
    return (
        <Section className="flex font-poppins flex-col items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 md:py-20">
            <div className="w-5/6 mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold mb-4 text-primary-foreground">
                        {t('contactTitle')}
                    </h1>
         
                    <p className="text-base sm:text-lg md:text-xl font-poppins mb-8 text-foreground/90 max-w-2xl mx-auto">
                        {t('contactSubtitle')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
                    {/* Form Section */}
                    <form className="w-full lg:w-2/3">
                        <div className="flex flex-col sm:flex-row sm:gap-6 mb-6">
                            {/* Name Field */}
                            <div className="relative w-full mb-6 sm:mb-0 group">
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="font-poppins block w-full py-2.5 px-0 bg-transparent border-0 border-b-2 border-border appearance-none focus:outline-none focus:border-primary peer" 
                                    placeholder=" " 
                                    required 
                                />
                                <label 
                                    htmlFor="name" 
                                    className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {t('name')}
                                </label>
                            </div>

                            {/* Email Field */}
                            <div className="relative w-full group">
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="font-poppins block w-full py-2.5 px-0 bg-transparent border-0 border-b-2 border-border appearance-none focus:outline-none focus:border-primary peer" 
                                    placeholder=" " 
                                    required 
                                />
                                <label 
                                    htmlFor="email" 
                                    className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    {t('email')}
                                </label>
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="relative w-full mb-8 group">
                            <textarea 
                                id="message" 
                                rows={5} 
                                className="font-poppins block w-full py-2.5 px-0 bg-transparent border-0 border-b-2 border-border appearance-none focus:outline-none focus:border-primary peer" 
                                placeholder=" " 
                                required 
                            />
                            <label 
                                htmlFor="message" 
                                className="absolute text-sm text-foreground/70 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                {t('message')}
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="px-6 py-3 bg-transparent border-2 border-border hover:bg-primary text-primary-foreground hover:text-card-foreground rounded-lg font-poppins font-semibold transition-all duration-200 w-full sm:w-auto"
                        >
                            {t('sendMessage')}
                        </button>
                    </form>
                    
                    {/* Social Links Section */}
                    <div className="w-full lg:w-1/3 mt-10 lg:mt-0 ">
                        <div className="bg-card p-6 rounded-xl border font-poppins border-border/50 overflow-x-auto">
                            <h3 className="font-montserrat font-semibold text-xl mb-4 text-center lg:text-left">
                                {t('connectWithMe')}
                            </h3>
                            <p className="text-foreground/80 mb-6 text-center lg:text-left">
                                {t('findMeOn')}
                            </p>
                            
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {/* GitHub */}
                                <a 
                                    href="https://github.com/demsCod" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center px-4 py-2 bg-background/50 hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
                                >
                                    <svg className="w-5 h-5 mr-2 text-foreground group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </a>
                                
                                {/* LinkedIn */}
                                <a 
                                    href="https://linkedin.com/in/mdembele42" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center px-4 py-2 bg-background/50 hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
                                >
                                    <svg className="w-5 h-5 mr-2 text-foreground group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    LinkedIn
                                </a>
                                
                            </div>
                            
                            <div className="mt-8">
                                <p className="text-foreground/80 text-sm text-center lg:text-left">
                                    {t('orEmailDirectly')}
                                </p>
                                <a 
                                    href="mailto:mohamed.pro.dembele@gmail.com" 
                                    className="flex items-center justify-center lg:justify-start mt-2 font-medium text-primary hover:text-primary-foreground transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    mohamed.pro.dembele@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}