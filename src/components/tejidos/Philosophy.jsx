import { Icon } from "../Icon.jsx";

export function Philosophy() {
  return (
    <section
      id="oficio"
      className="relative py-32 overflow-hidden bg-[color:var(--color-bg)] scroll-mt-24"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[color:var(--color-surface)] wool-texture opacity-50 -z-10 rounded-l-full"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2
            className="text-5xl font-['Playfair_Display',serif] font-medium leading-tight wool-heading wool-fade-up"
            style={{ "--delay": "0.1s" }}
          >
            La Ingeniería Detrás <br />del Tejido
          </h2>
          <p
            className="text-lg wool-text leading-relaxed wool-fade-up"
            style={{ "--delay": "0.2s" }}
          >
            Antes del producto existe un sistema: diseño de punto, selección de
            hilo, tensión y secuencias de agujas. Combinamos criterio humano y
            maquinaria textil para construir el tejido por capas con precisión,
            repetibilidad y control.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "verified",
                title: "Precisión",
                desc: "Parámetros de punto y tensión calibrados para que cada estructura responda a una especificación medible.",
              },
              {
                icon: "terminal",
                title: "Producción Inteligente",
                desc: "Monitoreo y ajustes en línea para mantener ritmo, reducir variación y escalar sin perder control.",
              },
              {
                icon: "workspace_premium",
                title: "Ingeniería Textil",
                desc: "Decisiones de construcción orientadas a desempeño: caída, elasticidad, aislamiento y durabilidad.",
              },
              {
                icon: "all_inclusive",
                title: "Consistencia",
                desc: "Repetibilidad entre lotes: misma textura, mismas medidas y una calidad verificable pieza tras pieza.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="space-y-3 wool-fade-up"
                style={{ "--delay": `${0.3 + i * 0.08}s` }}
              >
                <Icon
                  name={item.icon}
                  className="text-[color:var(--color-accent)] text-4xl"
                />
                <h4 className="font-bold text-xl wool-heading">{item.title}</h4>
                <p className="text-sm wool-text">{item.desc}</p>
              </div>
            ))}
          </div>
          <p
            className="text-base wool-text leading-relaxed wool-fade-up"
            style={{ "--delay": "0.55s" }}
          >
            El valor no está solo en el resultado final: está en las pruebas,
            ajustes y calibraciones que hacen que cada repetición entregue el
            mismo estándar.
          </p>
        </div>
        <div className="relative wool-fade-up" style={{ "--delay": "0.35s" }}>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl wool-card">
            <img
              alt="Proceso de tejido industrial"
              className="w-full h-full object-cover wool-card-image"
              decoding="async"
              loading="lazy"
              src="/multimedia/Yuga/catalogo/unisex_yuga_charcoal_knit_03.jpg"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-[color:var(--color-accent)] p-8 rounded-2xl text-white max-w-xs shadow-xl wool-texture wool-card">
            <p className="text-2xl font-['Playfair_Display',serif] italic">
              "El tejido no se improvisa: se diseña, se calibra y se repite con
              precisión."
            </p>
            <p className="mt-4 font-bold tracking-widest uppercase text-xs">
              — Equipo Técnico Yuga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
