# Soudage Mobile SM Inc. — Website

Bilingual (FR/EN) marketing site for **Soudage Mobile SM Inc.**, an industrial &
commercial mobile-welding contractor serving Greater Montréal and Québec.

Built on **Next.js 15 · TypeScript · Tailwind CSS 4**, with **Payload CMS +
PostgreSQL** prepared for activation in phase 2. Deployed via GitHub → Coolify →
Hetzner.

---

## 1. Stack

| Layer            | Choice                                                        |
| ---------------- | ------------------------------------------------------------- |
| Framework        | Next.js 15 (App Router, React 19, `output: "standalone"`)     |
| Language         | TypeScript (strict)                                           |
| Styling          | Tailwind CSS 4 + ported design system in `globals.css`        |
| Validation       | zod                                                           |
| Images           | `next/image` (AVIF/WebP)                                       |
| CMS (phase 2)    | Payload CMS + `@payloadcms/db-postgres`                       |
| Package manager  | pnpm                                                          |
| Node             | ≥ 20.9                                                         |

---

## 2. Architecture

- **Bilingual via real routes**, not client-side text swapping: `/fr` and `/en`
  are independently rendered and indexable, each with its own metadata,
  canonical URL, `hreflang` alternates and `<html lang>`. `/` redirects to `/fr`.
- **Content is typed and co-located** in `src/content/` (`dictionary.ts`,
  `services.ts`, `industries.ts`, `projects.ts`, `site-config.ts`). This is the
  single source of truth — so the site renders statically with **no database
  dependency** in v1, and the same content can seed Payload in phase 2.
- **Lead capture works on day one** with zero extra infrastructure (see §5).
- **Design ported faithfully**: the approved design's CSS lives verbatim in
  `src/app/globals.css`; components reuse the original class names, so there is
  no visual drift.

```
src/
├─ app/
│  ├─ [lang]/            # locale routes — layout owns <html lang>
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ api/quote/route.ts # lead capture endpoint
│  ├─ globals.css        # design system (ported) + Tailwind 4 theme
│  ├─ not-found.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ site/              # page sections (Hero, Services, QuoteForm, …)
│  └─ ui/                # primitives (Container, Reveal, Icon, …)
├─ content/              # typed bilingual content (source of truth)
├─ lib/                  # i18n, seo, schema, leads
└─ payload/              # CMS config + collections (phase 2, see §7)
public/media/            # images + hero video
```

---

## 3. Prerequisites

- Node.js ≥ 20.9
- pnpm ≥ 9 (`corepack enable` then `corepack prepare pnpm@latest --activate`)

---

## 4. Local development

```bash
pnpm install
cp .env.example .env      # then fill in values (all optional for v1)
pnpm dev                  # http://localhost:3000  (redirects to /fr)
```

Scripts:

| Command          | Purpose                                  |
| ---------------- | ---------------------------------------- |
| `pnpm dev`       | Start the dev server                     |
| `pnpm build`     | Production build                         |
| `pnpm start`     | Run the production build                 |
| `pnpm lint`      | ESLint (Next.js config)                  |
| `pnpm typecheck` | `tsc --noEmit`                           |

> Note: `next lint` is deprecated and will be removed in Next.js 16. When you
> upgrade, migrate with `npx @next/codemod@canary next-lint-to-eslint-cli .`.

### Fonts

Fonts (Saira, Saira Condensed, Barlow, Barlow Semi Condensed) load via a Google
Fonts `<link>` in the layout — matching the original design and avoiding a
build-time fetch. If you prefer self-hosting with `next/font/google` (no external
request, better privacy/perf), that swap can be made in `src/app/[lang]/layout.tsx`.

---

## 5. Lead capture (quote form)

The quote form posts to `POST /api/quote`. Every **validated** lead is **always
written to the server log** (visible in Coolify) — so a request is never lost,
even with nothing else configured. Two optional delivery channels activate by
environment variable:

| Variable                         | Effect                                                    |
| -------------------------------- | --------------------------------------------------------- |
| `RESEND_API_KEY`                 | Emails each lead via the Resend REST API (no SDK)         |
| `LEADS_EMAIL_TO` / `LEADS_EMAIL_FROM` | Recipient / sender for the Resend email              |
| `LEADS_WEBHOOK_URL`              | POSTs the full lead as JSON (Make / Zapier / n8n / Slack) |

Attachments (photos, drawings, PDFs) are accepted and their names/sizes are
included in the notification. Binary **storage** activates with Payload in phase 2.

Recommended setup for launch: create a Resend API key, verify the sending domain,
and set `RESEND_API_KEY` + `LEADS_EMAIL_TO`. Optionally also set `LEADS_WEBHOOK_URL`
to push leads into a CRM/automation.

---

## 6. Deployment (Coolify → Hetzner)

This repo is **application code only** — it does not touch the server, Docker,
Traefik/Nginx, or any infrastructure.

1. Push to `main`. Coolify is configured to build and deploy automatically.
2. Set the environment variables (§4 / §5) in the Coolify app settings — never
   commit `.env`.
3. `next.config.ts` uses `output: "standalone"`, which Coolify's Nixpacks/Docker
   build serves directly.

Required for production:

| Variable               | Notes                                                  |
| ---------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, e.g. `https://soudagemobilesm.ca`    |

The `sitemap.xml` and `robots.txt` are generated from this value.

---

## 7. Activating the CMS (phase 2)

The site ships fast and DB-free in v1. Payload is fully scaffolded in
`src/payload/` (config + `Leads`, `Media`, `Users` collections) and is currently
excluded from the build (via `tsconfig.json` `exclude` and the ESLint ignore) so
v1 stays lightweight. To turn it on:

1. **Install dependencies**
   ```bash
   pnpm add payload @payloadcms/db-postgres @payloadcms/next @payloadcms/richtext-lexical sharp
   ```
2. **Provision PostgreSQL** in Coolify and set `DATABASE_URI` and a strong
   `PAYLOAD_SECRET`.
3. **Stop excluding** `src/payload` — remove it from `exclude` in `tsconfig.json`
   and from `ignores` in `eslint.config.mjs`.
4. **Mount the admin panel** by adding Payload's App Router files (`app/(payload)/`
   admin route group and `app/api/[...slug]`), following the current
   `@payloadcms/next` docs, and point them at `src/payload/payload.config.ts`.
5. **Persist leads to the DB**: update `src/lib/leads.ts` (or the `/api/quote`
   route) to call Payload's local API (`payload.create({ collection: "leads", … })`)
   in addition to — or instead of — the email/webhook channels. Attachments can
   then be stored via the `Media` collection (local disk, or
   `@payloadcms/storage-s3` for object storage).

Because the form fields already mirror the `Leads` collection, this is a small,
contained change.

---

## 8. Before launch — confirm contact details

The phone, email and address are **placeholders** carried over from the design.
While `siteConfig.contactConfirmed` is `false`, the footer shows a visible
reminder and the JSON-LD omits the phone number.

Update once in **`src/content/site-config.ts`**:

```ts
contactConfirmed: true,                 // flips off the launch reminder
phone: { display: "+1 (514) …", href: "tel:+1514…" },
email: "info@soudagemobilesm.ca",       // confirm/replace
```

Every reference across the site (header, footer, schema, emergency band) updates
from this one place.

---

## 9. Accessibility & SEO notes

- Per-locale `<html lang>`, canonical + `hreflang` (`fr-CA`, `en-CA`, `x-default`).
- Open Graph + Twitter cards and `LocalBusiness` JSON-LD per locale.
- Keyboard focus styles, reduced-motion handling, and a no-JS fallback that keeps
  reveal-on-scroll content visible.
- `sitemap.xml` and `robots.txt` generated automatically.
