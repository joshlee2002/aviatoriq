# AviatorIQ product audit and rebuild plan

Date: 2026-06-18

## Executive verdict

Current product score: **5.5 / 10**.

AviatorIQ has the raw ingredients of a valuable pilot-career guidance business: a large SEO surface, a serious lead form, quiz funnels, school matching, admin tooling, partner pages, PDF generation, Stripe premium flow, and credible trust-policy pages. It is not yet a coherent business-grade product. The site currently feels like many promising modules stitched together rather than one rigorous decision engine that a user would trust before spending £70,000-£120,000 on training.

The biggest commercial gap is not traffic or content volume. It is **trustworthy conversion**: every guide, calculator, quiz, and roadmap must push the user into one clear next step while producing a lead record that schools, finance partners, and medical partners would actually pay for.

## Evidence reviewed

### Codebase evidence

- The router exposes a broad product surface: main quiz, results, retrieve, licence quiz, flight-deck quiz, schools, calculator, integrated-vs-modular, medical tools, cadet checker, finance calculator, salary estimator, route selector, quiz hub, roadmap, admin, partner, school pages, regional hubs, and many guides.
- The lead schema captures useful fields: country, city, age, pilot goal, seriousness, school-contact status, preferred route, overseas openness, funding method, budget, finance interest, education, Class 1 medical status, experience, right-to-work/study, concern, timeframe, school-contact preference, source, partner consents, written answer, and contact/share consents.
- The scoring engine produces overall score, cold/warm/hot category, readiness/finance/medical/career/pathway dimensions, next action, biggest risk, cost range, timeline, route recommendation, and intent score.
- The audit found that the premium roadmap frontend expected risk scenarios with `scenario` and `probability`, while the server prompt asked the LLM for `risk`, `likelihood`, and `impact`; this patch aligns the prompt and adds fallback risk scenarios, but Zod validation and E2E coverage are still needed.
- The audit found an admin-dashboard TypeScript failure caused by JSX interpreting `{{q, a}}` as an object literal in visible copy; this patch replaces that copy so the project type-checks again.

### Market evidence

- Flight school marketing agencies position lead quality, structured admissions follow-up, and student starts as the core value, not raw traffic. Right Rudder Marketing says flight school advertising budgets often range from **$2,000-$10,000+ per month**, with at least **$3,000/month** recommended to see meaningful results across channels. Source: https://rightruddermarketing.com/marketing-system/flight-school-paid-advertising/
- Flight school growth advice repeatedly focuses on discovery flights, high-intent training searches, course pages, admissions follow-up, and converting serious enquiries into starts. Source: https://www.offthegroundmarketing.com/blog/top-10-strategies-to-market-your-flight-school-in-2025
- The global pilot training market is large and growing. Fortune Business Insights estimates the market at **USD 10.74B in 2025**, growing to **USD 29.71B by 2034**. Source: https://www.fortunebusinessinsights.com/pilot-training-market-107092
- Public US school cost ranges show users need transparent breakdowns. Epic Flight Academy says airline pilot training can run from **$85,000-$150,000 USD**. Source: https://epicflightacademy.com/how-much-does-flight-school-cost/

## Broken or high-risk functionality

| Area | Severity | Finding | Business impact | Fix |
|---|---:|---|---|---|
| Premium roadmap | Critical | Fixed prompt/fallback field mismatch found during audit; schema validation is still missing. | Paid product risk section is safer, but malformed LLM output can still weaken the purchase experience. | Add Zod parsing, normalize legacy fields, and add E2E premium tests. |
| Admin dashboard | Critical | Fixed JSX copy that caused TypeScript failure in the story form. | Build confidence restored for this issue. | Add admin smoke tests so copy changes cannot break the build again. |
| Previous Railway URL commit | Medium | Fallback URL was changed based on a misunderstood request. | Hardcoded production fallbacks are brittle and should not drive product behavior. | Replace repeated fallback with central `getAppUrl()` and require `APP_URL` in production. |
| Premium PDF | High | PDF generation is async and best-effort; UI can spin on “Generating PDF…” with unclear fallback. | Paying users may not get instant value. | Add PDF job status, retry, timeout message, email delivery, and admin alert. |
| Stripe purchase | High | Checkout relies on env vars and DB purchase status; needs end-to-end test coverage. | Revenue flow may fail silently. | Add Stripe test-mode E2E, webhook/redirect tests, and purchase audit table view. |
| Roadmap fallback | High | Fallback roadmap omits advertised risk scenarios and matched-school context can be thin. | Paid product value drops if LLM is unavailable. | Build deterministic premium fallback with all premium fields. |
| School matching | High | Matching mostly uses country, route, budget, finance, overseas openness. | Schools will not pay for weak matching. | Add scoring by course type, budget fit, start date, finance need, visa/right-to-work, medical readiness, and user preference. |
| CTAs | High | Many guide CTAs point to generic `/quiz`; regional guides sometimes point to routes that are not clearly available for that region. | Leaks intent and creates country confusion. | Create CTA map by topic and country. |
| Calculator | Medium | UK/global calculator mixes UK, EU, and US route types in one model; US calculator is simpler and lacks low/typical/high. | Cost trust is weak. | Country-specific cost engines with assumptions table and confidence level. |
| Medical tools | Medium | Medical lookup is content-heavy but should not imply clearance. | Legal/trust risk. | Stronger disclaimer, condition confidence, “book AME” referral capture. |
| Partner flow | Medium | Partner waitlist exists but no self-serve dashboard or proof of ROI. | Harder to sell schools. | Launch manual partner concierge first, then dashboard. |
| Auth/admin | Medium | Admin depends on protected OAuth role; sign-in UX needs manual verification. | Operational risk. | Add admin smoke tests and role-state screenshots. |
| SEO | Medium | Large number of guides but inconsistent country separation and likely overlapping intent. | Cannibalization and lower trust. | Content pruning, canonical discipline, internal linking clusters. |

## Tool-by-tool product audit

| Product surface | Keep / improve / merge / remove | Verdict | Required rebuild |
|---|---|---|---|
| Free assessment `/quiz` | Keep, rebuild as core funnel | This is the highest-value funnel because it captures lead fields schools need. | Reduce friction, show progress by outcome, enrich with route/country logic, add explicit school/finance/medical consent moments. |
| Results page | Keep, rebuild | Strong concept but too much depends on AI/PDF async behavior. | Make free output immediately valuable; separate school matches, cost gap, medical risk, and next action. |
| Premium roadmap | Keep, but do not scale until fixed | £14.99 can work if output feels expert-grade. Current schema/PDF risks are unacceptable for a paid product. | Schema-validated roadmap, deterministic fallback, PDF job status, Stripe E2E, sample preview, refund policy page. |
| Static roadmap `/roadmap` | Keep as lightweight lead magnet | Fast and useful, but too shallow for serious users. | Add email-gated “send my plan”, then route to full assessment. |
| US roadmap `/us/roadmap` | Keep | Good country-specific angle. | Mirror best global roadmap improvements and make US pathway precise: Part 61, Part 141, university, military/GI Bill, CFI hour-building. |
| Cost calculator `/calculator` | Keep, rebuild | Valuable, but country/route assumptions need rigor. | Low/typical/high ranges, hidden extras, accommodation, financing gap, per-stage breakdown, assumptions with source date. |
| US calculator `/us/calculator` | Keep, rebuild | Simpler than it should be. | Split PPL, IR, CPL, ME, CFI/CFII/MEI, ATP-CTP, checkrides, written exams, living, loan repayment. |
| Finance calculator | Keep only if tied to referrals | Needs to become an affordability tool, not just arithmetic. | Capture loan need, deposit, monthly affordability, preferred providers, consent. |
| Salary estimator | Improve | Useful for motivation but dangerous if too optimistic. | Add assumptions, seniority caveats, country/airline type segmentation, debt payback calculator. |
| Medical check | Keep | Important trust/lead magnet. | Country-specific AME next step and medical-risk lead capture. |
| Medical condition lookup | Keep but tighten | Useful if accurate and caveated. | Add source dates, authority links, “not a diagnosis”, AME referral capture. |
| Cadet eligibility checker | Keep | Strong intent tool. | Add programme availability, age/academic filters, deadline tracking, email alerts. |
| Integrated-vs-modular tool | Merge into route selector | Overlaps with roadmap. | Convert into a decision module feeding assessment and roadmap. |
| Route selector | Merge/improve | Should be the public, lightweight version of the roadmap engine. | Use same recommendation engine as assessment. |
| Quiz hub | Keep selectively | Some quizzes are thin top-of-funnel entertainment. | Keep 4 serious quizzes, label others as fun/social, route every result into the assessment with prefill. |
| Licence quiz | Keep if traffic proves it | Useful for awareness but weaker commercial intent. | Add email capture only after result value; link to country-specific roadmap. |
| Flight-deck quiz | Keep as viral/social | Good top-of-funnel. | Make share flow reliable and capture soft intent. |
| School directory | Keep, rebuild | Critical monetisation asset. | Add school profiles, verified pricing, last-updated badges, enquiry routing, reviews/testimonials only if verified. |
| School matching | Keep, rebuild | Core revenue path. | Add transparent match rationale, ranking controls, and user-requested introductions. |
| Partner page / for-schools | Keep, rewrite | Good direction but needs proof and sharper pricing. | Sell qualified introductions, not vague “leads”. Include sample lead card and pilot economics. |
| Admin dashboard | Keep, fix urgently | Essential operations tool. | Fix typecheck, lead statuses, assignment workflows, intro tracking, partner reporting. |
| Jobs/stories | Deprioritise | Nice but not core revenue. | Keep only if they support SEO/trust. |

## Product value standards for every tool

A tool should stay only if it meets at least two of these four criteria:

1. It helps a user make a real £10k+ decision better.
2. It captures data a partner would pay for.
3. It targets a clear SEO query with commercial or informational intent.
4. It moves the user to the next funnel step.

Anything else should be merged, hidden, or removed.

## Roadmap and premium product rebuild

### Free roadmap must include

- Recommended route by country and licence system.
- Estimated total cost range with low/typical/high.
- Funding gap: budget vs likely required capital.
- Medical risk flag and next AME action.
- Timeline by route and start timeframe.
- Country/licence path: UK CAA, EASA, FAA, CASA, Transport Canada, GCAA, SACAA, CAA NZ.
- School match preview with 2-3 best matches.
- Cadet suitability flag.
- Three immediate next steps.
- Warnings: medical before deposit, type rating risk, school solvency/refunds, hidden costs.

### Premium roadmap must include

- Full route recommendation with trade-offs.
- Month-by-month timeline.
- Budget gap model and “how to close it”.
- Financing reality and risk.
- Medical deep dive based on user concern.
- School shortlist with match rationale and questions to ask.
- Cadet programme suitability and alternatives.
- Career risk after training: first job, time to command, seniority, market cyclicality.
- 30-day action plan.
- PDF download and email delivery.
- AI follow-up chat grounded in the user’s answers and verified data.

### Premium price verdict

At **£14.99**, the product can be worth buying only if it is reliable and specific. Right now, do not push it as a serious paid product until the schema mismatch, fallback coverage, Stripe flow, and PDF delivery are fixed. Once fixed, £14.99 is a reasonable impulse purchase. A later tier at £49-£99 could include human review or partner-backed school intros.

## Cost calculator rebuild requirements

Each calculator must show:

- Country and licence authority.
- Route: integrated, modular, PPL-only, university, cadet/MPL, Part 61/141, military/veteran where relevant.
- Low / typical / high totals.
- Stage breakdown: PPL, hour building, ATPL/theory, CPL, MEIR/IR, MCC/JOC/APS MCC, CFI/CFII/MEI for US, ATP-CTP for US.
- Exam and skills-test/checkride fees.
- Medical fees.
- Equipment: headset, iPad, charts/apps, uniform.
- Accommodation and living costs.
- Extra hours/resits/weather delays.
- Type rating / airline bond risk where relevant.
- Assumptions, source date, and confidence level.
- CTA: “See schools that fit this budget” and “Send me this cost plan”.

## Ideal lead model

### Required lead fields

- Identity: name, email, phone, preferred contact.
- Location: country, city/region, relocation openness.
- Goal: airline, private, career-change, instructor, military-to-airline.
- Route interest: integrated, modular, cadet/MPL, Part 61, Part 141, university.
- Timeline: now, 3 months, 6 months, 12 months, exploring.
- Budget: cash available, expected finance need, deposit available.
- Funding method: savings, loan, family, employer, GI Bill/VA, bursary, unknown.
- Medical: Class 1 status, concerns, condition category, AME booked.
- Education/work eligibility: academics, right to study/work, visa need.
- Experience: none, trial lesson, PPL, hours, ratings.
- School intent: wants intros, shortlisted schools, open day booked, applied.
- Consent: schools, finance, medical, partners, marketing.
- Source: guide/tool/quiz/CTA.

### Scoring labels

- **Cold**: early research, no budget/timeline, no school-contact intent.
- **Warm**: clear goal, some budget/funding thought, 6-18 month timeline.
- **Hot**: high intent, near-term start, phone supplied, medical confidence, finance path.
- **School-ready**: wants school contact, country/route known, budget plausible, start <= 12 months.
- **Finance-ready**: wants finance, funding gap exists, income/repayment readiness captured.
- **Medical-risk**: concern or unknown medical; route to AME referral before school intro.
- **Cadet-suitable**: age/education/right-to-work/timeline matches cadet filters.

### Lead pricing logic

Start conservative and prove conversion before increasing price.

- Unqualified newsletter lead: £0-£2 value.
- Qualified education lead: £10-£25.
- Warm school lead: £25-£60.
- User-requested school introduction: £75-£150.
- Hot, school-ready introduction with phone and consent: £150-£300.
- Exclusive lead/introduction: £250-£500 depending on market and school capacity.
- Partner subscription: £149-£499/month for profile, inbox, analytics, and intro credits.

## School monetisation model

### What schools will actually pay for

Schools do not want “AI quiz leads”. They want prospects who:

- Know the difference between route options.
- Understand realistic costs.
- Have budget or finance intent.
- Are medically plausible or have been warned to resolve medical first.
- Have a clear start timeframe.
- Have consented to be contacted.
- Requested an introduction to that school or school type.

### Offer packaging

1. **Starter directory listing**: free or £49/month. Verified profile, course data, links.
2. **Qualified introductions**: £75-£150 per user-requested intro.
3. **Hot lead bundle**: £500/month for 5-10 warm/hot introductions, non-exclusive.
4. **Exclusive territory/category lead**: £250-£500 each, only after quality proof.
5. **Partner dashboard**: £249-£499/month with profile, lead inbox, analytics, notes, status updates.
6. **Sponsored content / school profile upgrade**: only with strict disclosure; avoid compromising trust.

### Anti-spam safeguards

- Only send leads with explicit consent.
- Never sell medical-risk leads as school-ready.
- Cap number of schools per introduction request.
- Log every partner contact.
- Let users opt out immediately.
- Deduplicate by email/phone.
- Suppress low-intent quiz-only captures from paid partner feeds.

## School partner pitch

**AviatorIQ helps aspiring pilots understand the real cost, route, medical, and school decisions before they enquire. That means schools receive fewer vague dreamers and more informed candidates who know their budget, preferred route, start timeframe, and next step.**

What partners receive:

- Candidate profile: country, city, age band, goal, route, budget, funding method, start timeframe.
- Readiness score and reason.
- Medical confidence flag.
- Finance interest flag.
- School-fit rationale.
- Consent record and source page/tool.
- Intro request context: why the candidate wants that school.

Why it is better than a generic form:

- Users self-educate before the enquiry.
- The platform filters cost, route, and medical misunderstandings.
- Schools can prioritise near-term candidates.
- Partners can see funnel source and intent score.
- The candidate actively requests an intro instead of being cold-sold.

## Funnel map

1. SEO guide, TikTok/YouTube/social, or school-search landing page.
2. Topic-specific tool CTA:
   - Cost guide -> calculator.
   - Medical guide -> medical checker / condition lookup.
   - Cadet guide -> cadet eligibility checker.
   - Route guide -> route selector / roadmap.
   - School guide -> school directory / match quiz.
3. Tool result gives useful free answer.
4. Result asks for email to save plan or compare schools.
5. Assessment enriches lead profile.
6. Results page shows score, route, cost range, risk, and school preview.
7. User chooses:
   - Request school intros.
   - Request finance help.
   - Book medical/AME guidance.
   - Buy premium roadmap.
8. Admin triage and partner delivery.
9. Partner feedback loop: contacted, booked call, open day, enrolled, lost reason.

## SEO/content audit and priorities

### SEO strengths

- Broad route coverage by country.
- Many long-tail guide topics.
- Trust-policy pages exist.
- Some pages include methodology/source language.
- Regional hubs create a scalable structure.

### SEO weaknesses

- Too many guides risk overlapping intent.
- UK, US, Europe, Australia, Canada, UAE, South Africa, and NZ content can blur together.
- Some CTAs route global users into UK-flavoured tools.
- Source citations and update dates are inconsistent.
- Author trust exists but should be more prominent on YMYL-style medical/financial pages.
- Programmatic guide volume may look thin if pages repeat structure without unique data.

### Priority clusters

1. **Commercial school intent**
   - best flight schools UK 2026
   - best flight schools USA / state pages
   - flight school near me pages only where data is strong
   - integrated ATPL schools UK
   - Part 141 flight schools USA

2. **Cost intent**
   - pilot training costs UK/USA/Australia/Canada/Europe
   - integrated vs modular cost
   - PPL/CPL/ATPL stage-cost pages
   - finance/loan pages

3. **Medical intent**
   - Class 1 medical guide by country
   - condition pages only with strong disclaimers and sources
   - ADHD/eyesight/asthma/mental-health pages where search demand is high

4. **Cadet programme intent**
   - BA Speedbird, easyJet, Ryanair, Wizz, TUI, United Aviate, Delta Propel, American cadet, Qantas, Emirates, Etihad.

5. **Decision tools**
   - integrated vs modular
   - route selector
   - training timeline
   - “am I too old” / readiness pages

### CTA rules

- Cost pages -> calculator and budget-gap capture.
- Medical pages -> medical checker and AME referral capture.
- Cadet pages -> cadet eligibility checker and deadline alerts.
- School pages -> school match and intro request.
- Route pages -> roadmap.
- Salary pages -> affordability/debt payback calculator.
- Regional pages -> country-specific tools only.

## UX cleanup principles

- One primary nav: Start assessment, Costs, Schools, Medical, Guides.
- Country selector should persist and alter CTAs.
- Do not mix UK CAA/EASA/FAA terminology on one result without explaining country context.
- Replace vague “AI roadmap” copy with “pilot training plan based on route, budget, medical status, and country”.
- Every result page needs a “What to do next” panel.
- Every form needs clear validation, saved state, loading state, and failure recovery.
- Remove or hide features that are not monetisation-relevant.
- Make trust visible: last updated, sources, author, reviewed by, disclaimer.

## 30-day fix plan

### Week 1: Stabilise revenue-critical flows

- Done in this patch: fix TypeScript failure in admin story form.
- Done in this patch: fix premium roadmap risk prompt/fallback mismatch.
- Add Zod validation/normalisation for LLM roadmap JSON.
- Add deterministic premium fallback with all advertised sections.
- Add Stripe test-mode end-to-end test checklist.
- Add PDF status handling and user-friendly timeout.
- Centralise `APP_URL` handling.

### Week 2: Rebuild core funnel clarity

- Audit every CTA and assign to a funnel map.
- Make `/quiz` the primary serious assessment.
- Make `/roadmap` and quiz hub feed into assessment with prefill/source.
- Add school-ready, finance-ready, medical-risk, cadet-suitable tags.
- Improve results page: route, cost gap, risk, next action, school matches.

### Week 3: Cost and school trust

- Rebuild cost calculators with low/typical/high by country.
- Add assumption tables and update dates.
- Rework school matching scoring.
- Add school profile quality flags: verified price, finance, course type, country, last updated.
- Create partner lead sample card.

### Week 4: Monetisation pilot

- Recruit 5-10 schools manually.
- Offer free trial introductions in exchange for feedback.
- Track intro-to-call and call-to-visit conversion.
- Add admin statuses and partner feedback fields.
- Launch finance/medical referral capture behind clear consent.

## 90-day growth plan

### Days 1-30: Product trust and conversion

- Fix broken flows.
- Make every major tool produce a useful result and a lead signal.
- Start manual school partner outreach.
- Publish 10 strongest country/cost/medical pages with source discipline.

### Days 31-60: Partner proof

- Deliver first 50-100 qualified introductions manually.
- Measure partner response time, booked calls, open days, enrolments.
- Convert 3-5 schools to paid pilots.
- Add partner reporting MVP.
- Build finance partner/referral experiment.

### Days 61-90: Scale SEO and dashboard

- Launch school dashboard MVP.
- Launch country-specific cost hubs.
- Prune/redirect thin or duplicate guides.
- Add email nurture sequences by user tag.
- Package lead products by quality tier.
- Publish public methodology pages for costs, school rankings, and medical disclaimers.

## Technical developer task list

### Critical bugs

- [x] Fix `AdminDashboard.tsx` JSX text causing TypeScript failure.
- [x] Replace premium risk prompt fields with frontend fields and add fallback risk scenarios.
- [ ] Add `roadmapSchema` Zod parser and safe defaults.
- [ ] Add complete fallback roadmap including `riskScenarios`, `matchedSchoolsContext`, and PDF-safe fields.
- [ ] Centralise app URL configuration and fail loudly when `APP_URL` is missing in production.

### Tests

- [ ] Unit-test quiz data integrity.
- [ ] Unit-test roadmap result calculation.
- [ ] Unit-test cost calculators with fixed snapshots.
- [ ] Unit-test lead scoring tags.
- [ ] Integration-test lead submit -> result -> school match.
- [ ] Integration-test introduction request.
- [ ] Stripe test-mode checkout and verify flow.
- [ ] PDF generation success/failure test.
- [ ] Admin auth role test.

### Product systems

- [ ] Add lead tags: school-ready, finance-ready, medical-risk, cadet-suitable.
- [ ] Add lead source attribution to every CTA/tool.
- [ ] Add partner lead delivery log.
- [ ] Add introduction status lifecycle.
- [ ] Add partner feedback fields.
- [ ] Add email capture table for every tool, not only quizzes.
- [ ] Add unsubscribe and consent audit trail.

### UX

- [ ] Country-aware CTA helper.
- [ ] Tool result templates with next-step panels.
- [ ] Mobile QA for every form/tool.
- [ ] Loading/error/empty states for all mutations.
- [ ] Route redirects for regional tool paths or remove invalid CTAs.

### SEO

- [ ] Route/content inventory with canonical map.
- [ ] Identify duplicates and merge targets.
- [ ] Add source/update metadata to guides.
- [ ] Add guide-to-tool CTA mapping.
- [ ] Add schema for articles, FAQs, breadcrumbs, schools, and search.

## Final product vision

AviatorIQ should become **the decision engine for aspiring pilots**.

The free product should help users answer five expensive questions:

1. Can I become a pilot in my country?
2. Which route should I take?
3. What will it really cost me?
4. What could stop me medically, financially, or practically?
5. Which schools should I speak to next?

The business should monetise only when it improves the user journey:

- Schools pay for informed, consented, high-intent introductions.
- Finance partners receive users with real funding gaps and repayment intent.
- Medical partners receive users who need AME guidance before wasting money.
- Premium roadmap buyers get a genuinely personalised plan that saves them time, mistakes, and wasted applications.
- A school dashboard becomes the operating system for partner schools to manage AviatorIQ-sourced prospects.

The product should not be “AI quizzes about becoming a pilot”. It should be **the trusted pre-application layer for pilot training**.
