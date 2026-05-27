export const SITE = {
  name: "Velox",
  url: "https://velox.studio",
  description:
    "Velox is a solo digital studio. I ship production websites in 3 weeks — conversion-led, performance-obsessed, deterministic by design and built to last.",
  headline: "Live in 3 weeks. Built to convert.",
  subHeadline: "A solo digital studio shipping production sites in 3 weeks, no agency timelines.",
  contactEmail: "hello@velox.studio",
} as const;

export type Project = {
  readonly id: string;
  readonly name: string;
  readonly tech: string;
  readonly description: string;
  readonly href: string;
};

export const PROJECTS: readonly Project[] = [
  {
    id: "angeltarot",
    name: "AngelTarot",
    tech: "React, Next.js, Custom CSS",
    description: "Production brand platform.",
    href: "#",
  },
  {
    id: "awktane",
    name: "Awktane Studios",
    tech: "Modern frontend, responsive layouts",
    description: "Creative studio digital experience.",
    href: "#",
  },
  {
    id: "son-of-sam",
    name: "Son of Sam / DJ Turnt",
    tech: "Cloudflare Pages, edge deployment",
    description: "High-fidelity media and performance showcases.",
    href: "#",
  },
] as const;

export type Service = {
  readonly id: string;
  readonly title: string;
  readonly outcome: string;
  readonly mechanism: string;
  readonly proof: string;
};

export const SERVICES: readonly Service[] = [
  {
    id: "launch",
    title: "Launch in 3 weeks",
    outcome: "Site live in 3 weeks, not 6 months.",
    mechanism: "Locked scope, frozen stack, no agency relay.",
    proof: "This site shipped on the same contract. So did the studios in the work section.",
  },
  {
    id: "convert",
    title: "Built to convert",
    outcome: "Pages that close, not pages that decorate.",
    mechanism: "Audience-first copy, one clear CTA per section, sub-1s load.",
    proof: "Lighthouse 100/100/100/100, verified in CI on every build.",
  },
  {
    id: "own",
    title: "Yours to keep",
    outcome: "You own the code, the content, the keys.",
    mechanism: "Static-first stack, Git history, no proprietary CMS.",
    proof: "Plain Next.js. Plain Tailwind. No tools you can't replace.",
  },
] as const;
