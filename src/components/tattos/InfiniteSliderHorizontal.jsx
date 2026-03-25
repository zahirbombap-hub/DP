export function InfiniteSliderHorizontal({
  items = [],
  renderItem,
  speed = 48,
  direction = "left",
  pauseOnHover = true,
  gap = "1rem",
  className = "",
  trackClassName = "",
  itemClassName = "",
  ariaLabel = "Carrusel horizontal infinito",
}) {
  if (!Array.isArray(items) || items.length === 0 || typeof renderItem !== "function") {
    return null;
  }

  const rootClasses = ["infinite-slider-horizontal", pauseOnHover && "infinite-slider-horizontal--pause", className]
    .filter(Boolean)
    .join(" ");
  const trackClasses = ["infinite-slider-horizontal__track", direction === "right" && "is-reverse", trackClassName]
    .filter(Boolean)
    .join(" ");
  const itemClasses = ["infinite-slider-horizontal__item", itemClassName].filter(Boolean).join(" ");

  return (
    <div
      className={rootClasses}
      role="region"
      aria-label={ariaLabel}
      style={{
        "--slider-gap": gap,
        "--scroll-duration": `${speed}s`,
      }}
    >
      <div className="infinite-slider-horizontal__viewport">
        <div className={trackClasses}>
          <div className="infinite-slider-horizontal__group">
            {items.map((item, index) => (
              <div className={itemClasses} key={`primary-${index}-${item?.id ?? item?.src ?? item}`}>
                {renderItem(item, index, false)}
              </div>
            ))}
          </div>
          <div className="infinite-slider-horizontal__group" aria-hidden="true">
            {items.map((item, index) => (
              <div className={itemClasses} key={`clone-${index}-${item?.id ?? item?.src ?? item}`}>
                {renderItem(item, index, true)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .infinite-slider-horizontal {
          width: 100%;
        }

        .infinite-slider-horizontal__viewport {
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%);
        }

        .infinite-slider-horizontal__track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: infinite-slider-horizontal-scroll var(--scroll-duration, 48s) linear infinite;
        }

        .infinite-slider-horizontal__track.is-reverse {
          animation-direction: reverse;
        }

        .infinite-slider-horizontal__group {
          display: flex;
          align-items: stretch;
          gap: var(--slider-gap, 1rem);
          padding-right: var(--slider-gap, 1rem);
          flex-shrink: 0;
        }

        .infinite-slider-horizontal__item {
          flex: 0 0 auto;
        }

        .infinite-slider-horizontal--pause:hover .infinite-slider-horizontal__track,
        .infinite-slider-horizontal--pause:focus-within .infinite-slider-horizontal__track,
        .infinite-slider-horizontal--pause:active .infinite-slider-horizontal__track {
          animation-play-state: paused;
        }

        @keyframes infinite-slider-horizontal-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .infinite-slider-horizontal__viewport {
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-mask-image: none;
            mask-image: none;
          }

          .infinite-slider-horizontal__track {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
