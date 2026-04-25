"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ScrollObserver Component
 * 
 * This component acts as a global listener to ensure GSAP ScrollTrigger
 * stays in sync with the page layout. It handles:
 * 1. Refreshing triggers when the route changes.
 * 2. Refreshing triggers when the window is resized.
 * 3. Refreshing triggers when images are loaded (preventing layout shifts).
 */
export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Refresh ScrollTrigger when pathname changes
    // This is a safety net in case components don't refresh themselves
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 800); // Give it a bit more time for transitions and hydration

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Global refresh on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Global refresh when all images are loaded
    // This is important for static sites where images might pop in
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);

    // Observe body height changes (useful for dynamic content)
    // This catches layout shifts from lazy-loaded elements
    let lastHeight = typeof document !== 'undefined' ? document.body.clientHeight : 0;
    const interval = setInterval(() => {
      if (typeof document !== 'undefined') {
        const currentHeight = document.body.clientHeight;
        if (currentHeight !== lastHeight) {
          lastHeight = currentHeight;
          ScrollTrigger.refresh();
        }
      }
    }, 2000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
      clearInterval(interval);
    };
  }, []);

  return null;
}
