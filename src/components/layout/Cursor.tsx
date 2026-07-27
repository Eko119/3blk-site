"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, summary, input, textarea, label, [role='button']";

/**
 * A dot that tracks the pointer exactly and a ring that trails it.
 * Both are driven by transform inside a single animation frame, so
 * pointer movement never triggers layout or paint of anything else.
 *
 * Only mounts for real pointing devices, and stands down entirely
 * when the visitor has asked for reduced motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    const root = document.documentElement;
    root.dataset["cursor"] = "on";

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (dot === null || ring === null) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let frame = 0;

    const draw = () => {
      // The ring eases toward the pointer; the lag is the character.
      ringX += (pointerX - ringX) * 0.16;
      ringY += (pointerY - ringY) * 0.16;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = window.requestAnimationFrame(draw);
    };
    frame = window.requestAnimationFrame(draw);

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      root.dataset["cursorVisible"] = "true";
      root.dataset["cursorActive"] =
        event.target instanceof Element && event.target.closest(INTERACTIVE) !== null
          ? "true"
          : "false";
    };

    const onLeave = () => {
      root.dataset["cursorVisible"] = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      delete root.dataset["cursor"];
      delete root.dataset["cursorVisible"];
      delete root.dataset["cursorActive"];
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
