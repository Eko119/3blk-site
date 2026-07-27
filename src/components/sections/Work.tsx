import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { Reveal } from "../primitives/Reveal";
import { ProjectArt } from "../art/ProjectArt";
import { PROJECTS } from "@/lib/site";

/**
 * Selected work, set as an editorial spread. Entries alternate
 * sides so the eye crosses the page rather than running down a
 * column of identical cards.
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
              {PROJECTS.length} of a longer list — the rest is shared on the
              briefing call
            </p>
          </Reveal>
        </div>

        <ul className="flex flex-col gap-section-tight">
          {PROJECTS.map((project, index) => {
            const flipped = index % 2 === 1;
            return (
              <li key={project.id}>
                <Reveal className="group/figure grid grid-cols-12 items-center gap-x-gutter gap-y-block">
                  <div
                    className={`col-span-12 md:col-span-6 ${
                      flipped ? "md:order-2 lg:col-span-5 lg:col-start-8" : "lg:col-span-5"
                    }`}
                  >
                    <div className="figure-frame aspect-[4/5] w-full">
                      <ProjectArt art={project.art} />
                    </div>
                  </div>

                  <div
                    className={`col-span-12 flex flex-col gap-6 md:col-span-6 ${
                      flipped ? "md:order-1 lg:col-span-5 lg:col-start-2" : "lg:col-span-5 lg:col-start-7"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-4 font-mono text-overline uppercase text-text-tertiary">
                      <span>{project.discipline}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-display text-display-3 text-text-primary">
                      {project.name}
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
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
