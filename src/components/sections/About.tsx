import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-32 border-t border-border-default"
    >
      <Container>
        <div className="flex flex-col gap-10 max-w-3xl">
          <SectionHeading id="about-heading" eyebrow="About">
            One person, full focus.
          </SectionHeading>
          <div className="flex flex-col gap-5 text-body-lg text-text-secondary">
            <p>
              I&apos;m the studio. One person, full focus, no relay between strategy and shipping.
              Velox builds production websites in 3 weeks. The contract is simple: I do the work,
              you keep the asset, and the site converts the audience it was built for.
            </p>
            <p>
              For 8 years I&apos;ve designed and shipped brand sites for studios, performers, and
              operators who needed the next launch to land. The pattern that wins isn&apos;t
              &ldquo;innovation&rdquo; — it&apos;s discipline. A real audience. A real position.
              A real page that loads in under 1 second and reads cleanly on a phone in a bad mood.
            </p>
            <p>
              Velox is what&apos;s left after I removed the parts that don&apos;t move the needle.
              No retainers. No half-built CMS. No dead pages. If you&apos;re between agencies and
              freelancers, this is the third option. Tell me what you&apos;re trying to do.
              I&apos;ll tell you if I can help.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
