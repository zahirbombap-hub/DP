import { useState, useRef, useEffect } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    if (!open) return setOpen(true);
    // Aquí puedes conectar la lógica real de búsqueda (API, filtro local, navegación, etc.)
    console.log("Buscar:", query);
  }

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#E8E3DA]/80 dark:bg-[#211811]/80 backdrop-blur-md border-b border-[#a54616]/12 wool-fade-up"
      style={{ "--delay": "0.05s" }}
    >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
                    <a className="flex items-center gap-2 group transform transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1" href="#top">
                        <span className="material-symbols-outlined text-[color:var(--color-accent)] text-3xl">filter_vintage</span>
                        <h2 className="text-2xl font-bold tracking-tight font-['Playfair_Display',serif] text-white transform transition-all duration-200 ease-out group-hover:text-[color:var(--color-accent)] group-hover:-translate-y-1">
                          <span className="block">Historias</span>
                          <span className="block">Tejidas</span>
                        </h2>
                    </a>
                    <a
                      href="/"
                      className="w-10 h-10 rounded-full bg-transparent border-0 flex items-center justify-center shadow-none hover:shadow-none transition-all"
                      aria-label="Volver a Don Prueba"
                    >
                      <img src="/multimedia/dp-logo-3.png" alt="Don Prueba" className="w-6 h-6 object-contain transform transition-transform duration-200 ease-out group-hover:scale-105" />
                    </a>
            </div>
            <div className="flex-1 flex justify-center">
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-sm font-semibold text-white hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#oficio">El Oficio</a>
                    <a className="text-sm font-semibold text-white hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#materiales">Materiales</a>
                </nav>
            </div>
            <div className="flex items-center gap-6">
                <div ref={wrapperRef} className="hidden lg:flex items-center">
                  <form onSubmit={handleSearch} className="flex items-center">
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-label="Abrir búsqueda"
                      onClick={() => setOpen((s) => !s)}
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent focus:outline-none transform transition-transform duration-150 ease-out hover:scale-105"
                    >
                      <span className="material-symbols-outlined text-white text-xl">search</span>
                    </button>

                    <div className={`ml-2 flex items-center bg-[color:var(--color-surface)]/70 dark:bg-transparent rounded-full transition-all duration-200 ${open ? 'px-3 py-1 w-56' : 'px-0 py-0 w-0 overflow-hidden'}`}>
                      <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Buscar pieza..."
                        list="search-cats"
                        className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-white/70 outline-none w-full"
                        type="text"
                      />
                      <datalist id="search-cats">
                        <option value="Galería Completa" />
                        <option value="El Oficio" />
                        <option value="Materiales" />
                        <option value="Archivo" />
                      </datalist>
                    </div>
                  </form>
                </div>
                <div className="flex items-center gap-4">
                    <a className="text-xs uppercase tracking-widest font-bold text-[color:var(--color-accent)] hover:text-white transition-colors border-b border-[#a54616]/25 pb-0.5 wool-link" href="#catalogo">Catálogo Digital</a>
                    <a className="text-xs uppercase tracking-widest font-bold text-white hover:text-[color:var(--color-accent)] transition-colors wool-link" href="#contacto">Contacto</a>
                </div>
            </div>
        </div>
    </header>
  );
}
