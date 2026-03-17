export function Newsletter() {
  return (
    <section className="py-24 bg-[color:var(--color-surface)] border-y border-[#a54616]/12">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <span className="material-symbols-outlined text-[color:var(--color-accent)] text-5xl wool-fade-up" style={{ "--delay": "0.1s" }}>mail</span>
            <div className="space-y-4 wool-fade-up" style={{ "--delay": "0.2s" }}>
                <h2 className="text-4xl font-['Playfair_Display',serif] font-medium wool-heading">Únete a nuestro Círculo de Lana</h2>
                <p className="wool-text">Recibe historias de nuestro taller, acceso a nuevos volúmenes del catálogo y consejos para el cuidado de la lana.</p>
            </div>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto wool-fade-up" style={{ "--delay": "0.3s" }}>
                <input className="flex-1 px-6 py-4 rounded-full border border-[#a54616]/20 bg-white/90 focus:ring-2 focus:ring-[#a54616] focus:border-transparent outline-none wool-input text-[color:var(--color-text)] placeholder:text-[#9b7e66]" placeholder="Tu correo electrónico" type="email" />
                <button className="px-8 py-4 bg-[color:var(--color-accent)] text-white rounded-full font-bold hover:shadow-lg transition-all wool-texture wool-btn" type="submit">Suscribirse</button>
            </form>
            <p className="text-[10px] wool-muted uppercase tracking-widest wool-fade-up" style={{ "--delay": "0.4s" }}>Respetamos tu privacidad y tu tiempo.</p>
        </div>
    </section>
  );
}
