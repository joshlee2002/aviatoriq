# PilotPath TODO

## Phase 1 – Schema & Design System

- [x] Create database schema (leads, flight_schools, lead_assignments, admin_notes)
- [x] Apply schema migration via SQL
- [x] Set up design tokens (aviation colour palette, typography, global CSS)
- [x] Update index.html with Google Fonts

## Phase 2 – Server Routers

- [x] Lead submission procedure (public)
- [x] Lead scoring engine (server-side utility)
- [x] AI roadmap generation procedure (server-side, uses LLM)
- [x] AI admin lead summary procedure (server-side, uses LLM)
- [x] Admin: list leads with filters/search/pagination
- [x] Admin: update lead status and notes
- [x] Admin: CSV export
- [x] Admin: assign lead to school
- [x] Admin: delete lead
- [x] Flight schools: list/filter (public)
- [x] Flight schools: CRUD (admin)
- [x] School matching logic (post-quiz)
- [x] Owner notification on Hot lead

## Phase 3 – Marketing Home Page

- [x] Public navigation bar (logo, links, CTA button)
- [x] Hero section with headline and CTA
- [x] How it works section (3 steps)
- [x] Training routes section (Airline, Private, Corporate, Instructor)
- [x] Trust/social proof section
- [x] Training cost teaser section
- [x] Flight school matching teaser section
- [x] Footer with links

## Phase 4 – Multi-Step Quiz

- [x] Quiz page with progress bar
- [x] Section 1: Basic details (name, email, phone, country, city, age)
- [x] Section 2: Pilot goal and seriousness
- [x] Section 3: Training route preference
- [x] Section 4: Financial qualification
- [x] Section 5: Suitability (education, medical, experience)
- [x] Section 6: Intent and objections
- [x] Optional AI free-text answer box
- [x] GDPR consent checkbox (required)
- [x] Submit and trigger lead scoring

## Phase 5 – AI Personalised Report

- [x] Results/roadmap page
- [x] AI-generated training route recommendation
- [x] Estimated cost range display
- [x] Readiness score display (Hot/Warm/Cold badge)
- [x] Matched flight schools section
- [x] Next steps section
- [x] Disclaimer section

## Phase 6 – Admin Dashboard

- [x] Role-gated admin route (admin only)
- [x] Lead table with score, category badge, status
- [x] Search leads by name/email
- [x] Filter by country, score, goal, timeframe, budget, category
- [x] View full lead detail modal/page
- [x] AI summary display per lead
- [x] Add admin notes
- [x] Change lead status (8 statuses)
- [x] Mark contacted / sent to school
- [x] Assign lead to school
- [x] Delete lead
- [x] CSV export button
- [x] Admin: flight school management (add/edit/toggle active)

## Phase 7 – Flight School Directory & Cost Calculator

- [x] Public flight school directory page
- [x] Filter by country, training type, finance available
- [x] School profile cards
- [x] Training cost calculator page
- [x] Calculator: choose route (Integrated ATPL, Modular ATPL, PPL)
- [x] Calculator: choose country
- [x] Calculator: show estimated cost breakdown

## Phase 8 – SEO Guide Pages & Analytics

- [x] Guide: How to become a pilot
- [x] Guide: How much does pilot training cost?
- [x] Guide: Integrated vs Modular pilot training
- [x] Guide: What is a Class 1 Medical?
- [x] Guide: Airline pilot salary guide
- [x] Guide: Best route to become an airline pilot
- [x] Guide: Can I become a pilot without rich parents? (Finance guide)
- [x] Guide: How long does pilot training take? (Timeline guide)
- [x] Analytics: quiz started event
- [x] Analytics: quiz completed event
- [x] Analytics: lead submitted event
- [x] Analytics: hot lead generated event
- [x] Analytics: school recommendation clicked event
- [x] Analytics: contact requested event
- [x] Owner email notification on Hot lead (via notifyOwner)

## Phase 9 – Polish & Delivery

- [x] Wire all routes in App.tsx
- [x] Privacy Policy page
- [x] Terms page
- [x] Contact page
- [x] 404 page
- [x] Mobile responsiveness check
- [x] Vitest unit tests for scoring engine
- [x] Vitest unit tests for lead router
- [x] Final checkpoint

## Phase 10 – AviatorIQ Rebrand & Platform Upgrade

- [x] Rename platform from PilotPath to AviatorIQ in all files (HTML title, nav, footer, meta, copy)
- [x] Update app title secret VITE_APP_TITLE to AviatorIQ
- [x] Update scoring engine to return 5 sub-scores (Readiness, Finance, Medical, Career, Pathway)
- [x] Rebuild results page with 5-dimension AviatorIQ score card
- [x] Replace "Visit School" links with "Request Introduction" checkbox flow
- [x] Add introduction_requests table to schema and router
- [x] Seed 50 real flight schools with country, type, finance, website data
- [x] Add finance matching layer on results page
- [x] Update admin dashboard to show introduction requests

## Phase 11 – Pilot Blueprint PDF & Admin Insights

- [x] Install PDF generation library (pdfkit or similar) on server
- [x] Build server-side PDF generator: cover page, score card, pilot profile, recommended route, cost estimate, timeline, matched schools, risks, next actions, disclaimer
- [x] Store generated PDF in S3 and save key to lead record
- [x] Add tRPC procedure to download/retrieve PDF by lead ID
- [x] Add download button on results page
- [x] Auto-email PDF to user on quiz submission (via notifyOwner pattern or direct email)
- [x] Admin insights panel: aggregate stats (avg budget, funding method distribution, goal breakdown, score band conversion)
- [x] Admin insights panel: country distribution chart
- [x] Admin insights panel: leads over time chart

## Phase 12 – Partner Page, Quiz Enhancement, PDF & Analytics

- [x] Partner With AviatorIQ school-facing sales page (/partner)
- [x] Add preferred contact method question to quiz (Email/Phone/WhatsApp/Any)
- [x] Add preferredContact field to leads schema and migration
- [x] Lead value estimation in admin dashboard (High/Medium/Low, not visible to users)
- [x] PDF Pilot Blueprint: server-side generation with pdfkit
- [x] PDF stored in S3, key saved to lead record
- [x] PDF download endpoint (tRPC procedure)
- [x] PDF download button on results page
- [x] Auto-email PDF to user on quiz submission
- [x] Admin analytics panel: completion stats, score distribution, budget averages, funding breakdown, country split, goal breakdown, leads over time
- [x] Wire /partner route in App.tsx and add to nav footer

## Phase 13 – Launch Prep (Stop After This)

- [x] Add "For Schools" link to top navigation bar
- [x] Add social sharing (Twitter/X and WhatsApp) to results page with user-centric copy
- [x] Add source tracking field to leads schema and migration
- [x] Add source question to quiz (Instagram, Facebook, Reddit, Google, YouTube, Friend, Other)
- [x] Show source column in admin lead table and detail panel
- [x] Add source breakdown to admin analytics panel

## Phase 13 – Launch Prep (Feature Complete After This)

- [x] Add "For Schools" link to top navigation bar (outlined button, distinct from CTA)
- [x] Add social sharing to results page (Twitter/X and WhatsApp, user-centric copy)
- [x] Add source field to leads schema (Instagram, Facebook, Reddit, Google, YouTube, Friend, Other)
- [x] Add "How did you hear about us?" question to quiz
- [x] Show source in admin lead table and detail panel
- [x] Add source breakdown to admin analytics panel
- [x] Build Launch Dashboard at top of admin: last 7 days stats (visitors, quiz starts, completions, completion rate, Flight Ready leads, intro requests, intro rate, top source, top country, avg budget)

## Phase 14 – Currency Conversion

- [x] Create CurrencyContext with geo-detection (ipapi.co), exchange rates, and formatPrice helper
- [x] Update Calculator page to use detected currency with live conversion
- [x] Update Schools directory price ranges to show converted currency
- [x] Update Results page cost estimates to show converted currency
- [x] Add manual currency switcher (flag + code) in PublicNav
- [x] Write vitest tests for currency formatting and conversion logic

## Phase 15 – Licence Quiz ("Which Pilot Licence Is Right For You?")

- [x] Add licenceQuizLeads table to drizzle schema and apply migration
- [x] Build scoring logic in server/licenceQuizScoring.ts (6 outcomes)
- [x] Add tRPC procedures: submitLicenceQuiz, getLicenceQuizStats
- [x] Build 8-step quiz UI at /quiz/licence
- [x] Build results page at /quiz/licence/results with immediate result display
- [x] Add email gate for detailed PDF breakdown (email + consent only)
- [x] Add social proof stat ("X% of users with this result take the career assessment")
- [x] Add AviatorIQ Career Assessment CTA funnel on results page
- [x] Add licence quiz entry point card on homepage
- [x] Add licence quiz link in PublicNav and footer
- [x] Register /quiz/licence and /quiz/licence/results routes in App.tsx
- [x] Write vitest tests for licence quiz scoring logic

## Phase 16 – Flight Deck Quiz ("How Close Are You To The Flight Deck?")

- [x] Build client-side scoring engine in client/src/lib/flightDeckScoring.ts
- [x] Build 6-question quiz UI at /quiz/flight-deck with dark aviation theme
- [x] Build results page at /quiz/flight-deck/results with Flight Potential Score, barrier card, timeline, and AviatorIQ CTA
- [x] Register routes in App.tsx
- [x] Add Flight Deck quiz as primary card in homepage QuizTeaserSection (3-card grid)
- [x] Update PublicNav Quizzes link to point to /quiz/flight-deck
- [x] Write vitest tests for flightDeckScoring engine (10 tests)
- [x] Write vitest tests for licenceQuizScoring engine (8 tests)

## Phase 17 – Monetisation: Finance Referral, Shareable Results, Guide Rewrites

- [x] finance_interests table added to schema and applied to live DB
- [x] flight_deck_shares table added to schema and applied to live DB
- [x] Finance referral lead capture card on Results page (email, name, phone capture + owner notification)
- [x] Finance referral card on FlightDeckResults page
- [x] Shareable Flight Deck result URL at /quiz/flight-deck/share/:shareId
- [x] Copy-link button on FlightDeckResults page (saves result to DB, generates share URL)
- [x] FlightDeckShare public page (loads result by shareId, CTA to take quiz)
- [x] Rewrite HowToBecomePilot guide (12 min, 6+ sections, tables, quiz CTA)
- [x] Rewrite AirlinePilotSalary guide (8 min, salary tables, airline comparison)
- [x] Rewrite Class1Medical guide (10 min, conditions table, AME info)
- [x] Rewrite FinanceGuide (10 min, funding sources table, cadet programmes)
- [x] Rewrite IntegratedVsModular guide (9 min, comparison table)
- [x] Rewrite PilotTrainingCosts guide (11 min, full cost breakdown table)
- [x] Rewrite BestRouteToAirline guide (9 min, cadet programme table)
- [x] Rewrite TrainingTimeline guide (8 min, timeline table)

## Phase 18 – Personalised Pilot Training Cost Calculator

- [x] Replace static Calculator.tsx with personalised multi-step calculator (5 inputs)
- [x] Client-side cost engine: route × location × pace × experience × funding adjustments
- [x] Live results panel: specific midpoint estimate, itemised breakdown, monthly payment plan
- [x] "What this means for you" insight paragraph based on inputs
- [x] calc_sessions table added to schema and applied to live DB (analytics)
- [x] tRPC procedure: saveCalcSession (saves inputs + result for analytics)
- [x] Write vitest tests for cost calculation engine

- [x] Add SEO meta tags (title, description, canonical) to all guide pages and tool pages
- [x] Add FAQ schema (JSON-LD) to all guide pages for rich snippets
- [x] Add Open Graph tags for social sharing
- [x] Remove direct school website links from Results page matched schools section
- [x] Remove direct school website links from Schools directory listing cards
- [x] Make "Request Introduction" the only school CTA on Results and Schools pages
- [x] Build Integrated vs Modular Decision Tool (/tools/integrated-vs-modular)
- [x] Build Class 1 Medical Readiness Check (/tools/class-1-medical-check)
- [x] Add both new tools to nav Tools dropdown and homepage tools section

- [x] Homepage hero: new identity-led headline "Could You Actually Become An Airline Pilot?"
- [x] Homepage hero: instrument panel with sample score, 4 stat tiles, and tool links
- [x] Homepage: hero right panel shows platform preview with score gauge and tools
- [x] Results page: circular arc score gauge (SVG)
- [x] Results page: 4-stat instrument panel (Biggest Risk, Best Route, Est. Cost, Timeline)
- [x] Results page: Flight Plan styled roadmap with waypoints and runway line (dark navy panel, gold header, numbered waypoints)
- [x] Global CSS: glassmorphism card tokens, aviation colour palette, cockpit-inspired styles

## Phase 19 – Migration to New Project & Priority Fixes

- [x] Migrate all 14 DB tables to new project database
- [x] Restore all server files (routers.ts, db.ts, scoring.ts, pdfReport.ts, licenceQuizScoring.ts, flightDeckScoring.ts)
- [x] Restore all client pages (Home.tsx, Quiz.tsx, Results.tsx, AdminDashboard.tsx, Schools.tsx, SchoolsUS.tsx, all guides, all tools)
- [x] Fix TypeScript errors (GuideLayout category prop, Results.tsx circular reference, DeltaPropelGuide components)
- [x] Install missing dependencies (posthog-js, react-helmet-async)
- [x] Add captureRoadmapEmail tRPC endpoint to leads router
- [x] Add email gate overlay before AI roadmap section on Results page (blurred preview + unlock form)
- [x] Set OPENAI_API_KEY and PEXELS_API_KEY secrets
- [x] 54 real UK and US flight schools in database
- [x] All 70 tests passing

## Phase 20 – Lead-Gated School Directory & Images

- [x] Add 15 real UK integrated ATPL providers with accurate 2026 pricing
- [x] Remove 5 duplicate/outdated UK school entries
- [x] Upload 163 aviation images to CDN and wire into all guide pages, tool pages, school cards
  - [x] Strip website URL, phone, full pricing from school cards (show teaser: name, location, type, "from £X", finance badge only)
  - [x] Build "Get Full Details" modal with name+email form on each school card
  - [x] On form submit: reveal full school details inline, store lead in DB with school pre-assigned
  - [x] Wire school unlock leads to admin dashboard lead list

## Phase 21 – Admin Source Filter, More US Schools, School Notification Email

- [x] Add 13 more real US flight schools to DB (Spartan, Sierra, Westwind, etc.) — total 32 US schools
- [x] Add Source filter dropdown to admin dashboard lead list (All / Quiz / School Unlock / Roadmap Email / Licence Quiz / Flight Deck / Calculator)
- [x] Add Notify School button in lead detail modal (mailto: pre-filled with lead details, school name, contact email)
- [x] Add Send Introduction action in Introductions panel (mailto: pre-filled to school contact)
- [x] Update getLeadAssignments and listAllIntroductionRequests to join flight_schools for contact email

## Phase 22 – Bug Fixes & Production Stability

- [x] Add Express trust proxy (app.set("trust proxy", 1)) to fix secure cookies behind Manus reverse proxy
- [x] Switch currency API from exchangerate.host (broken/paid) to open.er-api.com (free, no key required)
- [x] Fix duplicate React key warning for 'finance' — question o4 in biggest-obstacle quiz had two options with value="finance"; renamed second to "finance2"
- [x] Add normalizeValue() in QuizPage.tsx diagnostic scoring to map "finance2" → "finance" result correctly
- [x] UK/US content separation fixes: UK guides index defaults to UK-only, US announcements in nav, Quizzes in US nav
- [x] All 70 tests passing, zero TypeScript errors

## Phase 23 – US Homepage Parity & Quiz Hub Enhancement

- [x] Rebuild US homepage (HomeUS.tsx) with full section parity to UK homepage
- [x] US homepage: hero with sample roadmap card (Alex, Dallas, TX) and cockpit background
- [x] US homepage: social proof bar (32+ schools, 20+ guides, 8 tools, Free)
- [x] US homepage: How It Works (3 steps, FAA-specific copy)
- [x] US homepage: Expert Credibility / Why Trust Us (4 pillars, FAA-sourced data)
- [x] US homepage: Quiz Teaser (3 quiz cards, FAA-specific)
- [x] US homepage: US Tools section (Cost Calculator, FAA Medical Lookup, Cadet Eligibility)
- [x] US homepage: Training Routes (ATP, PPL, Corporate, CFI)
- [x] US homepage: After Training (Resume, Interview, Aptitude, Cadet Programmes)
- [x] US homepage: Cost section with finance options (GI Bill, cadet sponsorships)
- [x] US homepage: School Matching section
- [x] US homepage: FAA Guides grid (6 guides)
- [x] US homepage: CTA banner + email capture
- [x] Enhance Quiz Hub (QuizHub.tsx) with featured quiz spotlight, stats bar, 7-quiz grid with accent colours and badges, bottom CTA

## Phase 24 – For Schools Page, Nav Login Button, US Hero CTA Fix

- [x] Fix US homepage hero primary CTA to link to /us/roadmap instead of /us (already correct from Phase 23 rebuild)
- [x] Add Sign in button to nav for logged-out users
- [x] Add user avatar/profile dropdown to nav for logged-in non-admin users (shows name, email, sign out)
- [x] Build For Schools pricing page at /for-schools (hero, stats, why partner, 3-tier pricing, example lead card, FAQ, application form)
- [x] Wire /for-schools route in App.tsx
- [x] Update "For Schools" nav button to point to /for-schools

## Phase 25 – Week 1: Revenue-Critical Stability (30-Day Rebuild Plan)

### Roadmap JSON validation & normalisation
- [x] Create `server/roadmapSchema.ts` — single source of truth for AI roadmap JSON shape
  - Zod schema with `.passthrough()` for future LLM fields
  - `RiskScenarioSchema` with `.transform()` to remap legacy `risk`/`likelihood` → `scenario`/`probability`
  - `normaliseRoadmap()` — fills every advertised premium section with safe, useful defaults if LLM omits them
  - `parseAndNormaliseRoadmap()` — single entry point: JSON.parse → null/array guard → Zod → normalise → never throws
  - Default values for: hiddenCosts (6 items), schoolSelectionCriteria (4 items), monthlyTimeline (6 phases), riskScenarios (3 scenarios), thirtyDayActionPlan (5 steps)
- [x] Wire `parseAndNormaliseRoadmap` into `generateRoadmap` — LLM output normalised before DB storage
- [x] Wire `parseAndNormaliseRoadmap` into `generateRoadmap` cache path — old stored roadmaps normalised on the way out
- [x] Wire `parseAndNormaliseRoadmap` into `getResult` — `lead.aiRoadmap` normalised before being returned to frontend
- [x] Write 25 vitest tests for roadmapSchema (all pass): valid input, legacy remapping, missing premium defaults, malformed JSON, null/empty input, Zod schema validation

### APP_URL centralisation
- [x] Create `server/_core/appUrl.ts` — `getAppUrl()` helper reads `APP_URL` env var with safe fallback
- [x] Replace all 4 hardcoded Railway URL fallbacks across `server/_core/index.ts` and `server/routers.ts`
- [x] Fix hardcoded URLs in `server/emails/IntroductionConfirmation.tsx`, `server/emails/PremiumRoadmapUnlocked.tsx`, `server/emails/WelcomeBlueprint.tsx`
- [x] Fix hardcoded URL in `server/pdfReport.ts` CTA section

### PDF field name alignment
- [x] Update `server/pdfReport.ts` `RiskScenario` interface to use `scenario`/`probability` (canonical names)
- [x] Update PDF risk rendering to use `risk.scenario ?? risk.risk` and `risk.probability ?? risk.likelihood` for backward compat with old stored PDFs

### PDF retry/timeout fix
- [x] Fix `pdfRetryCount` — `setPdfRetryCount` was never called; added `useEffect` in `Results.tsx` to increment on each refetch without a result
- [x] Update PDF status UI: shows "PDF generation failed — retry" link after 20 failed polls (~100 seconds) instead of infinite spinner
- [x] Retry button resets `pdfRetryCount` to 0 and calls `pdfQuery.refetch()`

### Admin dashboard CRUD forms
- [x] Add full create/edit/delete forms for Jobs panel in admin dashboard
- [x] Add full create/edit/delete forms for Stories panel in admin dashboard
- [x] Add Schools tab to admin dashboard tab bar (moved from floating modal button)
- [x] Add full create/edit/delete forms for Schools panel in admin dashboard

### Data population
- [x] `seed-schools.mjs` — 65 flight schools across UK (20), US (15), AU (10), CA (10), EU (5), UAE (2), ZA (3)
- [x] `seed-jobs.mjs` — 30 pilot job listings across UK (15), US (10), Global/AU/CA (5)
- [x] `seed-stories.mjs` — 12 pilot stories covering all archetypes (career changer, military, women in aviation, helicopter, etc.)

### Test results
- 152 tests passing, 0 failing
- `pnpm check` passes with 0 TypeScript errors

### Files changed
- `server/roadmapSchema.ts` (new)
- `server/roadmapSchema.test.ts` (new, 25 tests)
- `server/_core/appUrl.ts` (new)
- `server/_core/index.ts` (APP_URL centralised)
- `server/routers.ts` (normalisation wired into generateRoadmap + getResult; APP_URL centralised)
- `server/pdfReport.ts` (risk field names aligned; hardcoded URL removed)
- `server/emails/IntroductionConfirmation.tsx` (hardcoded URL removed)
- `server/emails/PremiumRoadmapUnlocked.tsx` (hardcoded URL removed)
- `server/emails/WelcomeBlueprint.tsx` (hardcoded URL removed)
- `client/src/pages/Results.tsx` (PDF retry counter fixed; timeout UI added)
- `client/src/pages/AdminDashboard.tsx` (full CRUD forms for Jobs, Stories, Schools; Schools tab added)
- `seed-schools.mjs` (65 schools)
- `seed-jobs.mjs` (new, 30 jobs)
- `seed-stories.mjs` (new, 12 stories)
- `docs/aviatoriq-product-audit-rebuild-plan.md` (new, from PR #3)

### Still to do (Week 2–4)
- [ ] Week 2: Lead tags (school-ready, finance-ready, medical-risk, cadet-suitable) — DB migration + scoring + admin display
- [ ] Week 2: Results page improvements — funding gap, medical risk, biggest barrier, strongest asset, next action, school matches all visible without premium
- [ ] Week 2: CTA audit — every page has one clear next step
- [ ] Week 3: Cost calculator rebuild — low/typical/high ranges by country/route, hidden costs, assumptions, last-updated date
- [ ] Week 3: School matching scoring overhaul — score by country, route, budget, finance need, start timeline, medical readiness, relocation
- [ ] Week 3: Partner lead sample card in admin
- [ ] Week 4: Admin lead quality fields, finance/medical referral capture with consent

## Phase 26 – Week 2: Core Funnel Clarity + Lead Tags + CTA Audit

### Lead Tags (DB + Scoring + Admin + Export)
- [x] `drizzle/schema.ts` — added `leadTags varchar(255)` column to the `leads` table
- [x] `drizzle/0013_lead_tags.sql` — migration file (runs automatically on Railway deploy)
- [x] `server/scoring.ts` — added `leadTags`, `strongestAsset`, `fundingGap` to `ScoreResult` and computed them in `scoreLead()`:
  - `school-ready`: finance ≥ 70 AND readiness ≥ 70
  - `finance-ready`: has a funding method AND budget ≥ £30k/€35k/$40k/A$50k
  - `medical-risk`: class1Medical is "No" or "Not sure"
  - `cadet-suitable`: airline goal + high budget + age ≤ 36
  - `hot`/`warm`/`cold`: mirrors the lead category
  - `strongestAsset`: highest-scoring dimension with a human-readable label
  - `fundingGap`: estimated gap between budget and training cost (or null if budget covers it)
- [x] `server/routers.ts` — `leads.submit` saves `leadTags` to DB and returns `strongestAsset` + `fundingGap`
- [x] `client/src/pages/AdminDashboard.tsx` — lead table rows and detail modal show colour-coded tag badges
- [x] `client/src/pages/AdminDashboard.tsx` — CSV export includes: Lead Tags, Intent Score, Biggest Concern, Funding Method, Class 1 Medical, Wants Finance Info, Start Timeframe

### Free Results Page Improvements
- [x] `client/src/pages/Results.tsx` — three new cards visible WITHOUT premium:
  - **Funding Gap** (amber) — estimated shortfall with link to finance calculator
  - **Strongest Asset** (green) — what's working in the user's favour
  - **Your Next Step** (blue) — single most important next action
- [x] `client/src/pages/Results.tsx` — Medical Risk Warning banner (visible without premium) when `medical-risk` tag is present

### CTA Audit — 47 guide pages fixed
- [x] Fixed wrong `/us/roadmap` on 5 non-US regional airline guides → `/roadmap`
- [x] Fixed generic `/quiz` on 20 lifestyle/career/shortage guides → `/roadmap`
- [x] Fixed 20 training route/career decision guides → `/roadmap`
- [x] Fixed 6 licence requirement guides → `/roadmap`
- [x] Fixed PilotCvGuide → `/roadmap`
- [x] Kept `/quiz` for: AirlineInterview, PilotAptitudeTest, PilotAptitudeTestPrep (quiz is appropriate)

### Quality Gates
- `pnpm check`: ✅ zero TypeScript errors
- `pnpm test`: ✅ 152 tests pass (9 test files)

### Files changed
- `drizzle/schema.ts` (leadTags column added)
- `drizzle/0013_lead_tags.sql` (new migration)
- `server/scoring.ts` (leadTags, strongestAsset, fundingGap added)
- `server/routers.ts` (leadTags saved to DB; strongestAsset + fundingGap returned)
- `client/src/pages/AdminDashboard.tsx` (tag badges, CSV export columns)
- `client/src/pages/Results.tsx` (funding gap, strongest asset, next step, medical risk cards)
- 47 guide pages (CTA href + text updated)

### Still to do (Week 3–4)
- [ ] Week 3: Cost calculator rebuild — low/typical/high ranges by country/route, hidden costs, assumptions, last-updated date
- [ ] Week 3: School matching scoring overhaul — score by country, route, budget, finance need, start timeline, medical readiness, relocation
- [ ] Week 3: Partner lead sample card in admin
- [ ] Week 4: Admin lead quality fields, finance/medical referral capture with consent
