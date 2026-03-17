import { Routes, Route } from 'react-router-dom';
import { Welcome } from "./components/welcome/welcome.jsx";
import AguaLinda from "./routes/agua-linda.jsx";
import Boutique from "./routes/boutique-law-firm.jsx";
import DigitalArtist from "./routes/digital-artist.jsx";
import HandmadeWool from "./routes/handmade-wool.jsx";
import Shoekos from "./routes/shoekos.jsx";
import TattooArtist from "./routes/tattoo-artist.jsx";
import Cuerna from "./routes/cuerna.jsx";
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
        <Route path="/boutique-law-firm" element={<Boutique />} />
        <Route path="/digital-artist" element={<DigitalArtist />} />
        <Route path="/handmade-wool" element={<HandmadeWool />} />
        <Route path="/shoekos" element={<Shoekos />} />
        <Route path="/tattoo-artist" element={<TattooArtist />} />
        <Route path="/cuerna" element={<Cuerna />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
