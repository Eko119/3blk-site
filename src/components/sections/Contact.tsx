import { Container } from "../primitives/Container";
import { Eyebrow } from "../primitives/Eyebrow";
import { MaskText } from "../primitives/MaskText";
import { Reveal } from "../primitives/Reveal";
import { Button } from "../primitives/Button";
import { ContactStatus } from "./ContactStatus";
import { CHANNELS, CONTACT, EXTERNAL_LINK_PROPS } from "@/lib/site";

const FIELD =
  "w-full border-b border-rule-strong bg-transparent pb-3 pt-2 text-body-lg text-text-primary transition-colors duration-base ease-inout placeholder:text-text-tertiary hover:border-clay focus:border-clay focus:outline-none focus-visible:outline-none";

const LABEL = "font-mono text-overline uppercase text-text-tertiary";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-rule py-section"
    >
      <Container>
        <div className="grid grid-cols-12 gap-x-gutter gap-y-section-tight">
          <div className="col-span-12 flex flex-col gap-block lg:col-span-5">
            <Reveal>
              <Eyebrow>Start here</Eyebrow>
            </Reveal>

            <Reveal delay={1}>
              <MaskText
                as="h2"
                id="contact-heading"
                lines={CONTACT.heading}
                className="font-display text-display-2 text-text-primary"
              />
            </Reveal>

            <Reveal delay={2}>
              <p className="max-w-measure text-body-lg text-text-secondary">
                {CONTACT.standfirst}
              </p>
            </Reveal>

            <Reveal delay={3} className="flex flex-col gap-5 border-t border-rule pt-6">
              <ul className="flex flex-col gap-3">
                {CHANNELS.map((channel) => (
                  <li key={channel.id} className="flex flex-col gap-1">
                    <span className="font-mono text-overline uppercase text-text-tertiary">
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      {...(channel.external ? EXTERNAL_LINK_PROPS : {})}
                      className="link-rule self-start font-display text-h2 text-text-primary transition-colors duration-base ease-inout hover:text-clay"
                    >
                      {channel.value}
                    </a>
                  </li>
                ))}
              </ul>
              <span className="font-mono text-overline uppercase text-text-tertiary">
                {CONTACT.responseNote}
              </span>
            </Reveal>
          </div>

          <Reveal delay={1} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <form action="/api/contact" method="POST" className="flex flex-col gap-block">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className={LABEL}>
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={FIELD}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className={LABEL}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={FIELD}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className={LABEL}>
                  What are you building?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className={`${FIELD} resize-y`}
                />
              </div>

              {/* Honeypot — hidden from people, tempting to bots. */}
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="contact-company">Company (leave blank)</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-5">
                <Button type="submit" variant="solid" className="self-start">
                  Send it over
                </Button>
                <ContactStatus />
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
