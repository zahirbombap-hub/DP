import { useState } from "react";
import { Icon } from "../Icon.jsx";

export function ProductShowcase() {
  const [isRefill, setIsRefill] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-20 md:pt-24 pb-8 px-4 md:px-6 overflow-hidden snap-start" id="el-rey">
      <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay loop muted playsInline>
        <source src="/multimedia/gotas.mp4" type="video/mp4" />
      </video>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          <div className="flex flex-col gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-['Outfit',sans-serif] text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white">El Rey de la Casa</h2>
              <p className="text-slate-200 max-w-xl mx-auto lg:mx-0 bg-black/30 backdrop-blur-sm p-4 rounded-xl">
                Nuestro botellÃ³n de 20L es la opciÃ³n favorita de las familias en la regiÃ³n. Elige tu opciÃ³n y comprueba
                nuestra calidad.
              </p>
            </div>
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-[#0077BE]/10 rounded-full blur-3xl group-hover:bg-[#0077BE]/20 transition-all"></div>
              <div className="relative transition-all duration-700 transform group-hover:scale-105">
                <img
                  alt="BotellÃ³n Agua Linda 20L"
                  className="h-[220px] sm:h-[320px] lg:h-[480px] w-auto drop-shadow-2xl object-contain brightness-95 contrast-105 mx-auto"
                  decoding="async"
                  fetchPriority="high"
                  loading="eager"
                  src="/multimedia/agua-scaled.webp"
                />
                <div
                  className={`absolute top-10 md:top-20 right-0 transition-all duration-500 pointer-events-none ${isRefill ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-12"}`}
                >
                  <div className="bg-green-500 text-white p-3 md:p-4 rounded-full shadow-xl border-4 border-white dark:border-slate-900 flex flex-col items-center justify-center text-center w-24 h-24 md:w-32 md:h-32">
                    <Icon name="verified" className="text-3xl" />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none mt-1">GarantÃ­a de Calidad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="backdrop-blur-md bg-white/70 dark:bg-[#0F172A]/70 p-5 md:p-8 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
              <div className="flex items-center justify-between mb-5 md:mb-8">
                <span className="font-['Outfit',sans-serif] text-xl md:text-2xl font-bold text-slate-800 dark:text-white">BotellÃ³n 20L</span>
                <div className="bg-[#0077BE]/10 text-[#0077BE] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">MÃ¡s Vendido</div>
              </div>
              <div className="flex bg-slate-100 dark:bg-black/40 p-1.5 rounded-2xl mb-5 md:mb-8 transition-colors duration-300">
                <button
                  className={`flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all ${!isRefill ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
                  onClick={() => setIsRefill(false)}
                >
                  Nuevo BotellÃ³n
                </button>
                <button
                  className={`flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all ${isRefill ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
                  onClick={() => setIsRefill(true)}
                >
                  Recarga (Refill)
                </button>
              </div>
              <div className="mb-6 md:mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-500 dark:text-slate-300 text-lg">$</span>
                  <span className="text-4xl md:text-5xl font-black transition-all text-slate-800 dark:text-white">
                    {isRefill ? "9.000" : "15.000"}
                  </span>
                  <span className="text-slate-500 dark:text-slate-300 font-medium">COP</span>
                </div>
                <p className="text-sm text-slate-400 mt-2">EnvÃ­o incluido en Villa de Leyva y SutamarchÃ¡n.</p>
              </div>
              <ul className="space-y-2 md:space-y-4 mb-6 md:mb-10">
                {["PurificaciÃ³n por Osmosis Inversa", "pH Balanceado (7.2)", "Registro INVIMA Vigente"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-slate-600 dark:text-slate-200">
                    <Icon name="check_circle" className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#0077BE] py-4 rounded-2xl text-white font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#0077BE]/20">
                AÃ±adir al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
