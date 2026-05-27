import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 border-t border-border-default"
    >
      <Container>
        <div className="flex flex-col gap-10 max-w-2xl">
          <SectionHeading
            id="contact-heading"
            eyebrow="Get in touch"
            description="Tell me what you're trying to ship. If I can help, I'll say so. If I can't, I'll point you somewhere that can."
          >
            Start a conversation.
          </SectionHeading>
          <form
            action="/api/contact"
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-label text-text-secondary">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="bg-elevated border border-border-default rounded-md px-4 py-3 text-body text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-label text-text-secondary">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="bg-elevated border border-border-default rounded-md px-4 py-3 text-body text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-label text-text-secondary">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="bg-elevated border border-border-default rounded-md px-4 py-3 text-body text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none resize-y"
              />
            </div>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="contact-company">Company (leave blank)</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="self-start inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-label font-medium text-text-inverse hover:bg-accent/90 transition-colors duration-default ease-standard"
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
