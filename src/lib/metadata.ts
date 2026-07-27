import type { Metadata, Viewport } from "next";
import { CAPABILITIES, CHANNELS, PROMISE, SITE } from "./site";

export function buildMetadata(): Metadata {
  const title = `${SITE.name} — ${PROMISE.short}`;

  return {
    metadataBase: new URL(SITE.url),
    title: { default: title, template: `%s — ${SITE.name}` },
    description: SITE.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    keywords: [
      "web design studio",
      "custom web development",
      "brand identity",
      "editorial web design",
      "Next.js development",
    ],
    alternates: { canonical: "/" },
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      title,
      description: SITE.description,
      url: SITE.url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: SITE.description,
    },
    robots: { index: true, follow: true },
  };
}

export function buildViewport(): Viewport {
  return {
    themeColor: "#0b0a09",
    colorScheme: "dark",
  };
}

export function buildJsonLd(): string {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE.name,
      alternateName: SITE.shortName,
      url: SITE.url,
      description: SITE.description,
      email: SITE.contactEmail,
      slogan: PROMISE.short,
      areaServed: "Worldwide",
      sameAs: CHANNELS.filter((channel) => channel.href.startsWith("https://")).map(
        (channel) => channel.href,
      ),
      knowsAbout: CAPABILITIES.map((capability) => capability.title),
      makesOffer: {
        "@type": "Offer",
        name: "Website designed and built before payment",
        description:
          "The studio designs and develops the site in full before any fee is agreed. The client commissions the work only after seeing it finished.",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
    },
  ];
  return JSON.stringify(data);
}
