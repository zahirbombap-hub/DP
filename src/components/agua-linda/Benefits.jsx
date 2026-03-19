import { Icon } from "../Icon.jsx";

export function Benefits() {
  return (
    <section className="py-24 px-6" id="beneficios">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="reveal text-center">
            <div className="w-16 h-16 bg-white dark:bg-blue-900/30 text-[#0077BE] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="biotech" className="text-3xl" />
            </div>
            <h4 className="font-['Outfit',sans-serif] text-xl font-bold mb-3 text-white dark:text-white">Pureza Certificada</h4>
            <p className="text-white/80 dark:text-slate-400">Procesos de ultrafiltración y ozonificación que garantizan un agua 100% segura para toda tu familia.</p>
          </div>
          <div className="reveal text-center" style={{ transitionDelay: '200ms' }}>
            <div className="w-16 h-16 bg-white dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="eco" className="text-3xl" />
            </div>
            <h4 className="font-['Outfit',sans-serif] text-xl font-bold mb-3 text-white dark:text-white">Compromiso Local</h4>
            <p className="text-white/80 dark:text-slate-400">Nacemos y crecemos en Villa de Leyva, apoyando la economía de nuestra región y cuidando el entorno.</p>
          </div>
          <div className="reveal text-center" style={{ transitionDelay: '400ms' }}>
            <div className="w-16 h-16 bg-white dark:bg-orange-900/30 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="bolt" className="text-3xl" />
            </div>
            <h4 className="font-['Outfit',sans-serif] text-xl font-bold mb-3 text-white dark:text-white">Entrega Express</h4>
            <p className="text-white/80 dark:text-slate-400">Nuestro sistema logístico garantiza que nunca te quedes sin agua. Entregas en menos de 60 minutos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
