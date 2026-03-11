export function Benefits() {
  const benefits = [
    { icon: "local_shipping", title: "Envío Rápido", desc: "Mismo día en Bogotá" },
    { icon: "verified", title: "Originales", desc: "Garantía de autenticidad" },
    { icon: "payments", title: "Pago Seguro", desc: "Contra entrega disponible" },
    { icon: "support_agent", title: "Soporte 24/7", desc: "Atención personalizada" },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="p-3 bg-blue-50 rounded-full text-blue-600 mb-4">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}