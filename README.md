# 3BLK

Solo digital studio site. Static-first Next.js 15, deterministic build, deploys to Vercel.

## Run

```bash
corepack enable
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 15.0.3 (App Router, static-first)
- TypeScript 5.5.x strict + `noUncheckedIndexedAccess`
- Tailwind 3.4 LTS + CSS custom properties
- Geist via `next/font/local`
- Resend for `/api/contact`
- `@vercel/analytics`
- pnpm 10.0.0 (`packageManager`)
- Node `>=20.0.0` (`.nvmrc` pins `20.18.1` for local determinism)

## Rendering boundary

Enforced by CI grep:

| Route | Mode |
|---|---|
| All pages | `force-static` (default) |
| `/api/site` | ISR (`revalidate = 300`) |
| `/api/personalization` | SSR (`force-dynamic`), safe-fallback |
| `/api/contact` | SSR (`force-dynamic`), POST → Resend |

## Environment

See [`.env.example`](./.env.example). Only `RESEND_API_KEY` is required for production.

`/api/contact` defers env validation to request time — the build always succeeds with the key unset.

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
- Lighthouse CI desktop + mobile (target 100/100/100/100)

On green CI with a `phase-N:` commit, the phase-tag workflow applies a `phase-N-passed` tag.

## What NOT to touch

- `package.json` exact pins (`save-exact=true` enforced via `.npmrc`)
- `output: "standalone"` in `next.config.ts` (CI determinism hash depends on `.next/standalone/`)
- `force-dynamic` / `revalidate` placement (CI boundary guard fails on drift)
- `.env*` (gitignored; only `.env.example` is tracked)
