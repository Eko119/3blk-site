import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { MaskText } from "@/components/primitives/MaskText";
import { NAV_LINKS } from "@/lib/site";

export const dynamic = "force-static";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section
      aria-labelledby="notfound-heading"
      className="flex min-h-svh items-center py-section"
    >
      <Container className="flex flex-col gap-block">
        <Eyebrow>Error 404</Eyebrow>

        <MaskText
          as="h1"
          id="notfound-heading"
          lines={["This page was", "never built."]}
          trigger="load"
          className="font-display text-display-2 text-text-primary"
        />

        <p className="hero-fade max-w-measure text-body-lg text-text-secondary">
          Which is unusual for us — normally we build first and ask questions
          afterwards. The rest of the studio is this way.
        </p>

        <nav aria-label="Site sections" className="hero-fade border-t border-rule pt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <Link
                href="/"
                className="link-rule font-mono text-overline uppercase text-text-accent transition-colors duration-base ease-inout hover:text-clay-hover"
              >
                Home
              </Link>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className="link-rule font-mono text-overline uppercase text-text-secondary transition-colors duration-base ease-inout hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
