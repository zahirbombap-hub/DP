import { Icon } from "../Icon.jsx";

export function HowItWorks() {
  return (
    <section className="py-3 sm:py-3 px-4 sm:px-6 max-w-screen-2xl mx-auto reveal" id="how-it-works">
      <div className="max-w-4xl">
        <span className="text-[#ff3d4d] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block font-['Space_Grotesk',sans-serif]">
          Procesos
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter italic leading-[0.9] text-white font-['Space_Grotesk',sans-serif]">
          Diseño, desarrollo y despliegue con tecnología de vanguardia
        </h2>
        <p className="mt-6 text-[#a1a1aa] text-base sm:text-lg font-light leading-relaxed font-['Space_Grotesk',sans-serif]">
          Creamos experiencias digitales que impactan desde el primer segundo. Nuestro flujo combina creatividad humana con
          herramientas de inteligencia artificial como Stitch de Google, Antigravity, Figma, GPT Codex y Gemmini 3 para crear
          interfaces modernas, visualmente memorables y optimizadas para atraer clientes.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Diseño estratégico",
            text: "Prototipos visuales y estilos personalizados alineados con la identidad del negocio. Interfaces impactantes diseñadas para captar atención y generar confianza.",
            icon: "auto_awesome",
          },
          {
            title: "Desarrollo profesional",
            text: "Código limpio, estructuras escalables y buenas prácticas de ingeniería. Control de versiones con Git y arquitecturas pensadas para crecer con tu negocio.",
            icon: "code",
          },
          {
            title: "Lanzamiento optimizado",
            text: "Despliegue seguro, optimización de rendimiento y monitoreo inicial para asegurar que tu producto funcione rápido, estable y listo para atraer clientes.",
            icon: "rocket_launch",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="reveal rounded-2xl border border-[#8a0012]/30 bg-[#121212] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff3d4d]/60 hover:shadow-[0_18px_40px_rgba(255,61,77,0.2)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="size-11 rounded-full bg-[#8a0012]/15 border border-[#8a0012]/40 flex items-center justify-center">
                <Icon name={step.icon} className="text-[#ff3d4d] text-xl" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white font-['Space_Grotesk',sans-serif]">
                {step.title}
              </h3>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed font-['Space_Grotesk',sans-serif]">{step.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-[#a1a1aa] text-sm sm:text-base font-['JetBrains_Mono',monospace] uppercase tracking-widest">
        Calidad, velocidad y tecnología moderna para construir productos digitales que escalan.
      </p>
    </section>
  );
}
