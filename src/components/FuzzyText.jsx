import { useEffect, useState } from "react";

const NOISE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+-";

function createNoise(text) {
  return Array.from(text)
    .map((char) => {
      if (char === " " || char === "\n" || char === "\t") {
        return char;
      }

      const index = Math.floor(Math.random() * NOISE_CHARS.length);
      return NOISE_CHARS[index];
    })
    .join("");
}

function createGlyphStyles(text) {
  return Array.from(text).map(() => ({
    x: `${(Math.random() * 4 - 2).toFixed(2)}px`,
    y: `${(Math.random() * 4 - 2).toFixed(2)}px`,
    rotate: `${(Math.random() * 8 - 4).toFixed(2)}deg`,
    blur: `${(Math.random() * 0.9).toFixed(2)}px`,
    opacity: (0.7 + Math.random() * 0.3).toFixed(2),
  }));
}

export function FuzzyText({
  as: Tag = "span",
  text,
  className = "",
  noiseInterval = 55,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const [glyphStyles, setGlyphStyles] = useState(() => createGlyphStyles(text));

  useEffect(() => {
    setDisplayText(text);
    setGlyphStyles(createGlyphStyles(text));
  }, [text]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    if (!isHovered || prefersReducedMotion) {
      setDisplayText(text);
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setDisplayText(createNoise(text));
      setGlyphStyles(createGlyphStyles(text));
    }, noiseInterval);

    return () => window.clearInterval(intervalId);
  }, [isHovered, prefersReducedMotion, text, noiseInterval]);

  return (
    <Tag
      aria-label={text}
      className={className}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex">
        {Array.from(displayText).map((char, index) => {
          const style = glyphStyles[index] || glyphStyles[0] || {};

          return (
            <span
              key={`${index}-${text[index] ?? char}`}
              className="inline-block"
              style={{
                transform: isHovered
                  ? `translate(${style.x}, ${style.y}) rotate(${style.rotate})`
                  : "translate(0px, 0px) rotate(0deg)",
                filter: isHovered ? `blur(${style.blur})` : "none",
                opacity: isHovered ? style.opacity : 1,
                textShadow: isHovered
                  ? "0 0 14px rgba(255, 61, 77, 0.45)"
                  : "none",
                transition:
                  "transform 120ms linear, filter 120ms linear, opacity 120ms linear, text-shadow 120ms linear",
                willChange: "transform, filter, opacity",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
