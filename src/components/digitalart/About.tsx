export function About() {
  return (
    <section className="relative py-32 px-6 bg-slate-900/20" id="about">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00ffff]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden border border-[#00ffff]/20 p-2 bg-slate-800/30 backdrop-blur-sm">
            <img alt="Perfil del Artista" className="rounded-xl grayscale hover:grayscale-0 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMqL59gBjpOd2dOTduIjwAmo9Bgq4qqKzlGAcMiBxWzYBJV7ojbaMT5KamuwRKtcmzv2OjmDinfHYOWb_9m37k1QQMkBFCUjf_azPTji2gCHFD-G1nruJDwvy3T9_ZMGVQs31J2SdfWbi_NLYurOO-iJQ73SvX-nyo272zUuLflD3wWrgvj86-jNCdxk4EyWDaopWqkberLO1EpEZFa_-q1b-mKk9kqx9YM3QViFGD0NGLYO_pu-9_7dKH6e_3_n3gk13g4L_QhEc" />
          </div>
          <div className="absolute bottom-[-20px] right-[-20px] w-full h-full border-b border-r border-[#FF00FF]/40 rounded-2xl pointer-events-none"></div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-[#00ffff] font-bold tracking-widest text-sm uppercase mb-4 block">Conoce al Creador</span>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Desafiando los Límites de los Píxeles y la Luz.</h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
            <p>Durante más de una década, he vivido en la intersección de los principios del arte tradicional y la tecnología emergente. Mi trabajo es una meditación sobre nuestra evolución digital.</p>
            <p>Residiendo en el reino virtual, colaboro con estudios y marcas para crear narrativas visuales inmersivas que exigen atención y despiertan curiosidad.</p>
          </div>
          <div className="mt-10 flex gap-12">
            <div>
              <p className="text-3xl font-bold text-white">150+</p>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Proyectos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">12</p>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Premios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}