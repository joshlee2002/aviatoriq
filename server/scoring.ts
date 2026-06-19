/**
 * AviatorPath Lead Scoring Engine — Gen 3 (Global)
 * Overall score: 0–100
 * Hot: 85–100 | Warm: 55–84 | Cold: <55
 *
 * Sub-scores (each 0–100) power the 5-dimension score card on the results page:
 *   readiness  – commitment, urgency, timeline, actions taken
 *   finance    – budget, funding method, finance awareness
 *   medical    – Class 1 confidence, age eligibility
 *   career     – goal clarity, right to work/study, experience
 *   pathway    – route fit based on budget + goal + country
 *
 * Gen 3 changes:
 *   - Full country-aware output: correct currencies, route names, medical bodies
 *   - Country profiles for UK, US, Australia, Canada, Europe, UAE, South Africa, NZ
 *   - Budget scoring normalised across currencies
 *   - Medical next-action references correct national authority per country
 *   - recommendedRoute uses local terminology (e.g. CPL vs ATPL, Part 141 vs 142)
 */

export interface LeadInput {
  pilotGoal?: string | null;
  seriousness?: string | null;
  spokenToSchool?: string | null;
  fundingMethod?: string | null;
  budgetRange?: string | null;
  wantsFinanceInfo?: string | null;
  age?: number | null;
  class1Medical?: string | null;
  flyingExperience?: string | null;
  rightToWorkStudy?: string | null;
  phone?: string | null;
  writtenAnswer?: string | null;
  preferredRoute?: string | null;
  country?: string | null;
  startTimeframe?: string | null;
  biggestConcern?: string | null;
}

export interface ScoreResult {
  score: number;
  category: "Hot" | "Warm" | "Cold";
  breakdown: {
    intent: number;
    finance: number;
    suitability: number;
    engagement: number;
  };
  dimensions: {
    readiness: number;
    finance: number;
    medical: number;
    career: number;
    pathway: number;
  };
  labels: {
    readiness: string;
    finance: string;
    medical: string;
    career: string;
    pathway: string;
  };
  nextAction: string;
  biggestRisk: string;
  estimatedCostRange: string;
  estimatedTimeline: string;
  recommendedRoute: string;
  intentScore: number;
  countryProfile: CountryProfile;
  leadTags: string[];
  strongestAsset: string;
  fundingGap: string | null;
}

// ── Country profiles ──────────────────────────────────────────────────────────
export interface CountryProfile {
  name: string;
  regulator: string;
  regulatorFull: string;
  currency: string;
  currencySymbol: string;
  medicalAuthority: string;
  medicalExaminer: string;
  integratedRouteName: string;
  modularRouteName: string;
  pplName: string;
  cplName: string;
  atplName: string;
  costs: {
    ppl: string;
    cplModular: string;
    atplIntegrated: string;
    atplModular: string;
    fiRating: string;
  };
  fundingOptions: string[];
  pilotShortage: string;
  region:
    | "UK"
    | "US"
    | "Australia"
    | "Canada"
    | "Europe"
    | "UAE"
    | "SouthAfrica"
    | "NewZealand"
    | "Global";
}

const COUNTRY_PROFILES: Record<string, CountryProfile> = {
  // ── United Kingdom ────────────────────────────────────────────────────────
  "United Kingdom": {
    name: "United Kingdom",
    regulator: "CAA",
    regulatorFull: "Civil Aviation Authority (CAA)",
    currency: "GBP",
    currencySymbol: "£",
    medicalAuthority: "CAA",
    medicalExaminer: "CAA-approved Aeromedical Examiner (AME)",
    integratedRouteName: "Integrated ATPL",
    modularRouteName: "Modular ATPL",
    pplName: "PPL (Private Pilot Licence)",
    cplName: "CPL (Commercial Pilot Licence)",
    atplName: "ATPL (Airline Transport Pilot Licence)",
    costs: {
      ppl: "£8,000 – £15,000",
      cplModular: "£40,000 – £80,000",
      atplIntegrated: "£80,000 – £130,000",
      atplModular: "£45,000 – £90,000",
      fiRating: "£5,000 – £10,000",
    },
    fundingOptions: [
      "Career Development Loan",
      "Aviation Finance (FTA, Pilot Career Centre)",
      "Cadet sponsorship (British Airways, easyJet, Ryanair, TUI)",
      "Professional and Career Development Loan",
    ],
    pilotShortage:
      "Strong demand — UK airlines projecting significant pilot shortfall by 2030.",
    region: "UK",
  },

  // ── United States ─────────────────────────────────────────────────────────
  "United States": {
    name: "United States",
    regulator: "FAA",
    regulatorFull: "Federal Aviation Administration (FAA)",
    currency: "USD",
    currencySymbol: "$",
    medicalAuthority: "FAA",
    medicalExaminer: "FAA Aviation Medical Examiner (AME)",
    integratedRouteName: "Part 141 Accelerated Programme",
    modularRouteName: "Part 61 Self-Paced Route",
    pplName: "Private Pilot Certificate (PPL)",
    cplName: "Commercial Pilot Certificate (CPL)",
    atplName: "Airline Transport Pilot Certificate (ATP)",
    costs: {
      ppl: "$8,000 – $15,000",
      cplModular: "$40,000 – $80,000",
      atplIntegrated: "$70,000 – $120,000",
      atplModular: "$50,000 – $90,000",
      fiRating: "$5,000 – $10,000",
    },
    fundingOptions: [
      "GI Bill (veterans)",
      "Sallie Mae flight training loans",
      "ATP Finance",
      "Airline cadet programmes (United Aviate, Delta Propel, American Airlines Cadet Academy)",
      "AOPA Finance",
    ],
    pilotShortage:
      "Critical shortage — US regional airlines offering signing bonuses and accelerated ATP pathways.",
    region: "US",
  },

  // ── Australia ─────────────────────────────────────────────────────────────
  Australia: {
    name: "Australia",
    regulator: "CASA",
    regulatorFull: "Civil Aviation Safety Authority (CASA)",
    currency: "AUD",
    currencySymbol: "A$",
    medicalAuthority: "CASA",
    medicalExaminer:
      "CASA-approved Designated Aviation Medical Examiner (DAME)",
    integratedRouteName: "Part 142 Integrated CPL/ATPL",
    modularRouteName: "Part 141 Modular CPL",
    pplName: "PPL (Private Pilot Licence)",
    cplName: "CPL (Commercial Pilot Licence)",
    atplName: "ATPL (Air Transport Pilot Licence)",
    costs: {
      ppl: "A$20,000 – A$30,000",
      cplModular: "A$65,000 – A$100,000",
      atplIntegrated: "A$90,000 – A$140,000",
      atplModular: "A$70,000 – A$110,000",
      fiRating: "A$8,000 – A$15,000",
    },
    fundingOptions: [
      "VET Student Loans (up to A$150,000 for approved aviation diplomas)",
      "HECS-HELP (for aviation degrees at UNSW, Griffith, CQUniversity)",
      "Qantas Group cadet programmes",
      "Virgin Australia cadet pathway",
      "Commercial bank loans",
    ],
    pilotShortage:
      "Strong demand — Asia-Pacific region requires 248,000 new pilots by 2042 (Boeing Outlook).",
    region: "Australia",
  },

  // ── Canada ────────────────────────────────────────────────────────────────
  Canada: {
    name: "Canada",
    regulator: "Transport Canada",
    regulatorFull: "Transport Canada Civil Aviation (TCCA)",
    currency: "CAD",
    currencySymbol: "C$",
    medicalAuthority: "Transport Canada",
    medicalExaminer: "Transport Canada Civil Aviation Medical Examiner (CAME)",
    integratedRouteName: "Integrated CPL/ATPL Programme",
    modularRouteName: "Modular CPL Route",
    pplName: "PPL (Private Pilot Licence)",
    cplName: "CPL (Commercial Pilot Licence)",
    atplName: "ATPL (Airline Transport Pilot Licence)",
    costs: {
      ppl: "C$12,000 – C$20,000",
      cplModular: "C$60,000 – C$100,000",
      atplIntegrated: "C$80,000 – C$130,000",
      atplModular: "C$65,000 – C$110,000",
      fiRating: "C$8,000 – C$15,000",
    },
    fundingOptions: [
      "Canada Student Loans (NSLSC)",
      "Provincial student loan programmes",
      "Air Canada Pathways programme",
      "WestJet cadet pathway",
      "CIBC and RBC aviation loans",
    ],
    pilotShortage:
      "Significant shortage — Canadian regional carriers facing acute pilot supply constraints.",
    region: "Canada",
  },

  // ── Germany ───────────────────────────────────────────────────────────────
  Germany: {
    name: "Germany",
    regulator: "LBA",
    regulatorFull: "Luftfahrt-Bundesamt (LBA) / EASA",
    currency: "EUR",
    currencySymbol: "€",
    medicalAuthority: "LBA / EASA",
    medicalExaminer:
      "EASA-approved Aeromedical Centre (AeMC) or Aeromedical Examiner (AME)",
    integratedRouteName: "EASA Integrated ATPL",
    modularRouteName: "EASA Modular ATPL",
    pplName: "PPL(A) (Private Pilot Licence)",
    cplName: "CPL(A) (Commercial Pilot Licence)",
    atplName: "ATPL(A) (Airline Transport Pilot Licence)",
    costs: {
      ppl: "€8,000 – €15,000",
      cplModular: "€45,000 – €85,000",
      atplIntegrated: "€75,000 – €120,000",
      atplModular: "€50,000 – €90,000",
      fiRating: "€6,000 – €12,000",
    },
    fundingOptions: [
      "KfW Bildungskredit (student loans)",
      "Lufthansa Aviation Training cadet programme",
      "Eurowings cadet pathway",
      "Private bank aviation loans",
      "BAföG (for eligible students)",
    ],
    pilotShortage:
      "Strong demand — Lufthansa Group and Ryanair actively recruiting across Germany.",
    region: "Europe",
  },

  // ── Ireland ───────────────────────────────────────────────────────────────
  Ireland: {
    name: "Ireland",
    regulator: "IAA",
    regulatorFull: "Irish Aviation Authority (IAA) / EASA",
    currency: "EUR",
    currencySymbol: "€",
    medicalAuthority: "IAA / EASA",
    medicalExaminer: "EASA-approved Aeromedical Examiner (AME)",
    integratedRouteName: "EASA Integrated ATPL",
    modularRouteName: "EASA Modular ATPL",
    pplName: "PPL(A)",
    cplName: "CPL(A)",
    atplName: "ATPL(A)",
    costs: {
      ppl: "€8,000 – €14,000",
      cplModular: "€45,000 – €80,000",
      atplIntegrated: "€70,000 – €115,000",
      atplModular: "€50,000 – €85,000",
      fiRating: "€6,000 – €10,000",
    },
    fundingOptions: [
      "Student Universal Support Ireland (SUSI)",
      "Ryanair cadet programme (OATS/CAE)",
      "Aer Lingus cadet pathway",
      "Private bank loans",
      "EASA ATO financing",
    ],
    pilotShortage:
      "Strong demand — Ryanair and Aer Lingus both headquartered in Ireland with active cadet programmes.",
    region: "Europe",
  },

  // ── Netherlands ───────────────────────────────────────────────────────────
  Netherlands: {
    name: "Netherlands",
    regulator: "ILT",
    regulatorFull: "Human Environment and Transport Inspectorate (ILT) / EASA",
    currency: "EUR",
    currencySymbol: "€",
    medicalAuthority: "ILT / EASA",
    medicalExaminer: "EASA-approved Aeromedical Centre (AeMC)",
    integratedRouteName: "EASA Integrated ATPL",
    modularRouteName: "EASA Modular ATPL",
    pplName: "PPL(A)",
    cplName: "CPL(A)",
    atplName: "ATPL(A)",
    costs: {
      ppl: "€9,000 – €16,000",
      cplModular: "€50,000 – €90,000",
      atplIntegrated: "€80,000 – €125,000",
      atplModular: "€55,000 – €95,000",
      fiRating: "€7,000 – €12,000",
    },
    fundingOptions: [
      "DUO student loans",
      "KLM Flight Academy cadet programme",
      "Transavia cadet pathway",
      "Private aviation loans",
    ],
    pilotShortage: "Strong demand — KLM and Transavia actively recruiting.",
    region: "Europe",
  },

  // ── Spain ─────────────────────────────────────────────────────────────────
  Spain: {
    name: "Spain",
    regulator: "AESA",
    regulatorFull: "Agencia Estatal de Seguridad Aérea (AESA) / EASA",
    currency: "EUR",
    currencySymbol: "€",
    medicalAuthority: "AESA / EASA",
    medicalExaminer: "EASA-approved Aeromedical Examiner (AME)",
    integratedRouteName: "EASA Integrated ATPL",
    modularRouteName: "EASA Modular ATPL",
    pplName: "PPL(A)",
    cplName: "CPL(A)",
    atplName: "ATPL(A)",
    costs: {
      ppl: "€7,000 – €13,000",
      cplModular: "€40,000 – €75,000",
      atplIntegrated: "€65,000 – €110,000",
      atplModular: "€45,000 – €80,000",
      fiRating: "€5,000 – €10,000",
    },
    fundingOptions: [
      "Spanish student loans (ICO)",
      "Iberia cadet programme",
      "Vueling cadet pathway",
      "Private aviation finance",
    ],
    pilotShortage:
      "Growing demand — Spain is a major EASA training hub with year-round VFR weather.",
    region: "Europe",
  },

  // ── France ────────────────────────────────────────────────────────────────
  France: {
    name: "France",
    regulator: "DGAC",
    regulatorFull: "Direction Générale de l'Aviation Civile (DGAC) / EASA",
    currency: "EUR",
    currencySymbol: "€",
    medicalAuthority: "DGAC / EASA",
    medicalExaminer: "EASA-approved Aeromedical Centre (AeMC)",
    integratedRouteName: "EASA Integrated ATPL",
    modularRouteName: "EASA Modular ATPL",
    pplName: "PPL(A)",
    cplName: "CPL(A)",
    atplName: "ATPL(A)",
    costs: {
      ppl: "€8,000 – €15,000",
      cplModular: "€45,000 – €85,000",
      atplIntegrated: "€75,000 – €120,000",
      atplModular: "€50,000 – €90,000",
      fiRating: "€6,000 – €11,000",
    },
    fundingOptions: [
      "Prêt étudiant garanti par l'État",
      "Air France cadet programme",
      "easyJet France cadet pathway",
      "Private bank aviation loans",
    ],
    pilotShortage:
      "Strong demand — Air France and French regional carriers actively recruiting.",
    region: "Europe",
  },

  // ── United Arab Emirates ──────────────────────────────────────────────────
  "United Arab Emirates": {
    name: "United Arab Emirates",
    regulator: "GCAA",
    regulatorFull: "General Civil Aviation Authority (GCAA)",
    currency: "AED",
    currencySymbol: "AED",
    medicalAuthority: "GCAA",
    medicalExaminer: "GCAA-approved Aviation Medical Examiner (AME)",
    integratedRouteName: "Integrated CPL/ATPL Programme",
    modularRouteName: "Modular CPL Route",
    pplName: "PPL (Private Pilot Licence)",
    cplName: "CPL (Commercial Pilot Licence)",
    atplName: "ATPL (Airline Transport Pilot Licence)",
    costs: {
      ppl: "AED 45,000 – AED 70,000",
      cplModular: "AED 180,000 – AED 300,000",
      atplIntegrated: "AED 280,000 – AED 450,000",
      atplModular: "AED 200,000 – AED 350,000",
      fiRating: "AED 25,000 – AED 45,000",
    },
    fundingOptions: [
      "Emirates Aviation University financing",
      "Etihad Airways cadet programme",
      "flydubai cadet pathway",
      "Air Arabia cadet programme",
      "Private bank loans",
    ],
    pilotShortage:
      "Very strong demand — UAE airlines are among the world's fastest growing, with Emirates, Etihad, and flydubai all expanding fleets.",
    region: "UAE",
  },

  // ── South Africa ──────────────────────────────────────────────────────────
  "South Africa": {
    name: "South Africa",
    regulator: "SACAA",
    regulatorFull: "South African Civil Aviation Authority (SACAA)",
    currency: "ZAR",
    currencySymbol: "R",
    medicalAuthority: "SACAA",
    medicalExaminer:
      "SACAA-approved Designated Aviation Medical Examiner (DAME)",
    integratedRouteName: "Integrated CPL Programme",
    modularRouteName: "Modular CPL Route",
    pplName: "PPL (Private Pilot Licence)",
    cplName: "CPL (Commercial Pilot Licence)",
    atplName: "ATPL (Airline Transport Pilot Licence)",
    costs: {
      ppl: "R80,000 – R130,000",
      cplModular: "R350,000 – R600,000",
      atplIntegrated: "R500,000 – R850,000",
      atplModular: "R400,000 – R700,000",
      fiRating: "R50,000 – R90,000",
    },
    fundingOptions: [
      "NSFAS (National Student Financial Aid Scheme)",
      "South African Airways cadet programme",
      "Comair Flying College bursaries",
      "Private bank aviation loans",
      "AVBOB bursaries",
    ],
    pilotShortage:
      "Growing demand — South Africa is a regional hub for sub-Saharan African aviation.",
    region: "SouthAfrica",
  },

  // ── New Zealand ───────────────────────────────────────────────────────────
  "New Zealand": {
    name: "New Zealand",
    regulator: "CAA NZ",
    regulatorFull: "Civil Aviation Authority of New Zealand (CAA NZ)",
    currency: "NZD",
    currencySymbol: "NZ$",
    medicalAuthority: "CAA NZ",
    medicalExaminer: "CAA NZ-approved Aviation Medical Examiner (AME)",
    integratedRouteName: "Integrated CPL/ATPL Programme",
    modularRouteName: "Modular CPL Route",
    pplName: "PPL (Private Pilot Licence)",
    cplName: "CPL (Commercial Pilot Licence)",
    atplName: "ATPL (Airline Transport Pilot Licence)",
    costs: {
      ppl: "NZ$15,000 – NZ$25,000",
      cplModular: "NZ$70,000 – NZ$120,000",
      atplIntegrated: "NZ$100,000 – NZ$160,000",
      atplModular: "NZ$80,000 – NZ$130,000",
      fiRating: "NZ$10,000 – NZ$18,000",
    },
    fundingOptions: [
      "StudyLink (student loans)",
      "Air New Zealand cadet programme",
      "Jetstar cadet pathway",
      "Private bank loans",
      "Aviation Industry Association scholarships",
    ],
    pilotShortage:
      "Strong demand — Air New Zealand and Jetstar both expanding with active cadet programmes.",
    region: "NewZealand",
  },

  // ── India ─────────────────────────────────────────────────────────────────
  India: {
    name: "India",
    regulator: "DGCA",
    regulatorFull: "Directorate General of Civil Aviation (DGCA)",
    currency: "INR",
    currencySymbol: "₹",
    medicalAuthority: "DGCA",
    medicalExaminer: "DGCA-approved Aviation Medical Examiner (AME)",
    integratedRouteName: "Integrated CPL Programme",
    modularRouteName: "Modular CPL Route",
    pplName: "SPL/PPL (Student/Private Pilot Licence)",
    cplName: "CPL (Commercial Pilot Licence)",
    atplName: "ATPL (Airline Transport Pilot Licence)",
    costs: {
      ppl: "₹8,00,000 – ₹15,00,000",
      cplModular: "₹35,00,000 – ₹65,00,000",
      atplIntegrated: "₹55,00,000 – ₹90,00,000",
      atplModular: "₹40,00,000 – ₹70,00,000",
      fiRating: "₹5,00,000 – ₹10,00,000",
    },
    fundingOptions: [
      "Education loans (SBI, HDFC, Axis Bank)",
      "IndiGo cadet programme",
      "Air India cadet pathway",
      "SpiceJet cadet programme",
      "Scholarships from DGCA",
    ],
    pilotShortage:
      "Critical shortage — India is the world's fastest-growing aviation market with a massive pilot deficit.",
    region: "Global",
  },

  // ── Singapore ─────────────────────────────────────────────────────────────
  Singapore: {
    name: "Singapore",
    regulator: "CAAS",
    regulatorFull: "Civil Aviation Authority of Singapore (CAAS)",
    currency: "SGD",
    currencySymbol: "S$",
    medicalAuthority: "CAAS",
    medicalExaminer: "CAAS-approved Aviation Medical Examiner (AME)",
    integratedRouteName: "Integrated CPL/ATPL Programme",
    modularRouteName: "Modular CPL Route",
    pplName: "PPL (Private Pilot Licence)",
    cplName: "CPL (Commercial Pilot Licence)",
    atplName: "ATPL (Airline Transport Pilot Licence)",
    costs: {
      ppl: "S$20,000 – S$35,000",
      cplModular: "S$80,000 – S$140,000",
      atplIntegrated: "S$120,000 – S$180,000",
      atplModular: "S$90,000 – S$150,000",
      fiRating: "S$15,000 – S$25,000",
    },
    fundingOptions: [
      "Singapore Airlines cadet programme",
      "Scoot cadet pathway",
      "SkillsFuture funding (partial)",
      "Private bank loans",
    ],
    pilotShortage:
      "Strong demand — Singapore Airlines and regional carriers expanding post-pandemic.",
    region: "Global",
  },
};

// ── Fallback global profile ───────────────────────────────────────────────────
const GLOBAL_PROFILE: CountryProfile = {
  name: "International",
  regulator: "Local CAA",
  regulatorFull: "Your national civil aviation authority",
  currency: "USD",
  currencySymbol: "$",
  medicalAuthority: "Your national CAA",
  medicalExaminer: "CAA-approved Aviation Medical Examiner (AME)",
  integratedRouteName: "Integrated CPL/ATPL Programme",
  modularRouteName: "Modular CPL Route",
  pplName: "PPL (Private Pilot Licence)",
  cplName: "CPL (Commercial Pilot Licence)",
  atplName: "ATPL (Airline Transport Pilot Licence)",
  costs: {
    ppl: "$8,000 – $20,000",
    cplModular: "$50,000 – $100,000",
    atplIntegrated: "$80,000 – $140,000",
    atplModular: "$60,000 – $110,000",
    fiRating: "$8,000 – $15,000",
  },
  fundingOptions: [
    "Airline cadet programmes",
    "Student loans",
    "Aviation finance providers",
    "Scholarships",
  ],
  pilotShortage:
    "Global pilot shortage — Boeing forecasts 649,000 new pilots needed worldwide by 2042.",
  region: "Global",
};

// ── EU country aliases ────────────────────────────────────────────────────────
const EU_COUNTRY_ALIASES: Record<string, string> = {
  Austria: "Germany",
  Belgium: "Netherlands",
  "Czech Republic": "Germany",
  Denmark: "Netherlands",
  Finland: "Netherlands",
  Greece: "Germany",
  Hungary: "Germany",
  Italy: "Germany",
  Malta: "Germany",
  Norway: "Netherlands",
  Poland: "Germany",
  Portugal: "Spain",
  Sweden: "Netherlands",
  Switzerland: "Germany",
  Turkey: "Germany",
};

export function getCountryProfile(country?: string | null): CountryProfile {
  if (!country) return GLOBAL_PROFILE;
  const direct = COUNTRY_PROFILES[country];
  if (direct) return direct;
  const alias = EU_COUNTRY_ALIASES[country];
  if (alias) {
    const aliased = COUNTRY_PROFILES[alias];
    if (aliased) {
      // Return a copy with the actual country name
      return { ...aliased, name: country };
    }
  }
  return GLOBAL_PROFILE;
}

function clamp(v: number, max = 100): number {
  return Math.min(Math.max(v, 0), max);
}

function scoreLabel(score: number): string {
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Good";
  if (score >= 40) return "Fair";
  return "Needs attention";
}

// ── Budget scoring — normalised across currencies ─────────────────────────────
// The quiz sends budget ranges in the user's local currency format.
// We score by intent level rather than absolute amount.
function scoreBudget(budgetRange?: string | null): number {
  if (!budgetRange) return 0;
  const b = budgetRange.toLowerCase();
  // High budget signals (top tier in any currency)
  if (
    b.includes("100,000+") ||
    b.includes("100k+") ||
    b.includes("150,000+") ||
    b.includes("200,000+") ||
    b.includes("500,000+") ||
    b.includes("1,000,000+")
  )
    return 40;
  // Upper-mid budget
  if (
    b.includes("75,000") ||
    b.includes("80,000") ||
    b.includes("90,000") ||
    b.includes("50,000–£100") ||
    b.includes("50,000-£100") ||
    b.includes("50,000–$100") ||
    b.includes("50,000-$100") ||
    b.includes("50,000–a$100") ||
    b.includes("50,000–c$100") ||
    b.includes("100,000") ||
    b.includes("130,000") ||
    b.includes("140,000")
  )
    return 35;
  // Mid budget
  if (
    b.includes("25,000") ||
    b.includes("30,000") ||
    b.includes("40,000") ||
    b.includes("50,000") ||
    b.includes("60,000") ||
    b.includes("70,000")
  )
    return 20;
  // Lower budget
  if (b.includes("10,000") || b.includes("15,000") || b.includes("20,000"))
    return 10;
  // Finance-dependent
  if (b.includes("finance") || b.includes("loan") || b.includes("don't have"))
    return 5;
  return 5;
}

function isHighBudget(budgetRange?: string | null): boolean {
  if (!budgetRange) return false;
  const b = budgetRange.toLowerCase();
  return (
    b.includes("100,000+") ||
    b.includes("100k+") ||
    b.includes("150,000") ||
    b.includes("200,000") ||
    b.includes("500,000") ||
    b.includes("1,000,000")
  );
}

export function scoreLead(input: LeadInput): ScoreResult {
  const profile = getCountryProfile(input.country);

  // ── 1. READINESS ─────────────────────────────────────────────────────────
  let readinessRaw = 0;

  const highSeriousness = [
    "Every day — it's always on my mind",
    "I want to start as soon as possible",
    "I want to start within 12 months",
  ];
  const medSeriousness = ["Most weeks", "I want to start within 1-3 years"];
  if (input.seriousness && highSeriousness.includes(input.seriousness))
    readinessRaw += 40;
  else if (input.seriousness && medSeriousness.includes(input.seriousness))
    readinessRaw += 25;
  else if (input.seriousness) readinessRaw += 10;

  if (
    input.spokenToSchool === "I've applied to a flight school" ||
    input.spokenToSchool === "I have already applied somewhere"
  )
    readinessRaw += 35;
  else if (
    input.spokenToSchool ===
      "I've visited a flight school or attended an open day" ||
    input.spokenToSchool === "I have booked a visit/open day"
  )
    readinessRaw += 28;
  else if (input.spokenToSchool === "I've done a trial lesson")
    readinessRaw += 22;
  else if (
    input.spokenToSchool === "I've researched schools and training routes"
  )
    readinessRaw += 15;
  else if (input.spokenToSchool === "I've watched videos and read forums")
    readinessRaw += 8;
  else if (input.spokenToSchool === "Yes") readinessRaw += 15;

  if (input.startTimeframe === "As soon as possible — I'm ready now")
    readinessRaw += 15;
  else if (input.startTimeframe === "Within the next 12 months")
    readinessRaw += 10;
  else if (input.startTimeframe === "In the next 1–3 years") readinessRaw += 5;

  if (input.writtenAnswer && input.writtenAnswer.trim().length > 50)
    readinessRaw += 10;
  else if (input.writtenAnswer && input.writtenAnswer.trim().length > 20)
    readinessRaw += 5;

  if (input.phone && input.phone.trim().length > 5) readinessRaw += 5;

  const readiness = clamp(readinessRaw);

  // ── 2. FINANCE ───────────────────────────────────────────────────────────
  let financeRaw = 0;
  financeRaw += scoreBudget(input.budgetRange);

  const solidFunding = [
    "Self-funded from savings",
    "Self-funded",
    "Family support",
  ];
  const loanFunding = [
    "Career development loan or finance",
    "Loan/finance",
    "loan",
    "Airline cadet sponsorship",
    "Scholarship",
    "Employer/airline sponsored",
    "VET Student Loan",
    "HECS-HELP",
    "GI Bill",
    "Student loan",
  ];
  if (input.fundingMethod && solidFunding.includes(input.fundingMethod))
    financeRaw += 40;
  else if (
    input.fundingMethod &&
    loanFunding.some(l =>
      input.fundingMethod!.toLowerCase().includes(l.toLowerCase())
    )
  )
    financeRaw += 25;
  else if (input.fundingMethod) financeRaw += 10;

  if (
    input.wantsFinanceInfo === "Yes — please include this" ||
    input.wantsFinanceInfo === "Yes"
  )
    financeRaw += 15;
  else if (input.wantsFinanceInfo === "Maybe") financeRaw += 8;

  const finance = clamp(financeRaw);

  // ── 3. MEDICAL ───────────────────────────────────────────────────────────
  let medicalRaw = 0;

  if (input.class1Medical === "I already hold a Class 1 medical")
    medicalRaw += 70;
  else if (input.class1Medical === "No concerns — I'm in good health")
    medicalRaw += 55;
  else if (input.class1Medical === "Minor concerns but probably fine")
    medicalRaw += 35;
  else if (input.class1Medical === "I genuinely don't know") medicalRaw += 20;
  else if (input.class1Medical === "I have significant concerns")
    medicalRaw += 5;
  else if (input.class1Medical === "Yes") medicalRaw += 60;
  else if (input.class1Medical === "I plan to get one") medicalRaw += 40;
  else if (input.class1Medical === "I'm not sure") medicalRaw += 20;
  else if (input.class1Medical === "No") medicalRaw += 5;

  if (input.age !== null && input.age !== undefined) {
    if (input.age >= 17 && input.age <= 30) medicalRaw += 30;
    else if (input.age > 30 && input.age <= 40) medicalRaw += 20;
    else if (input.age > 40 && input.age <= 55) medicalRaw += 10;
    else if (input.age > 55) medicalRaw += 0;
    else if (input.age < 17) medicalRaw += 10;
  }

  const medical = clamp(medicalRaw);

  // ── 4. CAREER ────────────────────────────────────────────────────────────
  let careerRaw = 0;

  if (
    input.pilotGoal === "Airline pilot (commercial)" ||
    input.pilotGoal === "Airline pilot"
  )
    careerRaw += 40;
  else if (
    input.pilotGoal === "Corporate / private jet pilot" ||
    input.pilotGoal === "Corporate/private jet pilot"
  )
    careerRaw += 30;
  else if (input.pilotGoal === "Flight instructor") careerRaw += 25;
  else if (
    input.pilotGoal === "Private pilot (for fun)" ||
    input.pilotGoal === "Private Pilot Licence (PPL) only"
  )
    careerRaw += 15;
  else if (input.pilotGoal) careerRaw += 10;

  if (input.rightToWorkStudy === "Yes") careerRaw += 30;
  else if (
    input.rightToWorkStudy === "I need to check" ||
    input.rightToWorkStudy === "Unsure"
  )
    careerRaw += 10;

  if (input.flyingExperience === "I hold a commercial licence") careerRaw += 35;
  else if (input.flyingExperience === "I have 50+ hours of flight time")
    careerRaw += 30;
  else if (input.flyingExperience === "I hold a PPL or LAPL") careerRaw += 25;
  else if (input.flyingExperience === "I've done a trial lesson or two")
    careerRaw += 10;
  else if (
    input.flyingExperience === "PPL holder" ||
    input.flyingExperience === "Other licence/rating"
  )
    careerRaw += 30;
  else if (input.flyingExperience === "PPL student") careerRaw += 20;
  else if (input.flyingExperience === "Trial lesson/discovery flight")
    careerRaw += 10;

  const career = clamp(careerRaw);

  // ── 5. PATHWAY ───────────────────────────────────────────────────────────
  let pathwayRaw = 0;

  if (input.preferredRoute?.includes("Integrated")) pathwayRaw += 30;
  else if (input.preferredRoute?.includes("Modular")) pathwayRaw += 25;
  else if (input.preferredRoute?.includes("PPL")) pathwayRaw += 20;

  pathwayRaw += scoreBudget(input.budgetRange) * 0.625; // scale to max 25

  if (input.country) pathwayRaw += 15;

  const pathway = clamp(pathwayRaw);

  // ── Overall score ─────────────────────────────────────────────────────────
  const score = Math.round(
    readiness * 0.25 +
      finance * 0.25 +
      medical * 0.2 +
      career * 0.2 +
      pathway * 0.1
  );

  let category: "Hot" | "Warm" | "Cold";
  if (score >= 85) category = "Hot";
  else if (score >= 55) category = "Warm";
  else category = "Cold";

  // ── Intent Score ─────────────────────────────────────────────────────────
  let intentRaw = 0;

  if (
    input.spokenToSchool === "I've applied to a flight school" ||
    input.spokenToSchool === "I have already applied somewhere"
  )
    intentRaw += 30;
  else if (
    input.spokenToSchool ===
      "I've visited a flight school or attended an open day" ||
    input.spokenToSchool === "I have booked a visit/open day"
  )
    intentRaw += 25;
  else if (input.spokenToSchool === "I've done a trial lesson") intentRaw += 20;
  else if (input.spokenToSchool === "Yes") intentRaw += 15;

  if (
    input.seriousness === "Every day — it's always on my mind" ||
    input.seriousness === "I want to start as soon as possible"
  )
    intentRaw += 30;
  else if (
    input.seriousness === "Most weeks" ||
    input.seriousness === "I want to start within 12 months"
  )
    intentRaw += 20;
  else if (input.seriousness === "I want to start within 1-3 years")
    intentRaw += 10;

  if (input.startTimeframe === "As soon as possible — I'm ready now")
    intentRaw += 20;
  else if (input.startTimeframe === "Within the next 12 months")
    intentRaw += 15;

  if (input.phone && input.phone.trim().length > 5) intentRaw += 20;
  if (
    input.wantsFinanceInfo === "Yes — please include this" ||
    input.wantsFinanceInfo === "Yes"
  )
    intentRaw += 10;

  const intentScore = clamp(intentRaw);

  // ── Legacy breakdown ──────────────────────────────────────────────────────
  const intent = Math.round(readiness * 0.4);
  const financeLegacy = Math.round(finance * 0.3);
  const suitability = Math.round((medical + career) * 0.1);
  const engagement = Math.round(readiness * 0.1);

  // ── Country-aware recommended route ───────────────────────────────────────
  const isAirline =
    input.pilotGoal === "Airline pilot (commercial)" ||
    input.pilotGoal === "Airline pilot";
  const isPrivate =
    input.pilotGoal === "Private pilot (for fun)" ||
    input.pilotGoal === "Private Pilot Licence (PPL) only";
  const isInstructor = input.pilotGoal === "Flight instructor";

  let recommendedRoute: string;
  if (isPrivate) {
    recommendedRoute = profile.pplName;
  } else if (isInstructor) {
    recommendedRoute = `${profile.modularRouteName} + FI Rating`;
  } else if (isHighBudget(input.budgetRange) && isAirline) {
    recommendedRoute = profile.integratedRouteName;
  } else {
    recommendedRoute = profile.modularRouteName;
  }

  // ── Country-aware cost range ───────────────────────────────────────────────
  let estimatedCostRange: string;
  if (isPrivate) {
    estimatedCostRange = profile.costs.ppl;
  } else if (isInstructor) {
    estimatedCostRange = profile.costs.cplModular;
  } else if (isHighBudget(input.budgetRange) && isAirline) {
    estimatedCostRange = profile.costs.atplIntegrated;
  } else {
    estimatedCostRange = profile.costs.atplModular;
  }

  let estimatedTimeline = "3 – 5 years (modular, part-time)";
  if (recommendedRoute === profile.integratedRouteName)
    estimatedTimeline = "18 – 24 months";
  else if (isPrivate) estimatedTimeline = "6 – 18 months";

  // ── Biggest risk — self-reported barrier first (Gen 2) ────────────────────
  let biggestRisk = "Funding";
  let nextAction = "Book a free consultation with a training advisor";

  const barrier = input.biggestConcern;
  if (
    barrier === "The cost — I can't fund it" ||
    barrier === "I can't fund it"
  ) {
    biggestRisk = "Funding";
    nextAction = `Explore pilot training finance options available in ${profile.name}`;
  } else if (barrier === "I'm not sure I could actually do it") {
    biggestRisk = "Confidence";
    nextAction =
      "Book a trial lesson — most people find their confidence transforms after 30 minutes in the cockpit";
  } else if (barrier === "I'm worried about passing the medical") {
    biggestRisk = "Medical clearance";
    nextAction = `Book an initial Class 1 Medical assessment with a ${profile.medicalExaminer} — most people pass`;
  } else if (barrier === "I don't have the time right now") {
    biggestRisk = "Time commitment";
    nextAction = `Explore ${profile.modularRouteName} — you can train part-time around work and family commitments`;
  } else if (barrier === "I think I might be too old") {
    biggestRisk = "Age concerns";
    nextAction =
      "Speak to a training advisor — age limits are often misunderstood and many people start in their 40s";
  } else if (
    barrier === "I'd be risking too much (career, income, stability)"
  ) {
    biggestRisk = "Career risk";
    nextAction = `Explore ${profile.modularRouteName} — you can keep your current income while training part-time`;
  } else if (barrier === "I have too many unanswered questions") {
    biggestRisk = "Information overload";
    nextAction =
      "Request introductions to matched schools — they can answer your specific questions directly";
  } else if (barrier === "Nothing — I'm ready to start") {
    biggestRisk = "Finding the right school";
    nextAction =
      "Request introductions to matched flight schools — you're ready to start";
  } else {
    // Fallback: derive from scoring dimensions
    if (medical < 40) {
      biggestRisk = "Medical clearance";
      nextAction = `Book a Class 1 Medical assessment with a ${profile.medicalExaminer}`;
    } else if (finance < 40) {
      biggestRisk = "Funding";
      nextAction = `Explore pilot training finance options available in ${profile.name}`;
    } else if (readiness >= 70 && finance >= 60) {
      biggestRisk = "Finding the right school";
      nextAction = "Request introductions to matched flight schools";
    } else if (career < 40) {
      biggestRisk = "Goal clarity";
      nextAction = "Book a free consultation to explore your options";
    }
  }

  // ── Lead Tags ────────────────────────────────────────────────────────────
  const leadTags: string[] = [];
  // school-ready: high readiness + medical not at risk + has right to work
  if (readiness >= 65 && medical >= 50 && input.rightToWorkStudy === "Yes")
    leadTags.push("school-ready");
  // finance-ready: has budget or has finance info / self-funded
  if (
    finance >= 60 ||
    input.fundingMethod === "Self-funded / savings" ||
    input.fundingMethod === "Family support" ||
    isHighBudget(input.budgetRange)
  )
    leadTags.push("finance-ready");
  // medical-risk: explicit concern or low medical score
  if (
    medical < 35 ||
    input.class1Medical === "I have significant concerns" ||
    input.class1Medical === "No" ||
    input.biggestConcern === "I'm worried about passing the medical"
  )
    leadTags.push("medical-risk");
  // cadet-suitable: airline goal + high budget or open to abroad + young enough
  if (
    isAirline &&
    isHighBudget(input.budgetRange) &&
    (input.age === null || input.age === undefined || input.age <= 36)
  )
    leadTags.push("cadet-suitable");
  // hot/warm/cold mirrors category
  leadTags.push(category.toLowerCase() as "hot" | "warm" | "cold");

  // ── Strongest Asset ───────────────────────────────────────────────────────
  let strongestAsset = "Motivation to become a pilot";
  const dimensionScores: Array<[string, number]> = [
    ["readiness", readiness],
    ["finance", finance],
    ["medical", medical],
    ["career", career],
    ["pathway", pathway],
  ];
  const [topDimension] = dimensionScores.sort((a, b) => b[1] - a[1])[0];
  if (topDimension === "readiness") strongestAsset = "Strong commitment and readiness to start";
  else if (topDimension === "finance") strongestAsset = "Solid financial position for training";
  else if (topDimension === "medical") strongestAsset = "Good medical fitness";
  else if (topDimension === "career") strongestAsset = "Clear career goal and direction";
  else if (topDimension === "pathway") strongestAsset = "Well-matched training pathway";

  // ── Funding Gap ───────────────────────────────────────────────────────────
  // Derive a funding gap string if budget is below estimated cost
  let fundingGap: string | null = null;
  const budgetMap: Record<string, number> = {
    "Under £20,000": 20000, "£20,000 – £40,000": 40000,
    "£40,000 – £60,000": 60000, "£60,000 – £80,000": 80000,
    "£80,000 – £100,000": 100000, "£100,000+": 120000,
    "Under $20,000": 20000, "$20,000 – $50,000": 50000,
    "$50,000 – $80,000": 80000, "$80,000 – $120,000": 120000, "$120,000+": 140000,
    "Under A$30,000": 30000, "A$30,000 – A$70,000": 70000,
    "A$70,000 – A$120,000": 120000, "A$120,000+": 140000,
    "Under €20,000": 20000, "€20,000 – €50,000": 50000,
    "€50,000 – €80,000": 80000, "€80,000 – €120,000": 120000, "€120,000+": 140000,
  };
  const costLow = parseInt(
    (estimatedCostRange.match(/[\d,]+/) || ["0"])[0].replace(/,/g, ""),
    10
  );
  const userBudget = input.budgetRange ? (budgetMap[input.budgetRange] ?? null) : null;
  if (userBudget !== null && costLow > 0 && userBudget < costLow) {
    const gap = costLow - userBudget;
    const sym = profile.currencySymbol;
    fundingGap = `${sym}${gap.toLocaleString("en-GB")} estimated gap — finance options available`;
  }

  return {
    score,
    category,
    intentScore,
    breakdown: {
      intent: clamp(intent, 40),
      finance: clamp(financeLegacy, 30),
      suitability: clamp(suitability, 20),
      engagement: clamp(engagement, 10),
    },
    dimensions: { readiness, finance, medical, career, pathway },
    labels: {
      readiness: scoreLabel(readiness),
      finance: scoreLabel(finance),
      medical: scoreLabel(medical),
      career: scoreLabel(career),
      pathway: scoreLabel(pathway),
    },
    nextAction,
    biggestRisk,
    estimatedCostRange,
    estimatedTimeline,
    recommendedRoute,
    countryProfile: profile,
    leadTags,
    strongestAsset,
    fundingGap,
  };
}
