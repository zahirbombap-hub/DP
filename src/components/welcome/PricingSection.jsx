export function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "$300.000 COP",
      description: "Ideal para negocios que necesitan presencia online clara y atractiva.",
      features: [
        "Página web moderna y personalizada",
        "Animaciones y transiciones visuales",
        "Diseño responsive para celulares",
        "Formulario de contacto",
        "Optimización básica de rendimiento"
      ],
      cta: "Empezar proyecto",
      icon: "bolt",
      highlight: false
    },
    {
      name: "Negocio",
      price: "$650.000 COP",
      description: "Perfecto para empresas que necesitan interacción con usuarios.",
      features: [
        "Todo lo del plan básico",
        "Sistema de login o registro",
        "Panel administrativo básico",
        "Catálogo de productos o servicios",
        "Integraciones iniciales"
      ],
      cta: "Elegir plan",
      icon: "workspace_premium",
      highlight: true
    },
    {
      name: "Tienda",
      price: "$1.800.000 COP",
      description: "Para negocios que quieren vender directamente desde su sitio web.",
      features: [
        "Sistema completo de productos",
        "Carrito de compras",
        "Integración de pagos",
        "Panel de gestión de ventas",
        "Arquitectura escalable"
      ],
      cta: "Solicitar cotización",
      icon: "shopping_cart",
      highlight: false
    }
  ];

  return (
    <section className="py-3 sm:py-3 px-4 sm:px-6 max-w-screen-2xl mx-auto reveal" id="pricing-section">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[#ff3d4d] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block font-['Space_Grotesk',sans-serif]">
          Precios
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter italic leading-[0.9] text-white font-['Space_Grotesk',sans-serif]">
          Planes accesibles para lanzar tu presencia digital
        </h2>
        <p className="mt-6 text-[#a1a1aa] text-base sm:text-lg font-light leading-relaxed font-['Space_Grotesk',sans-serif]">
          Diseñamos páginas modernas, rápidas y optimizadas para convertir visitantes en clientes.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`reveal rounded-2xl border bg-[#121212] p-6 sm:p-7 shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 ${
              plan.highlight
                ? "border-[#ff3d4d]/80 shadow-[0_18px_42px_rgba(255,61,77,0.25)] md:scale-[1.03]"
                : "border-[#8a0012]/30 hover:border-[#ff3d4d]/60"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`size-11 rounded-full border flex items-center justify-center ${
                plan.highlight ? "border-[#ff3d4d]/60 bg-[#ff3d4d]/10" : "border-[#8a0012]/40 bg-[#8a0012]/15"
              }`}>
                <span className="material-symbols-outlined text-[#ff3d4d] text-xl">{plan.icon}</span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white font-['Space_Grotesk',sans-serif]">
                Plan {plan.name}
              </h3>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white font-['JetBrains_Mono',monospace]">{plan.price}</span>
            </div>
            <p className="mt-4 text-[#a1a1aa] text-sm leading-relaxed font-['Space_Grotesk',sans-serif]">{plan.description}</p>

            <ul className="mt-5 space-y-2 text-sm text-[#a1a1aa] font-['Space_Grotesk',sans-serif]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ff3d4d] text-base">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                plan.highlight
                  ? "cta-button text-white"
                  : "border border-[#8a0012]/50 text-white hover:border-[#ff3d4d]"
              }`}
              type="button"
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
