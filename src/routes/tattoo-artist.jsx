import { useEffect } from "react";
import { Navigation } from "../components/tattos/Navigation.jsx";
import { Hero } from "../components/tattos/Hero.jsx";
import { Portfolio } from "../components/tattos/Portfolio.jsx";
import { Booking } from "../components/tattos/Booking.jsx";
import { Manifesto } from "../components/tattos/Manifesto.jsx";
import { Location } from "../components/tattos/Location.jsx";
import { Footer } from "../components/tattos/Footer.jsx";
import CursorApp from "../components/tattos/CursorTattoo/App.jsx";
import { RouteSeo } from "../components/Seo.jsx";

export default function TattooArtist() {
  useEffect(() => {
    const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -80px 0px" };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => revealObserver.observe(el));

    const root = document.querySelector("[data-root]") || document.documentElement;
    setTimeout(() => root.classList.add("welcome-play"), 250);

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div data-root className="font-['Space_Grotesk',sans-serif] bg-black text-slate-100 selection:bg-[#8a0012] selection:text-white overflow-x-hidden cursor-none">
      <RouteSeo routePath="/tattoo-artist" />
      <div className="grain-overlay"></div>
      <CursorApp />

      <Navigation />
      <Hero />
      <Portfolio />

      <div className="relative overflow-hidden linework-bg">
        <div className="absolute inset-0 bg-black/90 z-0"></div>
        <Manifesto />
        <Booking />
      </div>

      <div className="relative overflow-hidden smooth-shading-bg">
        <div className="absolute inset-0 bg-black/85 z-0"></div>
        <Location />
      </div>

      <Footer />
      <style>{`
        :root {
          --charcoal-bg: #121212;
          --pure-black: #000;
        }
        .grain-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 4px 4px, 7px 7px;
          background-position: 0 0, 1px 1px;
          pointer-events: none;
          opacity: 0.12;
          z-index: 50;
          mix-blend-mode: overlay;
        }
        .linework-bg {
          background-image:
            linear-gradient(180deg, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.94)),
            repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 28px),
            repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0 1px, transparent 1px 24px);
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .smooth-shading-bg {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(138, 0, 18, 0.18), transparent 30%),
            radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.08), transparent 24%),
            linear-gradient(135deg, rgba(18, 18, 18, 0.95), rgba(0, 0, 0, 0.98));
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .mandala-texture {
          background-image:
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0 2px, transparent 3px),
            radial-gradient(circle at 50% 50%, rgba(138, 0, 18, 0.18) 0 18px, transparent 19px);
          background-size: 42px 42px, 120px 120px;
          background-position: center;
          opacity: 0.08;
        }
        .sawtooth-edge {
          clip-path: polygon(0% 0%, 10% 4%, 20% 0%, 30% 4%, 40% 0%, 50% 4%, 60% 0%, 70% 4%, 80% 0%, 90% 4%, 100% 0%, 100% 96%, 90% 100%, 80% 96%, 70% 100%, 60% 96%, 50% 100%, 40% 96%, 30% 100%, 20% 96%, 10% 100%, 0% 96%);
        }
        .dp-logo {
          background: #8a0012;
          color: white;
          padding: 4px 8px;
          font-weight: 900;
          border: 2px solid black;
          box-shadow: 3px 3px 0 black;
          font-family: "Space Grotesk", sans-serif;
        }
        .halftone-bg {
          background-image: radial-gradient(circle, #333 1px, transparent 1px);
          background-size: 4px 4px;
        }
        .map-grid {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 25px 25px;
        }
        .brutalist-text-shadow {
          text-shadow: 4px 4px 0 #000;
        }
        .brutalist-text-shadow-white {
          text-shadow: 4px 4px 0 rgba(138, 0, 18, 0.4);
        }
        @keyframes slideUpHero {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes flashEffect {
          0%, 80% { filter: brightness(1) grayscale(100%); z-index: 10; }
          85% { filter: brightness(4) grayscale(0%); z-index: 20; }
          90% { filter: brightness(1.5) grayscale(0%); z-index: 20; }
          100% { filter: brightness(1) grayscale(100%); z-index: 10; }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
        .animate-slide-up-hero {
          animation: slideUpHero 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-flash-random-1 {
          animation: flashEffect 4s infinite 0s;
        }
        .animate-flash-random-2 {
          animation: flashEffect 4s infinite 1s;
        }
        .animate-flash-random-3 {
          animation: flashEffect 4s infinite 2s;
        }
        .animate-flash-random-4 {
          animation: flashEffect 4s infinite 3s;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .welcome-hero .welcome-title, .welcome-hero .welcome-subtitle {
          opacity: 0;
          transform: translateY(28px) scale(0.98);
          transition: transform 900ms cubic-bezier(.2,.9,.2,1), opacity 900ms ease;
        }
        .welcome-play .welcome-hero .welcome-title-1 { transition-delay: 120ms; }
        .welcome-play .welcome-hero .welcome-title-2 { transition-delay: 320ms; }
        .welcome-play .welcome-hero .welcome-subtitle { transition-delay: 560ms; }
        .welcome-play .reveal-on-scroll.in-view .welcome-title-1,
        .welcome-play .reveal-on-scroll.in-view .welcome-title-2,
        .welcome-play .reveal-on-scroll.in-view .welcome-subtitle,
        .welcome-play .welcome-hero .welcome-title-1,
        .welcome-play .welcome-hero .welcome-title-2,
        .welcome-play .welcome-hero .welcome-subtitle {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .reveal-on-scroll { opacity: 0; transform: translateY(30px); transition: all 700ms cubic-bezier(.2,.9,.2,1); }
        .reveal-on-scroll.in-view { opacity: 1; transform: translateY(0); }
        .welcome-play nav { transform: translateY(-8px); opacity: 1; transition: transform 900ms ease, opacity 900ms ease; }
        nav { opacity: 0; transform: translateY(-20px); }
      `}</style>
    </div>
  );
}
