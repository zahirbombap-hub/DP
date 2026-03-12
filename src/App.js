import { Routes, Route } from 'react-router-dom';
import { Welcome } from "./components/welcome/welcome.tsx";
import AguaLinda from "./routes/agua-linda.tsx";
import Boutique from "./routes/boutique-law-firm.tsx";
import DigitalArtist from "./routes/digital-artist.tsx";
import HandmadeWool from "./routes/handmade-wool.tsx";
import Shoekos from "./routes/shoekos.tsx";
import TattooArtist from "./routes/tattoo-artist.tsx";
import NotFound from "./routes/notfound.tsx";

export function meta() {
  return [
    { title: "Don Prueba: Portafolio Empresarial" },
    { name: "description", content: "Desarrollamos ecosistemas digitales con el rigor del Protocolo Crimson." },
  ];
}

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/agua-linda" element={<AguaLinda />} />
      <Route path="/boutique-law-firm" element={<Boutique />} />
      <Route path="/digital-artist" element={<DigitalArtist />} />
      <Route path="/handmade-wool" element={<HandmadeWool />} />
      <Route path="/shoekos" element={<Shoekos />} />
      <Route path="/tattoo-artist" element={<TattooArtist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
