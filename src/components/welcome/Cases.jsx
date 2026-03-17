import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function Cases() {
  const containerRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (container && prevBtn && nextBtn) {
      const getScrollAmount = () => {
        const firstItem = container.querySelector('.snap-center');
        return firstItem ? firstItem.offsetWidth + 32 : 332;
      };

      const scrollLeft = () => container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
      const scrollRight = () => container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });

      prevBtn.addEventListener('click', scrollLeft);
      nextBtn.addEventListener('click', scrollRight);

      return () => {
        prevBtn.removeEventListener('click', scrollLeft);
        nextBtn.removeEventListener('click', scrollRight);
      };
    }
  }, []);

  return (
    <section className="py-2 sm:py-3 mt-4 sm:mt-10 mb-6 sm:mb-10 border-y border-[#8a0012]/30 bg-[#121212]/50 reveal" id="cases-section">
      <div className="px-4 sm:px-6 mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between max-w-screen-2xl mx-auto gap-6">
        <div className="max-w-xl">
          <span className="text-[#8a0012] text-[10px] font-black tracking-[0.3em] uppercase mb-3 block font-['Space_Grotesk',sans-serif]">Archivo 02 / Clientes Seleccionados</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-none text-white font-['Space_Grotesk',sans-serif]">Páginas para Empresas</h2>
        </div>
        <div className="flex gap-3">
          <button ref={prevBtnRef} aria-label="Proyecto Anterior" id="prev-project-btn" className="size-12 border border-[#8a0012]/50 hover:border-[#ff3d4d] flex items-center justify-center transition-all group hover:bg-[#8a0012]/20 text-white">
            <span className="material-symbols-outlined group-active:-translate-x-1 transition-transform">west</span>
          </button>
          <button ref={nextBtnRef} aria-label="Siguiente Proyecto" id="next-project-btn" className="size-12 border border-[#8a0012]/50 hover:border-[#ff3d4d] flex items-center justify-center transition-all group hover:bg-[#8a0012]/20 text-white">
            <span className="material-symbols-outlined group-active:translate-x-1 transition-transform">east</span>
          </button>
        </div>
      </div>
      <div ref={containerRef} id="portfolio-container" className="flex overflow-x-auto gap-8 px-4 sm:px-6 pb-8 snap-x no-scrollbar">
        {[
          {
            href: "/cuerna",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9j28O2DzwEWotdJPcOKU5HAQTB8r_jbfJJhPPclHbqTPhklnlSNunlzETDP_PKhnjCvgo3nITrjFDDg24KXGUoHwtQjcswV5cHsX33U-SWKOdbkGTupbAJ7vSBxFM2s9BaVjw_qM2sKV117BHOLWRLcNhZQ1xL0WIE22inEalXbM8blcz6_zV8N6XulMl8oereXLqs9R6JOQCEsxAKgcx-xc41FYMVwacr4tQfaJE4wFcKFkmFS0YJNHHt94pprt3ybe0EfEYHuQ",
            subtitle: "Cuerna // Gastrobar en Bogotá",
            title: "Gastrobar",
            extraImgClass: "contrast-125 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
          },
          {
            href: "/tattoo-artist",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9j28O2DzwEWotdJPcOKU5HAQTB8r_jbfJJhPPclHbqTPhklnlSNunlzETDP_PKhnjCvgo3nITrjFDDg24KXGUoHwtQjcswV5cHsX33U-SWKOdbkGTupbAJ7vSBxFM2s9BaVjw_qM2sKV117BHOLWRLcNhZQ1xL0WIE22inEalXbM8blcz6_zV8N6XulMl8oereXLqs9R6JOQCEsxAKgcx-xc41FYMVwacr4tQfaJE4wFcKFkmFS0YJNHHt94pprt3ybe0EfEYHuQ",
            subtitle: "Tatuador // Estilo Puntillismo",
            title: "Zona 7 Art Studio",
            extraImgClass: "contrast-125 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
          },
          {
            href: "/shoekos",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9j28O2DzwEWotdJPcOKU5HAQTB8r_jbfJJhPPclHbqTPhklnlSNunlzETDP_PKhnjCvgo3nITrjFDDg24KXGUoHwtQjcswV5cHsX33U-SWKOdbkGTupbAJ7vSBxFM2s9BaVjw_qM2sKV117BHOLWRLcNhZQ1xL0WIE22inEalXbM8blcz6_zV8N6XulMl8oereXLqs9R6JOQCEsxAKgcx-xc41FYMVwacr4tQfaJE4wFcKFkmFS0YJNHHt94pprt3ybe0EfEYHuQ",
              subtitle: "Zapatos en Bogotá",
            title: "Shoeko's",
            extraImgClass: "contrast-125 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
          },
          {
            href: "/agua-linda",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9j28O2DzwEWotdJPcOKU5HAQTB8r_jbfJJhPPclHbqTPhklnlSNunlzETDP_PKhnjCvgo3nITrjFDDg24KXGUoHwtQjcswV5cHsX33U-SWKOdbkGTupbAJ7vSBxFM2s9BaVjw_qM2sKV117BHOLWRLcNhZQ1xL0WIE22inEalXbM8blcz6_zV8N6XulMl8oereXLqs9R6JOQCEsxAKgcx-xc41FYMVwacr4tQfaJE4wFcKFkmFS0YJNHHt94pprt3ybe0EfEYHuQ",
            subtitle: "Distribuidora Agua Linda",
            title: "Agua Linda Villa de Leyva y Sutamarchán",
            extraImgClass: "contrast-125 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
          },
          {
            href: "/handmade-wool",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR0sv13QfjKVJn9zuRXvc1dMMjwHPpnO6U6i5LFH5LZgcIew6cvofMtZ01gSXprrLGGQSKYJxyU-4gmqmW_a0t8Ga_Xrho7UkdepwLVW2aVRWv2BFbo8SQjeQEIyyIn5BYmLO6dP5fAqfX8ylPRGfxCJAISuzWfpeo4fcSMR_Yc6A0gZbUk__vnLojBXB3y167WfvDSNZ6hFqlx8xOgUfOBwFg575sQAGVfopy6W3ksC5dkEZT9kjDbfhH_jhdkXzl7jpcv6hBMOI",
            subtitle: "Diseño de Lana // Calidez Escandinava",
            title: "Historias Tejidas",
            extraImgClass: "sepia-[0.3] brightness-75 group-hover:sepia-0 group-hover:brightness-100"
          },
          {
            href: "/boutique-law-firm",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFAmhj1pvWdS94rqXaHR5JCECEoRVJyVNgwnam69v-LSSBbmF5E1KK4P-yAluR19dTrQJU6V4WgKyQBwXo5VZ16v7Lcl9fwxAp-H6p0qdKWOKt-_iCjZDo32IGPiP0fNRaftLbolpDSsS-IPabCLX8JK7lUFHQWgA_w2CKP0OaG__stgpdBmb3e1hkxTAsMvL1AvM8Fd956BnDblylxoOJWZt4HUxp_yTXtuYfG_TRhQJ2_QwoX9NMJyxm9qb_0tIhwfS3i9rD6vI",
            subtitle: "Boutique Legal // Estética Editorial",
            title: "Lex & Co"
          },
          {
            href: "/digital-artist",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUbCQyVgibhTWY_kXR3IjTTTSu8kYtSf1ZpVSZDOUXnO6UO8dSzJ3gR1qloNk5btJDTuWCz8N4BTPA42R9i1SA3k_m6IgMflPwk4wxEgKpT-XO-mWHOuq72_bzbe3sDk9Fxjm7_sGswgrKNbghYSPX0Gi8wkjNR6n4L4Zj1Kr78aEXyDSXnhBkk0vkrWBdQWsDEyNKXjvjWQ8fpt62u0Hv53RLdZnsxbosfql3vNo07qIjt0zLBJMn7eKKkEa4_Jks3Omxh85udco",
            subtitle: "Artista Digital // Estilo Neón",
            title: "Lienzo Digital",
            extraImgClass: "saturate-150 brightness-75 group-hover:brightness-100"
          },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.href}
            onClick={() => { if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }}
            className="min-w-[300px] md:min-w-[540px] snap-center group"
          >
            <div className="relative aspect-[16/10] overflow-hidden brutal-border neon-glow bg-[#121212]">
              <img alt={`${item.title} - ${item.subtitle}`} className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ${item.extraImgClass || 'grayscale opacity-60 group-hover:opacity-100'}`} src={item.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-[#8a0012] text-[9px] font-black tracking-[0.2em] mb-2 uppercase font-['Space_Grotesk',sans-serif]">{item.subtitle}</p>
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter font-['Space_Grotesk',sans-serif]">{item.title}</h3>
                </div>
                <span className="material-symbols-outlined text-[#ff3d4d] text-3xl group-hover:translate-x-2 transition-transform">trending_flat</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
