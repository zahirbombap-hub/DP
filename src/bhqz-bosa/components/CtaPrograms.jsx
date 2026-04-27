import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CtaPrograms({
  title = "¿No encontraste lo que buscas?",
  text = "Contactanos para conocer sobre programas personalizados o próximas iniciativas.",
  buttonText = "Contactar",
  buttonLink = "/bhqz-bosa/contacto",
  backgroundImage = "/multimedia/BHQZ/fotos/convocatoriavolley.webp",
}) {
  const ctaRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    // Fade + scale on enter
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Button magnetic hover + glow
    const button = buttonRef.current;
    if (button) {
      const handleMouseMove = (e) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;

        const moveX = distanceX * 0.1; // Magnetic strength
        const moveY = distanceY * 0.1;

        gsap.to(button, {
          x: moveX,
          y: moveY,
          ease: "power2.out",
          duration: 0.3,
          boxShadow: "0 0 25px rgba(255, 0, 127, 0.4), 0 0 10px rgba(255, 0, 127, 0.2)", // Glow
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          ease: "elastic.out(1, 0.5)",
          duration: 0.7,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)", // Original shadow
        });
      };

      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, { scope: ctaRef });

  return (
    <section
      ref={ctaRef}
      className="relative overflow-hidden py-12 text-white md:py-16 lg:py-24 rounded-t-[2.5rem] mt-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.88),rgba(8,8,8,0.56),rgba(8,8,8,0.88))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 text-center sm:px-4 md:px-6">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-sm text-white/90 sm:mb-8 sm:text-base md:text-lg">
          {text}
        </p>
        <a
          ref={buttonRef}
          href={buttonLink}
          className="inline-block rounded-lg bg-white px-6 py-2 text-sm font-semibold text-blue-900 sm:px-8 sm:py-3 sm:text-base shadow-md"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}