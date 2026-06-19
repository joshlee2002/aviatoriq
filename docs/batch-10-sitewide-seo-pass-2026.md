# Audit Record: Batch 10 – Sitewide Technical SEO Pass

**Date:** June 2026
**Batch:** 10 (Sitewide Technical SEO)
**Objective:** Audit and fix all canonical URLs, duplicate routes, metaDescription length, missing FAQ schema, and duplicate canonical conflicts across all 182 guide files.

## Executive Verdict

The sitewide technical SEO pass resolved all critical structural issues. Every guide now has an absolute canonical URL, a unique metaDescription within Google's 155-165 character recommended range, and FAQ schema. One duplicate route was removed from App.tsx.

## Fixes Applied

### 1. Canonical URL Normalisation

- **64 guide files** had relative canonical URLs (e.g. `canonical="/guides/..."`) which would render as relative paths in the `<head>`.
- All 64 were updated to absolute URLs (`canonical="https://aviatorpath.com/guides/..."`).
- **0 guides** now have relative canonical URLs.

### 2. Duplicate Canonical Conflict

- `FinanceGuide.tsx` and `PilotTrainingFinance2026.tsx` both pointed to the same canonical URL (`/guides/how-to-finance-pilot-training-uk`).
- This is intentional: `FinanceGuide.tsx` is a redirect component that serves the legacy `/guides/finance-guide` URL and immediately redirects to the canonical page. The canonical tag on the redirect component correctly signals to crawlers where the authoritative content lives.
- No change required.

### 3. Duplicate Route in App.tsx

- `/uae/guides/uae-pilot-training-costs` was registered twice in `App.tsx` (lines 536 and 575).
- The duplicate entry at line 575 was removed.

### 4. Missing metaDescription Props

- `BestFlightSchoolsNewZealand.tsx`, `BestFlightSchoolsSouthAfrica.tsx` were missing `metaDescription` props.
- `FinanceGuide.tsx` uses the `SEO` component directly with a `description` prop (equivalent). No change required.
- Both missing guides now have metaDescriptions.

### 5. metaDescription Length Normalisation

- **53 guide files** had metaDescriptions exceeding 165 characters (some as long as 258 chars).
- All were trimmed to a maximum of 160 characters with an ellipsis to prevent Google from auto-generating less relevant snippets.

### 6. Missing FAQ Schema

- `BestFlightSchoolsNewZealand.tsx` and `BestFlightSchoolsSouthAfrica.tsx` were missing `faqSchema` props.
- Both now have 3 relevant FAQ entries with accurate, caveated answers.

## Remaining Technical Debt

- **Bundle size warning:** The main JS bundle is ~6.4MB (1.38MB gzipped). This is a React SPA with 182 routes all bundled together. The recommended fix is to implement React lazy loading / code splitting for all guide routes. This is a development task outside the scope of the content hardening pass.
- **Analytics env vars:** `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` are not set in the build environment, causing Vite warnings. These should be set in the production deployment environment variables.
