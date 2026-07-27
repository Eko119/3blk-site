import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/tokens.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/layout/Cursor";
import { RevealObserver } from "@/components/primitives/RevealObserver";
import { buildMetadata, buildViewport, buildJsonLd } from "@/lib/metadata";

/* Display face: Instrument Serif, self-hosted so the build needs
   no network and the bytes are on our own origin. Roman only —
   nothing in the design is set in italic, and the italic file was
   22kB of preloaded weight nobody ever saw. */
const instrumentSerif = localFont({
  src: "./fonts/InstrumentSerif-Regular.woff2",
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

/* Both Geist faces are variable (weight 100–900), re-compressed to
   woff2 and subset to Latin. They shipped as full-Unicode woff at
   66kB and 68kB; at 22kB and 26kB they are no longer the heaviest
   thing on the page. */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

/* Mono sets folio lines, eyebrows and captions — nothing above the
   fold worth spending critical bandwidth on. It is fetched
   normally and swapped in when it lands. */
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = buildMetadata();
export const viewport: Viewport = buildViewport();

/* Marks the document as scripted before the first paint. Reveal
   animations only hide their content under this flag, so if the
   bundle never arrives the page still renders fully readable. */
const JS_FLAG = 'document.documentElement.setAttribute("data-js","");';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-oxblood focus:px-5 focus:py-3 focus:font-mono focus:text-overline focus:uppercase focus:text-bone"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
        <Cursor />
        <RevealObserver />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
        />
        {process.env.VERCEL_ENV ? <Analytics /> : null}
      </body>
    </html>
  );
}
