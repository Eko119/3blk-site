import { Container } from "../primitives/Container";
import { ThreeBlkLogo } from "../brand/ThreeBlkLogo";

const NAV_LINKS: ReadonlyArray<{ readonly href: string; readonly label: string }> = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-base/80 backdrop-blur border-b border-border-default">
      <Container className="flex h-16 items-center justify-between">
        <a href="#hero" aria-label="3BLK — home" className="flex items-center">
          <ThreeBlkLogo variant="primary" className="h-7 w-auto" />
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-default ease-standard"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-md bg-accent px-4 py-2 text-label font-medium text-text-inverse hover:bg-accent/90 transition-colors duration-default ease-standard"
        >
          Book a call
        </a>
      </Container>
    </header>
  );
}
