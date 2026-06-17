# UK First 10 Guide Body Audit — June 16, 2026

## Scope

This pass reviewed the full article body for the first 10 UK guide pages in the UK `/guides/...` cluster, excluding non-UK country routes and the legacy redirect:

1. `HowToBecomePilot.tsx`
2. `PilotTrainingCosts.tsx`
3. `IntegratedVsModular.tsx`
4. `Class1Medical.tsx`
5. `AdhdPilotGuide.tsx`
6. `IntegratedVsModularCost.tsx`
7. `AirlinePilotSalary.tsx`
8. `BestRouteToAirline.tsx`
9. `TrainingTimeline.tsx`
10. `AmITooOld.tsx`

## Sources checked for this pass

- UK CAA commercial pilot licence guidance: https://www.caa.co.uk/commercial-industry/pilot-licences/aeroplanes/commercial-pilot-licence-for-aeroplanes-guidance/
- UK CAA Class 1 medical certificate guidance: https://www.caa.co.uk/commercial-industry/pilot-licences/medical/apply-for-a-class-1-medical-certificate/
- UK CAA initial Class 1 medical examination: https://www.caa.co.uk/commercial-industry/pilot-licences/medical/initial-class-1-medical-examination/
- UK CAA ATPL aeroplanes guidance: https://www.caa.co.uk/commercial-industry/pilot-licences/aeroplanes/airline-transport-pilot-licence-for-aeroplanes/
- UK CAA professional pilot exam registration/fees: https://www.caa.co.uk/commercial-industry/pilot-licences/examinations/register-for-a-professional-pilot-exam/
- BALPA financing your training: https://www.balpa.org/becoming-a-pilot/financing-your-training/

## What was corrected

### `HowToBecomePilot.tsx`

- Replaced old/over-specific Boeing 2023 shortage wording with a more cautious demand statement.
- Replaced broad upgrade-time claims with airline-specific caveats.
- Corrected the initial Class 1 medical pathway from routine AME wording to AeMC wording.
- Updated initial Class 1 medical budget language to a more realistic 2026 range.
- Changed “guaranteed job” language to “conditional pathway” language for cadet programmes.

### `PilotTrainingCosts.tsx`

- Softened overseas-training claims so the guide no longer implies any lower-cost overseas route is automatically UK CAA-valid without verification.
- Corrected Class 1 renewal wording so it does not wrongly imply every pilot renews every six months after age 40.
- Reframed type-rating cost language so readers are warned not to self-fund speculatively.

### `IntegratedVsModular.tsx`

- Corrected the major ATPL exam fee error: UK CAA professional pilot exams are listed at £97 per exam in 2026, not £1,261 per paper.
- Reframed MPL/cadet funding language because not every airline-linked MPL/cadet route is fully funded.
- Added stronger caveats around overseas/EASA routes and conversion implications.

### `Class1Medical.tsx`

- Softened claims around school-specific Class 1 timing requirements.
- Reframed combined UK CAA/EASA medical wording so it does not overstate universal AeMC availability or pricing.

### `AdhdPilotGuide.tsx`

- No immediate code edit made in this pass. The page is still high-risk medical content and should get a specialist UK CAA/AeMC wording review before being called elite.

### `IntegratedVsModularCost.tsx`

- Replaced hard “guaranteed job” phrasing with conditional-pathway wording.

### `AirlinePilotSalary.tsx`

- Replaced overly precise or universal salary/upgrade claims with caveated wording about airline contract, base, fleet, seniority, allowances and tax position.

### `BestRouteToAirline.tsx`

- Updated outdated “2025” wording to 2026.
- Replaced guaranteed-employment wording with conditional pathway wording.
- Removed the outdated “14 ATPL theoretical exams” phrasing and replaced it with more accurate UK route wording.

### `TrainingTimeline.tsx`

- Fixed a wording error in the timeline explanation.

### `AmITooOld.tsx`

- Corrected Class 1 validity wording for airline-style multi-pilot privileges.
- Updated initial Class 1 medical cost expectations.
- Replaced overconfident pilot-shortage wording with more balanced hiring-cycle language.
- Reframed age 65 as a practical airline multi-pilot limit rather than an oversimplified universal rule.

## Current verdict on the first 10

| Guide                         | Status after this pass                                         |
| ----------------------------- | -------------------------------------------------------------- |
| `HowToBecomePilot.tsx`        | Improved; needs future live school/cadet status verification.  |
| `PilotTrainingCosts.tsx`      | Improved; needs future live school-price table verification.   |
| `IntegratedVsModular.tsx`     | Significantly improved; major exam-fee error corrected.        |
| `Class1Medical.tsx`           | Improved; still needs specialist medical reviewer/AeMC review. |
| `AdhdPilotGuide.tsx`          | Needs specialist medical review before “elite” status.         |
| `IntegratedVsModularCost.tsx` | Improved; still needs live price checks.                       |
| `AirlinePilotSalary.tsx`      | Improved; still needs dated pay sources/contracts.             |
| `BestRouteToAirline.tsx`      | Improved; needs stronger decision matrix and source links.     |
| `TrainingTimeline.tsx`        | Good structurally; should later add sourced timeline tables.   |
| `AmITooOld.tsx`               | Improved; medical/retirement wording now more cautious.        |

## Next 10 recommendation

Do the next 10 in the same way: full-body read, source check, edit risky claims directly, then add a per-page verdict. The next batch should start with the finance, cadet and high-volatility pages because those create the biggest credibility risk.

## Elite-level hardening pass — 16 June 2026

After the first publishability pass, the first ten guides received an additional hardening pass for “bare minimum no errors” quality. The highest-risk remaining patterns were removed or softened: guaranteed-job language, overconfident pilot-shortage conclusions, simplistic ROI claims, rigid medical language and unsourced ADHD generalisations. The pages are stronger for publication, but medical pages still require specialist reviewer sign-off before being described as clinically authoritative.
