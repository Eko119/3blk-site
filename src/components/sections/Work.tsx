import { ArrowUpRight } from "lucide-react";
import { Container } from "../primitives/Container";
import { SectionHeading } from "../primitives/SectionHeading";
import { PROJECTS } from "@/lib/site";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-20 md:py-32 border-t border-border-default"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeading id="work-heading" eyebrow="Selected work">
            Live projects, shipped on this stack.
          </SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <li key={project.id}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-4 h-full p-6 md:p-8 bg-elevated border border-border-default rounded-lg transition-colors duration-default ease-standard hover:border-border-strong"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-h3 text-text-primary">{project.name}</h3>
                    <ArrowUpRight
                      size={20}
                      className="text-text-tertiary transition-colors group-hover:text-text-accent shrink-0 mt-1"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-body-sm text-text-secondary">{project.description}</p>
                  <p className="text-mono-sm text-text-tertiary mt-auto">{project.tech}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
