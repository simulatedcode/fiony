"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useAppStore } from "../../store/useAppStore";

export default function PageTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { isPreloadComplete } = useAppStore();

  useEffect(() => {
    if (!isPreloadComplete || !containerRef.current) return;

    const el = containerRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [pathname, isPreloadComplete]);

  return (
    <div ref={containerRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}