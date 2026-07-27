import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { Reveal } from "../primitives/Reveal";
import { ButtonLink } from "../primitives/Button";
import { PROCESS } from "@/lib/site";

/**
 * The offer, set out step by step. Rendered on the Bone surface —
 * the one place the site turns to paper — because this is the
 * argument the studio rests on and it should read like a printed
 * page rather than another dark panel.
 */
export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      data-surface="bone"
      className="on-bone bg-bone py-section text-on-bone"
    >
      <Container className="flex flex-col gap-section-tight">
        <div className="grid grid-cols-12 gap-x-gutter gap-y-block">
          <SectionHeading
            id="process-heading"
            eyebrow="How it works"
            lines={["Four steps.", "One of them is", "you saying no."]}
            onBone
            className="col-span-12 lg:col-span-7"
          />
          <Reveal
            delay={2}
            className="col-span-12 self-end lg:col-span-4 lg:col-start-9"
          >
            <p className="text-body-lg text-on-bone-secondary">
              Most studios ask for half the fee before a single page exists. We
              think that gets the order wrong. The work should earn the invoice,
              not the other way round.
            </p>
          </Reveal>
        </div>

        <ol className="flex flex-col">
          {PROCESS.map((step, index) => (
            <Reveal
              as="li"
              key={step.id}
              delay={index}
              className="group grid grid-cols-12 items-baseline gap-x-gutter gap-y-4 border-t border-rule-bone py-block last:border-b"
            >
              <span
                aria-hidden="true"
                className="col-span-3 font-display text-display-3 leading-none text-on-bone-accent transition-transform duration-slow ease-out group-hover:translate-x-1 sm:col-span-2"
              >
                {step.index}
              </span>

              <h3 className="col-span-9 font-display text-h1 sm:col-span-4">
                {step.title}
              </h3>

              <p className="col-span-12 max-w-measure text-body text-on-bone-secondary sm:col-span-6 lg:col-span-4">
                {step.body}
              </p>

              <span className="col-span-12 font-mono text-overline uppercase tracking-[var(--tracking-overline)] text-on-bone-tertiary lg:col-span-2 lg:text-right">
                {step.note}
              </span>
            </Reveal>
          ))}
        </ol>

        <Reveal className="flex flex-wrap items-center gap-x-block gap-y-6">
          <ButtonLink href="#contact" variant="line-on-bone">
            Book the briefing call
          </ButtonLink>
          <p className="max-w-measure text-body-sm text-on-bone-tertiary">
            We run a small number of these at a time. If the fit is wrong we
            will tell you on the call, not after three weeks of work.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
