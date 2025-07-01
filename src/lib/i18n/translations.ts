export const translations = {
  en: {
    // Header
    language: "FR",
    
    // Hero
    heroTitle: "Mohamed Dembele",
    heroSubtitle: "Software Developer",
    heroOpportunities: ", open to new opportunities.",
    contactMe: "contact me",
    myResume: "my resume",
    scrollDown: "Scroll down to see my work",
    
    // Projects
    projectsTitle: "My Projects",
    projectsSubtitle: "Here are some of my recent projects I've worked on",
    viewProject: "View Project",
    
    // About
    aboutTitle: "About Me",
    aboutDescription: "I'm a software developer from France, currently studying at 42 Paris. I enjoy building useful tools that solve real problems and improve everyday workflows. I'm particularly interested in mobile app development and love creating intuitive, user-focused experiences for iOS and Android.\n\nPassionate about technology, I constantly explore new frameworks, languages, and development paradigms to sharpen my skills. I actively participate in hackathons, where I thrive under pressure and collaborate on innovative ideas.\n\nAbove all, I'm driven by hands-on learning and always looking for opportunities to grow through challenging, real-world projects.",
    
    // Skills
    skillsTitle: "My Skills",
    skillsSubtitle: "Here are the technologies and programming languages I specialize in. I'm constantly learning and expanding my skillset.",
    
    // Contact
    contactTitle: "Contact Me",
    contactSubtitle: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    connectWithMe: "Connect With Me",
    findMeOn: "You can also find me on these platforms:",
    orEmailDirectly: "Or send an email directly:",
    
    // Footer
    footerDescription: "Software developer passionate about creating clean, efficient, and user-friendly solutions.",
    quickLinks: "Quick Links",
    home: "Home",
    projects: "Projects",
    about: "About",
    skills: "Skills",
    contact: "Contact",
    connect: "Connect",
    allRightsReserved: "All rights reserved.",
    builtWith: "Built with ❤️ using Next.js and Tailwind CSS",
    backToTop: "Back to top",
    
    // Project descriptions
    projectMinishell: "A simple shell implementation with basic command execution and piping",
    projectTranscendence: "Real-time multiplayer Pong game with user authentication and chat",
    projectSoLong: "2D game where player collects items and reaches the exit",
    projectCub3D: "3D raycasting game inspired by Wolfenstein 3D",

    // Skills descriptions
    React: "Building modern, interactive UIs with React and Next.js",
    TailwindCSS: "Creating responsive and beautiful interfaces with utility classes",
    Cpp: "System programming, algorithms, and performance optimization",
    Expo: "Building cross-platform mobile applications with React Native",
    TypeScript: "Adding type safety and modern features to JavaScript development",
    Docker: "Containerizing applications for consistent development and deployment",
  },
  fr: {
    // Header
    language: "EN",
    
    // Hero
    heroTitle: "Mohamed Dembele",
    heroSubtitle: "Développeur Logiciel",
    heroOpportunities: ", ouvert à de nouvelles opportunités.",
    contactMe: "me contacter",
    myResume: "mon CV",
    scrollDown: "Faites défiler pour voir mes projets",
    
    // Projects
    projectsTitle: "Mes Projets",
    projectsSubtitle: "Voici quelques projets récents sur lesquels j'ai travaillé",
    viewProject: "Voir le projet",
    
    // About
    aboutTitle: "À Propos",
    aboutDescription: "Je suis un développeur logiciel français, actuellement étudiant à 42 Paris. J'aime créer des outils utiles qui résolvent des problèmes concrets et améliorent les flux de travail quotidiens. Je m'intéresse particulièrement au développement d'applications mobiles et j'adore créer des expériences intuitives et centrées sur l'utilisateur pour iOS et Android.\n\nPassionné par la technologie, j'explore constamment de nouveaux frameworks, langages et paradigmes de développement pour perfectionner mes compétences. Je participe activement à des hackathons, où je m'épanouis sous pression et collabore sur des idées innovantes.\n\nPar-dessus tout, je suis motivé par l'apprentissage pratique et je recherche toujours des opportunités de croissance à travers des projets concrets et stimulants.",
    
    // Skills
    skillsTitle: "Mes Compétences",
    skillsSubtitle: "Voici les technologies et langages de programmation dans lesquels je me spécialise. Je suis constamment en train d'apprendre et d'élargir mes compétences.",
    
    // Contact
    contactTitle: "Me Contacter",
    contactSubtitle: "Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter !",
    name: "Nom",
    email: "Email",
    message: "Message",
    sendMessage: "Envoyer",
    connectWithMe: "Connectez-vous avec moi",
    findMeOn: "Vous pouvez également me trouver sur ces plateformes :",
    orEmailDirectly: "Ou envoyez un email directement :",
    
    // Footer
    footerDescription: "Développeur logiciel passionné par la création de solutions propres, efficaces et conviviales.",
    quickLinks: "Liens Rapides",
    home: "Accueil",
    projects: "Projets",
    about: "À Propos",
    skills: "Compétences",
    contact: "Contact",
    connect: "Connecter",
    allRightsReserved: "Tous droits réservés.",
    builtWith: "Créé avec ❤️ en utilisant Next.js et Tailwind CSS",
    backToTop: "Retour en haut",
    
    // Project descriptions
    projectMinishell: "Une implémentation simple de shell avec exécution de commandes de base et piping",
    projectTranscendence: "Jeu Pong multijoueur en temps réel avec authentification utilisateur et chat",
    projectSoLong: "Jeu 2D où le joueur collecte des objets et atteint la sortie",
    projectCub3D: "Jeu de raycasting 3D inspiré de Wolfenstein 3D",

    // Skills descriptions
    React: "Création d'interfaces utilisateur modernes et interactives avec React et Next.js",
    TailwindCSS: "Création d'interfaces réactives et belles avec des classes utilitaires",
    Cpp: "Programmation système, algorithmes et optimisation des performances",
    Expo: "Création d'applications mobiles multiplateformes avec React Native",
    TypeScript: "Ajout de sécurité de type et de fonctionnalités modernes au développement JavaScript",
    Docker: "Conteneurisation des applications pour un développement et un déploiement cohérents",
  }
};

export type Language = 'en' | 'fr';
export type TranslationKey = keyof typeof translations.en;