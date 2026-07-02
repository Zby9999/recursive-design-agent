"use client";

import { getSvgPath } from "figma-squircle";
import { useEffect, useRef } from "react";

export function useSquircle<T extends HTMLElement>(
  cornerRadius: number,
  cornerSmoothing = 0.6
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const update = () => {
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (!width || !height) return;
      const path = getSvgPath({
        width,
        height,
        cornerRadius,
        cornerSmoothing
      });
      el.style.clipPath = `path('${path}')`;
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [cornerRadius, cornerSmoothing]);

  return ref;
}
