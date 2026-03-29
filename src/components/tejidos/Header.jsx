import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Icon } from "../Icon.jsx";

const CATALOG_URL = "/multimedia/Yuga/catalogo/catalog.json";
const CATALOG_IMAGE_BASE_URL = "/multimedia/Yuga/catalogo/";

const CATEGORY_LABELS = {
  tops: "Tops",
  bottoms: "Bottoms",
  accessories: "Accesorios",
  sets: "Sets",
};

function toTokens(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function SmartComboBox({
  items,
  closeToken = 0,
  disabled = false,
  imageBaseUrl = CATALOG_IMAGE_BASE_URL,
  className = "w-[22rem] max-w-full",
  placeholder = "Buscar pieza...",
}) {
  const instanceId = useId();
  const listboxId = `catalog-listbox-${instanceId}`;

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoveredFile, setHoveredFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const tokens = useMemo(() => toTokens(query), [query]);

  const filtered = useMemo(() => {
    if (tokens.length === 0) return normalizedItems;
    return normalizedItems.filter((it) => {
      const haystack = [it.category, it.file, ...it.tags]
        .join(" ")
        .toLowerCase();
      return tokens.every((t) => haystack.includes(t));
    });
  }, [normalizedItems, tokens]);

  const grouped = useMemo(() => {
    const buckets = new Map();
    for (const it of filtered) {
      const key = it.category || "tops";
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(it);
    }

    const order = ["tops", "bottoms", "accessories", "sets"];
    return Array.from(buckets.entries())
      .sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]))
      .map(([category, groupItems]) => ({ category, items: groupItems }));
  }, [filtered]);

  const flatResults = useMemo(
    () => grouped.flatMap((g) => g.items),
    [grouped]
  );

  const indexByFile = useMemo(() => {
    const map = new Map();
    flatResults.forEach((it, i) => map.set(it.file, i));
    return map;
  }, [flatResults]);

  const selectedItem = useMemo(() => {
    if (!selectedFile) return null;
    return normalizedItems.find((it) => it.file === selectedFile) || null;
  }, [normalizedItems, selectedFile]);

  const previewItem = useMemo(() => {
    const activeFile =
      hoveredFile || (activeIndex >= 0 ? flatResults[activeIndex]?.file : null);
    const file = activeFile || selectedFile;
    if (!file) return null;
    return (
      flatResults.find((it) => it.file === file) ||
      normalizedItems.find((it) => it.file === file) ||
      null
    );
  }, [activeIndex, flatResults, hoveredFile, normalizedItems, selectedFile]);

  useEffect(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, [closeToken]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen || activeIndex < 0) return;
    const el = document.getElementById(
      `catalog-option-${instanceId}-${activeIndex}`
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, instanceId, isOpen]);

  function openList() {
    if (disabled) return;
    setIsOpen(true);
    setActiveIndex((prev) => {
      if (prev >= 0) return prev;
      return flatResults.length ? 0 : -1;
    });
  }

  function handleSelect(item) {
    if (!item) return;
    setSelectedFile(item.file);
    setIsOpen(false);
    setHoveredFile(null);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) return openList();
      setActiveIndex((i) => Math.min(i + 1, flatResults.length - 1));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) return openList();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }

    if (e.key === "Enter") {
      if (!isOpen) {
        e.preventDefault();
        return openList();
      }
      if (activeIndex >= 0 && flatResults[activeIndex]) {
        e.preventDefault();
        handleSelect(flatResults[activeIndex]);
      }
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <div
        className={`flex items-center gap-2 rounded-full border px-3 py-2 transition-colors focus-within:border-white/35 ${
          disabled
            ? "border-white/10 bg-white/5"
            : "border-white/20 bg-white/10 focus-within:bg-white/15"
        }`}
        onMouseDown={(e) => {
          if (disabled) return;
          const target = e.target;
          if (target instanceof Element && target.closest("button,a")) return;
          inputRef.current?.focus();
          openList();
        }}
      >
        <Icon name="search" className="text-white/85 text-lg" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            openList();
            setActiveIndex(0);
          }}
          onFocus={openList}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-white placeholder:text-white/70 outline-none disabled:cursor-not-allowed"
          type="text"
          disabled={disabled}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={
            isOpen && activeIndex >= 0
              ? `catalog-option-${instanceId}-${activeIndex}`
              : undefined
          }
        />

        {selectedItem && (
          <div className="ml-1 flex items-center gap-2">
            <a
              className="flex items-center rounded-full bg-white/10 hover:bg-white/15 transition-colors"
              href={`${imageBaseUrl}${selectedItem.file}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir imagen seleccionada en una nueva pestaña"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <img
                src={`${imageBaseUrl}${selectedItem.file}`}
                alt="Vista previa"
                className="h-7 w-7 rounded-full object-cover bg-white/10"
                loading="lazy"
                decoding="async"
              />
            </a>
            <button
              type="button"
              onClick={() => setSelectedFile(null)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Limpiar selección"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <Icon name="close" className="text-base" />
            </button>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 overflow-hidden rounded-xl bg-white/95 text-slate-900 shadow-2xl ring-1 ring-black/10 backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_11rem]">
            <div
              id={listboxId}
              role="listbox"
              className="max-h-80 overflow-auto py-1"
              aria-label="Resultados del catálogo"
            >
              {flatResults.length === 0 ? (
                <div className="px-4 py-6 text-sm text-slate-600">
                  No hay resultados para “{query}”.
                </div>
              ) : (
                grouped.map((group) => (
                  <div key={group.category}>
                    <div className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {CATEGORY_LABELS[group.category] || group.category}
                    </div>
                    {group.items.map((item) => {
                      const optionIndex = indexByFile.get(item.file);
                      const isActive = optionIndex === activeIndex;
                      const isSelected = selectedFile === item.file;
                      const title = `${item.tags?.[0] || "Producto"} · ${
                        item.tags?.[2] || "color"
                      }`;
                      const subtitle = `${
                        CATEGORY_LABELS[item.category] || item.category
                      } · ${item.tags?.[3] || "knit"} · ${
                        item.tags?.[4] || "handmade"
                      }`;

                      return (
                        <button
                          key={item.file}
                          id={`catalog-option-${instanceId}-${optionIndex}`}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onMouseEnter={() => setHoveredFile(item.file)}
                          onMouseLeave={() => setHoveredFile(null)}
                          onFocus={() => {
                            if (typeof optionIndex === "number") {
                              setActiveIndex(optionIndex);
                            }
                          }}
                          onClick={() => handleSelect(item)}
                          className={`w-full px-4 py-2 flex items-center gap-3 text-left transition-colors ${
                            isActive ? "bg-slate-100" : "hover:bg-slate-50"
                          }`}
                        >
                          <img
                            src={`${imageBaseUrl}${item.file}`}
                            alt="Miniatura"
                            className={`h-10 w-10 rounded-lg object-cover bg-slate-200 ring-1 ring-black/5 ${
                              isSelected ? "ring-2 ring-[#a54616]/60" : ""
                            }`}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-semibold capitalize">
                              {title}
                            </div>
                            <div className="truncate text-[11px] text-slate-600">
                              {subtitle}
                            </div>
                          </div>
                          <Icon
                            name="chevron_right"
                            className="text-slate-400 text-lg"
                          />
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            <div className="hidden sm:block border-l border-slate-200 p-3">
              {previewItem ? (
                <div className="space-y-2">
                  <div className="aspect-square overflow-hidden rounded-lg bg-slate-100 ring-1 ring-black/5">
                    <img
                      src={`${imageBaseUrl}${previewItem.file}`}
                      alt="Vista previa"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="text-xs text-slate-600">
                    <div className="font-bold capitalize">
                      {(previewItem.tags?.[0] || "Producto") +
                        " · " +
                        (previewItem.tags?.[2] || "color")}
                    </div>
                    <div className="capitalize">
                      {(CATEGORY_LABELS[previewItem.category] ||
                        previewItem.category) +
                        " · " +
                        (previewItem.tags?.[4] || "")}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-600">
                  Pasa el mouse por un resultado para ver la imagen.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [catalogItems, setCatalogItems] = useState([]);
  const [catalogError, setCatalogError] = useState(null);
  const [catalogLoading, setCatalogLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comboCloseToken, setComboCloseToken] = useState(0);

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
    if (!mobileMenuOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setComboCloseToken((t) => t + 1);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    function handleChange(e) {
      if (e.matches) {
        setMobileMenuOpen(false);
        setComboCloseToken((t) => t + 1);
      }
    }

    handleChange(mq);

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    }

    mq.addListener(handleChange);
    return () => mq.removeListener(handleChange);
  }, []);

  function openMobileMenu() {
    setMobileMenuOpen(true);
    setComboCloseToken((t) => t + 1);
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setComboCloseToken((t) => t + 1);
  }

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#a54616] border-b border-white/15 wool-fade-up [--delay:0.05s]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <a
            className="flex items-center gap-3 group transform transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1"
            href="#top"
          >
            <span className="wool-logo-float flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/70 bg-[#a54616] shadow-none md:h-16 md:w-16">
              <img
                src="/multimedia/Yuga/yuya_logoNB.webp"
                alt="Yuga"
                className="block h-full w-full object-contain p-1 md:p-1.5"
              />
            </span>
            <h2 className="text-lg leading-none md:text-xl font-bold tracking-tight font-['Playfair_Display',serif] text-white transform transition-all duration-200 ease-out group-hover:-translate-y-1">
              <span className="block">Tejidos</span>
              <span className="block">Yuga</span>
            </h2>
          </a>
          <a
            href="/"
            className="group w-12 h-12 rounded-full bg-transparent border-0 flex items-center justify-center shadow-none hover:shadow-none transition-all md:w-14 md:h-14"
            aria-label="Volver a Don Prueba"
          >
            <img
              src="/multimedia/logoDP.png"
              alt="Don Prueba"
              className="w-7 h-7 object-contain transform transition-transform duration-200 ease-out group-hover:scale-105 md:w-8 md:h-8"
            />
          </a>
        </div>

        <div className="flex-1 hidden lg:flex justify-center">
          <nav className="flex items-center gap-8">
            <a
              className="text-sm font-semibold text-white hover:text-[#fff3dd] transition-colors wool-link"
              href="#oficio"
            >
              El Oficio
            </a>
            <a
              className="text-sm font-semibold text-white hover:text-[#fff3dd] transition-colors wool-link"
              href="#materiales"
            >
              Materiales
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex items-center">
            <SmartComboBox
              items={catalogItems}
              closeToken={comboCloseToken}
              className="w-[22rem]"
              disabled={catalogLoading || Boolean(catalogError)}
              placeholder={
                catalogLoading
                  ? "Cargando catálogo..."
                  : catalogError
                    ? "Catálogo no disponible"
                    : "Buscar pieza..."
              }
            />
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              className="text-xs uppercase tracking-widest font-bold text-[#ffd18a] hover:text-[#ffe2b5] transition-colors border-b border-[#ffd18a]/40 pb-0.5 wool-link"
              href="#catalogo"
            >
              Catálogo Digital
            </a>
            <a
              className="text-xs uppercase tracking-widest font-bold text-white hover:text-[#fff3dd] transition-colors wool-link"
              href="#contacto"
            >
              Contacto
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/15 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} className="text-white text-xl" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black"
          onMouseDown={closeMobileMenu}
        />

        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85%] bg-[#a54616] text-white border-r border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onMouseDown={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <div className="h-full flex flex-col p-6 gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl border border-white/40 bg-white/5 flex items-center justify-center">
                  <img
                    src="/multimedia/Yuga/yuya_logoNB.webp"
                    alt="Yuga"
                    className="h-8 w-8 object-contain"
                  />
                </span>
                <div className="leading-tight">
                  <div className="text-sm uppercase tracking-widest text-white/80">
                    Tejidos
                  </div>
                  <div className="text-lg font-bold font-['Playfair_Display',serif]">
                    Yuga
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
                onClick={closeMobileMenu}
                aria-label="Cerrar menú"
              >
                <Icon name="close" className="text-white text-xl" />
              </button>
            </div>

            <SmartComboBox
              items={catalogItems}
              closeToken={comboCloseToken}
              className="w-full"
              disabled={catalogLoading || Boolean(catalogError)}
              placeholder={
                catalogLoading
                  ? "Cargando catálogo..."
                  : catalogError
                    ? "Catálogo no disponible"
                    : "Buscar en el catálogo..."
              }
            />

            <nav className="flex flex-col gap-3">
              <a
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 font-semibold transition-colors"
                href="#oficio"
                onClick={closeMobileMenu}
              >
                El Oficio
              </a>
              <a
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 font-semibold transition-colors"
                href="#materiales"
                onClick={closeMobileMenu}
              >
                Materiales
              </a>
              <a
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 font-semibold transition-colors"
                href="#catalogo"
                onClick={closeMobileMenu}
              >
                Catálogo Digital
              </a>
              <a
                className="rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 font-semibold transition-colors"
                href="#contacto"
                onClick={closeMobileMenu}
              >
                Contacto
              </a>
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10">
              <a
                href="/"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                onClick={closeMobileMenu}
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <img
                    src="/multimedia/logoDP.png"
                    alt="Don Prueba"
                    className="h-6 w-6 object-contain"
                  />
                </span>
                <span className="text-sm font-semibold">Volver a Don Prueba</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
