import { useEffect, useRef, useState } from 'react';
import { CTA_CAROUSEL_IMAGES } from '../data/ctaCarouselImages.js';

const DEFAULT_BUTTON_CLASSNAME =
  'inline-block rounded-lg bg-gradient-to-b from-red-700 via-red-800 to-red-900 px-8 py-3 font-semibold text-white shadow-sm transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-red-600';

export default function CtaCarouselSection({
  title,
  description,
  href,
  buttonLabel,
  images = CTA_CAROUSEL_IMAGES,
  className = '',
  contentClassName = '',
  buttonClassName = '',
  fullBleed = false,
  minHeightClassName = 'min-h-[22rem]',
}) {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!images.length) return undefined;

    timerRef.current = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [images]);

  return (
    <section
      className={`relative isolate overflow-hidden py-12 text-white md:py-16 lg:py-24 ${className}`.trim()}
      style={
        fullBleed
          ? {
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)',
              width: '100vw',
            }
          : undefined
      }
    >
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
              index === backgroundIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={image.position ? { objectPosition: image.position } : undefined}
          />
        ))}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.9),rgba(8,8,8,0.45),rgba(8,8,8,0.9))]" />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-3 text-center sm:px-4 md:px-6 ${minHeightClassName} ${contentClassName}`.trim()}
      >
        <div>
          <h2 className="mb-6 text-3xl font-bold text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)] md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
            {description}
          </p>

          {href && buttonLabel ? (
            <a
              href={href}
              className={`${DEFAULT_BUTTON_CLASSNAME} ${buttonClassName}`.trim()}
            >
              {buttonLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
