import { Container } from "../primitives/Container";
import { VeloxLogo } from "../brand/VeloxLogo";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-default py-12 md:py-16">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <VeloxLogo variant="mark-filled" className="h-8 w-8" />
          <div className="flex flex-col">
            <span className="text-label text-text-primary">{SITE.name}</span>
            <span className="text-body-sm text-text-tertiary">
              {SITE.subHeadline}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 md:items-end">
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            {SITE.contactEmail}
          </a>
          <span className="text-body-sm text-text-tertiary">
            © {year} {SITE.name}
          </span>
        </div>
      </Container>
    </footer>
  );
}
