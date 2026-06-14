import { useEffect } from "react";
import { useLocation } from "wouter";
import { trackPageView } from "../lib/analytics";

/**
 * Automatically tracks a pageview event whenever the route changes.
 * Add this hook once in App.tsx (or a top-level component) to track all pages.
 */
export function usePageTracking() {
  const [location] = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);
}
