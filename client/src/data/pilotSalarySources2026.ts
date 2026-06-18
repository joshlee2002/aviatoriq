/**
 * pilotSalarySources2026.ts
 * Verified pilot salary data — June 2026.
 *
 * Rules:
 * - All data sourced from official bodies (BALPA, ALPA), official airline careers pages, or credible industry surveys.
 * - Salary figures are ranges, not guarantees. Actual pay depends on airline, seniority, fleet, roster, and allowances.
 * - payBasis: how the figure is expressed (annual, monthly, hourly, tax-free monthly).
 * - Every row includes sourceUrl, lastChecked, and caveat.
 *
 * US airline-specific rows (sourceType "CBA / ALPA-reported"):
 * - Hourly rates derived from current collective bargaining agreements as reported by ALPA and publicly
 *   available CBA summaries. Annual figures assume 900 guaranteed credit hours/year (industry standard
 *   for base-pay calculations at US major carriers). Actual earnings depend on credit hours, overrides,
 *   per diem, profit sharing, and 401(k) contributions, which are excluded from these base figures.
 * - Sources: ALPA Pay & Benefits page (alpa.org), airmappr.com US pilot salary guide (citing ALPA/APA/SWAPA
 *   CBA rates, updated May–June 2026), and BLS Occupational Outlook Handbook.
 */

export interface PilotSalarySource {
  country: string;
  airlineOrSource: string;
  role: string;
  salaryRange: string;
  currency: string;
  payBasis: "Annual (basic)" | "Annual (total remuneration)" | "Monthly (tax-free)" | "Hourly (flying pay)" | "Annual (estimated)" | "Annual (CBA base, 900 hrs)";
  sourceType: "Official body" | "Official airline" | "Industry survey" | "Press report" | "CBA / ALPA-reported";
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
    payBasis: "Annual (basic)",
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
    payBasis: "Annual (basic)",
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
    payBasis: "Annual (basic)",
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
    payBasis: "Annual (basic)",
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
    payBasis: "Annual (estimated)",
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
    payBasis: "Annual (estimated)",
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
    payBasis: "Hourly (flying pay)",
    sourceType: "Official body",
    sourceUrl: "https://www.balpa.org/becoming-a-pilot/salary-and-benefits/",
    lastChecked: "June 2026",
    caveat: "Contract rates vary widely. No sick pay, no holiday pay, no guaranteed hours. BALPA warns that earnings may be good during peak times but are not guaranteed during quieter periods.",
  },

  // ── United States — aggregate / BLS ─────────────────────────────────────────
  {
    country: "United States",
    airlineOrSource: "US Bureau of Labor Statistics (BLS)",
    role: "Airline pilots, copilots, and flight engineers (all) — median",
    salaryRange: "$226,600/yr (median, May 2024)",
    currency: "USD",
    payBasis: "Annual (basic)",
    sourceType: "Official body",
    sourceUrl: "https://www.bls.gov/ooh/transportation-and-material-moving/airline-and-commercial-pilots.htm",
    lastChecked: "June 2026",
    caveat: "BLS median wage covers all airline pilots across all carriers and seniority levels. It is not representative of a new entrant or a specific airline. The median is heavily influenced by senior major-airline captains. Source: BLS Occupational Outlook Handbook, data from May 2024 survey.",
  },
  {
    country: "United States",
    airlineOrSource: "ALPA (Air Line Pilots Association) — regional carriers",
    role: "Regional First Officer — Year 1 (entry level)",
    salaryRange: "$85,000–$100,000+/yr",
    currency: "USD",
    payBasis: "Annual (total remuneration)",
    sourceType: "Official body",
    sourceUrl: "https://www.alpa.org/advancing-aviation/future-of-the-profession/become-a-pilot/career-outlook/pay-and-benefits",
    lastChecked: "June 2026",
    caveat: "ALPA publishes first-year FO salary estimates and bonuses for regional carriers. Figures include base pay and per diem. Regional starting pay increased significantly following 2022–2024 contract cycles. Actual pay depends on airline, domicile, and contract. Verify current scales via ALPA or airline careers pages. Data current as of July 2025 per ALPA.",
  },

  // ── United States — airline-specific (CBA / ALPA-reported) ──────────────────
  // Source methodology: Annual figures derived from current CBA hourly rates ×
  // 900 guaranteed credit hours/year (standard base-pay calculation at US majors).
  // Hourly rates sourced from ALPA Pay & Benefits page and airmappr.com US pilot
  // salary guide (citing ALPA, APA, and SWAPA CBA data, updated May–June 2026).
  // Base pay only — excludes per diem, profit sharing, and 401(k) contributions.
  {
    country: "United States",
    airlineOrSource: "Delta Air Lines (ALPA CBA)",
    role: "First Officer — Year 1",
    salaryRange: "$106,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Base pay at 900 guaranteed credit hours/year per current ALPA CBA. Excludes per diem (~$8,000–$15,000/yr), profit sharing (historically 9–15% of eligible earnings at Delta), and 18% employer 401(k) contribution. Verify current hourly rates via ALPA or Delta careers. Contract amendable date and negotiation status may affect future rates.",
  },
  {
    country: "United States",
    airlineOrSource: "Delta Air Lines (ALPA CBA)",
    role: "First Officer — Senior (widebody)",
    salaryRange: "$188,000–$222,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Senior FO range reflects mid-to-top seniority on narrowbody and widebody fleets. Base pay only at 900 hrs/year. Actual earnings depend on fleet, base, credit hours, and override pay. Verify via ALPA.",
  },
  {
    country: "United States",
    airlineOrSource: "Delta Air Lines (ALPA CBA)",
    role: "Captain — all fleets",
    salaryRange: "$313,000–$410,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Range reflects Year 1 Captain ($313K) through top-of-scale widebody Captain ($410K) at 900 hrs/year. Base pay only. Delta's widebody top-of-scale rate is approximately $455/hr per current ALPA contract. Not representative of a new entrant — command is based on seniority. Verify via ALPA or Delta careers.",
  },
  {
    country: "United States",
    airlineOrSource: "United Airlines (ALPA / UPA CBA)",
    role: "First Officer — Year 1",
    salaryRange: "$113,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Base pay at 900 guaranteed credit hours/year per United Pilot Agreement (UPA). Excludes per diem, profit sharing, and 18% employer 401(k) contribution. United Aviate pathway provides a structured route from regional airlines. Verify current rates via ALPA or United careers.",
  },
  {
    country: "United States",
    airlineOrSource: "United Airlines (ALPA / UPA CBA)",
    role: "Captain — all fleets",
    salaryRange: "$320,000–$419,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Range reflects Year 1 Captain through top-of-scale widebody Captain. United's widebody top-of-scale rate is approximately $466/hr per current UPA — the highest published rate among the Big Three as of June 2026. Base pay only. Not representative of a new entrant. Verify via ALPA.",
  },
  {
    country: "United States",
    airlineOrSource: "American Airlines (APA CBA)",
    role: "First Officer — Year 1",
    salaryRange: "$108,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Base pay at 900 guaranteed credit hours/year per Allied Pilots Association (APA) CBA. Excludes per diem, profit sharing, and 18% employer 401(k) contribution (from 2026). DFW and DAL bases in Texas have no state income tax — a significant take-home advantage. Verify current rates via APA (alliedpilots.org) or American careers.",
  },
  {
    country: "United States",
    airlineOrSource: "American Airlines (APA CBA)",
    role: "Captain — all fleets",
    salaryRange: "$288,000–$410,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Range reflects Year 1 Captain through top-of-scale widebody Captain at 900 hrs/year. Base pay only. Not representative of a new entrant. Verify via APA (alliedpilots.org) or American careers.",
  },
  {
    country: "United States",
    airlineOrSource: "Southwest Airlines (SWAPA CBA)",
    role: "First Officer — Year 1",
    salaryRange: "$105,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Base pay at 900 Trip-For-Pay (TFP) units/year per Southwest Airlines Pilots' Association (SWAPA) CBA. Southwest uses a TFP system rather than hourly rates; the annual figure is an equivalent comparison. Excludes profit sharing and 20% employer 401(k) contribution (the highest fixed percentage among US majors). SWAPA contract runs through 2028. Verify via SWAPA (swapa.org) or Southwest careers.",
  },
  {
    country: "United States",
    airlineOrSource: "Southwest Airlines (SWAPA CBA)",
    role: "Captain — all fleets (B737 only)",
    salaryRange: "$262,000–$286,000/yr (base)",
    currency: "USD",
    payBasis: "Annual (CBA base, 900 hrs)",
    sourceType: "CBA / ALPA-reported",
    sourceUrl: "https://airmappr.com/articles/career/pilot-salary-usa",
    lastChecked: "June 2026",
    caveat: "Southwest operates a single fleet type (B737), so there is no widebody premium. Range reflects Year 1 Captain through top-of-scale. Base pay only — Southwest's 20% employer 401(k) and profit sharing add substantially to total compensation. Verify via SWAPA (swapa.org).",
  },
  {
    country: "United States",
    airlineOrSource: "Major US airlines (Delta, United, American — reported)",
    role: "Major airline Captain (senior, widebody) — aggregate",
    salaryRange: "$300,000–$450,000+/yr",
    currency: "USD",
    payBasis: "Annual (total remuneration)",
    sourceType: "Press report",
    sourceUrl: "https://atpflightschool.com/become-a-pilot/airline-career/commercial-pilot-salary.html",
    lastChecked: "June 2026",
    caveat: "Upper end reflects senior widebody captains at major carriers under current collective bargaining agreements, including per diem and profit sharing. Not representative of a new entrant. Verify via ALPA.",
  },

  // ── Canada ───────────────────────────────────────────────────────────────────
  {
    country: "Canada",
    airlineOrSource: "ALPA Canada / industry reports",
    role: "Regional First Officer (entry level)",
    salaryRange: "CAD $60,000–$90,000/yr",
    currency: "CAD",
    payBasis: "Annual (basic)",
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
    payBasis: "Annual (estimated)",
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
    payBasis: "Annual (basic)",
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
    payBasis: "Annual (estimated)",
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
    payBasis: "Monthly (tax-free)",
    sourceType: "Industry survey",
    sourceUrl: "https://www.emiratesgroupcareers.com/",
    lastChecked: "June 2026",
    caveat: "UAE salaries are typically quoted as tax-free monthly figures. Packages often include housing allowance, travel benefits, and schooling allowance. Figures are indicative — verify directly with Emirates or Etihad careers.",
  },
];
