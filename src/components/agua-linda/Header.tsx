// use public asset

export function Header() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0B5ED7]/90 dark:bg-[#0F172A]/70 border-b border-white/10 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
          <a href="/" className="w-10 h-10 bg-white dark:bg-[#0077BE] flex items-center justify-center rounded-xl text-[#0B5ED7] dark:text-white font-black text-xl">DP</a>
          <img src="/multimedia/logo-agua-linda.png" alt="Agua Linda" className="h-12 object-contain hidden sm:block" />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white dark:text-slate-200">
          <a className="hover:text-slate-200 dark:hover:text-[#0077BE] transition-colors" href="#hero">Inicio</a>
          <a className="hover:text-slate-200 dark:hover:text-[#0077BE] transition-colors" href="#el-rey">El Rey de la Casa</a>
          <a className="hover:text-slate-200 dark:hover:text-[#0077BE] transition-colors" href="#productos">Productos</a>
          <a className="hover:text-slate-200 dark:hover:text-[#0077BE] transition-colors" href="#beneficios">Beneficios</a>
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-slate-800 transition-colors text-white dark:text-slate-200">
            <span className="material-symbols-outlined text-xl">dark_mode</span>
          </button>
          <a className="bg-white text-[#0B5ED7] dark:bg-[#0077BE] dark:text-white hover:bg-slate-100 dark:hover:bg-blue-600 px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-black/10 dark:shadow-[#0077BE]/20 hover:scale-105" href="#">
            Pide Ahora
          </a>
        </div>
      </div>
    </header>
  );
}