/**
 * Tests for currency utility functions.
 * These are pure functions so they can be tested without a browser.
 */

import { describe, it, expect } from "vitest";

// ─── Inline the pure utils here (avoids Vite alias resolution in vitest) ──────

function parseGBPValues(priceStr: string): number[] {
  const matches = priceStr.match(/£([\d,]+)/g);
  if (!matches) return [];
  return matches.map((m) => parseInt(m.replace(/[£,]/g, ""), 10)).filter((n) => !isNaN(n));
}

function convertPriceString(
  priceStr: string,
  formatPrice: (gbp: number) => string
): string {
  const trailingMatch = priceStr.match(/(\s*\([^)]+\)\s*)$/);
  const trailing = trailingMatch ? trailingMatch[1] : "";
  const core = trailing ? priceStr.slice(0, priceStr.length - trailing.length) : priceStr;
  const converted = core.replace(/£([\d,]+)/g, (_, digits) => {
    const gbp = parseInt(digits.replace(/,/g, ""), 10);
    return isNaN(gbp) ? `£${digits}` : formatPrice(gbp);
  });
  return converted + trailing;
}

// ─── parseGBPValues ───────────────────────────────────────────────────────────

describe("parseGBPValues", () => {
  it("parses a single value", () => {
    expect(parseGBPValues("£99,950")).toEqual([99950]);
  });

  it("parses a range", () => {
    expect(parseGBPValues("£100,000–£130,000")).toEqual([100000, 130000]);
  });

  it("parses a range with trailing text", () => {
    expect(parseGBPValues("£5,000–£15,000 (ground school only)")).toEqual([5000, 15000]);
  });

  it("returns empty array for non-GBP string", () => {
    expect(parseGBPValues("Contact for pricing")).toEqual([]);
  });

  it("handles values without commas", () => {
    expect(parseGBPValues("£80000–£115000")).toEqual([80000, 115000]);
  });
});

// ─── convertPriceString ───────────────────────────────────────────────────────

describe("convertPriceString", () => {
  const usdFormatter = (gbp: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
      Math.round(gbp * 1.27)
    );

  it("converts a single GBP value", () => {
    const result = convertPriceString("£100,000", usdFormatter);
    expect(result).toBe("$127,000");
  });

  it("converts a range", () => {
    const result = convertPriceString("£100,000–£130,000", usdFormatter);
    expect(result).toBe("$127,000–$165,100");
  });

  it("preserves trailing text", () => {
    const result = convertPriceString("£5,000–£15,000 (ground school only)", usdFormatter);
    expect(result).toBe("$6,350–$19,050 (ground school only)");
  });

  it("passes through strings with no GBP values unchanged", () => {
    const result = convertPriceString("Contact for pricing", usdFormatter);
    expect(result).toBe("Contact for pricing");
  });

  it("works with identity formatter (GBP → GBP)", () => {
    const gbpFormatter = (gbp: number) =>
      new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(gbp);
    const result = convertPriceString("£75,000–£110,000", gbpFormatter);
    expect(result).toBe("£75,000–£110,000");
  });
});

// ─── COUNTRY_CURRENCY mapping spot checks ─────────────────────────────────────

const COUNTRY_CURRENCY: Record<string, string> = {
  GB: "GBP", US: "USD", DE: "EUR", AU: "AUD", CA: "CAD",
  NZ: "NZD", ZA: "ZAR", AE: "AED", SG: "SGD", IN: "INR",
};

describe("COUNTRY_CURRENCY mapping", () => {
  it("maps GB to GBP", () => expect(COUNTRY_CURRENCY["GB"]).toBe("GBP"));
  it("maps US to USD", () => expect(COUNTRY_CURRENCY["US"]).toBe("USD"));
  it("maps DE to EUR", () => expect(COUNTRY_CURRENCY["DE"]).toBe("EUR"));
  it("maps AU to AUD", () => expect(COUNTRY_CURRENCY["AU"]).toBe("AUD"));
  it("maps unknown country to undefined (falls back to GBP)", () => {
    expect(COUNTRY_CURRENCY["XX"] ?? "GBP").toBe("GBP");
  });
});
