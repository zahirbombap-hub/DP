import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/tejidos/tejidos.css";
import { Header } from "../components/tejidos/Header.jsx";
import { Hero } from "../components/tejidos/Hero.jsx";
import { Collection } from "../components/tejidos/Collection.jsx";
import { Philosophy } from "../components/tejidos/Philosophy.jsx";
import { Newsletter } from "../components/tejidos/Newsletter.jsx";
import { Footer } from "../components/tejidos/Footer.jsx";
import { CATALOG_URL } from "../components/tejidos/catalog.constants.js";
import { RouteSeo } from "../components/Seo.jsx";

export default function HandmadeWool() {
  const navigate = useNavigate();
  const [catalogItems, setCatalogItems] = useState([]);
  const [catalogError, setCatalogError] = useState(null);
  const [catalogLoading, setCatalogLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("wool-body");
    return () => {
      document.body.classList.remove("wool-body");
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadCatalog() {
      try {
        setCatalogLoading(true);
        setCatalogError(null);

        const res = await fetch(CATALOG_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Formato de catálogo inválido");

        if (!cancelled) setCatalogItems(data);
      } catch (err) {
        if (!cancelled) {
          setCatalogItems([]);
          setCatalogError(err?.message || "No se pudo cargar el catálogo");
        }
      } finally {
        if (!cancelled) setCatalogLoading(false);
      }
    }

    loadCatalog();

    return () => {
      cancelled = true;
    };
  }, []);

  function commitCatalogItem(item) {
    if (!item?.file) return;
    navigate(`/handmade-wool/catalogo?file=${encodeURIComponent(item.file)}#catalogo`);
  }

  return (
    <div
      id="top"
      className="font-['Manrope',sans-serif] transition-colors duration-300 animate-[fadeIn_2s_ease-out_forwards] wool-page"
    >
      <RouteSeo routePath="/handmade-wool" />
      <Header
        catalogItems={catalogItems}
        catalogLoading={catalogLoading}
        catalogError={catalogError}
        onCommitCatalogItem={commitCatalogItem}
      />

      <main>
        <Hero />
        <Collection />
        <Philosophy />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
