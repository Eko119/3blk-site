# 3BLK Studios

Design-led web studio site. Editorial one-pager, static-first Next.js 15,
deterministic build, deploys to Vercel.

The positioning the site is built around: **the studio designs and builds the
site before the client pays for it.** Every section is written to support that
one idea rather than to describe a service list.

## Run

```bash
corepack enable
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 15.0.7 (App Router, static-first)
- TypeScript 5.5.x strict + `noUncheckedIndexedAccess`
- Tailwind 3.4 LTS + CSS custom properties
- Instrument Serif (display) + Geist Sans/Mono, self-hosted via `next/font/local`
- Resend for `/api/contact`
- `@vercel/analytics`
- pnpm 10.0.0 (`packageManager`)
- Node `>=20.0.0` (`.nvmrc` pins `20.18.1` for local determinism)

No animation or motion library — every transition is CSS, driven by tokens in
`src/styles/tokens.css`.

## Design system

Two surfaces and one accent family, defined once in `src/styles/tokens.css` and
exposed to Tailwind in `tailwind.config.ts`:

| Surface | Token | Use |
|---|---|---|
| Ink | `#0b0a09` | Default page surface |
| Bone | `#f2ede6` | The "how it works" section — the page turning to paper |
| Wine | `#4a1a24` | Studio interleaf |
| Oxblood | `#6e2733` | Accent on Bone; a fill carrying Bone text |
| Clay | `#c98d82` | The accent voice on Ink |

Every text/surface pairing in the token file is annotated with its measured
contrast ratio, and all of them meet WCAG AA or better. Oxblood is fills-only on
Ink (1.88:1) and is never used as text there.

Rules are surface-specific: `rule` on Ink, `rule-bone` on Bone, `rule-wine` on
Wine. An Ink rule on the Wine surface measures 1.15:1 and disappears.

## Motion

- Scroll reveals: one shared `IntersectionObserver` in
  `components/primitives/RevealObserver.tsx` drives every `.reveal` block on the
  page. `Reveal` itself is a server component — making each of ~30 blocks its own
  client island cost more in hydration than the animation was worth.
- The hidden start state is applied only under `[data-js]`, set by an inline
  script before first paint. If the bundle never arrives, the page still renders
  fully readable.
- The hero animates from CSS on load rather than from the observer, so the
  largest text is not waiting on hydration.
- Below `1024px` the hero arrives already composed. Every element in it starts
  invisible, and on a throttled connection whichever is largest *becomes* the
  LCP — the entrance was being measured as load time.
- `prefers-reduced-motion` zeroes durations **and delays**; a staggered block
  with `animation-fill-mode: both` would otherwise sit masked out of sight for
  the whole stagger.

## Rendering boundary

Enforced by CI grep:

| Route | Mode |
|---|---|
| All pages | `force-static` (default) |
| `/api/site` | ISR (`revalidate = 300`) |
| `/api/personalization` | SSR (`force-dynamic`), safe-fallback |
| `/api/contact` | SSR (`force-dynamic`), POST → Resend |

`/api/contact` redirects back to `/?sent=…`; the flag is read on the client in
`ContactStatus` so the page itself stays static.

## Fonts

All three faces are self-hosted, so the build needs no network and the bytes are
on our own origin.

| Face | Size | Preloaded |
|---|---|---|
| Instrument Serif (roman) | 21 kB | yes |
| Geist Sans (variable 100–900) | 22 kB | yes |
| Geist Mono (variable 100–900) | 26 kB | no |

Both Geist faces were re-compressed from `.woff` to `.woff2` and subset to Latin
— they shipped at 66 kB and 68 kB, which made them the heaviest thing on the
page, heavier than all the JavaScript. Nothing is set in italic, so no italic
file is shipped. Mono only sets folio lines and captions, so it is not preloaded.

If you extend the copy beyond Latin, re-subset before assuming the glyphs exist.

## Environment

See [`.env.example`](./.env.example). Only `RESEND_API_KEY` is required for
production. `/api/contact` defers env validation to request time — the build
always succeeds with the key unset.

## Deploy (Vercel)

1. `vercel link` (or import via dashboard)
2. Project settings:
   - **Node**: 20.x
   - **Install command**: `pnpm install --frozen-lockfile`
   - **Build command**: `pnpm build`
   - **Output directory**: `.next`
3. Environment variables (Production):
   - `RESEND_API_KEY` — required for `/api/contact`
   - `CONTACT_TO_EMAIL` — optional override; defaults to `SITE.contactEmail`
4. Domain (Cloudflare Registrar → Vercel):
   - `A @ → 76.76.21.21`
   - `CNAME www → cname.vercel-dns.com`
   - DNSSEC ON, proxy OFF
5. Wait for HTTPS issuance, then verify production Lighthouse on both viewports.

## CI

GitHub Actions runs on every push and PR:

- `pnpm install --frozen-lockfile`
- `pnpm lint --max-warnings 0`
- `pnpm typecheck`
- SSR/ISR boundary guard (grep)
- `pnpm build` (twice cold) + sha256 determinism check
- Lighthouse CI desktop + mobile

Measured locally on this build:

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 99 | 100 | 100 | 100 |

Desktop LCP 0.5–0.6 s, mobile LCP 2.0 s, CLS 0 on both.

## Content

All copy lives in `src/lib/site.ts`. Sections read from those structures, so
wording changes never require touching layout code.

Project plates in `components/art/ProjectArt.tsx` are original vector
compositions — one per project, drawn on a 4:5 editorial portrait. They stay
sharp at any size, add no image weight, and cannot shift the layout while they
load. Geometry is fixed rather than generated so every build is identical.

## What NOT to touch

- `package.json` exact pins (`save-exact=true` enforced via `.npmrc`)
- `output: "standalone"` in `next.config.ts` (CI determinism hash depends on `.next/standalone/`)
- `force-dynamic` / `revalidate` placement (CI boundary guard fails on drift)
- The menu overlay is a **sibling** of `<header>`, not a child. The header
  carries a backdrop filter, and a backdrop filter establishes a containing block
  for fixed-position descendants — nested inside, the panel resolves `inset-0`
  against the 80px bar and collapses to a sliver.
- `.env*` (gitignored; only `.env.example` is tracked)
