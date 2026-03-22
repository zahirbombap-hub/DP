const automationCards = [
  {
    id: "leads-crm",
    tag: "Ventas",
    name: "Leads a CRM",
    solution:
      "Convierte formularios y mensajes entrantes en leads limpios, con respuesta inmediata, asignacion y seguimiento automatico.",
    clientPotential: "Agencias, consultoras y negocios con captacion digital",
    price: "Desde $1.200.000 COP",
    outcome: "Menos tiempo entre el primer contacto y la respuesta comercial.",
    theme: "red",
  },
  {
    id: "invoicing",
    tag: "Finanzas",
    name: "Facturacion inteligente",
    solution:
      "Lee facturas, valida datos y actualiza tu hoja de control sin transcribir soportes ni perseguir el orden manualmente.",
    clientPotential: "Pymes, contabilidad y equipos administrativos",
    price: "Desde $1.500.000 COP",
    outcome: "Menos errores al registrar soportes y mas orden en caja.",
    theme: "amber",
  },
  {
    id: "reports",
    tag: "Operaciones",
    name: "Reportes ejecutivos",
    solution:
      "Recoge indicadores de varias herramientas y entrega un resumen listo para tomar decisiones sin armar reportes a mano.",
    clientPotential: "Direccion, marketing y operaciones",
    price: "Desde $1.800.000 COP",
    outcome: "Visibilidad clara sin reuniones largas para consolidar datos.",
    theme: "cyan",
  },
  {
    id: "support",
    tag: "Soporte",
    name: "Soporte y tickets",
    solution:
      "Clasifica mensajes, crea tickets y deriva cada caso al responsable correcto en segundos para que nada se pierda.",
    clientPotential: "Ecommerce, servicios y equipos de atencion",
    price: "Desde $1.400.000 COP",
    outcome: "Cada consulta queda trazada y el seguimiento se vuelve predecible.",
    theme: "pink",
  },
  {
    id: "personal-routines",
    tag: "Vida diaria",
    name: "Rutinas y recordatorios",
    solution:
      "Automatiza alertas, listas y pequenas tareas para que tu agenda personal no dependa de la memoria ni del cansancio.",
    clientPotential: "Profesionales independientes y personas con agendas cargadas",
    price: "Desde $900.000 COP",
    outcome: "Mas espacio mental para lo importante dentro y fuera del trabajo.",
    theme: "emerald",
  },
];

const themeStyles = {
  red: {
    label: "text-brandRed",
    chip: "border-brandRed/20 bg-brandRed/10 text-brandRed",
    gradient: "from-brandRed via-[#ff4d5d] to-[#ff7a87]",
  },
  amber: {
    label: "text-brandYellow",
    chip: "border-brandYellow/20 bg-brandYellow/10 text-brandYellow",
    gradient: "from-brandYellow via-[#ffe36b] to-[#fff2b0]",
  },
  cyan: {
    label: "text-cyan-400",
    chip: "border-cyan-400/20 bg-cyan-400/10 text-cyan-400",
    gradient: "from-cyan-400 via-[#66e0ff] to-[#b5f4ff]",
  },
  pink: {
    label: "text-brandPink",
    chip: "border-brandPink/20 bg-brandPink/10 text-brandPink",
    gradient: "from-brandPink via-[#ff4dbb] to-[#ff9cdc]",
  },
  emerald: {
    label: "text-emerald-400",
    chip: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    gradient: "from-emerald-400 via-[#69e6a5] to-[#b8ffd9]",
  },
};

function AutomationCard({ item }) {
  const theme = themeStyles[item.theme];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.gradient}`} />
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at top right, rgba(255,61,77,0.10), transparent 30%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`text-[10px] font-black uppercase tracking-[0.35em] ${theme.label}`}>{item.tag}</p>
            <h3 className="mt-2 text-2xl font-black uppercase leading-[0.95] text-white">{item.name}</h3>
          </div>
          <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${theme.chip}`}>
            A medida
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/70">{item.solution}</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Impacto esperado</p>
          <p className="mt-2 text-sm leading-relaxed text-white/80">{item.outcome}</p>
        </div>

        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
            <dt className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Cliente potencial</dt>
            <dd className="mt-2 text-sm font-semibold leading-relaxed text-white">{item.clientPotential}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
            <dt className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">Precio</dt>
            <dd className={`mt-2 text-lg font-black ${theme.label}`}>{item.price}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function AutomationCatalog() {
  return (
    <section
      id="automatizaciones"
      className="reveal scroll-mt-24 relative overflow-hidden border-y border-white/5 bg-[#080808]"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,61,77,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,204,0,0.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d]">
              Automatizaciones en cards
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-7xl">
              Sistemas que trabajan por ti
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
              Cada automatizacion reemplaza pasos manuales por un flujo claro, medible y listo para escalar tanto en el
              trabajo como en la vida diaria.
            </p>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Piensalo como una capa estrategica: captura datos, ordena acciones y libera tiempo para tareas de mayor
            valor.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 xl:grid-cols-3">
          {automationCards.map((item) => (
            <AutomationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
