# UK guides content audit — batch 3 supporting guides

**Audit date:** 16 June 2026  
**Scope:** Full article-body hardening for the UK supporting guides cluster: `PilotLifestyleUK.tsx`, `PilotCvGuide.tsx`, `AirlineInterview.tsx`, `PilotAptitudeTest.tsx`, `PilotAptitudeTestPrep.tsx`, `AmITooOld.tsx`, `PilotTrainingOver40.tsx`, and `WomenInAviation.tsx`.

## Executive verdict

This batch brings the UK supporting guides up to the elite standard. The main improvements were removing guaranteed outcomes around pilot lifestyle (emphasising CAA FTLs and varying roster patterns), hardening the medical and career-length realities for older candidates (clarifying the 6-month Class 1 renewal and "Over 60 Rule"), adding precision to aptitude test descriptions (removing "pass/fail" language and replacing it with normative percentile benchmarking), and ensuring CV/interview advice reflects current UK airline ATS screening practices.

## What changed

| Guide                       | Risk found                                                        | Fix made                                                                                                                                        |
| --------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `PilotLifestyleUK.tsx`      | Lifestyle outcomes sounded guaranteed; ignored regulatory limits. | Reframed around CAA Flight Time Limitations (FTLs), added nuance to roster patterns (fixed vs random), and clarified commuting rules.           |
| `PilotCvGuide.tsx`          | CV advice was slightly generic; ignored ATS screening.            | Added specific guidance on Applicant Tracking Systems (ATS), clarified UK vs US formats (no photos), and hardened logbook discrepancy warnings. |
| `AirlineInterview.tsx`      | Simulator assessment advice was too casual.                       | Hardened raw data flying descriptions (no flight director, no autothrust) and added specific UK test providers (Cut-e, Compass).                |
| `PilotAptitudeTest.tsx`     | Described aptitude tests as pass/fail exams.                      | Reframed as normative percentile benchmarking; clarified that tests measure capacity under pressure, not aviation knowledge.                    |
| `PilotAptitudeTestPrep.tsx` | Implied preparation guarantees a pass.                            | Clarified that preparation reduces avoidable errors and interface shock, allowing true aptitude to be measured accurately.                      |
| `AmITooOld.tsx`             | Career lengths were overly optimistic; ignored medical rules.     | Added exact career runways (e.g., 23 years from age 40), clarified the "Over 60 Rule" for multi-pilot crews, and emphasised ROI.                |
| `PilotTrainingOver40.tsx`   | Medical renewal frequency was imprecise.                          | Clarified the 6-month Class 1 renewal requirement for single-pilot at 40 and multi-pilot at 60, plus cardiovascular screening needs.            |
| `WomenInAviation.tsx`       | Statistics and scholarship claims were slightly vague.            | Added exact CAA 2023 licensing statistics (301 licences) and clarified that scholarships rarely cover the full £100k integrated cost.           |

## Remaining elite-standard follow-ups

1. Add visible exact source links to each of these pages where the component supports page-specific sources.
2. Ensure the `/quiz` CTA is accurately tracking conversions from these supporting pages.
3. For the aptitude test pages, consider adding a small interactive demo of a multi-tasking exercise in a future development phase.

## Next recommended batch

Continue with Batch 4: The remaining USA cluster guides (licensing, medical, finance, and interview prep).
