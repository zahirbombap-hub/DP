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
    { name: "description", content: "Pureza Natural de Villa de Leyva. Agua Linda es la esencia de SutamarchÃ¡n y la pureza del altiplano." },
  ];
};

export default function AguaLinda() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const hero = document.querySelector(".parallax-bg");
    const heroSection = document.getElementById("hero");

    if (!hero || !heroSection) {
      return () => observer.disconnect();
    }

    let rafId = 0;

    const updateParallax = () => {
      const rect = heroSection.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      hero.style.transform = `translate3d(0, ${progress * 14}%, 0) scale(1.08)`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#0B5ED7] dark:bg-[#0B1120] text-white dark:text-slate-200 font-['Inter',sans-serif] transition-colors duration-300 scroll-smooth snap-y snap-proximity scroll-pt-20">
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
