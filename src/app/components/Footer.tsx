import Link from "next/link";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="min-w-full text-primary-foreground py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-20">
            <div className="border-t border-primary-foreground/20 w-full my-6"></div>
            <div className="mx-auto">
                <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-8">
                </div>
                {/* Copyright */}
                <div className="flex flex-col font-poppins sm:flex-row justify-between items-center text-sm text-primary-foreground/80">
                    <p>© {currentYear} Mohamed Dembele. All rights reserved.</p>
                    <p className="mt-2 sm:mt-0">Built with ❤️ using Next.js and Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}