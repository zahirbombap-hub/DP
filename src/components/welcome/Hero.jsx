import { useEffect, useRef } from "react";
import { Icon } from "../Icon.jsx";

const SCROLL_ITEMS = ["Paginas Web", "Automatizaciones", "Apps", "Marketing"];
const SCROLL_REPEAT_COUNT = 20;

function ScrollVelocityMarquee({ speed = 60 }) {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const directionRef = useRef(-1);
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const frameRef = useRef(0);
  const loopWidthRef = useRef(0);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
    };

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
    } else {
      mediaQuery.addListener(updatePreference);
    }

    const measureLoopWidth = () => {
      if (!trackRef.current) {
        return;
      }

      loopWidthRef.current = trackRef.current.scrollWidth / SCROLL_REPEAT_COUNT;
    };

    measureLoopWidth();

    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(measureLoopWidth) : null;

    if (trackRef.current && resizeObserver) {
      resizeObserver.observe(trackRef.current);
    }

    lastScrollYRef.current = window.scrollY;
    lastScrollTimeRef.current = performance.now();
    lastFrameTimeRef.current = performance.now();

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollYRef.current;
      const now = performance.now();
      const elapsed = Math.max(now - lastScrollTimeRef.current, 16);
      const instantVelocity = Math.min(Math.abs(deltaY) / elapsed, 2.5);

      velocityRef.current = Math.max(velocityRef.current, instantVelocity);
      directionRef.current = deltaY >= 0 ? -1 : 1;
      lastScrollYRef.current = currentScrollY;
      lastScrollTimeRef.current = now;
    };

    const animate = (now) => {
      const deltaTime = Math.min(now - lastFrameTimeRef.current, 32);
      const decay = prefersReducedMotionRef.current ? 0 : 0.94;

      velocityRef.current *= decay;

      if (!prefersReducedMotionRef.current && trackRef.current) {
        const baseDistance = speed * (deltaTime / 1000);
        const velocityBoost = velocityRef.current * speed * 1.8 * (deltaTime / 1000);

        offsetRef.current += directionRef.current * (baseDistance + velocityBoost);

        const loopWidth = loopWidthRef.current || trackRef.current.scrollWidth / SCROLL_REPEAT_COUNT;
        if (loopWidth > 0) {
          offsetRef.current = ((offsetRef.current % loopWidth) + loopWidth) % loopWidth;
        }

        const scaleY = 1 + Math.min(velocityRef.current * 0.08, 0.08);
        const skewX = Math.min(velocityRef.current * 8, 12) * directionRef.current;
        trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0) scaleY(${scaleY}) skewX(${skewX}deg)`;
      }

      lastFrameTimeRef.current = now;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updatePreference);
      } else {
        mediaQuery.removeListener(updatePreference);
      }
      resizeObserver?.disconnect();
      window.cancelAnimationFrame(frameRef.current);
    };
  }, [speed]);

  return (
    <div
      className="overflow-hidden border-y border-white/5 bg-white/[0.02] py-3 sm:py-3"
      style={{
        width: "100dvw",
        maxWidth: "100dvw",
        marginLeft: "calc(50% - 50dvw)",
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max min-w-max items-center will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {Array.from({ length: SCROLL_REPEAT_COUNT }).flatMap((_, repeatIndex) =>
          SCROLL_ITEMS.map((item, itemIndex) => (
            <span
              key={`${repeatIndex}-${item}-${itemIndex}`}
              className="flex flex-none items-center gap-3 px-5 font-['Space_Grotesk',sans-serif] text-[clamp(1rem,2.1vw,1.65rem)] font-bold uppercase tracking-[0.32em] text-[#fff8ed] opacity-85"
            >
              {item}
              <span className="h-px w-10 bg-[#8a0012]/70" />
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="welcome-hero welcome-scroll-section relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-6 sm:px-6 sm:pb-8 lg:min-h-[80vh]"
      style={{ paddingTop: "calc(var(--welcome-header-height, 72px) + 1.5rem)" }}
    >
      <style>{`
        @font-face {
          font-family: "DxRuiga SemiBold";
          src: url("/fuentes/DxRuiga-SemiBold.otf") format("opentype");
          font-style: normal;
          font-weight: 600;
          font-display: swap;
        }

        @font-face {
          font-family: "ElanorFreePersonalUse-ExBdIt";
          src: url("/fuentes/ElanorFreePersonalUse-ExBdIt.otf") format("opentype");
          font-style: italic;
          font-weight: 800;
          font-display: swap;
        }

        @keyframes welcome-fade {
          0%, 20% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#8a0012] to-[#050505]"
        style={{ animation: "welcome-fade 2.5s ease-out forwards" }}
      />
      <div className="flex flex-col items-center text-center z-10">
        <div className="mt-0 mb-5 px-4 py-1 border border-[#8a0012]/40 bg-[#8a0012]/10 backdrop-blur-sm">
          <span className="text-[#ff3d4d] text-[9px] font-black tracking-[0.4em] uppercase font-['Space_Grotesk',sans-serif]">Don Prueba // Desarrollo de Software</span>
        </div>
        <h1 className="hero-title text-[14vw] sm:text-[11vw] leading-[0.82] not-italic uppercase tracking-[-0.04em] mb-8 text-white select-none">
          DON <br className="md:hidden" /> P
        </h1>
        <div className="max-w-3xl space-y-6">
          <p className="text-lg md:text-xl text-[#a1a1aa] font-light leading-snug tracking-tight font-['Space_Grotesk',sans-serif]">
            Desarrollamos ecosistemas digitales con el rigor del <span className="text-white font-normal italic">Protocolo Crimson</span>. Soluciones web empresariales para visionarios y marcas de alto impacto.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <span className="h-[1px] w-10 bg-[#8a0012] self-center"></span>
            <span className="font-['JetBrains_Mono',monospace] text-[#ff3d4d] text-[10px] uppercase tracking-widest">Est. 2026 / Portafolio Activo</span>
            <span className="h-[1px] w-10 bg-[#8a0012] self-center"></span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#a1a1aa]/50 font-['Space_Grotesk',sans-serif]">Explorar Portafolio</span>
            <Icon name="south" className="text-[#ff3d4d] text-sm animate-bounce" />
          </div>
        </div>
      </div>
      <div className="mt-20 mb-4">
        <ScrollVelocityMarquee speed={60} />
      </div>
    </section>
  );
}
