/**
 * cadetProgrammes2026.ts
 * Verified airline cadet programme data — June 2026.
 *
 * Rules:
 * - All data sourced from official airline press releases, airline careers pages, or official training partner pages.
 * - Where status is uncertain, this is stated explicitly.
 * - Every row includes sourceUrl, lastChecked, and caveat.
 */

export type CadetProgrammeStatus =
  | "Open — applications accepted"
  | "Closed for 2026 — check for 2027"
  | "Paused — no confirmed restart date"
  | "Ongoing intake — rolling applications"
  | "Not publicly confirmed";

export type FundedOrSelfFunded =
  | "Fully funded by airline"
  | "Self-funded (trainee pays)"
  | "Deferred payment (repaid from salary)"
  | "Partially funded"
  | "Not publicly confirmed";

export interface CadetProgramme {
  airline: string;
  programmeName: string;
  country: string;
  status: CadetProgrammeStatus;
  trainingPartner: string;
  fundedOrSelfFunded: FundedOrSelfFunded;
  estimatedCost: string;
  eligibilitySummary: string;
  applicationStatus: string;
  sourceUrl: string;
  lastChecked: string;
  caveat: string;
}

export const CADET_PROGRAMMES_2026: CadetProgramme[] = [
  // ── United Kingdom ──────────────────────────────────────────────────────────
  {
    airline: "British Airways",
    programmeName: "Speedbird Pilot Academy",
    country: "United Kingdom",
    status: "Closed for 2026 — check for 2027",
    trainingPartner: "Multiple approved BA training partners (including Skyborne)",
    fundedOrSelfFunded: "Fully funded by airline",
    estimatedCost: "£0 to trainee — BA funds £100,000+ training cost",
    eligibilitySummary: "Age 17–58 (18 at start of training). 6 GCSEs grade A–C/4–9 including Maths, English Language, and a Science. Valid passport permitting unrestricted worldwide travel.",
    applicationStatus: "2026 application window was 14–23 April 2026. Now closed. Check careers.ba.com for 2027 opening.",
    sourceUrl: "https://mediacentre.britishairways.com/news/14042026/british-airwaysfully-fundedpilot-training-programme-opens-for-applications-for-fourth-year-running",
    lastChecked: "June 2026",
    caveat: "BA invested £18m for up to 160 places in 2026. Previous years received 25,000+ applications. Acceptance rate is approximately 0.6%. Successful candidates receive a conditional offer — employment is subject to completing training, obtaining licences, passing medicals, and meeting BA's standards throughout. This is not a guaranteed job.",
  },
  {
    airline: "Jet2",
    programmeName: "Jet2FlightPath",
    country: "United Kingdom",
    status: "Closed for 2026 — check for 2027",
    trainingPartner: "Skyborne Airline Academy, Leading Edge Aviation, FTE Jerez",
    fundedOrSelfFunded: "Fully funded by airline",
    estimatedCost: "£0 to trainee — Jet2 funds £100,000+ training cost",
    eligibilitySummary: "Minimum 5 GCSEs at grade 4 or above including Maths and a Science, or equivalent qualifications. Open to all backgrounds. Must be at least 17 at application and turn 18 by 1 August 2026.",
    applicationStatus: "2026 intake applications closed 6 March 2026. 18,000 applications received for 60 places. Monitor jet2careers.com for 2027 opening.",
    sourceUrl: "https://www.jet2.com/news/2026/02/Jet2_com_opens_Jet2FlightPath_programme_to_put_more_aspiring_pilots_through_fully_funded_training_",
    lastChecked: "June 2026",
    caveat: "18,000 applications were received for 60 places in the 2026 intake — an acceptance rate of approximately 0.3%. 18-month ATPL training at Skyborne, Leading Edge, or FTE Jerez. Upon completion, trainees are offered type rating training before becoming a Jet2 pilot. Employment is conditional on completing training and meeting Jet2's standards. This is not a guaranteed job.",
  },
  {
    airline: "easyJet",
    programmeName: "Generation easyJet (MPL via CAE)",
    country: "United Kingdom",
    status: "Open — applications accepted",
    trainingPartner: "CAE (Oxford and other CAE centres)",
    fundedOrSelfFunded: "Self-funded (trainee pays)",
    estimatedCost: "Not publicly confirmed — request direct quote from CAE",
    eligibilitySummary: "Minimum age 18. Minimum 5 GCSEs/equivalent including Maths and English. Valid Class 1 Medical. Right to live and work in the UK, EU, or Switzerland.",
    applicationStatus: "Applications open for UK applicants as of April 2026. Apply via careers.easyjet.com or cae.com/generation-easyjet.",
    sourceUrl: "https://www.cae.com/civil-aviation/become-a-pilot/our-pilot-training-programmes/generation-easyjet-pilot-training-programme/",
    lastChecked: "June 2026",
    caveat: "Generation easyJet is a self-funded MPL programme. Trainees pay their own training costs and receive a conditional offer of employment with easyJet on successful completion. CAE and easyJet extended their partnership for 5 years in April 2026. Training cost is not publicly listed — request a prospectus from CAE. Employment is not guaranteed.",
  },
  {
    airline: "easyJet",
    programmeName: "easyJet FlightCrew Futures (Integrated ATPL via Skyborne)",
    country: "United Kingdom",
    status: "Open — applications accepted",
    trainingPartner: "Skyborne Airline Academy",
    fundedOrSelfFunded: "Self-funded (trainee pays)",
    estimatedCost: "Not publicly confirmed — request direct quote from Skyborne",
    eligibilitySummary: "Minimum age 18. Minimum 5 GCSEs/equivalent including Maths and English. Valid Class 1 Medical. Right to live and work in the UK, EU, or Switzerland.",
    applicationStatus: "Apply via skyborne.com/uk/easyjet/ or careers.easyjet.com.",
    sourceUrl: "https://skyborne.com/uk/easyjet/",
    lastChecked: "June 2026",
    caveat: "FlightCrew Futures is a self-funded Integrated ATPL + A320 Type Rating programme delivered by Skyborne. Trainees pay their own training costs and receive a conditional offer of employment with easyJet on successful completion. Training cost is not publicly listed — request a prospectus from Skyborne. Employment is not guaranteed.",
  },
  {
    airline: "Ryanair",
    programmeName: "Ryanair Cadet Programme",
    country: "Ireland / Europe",
    status: "Ongoing intake — rolling applications",
    trainingPartner: "EPST (European Pilot Selection and Training) and approved partners",
    fundedOrSelfFunded: "Self-funded (trainee pays)",
    estimatedCost: "Not publicly confirmed — request direct quote",
    eligibilitySummary: "Minimum age 18. Valid Class 1 Medical. Right to work in the EU/EEA. Minimum education requirements apply.",
    applicationStatus: "Rolling intake. Apply via ryanair.com/en/careers/pilots/cadet.",
    sourceUrl: "https://www.ryanair.com/en/careers/pilots/cadet",
    lastChecked: "June 2026",
    caveat: "Ryanair's cadet programme is self-funded. Trainees pay training costs and receive a conditional offer of employment with Ryanair on successful completion. Ryanair also recruits type-rated pilots directly. Training costs vary by partner school and are not publicly listed.",
  },
  {
    airline: "Wizz Air",
    programmeName: "Wizz Air Pilot Academy",
    country: "Hungary / Europe",
    status: "Ongoing intake — rolling applications",
    trainingPartner: "Multiple approved training organisations",
    fundedOrSelfFunded: "Deferred payment (repaid from salary)",
    estimatedCost: "Approximately €14,000 upfront; remainder pre-financed by Wizz Air and repaid from salary over approximately 5 years",
    eligibilitySummary: "Minimum age 18. Valid Class 1 Medical. Right to work in the EU. Minimum education requirements apply.",
    applicationStatus: "Rolling intake. Apply via wizzair.com/en-gb/information/about-wizz-air/careers.",
    sourceUrl: "https://wizzair.com/en-gb/information/about-wizz-air/careers",
    lastChecked: "June 2026",
    caveat: "Wizz Air pre-finances training costs beyond the initial €14,000 deposit. The balance is repaid from the pilot's salary over approximately 5 years. This is a financial commitment — trainees should model the monthly repayment impact on take-home pay before applying. Training costs and repayment terms should be verified directly with Wizz Air as they may change.",
  },
  {
    airline: "TUI",
    programmeName: "TUI MPL Programme",
    country: "United Kingdom",
    status: "Paused — no confirmed restart date",
    trainingPartner: "Not confirmed for current cycle",
    fundedOrSelfFunded: "Partially funded",
    estimatedCost: "Not applicable — programme paused",
    eligibilitySummary: "Not applicable — programme paused",
    applicationStatus: "Paused for 2026. TUI has not confirmed a restart date. Monitor tui.co.uk/careers for updates.",
    sourceUrl: "https://www.tui.co.uk/careers",
    lastChecked: "June 2026",
    caveat: "TUI's MPL programme has been paused. Previous iterations involved trainees taking loans underwritten by TUI, not direct airline funding. Do not treat this as a fully funded programme. Verify current status directly with TUI before making any training decisions.",
  },

  // ── Canada ───────────────────────────────────────────────────────────────────
  {
    airline: "Air Canada",
    programmeName: "Air Canada Pilot Apprentice Program",
    country: "Canada",
    status: "Not publicly confirmed",
    trainingPartner: "Not publicly confirmed",
    fundedOrSelfFunded: "Not publicly confirmed",
    estimatedCost: "Not publicly confirmed",
    eligibilitySummary: "Not publicly confirmed — check aircanada.com/careers",
    applicationStatus: "Check aircanada.com/careers for current status.",
    sourceUrl: "https://www.aircanada.com/ca/en/aco/home/fly/careers.html",
    lastChecked: "June 2026",
    caveat: "Air Canada's pilot apprentice/cadet programme details are not publicly confirmed as of June 2026. Verify directly with Air Canada.",
  },
  {
    airline: "Air Canada Jazz (Chorus Aviation)",
    programmeName: "Jazz Aviation Pathway",
    country: "Canada",
    status: "Not publicly confirmed",
    trainingPartner: "Not publicly confirmed",
    fundedOrSelfFunded: "Self-funded (trainee pays)",
    estimatedCost: "Approximately CAD $137,139 (self-funded) — verify with Jazz directly",
    eligibilitySummary: "Canadian citizen or permanent resident. Valid Transport Canada medical. Minimum education requirements apply.",
    applicationStatus: "Check chorusaviation.com for current status.",
    sourceUrl: "https://www.chorusaviation.com/",
    lastChecked: "June 2026",
    caveat: "The Jazz pathway is self-funded. Trainees pay their own training costs and may receive a conditional offer of employment with Jazz Aviation on completion. The CAD $137,139 figure is an estimate — verify the current cost directly with Jazz/Chorus Aviation. CIBC and Scotiabank have historically offered pilot training loans in Canada; verify current availability.",
  },

  // ── Australia ────────────────────────────────────────────────────────────────
  {
    airline: "Qantas Group",
    programmeName: "Qantas Group Pilot Academy",
    country: "Australia",
    status: "Ongoing intake — rolling applications",
    trainingPartner: "Flight Training Adelaide (FTA), Toowoomba, Queensland",
    fundedOrSelfFunded: "Self-funded (trainee pays)",
    estimatedCost: "Approximately AUD $120,000–$140,000 — verify with FTA directly",
    eligibilitySummary: "Australian citizen or permanent resident. Valid CASA Class 1 Medical. Minimum education requirements apply.",
    applicationStatus: "Rolling intake. Apply via qantas.com/careers.",
    sourceUrl: "https://www.qantas.com/au/en/about-us/careers/pilots.html",
    lastChecked: "June 2026",
    caveat: "Qantas does not own or operate the training school — FTA delivers the programme. The VET Student Loan cap (approximately AUD $16,000) covers only a small fraction of the total cost. The gap between the loan cap and the total fee must be self-funded. Verify all costs and loan eligibility directly with FTA and the Australian Government's VET Student Loans office before committing.",
  },

  // ── UAE ──────────────────────────────────────────────────────────────────────
  {
    airline: "Emirates",
    programmeName: "Emirates Cadet Pilot Programme",
    country: "UAE",
    status: "Ongoing intake — rolling applications",
    trainingPartner: "Emirates Flight Training Academy (EFTA), Dubai",
    fundedOrSelfFunded: "Self-funded (trainee pays)",
    estimatedCost: "Not publicly confirmed — request direct quote from EFTA",
    eligibilitySummary: "Minimum age 17. Valid UAE GCAA Class 1 Medical (or equivalent). Minimum education requirements apply. Right to live and work in the UAE.",
    applicationStatus: "Rolling intake. Apply via emiratesgroupcareers.com.",
    sourceUrl: "https://www.emiratesgroupcareers.com/",
    lastChecked: "June 2026",
    caveat: "Emirates' cadet programme is self-funded through EFTA. Trainees pay their own training costs and receive a conditional offer of employment with Emirates on successful completion. Training costs are not publicly listed — request a prospectus from EFTA. Employment is conditional on completing training and meeting Emirates' standards.",
  },
];
