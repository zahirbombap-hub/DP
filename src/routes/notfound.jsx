import { Link, useLocation } from "react-router-dom";
import { FuzzyText } from "../components/FuzzyText.jsx";

export function meta() {
  return [{ title: "Not Found - Don Prueba" }];
}

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,0,18,0.35)_0%,_rgba(5,5,5,0)_55%)]" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 border border-[#8a0012]/40 bg-[#8a0012]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-[#ff3d4d] backdrop-blur-sm">
            Error de navegacion
          </div>

          <FuzzyText
            as="h1"
            text="404"
            className="block text-[22vw] leading-none font-black tracking-[-0.08em] text-white sm:text-[16vw] md:text-[12rem]"
          />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#a1a1aa] sm:text-lg">
            La pagina "{location.pathname}" no fue encontrada.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-[#8a0012] bg-[#8a0012] px-6 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#a30017]"
            >
              Volver al inicio
            </Link>

            <span className="text-[11px] uppercase tracking-[0.28em] text-[#a1a1aa]/60">
              Don Prueba // 404
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
