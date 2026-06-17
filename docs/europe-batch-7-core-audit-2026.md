# Europe (EASA) Cluster: Batch 7 Content Audit (2026)

## Overview
- **Cluster:** Europe (EASA)
- **Batch:** 7 (Core Guides)
- **Files Hardened:** 4
  - `HowToBecomePilotEurope.tsx`
  - `EuropePilotSalary2026.tsx`
  - `EuropePilotTrainingCosts.tsx`
  - `BestFlightSchoolsEurope.tsx`

## Executive Verdict
The European core guides have been hardened to the elite standard. EASA terminology is strictly enforced (Part-FCL, ATO, AMC/GM). The critical distinction between gross salary and high Western European taxation vs lower Eastern European taxation has been clarified. The cost of a type rating (often €30,000 self-funded or bonded) is now explicitly called out as a hidden hurdle, preventing students from running out of money post-Frozen ATPL.

## File-by-File Audit & Fixes

### 1. `HowToBecomePilotEurope.tsx`
- **Risk Identified:** Overly generic progression steps that sounded like FAA rules (e.g. 1,500 hour rule).
- **Fix:** Rewritten to explicitly follow the EASA Part-FCL progression (PPL -> ATPL Theory -> CPL/MEIR -> Frozen ATPL -> Type Rating). The 1,500-hour requirement was clarified as the point at which the ATPL "unfreezes" for command upgrade, not the requirement to get a right-seat job.
- **Status:** Elite standard met.

### 2. `EuropePilotSalary2026.tsx`
- **Risk Identified:** Broad salary bands that ignored the massive disparity in European taxation and the LCC sector-pay model.
- **Fix:** Separated Base Pay from Sector/Flight Pay. Clarified that Ryanair/Wizz Air salaries are highly dependent on summer productivity. Added the critical context that a €110k gross salary in Poland (with a 12-19% flat tax) often yields higher purchasing power than a €140k gross salary in Germany or Belgium.
- **Status:** Elite standard met.

### 3. `EuropePilotTrainingCosts.tsx`
- **Risk Identified:** Failed to mention the €30k type rating cost, which is the most common reason EASA graduates fail to secure their first job.
- **Fix:** Added "The Hidden €30,000 Hurdle" section detailing self-funded vs bonded type ratings. Updated the Modular vs Integrated cost breakdown to reflect 2026 inflation (€50k-€75k vs €80k-€130k).
- **Status:** Elite standard met.

### 4. `BestFlightSchoolsEurope.tsx`
- **Risk Identified:** Subjective "best" claims without airline context. Ignored the Brexit dual-licence issue.
- **Fix:** Categorised schools into Premium Airline Academies (FTEJerez, CAE, Lufthansa EFA) and High-Value Eastern European (Bartolini Air, BAA, F-Air). Added explicit warnings about weather delays in Northern/Eastern Europe and the necessity of dual EASA/CAA approval for UK passport holders.
- **Status:** Elite standard met.

## Next Actions
- Proceed to Batch 8: UAE, South Africa, and New Zealand core guides.
