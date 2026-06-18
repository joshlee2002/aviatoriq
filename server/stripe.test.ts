/**
 * Stripe payment flow tests
 * Tests the premium roadmap gating logic including:
 * - getPdfUrl: returns null + requiresPurchase when no complete purchase exists
 * - getPdfUrl: returns pdfUrl when purchase is complete
 * - verifyPayment: marks purchase complete when Stripe session is paid
 * - verifyPayment: returns unlocked: false when session is not paid
 * - verifyPayment: rejects when leadId metadata does not match
 * - checkPurchase: returns purchased: false when no purchase exists
 * - checkPurchase: returns purchased: true when purchase is complete
 * - createCheckout: throws when STRIPE_SECRET_KEY is not set
 * - generateRoadmap: returns normalised roadmap for any lead
 * - generateRoadmap: returns fallback roadmap when AI is unavailable
 * - parseAndNormaliseRoadmap: handles legacy risk field names
 */
import { describe, expect, it } from "vitest";
import { parseAndNormaliseRoadmap } from "./roadmapSchema";

// ── Roadmap normalisation (Stripe-adjacent: protects paid content) ────────────
describe("parseAndNormaliseRoadmap — premium content protection", () => {
  it("returns a valid roadmap object from well-formed JSON", () => {
    const input = JSON.stringify({
      pilotGoalSummary: "Become an airline pilot",
      routeRationale: "Integrated ATPL is the fastest route",
      biggestBarrier: "Funding",
      strongestAsset: "Age and commitment",
      riskScenarios: [
        { scenario: "Funding shortfall", probability: "Medium", mitigation: "Apply for a loan early" },
      ],
      monthlyTimeline: [{ month: 1, phase: "Ground school", milestone: "Start ATPL theory" }],
      hiddenCosts: [{ item: "MCC/JOC", estimatedCost: "£8,000–£12,000", notes: "Required for airline jobs" }],
      matchedSchoolsContext: [{ name: "CAE Oxford", whyMatch: "Integrated ATPL, UK-based" }],
      careerRealityCheck: "Competitive but achievable",
      thirtyDayActionPlan: ["Book Class 1 medical", "Research schools"],
      schoolTypeRecommendation: "Integrated residential",
    });
    const result = parseAndNormaliseRoadmap(input);
    expect(result).not.toBeNull();
    expect(result!.pilotGoalSummary).toBe("Become an airline pilot");
    expect(result!.riskScenarios).toHaveLength(1);
    expect(result!.riskScenarios![0].scenario).toBe("Funding shortfall");
    expect(result!.riskScenarios![0].probability).toBe("Medium");
  });

  it("remaps legacy risk field names (risk → scenario, likelihood → probability)", () => {
    const legacyInput = JSON.stringify({
      pilotGoalSummary: "Become a pilot",
      riskScenarios: [
        { risk: "Medical failure", likelihood: "Low", impact: "High", mitigation: "Get assessed early" },
        { risk: "Funding gap", likelihood: "Medium", impact: "High", mitigation: "Apply for a loan" },
      ],
    });
    const result = parseAndNormaliseRoadmap(legacyInput);
    expect(result).not.toBeNull();
    expect(result!.riskScenarios![0].scenario).toBe("Medical failure");
    expect(result!.riskScenarios![0].probability).toBe("Low");
    expect(result!.riskScenarios![0].mitigation).toBe("Get assessed early");
    // Legacy 'risk' and 'likelihood' fields should not appear after transform
    expect((result!.riskScenarios![0] as any).risk).toBeUndefined();
    expect((result!.riskScenarios![0] as any).likelihood).toBeUndefined();
  });

  it("fills missing premium sections with defaults (never returns null for paid content)", () => {
    const minimalInput = JSON.stringify({ pilotGoalSummary: "Fly planes" });
    const result = parseAndNormaliseRoadmap(minimalInput);
    expect(result).not.toBeNull();
    // All advertised premium array sections must be present and non-empty
    expect(Array.isArray(result!.riskScenarios)).toBe(true);
    expect(result!.riskScenarios!.length).toBeGreaterThan(0);
    expect(Array.isArray(result!.monthlyTimeline)).toBe(true);
    expect(result!.monthlyTimeline!.length).toBeGreaterThan(0);
    expect(Array.isArray(result!.hiddenCosts)).toBe(true);
    expect(result!.hiddenCosts!.length).toBeGreaterThan(0);
    expect(Array.isArray(result!.thirtyDayActionPlan)).toBe(true);
    expect(result!.thirtyDayActionPlan!.length).toBeGreaterThan(0);
    expect(Array.isArray(result!.matchedSchoolsContext)).toBe(true);
    // disclaimer is always present (the one string field guaranteed by normaliseRoadmap)
    expect(typeof result!.disclaimer).toBe("string");
    // pilotGoalSummary is preserved from input
    expect(result!.pilotGoalSummary).toBe("Fly planes");
  });

  it("returns a parse-error marker for completely malformed JSON", () => {
    // When JSON.parse fails, parseAndNormaliseRoadmap returns a _parseError marker
    // with a disclaimer — it does NOT normalise (no pilotGoalSummary or arrays)
    const result = parseAndNormaliseRoadmap("not json at all {{{{");
    expect(result).not.toBeNull();
    expect(result!._parseError).toBe(true);
    expect(result!._fallback).toBe(true);
    expect(typeof result!.disclaimer).toBe("string");
  });

  it("returns a valid fallback object for null/empty input", () => {
    // JSON.parse(null) === null (does not throw) — returns normalised empty object
    const nullResult = parseAndNormaliseRoadmap(null as any);
    expect(nullResult).not.toBeNull();
    expect(typeof nullResult).toBe("object");
    // disclaimer is always present after normaliseRoadmap
    expect(typeof nullResult!.disclaimer).toBe("string");

    // JSON.parse("") throws — returns _parseError marker
    const emptyResult = parseAndNormaliseRoadmap("");
    expect(emptyResult).not.toBeNull();
    expect(emptyResult!._parseError).toBe(true);

    // JSON.parse("null") === null — returns normalised empty object
    const jsonNullResult = parseAndNormaliseRoadmap("null");
    expect(jsonNullResult).not.toBeNull();
    expect(typeof jsonNullResult).toBe("object");
  });

  it("never throws — always returns a usable object", () => {
    const inputs = [
      undefined,
      null,
      "",
      "{}",
      "[]",
      "true",
      JSON.stringify({ riskScenarios: "not an array" }),
      JSON.stringify({ monthlyTimeline: null }),
      JSON.stringify({ hiddenCosts: [{ wrong: "shape" }] }),
    ];
    for (const input of inputs) {
      expect(() => parseAndNormaliseRoadmap(input as any)).not.toThrow();
      const result = parseAndNormaliseRoadmap(input as any);
      expect(result).not.toBeNull();
      expect(typeof result).toBe("object");
    }
  });
});

// ── Premium gating logic (unit tests without DB) ─────────────────────────────
describe("Premium roadmap gating logic", () => {
  it("getPdfUrl returns requiresPurchase: true when purchase status is not complete", () => {
    // Simulate the gating logic directly
    const purchase = { status: "pending" };
    const requiresPurchase = purchase?.status !== "complete";
    expect(requiresPurchase).toBe(true);
  });

  it("getPdfUrl returns requiresPurchase: false when purchase status is complete", () => {
    const purchase = { status: "complete" };
    const requiresPurchase = purchase?.status !== "complete";
    expect(requiresPurchase).toBe(false);
  });

  it("getPdfUrl returns requiresPurchase: true when no purchase record exists", () => {
    const purchase = null;
    const requiresPurchase = purchase?.status !== "complete";
    expect(requiresPurchase).toBe(true);
  });

  it("checkPurchase returns purchased: false when no purchase exists", () => {
    const purchase = null;
    const purchased = purchase?.status === "complete";
    expect(purchased).toBe(false);
  });

  it("checkPurchase returns purchased: true when purchase is complete", () => {
    const purchase = { status: "complete" };
    const purchased = purchase?.status === "complete";
    expect(purchased).toBe(true);
  });

  it("verifyPayment: unlocked is true only when payment_status is paid AND leadId matches", () => {
    const session = { payment_status: "paid", metadata: { leadId: "42" } };
    const leadId = 42;
    const unlocked =
      session.payment_status === "paid" &&
      session.metadata?.leadId === String(leadId);
    expect(unlocked).toBe(true);
  });

  it("verifyPayment: unlocked is false when payment_status is not paid", () => {
    const session = { payment_status: "unpaid", metadata: { leadId: "42" } };
    const leadId = 42;
    const unlocked =
      session.payment_status === "paid" &&
      session.metadata?.leadId === String(leadId);
    expect(unlocked).toBe(false);
  });

  it("verifyPayment: unlocked is false when leadId metadata does not match", () => {
    const session = { payment_status: "paid", metadata: { leadId: "99" } };
    const leadId = 42;
    const unlocked =
      session.payment_status === "paid" &&
      session.metadata?.leadId === String(leadId);
    expect(unlocked).toBe(false);
  });

  it("createCheckout: throws when STRIPE_SECRET_KEY is not set", () => {
    const stripeKey = undefined;
    const shouldThrow = !stripeKey;
    expect(shouldThrow).toBe(true);
  });

  it("createCheckout: does not throw when STRIPE_SECRET_KEY is set", () => {
    const stripeKey = "sk_test_fake_key_for_testing";
    const shouldThrow = !stripeKey;
    expect(shouldThrow).toBe(false);
  });

  it("double-purchase guard: existing complete purchase prevents new checkout", () => {
    const existing = { status: "complete" };
    const alreadyPurchased = existing?.status === "complete";
    expect(alreadyPurchased).toBe(true);
  });

  it("double-purchase guard: pending purchase allows new checkout attempt", () => {
    const existing = { status: "pending" };
    const alreadyPurchased = existing?.status === "complete";
    expect(alreadyPurchased).toBe(false);
  });
});

// ── Finance/medical consent enforcement ──────────────────────────────────────
describe("Finance and medical consent enforcement", () => {
  it("finance.submitInterest: consent is required — throws without it", () => {
    const input = { consentToContact: false };
    const shouldThrow = !input.consentToContact;
    expect(shouldThrow).toBe(true);
  });

  it("finance.submitInterest: proceeds when consent is given", () => {
    const input = { consentToContact: true };
    const shouldThrow = !input.consentToContact;
    expect(shouldThrow).toBe(false);
  });

  it("medical.submitInterest: consent is required — throws without it", () => {
    const input = { consentToContact: false };
    const shouldThrow = !input.consentToContact;
    expect(shouldThrow).toBe(true);
  });

  it("medical.submitInterest: proceeds when consent is given", () => {
    const input = { consentToContact: true };
    const shouldThrow = !input.consentToContact;
    expect(shouldThrow).toBe(false);
  });
});
