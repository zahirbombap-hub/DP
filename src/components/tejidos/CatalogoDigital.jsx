import { useMemo, useState } from "react";
import { CatalogSearch } from "./CatalogSearch.jsx";
import { CATALOG_IMAGE_BASE_URL, CATEGORY_LABELS } from "./catalog.constants.js";

function toTokens(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function getCatalogTitle(item) {
  if (!item) return "";
  const tags = Array.isArray(item.tags) ? item.tags : [];
  const brand = tags[0] || "yuga";
  const color = tags[2] || tags[1] || "color";
  return `${brand} · ${color}`;
}

export function CatalogoDigital({
  items = [],
  loading = false,
  error = null,
  selectedFile,
  onSelectedFileChange,
  imageBaseUrl = CATALOG_IMAGE_BASE_URL,
}) {
  const [query, setQuery] = useState("");

  const tokens = useMemo(() => toTokens(query), [query]);

  const normalizedItems = useMemo(() => {
    if (!Array.isArray(items)) return [];
    return items
      .filter((it) => it && typeof it.file === "string")
      .map((it) => ({
        file: it.file,
        tags: Array.isArray(it.tags) ? it.tags.map((t) => String(t || "")) : [],
        category: typeof it.category === "string" ? it.category : "tops",
      }));
  }, [items]);

  const filteredItems = useMemo(() => {
    if (tokens.length === 0) return normalizedItems;
    return normalizedItems.filter((it) => {
      const haystack = [it.category, it.file, ...it.tags].join(" ").toLowerCase();
      return tokens.every((t) => haystack.includes(t));
    });
  }, [normalizedItems, tokens]);

  const selectedItem = useMemo(() => {
    if (!selectedFile) return null;
    return normalizedItems.find((it) => it.file === selectedFile) || null;
  }, [normalizedItems, selectedFile]);

  const previewItem = selectedItem || filteredItems[0] || null;

  return (
    <section
      id="catalogo"
      className="py-24 bg-[color:var(--color-bg)] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h2
              className="text-4xl md:text-5xl font-['Playfair_Display',serif] font-medium wool-heading wool-fade-up"
              style={{ "--delay": "0.05s" }}
            >
              Catálogo Digital
            </h2>
            <p
              className="wool-text max-w-2xl wool-fade-up"
              style={{ "--delay": "0.12s" }}
            >
              Explora el archivo visual de piezas artesanales. Filtra por tags
              (colores, estilos y usuario) y selecciona una imagen para verla en
              grande.
            </p>
          </div>

          <CatalogSearch
            items={normalizedItems}
            className="w-full lg:w-[28rem]"
            disabled={loading || Boolean(error)}
            placeholder={
              loading
                ? "Cargando catálogo..."
                : error
                  ? "Catálogo no disponible"
                  : "Buscar en el catálogo..."
            }
            query={query}
            onQueryChange={setQuery}
            selectedFile={selectedFile}
            onSelectedFileChange={onSelectedFileChange}
            onCommitSelection={(item) => onSelectedFileChange?.(item.file)}
          />
        </div>

        {error && (
          <div className="rounded-2xl border border-[#a54616]/20 bg-white/60 px-6 py-5 text-sm text-[#2b1e16] mb-10">
            No se pudo cargar el catálogo: {String(error)}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="rounded-3xl bg-[color:var(--color-surface)] border border-[#a54616]/15 p-5 md:p-6 wool-card">
              {previewItem ? (
                <div className="space-y-5">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-black/5">
                    <img
                      src={`${imageBaseUrl}${previewItem.file}`}
                      alt={getCatalogTitle(previewItem)}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl md:text-2xl font-bold wool-heading capitalize">
                        {getCatalogTitle(previewItem)}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#7b5a45]">
                        {CATEGORY_LABELS[previewItem.category] || previewItem.category}
                      </span>
                    </div>
                    {Array.isArray(previewItem.tags) && previewItem.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {previewItem.tags.map((tag) => (
                          <button
                            key={`${previewItem.file}-${tag}`}
                            type="button"
                            className="rounded-full bg-[#a54616]/10 text-[#a54616] px-3 py-1 text-xs font-semibold hover:bg-[#a54616]/15 transition-colors"
                            onClick={() => setQuery((prev) => `${prev} ${tag}`.trim())}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-sm text-slate-600">
                  {loading ? "Cargando catálogo..." : "No hay piezas para mostrar."}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-sm wool-text">
                Mostrando{" "}
                <span className="font-bold text-[color:var(--color-accent)]">
                  {filteredItems.length}
                </span>{" "}
                piezas
              </div>
              {query && (
                <button
                  type="button"
                  className="self-start sm:self-auto rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest bg-[#a54616] text-white hover:brightness-110 transition"
                  onClick={() => setQuery("")}
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {filteredItems.map((item) => {
                const isSelected = selectedFile === item.file;
                const title = getCatalogTitle(item);

                return (
                  <button
                    key={item.file}
                    type="button"
                    className={`group relative overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-black/5 transition ${
                      isSelected ? "ring-2 ring-[#a54616]/60" : "hover:ring-[#a54616]/40"
                    }`}
                    onClick={() => onSelectedFileChange?.(item.file)}
                    aria-label={`Seleccionar ${title}`}
                  >
                    <img
                      src={`${imageBaseUrl}${item.file}`}
                      alt={title}
                      className="h-40 sm:h-44 md:h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
                      <div className="text-xs font-bold uppercase tracking-widest opacity-90">
                        {CATEGORY_LABELS[item.category] || item.category}
                      </div>
                      <div className="text-sm font-semibold capitalize truncate">
                        {title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
