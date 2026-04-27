import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Custom hook for magnetic effect
const useMagnetic = (ref, strength = 0.2) => {
  const handleMouseMove = useCallback((e) => {
    const target = ref.current;
    if (!target) return;

    const { left, top, width, height } = target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;

    const moveX = distanceX * strength;
    const moveY = distanceY * strength;

    gsap.to(target, {
      x: moveX,
      y: moveY,
      ease: "power2.out",
      duration: 0.4,
    });
  }, [ref, strength]);

  const handleMouseLeave = useCallback(() => {
    const target = ref.current;
    if (!target) return;

    gsap.to(target, {
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.5)",
      duration: 0.7,
    });
  }, [ref]);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    target.addEventListener('mousemove', handleMouseMove);
    target.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      target.removeEventListener('mousemove', handleMouseMove);
      target.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, handleMouseMove, handleMouseLeave]);
};


export default function FilterButtonsPrograms({ items, selected, onSelect, totalCount = null }) {
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  useGSAP(() => {
    // Stagger animation for buttons on load
    gsap.from(buttonRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="filters-section border-b border-white/10 bg-black py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {/* All items button */}
          <MagneticButton
            ref={(el) => (buttonRefs.current[0] = el)}
            onClick={() => onSelect(null)}
            className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
              selected === null
                ? 'bg-blue-600 text-white'
                : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
            }`}
          >
            Todos {totalCount !== null && `(${totalCount})`}
          </MagneticButton>

          {/* Filter buttons */}
          {items.map((item, index) => (
            <MagneticButton
              key={item.id || item}
              ref={(el) => (buttonRefs.current[index + 1] = el)} // +1 because "Todos" is at index 0
              onClick={() => onSelect(item.id || item)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
                selected === (item.id || item)
                  ? 'bg-blue-600 text-white'
                  : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {item.name || item} {item.count !== undefined && `(${item.count})`}
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}

// MagneticButton component to apply magnetic effect
const MagneticButton = React.forwardRef(({ children, className, ...props }, ref) => {
  const buttonRef = useRef(null);
  const combinedRef = useCallback(
    (node) => {
      buttonRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );
  useMagnetic(buttonRef, 0.15); // Adjust strength as needed

  return (
    <button ref={combinedRef} className={`relative inline-block ${className}`} {...props}>
      {children}
    </button>
  );
});
MagneticButton.displayName = 'MagneticButton';