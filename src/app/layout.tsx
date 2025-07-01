// src/app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Sora, Montserrat, Piedra } from "next/font/google";
import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const piedra = Piedra({
  variable: "--font-piedra",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Dembele - Software Engineer",
  description: "A Software Engineer specializing in web development and software solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${poppins.variable} ${montserrat.variable} ${piedra.variable} antialiased h-full bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
