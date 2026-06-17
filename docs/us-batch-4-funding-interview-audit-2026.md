# Batch 4: US Funding, Interview & Hour Building Audit (2026)

## Scope

- `HourBuildingUSA.tsx`
- `AirlineInterviewUSA.tsx`
- `FundPilotTrainingUSA.tsx`

## Executive Verdict

This batch addressed three highly commercial and frequently searched US topics. The original drafts contained significant risks regarding tax advice, guaranteed loan rates, military testing (TBAS) conflated with civilian airline hiring, and deterministic ROI language. All three have been hardened to the elite 2026 standard, focusing strictly on civilian Part 121/141 realities, explicit GI Bill limitations, and TMAAT/CRM behavioral interviewing over military aptitude testing.

## Page-by-Page Fixes

### 1. HourBuildingUSA.tsx

- **Risk:** Contained broad, unqualified tax advice regarding flight training deductions.
- **Fix:** Rewritten to clarify that initial training (PPL/IR/CPL) qualifying you for a _new_ profession is generally not deductible, while maintaining existing CFI certificates _may_ be. Added explicit "consult a tax professional" caveats.
- **Risk:** Read as a generic survey with placeholder metadata.
- **Fix:** Structured into a clear US CFI pathway vs. Part 135/Survey pathway. Added explicit FAA Part 61/141 and Part 121 ATP requirements. Replaced placeholder `readTime` and `relatedGuides`.

### 2. AirlineInterviewUSA.tsx

- **Risk:** The guide heavily emphasized the TBAS (Test of Basic Aviation Skills), which is a military/Air Force test, framing it as the primary aptitude test for major civilian US airlines.
- **Fix:** Completely removed the TBAS section. Rewritten to focus accurately on the civilian cognitive/personality assessments (e.g., Hogan, SJTs) and the heavy emphasis on TMAAT (Tell Me About A Time) behavioral questions and CRM (Crew Resource Management).
- **Risk:** Cited unverified 87.6% pass rates from specific prep companies and guaranteed sign-on bonuses.
- **Fix:** Removed all unverified prep company statistics and guaranteed salary figures, aligning with the "no invented certainty" non-negotiable.

### 3. FundPilotTrainingUSA.tsx

- **Risk:** Stated the Post-9/11 GI Bill could cover full flight training costs without adequately explaining the vocational (Part 141) annual cap vs. the university degree-program differences.
- **Fix:** Restructured the GI Bill section to explicitly separate vocational flight schools (which hit an annual cap quickly) from degree-granting Title IV university programs (which can cover 100% of in-state tuition).
- **Risk:** Included specific, outdated Sallie Mae/AOPA APR percentages and fixed repayment examples.
- **Fix:** Removed fixed APRs. Focused on the structural differences between the loans (deferred repayment vs. lines of credit) and the reality that most young students require a cosigner.

## Testing

- Build passes cleanly.
- No malformed JSX.
- All routes verified.
