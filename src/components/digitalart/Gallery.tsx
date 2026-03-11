export function Gallery() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20" id="gallery">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">La Bóveda</h2>
          <div className="h-1 w-20 bg-[#00ffff] rounded-full"></div>
        </div>
        <div className="flex flex-wrap items-center gap-4 bg-slate-900/40 p-1 rounded-full border border-slate-800 backdrop-blur-md">
          <button className="px-6 py-2 rounded-full bg-[#00ffff] text-[#0D0D0D] text-sm font-bold transition-all">Todos los Trabajos</button>
          <button className="px-6 py-2 rounded-full text-slate-400 hover:text-white text-sm font-bold transition-all">Cibernético</button>
          <button className="px-6 py-2 rounded-full text-slate-400 hover:text-white text-sm font-bold transition-all">Abstracto</button>
          <button className="px-6 py-2 rounded-full text-slate-400 hover:text-white text-sm font-bold transition-all">Neo-Noir</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfBdm--WxIG7UXMAWt0mASD3plLKJSbv377GawL13uSIXVZ6XIyAH90UV-p_-8YngGHrEAk2IHnD8B2QrLn8drmCvGh4FogFoJ4GhmG2aa30fU97GDkJQSS_OoilVWNKIUpU809rh4g00nRksfZiMsIGcM-4vhOQwOg6MfFvEOpAC7pb3ZjpTAEIXwjVDhiquAEyErO3e7pM0lmSm_OtHc5_in8Prd2WqkursM0ak3nWSRGztUSi_0ZQiwejxQmyi6Dvc3F-GIvJI", cat: "Serie Cibernética", title: "Samurái Neón", desc: "Exploración visual del bushido tradicional en una distopía tecnológica.", color: "text-[#00ffff]" },
          { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm7V11xAwtMLqNAk_UocsjB5VXQoJ04aomqCySSznjdLk9DgDiUW1T1i3mHROQeCLyBUU_a5wCiaNW8AG8eydxuD2yJGs-daosK0xnCMeLUltL91W742UfzzXm7EyFPcXdLCVQqfkJXViAqsVHK-RE7pKgQaYVgIOausF_MA5mYxnKR5Yf569CVeBLGG2eIV5l-vp1l-QVWZ4Hxw_5IIeG4IkXPGiHgxP-p0oQ7r42MqYoOrJIwRZSYP10kfSUK3Ftx-GKZrg281I", cat: "Vacío Abstracto", title: "Sueños Eléctricos", desc: "Un viaje a través del subconsciente utilizando algoritmos generativos.", color: "text-[#FF00FF]", extraClass: "lg:translate-y-12" },
          { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVIkDXYA1zJAzzxfbVWhTsQ-OhHv0tDoJsD2hd8h-FgnSiqDDucMfx-FLe5-cbq9ZbUd3rdiOR9jCsugYUbx0R3-8jmterBTKJtEeb9NoBsL6td3DfWlvPJeCDLy7EWDkp0BOzo1kTJszelLMftdCkT21UIXhxNHWKaeQSSq9dv9fcVQqiaFV4Fwi2-6YvFCQ7h_ro_Jn7dD3mgJ02VhIDYJo5Ym-RqHSN8_rXzgvAoS8kc_VDI0jcl_YFO1aojwMwZVcnYH-CJ2o", cat: "Neo-Noir", title: "Alma Digital", desc: "Capturando el destello de la conciencia en la era de las máquinas.", color: "text-[#00ffff]" }
        ].map((item, i) => (
          <div key={i} className={`group relative bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] aspect-[4/5] hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,255,255,0.15),0_0_20px_rgba(255,0,255,0.1)] ${item.extraClass || ''}`}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${item.img}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className={`${item.color} text-[10px] uppercase tracking-widest font-bold mb-2 block`}>{item.cat}</span>
              <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}