import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { SERVICES } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-32 border-t border-border-default"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeading id="services-heading" eyebrow="What I do">
            Three weeks. Three guarantees.
          </SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <li
                key={service.id}
                className="flex flex-col gap-4 p-6 md:p-8 bg-elevated border border-border-default rounded-lg"
              >
                <h3 className="text-h3 text-text-primary">{service.title}</h3>
                <dl className="flex flex-col gap-3 text-body-sm">
                  <div>
                    <dt className="text-overline uppercase text-text-tertiary mb-1">
                      Outcome
                    </dt>
                    <dd className="text-text-primary">{service.outcome}</dd>
                  </div>
                  <div>
                    <dt className="text-overline uppercase text-text-tertiary mb-1">
                      Mechanism
                    </dt>
                    <dd className="text-text-secondary">{service.mechanism}</dd>
                  </div>
                  <div>
                    <dt className="text-overline uppercase text-text-tertiary mb-1">
                      Proof
                    </dt>
                    <dd className="text-text-secondary">{service.proof}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
