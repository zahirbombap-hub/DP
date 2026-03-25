import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon.jsx";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function useStackProgress(sectionRef, itemCount) {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(media.matches);

    updateMotionPreference();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateMotionPreference);
    } else {
      media.addListener(updateMotionPreference);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", updateMotionPreference);
      } else {
        media.removeListener(updateMotionPreference);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || reducedMotion) {
      return undefined;
    }

    let rafId = 0;

    const update = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const travel = Math.max(rect.height - viewportHeight, 1);
      const scrolled = clamp(-rect.top, 0, travel);
      const nextProgress = (scrolled / travel) * Math.max(itemCount - 1, 1);

      setProgress(nextProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [itemCount, reducedMotion, sectionRef]);

  return { progress, reducedMotion };
}

function StackCard({ item, index, total, progress, reducedMotion }) {
  const distance = index - progress;
  const depth = Math.min(Math.abs(distance), 3);
  const translateY = reducedMotion ? 0 : clamp(distance * 18, -32, 42);
  const scale = reducedMotion ? 1 : 1 - Math.min(depth * 0.05, 0.14);
  const rotate = reducedMotion ? 0 : clamp(distance * -0.55, -2, 2);
  const opacity = reducedMotion ? 1 : index < progress - 0.85 ? 0.78 : 1;
  const zIndex = Math.round(1000 - Math.abs(distance) * 20 - index);
  const shadow =
    distance <= 0.4
      ? "0 24px 80px rgba(0, 0, 0, 0.42)"
      : "0 18px 56px rgba(0, 0, 0, 0.28)";

  return (
    <div className="sticky top-24 sm:top-28">
      <article
        className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0b0b]/95 transition-[transform,opacity,box-shadow,filter] duration-500 ease-out"
        style={{
          zIndex,
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
          opacity,
          boxShadow: shadow,
        }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: item.gradient }} />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent 22%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 28%)",
          }}
        />

        <div className="relative grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
          <div className={`stack-media relative min-h-[260px] sm:min-h-[360px] ${item.reverse ? "lg:order-2" : ""}`}>
            <img
              alt={item.imageAlt}
              className="h-full w-full object-cover"
              decoding="async"
              loading="lazy"
              src={item.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-white/90">
                Caso {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-white/80">
                {item.kicker}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div className="max-w-xs">
                <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/55">
                  Detalle visual
                </p>
                <p className="mt-2 text-lg font-black uppercase leading-[0.95] text-white sm:text-xl">
                  {item.visualCue}
                </p>
              </div>
              <Icon name="workspace_premium" className="text-4xl text-white/85" />
            </div>
          </div>

          <div className={`stack-copy p-6 sm:p-8 lg:p-10 ${item.reverse ? "lg:order-1" : ""}`}>
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.32em] text-white/55">
              <span>{item.tag}</span>
              <span className="h-px w-10 bg-white/20" />
              <span>Scroll Stack</span>
            </div>

            <h3 className="mt-4 text-3xl font-black uppercase leading-[0.92] text-white sm:text-4xl lg:text-5xl">
              {item.title}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base">
              {item.summary}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/45">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {item.problem}
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/45">
                  Solución
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {item.solution}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/68">
              {item.detail}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white/70"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={item.route}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.12]"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                  }
                }}
              >
                Ver caso completo
                <Icon name="trending_flat" className="text-base" />
              </Link>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                {item.kicker}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export function ScrollStack({ items }) {
  const sectionRef = useRef(null);
  const { progress, reducedMotion } = useStackProgress(sectionRef, items.length);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ minHeight: `${Math.max(items.length * 82, 320)}vh` }}
    >
      <div className="space-y-6 sm:space-y-8">
        {items.map((item, index) => (
          <StackCard
            key={item.id}
            item={item}
            index={index}
            total={items.length}
            progress={progress}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </div>
  );
}
