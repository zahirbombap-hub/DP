import { useEffect, useRef } from "react";
import { Header } from "./Header.jsx";
import { Hero } from "./Hero.jsx";
import { AutomationShowcase } from "./AutomationShowcase.jsx";
import { AppsShowcase } from "./AppsShowcase.jsx";
import { Cases } from "./Cases.jsx";
import { SEOContent } from "./SEOContent.jsx";
import { Contact } from "./Contact.jsx";
import { Footer } from "./Footer.jsx";
// landing.css moved to global import in src/index.js

const WELCOME_SCROLL_GAP = 16;

export function Welcome() {
  const pageRef = useRef(null);

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

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const root = document.documentElement;
    const page = pageRef.current;
    const header = document.querySelector(".welcome-fixed-header");

    const updateHeaderOffset = () => {
      if (!header) {
        return;
      }

      const headerHeight = Math.ceil(header.getBoundingClientRect().height);
      root.style.setProperty(
        "--welcome-header-offset",
        `${headerHeight + WELCOME_SCROLL_GAP}px`,
      );
    };

    updateHeaderOffset();

    const scrollToHashTarget = () => {
      if (!window.location.hash) {
        return;
      }

      const target = document.querySelector(window.location.hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleSectionLinkClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) {
        return;
      }

      const anchor = event.target.closest("a[href]");
      if (!anchor || (anchor.target && anchor.target !== "_self")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) {
        return;
      }

      const target = document.querySelector(url.hash);
      if (!target) {
        return;
      }

      event.preventDefault();
      window.history.replaceState({}, "", `${url.pathname}${url.hash}`);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    root.classList.add("welcome-scroll-shell");
    const alignHashRaf = window.requestAnimationFrame(scrollToHashTarget);
    const resizeObserver =
      header && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateHeaderOffset)
        : null;

    resizeObserver?.observe(header);
    window.addEventListener("resize", updateHeaderOffset);
    page?.addEventListener("click", handleSectionLinkClick);

    return () => {
      root.classList.remove("welcome-scroll-shell");
      root.style.removeProperty("--welcome-header-offset");
      window.cancelAnimationFrame(alignHashRaf);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateHeaderOffset);
      page?.removeEventListener("click", handleSectionLinkClick);
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="welcome-page font-['Space_Grotesk',sans-serif] text-white selection:bg-[#ff3d4d] selection:text-white antialiased bg-[#050505]"
    >
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main-content" role="main" className="cinematic-load">
        <Hero />
        <Cases />
        <AutomationShowcase />
        <AppsShowcase />
        <SEOContent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
