import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../Icon.jsx";

function CaseCard({ item }) {
  const videoRef = useRef(null);

  const seekVideoToEndSafely = () => {
    const video = videoRef.current;

    if (!video || !item.video) {
      return;
    }

    const { duration } = video;

    if (Number.isFinite(duration) && duration > 0) {
      video.currentTime = duration;
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current && item.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && item.video) {
      videoRef.current.pause();
      seekVideoToEndSafely();
    }
  };

  const handleVideoLoadedMetadata = () => {
    seekVideoToEndSafely();
  };

  return (
    <Link
      to={item.href}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      }}
      className="group min-w-[300px] snap-center md:min-w-[540px]"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden brutal-border neon-glow bg-[#121212]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {item.video ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            preload="auto"
            onLoadedMetadata={handleVideoLoadedMetadata}
            onEnded={() => {
              seekVideoToEndSafely();
            }}
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ) : (
          <img
            alt={`${item.title} - ${item.subtitle}`}
            className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ${item.extraImgClass || "grayscale opacity-60 group-hover:opacity-100"}`}
            decoding="async"
            loading="lazy"
            src={item.img}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505]/85 via-[#050505]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex items-end justify-between gap-4 px-1 pt-4">
        <div className="min-w-0">
          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#8a0012] font-['Space_Grotesk',sans-serif] sm:text-[10px]">
            {item.subtitle}
          </p>
          <h3 className="text-xl font-black uppercase italic tracking-tighter text-white font-['Space_Grotesk',sans-serif] sm:text-2xl">
            {item.title}
          </h3>
        </div>
        <Icon
          name="trending_flat"
          className="shrink-0 text-3xl text-[#ff3d4d] transition-transform group-hover:translate-x-2"
        />
      </div>
    </Link>
  );
}

export function Cases() {
  const containerRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (!container || !prevBtn || !nextBtn) {
      return undefined;
    }

    const getScrollAmount = () => {
      const firstItem = container.querySelector(".snap-center");
      return firstItem ? firstItem.offsetWidth + 32 : 332;
    };

    const scrollLeft = () => container.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    const scrollRight = () => container.scrollBy({ left: getScrollAmount(), behavior: "smooth" });

    prevBtn.addEventListener("click", scrollLeft);
    nextBtn.addEventListener("click", scrollRight);

    return () => {
      prevBtn.removeEventListener("click", scrollLeft);
      nextBtn.removeEventListener("click", scrollRight);
    };
  }, []);

  return (
    <section className="welcome-scroll-section py-2 sm:py-3 mt-4 sm:mt-10 mb-6 sm:mb-10 border-y border-[#8a0012]/30 bg-[#121212]/50 reveal" id="cases-section">
      <div className="px-4 sm:px-6 mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between max-w-screen-2xl mx-auto gap-6">
        <div className="max-w-xl">
          <span className="text-[#8a0012] text-[10px] font-black tracking-[0.3em] uppercase mb-3 block font-['Space_Grotesk',sans-serif]">
            Archivo 02 / Nuestros clientes
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-none text-white font-['Space_Grotesk',sans-serif]">
            Páginas para Empresas
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <Link
            to="/paginas"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ff3d4d]/40 bg-[#ff3d4d] px-5 py-3 text-[10px] font-black uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff5664] hover:border-[#ff5664] shadow-[0_14px_32px_rgba(255,61,77,0.18)]"
          >
            Ver más
            <Icon name="trending_flat" className="text-base" />
          </Link>

          <div className="flex gap-3">
            <button
              ref={prevBtnRef}
              aria-label="Proyecto Anterior"
              id="prev-project-btn"
              className="size-12 border border-[#8a0012]/50 hover:border-[#ff3d4d] flex items-center justify-center transition-all group hover:bg-[#8a0012]/20 text-white"
            >
              <Icon name="west" className="group-active:-translate-x-1 transition-transform" />
            </button>
            <button
              ref={nextBtnRef}
              aria-label="Siguiente Proyecto"
              id="next-project-btn"
              className="size-12 border border-[#8a0012]/50 hover:border-[#ff3d4d] flex items-center justify-center transition-all group hover:bg-[#8a0012]/20 text-white"
            >
              <Icon name="east" className="group-active:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div ref={containerRef} id="portfolio-container" className="flex overflow-x-auto gap-8 px-4 sm:px-6 pb-8 snap-x no-scrollbar">
        {[
          {
            href: "/cuerna",
            img: "",
            subtitle: "Cuerna // Gastrobar en Bogotá",
            title: "Gastrobar",
            video: "/multimedia/cuerna/previsualizerCuerna.webm",
            extraImgClass: "contrast-125 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100",
          },
          {
            href: "/tattoo-artist",
            img: "/multimedia/FotosTattosLopez/pre-tattos.png",
            subtitle: "Tatuador // Estilo Puntillismo",
            title: "Zona 7 Art Studio",
            extraImgClass: "sepia-[0.3] brightness-75 group-hover:sepia-0 group-hover:brightness-100",
          },
          {
            href: "/agua-linda",
            img: "/multimedia/agua-linda/pre-agualinda.png",
            subtitle: "Distribuidora Agua Linda",
            title: "Agua Linda Villa de Leyva y Sutamarchán",
            extraImgClass: "sepia-[0.3] brightness-75 group-hover:sepia-0 group-hover:brightness-100",
          },
          {
            href: "/handmade-wool",
            img: "/multimedia/Yuga/Previsualizer yuga.png",
            subtitle: "Diseño de Lana // Calidez Escandinava",
            title: "Historias Tejidas",
            extraImgClass: "sepia-[0.3] brightness-75 group-hover:sepia-0 group-hover:brightness-100",
          },
        ].map((item, index) => (
          <CaseCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
