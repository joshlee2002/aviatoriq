/**
 * trainingFinanceProviders2026.ts
 * Verified pilot training finance provider data — June 2026.
 *
 * Rules:
 * - All data sourced from official provider websites or FCA register.
 * - APR figures are representative examples only — actual rates are personalised.
 * - confidenceLevel: "high" = APR/terms confirmed on provider website; "medium" = from press/third-party; "low" = estimate or not publicly confirmed.
 * - Every row includes sourceUrl, lastChecked, and caveat.
 * - This data is for information only and does not constitute financial advice.
 */

export type ProductType =
  | "Specialist pilot training loan"
  | "Student loan (government-backed)"
  | "Personal loan"
  | "Career development loan"
  | "Aviation-specific loan";

export interface TrainingFinanceProvider {
  providerName: string;
  country: string;
  productType: ProductType;
  minAmount: string;
  maxAmount: string;
  representativeApr: string;
  eligibilityNotes: string;
  confidenceLevel: "high" | "medium" | "low";
  sourceUrl: string;
  lastChecked: string;
  caveat: string;
}

export const TRAINING_FINANCE_PROVIDERS_2026: TrainingFinanceProvider[] = [
  // ── United Kingdom ──────────────────────────────────────────────────────────
  {
    providerName: "Lendwise",
    country: "United Kingdom",
    productType: "Career development loan",
    minAmount: "£5,000",
    maxAmount: "£150,000",
    representativeApr: "13.96% representative APR",
    eligibilityNotes: "Assessed on future earnings potential, not just credit score. Available for full-time and part-time programmes. Grace period available for full-time study. No early repayment charge. FCA authorised (firm no. 782496).",
    confidenceLevel: "high",
    sourceUrl: "https://lendwise.com/borrow/education-funding/career-development/",
    lastChecked: "June 2026",
    caveat: "Representative example (confirmed on Lendwise website June 2026): Borrow £50,000 over 120 months at 12.50% fixed rate. Loan origination fee £1,500 (added to loan). Total amount repayable £95,824.19. Monthly repayment £798.53. Representative APR 13.96%. Your actual rate will be personalised and may differ. Lendwise is not covered by the Financial Services Compensation Scheme. This is not financial advice — compare multiple providers before committing.",
  },
  {
    providerName: "Student Loans Company (SLC) — via Skyborne/UWL degree route",
    country: "United Kingdom",
    productType: "Student loan (government-backed)",
    minAmount: "Up to £9,535/yr tuition fee loan",
    maxAmount: "Up to £9,535/yr tuition fee loan + maintenance loan (income-assessed)",
    representativeApr: "RPI + 0% to RPI + 3% (income-contingent repayment)",
    eligibilityNotes: "Only available where the flight school is a registered higher education provider and the programme is a recognised degree. Currently applicable to Skyborne's BSc (Hons) route via University of West London. Not available for standalone ATPL programmes at non-degree schools.",
    confidenceLevel: "high",
    sourceUrl: "https://www.gov.uk/student-finance",
    lastChecked: "June 2026",
    caveat: "Student loan eligibility depends on the specific school and programme. Not all flight schools qualify. Repayments only begin when earnings exceed the repayment threshold (£25,000/yr as of 2026). Verify eligibility with Student Finance England before relying on this route.",
  },
  {
    providerName: "CloudFunder",
    country: "United Kingdom",
    productType: "Specialist pilot training loan",
    minAmount: "Not publicly confirmed",
    maxAmount: "Not publicly confirmed",
    representativeApr: "Not publicly confirmed — varies by lender",
    eligibilityNotes: "CloudFunder is a comparison platform for UK pilot training finance, not a direct lender. Connects trainees with specialist lenders including unsecured options and government-backed routes.",
    confidenceLevel: "low",
    sourceUrl: "https://www.cloudfunder.co.uk/",
    lastChecked: "June 2026",
    caveat: "CloudFunder aggregates lender options. Actual rates and terms depend on the individual lender. Always compare the full cost of borrowing, not just the monthly payment.",
  },
  {
    providerName: "High street banks (Barclays, HSBC, NatWest, Lloyds)",
    country: "United Kingdom",
    productType: "Personal loan",
    minAmount: "Typically £1,000",
    maxAmount: "Typically £25,000–£50,000 (varies by lender)",
    representativeApr: "Varies — typically 6%–15% APR for personal loans",
    eligibilityNotes: "Standard personal loans. Not aviation-specific. Credit score and income assessed. Amounts may be insufficient to cover full ATPL costs alone.",
    confidenceLevel: "medium",
    sourceUrl: "https://www.fca.org.uk/consumers/borrowing-money",
    lastChecked: "June 2026",
    caveat: "High street personal loans are rarely sufficient to cover the full cost of ATPL training (£60,000–£130,000). They may be useful to bridge a funding gap alongside other sources. Always compare the total cost of borrowing.",
  },

  // ── Canada ───────────────────────────────────────────────────────────────────
  {
    providerName: "CIBC (Canadian Imperial Bank of Commerce)",
    country: "Canada",
    productType: "Aviation-specific loan",
    minAmount: "Not publicly confirmed",
    maxAmount: "Not publicly confirmed",
    representativeApr: "Not publicly confirmed — contact CIBC directly",
    eligibilityNotes: "CIBC has historically offered pilot training loans in Canada. Eligibility, amounts, and rates are not publicly listed. Contact CIBC directly for current product availability.",
    confidenceLevel: "low",
    sourceUrl: "https://www.cibc.com/en/personal-banking/loans-and-lines-of-credit.html",
    lastChecked: "June 2026",
    caveat: "CIBC's pilot training loan product availability and terms are not publicly confirmed as of June 2026. Verify directly with CIBC before making any financial decisions.",
  },
  {
    providerName: "Scotiabank",
    country: "Canada",
    productType: "Aviation-specific loan",
    minAmount: "Not publicly confirmed",
    maxAmount: "Not publicly confirmed",
    representativeApr: "Not publicly confirmed — contact Scotiabank directly",
    eligibilityNotes: "Scotiabank has historically offered pilot training loans in Canada. Eligibility, amounts, and rates are not publicly listed. Contact Scotiabank directly for current product availability.",
    confidenceLevel: "low",
    sourceUrl: "https://www.scotiabank.com/ca/en/personal/loans.html",
    lastChecked: "June 2026",
    caveat: "Scotiabank's pilot training loan product availability and terms are not publicly confirmed as of June 2026. Verify directly with Scotiabank before making any financial decisions.",
  },
  {
    providerName: "OSAP (Ontario Student Assistance Program)",
    country: "Canada",
    productType: "Student loan (government-backed)",
    minAmount: "Income-assessed",
    maxAmount: "Income-assessed",
    representativeApr: "0% interest (as of 2023 Ontario reform)",
    eligibilityNotes: "Only available for programmes at Designated Institutions under the Ontario Student Assistance Program. Most private flight schools are NOT designated. Verify whether your chosen school qualifies before relying on OSAP.",
    confidenceLevel: "high",
    sourceUrl: "https://www.ontario.ca/page/osap-ontario-student-assistance-program",
    lastChecked: "June 2026",
    caveat: "The Designated Institution requirement is a critical eligibility gate. Most private flight schools in Canada do not qualify. Do not assume OSAP is available without verifying your school's designation status.",
  },

  // ── Australia ────────────────────────────────────────────────────────────────
  {
    providerName: "VET Student Loans (Australian Government)",
    country: "Australia",
    productType: "Student loan (government-backed)",
    minAmount: "Not applicable — covers approved courses up to the cap",
    maxAmount: "Approximately AUD $16,000 (2026 cap for aviation courses — verify at studyassist.gov.au)",
    representativeApr: "CPI-indexed (income-contingent repayment)",
    eligibilityNotes: "Only available for approved VET courses at approved providers. The loan cap for aviation courses is significantly lower than total ATPL training costs. The gap must be self-funded.",
    confidenceLevel: "medium",
    sourceUrl: "https://www.studyassist.gov.au/help-loans/vet-student-loans",
    lastChecked: "June 2026",
    caveat: "The VET Student Loan cap covers only a fraction of total ATPL training costs in Australia (estimated AUD $120,000–$140,000 at FTA for the Qantas pathway). The gap between the loan cap and the total fee must be self-funded or financed separately. Verify the current cap and your provider's approval status at studyassist.gov.au.",
  },
];

/**
 * General finance disclaimer — use in all finance-related guide sections.
 */
export const FINANCE_DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute financial advice. Loan rates, eligibility criteria, and product availability change regularly. Always compare multiple providers, read the full terms and conditions, and consider seeking independent financial advice before taking on debt to fund pilot training.";
