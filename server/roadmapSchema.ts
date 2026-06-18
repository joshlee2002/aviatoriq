/**
 * roadmapSchema.ts
 *
 * Single source of truth for the AI roadmap JSON shape.
 * Used to:
 *   1. Validate and normalise LLM output before storing it in the DB.
 *   2. Normalise legacy/mismatched field names (e.g. old `risk`/`likelihood` shape).
 *   3. Guarantee that every advertised premium section has a safe default so the
 *      frontend never renders undefined.
 *
 * Rules:
 *   - All fields are optional at the Zod level so partial LLM output never throws.
 *   - normaliseRoadmap() applies defaults and legacy field remapping.
 *   - parseAndNormaliseRoadmap() is the single entry point used by routers.ts.
 */

import { z } from "zod";

// ─── Sub-schemas ──────────────────────────────────────────────────────────────

const MonthlyMilestoneSchema = z.object({
  month: z.string().optional().default(""),
  phase: z.string().optional(),
  milestone: z.string().optional().default(""),
  detail: z.string().optional().default(""),
  cost: z.string().nullable().optional(),
});

const RiskScenarioSchema = z
  .object({
    // Current canonical fields
    scenario: z.string().optional(),
    probability: z.enum(["Low", "Medium", "High"]).optional(),
    mitigation: z.string().optional().default(""),
    // Legacy field names from old prompt (pre-fix) — remapped in normalise()
    risk: z.string().optional(),
    likelihood: z.string().optional(),
    impact: z.string().optional(),
  })
  .transform(raw => ({
    scenario: raw.scenario ?? raw.risk ?? "Unknown risk",
    probability: (raw.probability ??
      raw.likelihood ??
      "Medium") as "Low" | "Medium" | "High",
    mitigation: raw.mitigation ?? "",
  }));

const HiddenCostItemSchema = z.object({
  item: z.string().optional().default(""),
  estimatedCost: z.string().optional().default(""),
  notes: z.string().optional().default(""),
});

const SchoolCriterionSchema = z.object({
  criterion: z.string().optional().default(""),
  whyItMatters: z.string().optional().default(""),
  questionToAsk: z.string().optional().default(""),
});

const MatchedSchoolContextSchema = z.object({
  name: z.string().optional().default(""),
  country: z.string().optional().default(""),
  whyMatch: z.string().optional().default(""),
  verifiedCost: z.string().optional(),
  financeAvailable: z.boolean().optional(),
  website: z.string().optional(),
});

// ─── Root roadmap schema ──────────────────────────────────────────────────────

export const RoadmapSchema = z.object({
  // ── Free fields ─────────────────────────────────────────────────────────────
  pilotGoalSummary: z.string().optional(),
  recommendedRoute: z.string().optional(),
  routeRationale: z.string().optional(),
  estimatedCostMin: z.number().optional(),
  estimatedCostMax: z.number().optional(),
  estimatedDuration: z.string().optional(),
  readinessLabel: z.string().optional(),
  readinessExplanation: z.string().optional(),
  nextSteps: z.array(z.string()).optional(),
  medicalAdvice: z.string().optional(),
  financeConsiderations: z.string().optional(),
  schoolTypeRecommendation: z.string().optional(),
  matchedSchoolRationale: z.string().optional(),
  biggestBarrier: z.string().optional(),
  barrierAdvice: z.string().optional(),
  strongestAsset: z.string().optional(),
  careerRealityCheck: z.string().optional(),
  disclaimer: z.string().optional(),
  // ── Premium fields ───────────────────────────────────────────────────────────
  keyInsight: z.string().optional(),
  barrierDeepDive: z.string().optional(),
  hiddenCosts: z.array(HiddenCostItemSchema).optional(),
  schoolSelectionCriteria: z.array(SchoolCriterionSchema).optional(),
  monthlyTimeline: z.array(MonthlyMilestoneSchema).optional(),
  riskScenarios: z.array(RiskScenarioSchema).optional(),
  matchedSchoolsContext: z.array(MatchedSchoolContextSchema).optional(),
  thirtyDayActionPlan: z.array(z.string()).optional(),
  // ── Internal flags ───────────────────────────────────────────────────────────
  _fallback: z.boolean().optional(),
  // Allow unknown keys from future LLM output without throwing
}).passthrough();

export type RoadmapData = z.infer<typeof RoadmapSchema>;

// ─── Default premium fallback values ─────────────────────────────────────────
// Used when a field is missing from both LLM output and the deterministic fallback.

const DEFAULT_HIDDEN_COSTS = [
  { item: "Class 1 Medical", estimatedCost: "£300–£600", notes: "Required before starting commercial training — book this first before committing to any school." },
  { item: "Headset", estimatedCost: "£300–£1,000", notes: "Schools provide basic headsets but most students buy their own within the first month." },
  { item: "ATPL Ground School Materials", estimatedCost: "£400–£600", notes: "Books, question banks, and study apps on top of ground school fees." },
  { item: "14 ATPL Exam Fees", estimatedCost: "£150–£200 each", notes: "Each of the 14 ATPL theory exams has a separate sitting fee — rarely included in school quotes." },
  { item: "MCC/JOC Course", estimatedCost: "£3,000–£5,000", notes: "Multi-Crew Cooperation course required before airline applications — often not included in integrated school fees." },
  { item: "Type Rating", estimatedCost: "£15,000–£25,000", notes: "Required for your first airline job — almost never included in training programme costs." },
];

const DEFAULT_SCHOOL_CRITERIA = [
  { criterion: "Pass rates", whyItMatters: "First-time ATPL exam pass rates and skills test pass rates directly affect your timeline and costs.", questionToAsk: "What is your first-time pass rate for ATPL theory exams and the CPL/IR skills test?" },
  { criterion: "Aircraft availability", whyItMatters: "Training delays due to aircraft maintenance are the most common cause of cost overruns.", questionToAsk: "What is your aircraft-to-student ratio and what is your average weather/maintenance cancellation rate?" },
  { criterion: "Airline partnerships", whyItMatters: "Formal airline partnerships can mean guaranteed interviews or priority hiring after graduation.", questionToAsk: "Do you have formal airline partnership agreements, and what does that mean for graduates in practice?" },
  { criterion: "Finance and refund policy", whyItMatters: "Schools that require full upfront payment put you at risk if the school closes or you need to leave.", questionToAsk: "What is your refund policy if I need to leave training, and do you offer stage-by-stage payment?" },
];

const DEFAULT_MONTHLY_TIMELINE = [
  { month: "Month 1–2", milestone: "Medical & school selection", detail: "Book your Class 1 Medical with a CAA-approved AME. This is the single most important step before spending any money on training. Simultaneously, request full prospectuses and cost breakdowns from 3 shortlisted schools.", cost: "£300–£600" },
  { month: "Month 3–4", milestone: "Finance & application", detail: "Confirm your funding plan — compare school payment plans, bank loans, and aviation bursaries. Submit your application to your chosen school once funding is confirmed.", cost: null },
  { month: "Month 5–8", milestone: "Ground school & PPL", detail: "Begin ATPL ground school theory. If modular, complete your PPL at a local flying club. Expect to sit your first ATPL theory exams during this phase.", cost: "£8,000–£15,000" },
  { month: "Month 9–14", milestone: "Hour building & CPL", detail: "Complete the required 150+ hours of hour building. Begin CPL flight training. This phase is where most training delays occur — choose a school with good aircraft availability.", cost: "£20,000–£35,000" },
  { month: "Month 15–18", milestone: "IR & MCC", detail: "Complete your Instrument Rating and Multi-Engine Rating. Follow with the MCC/JOC course — essential for airline applications but often not included in school fees.", cost: "£15,000–£25,000" },
  { month: "Month 19–24", milestone: "Job applications & type rating", detail: "Begin airline applications. Most airlines require a type rating before your first day — budget £15,000–£25,000 for this. Expect 6–18 months from licence issue to your first airline role.", cost: "£15,000–£25,000" },
];

const DEFAULT_RISK_SCENARIOS = [
  { scenario: "Training cost overrun", probability: "High" as const, mitigation: "The headline training cost is only part of the picture. Budget 15–20% above the school's quoted price to cover hidden costs: ATPL exam fees (£150–£200 each × 14 exams), headset (£300–£1,000), MCC/JOC (£3,000–£5,000), and type rating (£15,000–£25,000). Request a full written cost breakdown from every school before committing." },
  { scenario: "Training delays extending timeline", probability: "Medium" as const, mitigation: "Training delays due to aircraft availability, weather, and exam resits are the most common cause of cost overruns. Ask every school for their average student completion time versus their advertised timeline, and their aircraft-to-student ratio. Choose a school with a strong maintenance record and multiple aircraft of the same type." },
  { scenario: "School closure or financial instability", probability: "Low" as const, mitigation: "Flight school closures do happen — several UK schools have closed in recent years. Protect yourself by choosing a school with a long operating history, checking their CAA approval status, and avoiding schools that require full upfront payment. Ask specifically about their refund policy and whether they hold student funds in a protected account." },
];

const DEFAULT_THIRTY_DAY_PLAN = [
  "Day 1–3: Research and book a Class 1 Medical appointment with a CAA-approved AME.",
  "Day 4–7: Request full prospectuses and cost breakdowns (including hidden costs) from 3 shortlisted schools.",
  "Day 8–14: Research finance options — contact your bank and aviation finance providers. Get pre-qualification estimates.",
  "Day 15–21: Attend an open day or book a discovery flight at your top school choice.",
  "Day 22–30: Review your full budget including hidden costs, confirm your funding plan, and submit your application.",
];

// ─── Normalise function ───────────────────────────────────────────────────────

/**
 * Takes a parsed RoadmapData object and fills in any missing premium fields
 * with safe, useful defaults. This ensures a paid user always receives value
 * even if the LLM output is partial.
 */
export function normaliseRoadmap(data: RoadmapData): RoadmapData {
  return {
    ...data,
    // Ensure every premium array field has content
    hiddenCosts:
      data.hiddenCosts && data.hiddenCosts.length > 0
        ? data.hiddenCosts
        : DEFAULT_HIDDEN_COSTS,
    schoolSelectionCriteria:
      data.schoolSelectionCriteria && data.schoolSelectionCriteria.length > 0
        ? data.schoolSelectionCriteria
        : DEFAULT_SCHOOL_CRITERIA,
    monthlyTimeline:
      data.monthlyTimeline && data.monthlyTimeline.length > 0
        ? data.monthlyTimeline
        : DEFAULT_MONTHLY_TIMELINE,
    riskScenarios:
      data.riskScenarios && data.riskScenarios.length > 0
        ? data.riskScenarios
        : DEFAULT_RISK_SCENARIOS,
    thirtyDayActionPlan:
      data.thirtyDayActionPlan && data.thirtyDayActionPlan.length > 0
        ? data.thirtyDayActionPlan
        : DEFAULT_THIRTY_DAY_PLAN,
    // matchedSchoolsContext is optional — only add default if completely missing
    matchedSchoolsContext: data.matchedSchoolsContext ?? [],
    // Ensure disclaimer is always present
    disclaimer:
      data.disclaimer ??
      "This report is guidance only and not official career, medical or financial advice. Always consult qualified professionals before making training decisions.",
  };
}

// ─── Main entry point ─────────────────────────────────────────────────────────

/**
 * Parse a raw JSON string from the LLM (or DB cache) and return a normalised
 * RoadmapData object. Never throws — returns a safe fallback marker on failure.
 *
 * @param raw - The raw JSON string from LLM or DB
 * @param context - Optional label for error logging (e.g. "LLM output", "DB cache")
 */
export function parseAndNormaliseRoadmap(
  raw: string,
  context = "roadmap"
): RoadmapData & { _parseError?: true } {
  let parsed: unknown;

  // Step 1: JSON parse
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    console.error(`[Roadmap] JSON.parse failed for ${context}:`, e);
    return {
      _parseError: true,
      _fallback: true,
      disclaimer:
        "This report is guidance only and not official career, medical or financial advice.",
    };
  }

  // Step 1b: Guard against null or non-object JSON (e.g. JSON.parse("null") === null)
  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
    console.error(`[Roadmap] Parsed ${context} is not an object:`, typeof parsed);
    return normaliseRoadmap({});
  }

  // Step 2: Zod validation — coerces and fills optional fields
  const result = RoadmapSchema.safeParse(parsed);
  if (!result.success) {
    console.error(
      `[Roadmap] Zod validation failed for ${context}:`,
      result.error.flatten()
    );
    // Still try to use the raw parsed data with defaults applied
    return normaliseRoadmap(parsed as RoadmapData);
  }

  // Step 3: Normalise — fill in missing premium fields with safe defaults
  return normaliseRoadmap(result.data);
}
