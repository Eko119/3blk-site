import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { Reveal } from "../primitives/Reveal";
import { CAPABILITIES } from "@/lib/site";

/**
 * What the studio does, laid out on a hairline grid. The cells
 * share rules rather than each carrying a box, which keeps the
 * page architectural instead of card-based.
 */
export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="border-t border-rule py-section"
    >
      <Container className="flex flex-col gap-section-tight">
        <SectionHeading
          id="capabilities-heading"
          eyebrow="Capabilities"
          lines={["Design, built.", "Not designed,", "then handed over."]}
          standfirst="One studio takes the work from first conversation to live site. Nothing is briefed sideways to a third party and nothing is lost in the gap between the design and the build."
          className="max-w-measure-wide"
        />

        <ul className="grid grid-cols-1 border-t border-rule md:grid-cols-2">
          {CAPABILITIES.map((capability, index) => (
            <Reveal
              as="li"
              key={capability.id}
              delay={index % 2}
              className="group flex flex-col gap-6 border-b border-rule py-block md:odd:border-r md:odd:pr-block md:even:pl-block"
            >
              <div className="flex items-baseline gap-5">
                <span
                  aria-hidden="true"
                  className="font-mono text-overline uppercase text-text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-h1 text-text-primary">
                  {capability.title}
                </h3>
              </div>

              <p className="max-w-measure text-body text-text-secondary">
                {capability.body}
              </p>

              <ul className="mt-auto flex flex-wrap gap-x-2 gap-y-2 pt-2">
                {capability.detail.map((item) => (
                  <li
                    key={item}
                    className="border border-rule px-3 py-1.5 font-mono text-overline uppercase text-text-tertiary transition-colors duration-base ease-inout group-hover:border-rule-strong"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
