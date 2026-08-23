"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/** Serif webfonts and lazy images shift layout, which invalidates trigger
 *  positions measured on first paint. */
export function MotionRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
}
