import { useEffect } from "react";
import { Contact } from "../components/boutique/Contact.jsx";
import { Footer } from "../components/boutique/Footer.jsx";
import { Hero } from "../components/boutique/Hero.jsx";
import { Methodology } from "../components/boutique/Methodology.jsx";
import { Milestones } from "../components/boutique/Milestones.jsx";
import { Navigation } from "../components/boutique/Navigation.jsx";
import { SuccessCases } from "../components/boutique/SuccessCases.jsx";
import { Testimonials } from "../components/boutique/Testimonials.jsx";

export default function BoutiqueLawFirm() {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-bg');
            parallaxElements.forEach((el) => {
                const speed = 0.15;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="font-['Newsreader',serif] bg-[#f8f7f2] text-[#2a2a2a] selection:bg-[#b8860b] selection:text-white overflow-x-hidden">
            <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

            <Navigation />

            <main className="pt-20">
                <Hero />
                <Methodology />
                <Milestones />
                <SuccessCases />
                <Testimonials />
                <Contact />
            </main>

            <Footer />
            <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
