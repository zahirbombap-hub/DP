import { About } from "../components/digitalart/About.jsx";
import { Background } from "../components/digitalart/Background.jsx";
import { Contact } from "../components/digitalart/Contact.jsx";
import { FloatingNav } from "../components/digitalart/FloatingNav.jsx";
import { Footer } from "../components/digitalart/Footer.jsx";
import { Gallery } from "../components/digitalart/Gallery.jsx";
import { Hero } from "../components/digitalart/Hero.jsx";

export default function DigitalArtist() {
    return (
        <div className="font-['Space_Grotesk',sans-serif] bg-[#0D0D0D] text-slate-100 selection:bg-[#00ffff]/30 overflow-x-hidden">
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            
            <Background />

            <div className="relative z-10">
                <Hero />
                <Gallery />
                <About />
                <Contact />
                <Footer />
            </div>

            <FloatingNav />
            <style>{`
        @keyframes spiralIn {
          0% { transform: rotate(-180deg) scale(2.5); opacity: 0; }
          100% { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        @keyframes sparkEntry {
          0% { transform: scale(0.2) translate(0, 0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: scale(1) translate(var(--tw-translate-x), var(--tw-translate-y)); opacity: 0.4; }
        }
        @keyframes sparkDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, -50px); }
        }
        @keyframes expandCenter {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulseSubtle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
      `}</style>
        </div>
    );
}
