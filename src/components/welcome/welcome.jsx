import { useEffect } from "react";
import { Header } from "./Header.jsx";
import { Hero } from "./Hero.jsx";
import { Cases } from "./Cases.jsx";
import { HowItWorks } from "./HowItWorks.jsx";
import { PricingSection } from "./PricingSection.jsx";
import { Contact } from "./Contact.jsx";
import { Footer } from "./Footer.jsx";
// landing.css moved to global import in src/index.js

export function Welcome() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setTimeout(() => {
          el.classList.add('active');
        }, 500);
      }
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="font-['Space_Grotesk',sans-serif] text-white selection:bg-[#ff3d4d] selection:text-white antialiased bg-[#050505]">
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main-content" role="main" className="cinematic-load">
        <Hero />
        <Cases />
        <HowItWorks />
        <PricingSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
