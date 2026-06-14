/**
 * AviatorIQ Analytics
 * Uses PostHog for privacy-friendly, GDPR-compliant analytics.
 * No cookies by default — uses localStorage persistence.
 *
 * To activate: set VITE_POSTHOG_KEY in your .env file.
 * Get a free key at https://posthog.com (free up to 1M events/month).
 *
 * Falls back to Umami if PostHog key is not set (backward compat).
 */

import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const POSTHOG_HOST = (import.meta.env.VITE_POSTHOG_HOST as string | undefined) || "https://eu.i.posthog.com";

let initialised = false;

export function initAnalytics() {
  if (initialised || !POSTHOG_KEY) return;
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    persistence: "localStorage",
    autocapture: false,
    capture_pageview: false,
    disable_session_recording: true,
    loaded: (ph) => {
      if (import.meta.env.DEV) ph.debug();
    },
  });
  initialised = true;
}

/** Track a page view — call on every route change */
export function trackPageView(path: string) {
  if (POSTHOG_KEY) {
    posthog.capture("$pageview", { $current_url: window.location.origin + path });
  }
}

/** Track a named event with optional properties */
export function trackEvent(event: string, properties?: Record<string, unknown>) {
  try {
    if (POSTHOG_KEY) {
      posthog.capture(event, properties);
    }
    // Umami fallback
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track(event, properties);
    }
  } catch (_) {
    // Analytics failures must never break the app
  }
}

/** Track tool usage */
export function trackToolUsed(tool: string, country: "uk" | "us") {
  trackEvent("tool_used", { tool, country });
}

/** Track guide read */
export function trackGuideRead(slug: string, title: string, country: "uk" | "us") {
  trackEvent("guide_read", { slug, title, country });
}

/** Track quiz/assessment start */
export function trackAssessmentStarted(type: "quiz" | "roadmap" | "roadmap_us") {
  trackEvent("assessment_started", { type });
}

/** Track quiz/assessment completed */
export function trackAssessmentCompleted(type: string, result: string) {
  trackEvent("assessment_completed", { type, result });
}

/** Track school directory view */
export function trackSchoolsViewed(country: "uk" | "us", filters?: Record<string, string>) {
  trackEvent("schools_viewed", { country, ...filters });
}

/** Track email signup */
export function trackEmailSignup(source: string) {
  trackEvent("email_signup", { source });
}

// Backward-compatible Analytics object (keeps existing calls working)
export const Analytics = {
  quizStarted: () => trackEvent("quiz_started"),
  quizCompleted: () => trackEvent("quiz_completed"),
  leadSubmitted: (score: number, category: string) =>
    trackEvent("lead_submitted", { score, category }),
  hotLeadGenerated: (country?: string) =>
    trackEvent("hot_lead_generated", { country: country ?? "unknown" }),
  schoolRecommendationClicked: (schoolName: string) =>
    trackEvent("school_recommendation_clicked", { school: schoolName }),
  contactRequested: () => trackEvent("contact_requested"),
};

export { posthog };
