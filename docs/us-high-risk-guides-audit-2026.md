# US high-risk guide audit — FAA medical, ATP, finance and salary batch

**Audit date:** 16 June 2026  
**Scope:** Continued the full-plan work into the first USA high-risk batch: `FaaMedicalGuide.tsx`, `FaaMedicalClass1.tsx`, `FaaMedicalClass2.tsx`, `FaaMedicalClass3.tsx`, `FaaAtpRequirements.tsx`, `AtpCertificateUSA.tsx`, `Part61Vs141.tsx`, `UsFlightSchoolLoans.tsx`, `UsPilotRetirementAge.tsx`, and `PilotSalaryUSA.tsx`.

## Source basis

This pass prioritised FAA/government sources and regulator-first wording:

- FAA medical certification and MedXPress guidance.
- FAA Guide for Aviation Medical Examiners, CACI and Special Issuance guidance.
- FAA Part 141 pilot school guidance and FAA pilot school information.
- FAA/14 CFR ATP and R-ATP requirements, including §61.159 and related guidance.
- FAA age-65 public FAQ for Part 121 airline pilots.

## What changed

| Guide                      | Risk found                                                                                        | Fix made                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `FaaMedicalGuide.tsx`      | Medical timing, ADHD and SSRI language sounded too deterministic.                                 | Reframed FAA medical outcomes as AME/FAA case-specific and removed fixed processing assumptions.      |
| `FaaMedicalClass1.tsx`     | First Class duration and disqualifier language could read as automatic or self-diagnostic.        | Reframed lower-class privilege duration, Part 67 conditions and BasicMed limits with FAA/AME caveats. |
| `FaaMedicalClass2.tsx`     | Class 2 guide overclaimed “current data” and did not emphasise FAA case-by-case decisions enough. | Added case-specific AME/FAA wording and softened Part 67 interpretation.                              |
| `FaaMedicalClass3.tsx`     | Third Class page used “exact” and “real cost” language and underplayed BasicMed context.          | Reframed as cost ranges to verify and added BasicMed/FAA-review caveats.                              |
| `FaaAtpRequirements.tsx`   | ATP guide used hype language and overconfident demand/simulator-credit claims.                    | Rewrote title/meta and softened ATP demand, simulator credit and ATP CTP wording.                     |
| `AtpCertificateUSA.tsx`    | R-ATP-to-full-ATP and international recognition wording sounded automatic.                        | Clarified full ATP is not automatic and foreign privileges require validation/conversion.             |
| `Part61Vs141.tsx`          | Cadet-programme and financing statements were too broad.                                          | Reframed Part 141 as often required/preferred, and made airline pathway/interview claims conditional. |
| `UsFlightSchoolLoans.tsx`  | Loan and federal-aid wording could imply broader availability than reality.                       | Added Title IV/school eligibility caveats and softened cost/hour assumptions.                         |
| `UsPilotRetirementAge.tsx` | Retirement-age language needed clearer Part 121 scope.                                            | Clarified age 65 applies to Part 121 airline pilot service, not all flying.                           |
| `PilotSalaryUSA.tsx`       | Salary, upgrade and ROI claims were too fixed.                                                    | Reframed pay and upgrade timelines as contract-, seniority-, base- and cycle-dependent.               |

## Remaining follow-ups

1. Add page-specific source arrays for FAA medical, ATP, Part 141 and age-65 pages instead of relying only on fallback sources.
2. Recheck FAA medical pages with an AME or aviation-medical reviewer before describing them as medically authoritative.
3. Recheck airline salary/pay examples against current CBAs or airline recruiting pages every 3–6 months.
4. Add original assets later: FAA medical decision tree, ATP/R-ATP checklist, loan-risk calculator and Part 61/141 school comparison table.
