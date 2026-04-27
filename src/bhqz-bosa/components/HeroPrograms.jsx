import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroPrograms({
  title = "Nuestros Programas",
  subtitle = "Descubre nuestros cursos, talleres y actividades disponibles para todos los niveles.",
  backgroundImage = "/multimedia/BHQZ/fotos/foto11.webp",
}) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Title animation (letter-by-letter stagger)
    const titleWords = titleRef.current.textContent.split(" ");
    titleRef.current.innerHTML = titleWords.map(word => `<span class="inline-block overflow-hidden"><span class="inline-block will-change-transform">${word}</span></span>`).join(" ");

    gsap.from(titleRef.current.querySelectorAll(".inline-block > span"), {
      yPercent: 100,
      opacity: 0,
      rotationX: -90,
      stagger: 0.08,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    // Subtitle animation (fade + slight upward motion)
    gsap.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5, // Delay after title starts
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 90%",
      },
    });

    // Background image animation (scale, opacity)
    gsap.from(bgRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 90%",
      },
    });

  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center text-white">
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-orange-500/20"></div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
          {title}
        </h1>
        <p ref={subtitleRef} className="text-lg sm:text-xl md:text-2xl font-medium opacity-0">
          {subtitle}
        </p>
      </div>
    </section>
  );
}