import { useState } from 'react';
// use public asset from /public/multimedia

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    idea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contact, idea } = formData;
    const phoneNumber = "573018688104";
    const message = `Mi nombre es ${name}, mi contacto es ${contact} y mi idea del proyecto es ${idea}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 px-6 relative z-10" id="booking">
      <div className="max-w-md mx-auto bg-white p-6 md:p-8 text-black relative sawtooth-edge shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-2 right-4 mandala-texture w-24 h-24 opacity-20 pointer-events-none"></div>
        <div className="mb-10 border-b-4 border-black pb-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">RESERVA</h2>
          <p className="text-[9px] font-mono uppercase mt-2 tracking-[0.3em] font-bold opacity-60">ZONA 7 ART: WHATSAPP 3018688104</p>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="font-black uppercase text-[10px] tracking-widest">NOMBRE</label>
            <input name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-0 border-b-2 border-black focus:ring-0 focus:border-[#0077BE] dark:focus:border-[#8a0012] placeholder:text-slate-400 uppercase font-mono text-sm px-0 py-2 outline-none transition-colors duration-300" placeholder="TU IDENTIDAD" type="text" required />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-black uppercase text-[10px] tracking-widest">CONTACTO (WA / IG)</label>
            <input name="contact" value={formData.contact} onChange={handleChange} className="w-full bg-transparent border-0 border-b-2 border-black focus:ring-0 focus:border-[#0077BE] dark:focus:border-[#8a0012] placeholder:text-slate-400 uppercase font-mono text-sm px-0 py-2 outline-none transition-colors duration-300" placeholder="3018688104 / zone_tatt00" type="text" required />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-black uppercase text-[10px] tracking-widest">IDEA DEL PROYECTO</label>
            <textarea name="idea" value={formData.idea} onChange={handleChange} className="w-full bg-transparent border-0 border-b-2 border-black focus:ring-0 focus:border-[#0077BE] dark:focus:border-[#8a0012] placeholder:text-slate-400 uppercase font-mono resize-none text-sm px-0 py-2 outline-none transition-colors duration-300" placeholder="DESCRIBE TU VISIÓN..." rows={2} required></textarea>
          </div>
          <button className="booking-submit-btn bg-black text-white py-4 mt-4 text-lg font-black uppercase hover:bg-[#0077BE] dark:hover:bg-[#8a0012] transition-all duration-300 shadow-[6px_6px_0px_rgba(0,119,190,1)] dark:shadow-[6px_6px_0px_rgba(138,0,18,1)] flex items-center justify-center gap-2" type="submit">
            SOLICITAR CITA
            <img src="/multimedia/whatssapp.svg" alt="WhatsApp" className="w-6 h-6 invert" />
          </button>
        </form>
      </div>
    </section>
  );
}
