export function SuccessCases() {
  return (
    <section className="py-32 px-6" id="casos">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-5xl">Casos de Éxito</h2>
                    <p className="text-[#2a2a2a]/60 mt-4 max-w-sm">Explore nuestra trayectoria en la resolución de litigios corporativos y transacciones de alto nivel.</p>
                </div>
                <a className="text-[#b8860b] font-bold tracking-widest text-sm uppercase flex items-center gap-2 group" href="#perspectivas">
                    Ver Publicaciones <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmfv3VU_UCHJaIMlmAaNPBdHCGUDjW8UXpM435iTCrdRNhG5m46iiu48976tcFRPl8zWRwn288dNLzByko2yl1nNQCgok1c3mK51mBcZDu9f_7Kpl1xQo4UEO-1OjNh-IxG22mQJ4W8kNcHhtTy6rGCr_N9n8-o5uuTfCuQsEpnNEEDrMa283bB4NE1dPL9eCluQAUyhreaYDE59Rnnvpf9EJHtj-AoVQEw1mDZiXgIQyQA2KN2eHV2ICEH1P-YCtFEEQ2jLg3WdY", cat: "Derecho Corporativo", title: "El futuro de la propiedad intelectual en un mundo impulsado por la IA" },
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRXcVS0ow67RPp1FUtdYYWcm2nLiMM11sUJlPMC2VCeZ4OAhsFX_2_4Bprq65qBb9zyuZf6Bq7gREAHk3A0mdcxLYqbNNHQ7B0K6Cnh8GgWBAFdHW8DpT7M9CdF_BVMHrToBnlCpl_RBmZy8Q9oZLzmwXMJ9RnVPAZ-LhbscQsjXC4RkEERTFbesr3OGZYU3kC9RhqUIVBveQEEkfQhhDjL9zNPCu3a9WkHBsnycWq_8iv1I8U_xarcR04LCMm5AmtEg3NSIaegl4", cat: "Política y Ética", title: "Navegando la ética en contratos comerciales transnacionales" },
                    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs-ZvqDK45QawuQim9CPv1qBSnvQIchgGlWskahVFY2_kPLRHFTIjw2nr_Fa32pWDwGhOvfWYwTIgjgyK9qWWfJWilCHPiwcxEilPZZ9hxojBmyC7zYSicj2_o0rHWlk574ejFd4J_3CIEtx6CMID_W1RYn7cSjq9zX0gygtBDiIQimxDoAz6P9dxwjLEvC2ALGWF8YDu978Yy1Gac7u7gHaRdIBdQ0b6AbMv1VCPksuKIuS9YEwBmRzfE2V6zyug8KQt9SYeya-Q", cat: "Estrategia de Mercado", title: "Vientos regulatorios: Desafíos para los gigantes tecnológicos modernos" }
                ].map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-slate-200">
                            <img alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={item.img} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-[#b8860b] mb-3 block">{item.cat}</span>
                        <h3 className="text-2xl group-hover:italic transition-all">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}