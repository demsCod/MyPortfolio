/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com', 'i.gifer.com'],
    unoptimized: true, // Permet de désactiver l'optimisation des images
    // Vous pouvez ajouter d'autres domaines si nécessaire
  },
  // Autres configurations Next.js si vous en avez
};

module.exports = nextConfig;