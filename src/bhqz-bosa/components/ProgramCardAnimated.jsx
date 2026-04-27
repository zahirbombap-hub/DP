import React, { useRef, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Z7_STYLES } from '../config/styles.js';

gsap.registerPlugin(ScrollTrigger);

export default function ProgramCardAnimated({ program, onSelect = null, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const glowRef = useRef(null); // For the animated gradient overlay

  const getCategoryColor = (category) => {
    const colors = {
      Arte: Z7_STYLES.colors.category.arte,
      Cultura: Z7_STYLES.colors.category.cultura,
      Deporte: Z7_STYLES.colors.category.deporte,
    };
    // Fallback to a default if category not found or Z7_STYLES is not fully defined
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  useGSAP(() => {
    // On scroll animation for cards
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 80,
      scale: 0.95,
      duration: 0.8,
      ease: "power3.out",
      delay: index * 0.1, // Stagger effect
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: cardRef, dependencies: [index] });

  // Hover animations
  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const button = buttonRef.current;
    const glow = glowRef.current;

    gsap.to(card, {
      y: -10,
      scale: 1.01,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 20px 40px rgba(255, 0, 127, 0.3), 0 0 15px rgba(255, 0, 127, 0.2)", // Subtle glow
    });
    gsap.to(image, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(button, {
      backgroundColor: "#b91c1c", // Darker red
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(glow, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const button = buttonRef.current;
    const glow = glowRef.current;

    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)", // Original shadow
    });
    gsap.to(image, {
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(button, {
      backgroundColor: "#dc2626", // Original red
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(glow, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  // 3D Tilt effect on mousemove
  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateX = (mouseY - centerY) / height * 20; // Max 20deg tilt
    const rotateY = (mouseX - centerX) / width * 20;

    gsap.to(card, {
      rotateX: -rotateX, // Invert for natural feel
      rotateY: rotateY,
      duration: 0.2,
      ease: "power1.out",
    });
  }, []);

  const handleMouseLeaveTilt = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeaveTilt); // Separate listener for tilt reset

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeaveTilt);
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove, handleMouseLeaveTilt]);


  return (
    <article
      ref={cardRef}
      className="program-card group relative bg-[#1c0808] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full will-change-transform"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Animated Gradient Overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 0, 127, 0.15) 0%, transparent 70%)',
          zIndex: 1,
        }}
      ></div>

      {/* Image */}
      {program.image && (
        <div className="h-40 w-full overflow-hidden relative z-0">
          <img ref={imageRef} src={program.image} alt={program.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col relative z-20">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{program.title}</h3>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${getCategoryColor(program.category)}`}>
            {program.category}
          </span>
        </div>

        <p className="text-sm text-gray-300 mb-4 flex-1 leading-relaxed">{program.description}</p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-400 mb-4">
          <div className="flex gap-3">
            <div>
              <div className="text-xs font-semibold text-white">Nivel</div>
              <div className="text-sm text-gray-300">{program.level}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Horario</div>
              <div className="text-sm text-gray-300">{program.schedule}</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-semibold text-white">Precio</div>
            <div className="text-sm font-semibold text-red-500">{program.price}</div>
          </div>
        </div>

        <div>
          {onSelect ? (
            <button
              ref={buttonRef}
              onClick={() => onSelect(program)}
              className="w-full rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
            >
              Más información
            </button>
          ) : (
            <a
              href={program.link}
              className="inline-block w-full text-center rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-b from-red-700 via-red-800 to-red-900 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
            >
              Más información
            </a>
          )}
        </div>
      </div>
    </article>
  );
}