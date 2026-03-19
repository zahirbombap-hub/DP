import { Icon } from "../Icon.jsx";

export function Newsletter() {
  return (
    <section className="py-24 bg-[color:var(--color-surface)] border-y border-[#d2691e]/10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <Icon name="mail" className="text-[color:var(--color-accent)] text-5xl wool-fade-up mx-auto" style={{ "--delay": "0.1s" }} />
        <div className="space-y-4">
          <h2 className="text-4xl font-['Playfair_Display',serif] font-medium wool-heading">Únete a nuestro Círculo de Lana</h2>
          <p className="text-slate-600 dark:text-slate-400">Recibe historias de nuestro taller, acceso a nuevos volúmenes del catálogo y consejos para el cuidado de la lana.</p>
        </div>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input className="flex-1 px-6 py-4 rounded-full border border-[#d2691e]/20 bg-white dark:bg-[#211811] focus:ring-2 focus:ring-[#d2691e] focus:border-transparent outline-none" placeholder="Tu correo electrónico" type="email" />
          <button className="px-8 py-4 bg-[#d2691e] text-white rounded-full font-bold hover:shadow-lg transition-all wool-texture" type="submit">Suscribirse</button>
        </form>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">Respetamos tu privacidad y tu tiempo.</p>
      </div>
    </section>
  );
}
