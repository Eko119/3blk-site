import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { Reveal } from "../primitives/Reveal";
import { PRINCIPLES } from "@/lib/site";

/**
 * The studio's position, stated in three principles. Set on the
 * Wine surface so it reads as an interleaf between the work and
 * the enquiry rather than another section of the same page.
 */
export function Studio() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      className="bg-wine py-section"
    >
      <Container className="flex flex-col gap-section-tight">
        <div className="grid grid-cols-12 gap-x-gutter gap-y-block">
          <SectionHeading
            id="studio-heading"
            eyebrow="The studio"
            lines={["We would rather", "be judged on", "the work."]}
            className="col-span-12 lg:col-span-6"
          />

          <Reveal delay={2} className="col-span-12 flex flex-col gap-6 lg:col-span-5 lg:col-start-8">
            <p className="text-body-lg text-text-secondary">
              3BLK Studios is a small design and development practice. We take
              on a handful of projects at a time and give each one the whole
              studio rather than a slice of it.
            </p>
            <p className="text-body-lg text-text-secondary">
              Building before billing is not a promotion. It is how we prefer to
              work: it removes the negotiation from the front of the project and
              puts the pressure where it belongs, on us, to be right.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-px border-t border-rule-wine md:grid-cols-3">
          {PRINCIPLES.map((principle, index) => (
            <Reveal
              as="li"
              key={principle.id}
              delay={index}
              className="flex flex-col gap-4 border-b border-rule-wine py-block md:border-b-0 md:pr-block"
            >
              <h3 className="font-display text-h2 text-text-primary">
                {principle.title}
              </h3>
              <p className="max-w-measure text-body text-text-secondary">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
