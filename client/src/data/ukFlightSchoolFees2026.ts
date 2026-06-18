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
  location: string;
  country: "United Kingdom";
  routeType: "Integrated ATPL" | "Modular ATPL" | "MPL" | "PPL" | "CPL" | "Modular ATPL (part)" | "Integrated ATPL (degree)";
  estimatedFee: string;
  whatIsIncluded: string;
  whatIsExcluded: string;
  sourceUrl: string;
  lastChecked: string;
  confidenceLevel: "high" | "medium" | "low";
  caveat: string;
}

export const UK_FLIGHT_SCHOOL_FEES_2026: UKFlightSchoolFee[] = [
  {
    schoolName: "Skyborne Airline Academy",
    location: "Gloucestershire Airport, Cheltenham, UK",
    country: "United Kingdom",
    routeType: "Integrated ATPL (degree)",
    estimatedFee: "£114,950",
    whatIsIncluded: "Full integrated ATPL, BSc (Hons) degree via University of West London, all flight training, ground school, simulator hours, CAA exam fees",
    whatIsExcluded: "Accommodation, living costs, uniform, headset, iPad, medical certificate",
    sourceUrl: "https://www.skyborne.com/uk/integrated-atpl/",
    lastChecked: "June 2026",
    confidenceLevel: "high",
    caveat: "Fee confirmed on Skyborne website June 2026. Degree element makes up to £9,535/yr tuition-fee support via Student Finance England potentially available — verify eligibility before relying on this.",
  },
  {
    schoolName: "CAE Oxford Aviation Academy",
    location: "London Oxford Airport, Kidlington, UK (and international campuses)",
    country: "United Kingdom",
    routeType: "Integrated ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    whatIsIncluded: "Full integrated ATPL, all flight training, ground school, simulator hours",
    whatIsExcluded: "Accommodation, living costs, medical certificate, type rating",
    sourceUrl: "https://www.cae.com/civil-aviation/locations/cae-oxford/",
    lastChecked: "June 2026",
    confidenceLevel: "low",
    caveat: "CAE does not publish a single headline fee on its public website. Fees vary by intake, campus, and programme variant. Request a current prospectus directly from CAE Oxford via the location page.",
  },
  {
    schoolName: "Acron Aviation Academy (formerly L3Harris Airline Academy)",
    location: "London Training Centre, Crawley (near Gatwick), UK (and Orlando, USA)",
    country: "United Kingdom",
    routeType: "Integrated ATPL",
    estimatedFee: "£94,500",
    whatIsIncluded: "Full integrated ATPL (approx. 70 weeks), ground school, flight training in UK and USA, simulator hours, APS MCC",
    whatIsExcluded: "Accommodation (available separately), living costs, medical certificate, type rating",
    sourceUrl: "https://acronaviationacademy.com/uk/how-to-become-a-pilot-in-europe/pilot-training-cost-and-funding/",
    lastChecked: "June 2026",
    confidenceLevel: "high",
    caveat: "L3Harris sold its Commercial Aviation Solutions business (including the Airline Academy) to TJC in March 2025; the academy now operates as Acron Aviation Academy. The £94,500 fee is confirmed on the Acron website as of June 2026. Airline career pathways include British Airways, easyJet, and Wizz Air UK. Verify current fee and intake dates directly with Acron.",
  },
  {
    schoolName: "FTE Jerez",
    location: "Jerez de la Frontera, Spain (trains for UK CAA and EASA licences)",
    country: "United Kingdom",
    routeType: "Integrated ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    whatIsIncluded: "Full integrated ATPL (AFOP — Airline First Officer Programme), all flight training, ground school, simulator hours, accommodation on campus",
    whatIsExcluded: "Living costs beyond campus accommodation, medical certificate, type rating",
    sourceUrl: "https://www.ftejerez.com/integrated.php",
    lastChecked: "June 2026",
    confidenceLevel: "low",
    caveat: "FTE Jerez is a Spain-based school delivering training for UK CAA and EASA licences. The AFOP price sheet is available as a PDF download directly from the programme page (ftejerez.com/integrated.php → 'Download Price Sheet'). Fees are not displayed inline on the website. Request the current price sheet or contact info@ftejerez.com for the latest figures.",
  },
  {
    schoolName: "Leading Edge Aviation",
    location: "Oxford Airport, UK (ground school and advanced training) + Alhama, Spain (foundation flight training)",
    country: "United Kingdom",
    routeType: "Integrated ATPL (degree)",
    estimatedFee: "£124,000 (single licence) / £132,000 (dual licence)",
    whatIsIncluded: "Full integrated ATPL (LEAP programme), BSc in Air Transport Management, accommodation in Oxford and Alhama, return flights to fair-weather base, training materials, iPad, uniform, APS MCC, graduate employment services, training guarantee",
    whatIsExcluded: "Living costs beyond included accommodation, medical certificate, type rating",
    sourceUrl: "https://leadingedgeaviation.com/airline-pilot-training-courses/leap-integrated-pilot-training/",
    lastChecked: "June 2026",
    confidenceLevel: "high",
    caveat: "Fees confirmed on the Leading Edge LEAP programme page June 2026. Single licence (UK CAA only): £124,000 (or £104,930 with SLC tuition fee loan). Dual licence (UK CAA + EASA): £132,000 (or £112,930 with SLC). Leading Edge is a Jet2FlightPath training partner. Student Finance Company (SLC) tuition fee loans of up to £19,070 may be available for eligible first-degree students — verify eligibility with the SLC.",
  },
  {
    schoolName: "Tayside Aviation",
    location: "Dundee Airport, Scotland, UK",
    country: "United Kingdom",
    routeType: "Integrated ATPL",
    estimatedFee: "N/A — school permanently closed",
    whatIsIncluded: "N/A",
    whatIsExcluded: "N/A",
    sourceUrl: "https://www.pilotcareernews.com/tayside-aviation-ceases-operations-after-more-than-50-years/",
    lastChecked: "June 2026",
    confidenceLevel: "high",
    caveat: "Tayside Aviation ceased operations and entered receivership on 20 April 2023 after more than 50 years of operation. It is no longer accepting students. This entry is retained for reference only. Students affected by the closure were supported by Wings Alliance and BGS Aviation.",
  },
  {
    schoolName: "Bristol Groundschool",
    location: "Online / Bristol, UK (ground school only)",
    country: "United Kingdom",
    routeType: "Modular ATPL (part)",
    estimatedFee: "£3,000–£5,000 (ground school only)",
    whatIsIncluded: "ATPL ground school course and study materials",
    whatIsExcluded: "All flight training, CAA exam fees, simulator, living costs",
    sourceUrl: "https://www.bristol.gs/",
    lastChecked: "June 2026",
    confidenceLevel: "medium",
    caveat: "Ground school only — this covers the theoretical knowledge component of a modular ATPL. Flight training costs are separate and depend on the flight school chosen.",
  },
  {
    schoolName: "Oxford Aviation Academy (modular)",
    location: "London Oxford Airport, Kidlington, UK",
    country: "United Kingdom",
    routeType: "Modular ATPL",
    estimatedFee: "Not publicly confirmed — request direct quote",
    whatIsIncluded: "Modular ATPL components as selected",
    whatIsExcluded: "Accommodation, living costs, medical certificate, type rating",
    sourceUrl: "https://www.cae.com/civil-aviation/locations/cae-oxford/",
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
  high: "£135,000",
  typical: "£94,500–£132,000",
  caveat:
    "Integrated ATPL costs vary by school and intake. Publicly confirmed fees as of June 2026: Acron Aviation Academy £94,500; Skyborne £114,950; Leading Edge Aviation £124,000–£132,000. CAE Oxford and FTE Jerez do not publish headline fees — request a current prospectus. Always verify current fees directly with each school.",
  sourceUrl: "https://www.skyborne.com/uk/integrated-atpl/",
  lastChecked: "June 2026",
};
