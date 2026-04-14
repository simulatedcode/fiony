"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useAppStore } from "../store/useAppStore";

export default function useLenis() {
  const { isPreloadComplete } = useAppStore();

  useEffect(() => {
    if (!isPreloadComplete) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isPreloadComplete]);
}