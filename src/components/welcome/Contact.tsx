// use public asset from /public/multimedia

export function Contact() {
  const sendWhatsApp = () => {
    const name = (document.getElementById('company-name') as HTMLInputElement | null)?.value?.trim() || '';
    const email = (document.getElementById('email') as HTMLInputElement | null)?.value?.trim() || '';
    const desc = (document.getElementById('project-desc') as HTMLTextAreaElement | null)?.value?.trim() || '';

    // minimal validation: require name and email
    if (!name) {
      const el = document.getElementById('company-name') as HTMLElement | null;
      el?.focus();
      return;
    }
    if (!email) {
      const el = document.getElementById('email') as HTMLElement | null;
      el?.focus();
      return;
    }

    const phone = '573228988201';
    const template = `Hola Don Prueba, Soy ${name} mi correo es ${email} y mi proyecto es ${desc || '[descripción del proyecto]'}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(template)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 px-6 border-t border-[#8a0012]/30 bg-[#121212]/20 reveal" id="contact-footer">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-[#ff3d4d] text-[10px] font-black tracking-[0.4em] uppercase mb-8 block font-['Space_Grotesk',sans-serif]">¿Tu empresa necesita una solución web?</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-12 leading-[0.85] text-white font-['Space_Grotesk',sans-serif]">
            VAMOS A <br /> CREAR
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 border-t border-[#8a0012]/30 pt-12">
            <div className="flex flex-col gap-2">
              <span className="text-[9px] uppercase font-black tracking-widest text-[#a1a1aa]/50 font-['Space_Grotesk',sans-serif]">Sede Central</span>
              <span className="font-['JetBrains_Mono',monospace] text-sm text-[#a1a1aa]">Bogotá / Colombia</span>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-4" aria-label="Formulario de contacto" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="company-name" className="sr-only">Nombre de la empresa</label>
          <input id="company-name" name="company" aria-required="true" required className="input-brutal text-[10px] tracking-widest uppercase" placeholder="NOMBRE DE LA EMPRESA" type="text" />

          <label htmlFor="email" className="sr-only">Correo profesional</label>
          <input id="email" name="email" aria-required="true" required className="input-brutal text-[10px] tracking-widest uppercase" placeholder="CORREO PROFESIONAL" type="email" />

          <label htmlFor="project-desc" className="sr-only">Descripción del proyecto</label>
          <textarea id="project-desc" name="message" aria-required="true" required className="input-brutal text-[10px] tracking-widest uppercase resize-none" placeholder="DESCRIPCIÓN DEL PROYECTO" rows={4}></textarea>

          <button onClick={sendWhatsApp} className="cta-button py-4 font-black uppercase tracking-[0.3em] text-[10px] text-white w-full flex items-center justify-start gap-3 px-4" type="button">
            <img src="/multimedia/whatssapp.svg" alt="WhatsApp" aria-hidden="true" className="w-6 h-6 flex-shrink-0" />
            <span className="flex-1 text-left">Enviar Solicitud</span>
          </button>
        </form>
      </div>
    </section>
  );
}