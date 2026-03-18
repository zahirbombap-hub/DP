export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-[60] px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <a
          href="/"
          aria-label="Ir al inicio"
          title="Ir al inicio"
          onClick={() => window.location.reload()}
          className="relative flex items-center justify-center size-9 bg-[#8a0012] text-white font-['JetBrains_Mono',monospace] font-extrabold text-lg dp-logo-mark transition-transform group-hover:bg-[#ff3d4d] group-hover:skew-x-[-10deg]"
        >
          DP
        </a>
        <div className="flex gap-2">
          <a className="bg-[#8a0012] text-white px-3 py-1.5 font-black border-2 border-black text-xs uppercase shadow-[2px_2px_0px_black] hover:translate-y-0.5 transition-all" href="#paginas">PORTAFOLIO</a>
          <a className="bg-white text-black px-3 py-1.5 font-black border-2 border-black text-xs uppercase shadow-[2px_2px_0px_#8a0012] hover:translate-y-0.5 transition-all" href="#booking">AGENDAR</a>
        </div>
      </div>
    </nav>
  );
}
