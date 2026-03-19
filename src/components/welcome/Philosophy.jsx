export function Philosophy() {
  return (
    <section className="py-24 bg-[#FFFDD0] dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-['Playfair_Display',serif] font-medium leading-tight">El Arte Detrás <br />del Tejido</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            En Historias Tejidas, cada hilo es seleccionado con la misma precisión con la que se diseña una interfaz rápida:
            sin ruido, sin desperdicio y con un objetivo claro.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Trazos precisos", text: "Patrones que sostienen la forma sin fricción." },
              { title: "Textura natural", text: "Capas suaves con una cadencia visual lenta." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/70 dark:bg-black/20 p-4 border border-[#d2691e]/10">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
            <img
              alt="Manos tejiendo"
              className="w-full h-full object-cover wool-card-image"
              decoding="async"
              loading="lazy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTxqQTfRw0tn-d9jN8oMT0yZZkzzn_SoIMjKZXt6xeHFC1CK-IrUxIp62j3uhuy-O95vjYKEXlZWpW7gOuabOVNOzvUjQUa-myeofI_mAYnaVt-aF_Lq-wI_EQpAzyWMzRS-5L_pCMdnKkHPuw2WeFxB5KlDMqyFpnk7JxLsLdZVr179JWb5tWvTSsszuXPf7jESXGPJ8yo42Yfw8loLXFOSKHo1TgMhq-gP8Xv9odqr6UYW6tvJ0eYV3WMzmSsd0W9Nb1KjtEwMI"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-[#d2691e] p-8 rounded-2xl text-white max-w-xs shadow-xl wool-texture wool-card">
            <p className="text-2xl font-['Playfair_Display',serif] italic">"No solo creamos prendas; preservamos un legado de vida lenta e intencional."</p>
            <p className="mt-4 font-bold tracking-widest uppercase text-xs">— Elara, Maestra Artesana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
