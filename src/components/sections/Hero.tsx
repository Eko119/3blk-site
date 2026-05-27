import { ArrowRight } from "lucide-react";
import { Button } from "../primitives/Button";
import { Container } from "../primitives/Container";
import { Eyebrow } from "../primitives/Eyebrow";
import { VeloxLogo } from "../brand/VeloxLogo";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-28 md:pt-40 pb-20 md:pb-32"
    >
      <Container>
        <div className="flex flex-col gap-8 max-w-4xl">
          <VeloxLogo variant="mark-filled" className="h-20 w-20 md:h-24 md:w-24" />
          <Eyebrow>Solo digital studio</Eyebrow>
          <h1
            id="hero-heading"
            className="text-display-2 md:text-display-1 text-text-primary"
          >
            {SITE.headline}
          </h1>
          <p className="text-body-lg md:text-h4 text-text-secondary max-w-2xl">
            {SITE.subHeadline}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="#contact" variant="primary">
              Book a call <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#work" variant="secondary">
              See work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
