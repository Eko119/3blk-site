import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { MaskText } from "@/components/primitives/MaskText";
import { Reveal } from "@/components/primitives/Reveal";
import { CHANNELS, PRIVACY, PRIVACY_UPDATED, SITE } from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What 3BLK Studios collects when you use the contact form, why, where it goes, and how to have it deleted. No cookies, no tracking, no third parties beyond hosting and email delivery.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="pb-section pt-[calc(var(--space-section)+4rem)]">
      <Container className="flex flex-col gap-section-tight">
        <header className="flex flex-col gap-block">
          <Eyebrow>Privacy</Eyebrow>

          <MaskText
            as="h1"
            lines={["What happens to", "what you send us."]}
            trigger="load"
            delay={1}
            className="font-display text-display-2 text-text-primary"
          />

          <p className="hero-fade max-w-measure-wide text-body-lg text-text-secondary">
            Short, because there is not much to say. This site has one form, no
            cookies, and no interest in anything beyond answering your message.
          </p>

          <p className="hero-fade font-mono text-overline uppercase text-text-tertiary">
            Last updated {PRIVACY_UPDATED}
          </p>
        </header>

        <div className="border-t border-rule">
          {PRIVACY.map((section, index) => (
            <Reveal
              key={section.id}
              delay={index % 3}
              className="grid grid-cols-12 gap-x-gutter gap-y-4 border-b border-rule py-block"
            >
              <h2
                id={section.id}
                className="col-span-12 font-display text-h1 text-text-primary lg:col-span-4"
              >
                {section.heading}
              </h2>

              <div className="col-span-12 flex flex-col gap-4 lg:col-span-7 lg:col-start-6">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="max-w-measure-wide text-body-lg text-text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display text-h1 text-text-primary">
            Asking us anything about this
          </h2>
          <ul className="flex flex-col gap-3">
            {CHANNELS.map((channel) => (
              <li key={channel.id} className="flex flex-col gap-1">
                <span className="font-mono text-overline uppercase text-text-tertiary">
                  {channel.label}
                </span>
                <a
                  href={channel.href}
                  {...(channel.id === "instagram"
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="link-rule self-start font-display text-h2 text-text-primary transition-colors duration-base ease-inout hover:text-clay"
                >
                  {channel.value}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-overline uppercase text-text-tertiary">
            {SITE.location}
          </p>
        </Reveal>

        <Reveal className="border-t border-rule pt-8">
          <Link
            href="/"
            className="link-rule font-mono text-overline uppercase text-text-accent transition-colors duration-base ease-inout hover:text-clay-hover"
          >
            Back to the studio
          </Link>
        </Reveal>
      </Container>
    </article>
  );
}
