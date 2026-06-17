/**
 * ukFlightSchoolFees2026.ts
 * Verified UK flight school fee data — June 2026.
 *
 * Rules:
 * - All fees sourced from publicly published school websites or press releases.
 * - Where exact fees are not publicly confirmed, the field states "Not publicly confirmed — request direct quote".
 * - confidenceLevel: "high" = fee confirmed on school website; "medium" = from press/third-party; "low" = estimate only.
 * - Every row includes sourceUrl, lastChecked, and caveat.
 */

export interface UKFlightSchoolFee {
  schoolName: string;
  country: "United Kingdom";
  trainingType: "Integrated ATPL" | "Modular ATPL" | "MPL" | "PPL" | "CPL" | "Modular ATPL (part)" | "Integrated ATPL (degree)";
  estimatedFee: string;
  feeIncludes: string;
  feeExcludes: string;
  sourceUrl: string;
  lastChecked: string;
  confidenceLevel: "high" | "medium" | "low";
  caveat: string;
}

export const UK_FLIGHT_SCHOOL_FEES_2026: UKFlightSchoolFee[] = [
  {
    schoolName: "Skyborne Airline Academy",
    country: "United Kingdom",
    trainingType: "Integrated ATPL (degree)",
    estimatedFee: "£114,950",
    feeIncludes: "Full integrated ATPL, BSc (Hons) degree via University of West London, all flight training, ground school, simulator hours, CAA exam fees",
    feeExcludes: "Accommodation, living costs, uniform, headset, iPad, medical certificate",
    sourceUrl: "https://www.skyborne.com/uk/integrated-atpl/",
    lastChecked: "June 2026",
    confidenceLevel: "high",
    caveat: "Fee confirmed on Skyborne website June 2026. Degree element makes up to £40,000+ in Student Loans Company tuition-fee support potentially available — verify eligibility with Student Finance England before relying on this.",
  },
  {
    schoolName: "CAE Oxford Aviation Academy",
    country: "United Kingdom",
    trainingType: "Integrated ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    feeIncludes: "Full integrated ATPL, all flight training, ground school, simulator hours",
    feeExcludes: "Accommodation, living costs, medical certificate, type rating",
    sourceUrl: "https://www.cae.com/civil-aviation/become-a-pilot/",
    lastChecked: "June 2026",
    confidenceLevel: "low",
    caveat: "CAE does not publish a single headline fee on its public website. Fees vary by intake, campus, and programme variant. Request a current prospectus directly from CAE Oxford.",
  },
  {
    schoolName: "L3Harris Airline Academy (Bournemouth)",
    country: "United Kingdom",
    trainingType: "Integrated ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    feeIncludes: "Full integrated ATPL, all flight training, ground school, simulator hours",
    feeExcludes: "Accommodation, living costs, medical certificate, type rating",
    sourceUrl: "https://l3airlineacademy.com/",
    lastChecked: "June 2026",
    confidenceLevel: "low",
    caveat: "L3Harris does not publish a current headline fee publicly. Fees vary by intake and programme. Request a current prospectus directly from L3Harris.",
  },
  {
    schoolName: "FTA Global (Jerez, Spain — EASA/UK)",
    country: "United Kingdom",
    trainingType: "Integrated ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    feeIncludes: "Full integrated ATPL, all flight training, ground school, simulator hours",
    feeExcludes: "Accommodation, living costs, medical certificate, type rating",
    sourceUrl: "https://www.ftejerez.com/",
    lastChecked: "June 2026",
    confidenceLevel: "low",
    caveat: "FTA Jerez is a Spain-based school delivering training for UK and EASA licences. Fees vary by programme and are not publicly listed. Request a prospectus directly.",
  },
  {
    schoolName: "Leading Edge Aviation",
    country: "United Kingdom",
    trainingType: "Integrated ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    feeIncludes: "Full integrated ATPL, all flight training, ground school, simulator hours",
    feeExcludes: "Accommodation, living costs, medical certificate, type rating",
    sourceUrl: "https://www.leadingedgeaviation.co.uk/",
    lastChecked: "June 2026",
    confidenceLevel: "low",
    caveat: "Leading Edge is a Jet2FlightPath training partner. Fees for self-funded integrated ATPL are not publicly listed. Request a prospectus directly.",
  },
  {
    schoolName: "Tayside Aviation",
    country: "United Kingdom",
    trainingType: "Integrated ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    feeIncludes: "Full integrated ATPL, all flight training, ground school, simulator hours",
    feeExcludes: "Accommodation, living costs, medical certificate, type rating",
    sourceUrl: "https://www.taysideaviation.co.uk/",
    lastChecked: "June 2026",
    confidenceLevel: "low",
    caveat: "Tayside does not publish a current headline fee publicly. Request a prospectus directly.",
  },
  {
    schoolName: "Bristol Groundschool (modular ground school only)",
    country: "United Kingdom",
    trainingType: "Modular ATPL (part)",
    estimatedFee: "£3,000–£5,000 (ground school only)",
    feeIncludes: "ATPL ground school course and study materials",
    feeExcludes: "All flight training, exams, simulator, living costs",
    sourceUrl: "https://www.bristol.gs/",
    lastChecked: "June 2026",
    confidenceLevel: "medium",
    caveat: "Ground school only — this covers the theoretical knowledge component of a modular ATPL. Flight training costs are separate and depend on the flight school chosen.",
  },
  {
    schoolName: "Oxford Aviation Academy (modular)",
    country: "United Kingdom",
    trainingType: "Modular ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    feeIncludes: "Modular ATPL components as selected",
    feeExcludes: "Accommodation, living costs, medical certificate, type rating",
    sourceUrl: "https://www.cae.com/civil-aviation/become-a-pilot/",
    lastChecked: "June 2026",
    confidenceLevel: "low",
    caveat: "Modular ATPL costs vary significantly depending on which modules are taken, the aircraft types used, and the pace of training. No single public fee is available.",
  },
];

/**
 * Typical modular ATPL cost range for UK — for use in guides.
 * Source: BALPA, CAA, and school prospectuses reviewed June 2026.
 * This is a range estimate, not a guaranteed price.
 */
export const UK_MODULAR_ATPL_COST_RANGE = {
  low: "£50,000",
  high: "£80,000",
  typical: "£60,000–£70,000",
  caveat:
    "Modular ATPL costs vary widely depending on school, aircraft type, pace of training, and whether hour-building is done in the UK or abroad. These figures are indicative only. Always request a detailed breakdown from each school before committing.",
  sourceUrl: "https://www.balpa.org/becoming-a-pilot/",
  lastChecked: "June 2026",
};

/**
 * Typical integrated ATPL cost range for UK — for use in guides.
 */
export const UK_INTEGRATED_ATPL_COST_RANGE = {
  low: "£90,000",
  high: "£130,000",
  typical: "£100,000–£120,000",
  caveat:
    "Integrated ATPL costs vary by school and intake. Skyborne's publicly confirmed fee is £114,950 (June 2026). Other schools do not publish headline fees. Always request a current prospectus.",
  sourceUrl: "https://www.skyborne.com/uk/integrated-atpl/",
  lastChecked: "June 2026",
};
