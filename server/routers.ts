import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM } from "./_core/llm";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import {
  getPublicPlatformStats,
  createLead,
  createFlightSchool,
  createIntroductionRequest,
  createLeadAssignment,
  createSchoolWaitlistEntry,
  deleteLead,
  deleteFlightSchool,
  createAdminNote,
  getAdminNotesByLeadId,
  getAllLeadsForExport,
  getFlightSchoolById,
  getIntroductionRequestsByLeadId,
  getLeadAssignments,
  getLeadById,
  getLeadAnalytics,
  getLaunchStats,
  listAllIntroductionRequests,
  listFlightSchools,
  listLeads,
  listSchoolWaitlist,
  matchSchoolsForLead,
  updateFlightSchool,
  updateLead,
} from "./db";
import { scoreLead } from "./scoring";
import { generatePilotBlueprint } from "./pdfReport";
import { scoreLicenceQuiz } from "./licenceQuizScoring";
import {
  createLicenceQuizLead,
  getLicenceQuizStats,
  updateLicenceQuizEmail,
  createFinanceInterest,
  createFlightDeckShare,
  getFlightDeckShare,
  createCalcSession,
  createFlightDeckEmailCapture,
  getLatestLeadByEmail,
  listPilotJobs,
  createPilotJob,
  updatePilotJob,
  deletePilotJob,
  listPilotStories,
  createPilotStory,
  updatePilotStory,
  deletePilotStory,
} from "./db";
import { nanoid } from "nanoid";
import Stripe from "stripe";
import { sendEmail } from "./_core/email";
import WelcomeBlueprint from "./emails/WelcomeBlueprint";
import IntroductionConfirmation from "./emails/IntroductionConfirmation";
import * as React from "react";
import {
  createRoadmapPurchase,
  completeRoadmapPurchase,
  getRoadmapPurchaseByLead,
} from "./db";
import { getAppUrl } from "./_core/appUrl";
import { parseAndNormaliseRoadmap } from "./roadmapSchema";

// ─── Admin guard ──────────────────────────────────────────────────────────────
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== "admin") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Admin access required",
    });
  }
  return next({ ctx });
});

// ─── Lead submission schema ───────────────────────────────────────────────────
const leadSubmitSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(254),
  phone: z.string().max(30).optional(),
  country: z.string().max(80).optional(),
  city: z.string().max(100).optional(),
  age: z.number().int().min(14).max(99).optional(),
  pilotGoal: z.string().max(200).optional(),
  seriousness: z.string().max(200).optional(),
  spokenToSchool: z.string().max(200).optional(),
  preferredRoute: z.string().max(100).optional(),
  openToAbroad: z.string().max(50).optional(),
  fundingMethod: z.string().max(100).optional(),
  budgetRange: z.string().max(100).optional(),
  wantsFinanceInfo: z.string().max(50).optional(),
  educationLevel: z.string().max(100).optional(),
  class1Medical: z.string().max(100).optional(),
  flyingExperience: z.string().max(100).optional(),
  rightToWorkStudy: z.string().max(100).optional(),
  biggestConcern: z.string().max(500).optional(),
  startTimeframe: z.string().max(100).optional(),
  wantsSchoolContact: z.string().max(50).optional(),
  preferredContact: z.string().max(50).optional(),
  source: z.string().max(200).optional(),
  contactConsentSchools: z.boolean().optional(),
  contactConsentFinance: z.boolean().optional(),
  contactConsentMedical: z.boolean().optional(),
  contactConsentPartners: z.boolean().optional(),
  consentToContact: z.boolean(),
  consentToShare: z.boolean(),
  writtenAnswer: z.string().max(1000).optional(),
});

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── Leads ────────────────────────────────────────────────────────────────
  leads: router({
    submit: publicProcedure
      .input(leadSubmitSchema)
      .mutation(async ({ input }) => {
        if (!input.consentToContact) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Consent is required",
          });
        }

        // Score the lead
        const scoreResult = scoreLead({
          pilotGoal: input.pilotGoal,
          seriousness: input.seriousness,
          spokenToSchool: input.spokenToSchool,
          fundingMethod: input.fundingMethod,
          budgetRange: input.budgetRange,
          wantsFinanceInfo: input.wantsFinanceInfo,
          age: input.age,
          class1Medical: input.class1Medical,
          flyingExperience: input.flyingExperience,
          rightToWorkStudy: input.rightToWorkStudy,
          phone: input.phone,
          writtenAnswer: input.writtenAnswer,
          preferredRoute: input.preferredRoute,
          country: input.country,
          startTimeframe: input.startTimeframe,
          biggestConcern: input.biggestConcern,
        });
        const { score, category, intentScore } = scoreResult;

        // Generate AI summary (non-blocking, best-effort)
        let aiSummary: string | undefined;
        try {
          const summaryPrompt = `You are an aviation training advisor. Summarise this pilot training enquiry in 2-3 sentences for an admin dashboard. Lead with their biggest stated barrier, then their commitment level, then their readiness. Be concise and factual.

Lead details:
- Name: ${input.fullName}
- Country: ${input.country ?? "Unknown"}
- Age: ${input.age ?? "Unknown"}
- Pilot goal: ${input.pilotGoal ?? "Unknown"}
- Commitment level (what they've done): ${input.spokenToSchool ?? "Unknown"}
- How often they think about it: ${input.seriousness ?? "Unknown"}
- Biggest stated barrier: ${input.biggestConcern ?? "Unknown"}
- Training route: ${input.preferredRoute ?? "Unknown"}
- Budget: ${input.budgetRange ?? "Unknown"}
- Funding method: ${input.fundingMethod ?? "Unknown"}
- Start timeframe: ${input.startTimeframe ?? "Unknown"}
- Medical confidence: ${input.class1Medical ?? "Unknown"}
- Flying experience: ${input.flyingExperience ?? "Unknown"}
- Written answer: ${input.writtenAnswer ?? "None"}

AviatorIQ Score: ${score}/100 (${category})`;

          const response = await invokeLLM({
            model: process.env.LLM_MODEL || "gpt-4.1-mini",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful aviation training advisor assistant. Be concise and professional.",
              },
              { role: "user", content: summaryPrompt },
            ],
          });
          const rawSummaryContent = response.choices[0]?.message?.content;
          if (typeof rawSummaryContent === "string") {
            aiSummary = rawSummaryContent;
          } else if (Array.isArray(rawSummaryContent)) {
            const textPart = rawSummaryContent.find(
              (p): p is { type: "text"; text: string } =>
                typeof p === "object" && p !== null && (p as any).type === "text"
            );
            aiSummary = textPart?.text;
          }
        } catch (e) {
          console.warn("[AI] Summary generation failed:", e);
        }

        // Compute lead value (admin-only, not shown to user)
        const leadValue = (() => {
          if (
            score >= 75 &&
            (input.startTimeframe === "As soon as possible — I'm ready now" ||
              input.startTimeframe === "Within the next 12 months" ||
              input.startTimeframe === "Immediately" ||
              input.startTimeframe === "Within 3 months" ||
              input.startTimeframe === "Within 6 months")
          )
            return "High";
          if (score >= 45) return "Medium";
          return "Low";
        })();

        // Normalise optional string fields: undefined and empty string both become null
        const ns = (v: string | undefined | null): string | null =>
          v === undefined || v === "" ? null : v;

        // Attempt to save lead to DB; fall back to an in-memory ID if DB is unavailable
        let leadId: number;
        try {
          leadId = await createLead({
            fullName: input.fullName,
            email: input.email,
            phone: ns(input.phone),
            country: ns(input.country),
            city: ns(input.city),
            age: input.age ?? null,
            pilotGoal: ns(input.pilotGoal),
            seriousness: ns(input.seriousness),
            spokenToSchool: ns(input.spokenToSchool),
            preferredRoute: ns(input.preferredRoute),
            openToAbroad: ns(input.openToAbroad),
            fundingMethod: ns(input.fundingMethod),
            budgetRange: ns(input.budgetRange),
            wantsFinanceInfo: ns(input.wantsFinanceInfo),
            educationLevel: ns(input.educationLevel),
            class1Medical: ns(input.class1Medical),
            flyingExperience: ns(input.flyingExperience),
            rightToWorkStudy: ns(input.rightToWorkStudy),
            biggestConcern: ns(input.biggestConcern),
            startTimeframe: ns(input.startTimeframe),
            wantsSchoolContact: ns(input.wantsSchoolContact),
            preferredContact: ns(input.preferredContact),
            source: ns(input.source),
            contactConsentSchools: input.contactConsentSchools ?? true,
            contactConsentFinance: input.contactConsentFinance ?? false,
            contactConsentMedical: input.contactConsentMedical ?? false,
            contactConsentPartners: input.contactConsentPartners ?? false,
            consentToContact: input.consentToContact,
            consentToShare: input.consentToShare,
            writtenAnswer: ns(input.writtenAnswer),
            aiSummary: aiSummary ?? null,
            leadScore: score,
            leadCategory: category,
            leadValue,
            intentScore,
            leadTags: scoreResult.leadTags.join(","),
            status: "New",
          });
        } catch (dbErr) {
          console.error(
            "[DB] Lead save FAILED — sending backup notification:",
            dbErr
          );
          // Send backup notification with full lead payload so no data is lost
          const backupPayload = JSON.stringify(
            {
              fullName: input.fullName,
              email: input.email,
              phone: input.phone ?? null,
              country: input.country ?? null,
              age: input.age ?? null,
              pilotGoal: input.pilotGoal ?? null,
              budgetRange: input.budgetRange ?? null,
              startTimeframe: input.startTimeframe ?? null,
              leadScore: score,
              leadCategory: category,
              consentToContact: input.consentToContact,
              dbError: String(dbErr),
            },
            null,
            2
          );
          try {
            await notifyOwner({
              title: `⚠️ DB SAVE FAILED — Lead backup: ${input.fullName}`,
              content: `A lead submission could not be saved to the database.\n\nFull payload:\n${backupPayload}`,
            });
          } catch (notifyErr) {
            console.error("[DB] Backup notification also failed:", notifyErr);
          }
          // Do NOT return a fake ID — throw so the client shows a real error
          // rather than a broken results page with a non-existent lead ID.
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message:
              "We couldn't save your submission right now. Your details have been captured and our team will be in touch. Please try again in a few minutes.",
          });
        }

        // Generate PDF blueprint (non-blocking, best-effort)
        const leadForPdf = await getLeadById(leadId);
        if (leadForPdf) {
          generatePilotBlueprint(
            leadForPdf,
            scoreResult.dimensions,
            scoreResult.labels
          )
            .then(async pdfUrl => {
              await updateLead(leadId, { pdfKey: pdfUrl });
            })
            .catch(e => console.warn("[PDF] Blueprint generation failed:", e));
        }

        // Notify owner on Hot leads
        if (category === "Hot") {
          try {
            await notifyOwner({
              title: `🔥 Hot Lead: ${input.fullName}`,
              content: `New hot lead submitted!\n\nName: ${input.fullName}\nEmail: ${input.email}\nCountry: ${input.country ?? "Unknown"}\nGoal: ${input.pilotGoal ?? "Unknown"}\nBudget: ${input.budgetRange ?? "Unknown"}\nTimeframe: ${input.startTimeframe ?? "Unknown"}\nScore: ${score}/100\n\nAI Summary: ${aiSummary ?? "Generating..."}`,
            });
          } catch (e) {
            console.warn("[Notification] Owner notify failed:", e);
          }
        }

        // Send welcome email (non-blocking, fire-and-forget)
        sendEmail({
          to: input.email,
          subject: `Your AviatorIQ Blueprint is ready, ${input.fullName.split(" ")[0]}`,
          react: React.createElement(WelcomeBlueprint, {
            firstName: input.fullName.split(" ")[0],
            score,
            category: category as "Hot" | "Warm" | "Cold",
            resultsUrl: `${getAppUrl()}/results/${leadId}`,
          }),
        }).catch(e => console.warn("[Email] Welcome email failed (non-fatal):", e));

        // Match schools
        const matchedSchools = await matchSchoolsForLead({
          country: input.country,
          preferredRoute: input.preferredRoute,
          budgetRange: input.budgetRange,
          wantsFinanceInfo: input.wantsFinanceInfo,
          openToAbroad: input.openToAbroad,
        });

        return {
          leadId,
          score,
          category,
          leadValue,
          matchedSchools,
          dimensions: scoreResult.dimensions,
          labels: scoreResult.labels,
                    nextAction: scoreResult.nextAction,
          biggestRisk: scoreResult.biggestRisk,
          estimatedCostRange: scoreResult.estimatedCostRange,
          estimatedTimeline: scoreResult.estimatedTimeline,
          recommendedRoute: scoreResult.recommendedRoute,
          strongestAsset: scoreResult.strongestAsset,
          fundingGap: scoreResult.fundingGap,
          leadTags: scoreResult.leadTags,
        };
      }),
    getResult: publicProcedure
      .input(z.object({ leadId: z.number() }))
      .query(async ({ input }) => {
        const lead = await getLeadById(input.leadId);
        if (!lead) throw new TRPCError({ code: "NOT_FOUND" });

        const matchedSchools = await matchSchoolsForLead({
          country: lead.country,
          preferredRoute: lead.preferredRoute,
          budgetRange: lead.budgetRange,
          wantsFinanceInfo: lead.wantsFinanceInfo,
          openToAbroad: lead.openToAbroad,
        });

        // Detect if global fallback was used (schools from other countries mixed in)
        const localSchoolCount = matchedSchools.filter(
          s => !lead.country || s.country === lead.country
        ).length;
        const schoolsAreGlobal =
          matchedSchools.length > 0 && localSchoolCount < 3 && !!lead.country;

        const scoreResult = scoreLead({
          pilotGoal: lead.pilotGoal,
          seriousness: lead.seriousness,
          spokenToSchool: lead.spokenToSchool,
          fundingMethod: lead.fundingMethod,
          budgetRange: lead.budgetRange,
          wantsFinanceInfo: lead.wantsFinanceInfo,
          age: lead.age,
          class1Medical: lead.class1Medical,
          flyingExperience: lead.flyingExperience,
          rightToWorkStudy: lead.rightToWorkStudy,
          phone: lead.phone,
          writtenAnswer: lead.writtenAnswer,
          preferredRoute: lead.preferredRoute,
          country: lead.country,
          startTimeframe: lead.startTimeframe,
          biggestConcern: lead.biggestConcern,
        });
        // Normalise aiRoadmap in the lead object before returning.
        // This ensures legacy field names (risk/likelihood) in old stored roadmaps
        // are remapped on the way out, regardless of which path the frontend uses.
        const normalisedLead = lead.aiRoadmap
          ? {
              ...lead,
              aiRoadmap: JSON.stringify(
                parseAndNormaliseRoadmap(lead.aiRoadmap, "getResult")
              ),
            }
          : lead;

        return {
          lead: normalisedLead,
          matchedSchools,
          schoolsAreGlobal,
          dimensions: scoreResult.dimensions,
          labels: scoreResult.labels,
          nextAction: scoreResult.nextAction,
          biggestRisk: scoreResult.biggestRisk,
          estimatedCostRange: scoreResult.estimatedCostRange,
          estimatedTimeline: scoreResult.estimatedTimeline,
          recommendedRoute: scoreResult.recommendedRoute,
        };
      }),

    retrieveByEmail: publicProcedure
      .input(z.object({ email: z.string().email() }))
      .mutation(async ({ input }) => {
        const lead = await getLatestLeadByEmail(input.email);
        if (!lead) {
          // Return success regardless to prevent email enumeration
          return { sent: true };
        }
        const appUrl = getAppUrl();
        const resultsUrl = `${appUrl}/results/${lead.id}`;
        // Send results link email
        try {
          await sendEmail({
            to: input.email,
            subject: "Your AviatorIQ results link",
            react: React.createElement(WelcomeBlueprint, {
              firstName: lead.fullName?.split(" ")[0] ?? "there",
              score: lead.leadScore,
              category: lead.leadCategory as "Hot" | "Warm" | "Cold",
              resultsUrl,
            }),
          });
        } catch (e) {
          console.warn("[Retrieve] Email send failed:", e);
        }
        return { sent: true };
      }),

    getPdfUrl: publicProcedure
      .input(z.object({ leadId: z.number(), requirePremium: z.boolean().optional() }))
      .query(async ({ input }) => {
        const lead = await getLeadById(input.leadId);
        if (!lead) throw new TRPCError({ code: "NOT_FOUND" });
        // Gate PDF behind premium purchase if requirePremium is set
        if (input.requirePremium) {
          const purchase = await getRoadmapPurchaseByLead(input.leadId);
          if (purchase?.status !== "complete") {
            return { pdfUrl: null, requiresPurchase: true };
          }
        }
        return { pdfUrl: lead.pdfKey ?? null, requiresPurchase: false };
      }),

    generateRoadmap: publicProcedure
      .input(
        z.object({
          leadId: z.number(),
          // Optional client-side lead data for when DB is unavailable
          leadData: z
            .object({
              fullName: z.string().optional(),
              age: z.number().optional().nullable(),
              country: z.string().optional().nullable(),
              pilotGoal: z.string().optional().nullable(),
              biggestConcern: z.string().optional().nullable(),
              spokenToSchool: z.string().optional().nullable(),
              seriousness: z.string().optional().nullable(),
              preferredRoute: z.string().optional().nullable(),
              budgetRange: z.string().optional().nullable(),
              fundingMethod: z.string().optional().nullable(),
              wantsFinanceInfo: z.string().optional().nullable(),
              class1Medical: z.string().optional().nullable(),
              flyingExperience: z.string().optional().nullable(),
              startTimeframe: z.string().optional().nullable(),
              openToAbroad: z.string().optional().nullable(),
              writtenAnswer: z.string().optional().nullable(),
              leadScore: z.number().optional().nullable(),
              leadCategory: z.string().optional().nullable(),
            })
            .optional(),
        })
      )
      .mutation(async ({ input }) => {
        const dbLead = await getLeadById(input.leadId);
        // Use DB lead if available, otherwise fall back to client-provided data
        const lead =
          dbLead ??
          (input.leadData
            ? ({ ...input.leadData, id: input.leadId, aiRoadmap: null } as any)
            : null);
        if (!lead) throw new TRPCError({ code: "NOT_FOUND" });

        // ── Input sanitisation: strip prompt injection attempts from free-text fields ──
        const sanitiseField = (
          val: string | null | undefined
        ): string | null => {
          if (!val) return null;
          // Truncate to 500 chars max
          const truncated = String(val).slice(0, 500);
          // Remove common prompt injection patterns
          return truncated
            .replace(
              /ignore (previous|above|all) instructions?/gi,
              "[redacted]"
            )
            .replace(
              /you are now|act as|pretend (you are|to be)/gi,
              "[redacted]"
            )
            .replace(/<\/?[a-z][^>]*>/gi, "") // strip HTML tags
            .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, ""); // strip control chars
        };
        const safeFullName = sanitiseField(lead.fullName) ?? "Candidate";
        const safeWrittenAnswer =
          sanitiseField(lead.writtenAnswer) ?? "None provided";
        const safeBiggestConcern =
          sanitiseField(lead.biggestConcern) ?? "Unknown";

        // Return cached roadmap if available.
        // Always run through parseAndNormaliseRoadmap so legacy field names
        // (e.g. risk/likelihood from old stored roadmaps) are remapped on the way out.
        if (lead.aiRoadmap) {
          const normalisedCached = parseAndNormaliseRoadmap(lead.aiRoadmap, "DB cache");
          return { roadmap: JSON.stringify(normalisedCached) };
        }

        // ── Fetch matched schools to inject verified data into the prompt ─────────
        const matchedSchoolsForPrompt = await matchSchoolsForLead({
          country: lead.country,
          preferredRoute: lead.preferredRoute,
          budgetRange: lead.budgetRange,
          wantsFinanceInfo: lead.wantsFinanceInfo,
          openToAbroad: lead.openToAbroad,
        });
        const schoolContext =
          matchedSchoolsForPrompt.length > 0
            ? matchedSchoolsForPrompt
                .map(
                  (s) =>
                    `- ${s.name} (${s.city ?? s.country}): ${s.priceRange ?? "price not published"}, Finance: ${s.financeAvailable}, Airline partnerships: ${s.airlinePartnerships ?? "none listed"}`
                )
                .join("\n")
            : "No matched schools found — recommend the candidate research schools directly.";

        // ── Verified 2026 market cost data by country ──────────────────────────
        const VERIFIED_MARKET_DATA: Record<string, string> = {
          "United Kingdom":
            "UK Integrated ATPL (2026 verified): Skyborne £131,400 (open, Ryanair Future Flyer partnership, Gloucestershire/Bournemouth/Florida); CAE/easyJet Generation MPL €115,000 (open, easyJet guaranteed interview); Acron Aviation Academy (formerly L3Harris) £94,500 — CLOSED for new cadets as of April 2025. Modular route: CPL/IR/MCC typically £45,000–£70,000 across multiple schools. FTA Global Brighton is PERMANENTLY CLOSED (collapsed May 2023 — do not recommend). Finance: BBVA, Caledonian, Barclays aviation loans available. Note: costs verified June 2026 — confirm directly with schools.",
          "United States":
            "USA (2026 verified): ATP Flight School Airline Career Pilot Program $123,995 fixed-cost (open, 88 locations, American/Delta/United Career Tracks); United Aviate Academy $111,700 (open, direct United Airlines First Officer pathway); Embry-Riddle Aeronautical University ~$80,000–$120,000 total flight costs (open, Delta Propel/United Aviate partnerships); Delta Propel Career Path — financial assistance available, open to AABI-accredited university students. R-ATP minimum 1,000 hours at Part 141 schools vs 1,500 hours Part 61. GI Bill covers up to $28,937/year for eligible veterans.",
          "Australia":
            "Australia (2026 verified): CAE Melbourne (formerly Oxford Aviation) Integrated CPL MECIR A$101,350 inc GST (open, CASA approved); Qantas Group Pilot Academy ~A$160,000+ (open, Toowoomba QLD, scholarships up to A$30,000 for accommodation, no guaranteed job). Modular route: CPL + ME IR typically A$60,000–A$90,000. CASA requires minimum 200 hours for CPL. Note: costs verified June 2026.",
          "Canada":
            "Canada (2026 verified): Seneca College Honours Bachelor of Aviation Technology ~CAD $69,376 domestic / CAD $246,087 international (open, Jazz Aviation cadet pathway). Modular CPL + ME IR typically CAD $80,000–$120,000. Transport Canada CPL minimum 200 hours. OSAP and aviation-specific loans available.",
          "Europe":
            "Europe (2026 verified): Lufthansa European Flight Academy €120,000 integrated ATPL (open, Lufthansa Group priority hiring, Brain Capital ISA financing with only €10,000 initial contribution, 50% reimbursement promise if no job offer within 24 months); CAE Madrid €116,000 EASA integrated ATPL (open). EASA fATPL requires 1,500 hours for unrestricted ATPL. Modular route across multiple EASA states typically €50,000–€80,000.",
          "United Arab Emirates":
            "UAE (2026 verified): Emirates Flight Training Academy USD $220,500 integrated ATPL (open, intakes every 2 months, 104-week programme, exclusive Emirates application pathway, fully sponsored for UAE nationals); Etihad Aviation Training — MPL only, not available for self-funded individuals, airline partnership access only. GCAA Class 1 medical required before enrolment.",
          "New Zealand":
            "New Zealand (2026 verified): Air New Zealand Mangōpare Cadetship — CURRENTLY CLOSED for applications. When open: cadets fund ~NZD $53,500 (20-30% of total cost), 14-month accelerated programme, 5-year service commitment required. Modular CPL + ME IR NZD $80,000–$120,000 at independent schools. CAA NZ CPL minimum 200 hours.",
          "South Africa":
            "South Africa (2026 verified): SACAA CPL minimum 200 hours. Integrated programmes typically ZAR 800,000–ZAR 1,200,000. Modular CPL + IR typically ZAR 400,000–ZAR 700,000. NSFAS does not cover aviation training. Aviation-specific bursaries from SAA and Airlink available. Comair is liquidated (2022) — do not reference. FlySafair and Airlink are active regional carriers for career pathways.",
        };
        const marketData =
          VERIFIED_MARKET_DATA[lead.country ?? ""] ??
          "No specific verified market data available for this country — advise the candidate to research local aviation authority-approved schools directly and verify costs in person.";

        const prompt = `You are an expert aviation career advisor with deep knowledge of pilot training across the UK, USA, Australia, Canada, Europe, UAE, New Zealand, and South Africa. Generate a premium personalised pilot training roadmap for this candidate. Format your response as structured JSON.

CRITICAL INSTRUCTIONS:
1. You MUST use the verified 2026 market data and matched schools provided below — do NOT rely on your training data for costs, school names, or programme status. If a school is listed as CLOSED, do not recommend it.
2. This roadmap must be brutally honest and deeply personalised. Generic advice is not acceptable. Every section must reference specific details from the candidate's profile.
3. The month-by-month timeline must be realistic for their specific route, country, budget, and start timeframe — not a generic template.
4. The risk scenarios must address the specific risks for THIS candidate based on their barrier, medical confidence, funding method, and age — not generic aviation risks.
5. Cost figures must be in the local currency of the candidate's country (GBP for UK, USD for USA, AUD for Australia, CAD for Canada, EUR for Europe, USD for UAE, NZD for New Zealand, ZAR for South Africa).
6. The hidden costs section must be brutally honest — research shows 80% of student pilots underestimate costs and drop out. Help this candidate avoid that by naming the specific costs they haven't budgeted for.
7. The school selection criteria must be actionable — give them the exact questions to ask schools, not generic advice.
8. The career reality check must be honest about the full journey: training → time building → regional FO → captain upgrade. Most candidates have no idea this takes 5–15 years total.

═══════════════════════════════════════
CANDIDATE PROFILE
═══════════════════════════════════════
- Name: ${safeFullName}
- Age: ${lead.age ?? "Unknown"}
- Country: ${lead.country ?? "Unknown"}
- Pilot goal: ${lead.pilotGoal ?? "Unknown"}
- Biggest stated barrier: ${safeBiggestConcern}
- What they've already done: ${lead.spokenToSchool ?? "Unknown"}
- How often they think about it: ${lead.seriousness ?? "Unknown"}
- Preferred route: ${lead.preferredRoute ?? "Unknown"}
- Budget: ${lead.budgetRange ?? "Unknown"}
- Funding method: ${lead.fundingMethod ?? "Unknown"}
- Wants finance info: ${lead.wantsFinanceInfo ?? "Unknown"}
- Medical confidence: ${lead.class1Medical ?? "Unknown"}
- Flying experience: ${lead.flyingExperience ?? "Unknown"}
- Education level: ${lead.educationLevel ?? "Unknown"}
- Right to work/study: ${lead.rightToWorkStudy ?? "Unknown"}
- Start timeframe: ${lead.startTimeframe ?? "Unknown"}
- Open to training abroad: ${lead.openToAbroad ?? "Unknown"}
- AviatorIQ Score: ${lead.leadScore}/100 (${lead.leadCategory === "Hot" ? "Flight Ready" : lead.leadCategory === "Warm" ? "Development Phase" : "Exploration Phase"})
- In their own words: ${safeWrittenAnswer}

═══════════════════════════════════════
VERIFIED 2026 MARKET DATA (USE THIS — NOT YOUR TRAINING DATA)
═══════════════════════════════════════
${marketData}

═══════════════════════════════════════
MATCHED SCHOOLS FROM DATABASE
═══════════════════════════════════════
${schoolContext}

Return a JSON object with EXACTLY these keys. Do not add or remove keys:
{
  "pilotGoalSummary": "2-3 sentences. Summarise their specific goal, current situation, and what makes their profile unique. Reference their country, age, and what they've already done.",
  "keyInsight": "1 powerful, honest insight that most aspiring pilots never hear — specific to THIS candidate's profile. Not encouragement. A genuine insight that could change how they approach their training journey. E.g. if they're 34 and self-funding modular, tell them the real timeline to first airline job. If they have medical uncertainty, tell them to get the medical done before spending a penny on training. This should feel like advice from a trusted mentor who has seen hundreds of pilots succeed and fail.",
  "biggestBarrier": "Name their single biggest barrier in plain English — be specific and honest. Not a list — one clear barrier.",
  "barrierDeepDive": "4-5 sentences of deep, honest analysis of their biggest barrier. Go beyond surface advice. If cost is the barrier: explain the real cost breakdown including hidden costs (headset £300-£1000, ground school materials £500, exam fees £200 each x 14 ATPL exams, medical £300-£600, MCC £3,000-£5,000, type rating £15,000-£25,000 not included in school quotes). If medical is the barrier: explain the specific conditions that are commonly flagged, the SOLI/RVSM process, and that most conditions are manageable with the right AME. If confidence is the barrier: explain the 15-hour cliff that 80% of student pilots hit and how to prepare for it mentally. Always be specific to their profile.",
  "barrierAdvice": "3-4 sentences of specific, actionable advice to address their biggest barrier. Use real options from the verified market data above. Name specific programmes, lenders, or steps where relevant.",
  "strongestAsset": "2 sentences. What is genuinely working in their favour — be specific to their profile, not generic encouragement.",
  "recommendedRoute": "The recommended training route name (e.g. Integrated ATPL, Modular ATPL, FAA Part 141, CASA CPL)",
  "routeRationale": "3-4 sentences explaining exactly why this route suits this specific person — reference their budget, timeline, country, and goal. If their preferred route differs from your recommendation, explain why.",
  "estimatedCostMin": number (local currency, no symbol — just the number),
  "estimatedCostMax": number (local currency, no symbol — just the number),
  "currency": "GBP | USD | AUD | CAD | EUR | NZD | ZAR",
  "estimatedDuration": "e.g. 18-24 months — be specific to their route and country",
  "readinessLabel": "Flight Ready | Development Phase | Exploration Phase",
  "readinessExplanation": "2-3 sentences about their readiness — be honest, not just encouraging. If they have gaps, name them.",
  "hiddenCosts": [
    { "item": "Cost item name", "estimatedCost": "e.g. £300-£1,000", "notes": "1 sentence explaining when this cost hits and why it's often missed" }
  ],
  "schoolSelectionCriteria": [
    { "criterion": "What to check", "whyItMatters": "1-2 sentences on why this matters for THIS candidate specifically", "questionToAsk": "The exact question to ask the school" }
  ],
  "monthlyTimeline": [
    { "month": "Month 1-2", "phase": "Phase name", "milestone": "Specific milestone", "detail": "2-3 sentences of specific guidance for this phase, referencing their country and route", "cost": "Optional: estimated cost for this phase if significant" },
    { "month": "Month 3-4", "phase": "Phase name", "milestone": "Specific milestone", "detail": "2-3 sentences of specific guidance for this phase", "cost": null },
    { "month": "Month 5-8", "phase": "Phase name", "milestone": "Specific milestone", "detail": "2-3 sentences of specific guidance for this phase", "cost": null },
    { "month": "Month 9-14", "phase": "Phase name", "milestone": "Specific milestone", "detail": "2-3 sentences of specific guidance for this phase", "cost": null },
    { "month": "Month 15-18", "phase": "Phase name", "milestone": "Specific milestone", "detail": "2-3 sentences of specific guidance for this phase", "cost": null },
    { "month": "Month 19-24", "phase": "Phase name", "milestone": "Specific milestone", "detail": "2-3 sentences of specific guidance for this phase", "cost": null }
  ],
  "riskScenarios": [
    { "scenario": "Risk title", "probability": "High | Medium | Low", "mitigation": "2-3 sentences of specific mitigation advice for THIS candidate based on their profile" },
    { "scenario": "Risk title", "probability": "High | Medium | Low", "mitigation": "2-3 sentences of specific mitigation advice for THIS candidate" },
    { "scenario": "Risk title", "probability": "High | Medium | Low", "mitigation": "2-3 sentences of specific mitigation advice for THIS candidate" }
  ],
  "careerRealityCheck": "3-4 sentences giving an honest picture of the full career journey AFTER training. Include: typical time from licence to first airline job (6-18 months), regional FO starting salary, time to captain upgrade (2-7 years at regional, 5-15 years at major), and the seniority system reality. Be honest — most candidates only think about training, not the 10-15 years after it.",
  "matchedSchoolRationale": "2-3 sentences explaining what type of school suits this candidate and why, based on their profile and the matched schools above. Reference specific school names if relevant.",
  "nextSteps": ["Specific step 1 — must reference their country/route", "Specific step 2", "Specific step 3", "Specific step 4", "Specific step 5"],
  "thirtyDayActionPlan": ["Day 1-3: Specific action", "Day 4-7: Specific action", "Day 8-14: Specific action", "Day 15-21: Specific action", "Day 22-30: Specific action"],
  "medicalAdvice": "2-3 sentences about Class 1 Medical relevant to their specific situation and country. If they have concerns, address them directly and name the specific AME process for their country.",
  "financeConsiderations": "2-3 sentences about financing specific to their budget, funding method, and country. Name real options from the verified market data.",
  "disclaimer": "This report is guidance only and not official career, medical or financial advice. Costs are verified as of June 2026 but subject to change — always confirm directly with training providers before committing."
}

IMPORTANT RULES:
- The monthlyTimeline must be tailored to their specific route and country — not a generic template.
- The riskScenarios must be the 3 most relevant risks for THIS specific candidate. If their medical confidence is low, that must be a risk. If their funding method is a loan, debt risk must appear. If they are over 40, age-related airline hiring must appear as a risk.
- The hiddenCosts must include at least 5 items that are genuinely missed by most candidates — not just the headline training cost.
- The schoolSelectionCriteria must include at least 4 criteria with specific questions to ask, tailored to their route and country.
- The thirtyDayActionPlan must be genuinely actionable — specific tasks for each time window, not vague suggestions.
- The careerRealityCheck must be honest about the post-training journey, not just the training itself.
- The keyInsight must be something they could not get from a generic guide — it must be specific to their exact profile.`;

        // ── Graceful degradation: if OpenAI is unavailable, return structured fallback ──
        let roadmap: string;
        try {
          const response = await invokeLLM({
            model: process.env.LLM_MODEL || "gpt-4.1-mini",
            messages: [
              {
                role: "system",
                content:
                  "You are an expert aviation career advisor. Always respond with valid JSON only, no markdown.",
              },
              { role: "user", content: prompt },
            ],
            response_format: { type: "json_object" },
          });
          const rawContent = response.choices[0]?.message?.content;
          // content can be a string OR an array of content parts (e.g. [{type:"text",text:"{...}"}])
          if (typeof rawContent === "string") {
            roadmap = rawContent;
          } else if (Array.isArray(rawContent)) {
            // Extract text from the first text-type content part
            const textPart = rawContent.find(
              (p): p is { type: "text"; text: string } =>
                typeof p === "object" && p !== null && (p as any).type === "text"
            );
            roadmap = textPart?.text ?? "{}";
          } else {
            roadmap = "{}";
          }
          // Sanity check: if we got an empty or non-JSON string, throw to trigger fallback
          if (!roadmap || roadmap.trim() === "{}" || roadmap.trim() === "") {
            throw new Error("LLM returned empty or invalid JSON content");
          }
        } catch (llmErr) {
          console.warn(
            "[Roadmap] LLM unavailable, returning structured fallback:",
            (llmErr as Error).message
          );
          // Build a deterministic fallback roadmap from lead data alone
          const fallback = {
            pilotGoalSummary: `${lead.fullName ?? "You"} ${lead.pilotGoal ? `want to become a ${lead.pilotGoal} pilot` : "are exploring a career in aviation"}. ${lead.country ? `Based in ${lead.country}.` : ""}`,
            keyInsight: "Book your Class 1 Medical before spending a single pound on training. It is the one unknown that can derail everything else, and most candidates leave it too late. An AME appointment costs £300–£600 and takes a few hours. It is the cheapest and most important thing you can do first.",
            biggestBarrier:
              lead.biggestConcern ?? "Funding and finding the right school",
            barrierDeepDive:
              "The headline training cost is only part of the picture. Most candidates budget for the school prospectus price and are then surprised by the costs that come on top: headset (£300–£1,000), ground school materials (£400–£600), 14 ATPL exam fees (£150–£200 each), Class 1 Medical (£300–£600), MCC/JOC course (£3,000–£5,000), and a type rating (£15,000–£25,000) which is rarely included in school quotes. Budget 15–20% above the headline figure to avoid running out of funds mid-training — the most common reason pilots drop out.",
            barrierAdvice:
              "Speak directly to 2–3 flight schools to get accurate, up-to-date cost breakdowns and finance options. Many schools offer payment plans that are not advertised publicly.",
            strongestAsset:
              lead.flyingExperience && lead.flyingExperience !== "None"
                ? `You already have flying experience (${lead.flyingExperience}), which puts you ahead of most applicants.`
                : "Your motivation and early research puts you ahead of many aspiring pilots who never take the first step.",
            recommendedRoute: lead.preferredRoute ?? "Integrated ATPL",
            routeRationale: `Based on your profile, the ${lead.preferredRoute ?? "Integrated ATPL"} route aligns with your stated goal and timeframe.`,
            estimatedCostMin: 80000,
            estimatedCostMax: 130000,
            estimatedDuration: "18–24 months",
            readinessLabel:
              lead.leadCategory === "Hot"
                ? "Flight Ready"
                : lead.leadCategory === "Warm"
                  ? "Development Phase"
                  : "Exploration Phase",
            readinessExplanation:
              lead.leadCategory === "Hot"
                ? "You have strong indicators across funding, medical confidence, and commitment. You are ready to take the next step."
                : "You are on the right path. A few key steps will move you from planning to action.",
            hiddenCosts: [
              { item: "Class 1 Medical", estimatedCost: "£300–£600", notes: "Required before starting commercial training — book this first before committing to any school." },
              { item: "Headset", estimatedCost: "£300–£1,000", notes: "Schools provide basic headsets but most students buy their own within the first month." },
              { item: "ATPL Ground School Materials", estimatedCost: "£400–£600", notes: "Books, question banks, and study apps on top of ground school fees." },
              { item: "14 ATPL Exam Fees", estimatedCost: "£150–£200 each", notes: "Each of the 14 ATPL theory exams has a separate sitting fee — rarely included in school quotes." },
              { item: "MCC/JOC Course", estimatedCost: "£3,000–£5,000", notes: "Multi-Crew Cooperation course required before airline applications — often not included in integrated school fees." },
              { item: "Type Rating", estimatedCost: "£15,000–£25,000", notes: "Required for your first airline job — almost never included in training programme costs." },
            ],
            schoolSelectionCriteria: [
              { criterion: "Pass rates", whyItMatters: "First-time ATPL exam pass rates and skills test pass rates directly affect your timeline and costs.", questionToAsk: "What is your first-time pass rate for ATPL theory exams and the CPL/IR skills test?" },
              { criterion: "Aircraft availability", whyItMatters: "Training delays due to aircraft maintenance are the most common cause of cost overruns.", questionToAsk: "What is your aircraft-to-student ratio and what is your average weather/maintenance cancellation rate?" },
              { criterion: "Airline partnerships", whyItMatters: "Formal airline partnerships can mean guaranteed interviews or priority hiring after graduation.", questionToAsk: "Do you have formal airline partnership agreements, and what does that mean for graduates in practice?" },
              { criterion: "Finance and refund policy", whyItMatters: "Schools that require full upfront payment put you at risk if the school closes or you need to leave.", questionToAsk: "What is your refund policy if I need to leave training, and do you offer stage-by-stage payment?" },
            ],
            riskScenarios: [
              {
                scenario: lead.class1Medical === "No — I haven't had one and I'm worried about it"
                  ? "Class 1 Medical failure or restriction"
                  : lead.fundingMethod === "Bank loan" || lead.fundingMethod === "Finance / loan"
                    ? "Training loan debt burden"
                    : "Training cost overrun",
                probability: lead.class1Medical === "No — I haven't had one and I'm worried about it"
                  ? "High"
                  : lead.fundingMethod === "Bank loan" || lead.fundingMethod === "Finance / loan"
                    ? "Medium"
                    : "Medium",
                mitigation: lead.class1Medical === "No — I haven't had one and I'm worried about it"
                  ? "Book a Class 1 Medical with a CAA-approved AME before committing to any training programme or spending money on applications. A medical assessment costs £300–£600 and takes a few hours — it is the single most important step you can take right now. Many conditions that seem disqualifying have waivers or workarounds."
                  : lead.fundingMethod === "Bank loan" || lead.fundingMethod === "Finance / loan"
                    ? "Compare at least two aviation finance providers before signing anything. Understand the total repayment amount, not just the monthly figure. Ensure you have a 15–20% contingency buffer above the headline training cost to cover hidden costs and potential delays."
                    : "Budget 15–20% above the headline training cost to cover hidden costs: ATPL exam fees (£150–£200 each), headset (£300–£1,000), MCC/JOC course (£3,000–£5,000), and type rating (£15,000–£25,000). Request a full written cost breakdown from every school before committing.",
              },
              {
                scenario: (lead.age ?? 0) >= 40
                  ? "Age and airline hiring windows"
                  : "Training delays extending timeline and costs",
                probability: (lead.age ?? 0) >= 40 ? "High" : "Medium",
                mitigation: (lead.age ?? 0) >= 40
                  ? "Most airlines have no formal upper age limit for First Officers, but seniority-based progression means starting later limits your captain upgrade window. Target airlines with faster fleet growth and shorter upgrade times. Regional carriers and cargo operators often have more flexible hiring profiles than major flag carriers."
                  : "Training delays due to aircraft availability, weather, and exam resits are the most common cause of cost overruns. Ask every school for their average student completion time versus their advertised timeline, and their aircraft-to-student ratio. Choose a school with a strong maintenance record and multiple aircraft of the same type.",
              },
              {
                scenario: "School closure or financial instability",
                probability: "Low",
                mitigation: "Flight school closures do happen — Flybe's training arm and several smaller UK schools have closed in recent years. Protect yourself by choosing a school with a long operating history, checking their CAA approval status, and avoiding schools that require full upfront payment. Ask specifically about their refund policy and whether they hold student funds in a protected account.",
              },
            ],
            nextSteps: [
              "Book a Class 1 Medical assessment with a CAA-approved AME",
              "Request prospectuses from 3 flight schools that match your route preference",
              "Compare finance options — bank loans, school payment plans, and aviation bursaries",
              "Attend an open day or discovery flight at your shortlisted school",
              "Submit your application once you have confirmed funding",
            ],
            thirtyDayActionPlan: [
              "Day 1–3: Research and book a Class 1 Medical appointment with a CAA-approved AME.",
              "Day 4–7: Request full prospectuses and cost breakdowns (including hidden costs) from 3 shortlisted schools.",
              "Day 8–14: Research finance options — contact BBVA, Caledonian, and your bank. Get pre-qualification estimates.",
              "Day 15–21: Attend an open day or book a discovery flight at your top school choice.",
              "Day 22–30: Review your full budget including hidden costs, confirm your funding plan, and submit your application.",
            ],
            careerRealityCheck: "After qualifying, most new commercial pilots spend 6–18 months job hunting before their first airline role. Starting salaries at regional carriers are typically £25,000–35,000 as a First Officer. Captain upgrade at a regional airline takes 2–7 years depending on seniority and fleet growth. Reaching a major airline captain position typically takes 10–15 years from licence issue. The seniority system means your career progression is tied to the airline you join and when — choosing your first employer carefully matters more than most candidates realise.",
            medicalAdvice:
              "A Class 1 Medical is required for commercial pilot training. Book an assessment early — it is the single biggest unknown in your journey.",
            financeConsiderations:
              lead.wantsFinanceInfo === "Yes"
                ? "Finance options are available at most integrated schools. Typical terms are 5–10 year repayment at competitive rates. Compare at least two providers before committing."
                : "Most pilots self-fund or use a combination of savings and a bank loan. Start building a funding plan 12 months before your intended start date.",
            matchedSchoolRationale: `Look for a ${lead.preferredRoute === "Modular ATPL" ? "modular-friendly school with strong CFI support and flexible scheduling" : "fully integrated academy with airline partnerships and a structured cadet programme"}.`,
            disclaimer:
              "This report is guidance only and not official career, medical or financial advice. Always consult qualified professionals before making training decisions.",
            _fallback: true,
          };
          roadmap = JSON.stringify(fallback);
        }

        // Validate, normalise and re-serialise before caching.
        // This ensures:
        //   1. Legacy/mismatched LLM field names are remapped (e.g. risk→scenario).
        //   2. Every advertised premium section has a safe default if the LLM omitted it.
        //   3. The stored JSON is always the canonical shape the frontend expects.
        const normalisedRoadmap = parseAndNormaliseRoadmap(roadmap, "LLM output");
        roadmap = JSON.stringify(normalisedRoadmap);

        // Cache the roadmap
        await updateLead(lead.id, { aiRoadmap: roadmap });

        // Regenerate PDF now that we have the AI roadmap content
        // Only do this for real DB leads (not client-side fallback leads)
        if (dbLead) {
          const leadForPdf = await getLeadById(lead.id);
          if (leadForPdf) {
            generatePilotBlueprint(
              leadForPdf,
              undefined, // dimensions not needed here — already stored on lead
              undefined
            )
              .then(async pdfUrl => {
                await updateLead(lead.id, { pdfKey: pdfUrl });
                console.log(`[PDF] Regenerated premium PDF for lead ${lead.id}`);
              })
              .catch(e => console.warn("[PDF] Premium PDF regeneration failed:", e));
          }
        }

        return { roadmap };
      }),

    /** Premium AI chat — allows premium purchasers to ask follow-up questions about their roadmap */
    chat: publicProcedure
      .input(
        z.object({
          leadId: z.number(),
          messages: z.array(
            z.object({
              role: z.enum(["user", "assistant"]),
              content: z.string().max(2000),
            })
          ).max(20),
        })
      )
      .mutation(async ({ input }) => {
        const lead = await getLeadById(input.leadId);
        if (!lead) throw new TRPCError({ code: "NOT_FOUND" });

        // Verify premium purchase
        const purchase = await getRoadmapPurchaseByLead(input.leadId);
        if (purchase?.status !== "complete") {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Premium roadmap required to use AI chat.",
          });
        }

        // Build system context from lead profile and roadmap
        let roadmapContext = "";
        if (lead.aiRoadmap) {
          try {
            const rm = JSON.parse(lead.aiRoadmap);
            roadmapContext = `\n\nCANDIDATE'S GENERATED ROADMAP SUMMARY:\n- Recommended route: ${rm.recommendedRoute ?? "Unknown"}\n- Estimated cost: ${rm.estimatedCostMin ?? "?"}–${rm.estimatedCostMax ?? "?"} ${rm.currency ?? ""}\n- Estimated duration: ${rm.estimatedDuration ?? "Unknown"}\n- Biggest barrier: ${rm.biggestBarrier ?? "Unknown"}\n- Readiness: ${rm.readinessLabel ?? "Unknown"}`;
          } catch {}
        }

        const systemPrompt = `You are an expert aviation career advisor helping a specific aspiring pilot understand their personalised training roadmap. You have full context about their profile and roadmap.

CANDIDATE PROFILE:
- Name: ${lead.fullName}
- Age: ${lead.age ?? "Unknown"}
- Country: ${lead.country ?? "Unknown"}
- Goal: ${lead.pilotGoal ?? "Unknown"}
- Budget: ${lead.budgetRange ?? "Unknown"}
- Funding: ${lead.fundingMethod ?? "Unknown"}
- Medical confidence: ${lead.class1Medical ?? "Unknown"}
- Flying experience: ${lead.flyingExperience ?? "Unknown"}
- Preferred route: ${lead.preferredRoute ?? "Unknown"}
- Start timeframe: ${lead.startTimeframe ?? "Unknown"}${roadmapContext}

GUIDELINES:
- Be specific to their profile — never give generic advice
- Be honest, even if the answer is difficult
- Keep responses concise (2-4 paragraphs max)
- If you don't know something specific to their country or situation, say so clearly
- Never invent school names, costs, or regulatory requirements
- Always recommend they verify information directly with schools and regulators`;

        const response = await invokeLLM({
          model: process.env.LLM_MODEL || "gpt-4.1-mini",
          messages: [
            { role: "system", content: systemPrompt },
            ...input.messages.map(m => ({ role: m.role as "user" | "assistant", content: m.content })),
          ],
        });

        const content = response.choices[0]?.message?.content;
        const reply = typeof content === "string" ? content : "I'm sorry, I couldn't generate a response. Please try again.";
        return { reply };
      }),

    /** Lead gate: capture name+email when a user unlocks a school's full details. */
    captureSchoolUnlock: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          schoolId: z.number(),
          schoolName: z.string(),
          country: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const leadId = await createLead({
            fullName: input.name,
            email: input.email,
            country: input.country ?? "Unknown",
            pilotGoal: "airline",
            leadScore: 40,
            intentScore: 50,
            leadCategory: "Warm",
            source: "school_unlock",
            consentToContact: true,
            consentToShare: true,
          });
          await createLeadAssignment({
            leadId,
            schoolId: input.schoolId,
            status: "Unlocked",
            notes: `Lead unlocked school details for ${input.schoolName}`,
          });
          try {
            await notifyOwner({
              title: `\uD83D\uDD13 School Unlock: ${input.name}`,
              content: `${input.name} (${input.email}) unlocked full details for ${input.schoolName}.\nLead ID: ${leadId}`,
            });
          } catch {
            /* non-critical */
          }
          return { success: true, leadId };
        } catch (e) {
          console.error("[captureSchoolUnlock] Error:", e);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to capture lead",
          });
        }
      }),
    /** Email gate: capture email before revealing the AI roadmap on the results page. */
    captureRoadmapEmail: publicProcedure
      .input(
        z.object({
          leadId: z.number(),
          name: z.string().min(1),
          email: z.string().email(),
        })
      )
      .mutation(async ({ input }) => {
        // Update lead email/name if the lead exists and has no email (arrived via shared link)
        try {
          const lead = await getLeadById(input.leadId);
          if (lead && !lead.email) {
            await updateLead(input.leadId, {
              email: input.email,
              fullName: input.name,
            });
          }
        } catch {
          /* non-critical */
        }
        return { success: true };
      }),
  }),

  // ─── Admin ────────────────────────────────────────────────────────────────
  admin: router({
    listLeads: adminProcedure
      .input(
        z.object({
          search: z.string().optional(),
          country: z.string().optional(),
          category: z.string().optional(),
          status: z.string().optional(),
          pilotGoal: z.string().optional(),
          budgetRange: z.string().optional(),
          startTimeframe: z.string().optional(),
          wantsFinanceInfo: z.string().optional(),
          source: z.string().optional(),
          minScore: z.number().optional(),
          maxScore: z.number().optional(),
          page: z.number().default(1),
          pageSize: z.number().default(50),
          sortBy: z.enum(["createdAt", "leadScore", "intentScore"]).optional(),
          sortDir: z.enum(["asc", "desc"]).optional(),
        })
      )
      .query(async ({ input }) => {
        return listLeads(input);
      }),

    getLead: adminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const lead = await getLeadById(input.id);
        if (!lead) throw new TRPCError({ code: "NOT_FOUND" });
        const notes = await getAdminNotesByLeadId(input.id);
        const assignments = await getLeadAssignments(input.id);
        return { lead, notes, assignments };
      }),

    updateLeadStatus: adminProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum([
            "New",
            "Reviewed",
            "Contacted",
            "Sent to School",
            "School Interested",
            "Not Suitable",
            "Converted",
            "Archived",
          ]),
        })
      )
      .mutation(async ({ input }) => {
        await updateLead(input.id, { status: input.status });
        return { success: true };
      }),

    addNote: adminProcedure
      .input(z.object({ leadId: z.number(), note: z.string().min(1) }))
      .mutation(async ({ input, ctx }) => {
        await createAdminNote({
          leadId: input.leadId,
          note: input.note,
          authorId: ctx.user.id,
        });
        return { success: true };
      }),

    assignToSchool: adminProcedure
      .input(
        z.object({
          leadId: z.number(),
          schoolId: z.number(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createLeadAssignment({
          leadId: input.leadId,
          schoolId: input.schoolId,
          notes: input.notes,
          status: "Assigned",
        });
        await updateLead(input.leadId, { status: "Sent to School" });
        return { success: true };
      }),

    deleteLead: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deleteLead(input.id);
        return { success: true };
      }),

    exportLeads: adminProcedure.query(async () => {
      const allLeads = await getAllLeadsForExport();
      return allLeads;
    }),

    // Flight school management
    listSchools: adminProcedure.query(async () => {
      return listFlightSchools({ activeOnly: false });
    }),

    createSchool: adminProcedure
      .input(
        z.object({
          name: z.string().min(2),
          country: z.string().optional(),
          city: z.string().optional(),
          airport: z.string().optional(),
          courses: z.string().optional(),
          integratedAtpl: z.boolean().optional(),
          modularAtpl: z.boolean().optional(),
          ppl: z.boolean().optional(),
          priceRange: z.string().optional(),
          financeAvailable: z.enum(["yes", "no", "unknown"]).optional(),
          accommodationAvailable: z.enum(["yes", "no", "unknown"]).optional(),
          airlinePartnerships: z.string().optional(),
          website: z.string().optional(),
          contactEmail: z.string().optional(),
          phone: z.string().optional(),
          description: z.string().optional(),
          active: z.boolean().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await createFlightSchool(input);
        return { id };
      }),

    updateSchool: adminProcedure
      .input(
        z.object({
          id: z.number(),
          name: z.string().min(2).optional(),
          country: z.string().optional(),
          city: z.string().optional(),
          airport: z.string().optional(),
          courses: z.string().optional(),
          integratedAtpl: z.boolean().optional(),
          modularAtpl: z.boolean().optional(),
          ppl: z.boolean().optional(),
          priceRange: z.string().optional(),
          financeAvailable: z.enum(["yes", "no", "unknown"]).optional(),
          accommodationAvailable: z.enum(["yes", "no", "unknown"]).optional(),
          airlinePartnerships: z.string().optional(),
          website: z.string().optional(),
          contactEmail: z.string().optional(),
          phone: z.string().optional(),
          description: z.string().optional(),
          active: z.boolean().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await updateFlightSchool(id, data);
        return { success: true };
      }),

    deleteSchool: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deleteFlightSchool(input.id);
        return { success: true };
      }),
  }),

  // ─── Flight Schools (public) ──────────────────────────────────────────────
  schools: router({
    list: publicProcedure
      .input(
        z.object({
          country: z.string().optional(),
          integratedAtpl: z.boolean().optional(),
          modularAtpl: z.boolean().optional(),
          ppl: z.boolean().optional(),
          financeAvailable: z.string().optional(),
        })
      )
      .query(async ({ input }) => {
        return listFlightSchools({ ...input, activeOnly: true });
      }),

    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const school = await getFlightSchoolById(input.id);
        if (!school || !school.active)
          throw new TRPCError({ code: "NOT_FOUND" });
        return school;
      }),
  }),
  // ─── Introduction Requests ────────────────────────────────────────────────────
  introductions: router({
    requestIntroductions: publicProcedure
      .input(
        z.object({
          leadId: z.number(),
          schoolIds: z.array(z.number()).min(1).max(5),
        })
      )
      .mutation(async ({ input }) => {
        const lead = await getLeadById(input.leadId);
        if (!lead) throw new TRPCError({ code: "NOT_FOUND" });

        const results = [];
        for (const schoolId of input.schoolIds) {
          const school = await getFlightSchoolById(schoolId);
          if (!school) continue;
          const id = await createIntroductionRequest({
            leadId: input.leadId,
            schoolId,
            schoolName: school.name,
            status: "Pending",
          });
          results.push({ id, schoolName: school.name });
        }

                // Notify owner
        try {
          await notifyOwner({
            title: `🏫 Introduction Request: ${lead.fullName}`,
            content: `${lead.fullName} has requested introductions to ${results.length} school(s):\n${results.map(r => `- ${r.schoolName}`).join("\n")}\n\nLead score: ${lead.leadScore}/100 (${lead.leadCategory})`,
          });
        } catch (e) {
          console.warn("[Notification] Introduction request notify failed:", e);
        }
        // Send introduction confirmation email to the user (non-fatal)
        if (lead.email) {
          sendEmail({
            to: lead.email,
            subject: `Your introduction request has been sent to ${results.length} school${results.length !== 1 ? "s" : ""}`,
            react: React.createElement(IntroductionConfirmation, {
              firstName: lead.fullName?.split(" ")[0] ?? "there",
              schools: results.map(r => ({
                name: r.schoolName,
                country: lead.country ?? "Unknown",
              })),
              resultsUrl: `${getAppUrl()}/results/${lead.id}`,
            }),
          }).catch(e => console.warn("[Email] Introduction confirmation email failed (non-fatal):", e));
        }
        return { success: true, count: results.length, schools: results };
      }),

    getByLeadId: publicProcedure
      .input(z.object({ leadId: z.number() }))
      .query(async ({ input }) => {
        return getIntroductionRequestsByLeadId(input.leadId);
      }),

    listAll: adminProcedure.query(async () => {
      return listAllIntroductionRequests();
    }),
  }),
  // ─── Partner / School Waitlist ───────────────────────────────────────────
  partner: router({
    joinWaitlist: publicProcedure
      .input(
        z.object({
          schoolName: z.string().min(2),
          country: z.string().optional(),
          contactName: z.string().min(2),
          email: z.string().email(),
          website: z.string().optional(),
          coursesOffered: z.string().optional(),
          financeAvailable: z.boolean().optional(),
          interestedInLeads: z.boolean().optional(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const entry = await createSchoolWaitlistEntry({
          schoolName: input.schoolName,
          country: input.country ?? null,
          contactName: input.contactName,
          email: input.email,
          website: input.website ?? null,
          coursesOffered: input.coursesOffered ?? null,
          financeAvailable: input.financeAvailable ?? false,
          interestedInLeads: input.interestedInLeads ?? true,
          notes: input.notes ?? null,
        });
        // Notify owner
        try {
          await notifyOwner({
            title: `🏫 New School Partner Application: ${input.schoolName}`,
            content: `School: ${input.schoolName}\nCountry: ${input.country ?? "N/A"}\nContact: ${input.contactName}\nEmail: ${input.email}\nWebsite: ${input.website ?? "N/A"}\nCourses: ${input.coursesOffered ?? "N/A"}\nFinance: ${input.financeAvailable ? "Yes" : "No"}\nWants leads: ${input.interestedInLeads ? "Yes" : "No"}`,
          });
        } catch (e) {
          console.warn("[Notification] Partner waitlist notify failed:", e);
        }
        return { success: true, id: entry.id };
      }),
    listWaitlist: adminProcedure.query(async () => {
      return listSchoolWaitlist();
    }),
  }),

  // ─── Licence Quiz ──────────────────────────────────────────────────────────
  licenceQuiz: router({
    /** Submit answers, get result back immediately. Saves a record without email. */
    submit: publicProcedure
      .input(
        z.object({
          goal: z.string(),
          timeCommitment: z.string(),
          budget: z.string(),
          wantsCommercial: z.string(),
          experience: z.string(),
          location: z.string(),
          speedPriority: z.string(),
          mainPriority: z.string(),
          source: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = scoreLicenceQuiz(input);
        const record = await createLicenceQuizLead({
          ...input,
          recommendedLicence: result.licence,
          source: input.source ?? null,
        });
        return { id: record.id, result };
      }),

    /** Capture email after result is shown — gated behind detailed breakdown. */
    captureEmail: publicProcedure
      .input(
        z.object({
          id: z.number(),
          email: z.string().email(),
          consentToContact: z.boolean(),
        })
      )
      .mutation(async ({ input }) => {
        await updateLicenceQuizEmail(
          input.id,
          input.email,
          input.consentToContact
        );
        return { success: true };
      }),

    /** Social proof stats — how many with each result proceeded to main quiz. */
    stats: publicProcedure.query(async () => {
      return getLicenceQuizStats();
    }),
  }),

  // ─── Finance Interest ──────────────────────────────────────────────────────
  finance: router({
    submitInterest: publicProcedure
      .input(
        z.object({
          name: z.string().min(2),
          email: z.string().email(),
          phone: z.string().optional(),
          trainingRoute: z.enum(["integrated", "modular", "unsure"]).optional(),
          estimatedBudget: z
            .enum(["under50k", "50k_80k", "80k_100k", "over100k", "unsure"])
            .optional(),
          message: z.string().optional(),
          source: z.string().optional(),
          leadId: z.number().optional(),
          consentToContact: z.boolean(),
        })
      )
      .mutation(async ({ input }) => {
        // Enforce consent — do not save or notify if user did not explicitly consent
        if (!input.consentToContact) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Consent to contact is required.",
          });
        }
        const id = await createFinanceInterest(input);
        await notifyOwner({
          title: "New Finance Interest Lead",
          content: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone ?? "N/A"}\nRoute: ${input.trainingRoute ?? "N/A"}\nBudget: ${input.estimatedBudget ?? "N/A"}\nSource: ${input.source ?? "N/A"}`,
        });
        return { success: true, id };
      }),
  }),
  // ─── Flight Deck Share ───────────────────────────────────────────────────────
  flightDeck: router({
    saveShare: publicProcedure
      .input(z.object({ resultJson: z.string() }))
      .mutation(async ({ input }) => {
        const shareId = nanoid(12);
        await createFlightDeckShare(shareId, input.resultJson);
        return { shareId };
      }),
    getShare: publicProcedure
      .input(z.object({ shareId: z.string() }))
      .query(async ({ input }) => {
        const resultJson = await getFlightDeckShare(input.shareId);
        if (!resultJson)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Share not found",
          });
        return { resultJson };
      }),
    captureEmail: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          name: z.string().optional(),
          phase: z.string().optional(),
          score: z.number().int().optional(),
          biggestBarrier: z.string().optional(),
          consentToContact: z.boolean(),
        })
      )
      .mutation(async ({ input }) => {
        const id = await createFlightDeckEmailCapture({
          email: input.email,
          name: input.name,
          phase: input.phase,
          score: input.score,
          biggestBarrier: input.biggestBarrier,
          consentToContact: input.consentToContact,
          source: "flight_deck_results",
        });
        // Notify owner of new Flight Deck email capture
        try {
          await notifyOwner({
            title: `✈️ New Flight Deck Email Captured`,
            content: `Name: ${input.name ?? "Unknown"}\nEmail: ${input.email}\nPhase: ${input.phase ?? "N/A"}\nScore: ${input.score ?? "N/A"}\nBiggest Barrier: ${input.biggestBarrier ?? "N/A"}`,
          });
        } catch (e) {
          // Non-fatal
        }
        return { ok: true, id };
      }),
  }),
  // ─── Analytics (admin only) ───────────────────────────────────────────────
  platform: router({
    stats: publicProcedure.query(async () => {
      return getPublicPlatformStats();
    }),
  }),
  analytics: router({
    overview: adminProcedure.query(async () => {
      return getLeadAnalytics();
    }),
    launchStats: adminProcedure.query(async () => {
      return getLaunchStats();
    }),
  }),
  // ─── Guide Email Subscribe ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────
  guides: router({
    subscribe: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          source: z.string().optional(), // which guide page they subscribed from
        })
      )
      .mutation(async ({ input }) => {
        // Save as a flight deck email capture with source=guide_subscribe
        await createFlightDeckEmailCapture({
          email: input.email,
          consentToContact: true,
          source: input.source ?? "guide_subscribe",
        });
        try {
          await notifyOwner({
            title: "📚 New Guide Email Subscriber",
            content: `Email: ${input.email}\nSource: ${input.source ?? "guide_subscribe"}`,
          });
        } catch (e) {
          // Non-fatal
        }
        return { ok: true };
      }),
  }),
  calculator: router({
    saveSession: publicProcedure
      .input(
        z.object({
          route: z.string(),
          location: z.string(),
          pace: z.string(),
          experience: z.string(),
          funding: z.string(),
          totalEstimate: z.number().int(),
        })
      )
      .mutation(async ({ input }) => {
        await createCalcSession(input);
        return { ok: true };
      }),
  }),
  // ─── Quizzes ───────────────────────────────────────────────────────────────
  quizzes: router({
    captureEmail: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          name: z.string().optional(),
          quizSlug: z.string(),
          quizTitle: z.string().optional(),
          resultId: z.string().optional(),
          resultTitle: z.string().optional(),
          consentToContact: z.boolean(),
        })
      )
      .mutation(async ({ input }) => {
        const { createQuizEmailCapture } = await import("./db");
        await createQuizEmailCapture({
          email: input.email,
          name: input.name,
          quizSlug: input.quizSlug,
          quizTitle: input.quizTitle,
          resultId: input.resultId,
          resultTitle: input.resultTitle,
          consentToContact: input.consentToContact,
        });
        try {
          await notifyOwner({
            title: `\uD83C\uDFAF New Quiz Email: ${input.quizTitle ?? input.quizSlug}`,
            content: `Result: ${input.resultTitle ?? input.resultId ?? "N/A"}\nEmail: ${input.email}\nName: ${input.name ?? "Unknown"}`,
          });
        } catch (e) {
          // non-fatal
        }
        return { success: true };
      }),
  }),

  // ─── Payments ──────────────────────────────────────────────────────────────
  payments: router({
    // Create a Stripe Checkout session for the premium roadmap
    createCheckout: publicProcedure
      .input(
        z.object({
          leadId: z.number().int(),
          email: z.string().email().optional(),
          successUrl: z.string().url(),
          cancelUrl: z.string().url(),
        })
      )
      .mutation(async ({ input }) => {
        const stripeKey = process.env.STRIPE_SECRET_KEY;
        if (!stripeKey) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Payment processing is not configured.",
          });
        }

        const stripe = new Stripe(stripeKey, { apiVersion: "2026-05-27.dahlia" });

        const lead = await getLeadById(input.leadId);
        if (!lead) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Lead not found." });
        }

        // Check if already purchased
        const existing = await getRoadmapPurchaseByLead(input.leadId);
        if (existing?.status === "complete") {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Premium roadmap already unlocked for this profile.",
          });
        }

        const session = await stripe.checkout.sessions.create({
          mode: "payment",
          customer_email: input.email ?? lead.email ?? undefined,
          line_items: [
            {
              price_data: {
                currency: "gbp",
                unit_amount: 1499, // £14.99
                product_data: {
                  name: "AviatorIQ Premium Pilot Blueprint",
                  description:
                    "Your personalised pilot training roadmap — month-by-month timeline, hidden cost breakdown, school selection guide, risk analysis, career reality check, 30-day action plan, and a downloadable PDF blueprint.",
                  images: [],
                },
              },
              quantity: 1,
            },
          ],
          metadata: {
            leadId: String(input.leadId),
            product: "premium_roadmap",
          },
          success_url: input.successUrl + "?session_id={CHECKOUT_SESSION_ID}",
          cancel_url: input.cancelUrl,
          allow_promotion_codes: true,
        });

        // Record the pending purchase
        await createRoadmapPurchase({
          leadId: input.leadId,
          stripeSessionId: session.id,
          email: input.email ?? lead.email ?? undefined,
          currency: "gbp",
        });

        return { checkoutUrl: session.url! };
      }),

    // Verify a completed Stripe session and unlock the premium roadmap
    verifyPayment: publicProcedure
      .input(
        z.object({
          sessionId: z.string(),
          leadId: z.number().int(),
        })
      )
      .mutation(async ({ input }) => {
        const stripeKey = process.env.STRIPE_SECRET_KEY;
        if (!stripeKey) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Payment processing is not configured.",
          });
        }

        const stripe = new Stripe(stripeKey, { apiVersion: "2026-05-27.dahlia" });

        try {
          const session = await stripe.checkout.sessions.retrieve(input.sessionId);

          if (
            session.payment_status === "paid" &&
            session.metadata?.leadId === String(input.leadId)
          ) {
            await completeRoadmapPurchase(
              input.sessionId,
              typeof session.payment_intent === "string"
                ? session.payment_intent
                : session.payment_intent?.id
            );
            return { unlocked: true };
          }

          return { unlocked: false };
        } catch (e) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Could not verify payment. Please contact support.",
          });
        }
      }),

    // Check if a lead has already purchased the premium roadmap
    checkPurchase: publicProcedure
      .input(z.object({ leadId: z.number().int() }))
      .query(async ({ input }) => {
        const purchase = await getRoadmapPurchaseByLead(input.leadId);
        return { purchased: purchase?.status === "complete" };
      }),
  }),

  // ─── Pilot Jobs ─────────────────────────────────────────────────────────────────────────────
  jobs: router({
    list: publicProcedure
      .input(z.object({ region: z.string().optional() }))
      .query(async ({ input }) => {
        const jobs = await listPilotJobs(input.region);
        return { jobs };
      }),
    create: adminProcedure
      .input(z.object({
        title: z.string().min(1).max(255),
        airline: z.string().min(1).max(255),
        location: z.string().min(1).max(255),
        type: z.enum(["First Officer", "Captain", "Cadet", "Instructor", "Other"]),
        hours: z.string().optional(),
        salary: z.string().optional(),
        deadline: z.string().optional(),
        link: z.string().url(),
        badge: z.string().optional(),
        description: z.string().min(1),
        region: z.enum(["UK", "US", "Global"]).default("UK"),
        active: z.boolean().default(true),
      }))
      .mutation(async ({ input }) => {
        const id = await createPilotJob(input);
        return { id };
      }),
    update: adminProcedure
      .input(z.object({
        id: z.number().int(),
        title: z.string().optional(),
        airline: z.string().optional(),
        location: z.string().optional(),
        type: z.enum(["First Officer", "Captain", "Cadet", "Instructor", "Other"]).optional(),
        hours: z.string().optional(),
        salary: z.string().optional(),
        deadline: z.string().optional(),
        link: z.string().url().optional(),
        badge: z.string().optional(),
        description: z.string().optional(),
        region: z.enum(["UK", "US", "Global"]).optional(),
        active: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await updatePilotJob(id, data);
        return { success: true };
      }),
    delete: adminProcedure
      .input(z.object({ id: z.number().int() }))
      .mutation(async ({ input }) => {
        await deletePilotJob(input.id);
        return { success: true };
      }),
  }),

  // ─── Pilot Stories ────────────────────────────────────────────────────────────────────────────
  stories: router({
    list: publicProcedure.query(async () => {
      const stories = await listPilotStories();
      return { stories };
    }),
    create: adminProcedure
      .input(z.object({
        name: z.string().min(1).max(200),
        role: z.string().min(1).max(200),
        airline: z.string().optional(),
        route: z.string().optional(),
        trainingDuration: z.string().optional(),
        totalCost: z.string().optional(),
        school: z.string().optional(),
        country: z.string().optional(),
        heroQuote: z.string().min(1),
        qa: z.string().min(1), // JSON string
        tags: z.string().optional(),
        imageUrl: z.string().optional(),
        active: z.boolean().default(true),
        featured: z.boolean().default(false),
      }))
      .mutation(async ({ input }) => {
        const id = await createPilotStory(input);
        return { id };
      }),
    update: adminProcedure
      .input(z.object({
        id: z.number().int(),
        name: z.string().optional(),
        role: z.string().optional(),
        airline: z.string().optional(),
        route: z.string().optional(),
        trainingDuration: z.string().optional(),
        totalCost: z.string().optional(),
        school: z.string().optional(),
        country: z.string().optional(),
        heroQuote: z.string().optional(),
        qa: z.string().optional(),
        tags: z.string().optional(),
        imageUrl: z.string().optional(),
        active: z.boolean().optional(),
        featured: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await updatePilotStory(id, data);
        return { success: true };
      }),
    delete: adminProcedure
      .input(z.object({ id: z.number().int() }))
      .mutation(async ({ input }) => {
        await deletePilotStory(input.id);
        return { success: true };
      }),
  }),
});
export type AppRouter = typeof appRouter;

// ─── Quizzes Router ───────────────────────────────────────────────────────────
// Note: appRouter is already exported above; we patch it via a separate export
// so we don't break the existing structure. Instead, add to the existing router:
