import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <section
      aria-labelledby="notfound-heading"
      className="flex items-center min-h-[calc(100vh-8rem)] py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 max-w-2xl">
          <Eyebrow>404</Eyebrow>
          <h1 id="notfound-heading" className="text-h1 md:text-display-2 text-text-primary">
            This page doesn&apos;t exist. Neither does a six-month agency timeline.
          </h1>
          <Link
            href="/"
            className="text-body-lg text-text-accent hover:underline self-start"
          >
            Go home →
          </Link>
        </div>
      </Container>
    </section>
  );
}
