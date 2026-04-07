import { Icon } from "../Icon.jsx";

const COLLECTION_ITEMS = [
  {
    img: "/multimedia/Yuga/catalogo/unisex_yuga_red_knit_08.jpg",
    title: "Sueter Unisex Rojo",
    sub: "Rojo intenso • Knit artesanal",
    tag: "Edicion Yuga",
    tagColor: "bg-[#a54616] text-white",
  },
  {
    img: "/multimedia/Yuga/catalogo/unisex_yuga_charcoal_knit_10.jpg",
    title: "Sueter Unisex Carbon",
    sub: "Carbon profundo • Hecho a mano",
    tag: "Tono neutro",
    tagColor: "bg-[#2f241d] text-white",
  },
  {
    img: "/multimedia/Yuga/catalogo/unisex_yuga_beige_knit_09.jpg",
    title: "Sueter Unisex Beige",
    sub: "Beige natural • Knit artesanal",
    tag: "Esencial",
    tagColor: "bg-[#e7d6bd] text-[#5a4333]",
  },
  {
    img: "/multimedia/Yuga/catalogo/unisex_yuga_red_knit_45.jpg",
    title: "Detalle Unisex Rojo",
    sub: "Rojo intenso • Silueta editorial",
    tag: "Nueva mirada",
    tagColor: "bg-[#7f2318] text-white",
  },
];

export function Collection() {
  return (
    <section
      id="materiales"
      className="py-24 bg-[color:var(--color-surface)] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2
              className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-medium wool-heading wool-fade-up"
              style={{ "--delay": "0.1s" }}
            >
              La Edicion de Otono
            </h2>
            <p
              className="wool-text max-w-md wool-fade-up"
              style={{ "--delay": "0.2s" }}
            >
              Una exploracion de capas de lana organica tenidas naturalmente,
              disenadas para perdurar en el tiempo.
            </p>
          </div>
          <a
            className="group flex items-center gap-2 text-[color:var(--color-accent)] font-bold border-b-2 border-[color:var(--color-accent)]/25 pb-1 hover:border-[color:var(--color-accent)] transition-all wool-link wool-fade-up"
            href="/handmade-wool/catalogo#catalogo"
            style={{ "--delay": "0.3s" }}
          >
            Explorar la Coleccion
            <Icon
              name="trending_flat"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTION_ITEMS.map((item, i) => (
            <div
              key={item.img}
              className="group space-y-4 wool-card wool-fade-up"
              style={{ "--delay": `${0.2 + i * 0.08}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 wool-card-image"
                  decoding="async"
                  loading="lazy"
                  src={item.img}
                />
                {item.tag && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${
                        item.tagColor || "bg-[#3A5B3A] text-white"
                      } text-[10px] font-bold px-3 py-1 rounded-full uppercase backdrop-blur-sm`}
                    >
                      {item.tag}
                    </span>
                  </div>
                )}
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-3 rounded-full font-bold text-sm translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 wool-texture wool-btn">
                  <Icon name="visibility" className="text-lg" />
                  Ver Detalle del Tejido
                </button>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg wool-heading">{item.title}</h3>
                <p className="text-xs wool-muted mt-1 uppercase tracking-widest">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
