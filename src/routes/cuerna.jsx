import { useEffect, useState } from "react";
import { Navbar } from "../components/cuerna/Navbar.jsx";
import { Hero } from "../components/cuerna/Hero.jsx";
import { TempleSection } from "../components/cuerna/TempleSection.jsx";
import { AgendaSection } from "../components/cuerna/AgendaSection.jsx";
import { ArsenalSection } from "../components/cuerna/ArsenalSection.jsx";
import { Footer } from "../components/cuerna/Footer.jsx";

export default function Cuerna() {
  const [loading, setLoading] = useState(true);
  const [preloaderFading, setPreloaderFading] = useState(false);
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

  // Preloader: preload key images, show spinner between 500ms and max 1500ms
  useEffect(() => {
    const MIN = 500;
    const images = [
      "/multimedia/cuerna/logo cuerna.png",
      "/multimedia/cuerna/cuerna cuerna.png",
      "/multimedia/cuerna/Tablazo aereo.jpg",
      "/multimedia/cuerna/Cuerna Ajedrez.png",
      "/multimedia/cuerna/tusa.png",
      "/multimedia/cuerna/beso.png",
      "/multimedia/cuerna/tablazo.png",
      "/multimedia/dp-logo-2.png",
    ];

    // Detect network and device capability
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
    const effectiveType = connection.effectiveType || "";
    const downlink = connection.downlink || 10; // Mbps (fallback)
    const deviceMemory = navigator.deviceMemory || 4; // GB (fallback)
    const cores = navigator.hardwareConcurrency || 4;

    const isFastConnection = downlink >= 5 && !/(2g|slow-2g|3g)/i.test(effectiveType);
    const isHighEndDevice = deviceMemory >= 4 || cores >= 4;
    const includeVideo = isFastConnection && isHighEndDevice;

    const MAX = includeVideo ? 2500 : 1500;

    const start = Date.now();
    const loaders = images.map((src) =>
      new Promise((res) => {
        const img = new Image();
        img.onload = img.onerror = () => res();
        img.src = src;
      })
    );

    // If network/device is fast, try to preload video enough for smooth playback
    if (includeVideo) {
      const VIDEO_TIMEOUT = 1800;
      const videoPromise = new Promise((res) => {
        try {
          const vid = document.createElement("video");
          vid.preload = "auto";
          vid.muted = true;
          vid.src = "/multimedia/cuerna/fondo.mp4";
          const done = () => {
            vid.pause();
            vid.src = "";
            res();
          };
          vid.addEventListener("canplaythrough", done, { once: true });
          vid.addEventListener("loadeddata", done, { once: true });
          vid.addEventListener("error", done, { once: true });
          setTimeout(done, VIDEO_TIMEOUT);
        } catch (e) {
          res();
        }
      });
      loaders.push(videoPromise);
    }

    Promise.race([Promise.all(loaders), new Promise((r) => setTimeout(r, MAX))]).then(() => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN - elapsed);
      const FADE_MS = 380;
      setTimeout(() => {
        setPreloaderFading(true);
        setTimeout(() => setLoading(false), FADE_MS);
      }, wait);
    });
  }, []);

  // prevent scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loading]);

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
      {loading && (
        <div
          className={`fixed inset-0 z-60 bg-black text-white preloader-overlay ${
            preloaderFading ? "preloader-fade" : ""
          }`}
        >
          <div className="absolute top-20 left-0 right-0 pointer-events-none">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-start gap-2 z-70">
                  <div className="text-sm text-gray-300 opacity-90">Cargando elementos...</div>
                  <img
                    src="/multimedia/cuerna/logo cuerna.png"
                    alt="Cuerna logo"
                    className="w-12 h-12 sm:w-12 sm:h-12 preloader-logo"
                  />
                </div>
              </div>
            </div>
        </div>
      )}

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
        /* Preloader styles */
        .preloader-overlay {
          background: #000;
          opacity: 1;
          transition: opacity 380ms ease-out, visibility 380ms ease-out;
        }
        .preloader-overlay.preloader-fade {
          opacity: 0;
          visibility: hidden;
        }
        .preloader-logo {
          animation: preloader-spin 900ms linear infinite;
          filter: drop-shadow(0 6px 18px rgba(0,0,0,0.6));
        }
        @keyframes preloader-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
