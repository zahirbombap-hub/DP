export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center bg-fixed" style={{ backgroundImage: "linear-gradient(to right, rgba(232, 227, 218, 0.8), rgba(232, 227, 218, 0.2)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3IfqSu4cgwLhoKzzQhRL7C46uNWmzsHHEvdzVngWStqYRI9tMFc8c1SxYpNK1CE6eTdzXwroAuGspI9OoBg8-dcUdujyvbvBb9mNAsoPgYYHsaXtyAeE4QxUCz--cs3Efo9yFoOIMsSxmmvwKxUhRVSStWa1EcHJasdhrVoyv0dMzFAVJ24mj9Wu6TKEgkFaxv_l8K3QBI5OTchKecEpfAYCeKuNLF-V_PFHSR4xqZDexFcVlJjj0VjToHp9OSCFbZ4N15UzyUPA')" }}>
            </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl space-y-8">
                <div className="space-y-4">
                    <span className="inline-block px-4 py-1 bg-[#d2691e]/10 text-[#d2691e] rounded-full text-xs font-bold uppercase tracking-widest opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">Un legado en cada hebra</span>
                    <h1 className="text-6xl md:text-8xl font-['Playfair_Display',serif] font-medium leading-tight text-slate-900 dark:text-slate-100 animate-[blurFocus_1.8s_cubic-bezier(0.22,1,0.36,1)_forwards]">
                        Historias Tejidas, <br /> <span className="italic text-[#d2691e]">Vestidas con Amor</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-lg leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
                        Un archivo visual de piezas artesanales creadas con materiales éticos. Una oda a la paciencia y al detalle de la lana pura.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
                    <button className="px-10 py-5 bg-[#d2691e] text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-[#d2691e]/20 transition-all flex items-center gap-2 wool-texture">
                        Descubrir el Oficio
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="px-10 py-5 bg-white dark:bg-white/10 text-slate-900 dark:text-white rounded-full font-bold text-lg border border-[#d2691e]/20 hover:bg-[#d2691e]/5 transition-all">
                        Nuestra Filosofía
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}
