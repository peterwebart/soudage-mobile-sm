# SEO / GEO update — what changed & how to ship it

This update adds Google Tag Manager, 14 service landing pages (7 FR + 7 EN),
a connected schema.org `@graph`, a web manifest + icons, an expanded sitemap,
and internal linking — with no redesign.

---

## 1. How to apply this delivery (read first)

You copy these files **over** your existing repo. Copying does not delete
anything, so the only manual cleanup is listed in §3 (there is almost none).

```bash
# from your repo root, after copying the delivered files over it:
rm -f pnpm-workspace.yaml            # only if present — see §3
pnpm install                         # uses the pinned pnpm 9.15.9
pnpm build                           # must succeed locally BEFORE committing
pnpm start                           # optional: sanity-check at localhost:3000
```

If `pnpm build` is green, commit:

```bash
git add -A
git status                           # review adds/modifications
git commit -m "SEO/GEO: GTM, service landing pages, schema graph, sitemap, internal linking"
git push origin main                 # Coolify auto-deploys
```

`git add -A` stages new + modified files. Because nothing was renamed or
removed this round, there is nothing to `git rm` (except the stray file in §3).

---

## 2. Files in this delivery

**New**
- `src/content/service-pages.ts` — all service-page content (bilingual, data-driven)
- `src/components/site/ServiceLandingPage.tsx` — the landing-page template
- `src/components/site/Faq.tsx` — FAQ accordion (details/summary)
- `src/components/ui/Breadcrumbs.tsx` — visible breadcrumbs
- `src/app/[lang]/[service]/page.tsx` — dynamic route for the 14 pages
- `src/app/manifest.ts` — web app manifest
- `src/app/icon.svg`, `src/app/apple-icon.png`, `public/icon-192.png`, `public/icon-512.png` — icons
- `SEO-UPDATE.md` — this file

**Modified**
- `src/app/[lang]/layout.tsx` — GTM (head + body noscript) + site-wide JSON-LD graph
- `src/app/[lang]/page.tsx` — home WebPage + FAQPage schema
- `src/app/sitemap.ts` — home + 14 service pages, hreflang alternates, images
- `src/lib/schema.ts` — rewritten as a connected `@graph`
- `src/lib/seo.ts` — generic per-page metadata (home + service pages)
- `src/components/site/SitePage.tsx` — adds a visible FAQ section
- `src/components/site/Services.tsx` — home cards link to landing pages
- `src/components/site/SiteHeader.tsx`, `SiteFooter.tsx`, `StickyQuote.tsx` — nav links made home-absolute so they work from landing pages; footer Services column now links to the landing pages
- `src/content/services.ts` — adds `pageKey` linking home cards to landing pages
- `src/content/site-config.ts` — adds the official Facebook URL
- `src/app/globals.css` — styles for breadcrumbs, landing pages, FAQ

**Deleted:** none.

---

## 3. Cleanup

- **`pnpm-workspace.yaml`** — if this file exists in your repo, delete it
  (`git rm pnpm-workspace.yaml`). pnpm 10 writes it locally and it breaks the
  Coolify build (pnpm 9). The `packageManager` pin in `package.json` prevents
  it from coming back. This is the only known orphan.
- Nothing else from this update needs removing.

---

## 4. Low-friction changes going forward

The site is now **data-driven**, so most future changes are one-file edits — no
new files, no routing work:

- **Add or edit a service page** → edit `src/content/service-pages.ts` only. A
  new entry automatically gets its route, metadata, schema, sitemap entry,
  footer link and internal links.
- **Edit site text** → `src/content/dictionary.ts`.
- **Change contact details / Facebook / domain** → `src/content/site-config.ts`.

For future rounds I can also ship **only the changed files** plus a short
"new / changed / delete" list, so you never have to diff a whole project.

---

## 5. Completion checklist

**Done**
- [x] Google Tag Manager — head snippet + `<body>` noscript (GTM-MK5X9M7T)
- [x] Next.js Metadata API on every page: unique title + description
- [x] Canonical URLs, hreflang `fr-CA` / `en-CA` / `x-default`, `metadataBase`
- [x] Open Graph (type, site_name, title, description, url, locale, alternateLocale, image) + Twitter cards
- [x] Icons (SVG favicon, Apple touch 180, PWA 192/512) + web manifest + theme color + Apple metadata
- [x] Schema `@graph`: Organization, WebSite, LocalBusiness + ProfessionalService, ContactPoint, PostalAddress, AreaServed, OfferCatalog + Service, `hasOfferCatalog`, `sameAs` (Facebook), `knowsAbout`, `availableLanguage`
- [x] Per-page schema: WebPage, BreadcrumbList, Service, FAQPage, SpeakableSpecification
- [x] 14 service landing pages (7 FR + 7 EN), single-service focus, proof, one CTA
- [x] Visible breadcrumbs + BreadcrumbList
- [x] FAQs per service + home (visible, crawlable, no-JS) + FAQPage schema
- [x] `sitemap.xml` (home + 14 pages, hreflang alternates, images) + `robots.txt`
- [x] Internal linking: home cards → landing pages, footer → landing pages, related-service clusters, cross-links inside FAQ answers
- [x] Facebook connected (schema `sameAs` + OG `see_also`)
- [x] Performance: `next/image` with priority hero (LCP preload) + responsive srcset, fonts via `<link>`, lean JS, no-JS FAQ, reduced-motion preserved
- [x] Optimised for Google, Google AI Overviews, ChatGPT, Claude, Perplexity, Gemini, Bing Copilot and voice via entity-rich copy + connected structured data + speakable + FAQ

**Deferred (with reason)**
- [ ] Review / AggregateRating — **intentionally omitted**: no real reviews yet; fabricating them violates Google policy. Add once you collect genuine reviews.
- [ ] Blog / Insights, Case Studies, Locations, Team (`Person`), Knowledge Center — architecture is ready (mirror the service-page pattern); these are future content builds.
- [ ] `SearchAction` (sitelinks search box) — needs a working on-site search endpoint; add when search exists.
- [ ] Verified street address + `GeoCoordinates` in LocalBusiness — you haven't provided one; see action items.

---

## 6. Action items (owner)

1. **Set `NEXT_PUBLIC_SITE_URL`.** Canonical/hreflang/sitemap currently use the
   fallback `https://soudagemobilesm.ca`, but your email is on `soudagemobile.ca`.
   Choose one canonical domain and set `NEXT_PUBLIC_SITE_URL` in Coolify, or
   canonical URLs will point at the wrong host.
2. **Verify GTM.** Use GTM Preview / Tag Assistant to confirm the container
   loads, then configure GA4 / conversions inside GTM.
3. **Resend.** Verify the sending domain and set `RESEND_API_KEY` so the quote
   form emails (from the previous delivery).
4. **Google Business Profile** with a verified address — the single highest-impact
   local-SEO step remaining. Add the address to `siteConfig` afterwards so it
   flows into LocalBusiness schema.
5. **Submit `sitemap.xml`** in Google Search Console and Bing Webmaster Tools.

> Note on FAQ rich results: the FAQPage data is included and strongly helps AI
> answer engines and voice search, but Google now shows FAQ rich results mainly
> for authoritative gov/health sites — don't expect FAQ snippets in Google SERPs.
