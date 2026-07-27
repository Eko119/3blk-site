import { Container } from "../primitives/Container";
import { ThreeBlkMark } from "../brand/ThreeBlkLogo";
import { MaskText } from "../primitives/MaskText";
import { Reveal } from "../primitives/Reveal";
import { CHANNELS, NAV_LINKS, PROMISE, SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-ink pt-section">
      <Container className="flex flex-col gap-section-tight">
        <Reveal>
          <MaskText
            as="p"
            lines={[PROMISE.short]}
            className="font-display text-display-3 text-text-primary"
          />
        </Reveal>

        <div className="grid grid-cols-12 gap-x-gutter gap-y-block border-t border-rule pt-block">
          <div className="col-span-12 flex flex-col gap-5 sm:col-span-6 lg:col-span-4">
            <ThreeBlkMark className="h-10 w-auto text-oxblood" title={`${SITE.name} mark`} />
            <p className="max-w-measure text-body-sm text-text-secondary">
              {SITE.description}
            </p>
          </div>

          <nav aria-label="Footer" className="col-span-6 sm:col-span-3 lg:col-span-3 lg:col-start-7">
            <h2 className="mb-5 font-mono text-overline uppercase text-text-tertiary">
              Index
            </h2>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-rule text-body-sm text-text-secondary transition-colors duration-base ease-inout hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 sm:col-span-3 lg:col-span-3 lg:col-start-10">
            <h2 className="mb-5 font-mono text-overline uppercase text-text-tertiary">
              Studio
            </h2>
            <ul className="flex flex-col gap-3 text-body-sm text-text-secondary">
              {CHANNELS.map((channel) => (
                <li key={channel.id}>
                  <a
                    href={channel.href}
                    {...(channel.id === "instagram"
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="link-rule transition-colors duration-base ease-inout hover:text-text-primary"
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
              <li>{SITE.location}</li>
              <li className="text-text-tertiary">{SITE.tagline}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule py-8 font-mono text-overline uppercase text-text-tertiary">
          <span>
            &copy; {year} {SITE.name}
          </span>
          <a
            href="#hero"
            className="link-rule transition-colors duration-base ease-inout hover:text-text-primary"
          >
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
