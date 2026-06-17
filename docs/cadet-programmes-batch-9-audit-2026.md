# Audit Record: Batch 9 – Airline Cadet Programmes

**Date:** June 2026
**Batch:** 9 (Airline Cadet Programmes)
**Objective:** Harden all airline cadet programme pages to the elite factual standard, ensuring strict differentiation between fully funded, self-funded, and deferred-payment models, and removing any implied guarantees of employment.

## Executive Verdict

The cadet programme guides have been systematically hardened. The primary risk across these pages was the conflation of "conditional job offer" with "guaranteed employment," and the blurring of who actually pays for the training. All pages now clearly define the financial liability (e.g. Wizz Air's deferred bond, BA's living-cost gap, Jazz Approach's $137k self-funded reality) and explicitly state that employment is conditional on passing all flight phases and final airline assessments.

## Guides Hardened

1. `EasyJetGeneration.tsx`
2. `RyanairCadet.tsx`
3. `EmiratesCadetPilotProgram.tsx`
4. `WizzAirAcademy.tsx`
5. `BASpeedbirdAcademy.tsx`
6. `TuiMPL.tsx`
7. `AirCanadaJazzCadet.tsx`
8. `QantasGroupPilotAcademy.tsx`

## Key Fixes & Risk Mitigation

- **BA Speedbird Academy:** Clarified that while tuition is funded, living costs (approx £15k+) are historically self-funded. Explicitly defined the training bond and the 1% acceptance rate.
- **Wizz Air Academy:** Clarified the "deferred payment" model. It is not free training; the cadet pays €14k upfront, Wizz Air pre-finances the rest, and the cadet repays it via salary deductions over 5 years.
- **TUI MPL:** Updated to reflect the programme's paused status for 2026. Explained the historical funding model (airline-underwritten loan) without promising its return.
- **Air Canada Jazz Approach:** Removed any implication of airline funding. Clearly stated the $137,139 CAD cost is self-funded, while detailing the CIBC/Scotiabank loan options and the conditional flow-through to mainline Air Canada.
- **Qantas Group Pilot Academy:** Clarified that Qantas does not run the school (FTA does) and does not pay for the training. Highlighted the $40,000+ "gap" between the $130k+ tuition and the VET Student Loan cap.
- **easyJet / Ryanair / Emirates:** Hardened to ensure "conditional offer" is never framed as a guaranteed job.

## Remaining Elite-Standard Follow-Ups

- **Continuous Monitoring:** Cadet programmes turn on and off rapidly. The BA, easyJet, and TUI pages must be reviewed every quarter to ensure the "live" status is accurate.
- **Finance Updates:** Loan caps (like Australian VET FEE-HELP) change annually; these figures must be audited in the next cycle.
