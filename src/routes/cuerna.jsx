import { useEffect } from "react";
import { Navbar } from "../components/cuerna/Navbar.jsx";
import { Hero } from "../components/cuerna/Hero.jsx";
import { TempleSection } from "../components/cuerna/TempleSection.jsx";
import { AgendaSection } from "../components/cuerna/AgendaSection.jsx";
import { ArsenalSection } from "../components/cuerna/ArsenalSection.jsx";
import { Footer } from "../components/cuerna/Footer.jsx";

export default function Cuerna() {
  useEffect(() => {
    document.title = "CUERNA | El Templo del Desmadre - Bogotá";
    document.documentElement.lang = "es";
    document.documentElement.classList.add("scroll-smooth");

    const nav = document.getElementById("navbar");
    const handleScroll = () => {
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.classList.add("bg-brandBg/90", "backdrop-blur-md", "border-b", "border-brandRed/20");
      } else {
        nav.classList.remove("bg-brandBg/90", "backdrop-blur-md", "border-b", "border-brandRed/20");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  const year = "2026";

  return (
    <div className="cuerna-root bg-brandBg text-white selection:bg-brandRed selection:text-white font-body overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Oswald:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.cdnfonts.com/css/ifc-insane-rodeo" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay noise-overlay"></div>

      <Navbar />
      <Hero />
      <TempleSection />
      <AgendaSection />
      <ArsenalSection />
      <Footer year={year} />

      <style>{`
        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .font-header {
          font-family: 'IFC Insane Rodeo', cursive;
          text-shadow: 
            3px 3px 0px #000, 
            -1px -1px 0 #444,  
            1px -1px 0 #444,
            -1px 1px 0 #444,
            1px 1px 0 #444,
            0 0 5px rgba(255, 255, 255, 0.3),
            0 0 10px rgba(255, 255, 255, 0.1);
          letter-spacing: 0.05em;
        }
        .text-brandRed.font-header, .font-header .text-brandRed {
          text-shadow: 
            3px 3px 0px #000,
            -1px -1px 0 #800,
            1px -1px 0 #800,
            -1px 1px 0 #800,
            1px 1px 0 #800,
            0 0 12px rgba(217, 26, 26, 0.6);
        }
        .text-brandYellow.font-header {
          text-shadow: 
            3px 3px 0px #000,
            -1px -1px 0 #885500,
            1px -1px 0 #885500,
            -1px 1px 0 #885500,
            1px 1px 0 #885500,
            0 0 12px rgba(255, 204, 0, 0.6);
        }
        .hero-gradient {
          background: linear-gradient(to top, #0B0B0B 0%, rgba(11, 11, 11, 0.4) 50%, transparent 100%);
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0B0B0B;
        }
        ::-webkit-scrollbar-thumb {
          background: #D91A1A;
        }
        .cuerna-root {
          min-height: max(884px, 100dvh);
        }
      `}</style>
    </div>
  );
}
