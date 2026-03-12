export function Contact() {
  return (
    <section className="py-32 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-900 to-[#0D0D0D] border border-slate-800 p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">¿Listo para comenzar <br /> tu <span className="text-[#00ffff]">Viaje de Neón?</span></h2>
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">Actualmente aceptando nuevas comisiones y colaboraciones creativas para 2024. Construyamos algo inolvidable.</p>
          <a className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#00ffff] text-[#0D0D0D] font-black tracking-widest hover:scale-105 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] shadow-[0_0_15px_rgba(0,255,255,0.4)]" href="mailto:hola@lienzo.art">
            INICIAR UN PROYECTO
            <span className="material-symbols-outlined">send</span>
          </a>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FF00FF]/20 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
}
