# Batch 5: Canada Core Guides Audit (2026)

## Scope

- `HowToBecomePilotCanada.tsx`
- `CanadaPilotTrainingCosts.tsx`
- `CanadaPilotSalary2026.tsx`
- `CanadaFlightSchoolLoans.tsx`

## Executive Verdict

This batch addressed the core commercial intent pages for the Canadian cluster. The original drafts contained significant risks regarding student loan eligibility, outdated pre-2024 salary data, and unrealistic minimum-hour cost estimates. All four have been hardened to the elite 2026 standard, focusing strictly on Transport Canada (TC) realities, the necessity of cosigners for private lines of credit, and the massive 2024 ALPA contract wins at Air Canada and WestJet.

## Page-by-Page Fixes

### 1. HowToBecomePilotCanada.tsx

- **Risk:** Read as a generic global guide, missing the unique Canadian hour-building reality (bush flying, instructing) and Transport Canada medical nuances.
- **Fix:** Rewritten to explicitly separate the Transport Canada Category 1 Medical from the PPL/CPL/MIFR progression. Added explicit details on the 1,500-hour ATPL requirement and the reality of northern/bush flying or instructing to bridge the gap.

### 2. CanadaPilotTrainingCosts.tsx

- **Risk:** Quoted minimum legal hours (45 for PPL) as realistic budgets, setting false expectations.
- **Fix:** Restructured the pricing tables to show "Advertised Minimums" vs "Realistic Average" (e.g., 70 hours for PPL). Added a dedicated section on hidden costs unique to Canada, such as winter weather delays and fuel surcharges.

### 3. CanadaPilotSalary2026.tsx

- **Risk:** Contained outdated pre-strike salary data, failing to reflect the historic 2024 ALPA contract wins at Air Canada and WestJet.
- **Fix:** Completely overhauled the salary tables to reflect the 2024/2025 contract rates, showing the abolition of Air Canada's "flat pay" system. Added clear distinctions between regional (Jazz, Encore) and mainline pay scales.

### 4. CanadaFlightSchoolLoans.tsx

- **Risk:** Implied that federal/provincial student aid (OSAP, etc.) could easily cover private flight school costs.
- **Fix:** Rewritten to explicitly explain the "Designated Institution" rule. Clarified that while public aviation colleges qualify for full student aid, private vocational schools do not, leading to a massive funding gap that requires a private bank Line of Credit and a creditworthy cosigner.

## Testing

- Build passes cleanly.
- No malformed JSX.
- All routes verified.
