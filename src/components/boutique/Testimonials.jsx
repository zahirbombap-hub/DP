export function Testimonials() {
  return (
    <section className="py-32 bg-[#2a2a2a] text-white text-center px-6 overflow-hidden relative" id="perspectivas">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5 parallax-bg">
            <span className="material-symbols-outlined text-[20rem]">format_quote</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-3xl md:text-4xl lg:text-5xl italic font-light leading-snug mb-12">
                "Lex & Co. brinda un nivel de claridad estratégica que es raro en el campo legal. No son solo asesores, sino verdaderos arquitectos del éxito institucional."
            </p>
            <div className="w-12 h-px bg-[#b8860b] mx-auto mb-6"></div>
            <h5 className="uppercase tracking-[0.4em] text-sm text-[#b8860b] font-bold">Alexander Vance</h5>
            <p className="text-xs text-slate-400 mt-2 tracking-widest uppercase">CEO, Global Meridian Corp</p>
        </div>
    </section>
  );
}
