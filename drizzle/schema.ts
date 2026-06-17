import {
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

// ─── Users ────────────────────────────────────────────────────────────────────
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Leads ────────────────────────────────────────────────────────────────────
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 64 }),
  country: varchar("country", { length: 100 }),
  city: varchar("city", { length: 100 }),
  age: int("age"),
  pilotGoal: varchar("pilotGoal", { length: 200 }),
  seriousness: varchar("seriousness", { length: 200 }),
  spokenToSchool: varchar("spokenToSchool", { length: 200 }),
  preferredRoute: varchar("preferredRoute", { length: 200 }),
  openToAbroad: varchar("openToAbroad", { length: 200 }),
  fundingMethod: varchar("fundingMethod", { length: 200 }),
  budgetRange: varchar("budgetRange", { length: 100 }),
  wantsFinanceInfo: varchar("wantsFinanceInfo", { length: 100 }),
  educationLevel: varchar("educationLevel", { length: 200 }),
  class1Medical: varchar("class1Medical", { length: 200 }),
  flyingExperience: varchar("flyingExperience", { length: 200 }),
  rightToWorkStudy: varchar("rightToWorkStudy", { length: 100 }),
  biggestConcern: varchar("biggestConcern", { length: 200 }),
  startTimeframe: varchar("startTimeframe", { length: 200 }),
  wantsSchoolContact: varchar("wantsSchoolContact", { length: 20 }),
  source: varchar("source", { length: 200 }),
  preferredContact: varchar("preferredContact", { length: 50 }),
  contactConsentSchools: boolean("contactConsentSchools").default(true),
  contactConsentFinance: boolean("contactConsentFinance").default(false),
  contactConsentMedical: boolean("contactConsentMedical").default(false),
  contactConsentPartners: boolean("contactConsentPartners").default(false),
  consentToContact: boolean("consentToContact").default(false).notNull(),
  consentToShare: boolean("consentToShare").default(false).notNull(),
  writtenAnswer: text("writtenAnswer"),
  aiSummary: text("aiSummary"),
  aiRoadmap: text("aiRoadmap"),
  leadScore: int("leadScore").default(0).notNull(),
  leadCategory: mysqlEnum("leadCategory", ["Hot", "Warm", "Cold"]).default("Cold").notNull(),
  leadValue: mysqlEnum("leadValue", ["High", "Medium", "Low"]).default("Low").notNull(),
  intentScore: int("intentScore").default(0).notNull(),
  pdfKey: varchar("pdfKey", { length: 500 }),
  status: mysqlEnum("status", [
    "New",
    "Reviewed",
    "Contacted",
    "Sent to School",
    "School Interested",
    "Not Suitable",
    "Converted",
    "Archived",
  ]).default("New").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

// ─── Flight Schools ───────────────────────────────────────────────────────────
export const flightSchools = mysqlTable("flight_schools", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  country: varchar("country", { length: 100 }),
  city: varchar("city", { length: 100 }),
  airport: varchar("airport", { length: 100 }),
  courses: text("courses"),
  integratedAtpl: boolean("integratedAtpl").default(false),
  modularAtpl: boolean("modularAtpl").default(false),
  ppl: boolean("ppl").default(false),
  priceRange: varchar("priceRange", { length: 100 }),
  financeAvailable: mysqlEnum("financeAvailable", ["yes", "no", "unknown"]).default("unknown"),
  accommodationAvailable: mysqlEnum("accommodationAvailable", ["yes", "no", "unknown"]).default("unknown"),
  airlinePartnerships: text("airlinePartnerships"),
  website: varchar("website", { length: 500 }),
  contactEmail: varchar("contactEmail", { length: 320 }),
  phone: varchar("phone", { length: 64 }),
  description: text("description"),
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export type FlightSchool = typeof flightSchools.$inferSelect;
export type InsertFlightSchool = typeof flightSchools.$inferInsert;

// ─── Lead Assignments ─────────────────────────────────────────────────────────
export const leadAssignments = mysqlTable("lead_assignments", {
  id: int("id").autoincrement().primaryKey(),
  leadId: int("leadId").notNull(),
  schoolId: int("schoolId").notNull(),
  assignedAt: timestamp("assignedAt").defaultNow().notNull(),
  status: varchar("status", { length: 100 }),
  notes: text("notes"),
  estimatedValue: int("estimatedValue"),
});
export type LeadAssignment = typeof leadAssignments.$inferSelect;
export type InsertLeadAssignment = typeof leadAssignments.$inferInsert;

// ─── Admin Notes ──────────────────────────────────────────────────────────────
export const adminNotes = mysqlTable("admin_notes", {
  id: int("id").autoincrement().primaryKey(),
  leadId: int("leadId").notNull(),
  note: text("note").notNull(),
  authorId: int("authorId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type AdminNote = typeof adminNotes.$inferSelect;
export type InsertAdminNote = typeof adminNotes.$inferInsert;

// ─── School Waitlist ──────────────────────────────────────────────────────────
export const schoolWaitlist = mysqlTable("school_waitlist", {
  id: int("id").autoincrement().primaryKey(),
  schoolName: varchar("schoolName", { length: 255 }).notNull(),
  country: varchar("country", { length: 100 }),
  contactName: varchar("contactName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  website: varchar("website", { length: 500 }),
  coursesOffered: text("coursesOffered"),
  financeAvailable: boolean("financeAvailable").default(false),
  interestedInLeads: boolean("interestedInLeads").default(true),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type SchoolWaitlistEntry = typeof schoolWaitlist.$inferSelect;
export type InsertSchoolWaitlistEntry = typeof schoolWaitlist.$inferInsert;

// ─── Introduction Requests ────────────────────────────────────────────────────
export const introductionRequests = mysqlTable("introduction_requests", {
  id: int("id").autoincrement().primaryKey(),
  leadId: int("leadId").notNull(),
  schoolId: int("schoolId").notNull(),
  schoolName: varchar("schoolName", { length: 255 }),
  status: mysqlEnum("status", ["Pending", "Sent", "Responded", "Declined"]).default("Pending").notNull(),
  sentAt: timestamp("sentAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type IntroductionRequest = typeof introductionRequests.$inferSelect;
export type InsertIntroductionRequest = typeof introductionRequests.$inferInsert;

// ─── Licence Quiz Leads ───────────────────────────────────────────────────────
export const licenceQuizLeads = mysqlTable("licence_quiz_leads", {
  id: int("id").autoincrement().primaryKey(),
  goal: varchar("goal", { length: 50 }),
  timeCommitment: varchar("timeCommitment", { length: 50 }),
  budget: varchar("budget", { length: 50 }),
  wantsCommercial: varchar("wantsCommercial", { length: 50 }),
  experience: varchar("experience", { length: 50 }),
  location: varchar("location", { length: 50 }),
  speedPriority: varchar("speedPriority", { length: 50 }),
  mainPriority: varchar("mainPriority", { length: 50 }),
  recommendedLicence: varchar("recommendedLicence", { length: 50 }).notNull(),
  email: varchar("email", { length: 320 }),
  consentToContact: boolean("consentToContact").default(false).notNull(),
  proceededToMainQuiz: boolean("proceededToMainQuiz").default(false).notNull(),
  source: varchar("source", { length: 100 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type LicenceQuizLead = typeof licenceQuizLeads.$inferSelect;
export type InsertLicenceQuizLead = typeof licenceQuizLeads.$inferInsert;

// ─── Finance Interests ────────────────────────────────────────────────────────
export const financeInterests = mysqlTable("finance_interests", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  trainingRoute: varchar("trainingRoute", { length: 50 }),
  estimatedBudget: varchar("estimatedBudget", { length: 50 }),
  message: text("message"),
  source: varchar("source", { length: 100 }),
  leadId: int("leadId"),
  consentToContact: boolean("consentToContact").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type FinanceInterest = typeof financeInterests.$inferSelect;
export type InsertFinanceInterest = typeof financeInterests.$inferInsert;

// ─── Flight Deck Shares ───────────────────────────────────────────────────────
export const flightDeckShares = mysqlTable("flight_deck_shares", {
  id: int("id").autoincrement().primaryKey(),
  shareId: varchar("shareId", { length: 32 }).notNull().unique(),
  resultJson: text("resultJson").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type FlightDeckShare = typeof flightDeckShares.$inferSelect;
export type InsertFlightDeckShare = typeof flightDeckShares.$inferInsert;

// ─── Flight Deck Email Captures ───────────────────────────────────────────────
export const flightDeckEmailCaptures = mysqlTable("flight_deck_email_captures", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull(),
  name: varchar("name", { length: 200 }),
  phase: varchar("phase", { length: 50 }),
  score: int("score"),
  biggestBarrier: varchar("biggestBarrier", { length: 100 }),
  consentToContact: boolean("consentToContact").default(false).notNull(),
  source: varchar("source", { length: 100 }).default("flight_deck_results"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type FlightDeckEmailCapture = typeof flightDeckEmailCaptures.$inferSelect;
export type InsertFlightDeckEmailCapture = typeof flightDeckEmailCaptures.$inferInsert;

// ─── Calculator Sessions ──────────────────────────────────────────────────────
export const calcSessions = mysqlTable("calc_sessions", {
  id: int("id").autoincrement().primaryKey(),
  route: varchar("route", { length: 64 }).notNull(),
  location: varchar("location", { length: 64 }).notNull(),
  pace: varchar("pace", { length: 32 }).notNull(),
  experience: varchar("experience", { length: 32 }).notNull(),
  funding: varchar("funding", { length: 32 }).notNull(),
  totalEstimate: int("totalEstimate").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type CalcSession = typeof calcSessions.$inferSelect;
export type InsertCalcSession = typeof calcSessions.$inferInsert;

// ─── School Subscriptions ─────────────────────────────────────────────────────
export const schoolSubscriptions = mysqlTable("school_subscriptions", {
  id: int("id").autoincrement().primaryKey(),
  schoolId: int("schoolId").notNull().unique(),
  tier: mysqlEnum("tier", ["basic", "featured", "premium"]).default("basic").notNull(),
  status: mysqlEnum("status", ["active", "trialing", "past_due", "cancelled", "pending"]).default("pending").notNull(),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 255 }),
  leadCreditsUsed: int("leadCreditsUsed").default(0).notNull(),
  leadCreditsLimit: int("leadCreditsLimit").default(0).notNull(),
  billingEmail: varchar("billingEmail", { length: 320 }),
  activatedAt: timestamp("activatedAt"),
  expiresAt: timestamp("expiresAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
export type SchoolSubscription = typeof schoolSubscriptions.$inferSelect;
export type InsertSchoolSubscription = typeof schoolSubscriptions.$inferInsert;
