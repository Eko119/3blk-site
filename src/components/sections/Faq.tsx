import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { Reveal } from "../primitives/Reveal";
import { FAQ } from "@/lib/site";

/**
 * The obvious objections, answered. Built on native details and
 * summary elements: keyboard operable, announced correctly and
 * open to in-page search without a line of JavaScript.
 */
export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-rule py-section"
    >
      <Container>
        <div className="grid grid-cols-12 gap-x-gutter gap-y-section-tight">
          <SectionHeading
            id="faq-heading"
            eyebrow="Before you ask"
            lines={["The questions", "everyone asks", "second."]}
            className="col-span-12 lg:col-span-4"
          />

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-rule">
              {FAQ.map((item, index) => (
                <Reveal as="li" key={item.id} delay={index} className="border-b border-rule">
                  <details className="group/faq">
                    <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-7 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                      <h3 className="font-display text-h2 text-text-primary transition-colors duration-base ease-inout group-hover/faq:text-clay">
                        {item.question}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="relative mt-2 h-3 w-3 shrink-0"
                      >
                        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-text-accent" />
                        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-text-accent transition-transform duration-base ease-inout group-open/faq:rotate-90 group-open/faq:opacity-0" />
                      </span>
                    </summary>
                    <p className="max-w-measure-wide pb-8 text-body-lg text-text-secondary">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
