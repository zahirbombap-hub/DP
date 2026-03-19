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

  // don't pre-position the cursor image in the center; wait for real mousemove

  const year = "2026";

  return (
    <div className="cuerna-root bg-brandBg text-white selection:bg-brandRed selection:text-white font-body overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay noise-overlay"></div>
      {loading && (
        <div className={`fixed inset-0 z-[100] bg-black text-white preloader-overlay ${preloaderFading ? "preloader-fade" : ""}`}>
          {/* full-screen background image with video-like effect */}
          <img
            src="/multimedia/cuerna/Fondo.png"
            alt="Preloader background"
            className="preloader-bg pointer-events-none absolute inset-0 w-full h-full object-cover"
          />

          {/* bottom-right fixed calavera and loading text above it */}
          <img
            src="/multimedia/cuerna/calaver-carga.png"
            alt="calavera carga"
            className="preloader-corner pointer-events-none absolute bottom-10 right-4 w-12 h-12 object-contain"
          />
          <div className="absolute bottom-4 right-4 pointer-events-none">
            <div className="text-sm text-gray-300 opacity-90">Cargando elementos...</div>
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
        .cuerna-root .font-sub {
          font-family: 'Oswald', sans-serif !important;
          letter-spacing: 0.08em;
          text-transform: uppercase;
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
          background: #000000;
          opacity: 1;
          transition: opacity 380ms ease-out, visibility 380ms ease-out;
        }
        .preloader-overlay.preloader-fade {
          opacity: 0;
          visibility: hidden;
        }
        .preloader-corner {
          animation: preloader-spin 1500ms linear infinite;
          will-change: transform;
        }
        .preloader-logo {
          animation: preloader-spin 900ms linear infinite;
          filter: drop-shadow(0 6px 18px rgba(0,0,0,0.6));
        }
        .preloader-bg {
          transform-origin: center;
          transform: scale(1.1);
          filter: blur(2px) brightness(0.9) saturate(0.98);
          opacity: 0.6;
          will-change: transform, filter, opacity;
        }
        .preloader-cursor {
          position: fixed;
          width: 44px;
          height: 44px;
          transform: translate(-50%, -50%);
          z-index: 9999;
          pointer-events: none;
          animation: preloader-spin 900ms linear infinite;
          will-change: transform;
        }
        @keyframes preloader-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
