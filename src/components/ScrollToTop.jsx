import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  // Disable native scroll restoration so browser doesn't restore position on navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prev = window.history?.scrollRestoration;
    try {
      if (typeof window !== "undefined" && "scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    } catch (e) {}
    return () => {
      try {
        if (typeof window !== "undefined" && "scrollRestoration" in window.history) window.history.scrollRestoration = prev;
      } catch (e) {}
    };
  }, []);

  // Ensure we jump to the top immediately when pathname changes (before paint)
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    // Prevent visible scrolling animation by hiding overflow, jump to top, then restore overflow after paint
    const doc = document.documentElement;
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevScrollBehavior = doc.style.scrollBehavior;

    try {
      // Force instant scroll behavior
      doc.style.scrollBehavior = 'instant';
      // Hide scrollbars to prevent visible jump
      body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch (e) {}

    // Restore overflow on next animation frames so the user doesn't see the scroll
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        try {
          body.style.overflow = prevOverflow || '';
          doc.style.scrollBehavior = prevScrollBehavior || '';
        } catch (e) {}
      });
      // store raf id to allow potential cleanup, though unlikely needed
      // eslint-disable-next-line no-undef
      window.__scrollRaf2 = raf2;
    });

    return () => {
      try {
        cancelAnimationFrame(raf1);
        const raf2 = window.__scrollRaf2;
        if (raf2) cancelAnimationFrame(raf2);
        body.style.overflow = prevOverflow || '';
        doc.style.scrollBehavior = prevScrollBehavior || '';
      } catch (e) {}
    };
  }, [pathname]);

  return null;
}
