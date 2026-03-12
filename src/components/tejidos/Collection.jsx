export function Collection() {
  return (
    <section className="py-24 bg-[#FFFDD0]/30 dark:bg-[#211811]/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-medium">La Edición de Otoño</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md">Una exploración de capas de lana orgánica teñidas naturalmente, diseñadas para perdurar en el tiempo.</p>
                </div>
                <a className="group flex items-center gap-2 text-[#d2691e] font-bold border-b-2 border-[#d2691e]/20 pb-1 hover:border-[#d2691e] transition-all" href="#top">
                    Explorar la Colección
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">trending_flat</span>
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5xTrwAtuZG2lOm5dcfET7_KLORiu5hikpGblOjcFob0QaJqpBs6wdJigKDH9plgb5EAEUCwQCqjQGjkXRQK_13hR7pJDvBBgXjA-YtoLA2mBtaPudaroBME9h2hCJQhvPWnLC-a2U8eF0VJZdTLQLG6ShjalY3Wb0B_Mc7p7Lnd1BYPOm0iOjxCyaGB4TlH1LFJbFtbiWEeRr_SI--gD7_6g-xUvenh57E8RnHAXlTHd-gZFgCQYFEkpTCyk56aoOWs-VcIrx6nY", title: 'Suéter de Lana "Firma"', sub: "Naranja Tostado • Lana de Alpaca", tag: "Tinte Natural", tagColor: "bg-[#3A5B3A]" },
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcKvJhAnfn_rYSSX3krh8-UFkCjA3vFGA57a30Wc_QLFGH2K_uTCw1BsajE5N8J3dti4kMzpXVWN1nvI1ZoMZ0ZpG_LS-QSrVaJ74QqNxgx5OYrgsBRpmFjTyLEK_CKJUY1KDXQZjvulXG08LHKZpFWP0Lnc7ibB8LtP3QCoQoi5v_HJ2cTqK3Rx8T9pxu5NIZCf9AcZlclPUPTEnojhdzm8dZZlcqEgEIPlNJ1KrRjHvHpo037CCsSFT03nDineDLlLxG_1kssVw", title: "Bufanda Tejida a Mano", sub: "Verde Bosque • Merino Orgánico" },
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg08jICZVlvVPxG4GR3CmGVJwR169yifKJWYXHBL-FZZcSnbRXBn072tNP68E516mAZlW5z9VudQU3ZHZO4Nu6OaH2At33FTBqx9x0iBYPfYgGFqv9nwKjKb8DtNQLgFLy4OwgiawEfPn96FMXtDWJg9fCg4WmAZsWem0OqftMl5ByyCG0bPvUhaeKg63fUUoAsAGnJOQP46WNTbl6MJX_cQhiPEjZ3TaowxCRHfkzFXjxUxcjEH8nsbLSKd_1dKZQNA63WWJIMvM", title: 'Gorro "Alba"', sub: "Blanco Crema • Punto de Arroz", tag: "Pieza Icónica", tagColor: "bg-[#d2691e]/20 text-[#d2691e]" },
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDphTh8LnVsExqaJnTDVYR5qVEnuGALn7vCPJ8snhi10oxtLTpgVvsCVJeY1Y2mZlGiSsvJJZAWVm7mdvohS23x0cX_KHV02fqHdKpLzKmldxlIrF7xK-jTqUGdJKrI_wzcf4vchgaQdcJg7XcYImwjs3ioRrbMiWsSG5m-evH9n3sZqdIKNNnf0x1edxoqgkp49-FMOO0jDLNkjbNo3EGurFO-DO2S78CsQZq2gbMH3tiXqWk5QQ5zEBohAbtyMbGd9ri8TTyf9eY", title: "Cárdigan Estructural", sub: "Beige Cálido • Tintes Vegetales" }
                ].map((item, i) => (
                    <div key={i} className="group space-y-4">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
                            <img alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.img} />
                            {item.tag && (
                                <div className="absolute top-4 left-4">
                                    <span className={`${item.tagColor || 'bg-[#3A5B3A] text-white'} text-[10px] font-bold px-3 py-1 rounded-full uppercase backdrop-blur-sm`}>{item.tag}</span>
                                </div>
                            )}
                            <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur py-3 rounded-full font-bold text-sm translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 wool-texture">
                                <span className="material-symbols-outlined text-lg">visibility</span>
                                Ver Detalle del Tejido
                            </button>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
