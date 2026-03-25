import { Icon } from "../Icon.jsx";

export function ProductCatalog() {
  const products = [
    {
      title: "Pack 600ml",
      desc: "Ideal para eventos y actividad física. Frescura práctica para llevar contigo.",
      price: "$12.000",
      tag: "Pack x 6",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmaaEVFdfurdVfNo3XZqbYClrF6QKrA1tqiBOigAWgKLtSrZ0T4f0RQnxm_vgY4cVVLf2Uv0XlQE3qW1jXTNLkVJO7CDchnejDXdjJLCUFcfssdBf09Kk1qpsVrTNpq-AqK3jltq5NN1JfrMlet4TPd_Ep_FZqYi7I1T1PdHI-P45Eh1-kwAwcH5-9arVfYEmmtjTj9dA1pyFoc5vjhRxjLdnnnQ6NxtdKsIETbs3yqsV6Mx0MD16N_uLqVF0va_P4RuESFgrOvnc",
    },
    {
      title: "Bolsa 300ml",
      desc: "La opción más económica y tradicional para el día a día.",
      price: "$8.500",
      tag: "Pack x 20",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBY08cnI2l6pUcnCbiUdQ0SnNDMyVVbwN-mn6bvcyfiBZSX1VK-L7TIuNswEZDpbb2OOX_iAPsVg08Ydy8THqvAbxvU7lxdzlIUlAu_jONDCpyNdH3XU0VGKCdjI--fPHTBWJUP6q5eL1srAz0Bqp-XuebF4FDxrnuggG9T0iImOAKVzdrxDDyzO2rLNb02bbJoYSRwKDTSK-gLq091mel6Bp_j7MZ3cgQWzI5hAprV_e6XQ-VrvQEIBtwUuZkT1EMTVFRXDz0c8A",
    },
    {
      title: "Garrafa 5L",
      desc: "Perfecta para oficinas y hogares pequeños. Fácil de manejar.",
      price: "$6.000",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0VT21Uf7YhTwEmlwQW_bmeqymoe2IBoLJ7H30eFg0H9mG31ZNPKzqJFgaWX85-TOxPWaKBz-H5rl4NAo_1i-vebCCQrxRZjacJEohl00pdalpNttVIRsBij3dxN6DRAYUqpMpNHcQKp3OceCC3Ibp0CRmWpdJlqLjYnTCIMcYWmn6DcZiNQW9dtGXWgozaxx7RAXMO_feSBfI-gMXl6CR32eT_Ul0W_BDWE8EmB2pP5rAm_WGIo4MYACooKGQt-qfsIC5nZR_C-U",
    },
  ];

  return (
    <section className="py-24 bg-[#0B5ED7] dark:bg-slate-900/50 px-6" id="productos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-['Outfit',sans-serif] text-4xl font-bold mb-4 text-white dark:text-white">Catálogo de productos</h2>
            <p className="text-white/80 dark:text-slate-400">Presentaciones pensadas para cada necesidad y momento de consumo.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 group hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl h-64 mb-6 flex items-center justify-center relative overflow-hidden">
                <img alt={item.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" decoding="async" loading="lazy" src={item.img} />
                {item.tag && <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-white">{item.tag}</div>}
              </div>
              <h3 className="font-['Outfit',sans-serif] text-xl font-bold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-slate-800 dark:text-white">{item.price}</span>
                <button className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#0077BE] hover:text-white transition-all text-slate-800 dark:text-white">
                  <Icon name="add" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
