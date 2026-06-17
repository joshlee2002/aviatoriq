# Full guide optimisation plan — 2026

**Date:** 16 June 2026  
**Scope:** All guide pages under `client/src/pages/guides`  
**Current inventory:** 182 `.tsx` guide files  
**Goal:** Bring every guide to an elite editorial, factual, country-relevant and SEO-ready standard while avoiding unsupported ranking promises.

## Non-negotiable principles

1. **No invented certainty.** We will not claim a guaranteed Google #1 ranking, guaranteed airline job, guaranteed medical outcome, guaranteed salary, guaranteed loan approval or guaranteed training timeline.
2. **Official-first research.** Aviation rules, medical standards, licensing, exams and programme eligibility must be checked against official regulators, airline pages, government pages, or primary documents wherever possible.
3. **Country purity.** Each guide must clearly match its country or regulator: UK CAA, FAA, EASA, CASA, Transport Canada, NZ CAA, GCAA, SACAA or the relevant airline/programme authority.
4. **People-first SEO.** Optimisation must make pages clearer, more useful and more trustworthy for readers. Keyword work cannot come at the expense of accuracy.
5. **Visible uncertainty.** If a rule, price, salary, finance route or airline programme changes frequently, the guide must say so and tell the reader what to verify.
6. **Batch control.** We will work in batches, test each batch, commit each batch and record what changed. No rushed all-at-once rewrite.

## Google-aligned SEO standard

Google's official guidance is the baseline for the SEO side of this project:

- Search Essentials define the core technical, spam-policy and best-practice requirements for eligibility and performance in Google Search.
- Google's SEO Starter Guide is treated as the baseline for crawlability, indexability, understandable content and search presence.
- Google's helpful-content guidance prioritises helpful, reliable, people-first content with original value, not content created only to manipulate rankings.
- E-E-A-T principles matter most for medical, finance, licensing, salary and career-decision content because these pages can materially affect reader decisions.
- Core Web Vitals and page experience matter because Google recommends good loading, responsiveness and visual stability for Search and user experience.

## Definition of an “elite” guide

A guide is not complete until it passes all of these checks:

### 1. Factual accuracy

- Claims are checked against official/primary sources wherever possible.
- Any figure that changes frequently has a date or “verify current terms” note.
- Medical and finance pages avoid personalised advice and direct readers to qualified professionals.
- Airline cadet pages avoid automatic-employment wording unless the official programme page explicitly supports it.

### 2. Country and regulator relevance

- The page clearly states which country/regulator it applies to.
- Terminology matches the country: UK CAA vs FAA vs EASA vs CASA etc.
- Cross-country examples are only included when they genuinely help the reader and are labelled as comparisons.

### 3. SEO intent coverage

- The title and H1 answer the main search intent directly.
- The intro answers the core query quickly.
- The page includes tables, checklists or decision frameworks where useful.
- FAQs match real user questions and avoid thin/repetitive answers.
- Related internal links move users to the next useful page or tool.

### 4. Trust and transparency

- Sources are visible or inferable through the guide layout/source box.
- The copy explains uncertainty and eligibility limits.
- Overclaim words are avoided: “guaranteed”, “automatic”, “always”, “best”, “must” unless legally/regulatorily precise.
- Pages that need expert review are flagged in the audit trail.

### 5. Competitive advantage

Each important guide should contain at least one competitor-beating asset, such as:

- country-specific cost table,
- regulator checklist,
- decision matrix,
- timeline table,
- mistakes-to-avoid section,
- source-reviewed summary,
- tool/calculator link,
- downloadable-style checklist content,
- programme comparison table.

## Batch order

### Batch 0 — governance and tooling

- Keep a master audit register for all guide files.
- Create a per-guide status field: `Not started`, `Audited`, `Edited`, `Needs expert review`, `Publishable`, `Monitor monthly`.
- Track source date, highest-risk claim type, and next review date.

### Batch 1 — UK foundation already completed

- First 20 UK guides have received full-body review and hardening.
- Remaining UK pages should continue next because the section is already in progress and search architecture benefits from consistency.

### Batch 2 — remaining UK commercial/YMYL guides

Priority examples:

- `BestFlightSchoolsUK.tsx`
- `FirstOfficerUK.tsx`
- `FlightInstructorUK.tsx`
- `FrozenAtplUK.tsx`
- `InstrumentRatingUK.tsx`
- `MccJocUK.tsx`
- `PilotEyesightUK.tsx`
- `SimulatorAssessmentGuide.tsx`
- `TuiMPL.tsx`
- `BASpeedbirdAcademy.tsx`

### Batch 3 — UK supporting guides and hubs

- lifestyle, schedules, benefits, bases, commuting, interview prep and related UK informational pages.
- Goal: make the UK cluster internally linked, non-duplicative and comprehensive.

### Batch 4 — USA high-risk guides

Priority examples:

- FAA medical guides,
- ATP certificate guide,
- Part 61 vs 141,
- US salary,
- US flight school loans,
- military-to-airline,
- retirement age,
- taxes and union pages.

### Batch 5 — Canada high-risk guides

- Transport Canada licensing/medical guides,
- Canada salary, costs, loans, taxes, cadets and regional airlines.

### Batch 6 — Australia high-risk guides

- CASA licensing/medical guides,
- Australia salary, training costs, loans, cadets, regional airlines and instructor route.

### Batch 7 — Europe/EASA high-risk guides

- EASA ATPL/CPL/medical,
- European salaries, cadets, finance, training costs and airline academy pages.

### Batch 8 — UAE, South Africa and New Zealand

- GCAA, SACAA and NZ CAA licensing/medical/cost/salary/cadet pages.
- These require extra country-purity checks because generic aviation claims often leak from UK/US/EASA assumptions.

### Batch 9 — airline cadet programme pages

- BA, easyJet, TUI, Ryanair, Wizz, Emirates, Etihad, Air Arabia, Lufthansa, Air France/KLM, Air Canada Jazz, Porter, WestJet, Qantas, Rex, Virgin Australia, Air New Zealand.
- These need live programme checks because eligibility, funding, places and application windows change quickly.

### Batch 10 — final sitewide SEO and technical pass

- Title/meta lengths.
- Canonical coverage.
- Internal linking and hub structure.
- Schema consistency.
- Sitemap/indexability.
- Duplicate/cannibalised pages.
- Broken routes and renamed files.
- Core Web Vitals/page weight follow-up.

## Per-guide workflow

For each guide:

1. Read the full article body.
2. Identify target country, target keyword, search intent and risk category.
3. Check claims against official/current sources.
4. Rewrite risky or unsupported claims.
5. Improve title, meta description, intro and headings if needed.
6. Add or improve tables, checklists, FAQs or internal links.
7. Ensure sources and uncertainty are visible.
8. Mark any expert-review need.
9. Run typecheck/tests/build for the batch.
10. Commit and create PR with a concise batch audit summary.

## Source hierarchy

Use this order when checking claims:

1. Official aviation regulator or government source.
2. Official airline/programme page.
3. Official school/university/provider page for pricing or eligibility.
4. Recognised industry body or union.
5. Current reputable market data for salaries/hiring where official data is unavailable.
6. Secondary SEO/competitor pages only for gap analysis, never as primary truth.

## Review cadence after launch

- Medical/licensing pages: every 6 months or when regulator updates occur.
- Cadet-programme pages: monthly during application seasons.
- Salary/cost/finance pages: every 3–6 months.
- Evergreen route/comparison pages: every 6–12 months.
- Technical SEO: monthly crawl and Search Console review.

## Success metrics

We cannot promise #1 rankings, but we can measure progress through:

- index coverage,
- impressions,
- click-through rate,
- average position,
- rankings by guide cluster,
- featured-snippet/AI Overview visibility,
- internal-link click paths,
- lead/tool conversions,
- content freshness coverage,
- number of guides with official-source validation.

## Immediate next action

Proceed with **Batch 2: remaining UK commercial/YMYL guides**, starting with the ten listed above. This is the safest next move because the first 20 UK pages are already hardened and the UK cluster should be finished before moving to another country.
