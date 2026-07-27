import type { CSSProperties } from "react";
import { Container } from "../primitives/Container";
import { MaskText } from "../primitives/MaskText";
import { ButtonLink } from "../primitives/Button";
import { PROMISE, SITE } from "@/lib/site";

/**
 * First screen. Everything here animates from CSS on load rather
 * than from an observer after hydration, so the largest text is
 * painting on the first frame instead of waiting for JavaScript.
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh flex-col justify-between pb-section-tight pt-[calc(var(--space-section)+4rem)]"
    >
      <Container className="flex flex-1 flex-col justify-center gap-block">
        <div className="hero-fade flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-overline uppercase text-text-tertiary">
          <span className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-text-accent" />
            Design-led web studio
          </span>
          <span aria-hidden="true" className="hidden h-px w-8 bg-rule-strong sm:block" />
          <span>{SITE.location}</span>
        </div>

        <MaskText
          as="h1"
          id="hero-heading"
          lines={PROMISE.headline}
          trigger="load"
          delay={1}
          className="font-display text-display-1 text-text-primary"
        />

        <div className="grid grid-cols-12 items-end gap-x-gutter gap-y-block">
          <p
            className="hero-fade col-span-12 max-w-measure text-body-lg text-text-secondary md:col-span-7 lg:col-span-6"
            style={{ "--reveal-delay": 5 } as CSSProperties}
          >
            {PROMISE.standfirst}
          </p>

          <div
            className="hero-fade col-span-12 flex flex-wrap items-center gap-4 md:col-span-5 md:justify-end lg:col-span-6"
            style={{ "--reveal-delay": 6 } as CSSProperties}
          >
            <ButtonLink href="#contact" variant="solid">
              Start a project
            </ButtonLink>
            <ButtonLink href="#work" variant="line">
              See the work
            </ButtonLink>
          </div>
        </div>
      </Container>

      <Container
        className="hero-fade mt-block"
        style={{ "--reveal-delay": 7 } as CSSProperties}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6 font-mono text-overline uppercase text-text-tertiary">
          <span>No deposit &middot; No obligation</span>
          <span className="hidden md:inline">{SITE.tagline}</span>
          <a
            href="#process"
            className="link-rule text-text-accent transition-colors duration-base ease-inout hover:text-clay-hover"
          >
            How it works
          </a>
        </div>
      </Container>
    </section>
  );
}
