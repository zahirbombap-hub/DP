import { useEffect } from "react";

export default function CodeTattoo2() {
  useEffect(() => {
    // Set dark mode
    document.documentElement.classList.add('dark');

    // Parallax scroll effect
    const handleScroll = () => {
        const scrolled = window.pageYOffset;
        document.body.style.setProperty('--scroll-y', scrolled + 'px');
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        document.documentElement.classList.remove('dark');
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
        .marker-font { font-family: 'Permanent Marker', cursive; }
        .halftone-bg {
            background-image: radial-gradient(circle, #333 1px, transparent 1px);
            background-size: 4px 4px;
        }
        .grain-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: url('https://www.transparenttextures.com/patterns/film-grain.png');
            pointer-events: none;
            opacity: 0.15;
            z-index: 50;
        }
        .sawtooth-edge {
            clip-path: polygon(0% 0%, 5% 1%, 10% 0%, 15% 1%, 20% 0%, 25% 1%, 30% 0%, 35% 1%, 40% 0%, 45% 1%, 50% 0%, 55% 1%, 60% 0%, 65% 1%, 70% 0%, 75% 1%, 80% 0%, 85% 1%, 90% 0%, 95% 1%, 100% 0%, 100% 99%, 95% 100%, 90% 99%, 85% 100%, 80% 99%, 75% 100%, 70% 99%, 65% 100%, 60% 99%, 55% 100%, 50% 99%, 45% 100%, 40% 99%, 35% 100%, 30% 99%, 25% 100%, 20% 99%, 15% 100%, 10% 99%, 5% 100%, 0% 99%);
        }
        .stamped-btn {
            border: 2px solid #ff0000;
            color: #ff0000;
            text-transform: uppercase;
            font-weight: 900;
            transition: all 0.2s;
            position: relative;
        }
        .stamped-btn:hover {
            background: #ff0000;
            color: black;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
        }
        .gallery-item {
            position: relative;
            overflow: hidden;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 10;
        }
        .gallery-item img {
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }
        .gallery-item::after {
            content: '';
            position: absolute;
            inset: 0;
            background: rgba(255, 0, 0, 0);
            transition: all 0.6s ease;
            pointer-events: none;
            mix-blend-mode: multiply;
            z-index: 2;
        }
        .gallery-item:hover {
            z-index: 20;
            transform: scale(1.05) !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
        }
        .gallery-item:hover img {
            transform: scale(1.1);
            filter: grayscale(0%) brightness(1.1) contrast(1.1);
        }
        .gallery-item:hover::after {
            background: rgba(255, 0, 0, 0.3);
        }
        .sticker-nav {
            background: white;
            color: black;
            padding: 4px 16px;
            font-weight: 800;
            border: 2px solid black;
            box-shadow: 3px 3px 0px #ff0000;
        }
        .dynamic-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-flow: dense;
            gap: 8px;
        }
        .grid-span-2 {
            grid-column: span 2;
            grid-row: span 2;
        }
    `}</style>
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
      <script dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ff0000",
                        "background-light": "#f8f5f5",
                        "background-dark": "#000000",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"]
                    },
                    animation: {
                        'slide-up-hero': 'slideUpHero 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards',
                    },
                    keyframes: {
                        slideUpHero: {
                            '0%': { transform: 'translateY(120%)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' },
                        }
                    }
                },
            },
        }
      `}} />
      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white overflow-x-hidden">
        <div className="grain-overlay"></div>
        <nav className="fixed top-0 w-full z-40 px-6 py-6 pointer-events-none">
          <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">
            <div className="sticker-nav text-xl tracking-tighter uppercase">
              TINTA &amp; PUNTILLISMO
            </div>
            <div className="flex gap-2">
              <a className="bg-primary text-white px-4 py-1 font-bold border-2 border-black text-sm uppercase" href="#work">PORTAFOLIO</a>
              <a className="bg-white text-black px-4 py-1 font-bold border-2 border-black text-sm uppercase" href="#booking">RESERVAS</a>
            </div>
          </div>
        </nav>
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <img alt="" className="w-full h-full object-cover grayscale brightness-50 scale-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGMjrtKuVoaYacD2CKcIdu7LRtzMXObU2dE0fVhw6V5bJh17GwMNyDfVl0X5KoHT-Wok9a3e1OSVlmgz6naVtTIZLGJdaHekgAOfcB3dgcAxnQq6kUi5_BSvrXmx-fn3PJbzJyI_6XC5pVnfAFmwxKyeczNXntoxiiaiNwvltyJz7cQnslo8c-mKTQd-Qe2FOkp7rIZcLicWC2BR0ZQpjUK8BlC2qLqnFc0ep_aVkNE_AywlOgNDg7aaX8hq-VpwpQ6dWOqa8gqJs" style={{ transform: 'translateY(calc(var(--scroll-y, 0) * 0.4px))' }}/>
          </div>
          <div className="relative z-20 text-center px-4">
            <div className="overflow-hidden">
              <h1 className="animate-slide-up-hero text-[13vw] leading-[0.85] font-black uppercase tracking-tighter text-white drop-shadow-[8px_8px_0px_#ff0000]">
                TINTA &amp;<br/>PUNTILLISMO
              </h1>
            </div>
            <div className="inline-block bg-primary text-white px-6 py-2 text-2xl font-bold uppercase -rotate-1 mt-8">
              Dotwork / Blackout / Brutalismo
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-black" id="work">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-4 border-b border-slate-900 pb-4">
              <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-none">ÚLTIMAS<br/><span className="text-primary">CICATRICES</span></h2>
              <span className="text-slate-600 font-mono text-xs uppercase">[ARCHIVO_DINAMICO_V1 // HIGH_DENSITY_GRID]</span>
            </div>
            <div className="dynamic-grid">
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 01" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xBnO_j9fdK0bh_RgOky_1hDLXK76ObY4IL6BupDtZ5RF-gOhRownKI4t9wP3q9dhjX7jLp9SevxSdsI8PsXG0VH6SVFTY9nKyMhGFtpkDHn54VUNM0k6GpYV17qCPZY5Dlz2blho6QXTme03jbDfxam28UlibjPa1lK-hH4qSl99ncZiVW9CBYtHd8kNaJjkeLHmKCXL0mtBGxQjWgsLf4jDEUh9Ec3YoVw3syu3W1Y5qjyfAr5QNjBnCBAAemtj2U6jqp18Kd8"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900 grid-span-2">
                <img alt="Work 02" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc-VY2x2lW71MpwJR290O_exCoAfkfl2tMM_xbPsP3MJ9H2ZuoC4ggScbgTSV0R07aq1hxofCNzLG7Z3k7k2Z15x2dD26R0ENvEUeWm6sBrxmPRhqHBSp4-oeLKb_5o5KcFg7igvvlnjPC4PvroIxpsD0qAk5pTNhBhkJv9W75VZRegYGCDdldTXaHzftqpISZ8lzVNIpuRd_Ce_lBANy4g1ts1O-Je5tFz2VdlbpKabJ9vzck9kKZ2O5nBovc_QwdyuR0Zyi4x1A"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 03" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHG9bAV9SCdq8BNm9xyYtSQpfndAvwIkivanUenNG8XpOw3fguzETMLLKMs4PWLdeTrUB0UL0cpHWVQjySsdQuxPgnbEY9-RyKeWqxwotgfh2MQc9njuaMoA56OFVlGeMSheTVdUhD06EFcAmRNcVnOVxvlYYqTHrP6jvLbpK8f04xyzD4n6daTWHNjr2hZh6sBvSd9UuKa5UhmVMEYXczeTwlShzhiF-5rWWqfZm6xND7pzwLVVxwx-p25TdhKAsHdtMU1_TpbXI"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 04" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xBnO_j9fdK0bh_RgOky_1hDLXK76ObY4IL6BupDtZ5RF-gOhRownKI4t9wP3q9dhjX7jLp9SevxSdsI8PsXG0VH6SVFTY9nKyMhGFtpkDHn54VUNM0k6GpYV17qCPZY5Dlz2blho6QXTme03jbDfxam28UlibjPa1lK-hH4qSl99ncZiVW9CBYtHd8kNaJjkeLHmKCXL0mtBGxQjWgsLf4jDEUh9Ec3YoVw3syu3W1Y5qjyfAr5QNjBnCBAAemtj2U6jqp18Kd8"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 05" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHG9bAV9SCdq8BNm9xyYtSQpfndAvwIkivanUenNG8XpOw3fguzETMLLKMs4PWLdeTrUB0UL0cpHWVQjySsdQuxPgnbEY9-RyKeWqxwotgfh2MQc9njuaMoA56OFVlGeMSheTVdUhD06EFcAmRNcVnOVxvlYYqTHrP6jvLbpK8f04xyzD4n6daTWHNjr2hZh6sBvSd9UuKa5UhmVMEYXczeTwlShzhiF-5rWWqfZm6xND7pzwLVVxwx-p25TdhKAsHdtMU1_TpbXI"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 06" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc-VY2x2lW71MpwJR290O_exCoAfkfl2tMM_xbPsP3MJ9H2ZuoC4ggScbgTSV0R07aq1hxofCNzLG7Z3k7k2Z15x2dD26R0ENvEUeWm6sBrxmPRhqHBSp4-oeLKb_5o5KcFg7igvvlnjPC4PvroIxpsD0qAk5pTNhBhkJv9W75VZRegYGCDdldTXaHzftqpISZ8lzVNIpuRd_Ce_lBANy4g1ts1O-Je5tFz2VdlbpKabJ9vzck9kKZ2O5nBovc_QwdyuR0Zyi4x1A"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 07" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xBnO_j9fdK0bh_RgOky_1hDLXK76ObY4IL6BupDtZ5RF-gOhRownKI4t9wP3q9dhjX7jLp9SevxSdsI8PsXG0VH6SVFTY9nKyMhGFtpkDHn54VUNM0k6GpYV17qCPZY5Dlz2blho6QXTme03jbDfxam28UlibjPa1lK-hH4qSl99ncZiVW9CBYtHd8kNaJjkeLHmKCXL0mtBGxQjWgsLf4jDEUh9Ec3YoVw3syu3W1Y5qjyfAr5QNjBnCBAAemtj2U6jqp18Kd8"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900 grid-span-2">
                <img alt="Work 08" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc-VY2x2lW71MpwJR290O_exCoAfkfl2tMM_xbPsP3MJ9H2ZuoC4ggScbgTSV0R07aq1hxofCNzLG7Z3k7k2Z15x2dD26R0ENvEUeWm6sBrxmPRhqHBSp4-oeLKb_5o5KcFg7igvvlnjPC4PvroIxpsD0qAk5pTNhBhkJv9W75VZRegYGCDdldTXaHzftqpISZ8lzVNIpuRd_Ce_lBANy4g1ts1O-Je5tFz2VdlbpKabJ9vzck9kKZ2O5nBovc_QwdyuR0Zyi4x1A"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 09" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHG9bAV9SCdq8BNm9xyYtSQpfndAvwIkivanUenNG8XpOw3fguzETMLLKMs4PWLdeTrUB0UL0cpHWVQjySsdQuxPgnbEY9-RyKeWqxwotgfh2MQc9njuaMoA56OFVlGeMSheTVdUhD06EFcAmRNcVnOVxvlYYqTHrP6jvLbpK8f04xyzD4n6daTWHNjr2hZh6sBvSd9UuKa5UhmVMEYXczeTwlShzhiF-5rWWqfZm6xND7pzwLVVxwx-p25TdhKAsHdtMU1_TpbXI"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 10" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xBnO_j9fdK0bh_RgOky_1hDLXK76ObY4IL6BupDtZ5RF-gOhRownKI4t9wP3q9dhjX7jLp9SevxSdsI8PsXG0VH6SVFTY9nKyMhGFtpkDHn54VUNM0k6GpYV17qCPZY5Dlz2blho6QXTme03jbDfxam28UlibjPa1lK-hH4qSl99ncZiVW9CBYtHd8kNaJjkeLHmKCXL0mtBGxQjWgsLf4jDEUh9Ec3YoVw3syu3W1Y5qjyfAr5QNjBnCBAAemtj2U6jqp18Kd8"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 11" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHG9bAV9SCdq8BNm9xyYtSQpfndAvwIkivanUenNG8XpOw3fguzETMLLKMs4PWLdeTrUB0UL0cpHWVQjySsdQuxPgnbEY9-RyKeWqxwotgfh2MQc9njuaMoA56OFVlGeMSheTVdUhD06EFcAmRNcVnOVxvlYYqTHrP6jvLbpK8f04xyzD4n6daTWHNjr2hZh6sBvSd9UuKa5UhmVMEYXczeTwlShzhiF-5rWWqfZm6xND7pzwLVVxwx-p25TdhKAsHdtMU1_TpbXI"/>
              </div>
              <div className="gallery-item sawtooth-edge bg-slate-900">
                <img alt="Work 12" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc-VY2x2lW71MpwJR290O_exCoAfkfl2tMM_xbPsP3MJ9H2ZuoC4ggScbgTSV0R07aq1hxofCNzLG7Z3k7k2Z15x2dD26R0ENvEUeWm6sBrxmPRhqHBSp4-oeLKb_5o5KcFg7igvvlnjPC4PvroIxpsD0qAk5pTNhBhkJv9W75VZRegYGCDdldTXaHzftqpISZ8lzVNIpuRd_Ce_lBANy4g1ts1O-Je5tFz2VdlbpKabJ9vzck9kKZ2O5nBovc_QwdyuR0Zyi4x1A"/>
              </div>
            </div>
            <div className="mt-16 text-center">
              <button className="stamped-btn px-12 py-4 text-xl tracking-tighter">EXPLORAR ARCHIVOS COMPLETOS</button>
            </div>
          </div>
        </section>
        <section className="py-24 px-6 relative" id="booking">
          <div className="max-w-2xl mx-auto bg-slate-100 p-8 md:p-12 text-black relative sawtooth-edge">
            <div className="absolute top-4 right-8 halftone-bg w-24 h-24 opacity-20"></div>
            <div className="mb-10 border-b-4 border-black pb-4 text-center">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter">RESERVAR CITA</h2>
              <p className="text-[10px] font-mono uppercase mt-2 opacity-60">PROYECTOS RADICALES / BLACKWORK SOLAMENTE</p>
            </div>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-black uppercase text-[10px] tracking-widest">NOMBRE</label>
                  <input className="bg-transparent border-0 border-b-2 border-black focus:ring-0 focus:border-primary placeholder:text-slate-400 uppercase font-mono text-sm" placeholder="NOMBRE COMPLETO" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-black uppercase text-[10px] tracking-widest">CONTACTO</label>
                  <input className="bg-transparent border-0 border-b-2 border-black focus:ring-0 focus:border-primary placeholder:text-slate-400 uppercase font-mono text-sm" placeholder="EMAIL O INSTAGRAM" type="text"/>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-black uppercase text-[10px] tracking-widest">ZONA DEL CUERPO Y TAMAÑO</label>
                <input className="bg-transparent border-0 border-b-2 border-black focus:ring-0 focus:border-primary placeholder:text-slate-400 uppercase font-mono text-sm" placeholder="EJ: BRAZO COMPLETO" type="text"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-black uppercase text-[10px] tracking-widest">CONCEPTO</label>
                <textarea className="bg-transparent border-0 border-b-2 border-black focus:ring-0 focus:border-primary placeholder:text-slate-400 uppercase font-mono resize-none text-sm" placeholder="BREVE DESCRIPCIÓN DE LA IDEA..." rows={3}></textarea>
              </div>
              <div className="py-4 border-y border-slate-300">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input className="rounded-none border-2 border-black text-primary focus:ring-0 w-4 h-4" type="checkbox"/>
                  <span className="font-bold text-[10px] uppercase">SOY MAYOR DE EDAD Y ACEPTO LAS CONDICIONES.</span>
                </label>
              </div>
              <button className="bg-black text-white py-4 text-2xl font-black uppercase hover:bg-primary transition-colors flex items-center justify-center gap-4 group" type="submit">
                SOLICITAR SESIÓN
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">bolt</span>
              </button>
            </form>
          </div>
        </section>
        <section className="py-24 px-6 relative overflow-hidden bg-background-dark border-t border-slate-900" id="manifiesto">
          <div className="absolute -top-20 -right-20 text-primary opacity-5 text-[20rem] font-black select-none pointer-events-none uppercase">PUNTO</div>
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2">
                <h2 className="text-5xl font-black uppercase mb-6 underline decoration-primary decoration-8 underline-offset-8">MANIFIESTO</h2>
                <p className="text-xl leading-relaxed text-slate-400">
                  En "Tinta &amp; Puntillismo" el error es parte del diseño. No buscamos la perfección estéril del tatuaje comercial. Buscamos la <span className="text-white font-bold">vibración cruda</span> del negro puro y la densidad del puntillismo manual. Cada pieza es un diálogo entre la piel y la obsesión por el contraste absoluto.
                </p>
              </div>
              <div className="w-full md:w-1/2 halftone-bg p-8 border-4 border-slate-800 rotate-2">
                <p className="font-mono text-sm uppercase tracking-tighter text-slate-300">
                  [ARCHIVO_PUNTILLISMO: 2024]<br/>
                  ESTILO: DOTWORK RADICAL<br/>
                  FILOSOFÍA: ALTO CONTRASTE<br/>
                  ORIGEN: CALLES Y SUBTERRÁNEO<br/>
                  -------------------------<br/>
                  SOLO TRABAJAMOS CON NEGRO. SIN GRISES. SIN COMPROMISOS. LA PIEL ES EL LIENZO PARA EL CAOS CONTROLADO.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-12 px-6 border-t border-slate-900 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="size-12 bg-primary flex items-center justify-center -rotate-6 shadow-[3px_3px_0px_white]">
                <span className="material-symbols-outlined text-white text-3xl">skull</span>
              </div>
              <div>
                <h4 className="font-black uppercase text-xl text-white">TINTA &amp; PUNTILLISMO</h4>
                <p className="text-xs text-slate-500 font-mono">ESTUDIO PRIVADO // MADRID</p>
              </div>
            </div>
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
              <a className="hover:text-primary transition-colors" href="#">Instagram</a>
              <a className="hover:text-primary transition-colors" href="#">Galería</a>
              <a className="hover:text-primary transition-colors" href="#">Contacto</a>
            </div>
            <div className="text-[10px] font-mono text-slate-700 uppercase">
              © 2024 TINTA &amp; PUNTILLISMO. ESTÉTICA RADICAL.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
