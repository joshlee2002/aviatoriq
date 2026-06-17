/**
 * pilotSalarySources2026.ts
 * Verified pilot salary data — June 2026.
 *
 * Rules:
 * - All data sourced from official bodies (BALPA), official airline careers pages, or credible industry surveys.
 * - Salary figures are ranges, not guarantees. Actual pay depends on airline, seniority, fleet, roster, and allowances.
 * - Every row includes sourceUrl, lastChecked, and caveat.
 */

export interface PilotSalarySource {
  country: string;
  airlineOrSource: string;
  role: string;
  salaryRange: string;
  currency: string;
  sourceType: "Official body" | "Official airline" | "Industry survey" | "Press report";
  sourceUrl: string;
  lastChecked: string;
  caveat: string;
}

export const PILOT_SALARY_SOURCES_2026: PilotSalarySource[] = [
  // ── United Kingdom ──────────────────────────────────────────────────────────
  {
    country: "United Kingdom",
    airlineOrSource: "BALPA (British Airline Pilots' Association)",
    role: "Flying Instructor",
    salaryRange: "£13,200/yr basic + £15–£25/hr flying",
    currency: "GBP",
    sourceType: "Official body",
    sourceUrl: "https://www.balpa.org/becoming-a-pilot/salary-and-benefits/",
    lastChecked: "June 2026",
    caveat: "BALPA figures represent typical starting rates. Actual pay varies by school, location, and contract type. Some instructors are self-employed.",
  },
  {
    country: "United Kingdom",
    airlineOrSource: "BALPA (British Airline Pilots' Association)",
    role: "Turboprop First Officer / Small Business Jet",
    salaryRange: "£17,000–£35,000/yr",
    currency: "GBP",
    sourceType: "Official body",
    sourceUrl: "https://www.balpa.org/becoming-a-pilot/salary-and-benefits/",
    lastChecked: "June 2026",
    caveat: "BALPA figures represent typical basic pay without allowances. Actual total remuneration depends on duty pay, sector pay, and allowances.",
  },
  {
    country: "United Kingdom",
    airlineOrSource: "BALPA (British Airline Pilots' Association)",
    role: "Short-haul A320/B737 First Officer",
    salaryRange: "£35,000–£60,000/yr",
    currency: "GBP",
    sourceType: "Official body",
    sourceUrl: "https://www.balpa.org/becoming-a-pilot/salary-and-benefits/",
    lastChecked: "June 2026",
    caveat: "BALPA figures represent typical basic pay without allowances. Actual total remuneration depends on duty pay, sector pay, and allowances. Figures reflect the current market; BALPA notes that 'the big salaries associated with being a pilot are fast disappearing'.",
  },
  {
    country: "United Kingdom",
    airlineOrSource: "BALPA (British Airline Pilots' Association)",
    role: "Long-haul A330/B787 First Officer",
    salaryRange: "£55,000+/yr",
    currency: "GBP",
    sourceType: "Official body",
    sourceUrl: "https://www.balpa.org/becoming-a-pilot/salary-and-benefits/",
    lastChecked: "June 2026",
    caveat: "BALPA figures represent typical basic pay without allowances. Long-haul positions are rarely available to new graduates. Command is typically based on seniority.",
  },
  {
    country: "United Kingdom",
    airlineOrSource: "British Airways (reported by Simple Flying / Airmappr)",
    role: "First Officer (all fleets)",
    salaryRange: "£40,000–£125,000/yr",
    currency: "GBP",
    sourceType: "Press report",
    sourceUrl: "https://simpleflying.com/uk-airline-pilot-salaries/",
    lastChecked: "June 2026",
    caveat: "Wide range reflects junior Speedbird Academy graduates (year 1–5 on special scale, approx £40k–£85k) through to senior long-haul FOs. BA pilots narrowly rejected a pay overhaul in April 2026 — existing 2026 pay agreement remains in place. Verify current scales via BALPA or BA careers.",
  },
  {
    country: "United Kingdom",
    airlineOrSource: "British Airways (reported by Simple Flying / Airmappr)",
    role: "Captain (all fleets)",
    salaryRange: "£100,000–£225,000+/yr",
    currency: "GBP",
    sourceType: "Press report",
    sourceUrl: "https://simpleflying.com/uk-airline-pilot-salaries/",
    lastChecked: "June 2026",
    caveat: "Upper end reflects long-haul widebody captains with significant seniority. Not representative of a new command. BA pay negotiations ongoing as of June 2026.",
  },
  {
    country: "United Kingdom",
    airlineOrSource: "Contract pilots (industry average)",
    role: "Contract / Zero-hours pilot",
    salaryRange: "£20–£100/hr flying",
    currency: "GBP",
    sourceType: "Official body",
    sourceUrl: "https://www.balpa.org/becoming-a-pilot/salary-and-benefits/",
    lastChecked: "June 2026",
    caveat: "Contract rates vary widely. No sick pay, no holiday pay, no guaranteed hours. BALPA warns that earnings may be good during peak times but are not guaranteed during quieter periods.",
  },

  // ── United States ────────────────────────────────────────────────────────────
  {
    country: "United States",
    airlineOrSource: "ATP Flight School / FAA data",
    role: "Regional First Officer (entry level)",
    salaryRange: "$85,000–$100,000+/yr",
    currency: "USD",
    sourceType: "Industry survey",
    sourceUrl: "https://atpflightschool.com/become-a-pilot/airline-career/commercial-pilot-salary.html",
    lastChecked: "June 2026",
    caveat: "Regional airline starting pay has increased significantly since 2022. Figures include base pay and per diem. Actual pay depends on airline, domicile, and contract. Verify current scales via ALPA or airline careers pages.",
  },
  {
    country: "United States",
    airlineOrSource: "Major US airlines (Delta, United, American — reported)",
    role: "Major airline Captain (senior)",
    salaryRange: "$300,000–$450,000+/yr",
    currency: "USD",
    sourceType: "Press report",
    sourceUrl: "https://atpflightschool.com/become-a-pilot/airline-career/commercial-pilot-salary.html",
    lastChecked: "June 2026",
    caveat: "Upper end reflects senior widebody captains at major carriers under current collective bargaining agreements. Not representative of a new entrant. Verify via ALPA.",
  },

  // ── Canada ───────────────────────────────────────────────────────────────────
  {
    country: "Canada",
    airlineOrSource: "ALPA Canada / industry reports",
    role: "Regional First Officer (entry level)",
    salaryRange: "CAD $60,000–$90,000/yr",
    currency: "CAD",
    sourceType: "Industry survey",
    sourceUrl: "https://www.alpa.org/",
    lastChecked: "June 2026",
    caveat: "Regional airline pay in Canada improved significantly following 2024 ALPA contract wins at Air Canada and WestJet. Figures are indicative. Verify current scales via ALPA Canada or airline careers pages.",
  },
  {
    country: "Canada",
    airlineOrSource: "Air Canada / WestJet (post-2024 ALPA agreements)",
    role: "Captain (major carrier, senior)",
    salaryRange: "CAD $200,000–$350,000+/yr",
    currency: "CAD",
    sourceType: "Industry survey",
    sourceUrl: "https://www.alpa.org/",
    lastChecked: "June 2026",
    caveat: "Reflects post-2024 ALPA contract improvements. Upper end reflects senior widebody captains. Not representative of a new entrant.",
  },

  // ── Australia ────────────────────────────────────────────────────────────────
  {
    country: "Australia",
    airlineOrSource: "AFAP (Australian Federation of Air Pilots) / industry reports",
    role: "Regional First Officer (entry level)",
    salaryRange: "AUD $70,000–$100,000/yr",
    currency: "AUD",
    sourceType: "Industry survey",
    sourceUrl: "https://www.afap.org.au/",
    lastChecked: "June 2026",
    caveat: "Figures are indicative. Actual pay depends on airline, aircraft type, and roster. Verify via AFAP or airline careers pages.",
  },
  {
    country: "Australia",
    airlineOrSource: "Qantas / Virgin Australia (major carriers)",
    role: "Captain (major carrier, senior)",
    salaryRange: "AUD $200,000–$350,000+/yr",
    currency: "AUD",
    sourceType: "Industry survey",
    sourceUrl: "https://www.afap.org.au/",
    lastChecked: "June 2026",
    caveat: "Upper end reflects senior widebody captains. Not representative of a new entrant.",
  },

  // ── UAE ──────────────────────────────────────────────────────────────────────
  {
    country: "UAE",
    airlineOrSource: "Emirates / Etihad (industry reports)",
    role: "First Officer (major Gulf carrier)",
    salaryRange: "USD $5,000–$10,000/month (tax-free)",
    currency: "USD",
    sourceType: "Industry survey",
    sourceUrl: "https://www.emiratesgroupcareers.com/",
    lastChecked: "June 2026",
    caveat: "UAE salaries are typically quoted as tax-free monthly figures. Packages often include housing allowance, travel benefits, and schooling allowance. Figures are indicative — verify directly with Emirates or Etihad careers.",
  },
];
