/**
 * roadmapSchema.test.ts
 *
 * Tests for the Zod roadmap schema, normalisation logic, and parseAndNormaliseRoadmap.
 * Covers:
 *   - Valid LLM output parses and normalises correctly
 *   - Legacy field names (risk/likelihood) are remapped to (scenario/probability)
 *   - Missing premium fields receive safe defaults
 *   - Malformed JSON returns a safe fallback marker (never throws)
 *   - Empty/null input returns a safe fallback marker (never throws)
 *   - All advertised premium sections are present after normalisation
 */
import { describe, expect, it } from "vitest";
import {
  parseAndNormaliseRoadmap,
  normaliseRoadmap,
  RoadmapSchema,
} from "./roadmapSchema";

// ── Helpers ───────────────────────────────────────────────────────────────────

const MINIMAL_VALID_ROADMAP = {
  pilotGoalSummary: "Test candidate wants to become an airline pilot.",
  recommendedRoute: "Integrated ATPL",
  estimatedCostMin: 90000,
  estimatedCostMax: 130000,
  estimatedDuration: "18-24 months",
  readinessLabel: "Development Phase",
};

const FULL_VALID_ROADMAP = {
  ...MINIMAL_VALID_ROADMAP,
  keyInsight: "Book your Class 1 Medical first.",
  biggestBarrier: "Cost",
  barrierDeepDive: "The headline cost is only part of the picture.",
  barrierAdvice: "Compare at least two finance providers.",
  strongestAsset: "Strong motivation and early research.",
  routeRationale: "Integrated suits your timeline.",
  readinessExplanation: "You are on the right path.",
  hiddenCosts: [
    { item: "Class 1 Medical", estimatedCost: "£300–£600", notes: "Book first." },
  ],
  schoolSelectionCriteria: [
    { criterion: "Pass rates", whyItMatters: "Affects timeline.", questionToAsk: "What is your pass rate?" },
  ],
  monthlyTimeline: [
    { month: "Month 1-2", phase: "Medical", milestone: "Book medical", detail: "Book AME.", cost: "£300" },
  ],
  riskScenarios: [
    { scenario: "Cost overrun", probability: "High" as const, mitigation: "Budget 20% extra." },
  ],
  thirtyDayActionPlan: ["Day 1-3: Book medical."],
  careerRealityCheck: "6-18 months to first airline job.",
  medicalAdvice: "Class 1 required.",
  financeConsiderations: "Compare providers.",
  disclaimer: "Guidance only.",
};

// ── parseAndNormaliseRoadmap ───────────────────────────────────────────────────

describe("parseAndNormaliseRoadmap — valid input", () => {
  it("parses a valid full roadmap JSON string without error", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(FULL_VALID_ROADMAP));
    expect(result._parseError).toBeUndefined();
    expect(result.recommendedRoute).toBe("Integrated ATPL");
    expect(result.estimatedCostMin).toBe(90000);
  });

  it("preserves existing riskScenarios when present", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(FULL_VALID_ROADMAP));
    expect(result.riskScenarios).toHaveLength(1);
    expect(result.riskScenarios![0].scenario).toBe("Cost overrun");
    expect(result.riskScenarios![0].probability).toBe("High");
    expect(result.riskScenarios![0].mitigation).toBe("Budget 20% extra.");
  });

  it("preserves existing monthlyTimeline when present", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(FULL_VALID_ROADMAP));
    expect(result.monthlyTimeline).toHaveLength(1);
    expect(result.monthlyTimeline![0].month).toBe("Month 1-2");
  });

  it("always adds a disclaimer if missing", () => {
    const noDisclaimer = { ...FULL_VALID_ROADMAP };
    delete (noDisclaimer as any).disclaimer;
    const result = parseAndNormaliseRoadmap(JSON.stringify(noDisclaimer));
    expect(result.disclaimer).toBeTruthy();
    expect(result.disclaimer).toContain("guidance only");
  });
});

describe("parseAndNormaliseRoadmap — legacy field remapping", () => {
  it("remaps legacy 'risk' field to 'scenario'", () => {
    const legacyRoadmap = {
      ...MINIMAL_VALID_ROADMAP,
      riskScenarios: [
        { risk: "Medical failure", likelihood: "High", impact: "High", mitigation: "Book AME first." },
      ],
    };
    const result = parseAndNormaliseRoadmap(JSON.stringify(legacyRoadmap));
    expect(result.riskScenarios![0].scenario).toBe("Medical failure");
    expect((result.riskScenarios![0] as any).risk).toBeUndefined();
  });

  it("remaps legacy 'likelihood' field to 'probability'", () => {
    const legacyRoadmap = {
      ...MINIMAL_VALID_ROADMAP,
      riskScenarios: [
        { risk: "Cost overrun", likelihood: "Medium", impact: "High", mitigation: "Budget extra." },
      ],
    };
    const result = parseAndNormaliseRoadmap(JSON.stringify(legacyRoadmap));
    expect(result.riskScenarios![0].probability).toBe("Medium");
    expect((result.riskScenarios![0] as any).likelihood).toBeUndefined();
  });

  it("handles mixed legacy and canonical risk fields gracefully", () => {
    const mixedRoadmap = {
      ...MINIMAL_VALID_ROADMAP,
      riskScenarios: [
        { scenario: "Delay", probability: "Low", mitigation: "Plan ahead." },
        { risk: "Old format", likelihood: "High", impact: "Medium", mitigation: "Old mitigation." },
      ],
    };
    const result = parseAndNormaliseRoadmap(JSON.stringify(mixedRoadmap));
    expect(result.riskScenarios).toHaveLength(2);
    expect(result.riskScenarios![0].scenario).toBe("Delay");
    expect(result.riskScenarios![1].scenario).toBe("Old format");
    expect(result.riskScenarios![1].probability).toBe("High");
  });
});

describe("parseAndNormaliseRoadmap — missing premium fields get defaults", () => {
  it("adds default hiddenCosts when missing", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(MINIMAL_VALID_ROADMAP));
    expect(result.hiddenCosts).toBeDefined();
    expect(result.hiddenCosts!.length).toBeGreaterThanOrEqual(5);
    expect(result.hiddenCosts!.some(c => c.item.includes("Medical"))).toBe(true);
  });

  it("adds default schoolSelectionCriteria when missing", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(MINIMAL_VALID_ROADMAP));
    expect(result.schoolSelectionCriteria).toBeDefined();
    expect(result.schoolSelectionCriteria!.length).toBeGreaterThanOrEqual(4);
  });

  it("adds default monthlyTimeline when missing", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(MINIMAL_VALID_ROADMAP));
    expect(result.monthlyTimeline).toBeDefined();
    expect(result.monthlyTimeline!.length).toBeGreaterThanOrEqual(4);
  });

  it("adds default riskScenarios when missing", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(MINIMAL_VALID_ROADMAP));
    expect(result.riskScenarios).toBeDefined();
    expect(result.riskScenarios!.length).toBeGreaterThanOrEqual(3);
    // All defaults must use canonical field names
    for (const risk of result.riskScenarios!) {
      expect(risk.scenario).toBeDefined();
      expect(risk.probability).toBeDefined();
      expect(["Low", "Medium", "High"]).toContain(risk.probability);
    }
  });

  it("adds default thirtyDayActionPlan when missing", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(MINIMAL_VALID_ROADMAP));
    expect(result.thirtyDayActionPlan).toBeDefined();
    expect(result.thirtyDayActionPlan!.length).toBeGreaterThanOrEqual(5);
  });

  it("sets matchedSchoolsContext to empty array when missing", () => {
    const result = parseAndNormaliseRoadmap(JSON.stringify(MINIMAL_VALID_ROADMAP));
    expect(result.matchedSchoolsContext).toEqual([]);
  });
});

describe("parseAndNormaliseRoadmap — malformed input never throws", () => {
  it("returns _parseError marker for invalid JSON", () => {
    const result = parseAndNormaliseRoadmap("this is not json");
    expect(result._parseError).toBe(true);
    expect(result._fallback).toBe(true);
    expect(result.disclaimer).toBeTruthy();
  });

  it("returns _parseError marker for empty string", () => {
    const result = parseAndNormaliseRoadmap("");
    expect(result._parseError).toBe(true);
  });

  it("returns safe defaults for null-like string (JSON null is not an object)", () => {
    const result = parseAndNormaliseRoadmap("null");
    // null parses as JSON but is not an object — normaliseRoadmap({}) is called
    expect(result).toBeDefined();
    expect(result.disclaimer).toBeTruthy();
    expect(result.hiddenCosts!.length).toBeGreaterThan(0);
    expect(result.riskScenarios!.length).toBeGreaterThan(0);
  });

  it("returns safe defaults for empty object {}", () => {
    const result = parseAndNormaliseRoadmap("{}");
    expect(result._parseError).toBeUndefined();
    expect(result.hiddenCosts!.length).toBeGreaterThan(0);
    expect(result.riskScenarios!.length).toBeGreaterThan(0);
    expect(result.monthlyTimeline!.length).toBeGreaterThan(0);
  });

  it("does not throw for deeply malformed partial LLM output", () => {
    const partial = JSON.stringify({
      pilotGoalSummary: "Test",
      riskScenarios: "not an array — LLM hallucinated a string",
      monthlyTimeline: null,
      hiddenCosts: [{ item: 123, estimatedCost: null }], // wrong types
    });
    expect(() => parseAndNormaliseRoadmap(partial)).not.toThrow();
    const result = parseAndNormaliseRoadmap(partial);
    expect(result.disclaimer).toBeTruthy();
  });
});

// ── normaliseRoadmap ──────────────────────────────────────────────────────────

describe("normaliseRoadmap — preserves existing data", () => {
  it("does not overwrite existing hiddenCosts with defaults", () => {
    const data = {
      ...FULL_VALID_ROADMAP,
      hiddenCosts: [{ item: "Custom cost", estimatedCost: "£999", notes: "Custom." }],
    };
    const result = normaliseRoadmap(data as any);
    expect(result.hiddenCosts).toHaveLength(1);
    expect(result.hiddenCosts![0].item).toBe("Custom cost");
  });

  it("does not overwrite existing riskScenarios with defaults", () => {
    const data = {
      ...FULL_VALID_ROADMAP,
      riskScenarios: [
        { scenario: "Custom risk", probability: "Low" as const, mitigation: "Custom mitigation." },
      ],
    };
    const result = normaliseRoadmap(data as any);
    expect(result.riskScenarios).toHaveLength(1);
    expect(result.riskScenarios![0].scenario).toBe("Custom risk");
  });
});

// ── RoadmapSchema Zod validation ──────────────────────────────────────────────

describe("RoadmapSchema — Zod validation", () => {
  it("accepts a valid full roadmap", () => {
    const result = RoadmapSchema.safeParse(FULL_VALID_ROADMAP);
    expect(result.success).toBe(true);
  });

  it("accepts a minimal roadmap with only a few fields", () => {
    const result = RoadmapSchema.safeParse(MINIMAL_VALID_ROADMAP);
    expect(result.success).toBe(true);
  });

  it("accepts an empty object (all fields optional)", () => {
    const result = RoadmapSchema.safeParse({});
    expect(result.success).toBe(true);
  });

  it("accepts unknown extra keys (passthrough)", () => {
    const result = RoadmapSchema.safeParse({
      ...MINIMAL_VALID_ROADMAP,
      unknownFutureField: "some value",
      currency: "GBP",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect((result.data as any).currency).toBe("GBP");
    }
  });

  it("remaps legacy risk fields via RiskScenarioSchema transform", () => {
    const result = RoadmapSchema.safeParse({
      riskScenarios: [
        { risk: "Old risk", likelihood: "High", impact: "High", mitigation: "Old mitigation." },
      ],
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.riskScenarios![0].scenario).toBe("Old risk");
      expect(result.data.riskScenarios![0].probability).toBe("High");
    }
  });
});
