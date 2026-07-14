# Somali HORECA — Website

Next.js + TypeScript + Tailwind CSS. English only (confirmed — no bilingual build).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Phase 1 — Status: structure complete, awaiting real data

Everything below is built and verified compiling. All content is placeholder,
matching the vision doc's requirements exactly, ready to swap for real data.

### Directory (the biggest piece)
- **16 categories**, matching Section 4 of the vision doc exactly, grouped into:
  Hospitality Businesses, Suppliers, Professional Services, Investment & Development
- Real, working **search bar** (client-side filter over placeholder data — swap for a
  real Supabase query later, same UI)
- Business profile pages include all 10 required fields: company overview, logo,
  images, products & services, contact info, location, website/social, inquiry form,
  membership badge, downloadable brochure
- Clean nested URLs: `/directory/[category]/[business]`
- Breadcrumbs throughout

### Membership
- Names all 5 Advantages from the doc: Visibility, Lead, Market, Event, Network
- Sample 3-tier pricing table (Basic / Verified / Featured)

### Expo
- Full TODO list matches the doc's exact items (agenda, speakers, floor plans,
  product launches, networking events, media centre, post-event archive)
- Separate Sponsorship Packages page (`/expo/sponsors`)

### Resources
- TODO list matches the doc's exact content types (reports, guides, training,
  regulatory updates, best practice articles, success stories, news)

## What's NOT built yet (correctly deferred per the doc's own phase roadmap)

- Supplier Marketplace, RFQs, procurement tools — Phase 2
- Business Matchmaking — Phase 2
- Lead Generation Portal — Phase 2
- Investment Gateway — Phase 2
- Industry Intelligence Centre / dashboards — Phase 3
- Careers & Partnership Centre — not in Phase 1, deferred by choice
- Real authentication for Member Login — needed once Directory + Membership are live
- Real database (Supabase) — Directory currently runs on `lib/directory-data.ts`

## Next Step

Set up Supabase, replace `lib/directory-data.ts` with real queries, keep the same
page structure and UI — none of the components need to change, just the data source.
