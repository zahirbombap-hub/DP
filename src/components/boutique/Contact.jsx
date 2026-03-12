export function Contact() {
  return (
    <section className="py-32 px-6 bg-[#f8f7f2]" id="consulta">
        <div className="max-w-7xl mx-auto border border-[#b8860b]/20 rounded-xl p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
                <h2 className="text-5xl mb-8">Inicie su Consulta</h2>
                <p className="text-xl text-[#2a2a2a]/60 mb-8 font-light">
                    Discreto, profesional y totalmente enfocado en su éxito. Esperamos con interés discutir sus necesidades legales.
                </p>
                <div className="flex items-center gap-4 text-[#2a2a2a]/80">
                    <span className="material-symbols-outlined text-[#b8860b]">mail</span>
                    <span>inquiries@lexandco.law</span>
                </div>
            </div>
            <div className="lg:w-1/2 w-full">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input className="w-full bg-transparent border-b border-[#b8860b]/20 focus:border-[#b8860b] focus:ring-0 py-3 text-lg placeholder:text-[#2a2a2a]/30 outline-none" placeholder="Nombre Completo" type="text" />
                        <input className="w-full bg-transparent border-b border-[#b8860b]/20 focus:border-[#b8860b] focus:ring-0 py-3 text-lg placeholder:text-[#2a2a2a]/30 outline-none" placeholder="Correo Electrónico" type="email" />
                    </div>
                    <textarea className="w-full bg-transparent border-b border-[#b8860b]/20 focus:border-[#b8860b] focus:ring-0 py-3 text-lg placeholder:text-[#2a2a2a]/30 resize-none outline-none" placeholder="Cuéntenos sobre su caso" rows={4}></textarea>
                    <button className="w-full bg-[#b8860b] text-white py-5 rounded-lg font-bold tracking-widest uppercase hover:bg-[#b8860b]/90 transition-all shadow-lg shadow-[#b8860b]/20">
                        Solicitar Consulta Segura
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
}
