/**
 * CurrencyContext
 *
 * Detects the user's currency from their IP location (ipapi.co),
 * fetches live exchange rates (with GBP as base) from exchangerate.host,
 * and exposes formatPrice(gbpAmount) + a manual override switcher.
 *
 * Fallback rates are baked in so the app works even if the API is down.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

// ─── Supported currencies ─────────────────────────────────────────────────────

export interface CurrencyInfo {
  code: string;
  symbol: string;
  flag: string;
  name: string;
}

export const SUPPORTED_CURRENCIES: CurrencyInfo[] = [
  { code: "GBP", symbol: "£", flag: "🇬🇧", name: "British Pound" },
  { code: "USD", symbol: "$", flag: "🇺🇸", name: "US Dollar" },
  { code: "EUR", symbol: "€", flag: "🇪🇺", name: "Euro" },
  { code: "AUD", symbol: "A$", flag: "🇦🇺", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", flag: "🇨🇦", name: "Canadian Dollar" },
  { code: "NZD", symbol: "NZ$", flag: "🇳🇿", name: "New Zealand Dollar" },
  { code: "ZAR", symbol: "R", flag: "🇿🇦", name: "South African Rand" },
  { code: "AED", symbol: "د.إ", flag: "🇦🇪", name: "UAE Dirham" },
  { code: "SGD", symbol: "S$", flag: "🇸🇬", name: "Singapore Dollar" },
  { code: "INR", symbol: "₹", flag: "🇮🇳", name: "Indian Rupee" },
];

// ─── Fallback rates (GBP base, updated periodically) ─────────────────────────

const FALLBACK_RATES: Record<string, number> = {
  GBP: 1,
  USD: 1.27,
  EUR: 1.18,
  AUD: 1.96,
  CAD: 1.73,
  NZD: 2.12,
  ZAR: 23.5,
  AED: 4.66,
  SGD: 1.71,
  INR: 105.8,
};

// ─── Country → currency mapping ───────────────────────────────────────────────

const COUNTRY_CURRENCY: Record<string, string> = {
  // GBP
  GB: "GBP",
  IM: "GBP",
  JE: "GBP",
  GG: "GBP",
  // USD
  US: "USD",
  PR: "USD",
  GU: "USD",
  VI: "USD",
  AS: "USD",
  MP: "USD",
  // EUR
  DE: "EUR",
  FR: "EUR",
  ES: "EUR",
  IT: "EUR",
  NL: "EUR",
  BE: "EUR",
  AT: "EUR",
  PT: "EUR",
  IE: "EUR",
  FI: "EUR",
  GR: "EUR",
  LU: "EUR",
  SK: "EUR",
  SI: "EUR",
  EE: "EUR",
  LV: "EUR",
  LT: "EUR",
  CY: "EUR",
  MT: "EUR",
  HR: "EUR",
  // AUD
  AU: "AUD",
  CX: "AUD",
  CC: "AUD",
  NF: "AUD",
  // CAD
  CA: "CAD",
  // NZD
  NZ: "NZD",
  // ZAR
  ZA: "ZAR",
  // AED
  AE: "AED",
  // SGD
  SG: "SGD",
  // INR
  IN: "INR",
};

// ─── Context types ────────────────────────────────────────────────────────────

interface CurrencyContextValue {
  currency: CurrencyInfo;
  rates: Record<string, number>;
  setCurrency: (code: string) => void;
  formatPrice: (gbpAmount: number, opts?: { compact?: boolean }) => string;
  converting: boolean;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyInfo>(
    SUPPORTED_CURRENCIES[0] // default GBP
  );
  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES);
  const [converting, setConverting] = useState(true);

  // 1. Detect country from IP, then set currency
  useEffect(() => {
    let cancelled = false;

    async function detect() {
      // Check localStorage override first
      const stored = localStorage.getItem("aviatorpath_currency");
      if (stored) {
        const found = SUPPORTED_CURRENCIES.find(c => c.code === stored);
        if (found) {
          setCurrencyState(found);
          setConverting(false);
          return;
        }
      }

      try {
        const res = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(4000),
        });
        if (!res.ok) throw new Error("geo failed");
        const data = await res.json();
        if (cancelled) return;
        const countryCode: string = data.country_code ?? "";
        const currencyCode = COUNTRY_CURRENCY[countryCode] ?? "GBP";
        const found = SUPPORTED_CURRENCIES.find(c => c.code === currencyCode);
        if (found) setCurrencyState(found);
      } catch {
        // silently fall back to GBP
      } finally {
        if (!cancelled) setConverting(false);
      }
    }

    detect();
    return () => {
      cancelled = true;
    };
  }, []);

  // 2. Fetch live rates (GBP base) from open.er-api.com (free, no key needed)
  useEffect(() => {
    let cancelled = false;

    async function fetchRates() {
      try {
        // Use open.er-api.com — free tier, no API key required
        const res = await fetch(`https://open.er-api.com/v6/latest/GBP`, {
          signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) throw new Error("rates failed");
        const data = await res.json();
        if (cancelled) return;
        if (data.rates && typeof data.rates === "object") {
          setRates({ GBP: 1, ...data.rates });
        }
      } catch {
        // keep fallback rates on any error
      }
    }

    fetchRates();
    return () => {
      cancelled = true;
    };
  }, []);

  const setCurrency = useCallback((code: string) => {
    const found = SUPPORTED_CURRENCIES.find(c => c.code === code);
    if (!found) return;
    setCurrencyState(found);
    localStorage.setItem("aviatorpath_currency", code);
  }, []);

  const formatPrice = useCallback(
    (gbpAmount: number, opts?: { compact?: boolean }) => {
      const rate = rates[currency.code] ?? 1;
      const converted = Math.round(gbpAmount * rate);
      const locale = currency.code === "GBP" ? "en-GB" : "en-US";
      if (opts?.compact && converted >= 1000) {
        const k = converted / 1000;
        return `${currency.symbol}${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}k`;
      }
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency.code,
        maximumFractionDigits: 0,
      }).format(converted);
    },
    [currency, rates]
  );

  return (
    <CurrencyContext.Provider
      value={{ currency, rates, setCurrency, formatPrice, converting }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}
