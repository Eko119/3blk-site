"use client";

import { useEffect } from "react";

/**
 * Plays every `.reveal` block on the page from one observer.
 *
 * Mounted once, near the end of the document. Elements drop out of
 * the observer as soon as they have played, so a long page settles
 * to zero listeners rather than holding one per animated block.
 */
export function RevealObserver() {
  useEffect(() => {
    const blocks = document.querySelectorAll<HTMLElement>(".reveal");

    // No observer support: show everything rather than nothing.
    if (typeof IntersectionObserver === "undefined") {
      for (const block of blocks) block.dataset["revealed"] = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset["revealed"] = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    for (const block of blocks) observer.observe(block);
    return () => observer.disconnect();
  }, []);

  return null;
}
