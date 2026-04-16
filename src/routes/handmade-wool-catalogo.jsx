import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../components/tejidos/tejidos.css";
import { Header } from "../components/tejidos/Header.jsx";
import { CatalogoDigital } from "../components/tejidos/CatalogoDigital.jsx";
import { Footer } from "../components/tejidos/Footer.jsx";
import { CATALOG_URL } from "../components/tejidos/catalog.constants.js";
import { RouteSeo } from "../components/Seo.jsx";

function getSelectedFile(search) {
  const params = new URLSearchParams(search || "");
  const file = params.get("file");
  return file ? String(file) : null;
}

export default function HandmadeWoolCatalogo() {
  const location = useLocation();
  const [catalogItems, setCatalogItems] = useState([]);
  const [catalogError, setCatalogError] = useState(null);
  const [catalogLoading, setCatalogLoading] = useState(true);
  const [selectedCatalogFile, setSelectedCatalogFile] = useState(() =>
    getSelectedFile(location.search)
  );

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

  useEffect(() => {
    const next = getSelectedFile(location.search);
    if (next) setSelectedCatalogFile(next);
  }, [location.search]);

  function commitCatalogItem(item) {
    if (!item?.file) return;
    setSelectedCatalogFile(item.file);
    document.getElementById("catalogo")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div
      id="top"
      className="font-['Manrope',sans-serif] transition-colors duration-300 animate-[fadeIn_2s_ease-out_forwards] wool-page"
    >
      <RouteSeo routePath="/handmade-wool/catalogo" noindexWhenSearch />
      <Header
        catalogItems={catalogItems}
        catalogLoading={catalogLoading}
        catalogError={catalogError}
        onCommitCatalogItem={commitCatalogItem}
      />

      <main>
        <CatalogoDigital
          items={catalogItems}
          loading={catalogLoading}
          error={catalogError}
          selectedFile={selectedCatalogFile}
          onSelectedFileChange={setSelectedCatalogFile}
        />
      </main>

      <Footer />
    </div>
  );
}
