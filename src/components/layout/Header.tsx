"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Container } from "../primitives/Container";
import { ThreeBlkLockup } from "../brand/ThreeBlkLogo";
import { CHANNELS, EXTERNAL_LINK_PROPS, NAV_LINKS, SITE } from "@/lib/site";

/** Vertical midpoint of the 5rem bar — the line we test sections against. */
const HEADER_MID = 40;

type Tone = {
  readonly shell: string;
  readonly logo: string;
  readonly nav: string;
  readonly cta: string;
};

const INK_TONE = {
  logo: "text-text-primary hover:text-clay",
  nav: "text-text-secondary hover:text-text-primary",
  cta: "text-text-accent hover:text-clay-hover",
} as const;

const BONE_TONE: Tone = {
  shell: "border-rule-bone bg-bone/85 backdrop-blur-md",
  logo: "text-on-bone hover:text-on-bone-accent",
  nav: "text-on-bone-secondary hover:text-on-bone",
  cta: "text-on-bone-accent hover:text-oxblood",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [overBone, setOverBone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  /**
   * The bar gains its ground once the hero starts to leave, and
   * inverts to paper while a light section is passing beneath it —
   * without that, a dark band slides across the one part of the
   * page that is meant to read as print.
   */
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);

      const panels = document.querySelectorAll<HTMLElement>('[data-surface="bone"]');
      let hit = false;
      for (const panel of panels) {
        const rect = panel.getBoundingClientRect();
        if (rect.top <= HEADER_MID && rect.bottom >= HEADER_MID) {
          hit = true;
          break;
        }
      }
      setOverBone(hit);
    };

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const close = useCallback(() => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  }, []);

  /* While the menu is open: lock the page, hold focus inside the
     panel, and let Escape dismiss it. */
  useEffect(() => {
    if (!menuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusable === undefined || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (first === undefined || last === undefined) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [menuOpen, close]);

  /* The open menu is an ink panel, so the bar stays ink with it. */
  const tone: Tone =
    overBone && !menuOpen
      ? BONE_TONE
      : {
          ...INK_TONE,
          shell:
            scrolled || menuOpen
              ? "border-rule bg-ink/85 backdrop-blur-md"
              : "border-transparent bg-transparent",
        };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-slow ease-inout ${tone.shell}`}
      >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className={`transition-colors duration-base ease-inout ${tone.logo}`}
          aria-label={`${SITE.name} — home`}
        >
          <ThreeBlkLockup className="text-[0.95rem]" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`link-rule font-mono text-overline uppercase transition-colors duration-base ease-inout ${tone.nav}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/#contact"
          className={`link-rule hidden font-mono text-overline uppercase transition-colors duration-base ease-inout lg:inline-block ${tone.cta}`}
        >
          Start a project
        </Link>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => (menuOpen ? close() : setMenuOpen(true))}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          className={`flex items-center gap-3 font-mono text-overline uppercase transition-colors duration-base ease-inout lg:hidden ${tone.logo}`}
        >
          {menuOpen ? "Close" : "Menu"}
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-base ease-inout ${
                menuOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-base ease-inout ${
                menuOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
        </Container>
      </header>

      {/* Full-screen menu. Mounted only while open, so it costs
          nothing on first load and cannot be reached by tab.

          It is a sibling of the header rather than a child, and
          that is load-bearing: the header carries a backdrop
          filter, and a backdrop filter establishes a containing
          block for fixed-position descendants. Nested inside, this
          panel resolves `inset-0` against the 80px bar instead of
          the viewport and collapses to a sliver. */}
      {menuOpen ? (
        <div
          ref={panelRef}
          id="primary-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 top-20 z-40 flex flex-col justify-between overflow-y-auto bg-ink pb-section-tight pt-block lg:hidden"
        >
          <Container>
            <ul className="flex flex-col">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href} className="border-b border-rule">
                  <Link
                    href={link.href}
                    onClick={close}
                    className="hero-fade flex items-baseline justify-between gap-6 py-6 font-display text-display-3 text-text-primary transition-colors duration-base ease-inout hover:text-clay"
                    style={{ "--reveal-delay": index } as CSSProperties}
                  >
                    {link.label}
                    <span className="font-mono text-overline uppercase text-text-tertiary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>

          <Container className="flex flex-col gap-3 pt-block">
            {CHANNELS.map((channel) => (
              <a
                key={channel.id}
                href={channel.href}
                {...(channel.external ? EXTERNAL_LINK_PROPS : {})}
                className="link-rule self-start font-display text-h2 text-text-primary"
              >
                {channel.value}
              </a>
            ))}
            <span className="font-mono text-overline uppercase text-text-tertiary">
              {SITE.location}
            </span>
          </Container>
        </div>
      ) : null}
    </>
  );
}
