import { useEffect } from "react";
import { Navigation } from "../components/tattos/Navigation.tsx";
import { Hero } from "../components/tattos/Hero.tsx";
import { Portfolio } from "../components/tattos/Portfolio.tsx";
import { Booking } from "../components/tattos/Booking.tsx";
import { Manifesto } from "../components/tattos/Manifesto.tsx";
import { Location } from "../components/tattos/Location.tsx";
import { Footer } from "../components/tattos/Footer.tsx";
import CursorApp from "../components/tattos/CursorTattoo/App.tsx";

export default function TattooArtist() {
    useEffect(() => {
        // Scroll reveal observer
        const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -80px 0px' };
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('in-view');
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

        // Play welcome animation on hero after mount
        const root = document.querySelector('[data-root]') || document.documentElement;
        setTimeout(() => root.classList.add('welcome-play'), 250);

        return () => revealObserver.disconnect();
    }, []);

    return (
        <div data-root className="font-['Space_Grotesk',sans-serif] bg-black text-slate-100 selection:bg-[#8a0012] selection:text-white overflow-x-hidden">
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />

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
            background: url(https://www.transparenttextures.com/patterns/film-grain.png);
            pointer-events: none;
            opacity: 0.12;
            z-index: 50;
        }
        .linework-bg {
            background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCCfkeHkEFE-lz7vUqznMP6So5gg2J0c4WR96tbb-Yh_WH6vDHxbpsB7S-VxCAaGqUUjQw1kjVXQ1-ZFcMFUAO-u0ZkDslfU-8byV8Zkoi8rtJfD7gbnCZv_PwEFhloe_F26RTUGFBss0hs7IndOoyCJwdlxLJ9if7FoYBwltDenWRfrNlHFR1g0pDSksTmOuNZ6-eohdWLFKEkZzgjittHXqsbQZgiVtPap2yt91SZ49GdknjNc5EduIpymfIbnN--n68y8kTQSD0);
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        .smooth-shading-bg {
            background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDbBuFPi3DfVe4vWxSkZMpZs0rfpHJI9YKq_pvKA_hvX1N6ow1CwaTmYNsZFWFCciH9AB3RW5LrvgE3XyA4LV9cDjN1XPWGDCLZjMarYC3bwxMrm2vw0zDwYaIe3cnR0NcqhL02TXzRQR42zKRUdYNpbSmvfeKN8ieDaGPb3JkbZHeebdPsS9FjXmklZv9s4se-piWnCexPR-Zdy2Kk2nJ4kv12lAiQGtQ_4UMwGBMuMIzPw3_p23m9FurqFOXkRN7mOksNr0WVkVw);
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
        .mandala-texture {
            background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCGMjrtKuVoaYacD2CKcIdu7LRtzMXObU2dE0fVhw6V5bJh17GwMNyDfVl0X5KoHT-Wok9a3e1OSVlmgz6naVtTIZLGJdaHekgAOfcB3dgcAxnQq6kUi5_BSvrXmx-fn3PJbzJyI_6XC5pVnfAFmwxKyeczNXntoxiiaiNwvltyJz7cQnslo8c-mKTQd-Qe2FOkp7rIZcLicWC2BR0ZQpjUK8BlC2qLqnFc0ep_aVkNE_AywlOgNDg7aaX8hq-VpwpQ6dWOqa8gqJs);
            background-size: cover;
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
        .carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
        }
        .carousel-track {
            display: flex;
            width: max-content;
            will-change: transform;
        }
        .gallery-card {
            width: 180px;
            height: 180px;
            flex-shrink: 0;
            position: relative;
            overflow: hidden;
            filter: grayscale(100%);
            background: #0a0a0a;
            margin: 0 4px;
            transition: filter 0.5s ease;
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
        @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
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
        .animate-scroll-left-slow {
            animation: scrollLeft 80s linear infinite;
        }
        .animate-scroll-right-slow {
            animation: scrollRight 90s linear infinite;
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
        /* Welcome animation for hero titles */
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

        /* Generic reveal-on-scroll */
        .reveal-on-scroll { opacity: 0; transform: translateY(30px); transition: all 700ms cubic-bezier(.2,.9,.2,1); }
        .reveal-on-scroll.in-view { opacity: 1; transform: translateY(0); }

        /* Header fade on welcome */
        .welcome-play nav { transform: translateY(-8px); opacity: 1; transition: transform 900ms ease, opacity 900ms ease; }
        nav { opacity: 0; transform: translateY(-20px); }
      `}</style>
        </div>
    );
}
