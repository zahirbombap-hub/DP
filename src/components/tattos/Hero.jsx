export function Hero() {
  const handleLocationClick = () => {
    const locationSection = document.getElementById('location');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style>{`
        .welcome-subtitle-btn {
          cursor: none !important;
        }
        
        .welcome-subtitle-btn:hover {
          cursor: none !important;
        }
        
        .welcome-subtitle-btn:focus {
          cursor: none !important;
          outline: none;
        }
        
        .welcome-subtitle-btn:active {
          cursor: none !important;
        }
      `}</style>
      
      <section className="relative h-screen supports-[height:100svh]:h-[100svh] min-h-[500px] w-full flex items-end justify-center overflow-hidden bg-slate-50 dark:bg-black pb-[10vh] reveal-on-scroll transition-colors duration-300" data-section="hero">
      <div className="absolute inset-0 z-0 opacity-40">
        <img alt="Background" className="w-full h-full object-cover grayscale brightness-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGMjrtKuVoaYacD2CKcIdu7LRtzMXObU2dE0fVhw6V5bJh17GwMNyDfVl0X5KoHT-Wok9a3e1OSVlmgz6naVtTIZLGJdaHekgAOfcB3dgcAxnQq6kUi5_BSvrXmx-fn3PJbzJyI_6XC5pVnfAFmwxKyeczNXntoxiiaiNwvltyJz7cQnslo8c-mKTQd-Qe2FOkp7rIZcLicWC2BR0ZQpjUK8BlC2qLqnFc0ep_aVkNE_AywlOgNDg7aaX8hq-VpwpQ6dWOqa8gqJs"/>
      </div>
      <div className="absolute inset-0 z-[5] mandala-texture"></div>
      <div className="relative z-20 flex flex-col items-center w-full px-4 text-center">
        <div className="welcome-hero flex flex-col items-center">
          <div className="bg-[#0077BE] dark:bg-[#8a0012] px-5 py-1 inline-block border-2 border-black transform -rotate-1 translate-y-2 relative z-10 welcome-title welcome-title-1 max-w-[90vw] box-border transition-colors duration-300">
            <h1 className="text-[12vw] md:text-[14vw] leading-none font-black uppercase tracking-tighter text-white brutalist-text-shadow break-words">
              ZONA 7
            </h1>
          </div>
          <div className="bg-white px-5 py-2 inline-block border-2 border-black transform rotate-1 relative z-0 welcome-title welcome-title-2 max-w-[90vw] box-border">
            <h1 className="text-[12vw] md:text-[14vw] leading-none font-black uppercase tracking-tighter text-black brutalist-text-shadow-white">
              ART
            </h1>
          </div>
          <div className="relative mt-8 group welcome-subtitle-wrapper">
            <div className="absolute inset-0 bg-[#0077BE] dark:bg-[#8a0012] translate-x-1 translate-y-1 transition-colors duration-300"></div>
            <button 
              onClick={handleLocationClick}
              className="relative bg-white text-black px-6 py-2 text-[10px] font-black uppercase border-2 border-black tracking-widest welcome-subtitle welcome-subtitle-btn transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-0 active:translate-y-0"
              aria-label="Ir a ubicación del estudio"
              title="BOSA / LA INDEPENDENCIA"
            >
              BOSA / LA INDEPENDENCIA
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
