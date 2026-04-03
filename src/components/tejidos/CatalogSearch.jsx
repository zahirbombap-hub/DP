import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Icon } from "../Icon.jsx";
import { CATALOG_IMAGE_BASE_URL, CATEGORY_LABELS } from "./catalog.constants.js";

const TAG_LABELS = {
  beige: "Beige",
  blue: "Azul",
  brown: "Café",
  charcoal: "Carbón",
  gray: "Gris",
  orange: "Naranja",
  red: "Rojo",
  white: "Blanco",
  yellow: "Amarillo",
  knit: "Tejido",
  handmade: "Hecho a mano",
  unisex: "Unisex",
  kids: "Niños",
  adults: "Adultos",
  dogs: "Perros",
};

const COLOR_ORDER = [
  "red",
  "orange",
  "yellow",
  "blue",
  "white",
  "beige",
  "brown",
  "charcoal",
  "gray",
];

const STYLE_ORDER = ["knit", "handmade", "crochet", "wool", "cotton"];

const USER_ORDER = ["unisex", "kids", "adults", "dogs"];

function toTokens(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function getTagLabel(tag) {
  return TAG_LABELS[tag] || tag;
}

export function CatalogSearch({
  items,
  closeToken = 0,
  disabled = false,
  imageBaseUrl = CATALOG_IMAGE_BASE_URL,
  className = "w-[22rem] max-w-full",
  placeholder = "Buscar pieza...",
  showTagReference = true,
  query: queryProp,
  onQueryChange,
  selectedFile: selectedFileProp,
  onSelectedFileChange,
  onSelectionChange,
  onCommitSelection,
}) {
  const instanceId = useId();
  const listboxId = `catalog-listbox-${instanceId}`;

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const isQueryControlled = typeof onQueryChange === "function";
  const [uncontrolledQuery, setUncontrolledQuery] = useState("");
  const query = isQueryControlled ? queryProp ?? "" : uncontrolledQuery;

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoveredFile, setHoveredFile] = useState(null);
  const isSelectedControlled = typeof onSelectedFileChange === "function";
  const [uncontrolledSelectedFile, setUncontrolledSelectedFile] = useState(null);
  const selectedFile = isSelectedControlled
    ? selectedFileProp ?? null
    : uncontrolledSelectedFile;

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
      const haystack = [it.category, it.file, ...it.tags].join(" ").toLowerCase();
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

  const flatResults = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

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

  const tagReference = useMemo(() => {
    if (!showTagReference || normalizedItems.length === 0) return [];

    const allTags = new Set();
    for (const it of normalizedItems) {
      for (const rawTag of it.tags || []) {
        const tag = String(rawTag || "").toLowerCase().trim();
        if (!tag) continue;
        allTags.add(tag);
      }
    }

    const colors = COLOR_ORDER.filter((t) => allTags.has(t));
    const styles = STYLE_ORDER.filter((t) => allTags.has(t));
    const users = USER_ORDER.filter((t) => allTags.has(t));

    const groups = [
      { key: "colors", label: "Colores", tags: colors },
      { key: "styles", label: "Estilos", tags: styles },
      { key: "users", label: "Usuario", tags: users },
    ];

    return groups.filter((g) => g.tags.length);
  }, [normalizedItems, showTagReference]);

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
    const el = document.getElementById(`catalog-option-${instanceId}-${activeIndex}`);
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

  function updateQuery(nextQuery) {
    if (disabled) return;
    if (isQueryControlled) {
      onQueryChange(nextQuery);
      return;
    }
    setUncontrolledQuery(nextQuery);
  }

  function updateSelectedFile(nextFile) {
    if (isSelectedControlled) {
      onSelectedFileChange(nextFile);
      return;
    }
    setUncontrolledSelectedFile(nextFile);
  }

  function addToken(token) {
    const currentTokens = toTokens(query);
    if (currentTokens.includes(token)) return;
    updateQuery(`${query} ${token}`.trim());
    openList();
    setActiveIndex(0);
    inputRef.current?.focus();
  }

  function handleSelect(item) {
    if (!item) return;
    updateSelectedFile(item.file);
    setIsOpen(false);
    setHoveredFile(null);
    onSelectionChange?.(item);
  }

  function commitSelected() {
    if (!selectedItem) return;
    if (typeof onCommitSelection === "function") {
      onCommitSelection(selectedItem);
      return;
    }
    if (typeof onSelectionChange === "function") {
      onSelectionChange(selectedItem);
      return;
    }
    window.open(`${imageBaseUrl}${selectedItem.file}`, "_blank", "noreferrer");
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
            updateQuery(e.target.value);
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
            <button
              type="button"
              className="flex items-center rounded-full bg-white/10 hover:bg-white/15 transition-colors"
              aria-label="Ver imagen seleccionada"
              onClick={commitSelected}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <img
                src={`${imageBaseUrl}${selectedItem.file}`}
                alt="Vista previa"
                className="h-7 w-7 rounded-full object-cover bg-white/10"
                loading="lazy"
                decoding="async"
              />
            </button>
            <button
              type="button"
              onClick={() => updateSelectedFile(null)}
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
          {tagReference.length > 0 && (
            <div className="px-4 py-3 border-b border-slate-200 bg-white/90">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Tags
              </div>
              <div className="mt-2 grid gap-2">
                {tagReference.map((group) => (
                  <div
                    key={group.key}
                    className="flex flex-wrap items-center gap-2"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                            tokens.includes(tag)
                              ? "bg-[#a54616] text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                          onClick={() => addToken(tag)}
                        >
                          {getTagLabel(tag)}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
