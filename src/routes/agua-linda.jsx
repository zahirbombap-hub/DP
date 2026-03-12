import { useEffect } from "react";
import { Benefits } from "../components/agua-linda/Benefits.jsx";
import { Footer } from "../components/agua-linda/Footer.jsx";
import { Header } from "../components/agua-linda/Header.jsx";
import { Hero } from "../components/agua-linda/Hero.jsx";
import { ProductCatalog } from "../components/agua-linda/ProductCatalog.jsx";
import { ProductShowcase } from "../components/agua-linda/ProductShowcase.jsx";
import { WhatsAppButton } from "../components/agua-linda/WhatsAppButton.jsx";

export const meta = () => {
    return [
        { title: "Agua Linda | Autoridad Natural en Villa de Leyva" },
        { name: "description", content: "Pureza Natural de Villa de Leyva. Agua Linda es la esencia de Sutamarchán y la pureza del altiplano." },
    ];
};

export default function AguaLinda() {
    useEffect(() => {
        // Activar Dark Mode por defecto
        if (!document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.add('dark');
        }

        // Scroll Reveal Implementation
        const observerOptions = {
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // GSAP Parallax Video Logic
        // Note: In a real React app, you would typically install gsap via npm.
        // Since we are migrating from a file that used CDN, we check if window.gsap exists
        // or we rely on the script tags injected below.
        const initGsap = () => {
            if (window.gsap && window.ScrollTrigger) {
                window.gsap.registerPlugin(window.ScrollTrigger);
                window.gsap.to(".parallax-bg", {
                    yPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#hero",
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        };

        // Small delay to ensure scripts are loaded if they are coming from CDN
        setTimeout(initGsap, 500);
    }, []);

    return (
        <div className="bg-[#0B5ED7] dark:bg-[#0B1120] text-white dark:text-slate-200 font-['Inter',sans-serif] transition-colors duration-300 scroll-smooth snap-y snap-proximity scroll-pt-20">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

            <Header />
            <Hero />
            <ProductShowcase />
            <ProductCatalog />
            <Benefits />
            <Footer />
            <WhatsAppButton />

            <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
      `}</style>
        </div>
    );
}
