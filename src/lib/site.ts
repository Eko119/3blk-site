/* ============================================================
   3BLK STUDIOS — CONTENT MODEL
   Every string the site renders originates here. Sections read
   from these structures so copy changes never require touching
   layout code.
   ============================================================ */

export const SITE = {
  name: "3BLK Studios",
  shortName: "3BLK",
  url: "https://3blk.com",
  description:
    "3BLK Studios is a design-led web studio. We design and build your site before you pay for it — you only commission the work once you have seen it finished.",
  tagline: "Built before billed.",
  contactEmail: "1095cult@proton.me",
  location: "Remote — working worldwide",
} as const;

/** Where enquiries can reach the studio, in the order we prefer them. */
export type Channel = {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly href: string;
};

export const CHANNELS: readonly Channel[] = [
  {
    id: "email",
    label: "Email",
    value: SITE.contactEmail,
    href: `mailto:${SITE.contactEmail}`,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@3blk",
    href: "https://instagram.com/3blk",
  },
] as const;

/** The promise, expressed three ways for three contexts. */
export const PROMISE = {
  /** Hero — set as three masked display lines. */
  headline: ["We build the site", "first. You pay only", "if you love it."],
  /** Sub-deck under the hero. */
  standfirst:
    "A design-led studio for brands that would rather see the work than be sold it. We design and build the whole thing up front. If it is not right, you owe us nothing.",
  /** Compressed form for metadata, share cards and the footer. */
  short: "We build the site first. You pay only if you love it.",
} as const;

/* ─── Navigation ────────────────────────────────────────────── */

export type NavLink = { readonly href: string; readonly label: string };

/**
 * Rooted at "/" rather than bare fragments, because the header and
 * footer render on every route. A bare "#work" points at nothing
 * from /privacy; "/#work" resolves from anywhere, and next/link
 * still scrolls rather than reloading when we are already home.
 */
export const NAV_LINKS: readonly NavLink[] = [
  { href: "/#process", label: "How it works" },
  { href: "/#work", label: "Work" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#studio", label: "Studio" },
  { href: "/#contact", label: "Contact" },
] as const;

/* ─── Marquee ───────────────────────────────────────────────── */

export const MARQUEE_PHRASES: readonly string[] = [
  "Built before billed",
  "Design-led",
  "No deposit",
  "No deck",
  "Finished work, then a decision",
  "Custom development",
  "Yours to keep",
] as const;

/* ─── Process ───────────────────────────────────────────────── */

export type ProcessStep = {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly body: string;
  readonly note: string;
};

export const PROCESS: readonly ProcessStep[] = [
  {
    id: "brief",
    index: "01",
    title: "You brief us",
    body: "One conversation. What the business does, who it needs to reach, and what the site has to achieve. We take notes; you do not fill in a form or sit through a pitch.",
    note: "45 minutes. No cost.",
  },
  {
    id: "build",
    index: "02",
    title: "We build it",
    body: "We design and develop the site in full — real copy, real structure, real interaction. Not a mockup, not a template with your logo dropped in. The finished thing, on a private link.",
    note: "Two to three weeks.",
  },
  {
    id: "decide",
    index: "03",
    title: "You decide",
    body: "You see the completed site before any invoice exists. If it is right, we agree a price and launch it. If it is not, we part company and you have lost nothing but the briefing call.",
    note: "No deposit. No obligation.",
  },
  {
    id: "own",
    index: "04",
    title: "You own it",
    body: "Launch, domain, analytics and handover. The code is yours outright — no proprietary builder, no licence to renew, no studio you are locked into next year.",
    note: "Full source, transferred.",
  },
] as const;

/* ─── Capabilities ──────────────────────────────────────────── */

export type Capability = {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly detail: readonly string[];
};

export const CAPABILITIES: readonly Capability[] = [
  {
    id: "design",
    title: "Creative direction & design",
    body: "Art direction, typography and layout built around what the brand is actually trying to say — composed page by page rather than assembled from a system of parts.",
    detail: ["Art direction", "Editorial layout", "Typography", "Design systems"],
  },
  {
    id: "build",
    title: "Custom development",
    body: "Hand-written front-end. No page builders, no plugin stack to maintain. Fast on a mid-range phone on a poor connection, which is where most of your traffic actually is.",
    detail: ["Next.js & React", "Motion & interaction", "CMS integration", "Accessibility"],
  },
  {
    id: "brand",
    title: "Brand & identity",
    body: "Marks, wordmarks and the rules that hold them together, extended into the places a brand actually lives — the site, the deck, the invoice, the shopfront.",
    detail: ["Identity", "Wordmarks", "Guidelines", "Collateral"],
  },
  {
    id: "convert",
    title: "Conversion & content",
    body: "Structure and copy shaped around a single decision per page. We write the words as part of the design, because a layout that carries placeholder text is not finished.",
    detail: ["Messaging", "Copywriting", "Information architecture", "Analytics"],
  },
] as const;

/* ─── Selected work ─────────────────────────────────────────── */

export type Project = {
  readonly id: string;
  readonly name: string;
  readonly discipline: string;
  readonly year: string;
  readonly summary: string;
  readonly scope: readonly string[];
  /** Art key — maps to a composition in components/art/ProjectArt. */
  readonly art: "angeltarot" | "awktane" | "sonofsam";
};

export const PROJECTS: readonly Project[] = [
  {
    id: "angeltarot",
    name: "AngelTarot",
    discipline: "Identity & platform",
    year: "2025",
    summary:
      "A reading practice that had outgrown a social profile. We gave it a mark, a typographic voice and a booking flow that reads as considered rather than transactional — the calm of a print edition, on a phone.",
    scope: ["Identity", "Art direction", "Next.js build", "Booking flow"],
    art: "angeltarot",
  },
  {
    id: "awktane",
    name: "Awktane Studios",
    discipline: "Studio site",
    year: "2025",
    summary:
      "A creative studio whose portfolio was stronger than its presentation of it. The site was rebuilt as a gallery: full-bleed work, restrained typography, and an index that lets a producer scan twenty projects in under a minute.",
    scope: ["Editorial design", "Motion", "Custom build", "Case studies"],
    art: "awktane",
  },
  {
    id: "son-of-sam",
    name: "Son of Sam — DJ Turnt",
    discipline: "Artist platform",
    year: "2024",
    summary:
      "A release site for an artist with a heavy media load and an audience on mobile data. Edge-delivered, weightless on a phone, and loud where it needed to be — without a single frame dropped on the way in.",
    scope: ["Art direction", "Edge delivery", "Media pipeline", "Release pages"],
    art: "sonofsam",
  },
] as const;

/* ─── Studio principles ─────────────────────────────────────── */

export type Principle = {
  readonly id: string;
  readonly title: string;
  readonly body: string;
};

export const PRINCIPLES: readonly Principle[] = [
  {
    id: "show",
    title: "Show, do not pitch",
    body: "A finished site answers every question a proposal raises. We would rather spend three weeks building than three weeks persuading.",
  },
  {
    id: "restraint",
    title: "Restraint over decoration",
    body: "Most sites are trying to do too much at once. We remove until what is left has somewhere to breathe, then make that part excellent.",
  },
  {
    id: "own",
    title: "Leave nothing locked",
    body: "You own the code, the content and the accounts. A studio should be easy to leave; that is what makes it worth staying with.",
  },
] as const;

/* ─── Reassurance ───────────────────────────────────────────── */

export type FaqItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

export const FAQ: readonly FaqItem[] = [
  {
    id: "catch",
    question: "Where is the catch?",
    answer:
      "There is not one, but there is a limit: we take on a small number of projects at a time, and we only start ones we think we can do well. The briefing call is where we work out whether this is one of them.",
  },
  {
    id: "why",
    question: "Why work this way?",
    answer:
      "Because the alternative is asking someone to pay for a description of a website. Building first removes the guesswork for you and forces us to be right rather than persuasive.",
  },
  {
    id: "cost",
    question: "What does it cost if we say yes?",
    answer:
      "We agree the figure once you have seen the finished site, based on its scope. You will never be asked to approve a budget for work you have not already looked at.",
  },
  {
    id: "no",
    question: "What happens if we say no?",
    answer:
      "Nothing. You owe us nothing and we keep the work unpublished. No deposit is taken at any point, so there is nothing to refund and nothing to argue about.",
  },
] as const;

/* ─── Privacy ───────────────────────────────────────────────
   Describes what the site actually does, and nothing more. If the
   contact route, the analytics gate or the cookie behaviour ever
   change, this has to change with them.
   ────────────────────────────────────────────────────────── */

export type PrivacySection = {
  readonly id: string;
  readonly heading: string;
  readonly body: readonly string[];
};

export const PRIVACY_UPDATED = "27 July 2026";

export const PRIVACY: readonly PrivacySection[] = [
  {
    id: "collect",
    heading: "What we collect",
    body: [
      "Only what you type into the contact form: your name, your email address, and your message. That is the whole list.",
      "We do not ask for a company, a budget, a phone number or a job title, because none of those are needed to reply to you.",
    ],
  },
  {
    id: "why",
    heading: "Why we collect it",
    body: [
      "To read your enquiry and answer it. That is the only purpose. We do not add you to a mailing list, and we will not send you anything you did not ask for.",
    ],
  },
  {
    id: "where",
    heading: "Where it goes",
    body: [
      "The form posts to this site, which hands the message to Resend, our email provider, which delivers it to the studio inbox. Your email address is set as the reply-to so we can write back.",
      "It is not written to a database. There is no CRM behind this form. The message exists as an email and nowhere else.",
    ],
  },
  {
    id: "keep",
    heading: "How long we keep it",
    body: [
      "For as long as the email sits in the inbox — in practice, until the conversation is finished and the thread is cleared out.",
      "If you would rather it were gone sooner, ask, and we will delete it and confirm that we have.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies",
    body: [
      "This site sets none. No consent banner appears because there is nothing to consent to. Nothing follows you between visits and nothing follows you to other sites.",
    ],
  },
  {
    id: "analytics",
    heading: "Analytics",
    body: [
      "We use Vercel Analytics to count page views and see which sections people read. It is cookieless, it does not build a profile of you, and it does not share data across sites.",
    ],
  },
  {
    id: "others",
    heading: "Who else is involved",
    body: [
      "Vercel hosts the site and serves it to you, so it necessarily handles your request. Resend delivers the contact email. Those are the only two.",
      "Nothing is sold, rented, or handed to advertisers or data brokers. There is no third party here whose business model is your attention.",
    ],
  },
  {
    id: "rights",
    heading: "Your rights",
    body: [
      "You can ask what we hold about you, ask for a copy of it, ask us to correct it, or ask us to delete it. Email the studio and we will do it — there is no form to fill in and no ticket to raise.",
      "Depending on where you live you may also have the right to complain to a data protection regulator. We would rather you told us first so we can put it right.",
    ],
  },
  {
    id: "changes",
    heading: "Changes",
    body: [
      "If what the site does with your data changes, this page changes with it and the date above is updated. We will not quietly broaden it.",
    ],
  },
] as const;

/* ─── Contact ───────────────────────────────────────────────── */

export const CONTACT = {
  heading: ["Tell us what", "you are building."],
  standfirst:
    "One call, then we build. If we are not the right studio for it, we will say so on the call rather than three weeks later.",
  responseNote: "We reply to every enquiry within two working days.",
} as const;
