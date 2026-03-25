import { Routes, Route } from 'react-router-dom';
import { Welcome } from "./components/welcome/welcome.jsx";
import AguaLinda from "./routes/agua-linda.jsx";
import AguaLindaEmpres from "./routes/agua-linda-empres.jsx";
import HandmadeWool from "./routes/handmade-wool.jsx";
import TattooArtist from "./routes/tattoo-artist.jsx";
import Cuerna from "./routes/cuerna.jsx";
import Articulos from "./routes/articulos.jsx";
import Paginas from "./routes/paginas.jsx";
import Automatizaciones from "./routes/automatizaciones.jsx";
import NotFound from "./routes/notfound.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

export function meta() {
  return [
    { title: "Don Prueba: Portafolio Empresarial" },
    { name: "description", content: "Desarrollamos ecosistemas digitales con el rigor del Protocolo Crimson." },
  ];
}

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/agua-linda" element={<AguaLinda />} />
        <Route path="/agua-linda/empres" element={<AguaLindaEmpres />} />
        <Route path="/handmade-wool" element={<HandmadeWool />} />
        <Route path="/tattoo-artist" element={<TattooArtist />} />
        <Route path="/cuerna" element={<Cuerna />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/paginas" element={<Paginas />} />
        <Route path="/automatizaciones" element={<Automatizaciones />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
