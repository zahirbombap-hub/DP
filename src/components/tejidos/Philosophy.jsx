export function Philosophy() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#E8E3DA] dark:bg-[#211811]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFDD0] dark:bg-white/5 wool-texture opacity-50 -z-10 rounded-l-full"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <h2 className="text-5xl font-['Playfair_Display',serif] font-medium leading-tight">El Arte Detrás <br />del Tejido</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Cada pieza en Historias Tejidas comienza como lana cruda de origen ético procedente de pequeñas granjas familiares. El catálogo es una invitación a apreciar el tiempo invertido en cada nudo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: "eco", title: "100% Orgánico", desc: "Lana pura sin fibras sintéticas ni tratamientos químicos agresivos." },
                        { icon: "palette", title: "Tintes Naturales", desc: "Colores extraídos de raíces, cortezas y flores para una paleta suave y terrosa." },
                        { icon: "pan_tool", title: "Hecho a Mano", desc: "Cada prenda requiere más de 40 horas de trabajo artesanal calificado." },
                        { icon: "all_inclusive", title: "Moda Lenta", desc: "Diseños atemporales creados para durar toda la vida y más allá." }
                    ].map((item, i) => (
                        <div key={i} className="space-y-3">
                            <span className="material-symbols-outlined text-[#d2691e] text-4xl">{item.icon}</span>
                            <h4 className="font-bold text-xl">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img alt="Manos tejiendo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTxqQTfRw0tn-d9jN8oMT0yZZkzzn_SoIMjKZXt6xeHFC1CK-IrUxIp62j3uhuy-O95vjYKEXlZWpW7gOuabOVNOzvUjQUa-myeofI_mAYnaVt-aF_Lq-wI_EQpAzyWMzRS-5L_pCMdnKkHPuw2WeFxB5KlDMqyFpnk7JxLsLdZVr179JWb5tWvTSsszuXPf7jESXGPJ8yo42Yfw8loLXFOSKHo1TgMhq-gP8Xv9odqr6UYW6tvJ0eYV3WMzmSsd0W9Nb1KjtEwMI" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-[#d2691e] p-8 rounded-2xl text-white max-w-xs shadow-xl wool-texture">
                    <p className="text-2xl font-['Playfair_Display',serif] italic">"No solo creamos prendas; preservamos un legado de vida lenta e intencional."</p>
                    <p className="mt-4 font-bold tracking-widest uppercase text-xs">— Elara, Maestra Artesana</p>
                </div>
            </div>
        </div>
    </section>
  );
}
