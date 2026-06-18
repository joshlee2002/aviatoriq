import { and, asc, desc, eq, gte, like, lte, or, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  AdminNote,
  FlightSchool,
  InsertAdminNote,
  InsertFlightSchool,
  InsertIntroductionRequest,
  InsertLead,
  InsertLeadAssignment,
  InsertLicenceQuizLead,
  InsertSchoolWaitlistEntry,
  InsertUser,
  IntroductionRequest,
  Lead,
  LeadAssignment,
  SchoolWaitlistEntry,
  adminNotes,
  calcSessions,
  flightSchools,
  introductionRequests,
  leadAssignments,
  leads,
  licenceQuizLeads,
  schoolWaitlist,
  users,
  InsertCalcSession,
  roadmapPurchases,
  RoadmapPurchase,
  quizEmailCaptures,
} from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ─── Users ────────────────────────────────────────────────────────────────────
export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) return;

  const values: InsertUser = { openId: user.openId };
  const updateSet: Record<string, unknown> = {};

  const textFields = ["name", "email", "loginMethod"] as const;
  for (const field of textFields) {
    const value = user[field];
    if (value === undefined) continue;
    const normalized = value ?? null;
    values[field] = normalized;
    updateSet[field] = normalized;
  }

  if (user.lastSignedIn !== undefined) {
    values.lastSignedIn = user.lastSignedIn;
    updateSet.lastSignedIn = user.lastSignedIn;
  }
  if (user.role !== undefined) {
    values.role = user.role;
    updateSet.role = user.role;
  } else if (user.openId === ENV.ownerOpenId) {
    values.role = "admin";
    updateSet.role = "admin";
  }

  if (!values.lastSignedIn) values.lastSignedIn = new Date();
  if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();

  await db
    .insert(users)
    .values(values)
    .onDuplicateKeyUpdate({ set: updateSet });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(users)
    .where(eq(users.openId, openId))
    .limit(1);
  return result[0];
}

// ─── Leads ────────────────────────────────────────────────────────────────────
export async function createLead(data: InsertLead): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(leads).values(data);
  return (result[0] as { insertId: number }).insertId;
}

export async function getLeadById(id: number): Promise<Lead | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(leads).where(eq(leads.id, id)).limit(1);
  return result[0];
}

export async function getLatestLeadByEmail(email: string): Promise<Lead | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(leads)
    .where(eq(leads.email, email.toLowerCase().trim()))
    .orderBy(desc(leads.createdAt))
    .limit(1);
  return result[0];
}

export async function updateLead(
  id: number,
  data: Partial<InsertLead>
): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.update(leads).set(data).where(eq(leads.id, id));
}

export async function deleteLead(id: number): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.delete(leads).where(eq(leads.id, id));
}

export interface LeadFilters {
  search?: string;
  country?: string;
  category?: string;
  status?: string;
  pilotGoal?: string;
  budgetRange?: string;
  startTimeframe?: string;
  minScore?: number;
  maxScore?: number;
  wantsFinanceInfo?: string;
  source?: string;
  page?: number;
  pageSize?: number;
  sortBy?: "createdAt" | "leadScore" | "intentScore";
  sortDir?: "asc" | "desc";
}

export async function listLeads(
  filters: LeadFilters = {}
): Promise<{ items: Lead[]; total: number }> {
  const db = await getDb();
  if (!db) return { items: [], total: 0 };

  const conditions = [];

  if (filters.search) {
    const term = `%${filters.search}%`;
    conditions.push(
      or(
        like(leads.fullName, term),
        like(leads.email, term),
        like(leads.country, term)
      )
    );
  }
  if (filters.country) conditions.push(eq(leads.country, filters.country));
  if (filters.category)
    conditions.push(
      eq(leads.leadCategory, filters.category as Lead["leadCategory"])
    );
  if (filters.status)
    conditions.push(eq(leads.status, filters.status as Lead["status"]));
  if (filters.pilotGoal)
    conditions.push(eq(leads.pilotGoal, filters.pilotGoal));
  if (filters.budgetRange)
    conditions.push(eq(leads.budgetRange, filters.budgetRange));
  if (filters.startTimeframe)
    conditions.push(eq(leads.startTimeframe, filters.startTimeframe));
  if (filters.wantsFinanceInfo)
    conditions.push(eq(leads.wantsFinanceInfo, filters.wantsFinanceInfo));
  if (filters.source) conditions.push(eq(leads.source, filters.source));
  if (filters.minScore !== undefined)
    conditions.push(gte(leads.leadScore, filters.minScore));
  if (filters.maxScore !== undefined)
    conditions.push(lte(leads.leadScore, filters.maxScore));

  const where = conditions.length > 0 ? and(...(conditions as [])) : undefined;

  const page = filters.page ?? 1;
  const pageSize = filters.pageSize ?? 50;
  const offset = (page - 1) * pageSize;

  const sortField = filters.sortBy ?? "createdAt";
  const sortDir = filters.sortDir ?? "desc";
  const orderCol =
    sortField === "leadScore"
      ? leads.leadScore
      : sortField === "intentScore"
        ? leads.intentScore
        : leads.createdAt;
  const orderExpr = sortDir === "asc" ? asc(orderCol) : desc(orderCol);
  const [items, countResult] = await Promise.all([
    db
      .select()
      .from(leads)
      .where(where)
      .orderBy(orderExpr)
      .limit(pageSize)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(where),
  ]);

  return { items, total: Number(countResult[0]?.count ?? 0) };
}

export async function getAllLeadsForExport(): Promise<Lead[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(leads).orderBy(desc(leads.createdAt));
}

// ─── Admin Notes ──────────────────────────────────────────────────────────────
export async function createAdminNote(data: InsertAdminNote): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(adminNotes).values(data);
}

export async function getAdminNotesByLeadId(
  leadId: number
): Promise<AdminNote[]> {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(adminNotes)
    .where(eq(adminNotes.leadId, leadId))
    .orderBy(desc(adminNotes.createdAt));
}

// ─── Flight Schools ───────────────────────────────────────────────────────────
export async function createFlightSchool(
  data: InsertFlightSchool
): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(flightSchools).values(data);
  return (result[0] as { insertId: number }).insertId;
}

export async function updateFlightSchool(
  id: number,
  data: Partial<InsertFlightSchool>
): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.update(flightSchools).set(data).where(eq(flightSchools.id, id));
}

export async function deleteFlightSchool(id: number): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.delete(flightSchools).where(eq(flightSchools.id, id));
}

export interface SchoolFilters {
  country?: string;
  integratedAtpl?: boolean;
  modularAtpl?: boolean;
  ppl?: boolean;
  financeAvailable?: string;
  activeOnly?: boolean;
}

export async function listFlightSchools(
  filters: SchoolFilters = {}
): Promise<FlightSchool[]> {
  const db = await getDb();
  if (!db) return [];

  const conditions = [];
  if (filters.activeOnly !== false)
    conditions.push(eq(flightSchools.active, true));
  if (filters.country)
    conditions.push(eq(flightSchools.country, filters.country));
  if (filters.integratedAtpl)
    conditions.push(eq(flightSchools.integratedAtpl, true));
  if (filters.modularAtpl) conditions.push(eq(flightSchools.modularAtpl, true));
  if (filters.ppl) conditions.push(eq(flightSchools.ppl, true));
  if (filters.financeAvailable)
    conditions.push(
      sql`${flightSchools.financeAvailable} = ${filters.financeAvailable}`
    );

  const where = conditions.length > 0 ? and(...(conditions as [])) : undefined;
  return db
    .select()
    .from(flightSchools)
    .where(where)
    .orderBy(flightSchools.name);
}

export async function getFlightSchoolById(
  id: number
): Promise<FlightSchool | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(flightSchools)
    .where(eq(flightSchools.id, id))
    .limit(1);
  return result[0];
}

// ─── Lead Assignments ─────────────────────────────────────────────────────────
export async function createLeadAssignment(
  data: InsertLeadAssignment
): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(leadAssignments).values(data);
}

export async function getLeadAssignments(
  leadId: number
): Promise<
  (LeadAssignment & {
    schoolName: string | null;
    schoolContactEmail: string | null;
    schoolWebsite: string | null;
  })[]
> {
  const db = await getDb();
  if (!db) return [];
  const rows = await db
    .select({
      id: leadAssignments.id,
      leadId: leadAssignments.leadId,
      schoolId: leadAssignments.schoolId,
      assignedAt: leadAssignments.assignedAt,
      status: leadAssignments.status,
      notes: leadAssignments.notes,
      estimatedValue: leadAssignments.estimatedValue,
      schoolName: flightSchools.name,
      schoolContactEmail: flightSchools.contactEmail,
      schoolWebsite: flightSchools.website,
    })
    .from(leadAssignments)
    .leftJoin(flightSchools, eq(leadAssignments.schoolId, flightSchools.id))
    .where(eq(leadAssignments.leadId, leadId));
  return rows;
}

// ─── School Matching ──────────────────────────────────────────────────────────

/**
 * Scored school matching.
 *
 * Scoring dimensions (total 100 points):
 *   Country match        30 pts  – same country as lead; 15 pts if open to abroad
 *   Route match          30 pts  – school offers the lead's preferred route
 *   Budget fit           20 pts  – school price range overlaps lead budget
 *   Finance need         10 pts  – school offers finance when lead needs it
 *   Accommodation        5 pts   – school offers accommodation when lead needs it
 *   Airline partnerships 5 pts   – school has airline partnerships (cadet/sponsored)
 *
 * Returns up to 6 schools, sorted by score descending, each with a
 * `matchReasons` array (string[]) explaining why they were selected.
 * Schools scoring below 20 are excluded unless fewer than 3 qualify.
 */
export async function matchSchoolsForLead(lead: {
  country?: string | null;
  preferredRoute?: string | null;
  budgetRange?: string | null;
  wantsFinanceInfo?: string | null;
  openToAbroad?: string | null;
  needsAccommodation?: string | null;
  targetAirline?: string | null;
}): Promise<(FlightSchool & { matchScore: number; matchReasons: string[] })[]> {
  const db = await getDb();
  if (!db) return [];

  // Fetch all active schools — scoring happens in JS, not SQL
  const allSchools = await db
    .select()
    .from(flightSchools)
    .where(eq(flightSchools.active, true));

  // ── Budget range → numeric midpoint ──────────────────────────────────────
  const budgetMidpoints: Record<string, number> = {
    "Under £30k": 25000,
    "£30k–£60k": 45000,
    "£60k–£100k": 80000,
    "Over £100k": 120000,
    "Under $40k": 30000,
    "$40k–$80k": 60000,
    "$80k–$130k": 105000,
    "Over $130k": 160000,
    "Under A$50k": 37000,
    "A$50k–A$90k": 70000,
    "A$90k–A$140k": 115000,
    "Over A$140k": 170000,
  };
  const leadBudget = lead.budgetRange
    ? (budgetMidpoints[lead.budgetRange] ?? null)
    : null;

  // ── Price range → numeric range ───────────────────────────────────────────
  function parsePriceRange(
    priceRange: string | null | undefined
  ): [number, number] | null {
    if (!priceRange) return null;
    // Patterns: "£60k–£100k", "$80k–$130k", "Under £30k", "Over £100k"
    const rangeMatch = priceRange.match(
      /([£$A]?)(\d+)k?\s*[–-]\s*[£$A]?(\d+)k?/i
    );
    if (rangeMatch) {
      return [parseInt(rangeMatch[2]) * 1000, parseInt(rangeMatch[3]) * 1000];
    }
    const underMatch = priceRange.match(/under\s*[£$A]?(\d+)k?/i);
    if (underMatch) return [0, parseInt(underMatch[1]) * 1000];
    const overMatch = priceRange.match(/over\s*[£$A]?(\d+)k?/i);
    if (overMatch) {
      const base = parseInt(overMatch[1]) * 1000;
      return [base, base * 1.5];
    }
    return null;
  }

  // ── Score each school ─────────────────────────────────────────────────────
  const scored = allSchools.map(school => {
    let score = 0;
    const reasons: string[] = [];

    // 1. Country match (30 pts)
    if (lead.country && school.country) {
      if (school.country === lead.country) {
        score += 30;
        reasons.push(`Based in ${school.country}`);
      } else if (lead.openToAbroad !== "No") {
        score += 15;
        reasons.push(`International option (${school.country})`);
      }
    } else if (!lead.country) {
      // No country preference — treat all schools equally
      score += 15;
    }

    // 2. Route match (30 pts)
    const route = lead.preferredRoute ?? "";
    if (route === "Integrated ATPL" && school.integratedAtpl) {
      score += 30;
      reasons.push("Offers Integrated ATPL");
    } else if (route === "Modular ATPL" && school.modularAtpl) {
      score += 30;
      reasons.push("Offers Modular ATPL");
    } else if (route === "PPL only" && school.ppl) {
      score += 30;
      reasons.push("Offers PPL training");
    } else if (!route) {
      // No route preference — partial credit if school offers any route
      score += 15;
    }

    // 3. Budget fit (20 pts)
    if (leadBudget !== null) {
      const schoolRange = parsePriceRange(school.priceRange);
      if (schoolRange) {
        const [low, high] = schoolRange;
        if (leadBudget >= low && leadBudget <= high) {
          score += 20;
          reasons.push("Fits your budget");
        } else if (leadBudget >= low * 0.8 && leadBudget <= high * 1.2) {
          score += 10;
          reasons.push("Close to your budget range");
        }
        // If budget is well below the school's range, penalise
        if (leadBudget < low * 0.7) {
          score -= 10;
        }
      } else {
        // No price data — partial credit
        score += 10;
      }
    } else {
      score += 10; // No budget data — neutral
    }

    // 4. Finance need (10 pts)
    if (lead.wantsFinanceInfo === "Yes") {
      if (school.financeAvailable === "yes") {
        score += 10;
        reasons.push("Offers finance / payment plans");
      } else if (school.financeAvailable === "unknown") {
        score += 3; // Unknown — slight positive
      }
    } else {
      score += 5; // Finance not needed — neutral
    }

    // 5. Accommodation (5 pts)
    if (lead.needsAccommodation === "Yes") {
      if (school.accommodationAvailable === "yes") {
        score += 5;
        reasons.push("Accommodation available");
      }
    } else {
      score += 3; // Not needed — neutral
    }

    // 6. Airline partnerships (5 pts)
    if (school.airlinePartnerships && school.airlinePartnerships.trim().length > 5) {
      score += 5;
      reasons.push("Airline partnerships");
    }

    // Ensure score doesn't go below 0
    score = Math.max(0, score);

    return { ...school, matchScore: score, matchReasons: reasons };
  });

  // ── Sort by score, take top 6 above threshold ─────────────────────────────
  const THRESHOLD = 20;
  const qualified = scored
    .filter(s => s.matchScore >= THRESHOLD)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 6);

  // Fallback: if fewer than 3 qualify, take top 6 regardless of threshold
  if (qualified.length < 3) {
    return scored
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 6);
  }

  return qualified;
}

// ─── Introduction Requests ────────────────────────────────────────────────────
export async function createIntroductionRequest(
  data: InsertIntroductionRequest
): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(introductionRequests).values(data);
  return (result[0] as { insertId: number }).insertId;
}

export async function getIntroductionRequestsByLeadId(
  leadId: number
): Promise<IntroductionRequest[]> {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(introductionRequests)
    .where(eq(introductionRequests.leadId, leadId));
}

export async function listAllIntroductionRequests(): Promise<
  (IntroductionRequest & { schoolContactEmail: string | null })[]
> {
  const db = await getDb();
  if (!db) return [];
  const rows = await db
    .select({
      id: introductionRequests.id,
      leadId: introductionRequests.leadId,
      schoolId: introductionRequests.schoolId,
      schoolName: introductionRequests.schoolName,
      status: introductionRequests.status,
      sentAt: introductionRequests.sentAt,
      createdAt: introductionRequests.createdAt,
      schoolContactEmail: flightSchools.contactEmail,
    })
    .from(introductionRequests)
    .leftJoin(
      flightSchools,
      eq(introductionRequests.schoolId, flightSchools.id)
    )
    .orderBy(introductionRequests.createdAt);
  return rows;
}

// ─── School Waitlist ─────────────────────────────────────────────────────────
export async function createSchoolWaitlistEntry(
  data: InsertSchoolWaitlistEntry
): Promise<{ id: number }> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(schoolWaitlist).values(data);
  return { id: (result[0] as { insertId: number }).insertId };
}

export async function listSchoolWaitlist(): Promise<SchoolWaitlistEntry[]> {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(schoolWaitlist)
    .orderBy(desc(schoolWaitlist.createdAt));
}

// ─── Analytics ──────────────────────────────────────────────────────────────────
export async function getLaunchStats() {
  const db = await getDb();
  if (!db) return null;

  const allLeads = await db.select().from(leads);
  const allIntros = await db.select().from(introductionRequests);

  const now = Date.now();
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;

  const recent = allLeads.filter(l => l.createdAt.getTime() >= sevenDaysAgo);
  const recentIntros = allIntros.filter(
    i => i.createdAt.getTime() >= sevenDaysAgo
  );

  const total7d = recent.length;
  const hot7d = recent.filter(l => l.leadCategory === "Hot").length;
  const introLeads7d = new Set(recentIntros.map(i => i.leadId)).size;
  const introRate7d =
    total7d > 0 ? Math.round((introLeads7d / total7d) * 100) : 0;
  const avgScore7d =
    total7d > 0
      ? Math.round(recent.reduce((s, l) => s + (l.leadScore ?? 0), 0) / total7d)
      : 0;
  const avgBudget7d =
    total7d > 0
      ? (() => {
          const budgetMap: Record<string, number> = {};
          for (const l of recent) {
            const b = l.budgetRange ?? "Unknown";
            budgetMap[b] = (budgetMap[b] ?? 0) + 1;
          }
          return (
            Object.entries(budgetMap).sort((a, b) => b[1] - a[1])[0]?.[0] ??
            "N/A"
          );
        })()
      : "N/A";

  const topSource7d = (() => {
    const srcMap: Record<string, number> = {};
    for (const l of recent) {
      const s = l.source ?? "Unknown";
      srcMap[s] = (srcMap[s] ?? 0) + 1;
    }
    return Object.entries(srcMap).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "N/A";
  })();

  const topCountry7d = (() => {
    const cMap: Record<string, number> = {};
    for (const l of recent) {
      const c = l.country ?? "Unknown";
      cMap[c] = (cMap[c] ?? 0) + 1;
    }
    return Object.entries(cMap).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "N/A";
  })();

  // Leads per day last 7 days
  const leadsPerDay7d: { date: string; count: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now - i * 24 * 60 * 60 * 1000);
    const dayStr = d.toISOString().slice(0, 10);
    leadsPerDay7d.push({
      date: dayStr,
      count: recent.filter(
        l => l.createdAt.toISOString().slice(0, 10) === dayStr
      ).length,
    });
  }

  return {
    total7d,
    hot7d,
    introLeads7d,
    introRate7d,
    avgScore7d,
    avgBudget7d,
    topSource7d,
    topCountry7d,
    leadsPerDay7d,
    // All-time totals for context
    totalAllTime: allLeads.length,
    hotAllTime: allLeads.filter(l => l.leadCategory === "Hot").length,
    introAllTime: new Set(allIntros.map(i => i.leadId)).size,
  };
}

export async function getLeadAnalytics() {
  const db = await getDb();
  if (!db) return null;

  const allLeads = await db.select().from(leads);
  const total = allLeads.length;
  if (total === 0)
    return {
      total: 0,
      hot: 0,
      warm: 0,
      cold: 0,
      introductionRequestRate: 0,
      avgScore: 0,
      countryBreakdown: {},
      goalBreakdown: {},
      fundingBreakdown: {},
      budgetBreakdown: {},
      scoreDistribution: [],
      leadsPerDay: [],
    };

  const hot = allLeads.filter(l => l.leadCategory === "Hot").length;
  const warm = allLeads.filter(l => l.leadCategory === "Warm").length;
  const cold = allLeads.filter(l => l.leadCategory === "Cold").length;
  const avgScore = Math.round(
    allLeads.reduce((s, l) => s + (l.leadScore ?? 0), 0) / total
  );

  // Introduction request rate
  const allIntros = await db.select().from(introductionRequests);
  const leadsWithIntros = new Set(allIntros.map(i => i.leadId)).size;
  const introductionRequestRate =
    total > 0 ? Math.round((leadsWithIntros / total) * 100) : 0;

  // Country breakdown
  const countryBreakdown: Record<string, number> = {};
  for (const l of allLeads) {
    const c = l.country ?? "Unknown";
    countryBreakdown[c] = (countryBreakdown[c] ?? 0) + 1;
  }

  // Goal breakdown
  const goalBreakdown: Record<string, number> = {};
  for (const l of allLeads) {
    const g = l.pilotGoal ?? "Unknown";
    goalBreakdown[g] = (goalBreakdown[g] ?? 0) + 1;
  }

  // Funding breakdown
  const fundingBreakdown: Record<string, number> = {};
  for (const l of allLeads) {
    const f = l.fundingMethod ?? "Unknown";
    fundingBreakdown[f] = (fundingBreakdown[f] ?? 0) + 1;
  }

  // Budget breakdown
  const budgetBreakdown: Record<string, number> = {};
  for (const l of allLeads) {
    const b = l.budgetRange ?? "Unknown";
    budgetBreakdown[b] = (budgetBreakdown[b] ?? 0) + 1;
  }

  // Source breakdown
  const sourceBreakdown: Record<string, number> = {};
  for (const l of allLeads) {
    const s = (l as any).source ?? "Unknown";
    if (s && s !== "Unknown")
      sourceBreakdown[s] = (sourceBreakdown[s] ?? 0) + 1;
  }

  // Score distribution (buckets of 10)
  const scoreDistribution = Array.from({ length: 10 }, (_, i) => ({
    range: `${i * 10}–${i * 10 + 9}`,
    count: allLeads.filter(
      l => (l.leadScore ?? 0) >= i * 10 && (l.leadScore ?? 0) <= i * 10 + 9
    ).length,
  }));

  // Leads per day (last 30 days)
  const now = Date.now();
  const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;
  const recentLeads = allLeads.filter(
    l => l.createdAt.getTime() >= thirtyDaysAgo
  );
  const leadsPerDayMap: Record<string, number> = {};
  for (const l of recentLeads) {
    const day = l.createdAt.toISOString().slice(0, 10);
    leadsPerDayMap[day] = (leadsPerDayMap[day] ?? 0) + 1;
  }
  const leadsPerDay = Object.entries(leadsPerDayMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, count }));

  return {
    total,
    hot,
    warm,
    cold,
    introductionRequestRate,
    avgScore,
    countryBreakdown,
    goalBreakdown,
    fundingBreakdown,
    budgetBreakdown,
    sourceBreakdown,
    scoreDistribution,
    leadsPerDay,
  };
}

// ─── Licence Quiz Helpers ─────────────────────────────────────────────────────

export async function createLicenceQuizLead(
  data: Omit<
    InsertLicenceQuizLead,
    "id" | "createdAt" | "email" | "consentToContact" | "proceededToMainQuiz"
  >
) {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");
  const [result] = await db.insert(licenceQuizLeads).values({
    ...data,
    consentToContact: false,
    proceededToMainQuiz: false,
  });
  return { id: (result as any).insertId as number };
}

export async function updateLicenceQuizEmail(
  id: number,
  email: string,
  consentToContact: boolean
) {
  const db = await getDb();
  if (!db) return;
  await db
    .update(licenceQuizLeads)
    .set({ email, consentToContact })
    .where(eq(licenceQuizLeads.id, id));
}

export async function getLicenceQuizStats(): Promise<
  Record<string, { total: number; proceededRate: number }>
> {
  const db = await getDb();
  if (!db) return {};
  const rows = await db.select().from(licenceQuizLeads);
  const stats: Record<string, { total: number; proceeded: number }> = {};
  for (const row of rows) {
    const key = row.recommendedLicence;
    if (!stats[key]) stats[key] = { total: 0, proceeded: 0 };
    stats[key].total++;
    if (row.proceededToMainQuiz) stats[key].proceeded++;
  }
  return Object.fromEntries(
    Object.entries(stats).map(([k, v]) => [
      k,
      {
        total: v.total,
        proceededRate:
          v.total > 0 ? Math.round((v.proceeded / v.total) * 100) : 0,
      },
    ])
  );
}

// ─── Finance Interest helpers ─────────────────────────────────────────────────
import {
  financeInterests,
  flightDeckShares,
  flightDeckEmailCaptures,
  schoolSubscriptions,
  InsertFlightDeckEmailCapture,
  InsertSchoolSubscription,
} from "../drizzle/schema";

export async function createFinanceInterest(data: {
  name: string;
  email: string;
  phone?: string;
  trainingRoute?: string;
  estimatedBudget?: string;
  message?: string;
  source?: string;
  leadId?: number;
  consentToContact: boolean;
}): Promise<number | null> {
  const db = await getDb();
  if (!db) return null;
  const result = await db.insert(financeInterests).values({
    name: data.name,
    email: data.email,
    phone: data.phone ?? null,
    trainingRoute: data.trainingRoute ?? null,
    estimatedBudget: data.estimatedBudget ?? null,
    message: data.message ?? null,
    source: data.source ?? null,
    leadId: data.leadId ?? null,
    consentToContact: data.consentToContact,
  });
  return (result as any)[0]?.insertId ?? null;
}

// ─── Flight Deck Share helpers ────────────────────────────────────────────────
export async function createFlightDeckShare(
  shareId: string,
  resultJson: string
): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(flightDeckShares).values({ shareId, resultJson });
}

export async function getFlightDeckShare(
  shareId: string
): Promise<string | null> {
  const db = await getDb();
  if (!db) return null;
  const rows = await db
    .select()
    .from(flightDeckShares)
    .where(eq(flightDeckShares.shareId, shareId))
    .limit(1);
  return rows[0]?.resultJson ?? null;
}

// ─── Flight Deck Email Captures ─────────────────────────────────────────────
export async function createFlightDeckEmailCapture(data: {
  email: string;
  name?: string;
  phase?: string;
  score?: number;
  biggestBarrier?: string;
  consentToContact: boolean;
  source?: string;
}): Promise<number | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    const result = await db.insert(flightDeckEmailCaptures).values({
      email: data.email,
      name: data.name ?? null,
      phase: data.phase ?? null,
      score: data.score ?? null,
      biggestBarrier: data.biggestBarrier ?? null,
      consentToContact: data.consentToContact,
      source: data.source ?? "flight_deck_results",
    });
    return (result as any)[0]?.insertId ?? null;
  } catch (e) {
    console.error("[DB] createFlightDeckEmailCapture failed:", e);
    return null;
  }
}

// ─── School Subscriptions ─────────────────────────────────────────────────────
export async function getSchoolSubscription(schoolId: number) {
  const db = await getDb();
  if (!db) return null;
  const rows = await db
    .select()
    .from(schoolSubscriptions)
    .where(eq(schoolSubscriptions.schoolId, schoolId))
    .limit(1);
  return rows[0] ?? null;
}

export async function upsertSchoolSubscription(
  data: Omit<InsertSchoolSubscription, "id" | "createdAt" | "updatedAt">
) {
  const db = await getDb();
  if (!db) return;
  const existing = await getSchoolSubscription(data.schoolId);
  if (existing) {
    await db
      .update(schoolSubscriptions)
      .set({ ...data })
      .where(eq(schoolSubscriptions.schoolId, data.schoolId));
  } else {
    await db.insert(schoolSubscriptions).values(data);
  }
}

// ─── Calculator Sessions ──────────────────────────────────────────────────────
export async function createCalcSession(
  data: Omit<InsertCalcSession, "id" | "createdAt">
): Promise<void> {
  const db = await getDb();
  if (!db) return;
  try {
    await db.insert(calcSessions).values(data);
  } catch (e) {
    console.error("[DB] createCalcSession failed:", e);
  }
}

// ─── Public Platform Stats (homepage) ───────────────────────────────────────
export async function getPublicPlatformStats() {
  const db = await getDb();
  if (!db)
    return { totalAssessments: 0, avgScore: 0, mostCommonBarrier: "Finance" };

  const allLeads = await db
    .select({
      leadScore: leads.leadScore,
      biggestConcern: leads.biggestConcern,
    })
    .from(leads);

  const totalAssessments = allLeads.length;
  const avgScore =
    totalAssessments > 0
      ? Math.round(
          allLeads.reduce((s, l) => s + (l.leadScore ?? 0), 0) /
            totalAssessments
        )
      : 0;

  const barrierMap: Record<string, number> = {};
  for (const l of allLeads) {
    const b = l.biggestConcern ?? "Finance";
    barrierMap[b] = (barrierMap[b] ?? 0) + 1;
  }
  const mostCommonBarrier =
    Object.entries(barrierMap).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "Finance";

  return { totalAssessments, avgScore, mostCommonBarrier };
}

// ─── Roadmap Purchases ────────────────────────────────────────────────────────
export async function createRoadmapPurchase(data: {
  leadId: number;
  stripeSessionId: string;
  email?: string;
  currency?: string;
}): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(roadmapPurchases).values({
    leadId: data.leadId,
    stripeSessionId: data.stripeSessionId,
    email: data.email,
    currency: data.currency ?? "gbp",
    status: "pending",
  });
}

export async function completeRoadmapPurchase(
  stripeSessionId: string,
  paymentIntentId?: string
): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db
    .update(roadmapPurchases)
    .set({
      status: "complete",
      stripePaymentIntentId: paymentIntentId,
      completedAt: new Date(),
    })
    .where(eq(roadmapPurchases.stripeSessionId, stripeSessionId));
}

export async function getRoadmapPurchaseByLead(
  leadId: number
): Promise<{ status: string } | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const rows = await db
    .select({ status: roadmapPurchases.status })
    .from(roadmapPurchases)
    .where(eq(roadmapPurchases.leadId, leadId))
    .orderBy(desc(roadmapPurchases.createdAt))
    .limit(1);
  return rows[0];
}

export async function getRoadmapPurchaseBySession(
  stripeSessionId: string
): Promise<RoadmapPurchase | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const rows = await db
    .select()
    .from(roadmapPurchases)
    .where(eq(roadmapPurchases.stripeSessionId, stripeSessionId))
    .limit(1);
  return rows[0];
}

// ─── Quiz Email Captures ──────────────────────────────────────────────────────
export async function createQuizEmailCapture(data: {
  email: string;
  name?: string;
  quizSlug: string;
  quizTitle?: string;
  resultId?: string;
  resultTitle?: string;
  consentToContact: boolean;
}): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");
  const result = await db
    .insert(quizEmailCaptures)
    .values({
      email: data.email,
      name: data.name,
      quizSlug: data.quizSlug,
      quizTitle: data.quizTitle,
      resultId: data.resultId,
      resultTitle: data.resultTitle,
      consentToContact: data.consentToContact,
    });
  return (result[0] as any).insertId;
}

// ─── Pilot Jobs ───────────────────────────────────────────────────────────────
import {
  PilotJob,
  InsertPilotJob,
  PilotStory,
  InsertPilotStory,
  pilotJobs,
  pilotStories,
} from "../drizzle/schema";

export async function listPilotJobs(region?: string): Promise<PilotJob[]> {
  const db = await getDb();
  if (!db) return [];
  const query = db.select().from(pilotJobs).where(eq(pilotJobs.active, true)).orderBy(desc(pilotJobs.postedAt));
  const results = await query;
  if (region) return results.filter(j => j.region === region || j.region === "Global");
  return results;
}

export async function createPilotJob(data: Omit<InsertPilotJob, "id" | "createdAt" | "updatedAt">): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");
  const [result] = await db.insert(pilotJobs).values(data);
  return (result as any).insertId;
}

export async function updatePilotJob(id: number, data: Partial<InsertPilotJob>): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.update(pilotJobs).set(data).where(eq(pilotJobs.id, id));
}

export async function deletePilotJob(id: number): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.delete(pilotJobs).where(eq(pilotJobs.id, id));
}

// ─── Pilot Stories ────────────────────────────────────────────────────────────
export async function listPilotStories(): Promise<PilotStory[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(pilotStories).where(eq(pilotStories.active, true)).orderBy(desc(pilotStories.createdAt));
}

export async function createPilotStory(data: Omit<InsertPilotStory, "id" | "createdAt" | "updatedAt">): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database unavailable");
  const [result] = await db.insert(pilotStories).values(data);
  return (result as any).insertId;
}

export async function updatePilotStory(id: number, data: Partial<InsertPilotStory>): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.update(pilotStories).set(data).where(eq(pilotStories.id, id));
}

export async function deletePilotStory(id: number): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.delete(pilotStories).where(eq(pilotStories.id, id));
}
