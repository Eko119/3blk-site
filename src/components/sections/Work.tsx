import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { Reveal } from "../primitives/Reveal";
import { ProjectArt } from "../art/ProjectArt";
import { PROJECTS } from "@/lib/site";

/** "https://angeltarot.net" → "angeltarot.net" */
function displayHost(href: string): string {
  return new URL(href).hostname.replace(/^www\./, "");
}

/**
 * Selected work, set as an editorial spread. Entries alternate
 * sides so the eye crosses the page rather than running down a
 * column of identical cards.
 *
 * The whole entry is one link to the live site — a large target
 * rather than a small "visit" affordance, with nothing interactive
 * nested inside it.
 */
export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-rule py-section"
    >
      <Container className="flex flex-col gap-section-tight">
        <div className="grid grid-cols-12 gap-x-gutter gap-y-block">
          <SectionHeading
            id="work-heading"
            eyebrow="Selected work"
            lines={["Every one of these", "was built before", "it was bought."]}
            className="col-span-12 lg:col-span-8"
          />
          <Reveal delay={2} className="col-span-12 self-end lg:col-span-3 lg:col-start-10">
            <p className="font-mono text-overline uppercase text-text-tertiary">
              All {PROJECTS.length} are live — every one of them open in a new tab
            </p>
          </Reveal>
        </div>

        <ul className="flex flex-col gap-section-tight">
          {PROJECTS.map((project, index) => {
            const flipped = index % 2 === 1;
            return (
              <li key={project.id}>
                <Reveal>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/figure grid grid-cols-12 items-center gap-x-gutter gap-y-block"
                  >
                    <div
                      className={`col-span-12 md:col-span-6 ${
                        flipped
                          ? "md:order-2 lg:col-span-5 lg:col-start-8"
                          : "lg:col-span-5"
                      }`}
                    >
                      <div className="figure-frame aspect-[4/5] w-full">
                        <ProjectArt art={project.art} />
                      </div>
                    </div>

                    <div
                      className={`col-span-12 flex flex-col gap-6 md:col-span-6 ${
                        flipped
                          ? "md:order-1 lg:col-span-5 lg:col-start-2"
                          : "lg:col-span-5 lg:col-start-7"
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-4 font-mono text-overline uppercase text-text-tertiary">
                        <span>{project.discipline}</span>
                        <span className="transition-colors duration-base ease-inout group-hover/figure:text-text-accent">
                          {displayHost(project.href)}
                        </span>
                      </div>

                      <h3 className="font-display text-display-3 text-text-primary transition-colors duration-base ease-inout group-hover/figure:text-clay">
                        {project.name}
                        <span className="sr-only"> — opens in a new tab</span>
                      </h3>

                      <p className="max-w-measure text-body-lg text-text-secondary">
                        {project.summary}
                      </p>

                      <ul className="flex flex-wrap gap-x-3 gap-y-2">
                        {project.scope.map((item) => (
                          <li
                            key={item}
                            className="border border-rule-strong px-3 py-1.5 font-mono text-overline uppercase text-text-tertiary"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <span className="link-rule mt-2 inline-flex items-center gap-2 self-start font-mono text-overline uppercase text-text-accent">
                        Visit the site
                        <span aria-hidden="true" className="transition-transform duration-base ease-out group-hover/figure:translate-x-1">
                          &#8599;
                        </span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
