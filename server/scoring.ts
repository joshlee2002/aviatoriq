/**
 * AviatorIQ Lead Scoring Engine — Gen 2
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
 * Gen 2 changes:
 *   - biggestConcern now drives biggestRisk and nextAction outputs
 *   - spokenToSchool updated to match new Gen 2 commitment question values
 *   - seriousness updated to match new "how often do you think about it" values
 *   - class1Medical updated to match new confidence-based values
 *   - flyingExperience updated to match new experience values
 *   - biggestRisk is now derived from the user's self-reported barrier first
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

export function scoreLead(input: LeadInput): ScoreResult {

  // ── 1. READINESS ─────────────────────────────────────────────────────────
  let readinessRaw = 0;

  const highSeriousness = ["Every day — it's always on my mind", "I want to start as soon as possible", "I want to start within 12 months"];
  const medSeriousness = ["Most weeks", "I want to start within 1-3 years"];
  if (input.seriousness && highSeriousness.includes(input.seriousness)) readinessRaw += 40;
  else if (input.seriousness && medSeriousness.includes(input.seriousness)) readinessRaw += 25;
  else if (input.seriousness) readinessRaw += 10;

  if (input.spokenToSchool === "I've applied to a flight school" || input.spokenToSchool === "I have already applied somewhere") readinessRaw += 35;
  else if (input.spokenToSchool === "I've visited a flight school or attended an open day" || input.spokenToSchool === "I have booked a visit/open day") readinessRaw += 28;
  else if (input.spokenToSchool === "I've done a trial lesson") readinessRaw += 22;
  else if (input.spokenToSchool === "I've researched schools and training routes") readinessRaw += 15;
  else if (input.spokenToSchool === "I've watched videos and read forums") readinessRaw += 8;
  else if (input.spokenToSchool === "Yes") readinessRaw += 15;

  if (input.startTimeframe === "As soon as possible — I'm ready now") readinessRaw += 15;
  else if (input.startTimeframe === "Within the next 12 months") readinessRaw += 10;
  else if (input.startTimeframe === "In the next 1–3 years") readinessRaw += 5;

  if (input.writtenAnswer && input.writtenAnswer.trim().length > 50) readinessRaw += 10;
  else if (input.writtenAnswer && input.writtenAnswer.trim().length > 20) readinessRaw += 5;

  if (input.phone && input.phone.trim().length > 5) readinessRaw += 5;

  const readiness = clamp(readinessRaw);

  // ── 2. FINANCE ───────────────────────────────────────────────────────────
  let financeRaw = 0;

  if (input.budgetRange === "£100,000+") financeRaw += 40;
  else if (input.budgetRange === "£50,000–£100,000" || input.budgetRange === "£50,000-£100,000") financeRaw += 35;
  else if (input.budgetRange === "£25,000–£50,000" || input.budgetRange === "£25,000-£50,000") financeRaw += 20;
  else if (input.budgetRange === "£10,000–£25,000" || input.budgetRange === "£10,000-£25,000") financeRaw += 10;
  else if (input.budgetRange === "I need finance — I don't have savings") financeRaw += 5;

  const solidFunding = ["Self-funded from savings", "Self-funded", "Family support"];
  const loanFunding = ["Career development loan or finance", "Loan/finance", "Airline cadet sponsorship", "Scholarship", "Employer/airline sponsored"];
  if (input.fundingMethod && solidFunding.includes(input.fundingMethod)) financeRaw += 40;
  else if (input.fundingMethod && loanFunding.includes(input.fundingMethod)) financeRaw += 25;
  else if (input.fundingMethod) financeRaw += 10;

  if (input.wantsFinanceInfo === "Yes — please include this" || input.wantsFinanceInfo === "Yes") financeRaw += 15;
  else if (input.wantsFinanceInfo === "Maybe") financeRaw += 8;

  const finance = clamp(financeRaw);

  // ── 3. MEDICAL ───────────────────────────────────────────────────────────
  let medicalRaw = 0;

  if (input.class1Medical === "I already hold a Class 1 medical") medicalRaw += 70;
  else if (input.class1Medical === "No concerns — I'm in good health") medicalRaw += 55;
  else if (input.class1Medical === "Minor concerns but probably fine") medicalRaw += 35;
  else if (input.class1Medical === "I genuinely don't know") medicalRaw += 20;
  else if (input.class1Medical === "I have significant concerns") medicalRaw += 5;
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

  if (input.pilotGoal === "Airline pilot (commercial)" || input.pilotGoal === "Airline pilot") careerRaw += 40;
  else if (input.pilotGoal === "Corporate / private jet pilot" || input.pilotGoal === "Corporate/private jet pilot") careerRaw += 30;
  else if (input.pilotGoal === "Flight instructor") careerRaw += 25;
  else if (input.pilotGoal === "Private pilot (for fun)" || input.pilotGoal === "Private Pilot Licence (PPL) only") careerRaw += 15;
  else if (input.pilotGoal) careerRaw += 10;

  if (input.rightToWorkStudy === "Yes") careerRaw += 30;
  else if (input.rightToWorkStudy === "I need to check" || input.rightToWorkStudy === "Unsure") careerRaw += 10;

  if (input.flyingExperience === "I hold a commercial licence") careerRaw += 35;
  else if (input.flyingExperience === "I have 50+ hours of flight time") careerRaw += 30;
  else if (input.flyingExperience === "I hold a PPL or LAPL") careerRaw += 25;
  else if (input.flyingExperience === "I've done a trial lesson or two") careerRaw += 10;
  else if (input.flyingExperience === "PPL holder" || input.flyingExperience === "Other licence/rating") careerRaw += 30;
  else if (input.flyingExperience === "PPL student") careerRaw += 20;
  else if (input.flyingExperience === "Trial lesson/discovery flight") careerRaw += 10;

  const career = clamp(careerRaw);

  // ── 5. PATHWAY ───────────────────────────────────────────────────────────
  let pathwayRaw = 0;

  if (input.preferredRoute?.includes("Integrated ATPL")) pathwayRaw += 30;
  else if (input.preferredRoute?.includes("Modular ATPL")) pathwayRaw += 25;
  else if (input.preferredRoute?.includes("PPL")) pathwayRaw += 20;

  if (input.budgetRange === "£100,000+") pathwayRaw += 25;
  else if (input.budgetRange === "£50,000–£100,000" || input.budgetRange === "£50,000-£100,000") pathwayRaw += 20;
  else if (input.budgetRange) pathwayRaw += 15;

  if (input.country) pathwayRaw += 15;

  const pathway = clamp(pathwayRaw);

  // ── Overall score ─────────────────────────────────────────────────────────
  const score = Math.round(
    readiness * 0.25 +
    finance * 0.25 +
    medical * 0.20 +
    career * 0.20 +
    pathway * 0.10
  );

  let category: "Hot" | "Warm" | "Cold";
  if (score >= 85) category = "Hot";
  else if (score >= 55) category = "Warm";
  else category = "Cold";

  // ── Intent Score ─────────────────────────────────────────────────────────
  let intentRaw = 0;

  if (input.spokenToSchool === "I've applied to a flight school" || input.spokenToSchool === "I have already applied somewhere") intentRaw += 30;
  else if (input.spokenToSchool === "I've visited a flight school or attended an open day" || input.spokenToSchool === "I have booked a visit/open day") intentRaw += 25;
  else if (input.spokenToSchool === "I've done a trial lesson") intentRaw += 20;
  else if (input.spokenToSchool === "Yes") intentRaw += 15;

  if (input.seriousness === "Every day — it's always on my mind" || input.seriousness === "I want to start as soon as possible") intentRaw += 30;
  else if (input.seriousness === "Most weeks" || input.seriousness === "I want to start within 12 months") intentRaw += 20;
  else if (input.seriousness === "I want to start within 1-3 years") intentRaw += 10;

  if (input.startTimeframe === "As soon as possible — I'm ready now") intentRaw += 20;
  else if (input.startTimeframe === "Within the next 12 months") intentRaw += 15;

  if (input.phone && input.phone.trim().length > 5) intentRaw += 20;
  if (input.wantsFinanceInfo === "Yes — please include this" || input.wantsFinanceInfo === "Yes") intentRaw += 10;

  const intentScore = clamp(intentRaw);

  // ── Legacy breakdown ──────────────────────────────────────────────────────
  const intent = Math.round(readiness * 0.4);
  const financeLegacy = Math.round(finance * 0.3);
  const suitability = Math.round((medical + career) * 0.1);
  const engagement = Math.round(readiness * 0.1);

  // ── Derived recommendations ───────────────────────────────────────────────
  let recommendedRoute = "Modular ATPL";
  if (input.budgetRange === "£100,000+" && (input.pilotGoal === "Airline pilot (commercial)" || input.pilotGoal === "Airline pilot")) {
    recommendedRoute = "Integrated ATPL";
  } else if (input.pilotGoal === "Private pilot (for fun)" || input.pilotGoal === "Private Pilot Licence (PPL) only") {
    recommendedRoute = "PPL Only";
  } else if (input.pilotGoal === "Flight instructor") {
    recommendedRoute = "Modular ATPL + FI Rating";
  }

  let estimatedCostRange = "£40,000 – £80,000";
  if (recommendedRoute === "Integrated ATPL") estimatedCostRange = "£80,000 – £120,000";
  else if (recommendedRoute === "PPL Only") estimatedCostRange = "£8,000 – £15,000";
  else if (recommendedRoute === "Modular ATPL + FI Rating") estimatedCostRange = "£45,000 – £85,000";

  let estimatedTimeline = "3 – 5 years (modular, part-time)";
  if (recommendedRoute === "Integrated ATPL") estimatedTimeline = "18 – 24 months";
  else if (recommendedRoute === "PPL Only") estimatedTimeline = "6 – 18 months";

  // ── Biggest risk — self-reported barrier first (Gen 2) ────────────────────
  let biggestRisk = "Funding";
  let nextAction = "Book a free consultation with a training advisor";

  const barrier = input.biggestConcern;
  if (barrier === "The cost — I can't fund it" || barrier === "I can't fund it") {
    biggestRisk = "Funding";
    nextAction = "Explore pilot training finance options and speak to a specialist aviation lender";
  } else if (barrier === "I'm not sure I could actually do it") {
    biggestRisk = "Confidence";
    nextAction = "Book a trial lesson — most people find their confidence transforms after 30 minutes in the cockpit";
  } else if (barrier === "I'm worried about passing the medical") {
    biggestRisk = "Medical clearance";
    nextAction = "Book an initial Class 1 Medical assessment with a CAA-approved AME — most people pass";
  } else if (barrier === "I don't have the time right now") {
    biggestRisk = "Time commitment";
    nextAction = "Explore modular training — you can train part-time around work and family commitments";
  } else if (barrier === "I think I might be too old") {
    biggestRisk = "Age concerns";
    nextAction = "Speak to a training advisor — age limits are often misunderstood and many people start in their 40s";
  } else if (barrier === "I'd be risking too much (career, income, stability)") {
    biggestRisk = "Career risk";
    nextAction = "Explore modular training — you can keep your current income while training part-time";
  } else if (barrier === "I have too many unanswered questions") {
    biggestRisk = "Information overload";
    nextAction = "Request introductions to matched schools — they can answer your specific questions directly";
  } else if (barrier === "Nothing — I'm ready to start") {
    biggestRisk = "Finding the right school";
    nextAction = "Request introductions to matched flight schools — you're ready to start";
  } else {
    // Fallback: derive from scoring dimensions
    if (medical < 40) {
      biggestRisk = "Medical clearance";
      nextAction = "Book a Class 1 Medical assessment with a CAA-approved AME";
    } else if (finance < 40) {
      biggestRisk = "Funding";
      nextAction = "Explore pilot training finance options";
    } else if (readiness >= 70 && finance >= 60) {
      biggestRisk = "Finding the right school";
      nextAction = "Request introductions to matched flight schools";
    } else if (career < 40) {
      biggestRisk = "Goal clarity";
      nextAction = "Book a free consultation to explore your options";
    }
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
  };
}
