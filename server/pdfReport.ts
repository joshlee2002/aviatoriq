/**
 * AviatorIQ Pilot Blueprint PDF Generator
 * Premium version: pulls from AI roadmap output for personalised content.
 * Falls back to lead data if aiRoadmap is not yet generated.
 */
import PDFDocument from "pdfkit";
import { storagePut } from "./storage";
import type { Lead } from "../drizzle/schema";

// ─── Colour palette ───────────────────────────────────────────────────────────
const NAVY = "#0A1628";
const PRIMARY = "#F97316";
const LIGHT_GREY = "#F8FAFC";
const MID_GREY = "#94A3B8";
const DARK_GREY = "#334155";
const WHITE = "#FFFFFF";
const GREEN = "#22C55E";
const AMBER = "#F59E0B";
const RED = "#EF4444";
const BLUE = "#3B82F6";

// ─── AI Roadmap type ──────────────────────────────────────────────────────────
interface TimelineEntry {
  month: string;
  phase: string;
  milestone: string;
  detail: string;
}
interface RiskScenario {
  risk: string;
  likelihood: "High" | "Medium" | "Low";
  impact: "High" | "Medium" | "Low";
  mitigation: string;
}
interface HiddenCostItem {
  item: string;
  estimatedCost: string;
  notes: string;
}
interface SchoolCriterion {
  criterion: string;
  whyItMatters: string;
  questionToAsk: string;
}
interface AiRoadmap {
  pilotGoalSummary?: string;
  keyInsight?: string;
  biggestBarrier?: string;
  barrierDeepDive?: string;
  barrierAdvice?: string;
  strongestAsset?: string;
  recommendedRoute?: string;
  routeRationale?: string;
  estimatedCostMin?: number;
  estimatedCostMax?: number;
  currency?: string;
  estimatedDuration?: string;
  readinessLabel?: string;
  readinessExplanation?: string;
  hiddenCosts?: HiddenCostItem[];
  schoolSelectionCriteria?: SchoolCriterion[];
  monthlyTimeline?: TimelineEntry[];
  riskScenarios?: RiskScenario[];
  careerRealityCheck?: string;
  matchedSchoolRationale?: string;
  nextSteps?: string[];
  thirtyDayActionPlan?: string[];
  medicalAdvice?: string;
  financeConsiderations?: string;
  disclaimer?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function classificationColour(category: string): string {
  if (category === "Hot") return RED;
  if (category === "Warm") return AMBER;
  return BLUE;
}
function classificationLabel(category: string): string {
  if (category === "Hot") return "Flight Ready";
  if (category === "Warm") return "Development Phase";
  return "Exploration Phase";
}
function scoreColour(score: number): string {
  if (score >= 85) return GREEN;
  if (score >= 55) return AMBER;
  return BLUE;
}
function riskColour(level: string): string {
  if (level === "High") return RED;
  if (level === "Medium") return AMBER;
  return GREEN;
}
function drawScoreBar(
  doc: PDFKit.PDFDocument,
  x: number,
  y: number,
  width: number,
  score: number,
  label: string,
  value: number
) {
  const barHeight = 8;
  const fillWidth = Math.round((value / 100) * width);
  doc.fontSize(9).fillColor(DARK_GREY).text(label, x, y, { width: 120 });
  doc.fontSize(9).fillColor(NAVY).text(`${value}/100`, x + width - 40, y, { width: 40, align: "right" });
  doc.roundedRect(x, y + 14, width, barHeight, 4).fill("#E2E8F0");
  if (fillWidth > 0) {
    doc.roundedRect(x, y + 14, fillWidth, barHeight, 4).fill(scoreColour(value));
  }
}
function sectionHeader(doc: PDFKit.PDFDocument, title: string, y: number, pageWidth: number) {
  doc.rect(50, y, pageWidth - 100, 28).fill(NAVY);
  doc.fontSize(11).fillColor(WHITE).font("Helvetica-Bold").text(title, 60, y + 8, { width: pageWidth - 120 });
  return y + 38;
}
function profileRow(
  doc: PDFKit.PDFDocument,
  label: string,
  value: string | null | undefined,
  x: number,
  y: number,
  colWidth: number
) {
  doc.fontSize(9).fillColor(MID_GREY).font("Helvetica").text(label, x, y, { width: colWidth });
  doc.fontSize(9).fillColor(NAVY).font("Helvetica-Bold").text(value || "—", x + colWidth, y, { width: colWidth });
}
function formatCurrency(min: number, max: number, currency: string): string {
  const symbols: Record<string, string> = {
    GBP: "£", USD: "$", AUD: "A$", CAD: "CA$", EUR: "€", NZD: "NZ$", ZAR: "R",
  };
  const sym = symbols[currency] ?? (currency + " ");
  return `${sym}${min.toLocaleString()} – ${sym}${max.toLocaleString()}`;
}
function pageBreakIfNeeded(doc: PDFKit.PDFDocument, y: number, needed: number): number {
  if (y > doc.page.height - needed) {
    doc.addPage();
    return 50;
  }
  return y;
}

// ─── Main generator ───────────────────────────────────────────────────────────
export async function generatePilotBlueprint(
  lead: Lead,
  dimensions?: Record<string, number>,
  labels?: Record<string, string>
): Promise<string> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
      info: { Title: "AviatorIQ Premium Pilot Blueprint", Author: "AviatorIQ" },
    });
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("error", reject);
    doc.on("end", async () => {
      const buffer = Buffer.concat(chunks);
      try {
        const key = `blueprints/${lead.id}-${Date.now()}.pdf`;
        const { url } = await storagePut(key, buffer, "application/pdf");
        resolve(url);
      } catch (err) {
        reject(err);
      }
    });

    // ── Parse AI roadmap if available ──────────────────────────────────────
    let ai: AiRoadmap | null = null;
    if (lead.aiRoadmap) {
      try {
        ai = JSON.parse(lead.aiRoadmap) as AiRoadmap;
      } catch {
        ai = null;
      }
    }

    const pageWidth = doc.page.width;
    const contentWidth = pageWidth - 100;
    const score = lead.leadScore ?? 0;
    const category = lead.leadCategory ?? "Cold";
    const catLabel = classificationLabel(category);
    const catColour = classificationColour(category);

    // ── Cover / Header ──────────────────────────────────────────────────────
    doc.rect(0, 0, pageWidth, 180).fill(NAVY);
    doc.fontSize(22).fillColor(PRIMARY).font("Helvetica-Bold").text("AviatorIQ", 50, 40);
    doc.fontSize(11).fillColor("#93C5FD").font("Helvetica").text("Pilot Career Intelligence Platform", 50, 68);
    doc.fontSize(18).fillColor(WHITE).font("Helvetica-Bold").text("Premium Pilot Blueprint", 50, 100);
    doc.fontSize(11).fillColor("#CBD5E1").font("Helvetica").text(`Prepared for: ${lead.fullName}`, 50, 124);
    doc.fontSize(9).fillColor("#94A3B8").text(
      `Generated: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`,
      50, 142
    );
    const badgeX = pageWidth - 140;
    doc.circle(badgeX + 45, 90, 45).fill(scoreColour(score));
    doc.fontSize(28).fillColor(WHITE).font("Helvetica-Bold").text(`${score}`, badgeX + 18, 72, { width: 54, align: "center" });
    doc.fontSize(9).fillColor(WHITE).font("Helvetica").text("AviatorIQ Score", badgeX + 5, 113, { width: 80, align: "center" });
    doc.roundedRect(badgeX - 10, 138, 100, 22, 4).fill(catColour);
    doc.fontSize(9).fillColor(WHITE).font("Helvetica-Bold").text(catLabel, badgeX - 10, 144, { width: 100, align: "center" });

    let y = 200;

    // ── Score Dimensions ────────────────────────────────────────────────────
    y = sectionHeader(doc, "Your AviatorIQ Score Breakdown", y, pageWidth);
    const dimKeys = ["readiness", "finance", "medical", "career", "pathway"];
    const dimLabels: Record<string, string> = {
      readiness: "Readiness Score",
      finance: "Finance Score",
      medical: "Medical Readiness",
      career: "Career Readiness",
      pathway: "Training Pathway Match",
    };
    for (const key of dimKeys) {
      const val = dimensions?.[key] ?? Math.round(score * (0.8 + Math.random() * 0.4));
      const capped = Math.min(100, Math.max(0, val));
      drawScoreBar(doc, 50, y, contentWidth, score, dimLabels[key] ?? key, capped);
      y += 36;
    }
    y += 10;

    // ── Pilot Profile ───────────────────────────────────────────────────────
    y = pageBreakIfNeeded(doc, y, 200);
    y = sectionHeader(doc, "Your Pilot Profile", y, pageWidth);
    const col = contentWidth / 2;
    const rows: [string, string | null | undefined][] = [
      ["Full Name", lead.fullName],
      ["Country", lead.country],
      ["Age", lead.age ? `${lead.age} years old` : null],
      ["Pilot Goal", lead.pilotGoal],
      ["Preferred Route", lead.preferredRoute],
      ["Start Timeframe", lead.startTimeframe],
      ["Budget Range", lead.budgetRange],
      ["Funding Method", lead.fundingMethod],
      ["Class 1 Medical", lead.class1Medical],
      ["Flying Experience", lead.flyingExperience],
    ];
    for (let i = 0; i < rows.length; i += 2) {
      const [l1, v1] = rows[i]!;
      const [l2, v2] = rows[i + 1] ?? ["", null];
      profileRow(doc, l1, v1, 50, y, 80);
      profileRow(doc, l2, v2, 50 + col + 10, y, 80);
      y += 18;
    }
    y += 10;

    // ── AI Goal Summary ─────────────────────────────────────────────────────
    if (ai?.pilotGoalSummary) {
      y = pageBreakIfNeeded(doc, y, 120);
      y = sectionHeader(doc, "Your Situation", y, pageWidth);
      doc.fontSize(10).fillColor(DARK_GREY).font("Helvetica").text(ai.pilotGoalSummary, 50, y, { width: contentWidth });
      y += doc.heightOfString(ai.pilotGoalSummary, { width: contentWidth }) + 16;
    }

    // ── Readiness Assessment ────────────────────────────────────────────────
    if (ai?.readinessLabel || ai?.readinessExplanation) {
      y = pageBreakIfNeeded(doc, y, 120);
      y = sectionHeader(doc, "Readiness Assessment", y, pageWidth);
      if (ai?.readinessLabel) {
        doc.roundedRect(50, y, 180, 28, 4).fill(catColour);
        doc.fontSize(11).fillColor(WHITE).font("Helvetica-Bold").text(ai.readinessLabel, 50, y + 7, { width: 180, align: "center" });
        y += 38;
      }
      if (ai?.readinessExplanation) {
        doc.fontSize(10).fillColor(DARK_GREY).font("Helvetica").text(ai.readinessExplanation, 50, y, { width: contentWidth });
        y += doc.heightOfString(ai.readinessExplanation, { width: contentWidth }) + 16;
      }
    }

    // ── Recommended Training Route ──────────────────────────────────────────
    y = pageBreakIfNeeded(doc, y, 180);
    y = sectionHeader(doc, "Recommended Training Route", y, pageWidth);
    const route = ai?.recommendedRoute ?? lead.preferredRoute ?? "Modular ATPL";
    doc.fontSize(14).fillColor(NAVY).font("Helvetica-Bold").text(route, 50, y);
    y += 24;
    if (ai?.routeRationale) {
      doc.fontSize(10).fillColor(DARK_GREY).font("Helvetica").text(ai.routeRationale, 50, y, { width: contentWidth });
      y += doc.heightOfString(ai.routeRationale, { width: contentWidth }) + 16;
    }

    // ── Cost & Timeline ─────────────────────────────────────────────────────
    y = pageBreakIfNeeded(doc, y, 120);
    y = sectionHeader(doc, "Estimated Cost & Timeline", y, pageWidth);
    const costStr = (ai?.estimatedCostMin && ai?.estimatedCostMax && ai?.currency)
      ? formatCurrency(ai.estimatedCostMin, ai.estimatedCostMax, ai.currency)
      : "See matched schools for current pricing";
    const durationStr = ai?.estimatedDuration ?? "18 months – 4 years";
    doc.rect(50, y, contentWidth / 2 - 10, 60).fill(LIGHT_GREY);
    doc.fontSize(9).fillColor(MID_GREY).font("Helvetica").text("Estimated Total Cost", 60, y + 8);
    doc.fontSize(13).fillColor(NAVY).font("Helvetica-Bold").text(costStr, 60, y + 22, { width: contentWidth / 2 - 20 });
    doc.rect(50 + contentWidth / 2 + 10, y, contentWidth / 2 - 10, 60).fill(LIGHT_GREY);
    doc.fontSize(9).fillColor(MID_GREY).font("Helvetica").text("Estimated Duration", 60 + contentWidth / 2 + 10, y + 8);
    doc.fontSize(13).fillColor(NAVY).font("Helvetica-Bold").text(durationStr, 60 + contentWidth / 2 + 10, y + 22);
    y += 76;

    // ── Biggest Barrier & Advice ────────────────────────────────────────────
    y = pageBreakIfNeeded(doc, y, 180);
    y = sectionHeader(doc, "Your Biggest Barrier", y, pageWidth);
    const barrier = ai?.biggestBarrier ?? lead.biggestConcern ?? "Unknown";
    doc.roundedRect(50, y, contentWidth, 30, 4).fill("#FEF3C7");
    doc.fontSize(11).fillColor("#92400E").font("Helvetica-Bold").text(barrier, 60, y + 8, { width: contentWidth - 20 });
    y += 42;
    if (ai?.barrierAdvice) {
      doc.fontSize(10).fillColor(DARK_GREY).font("Helvetica").text(ai.barrierAdvice, 50, y, { width: contentWidth });
      y += doc.heightOfString(ai.barrierAdvice, { width: contentWidth }) + 16;
    }

    // ── Strongest Asset ─────────────────────────────────────────────────────
    if (ai?.strongestAsset) {
      y = pageBreakIfNeeded(doc, y, 100);
      doc.roundedRect(50, y, contentWidth, 36, 4).fill("#DCFCE7");
      doc.fontSize(9).fillColor(MID_GREY).font("Helvetica").text("Your Strongest Asset", 60, y + 4, { width: contentWidth - 20 });
      doc.fontSize(10).fillColor("#166534").font("Helvetica-Bold").text(ai.strongestAsset, 60, y + 16, { width: contentWidth - 20 });
      y += doc.heightOfString(ai.strongestAsset, { width: contentWidth - 20 }) + 28;
    }

    // ── Month-by-Month Timeline ─────────────────────────────────────────────
    if (ai?.monthlyTimeline && ai.monthlyTimeline.length > 0) {
      y = pageBreakIfNeeded(doc, y, 200);
      y = sectionHeader(doc, "Your Month-by-Month Training Timeline", y, pageWidth);
      for (const entry of ai.monthlyTimeline) {
        y = pageBreakIfNeeded(doc, y, 100);
        doc.rect(50, y, contentWidth, 24).fill(NAVY);
        doc.fontSize(9).fillColor(PRIMARY).font("Helvetica-Bold").text(entry.month, 60, y + 6, { width: 80 });
        doc.fontSize(9).fillColor(WHITE).font("Helvetica-Bold").text(entry.phase, 150, y + 6, { width: contentWidth - 110 });
        y += 28;
        doc.fontSize(10).fillColor(NAVY).font("Helvetica-Bold").text(entry.milestone, 50, y, { width: contentWidth });
        y += 16;
        doc.fontSize(9).fillColor(DARK_GREY).font("Helvetica").text(entry.detail, 50, y, { width: contentWidth });
        y += doc.heightOfString(entry.detail, { width: contentWidth }) + 14;
      }
      y += 6;
    }

    // ── Risk Scenarios ──────────────────────────────────────────────────────
    if (ai?.riskScenarios && ai.riskScenarios.length > 0) {
      y = pageBreakIfNeeded(doc, y, 200);
      y = sectionHeader(doc, "Your Risk Scenarios & How to Mitigate Them", y, pageWidth);
      for (const risk of ai.riskScenarios) {
        y = pageBreakIfNeeded(doc, y, 110);
        doc.rect(50, y, contentWidth, 26).fill(LIGHT_GREY);
        doc.fontSize(10).fillColor(NAVY).font("Helvetica-Bold").text(risk.risk, 60, y + 6, { width: contentWidth - 160 });
        const lhColour = riskColour(risk.likelihood);
        doc.roundedRect(contentWidth - 40, y + 4, 80, 18, 3).fill(lhColour);
        doc.fontSize(8).fillColor(WHITE).font("Helvetica-Bold").text(`${risk.likelihood} Risk`, contentWidth - 40, y + 8, { width: 80, align: "center" });
        y += 30;
        doc.fontSize(9).fillColor(DARK_GREY).font("Helvetica").text(risk.mitigation, 50, y, { width: contentWidth });
        y += doc.heightOfString(risk.mitigation, { width: contentWidth }) + 14;
      }
      y += 6;
    }

    // ── Medical Advice ──────────────────────────────────────────────────────
    // ── Hidden Costs ──────────────────────────────────────────────────────────
    if (ai?.hiddenCosts && ai.hiddenCosts.length > 0) {
      y = pageBreakIfNeeded(doc, y, 200);
      y = sectionHeader(doc, "Hidden Costs Nobody Tells You About", y, pageWidth);
      doc.fontSize(9).fillColor(DARK_GREY).font("Helvetica").text(
        "These costs are rarely included in school prospectus quotes. Budget for all of them before committing.",
        50, y, { width: contentWidth }
      );
      y += 20;
      for (const cost of ai.hiddenCosts) {
        y = pageBreakIfNeeded(doc, y, 50);
        doc.rect(50, y, contentWidth, 22).fill(LIGHT_GREY);
        doc.fontSize(9).fillColor(NAVY).font("Helvetica-Bold").text(cost.item, 60, y + 6, { width: contentWidth - 160 });
        doc.fontSize(9).fillColor(PRIMARY).font("Helvetica-Bold").text(cost.estimatedCost, contentWidth - 40, y + 6, { width: 80, align: "right" });
        y += 26;
        doc.fontSize(8).fillColor(DARK_GREY).font("Helvetica").text(cost.notes, 60, y, { width: contentWidth - 20 });
        y += doc.heightOfString(cost.notes, { width: contentWidth - 20 }) + 10;
      }
      y += 6;
    }

    // ── School Selection Criteria ──────────────────────────────────────────────
    if (ai?.schoolSelectionCriteria && ai.schoolSelectionCriteria.length > 0) {
      y = pageBreakIfNeeded(doc, y, 200);
      y = sectionHeader(doc, "How to Choose Your School — Questions to Ask", y, pageWidth);
      doc.fontSize(9).fillColor(DARK_GREY).font("Helvetica").text(
        "Ask every school you visit these exact questions. Most candidates never ask them.",
        50, y, { width: contentWidth }
      );
      y += 20;
      for (const c of ai.schoolSelectionCriteria) {
        y = pageBreakIfNeeded(doc, y, 80);
        doc.fontSize(9).fillColor(NAVY).font("Helvetica-Bold").text(c.criterion, 50, y, { width: contentWidth });
        y += 14;
        doc.fontSize(8).fillColor(DARK_GREY).font("Helvetica").text(c.whyItMatters, 50, y, { width: contentWidth });
        y += doc.heightOfString(c.whyItMatters, { width: contentWidth }) + 6;
        doc.fontSize(8).fillColor(PRIMARY).font("Helvetica-Bold").text(`Ask: "${c.questionToAsk}"`, 50, y, { width: contentWidth });
        y += doc.heightOfString(`Ask: "${c.questionToAsk}"`, { width: contentWidth }) + 12;
      }
      y += 6;
    }

    // ── Career Reality Check ───────────────────────────────────────────────────
    if (ai?.careerRealityCheck) {
      y = pageBreakIfNeeded(doc, y, 120);
      y = sectionHeader(doc, "The Full Career Journey — What Happens After Training", y, pageWidth);
      doc.fontSize(10).fillColor(DARK_GREY).font("Helvetica").text(ai.careerRealityCheck, 50, y, { width: contentWidth });
      y += doc.heightOfString(ai.careerRealityCheck, { width: contentWidth }) + 16;
    }

    // ── 30-Day Action Plan ─────────────────────────────────────────────────────
    if (ai?.thirtyDayActionPlan && ai.thirtyDayActionPlan.length > 0) {
      y = pageBreakIfNeeded(doc, y, 200);
      y = sectionHeader(doc, "Your 30-Day Action Plan", y, pageWidth);
      for (let i = 0; i < ai.thirtyDayActionPlan.length; i++) {
        const action = ai.thirtyDayActionPlan[i]!;
        y = pageBreakIfNeeded(doc, y, 40);
        doc.circle(62, y + 6, 8).fill(GREEN);
        doc.fontSize(9).fillColor(WHITE).font("Helvetica-Bold").text(`${i + 1}`, 58, y + 2, { width: 8, align: "center" });
        doc.fontSize(9).fillColor(DARK_GREY).font("Helvetica").text(action, 76, y, { width: contentWidth - 30 });
        y += doc.heightOfString(action, { width: contentWidth - 30 }) + 10;
      }
      y += 10;
    }

    if (ai?.medicalAdvice) {
      y = pageBreakIfNeeded(doc, y, 120);
      y = sectionHeader(doc, "Class 1 Medical — Your Situation", y, pageWidth);
      doc.fontSize(10).fillColor(DARK_GREY).font("Helvetica").text(ai.medicalAdvice, 50, y, { width: contentWidth });
      y += doc.heightOfString(ai.medicalAdvice, { width: contentWidth }) + 16;
    }

    // ── Finance Considerations ──────────────────────────────────────────────
    if (ai?.financeConsiderations) {
      y = pageBreakIfNeeded(doc, y, 120);
      y = sectionHeader(doc, "Finance — Your Options", y, pageWidth);
      doc.fontSize(10).fillColor(DARK_GREY).font("Helvetica").text(ai.financeConsiderations, 50, y, { width: contentWidth });
      y += doc.heightOfString(ai.financeConsiderations, { width: contentWidth }) + 16;
    }

    // ── Matched School Rationale ────────────────────────────────────────────
    if (ai?.matchedSchoolRationale) {
      y = pageBreakIfNeeded(doc, y, 120);
      y = sectionHeader(doc, "Why These Schools Were Matched to You", y, pageWidth);
      doc.fontSize(10).fillColor(DARK_GREY).font("Helvetica").text(ai.matchedSchoolRationale, 50, y, { width: contentWidth });
      y += doc.heightOfString(ai.matchedSchoolRationale, { width: contentWidth }) + 16;
    }

    // ── Your Next 5 Actions ─────────────────────────────────────────────────
    y = pageBreakIfNeeded(doc, y, 250);
    y = sectionHeader(doc, "Your Next 5 Actions", y, pageWidth);
    const actions: string[] = ai?.nextSteps?.slice(0, 5) ?? [
      `Book a Class 1 Aviation Medical to confirm your medical fitness before committing to training costs.`,
      `Research training programmes in ${lead.country ?? "your country"} and request prospectuses from matched schools.`,
      `Arrange a training finance consultation — many schools offer payment plans and specialist aviation lenders exist.`,
      `Join an online pilot community (PPRuNe, Reddit r/flying) to connect with students currently in training.`,
      `Return to AviatorIQ to request introductions to your matched schools.`,
    ];
    for (let i = 0; i < actions.length; i++) {
      y = pageBreakIfNeeded(doc, y, 50);
      doc.circle(62, y + 6, 8).fill(PRIMARY);
      doc.fontSize(9).fillColor(WHITE).font("Helvetica-Bold").text(`${i + 1}`, 58, y + 2, { width: 8, align: "center" });
      doc.fontSize(9).fillColor(DARK_GREY).font("Helvetica").text(actions[i]!, 76, y, { width: contentWidth - 30 });
      y += doc.heightOfString(actions[i]!, { width: contentWidth - 30 }) + 12;
    }
    y += 10;

    // ── CTA ─────────────────────────────────────────────────────────────────
    y = pageBreakIfNeeded(doc, y, 100);
    doc.rect(50, y, contentWidth, 80).fill(NAVY);
    doc.fontSize(13).fillColor(WHITE).font("Helvetica-Bold").text("Ready to speak with a flight school?", 60, y + 12, { width: contentWidth - 20 });
    doc.fontSize(9).fillColor("#CBD5E1").font("Helvetica").text(
      "Return to your AviatorIQ results page to request introductions to your matched schools. They will receive your full profile and contact you directly.",
      60, y + 32, { width: contentWidth - 20 }
    );
    doc.fontSize(9).fillColor(PRIMARY).font("Helvetica-Bold").text(
      `Visit: aviatoriq-production.up.railway.app/results/${lead.id}`,
      60, y + 58, { width: contentWidth - 20 }
    );
    y += 96;

    // ── Disclaimer ──────────────────────────────────────────────────────────
    y = pageBreakIfNeeded(doc, y, 60);
    const disclaimer = ai?.disclaimer ??
      "Disclaimer: This report is generated from your self-reported assessment answers and is intended as general guidance only. Cost estimates, timelines, and school recommendations are indicative and subject to change. AviatorIQ is not a regulated financial adviser or medical authority. Always verify information directly with training providers and qualified professionals before making financial commitments. Costs verified June 2026.";
    doc.fontSize(7).fillColor(MID_GREY).font("Helvetica").text(disclaimer, 50, y, { width: contentWidth });

    doc.end();
  });
}
