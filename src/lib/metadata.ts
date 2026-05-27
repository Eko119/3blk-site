import type { Metadata, Viewport } from "next";
import { SITE } from "./site";

export function buildMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    title: { default: SITE.name, template: `%s — ${SITE.name}` },
    description: SITE.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      title: SITE.name,
      description: SITE.description,
      url: SITE.url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.name,
      description: SITE.description,
    },
    robots: { index: true, follow: true },
  };
}

export function buildViewport(): Viewport {
  return {
    themeColor: "#0a0a0a",
    colorScheme: "dark",
  };
}

export function buildJsonLd(): string {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      email: SITE.contactEmail,
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
