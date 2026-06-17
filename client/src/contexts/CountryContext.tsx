import { createContext, useContext, useState, ReactNode } from "react";

export type Country =
  | "uk"
  | "us"
  | "australia"
  | "canada"
  | "europe"
  | "uae"
  | "south-africa"
  | "new-zealand"
  | "india"
  | "singapore"
  | "other"
  | null;

export interface CountryConfig {
  code: Country;
  label: string;
  flag: string;
  homeHref: string;
  quizHref: string;
  schoolsHref: string;
  calculatorHref: string;
  roadmapHref: string;
  currency: string;
  currencySymbol: string;
  regulator: string;
}

export const COUNTRY_CONFIGS: Record<Exclude<Country, null>, CountryConfig> = {
  uk: {
    code: "uk",
    label: "United Kingdom",
    flag: "🇬🇧",
    homeHref: "/",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/roadmap",
    currency: "GBP",
    currencySymbol: "£",
    regulator: "CAA",
  },
  us: {
    code: "us",
    label: "United States",
    flag: "🇺🇸",
    homeHref: "/us",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/us/roadmap",
    currency: "USD",
    currencySymbol: "$",
    regulator: "FAA",
  },
  australia: {
    code: "australia",
    label: "Australia",
    flag: "🇦🇺",
    homeHref: "/australia",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "AUD",
    currencySymbol: "A$",
    regulator: "CASA",
  },
  canada: {
    code: "canada",
    label: "Canada",
    flag: "🇨🇦",
    homeHref: "/canada",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "CAD",
    currencySymbol: "C$",
    regulator: "Transport Canada",
  },
  europe: {
    code: "europe",
    label: "Europe (EASA)",
    flag: "🇪🇺",
    homeHref: "/europe",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "EUR",
    currencySymbol: "€",
    regulator: "EASA",
  },
  uae: {
    code: "uae",
    label: "United Arab Emirates",
    flag: "🇦🇪",
    homeHref: "/uae",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "AED",
    currencySymbol: "AED",
    regulator: "GCAA",
  },
  "south-africa": {
    code: "south-africa",
    label: "South Africa",
    flag: "🇿🇦",
    homeHref: "/south-africa",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "ZAR",
    currencySymbol: "R",
    regulator: "SACAA",
  },
  "new-zealand": {
    code: "new-zealand",
    label: "New Zealand",
    flag: "🇳🇿",
    homeHref: "/new-zealand",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "NZD",
    currencySymbol: "NZ$",
    regulator: "CAA NZ",
  },
  india: {
    code: "india",
    label: "India",
    flag: "🇮🇳",
    homeHref: "/india",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "INR",
    currencySymbol: "₹",
    regulator: "DGCA",
  },
  singapore: {
    code: "singapore",
    label: "Singapore",
    flag: "🇸🇬",
    homeHref: "/singapore",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "SGD",
    currencySymbol: "S$",
    regulator: "CAAS",
  },
  other: {
    code: "other",
    label: "Other",
    flag: "🌍",
    homeHref: "/",
    quizHref: "/quiz",
    schoolsHref: "/schools",
    calculatorHref: "/tools/calculator",
    roadmapHref: "/quiz",
    currency: "GBP",
    currencySymbol: "£",
    regulator: "CAA",
  },
};

// Map quiz country strings to CountryContext codes
export function quizCountryToCode(quizCountry: string): Country {
  const c = quizCountry.toLowerCase();
  if (
    c.includes("united kingdom") ||
    c.includes("uk") ||
    c.includes("england") ||
    c.includes("scotland") ||
    c.includes("wales") ||
    c.includes("northern ireland")
  )
    return "uk";
  if (c.includes("united states") || c.includes("usa") || c.includes("u.s."))
    return "us";
  if (c.includes("australia")) return "australia";
  if (c.includes("canada")) return "canada";
  if (
    c.includes("germany") ||
    c.includes("france") ||
    c.includes("spain") ||
    c.includes("netherlands") ||
    c.includes("sweden") ||
    c.includes("norway") ||
    c.includes("denmark") ||
    c.includes("ireland") ||
    c.includes("italy") ||
    c.includes("portugal") ||
    c.includes("belgium") ||
    c.includes("austria") ||
    c.includes("switzerland") ||
    c.includes("europe")
  )
    return "europe";
  if (c.includes("uae") || c.includes("emirates")) return "uae";
  if (c.includes("south africa")) return "south-africa";
  if (c.includes("new zealand")) return "new-zealand";
  if (c.includes("india")) return "india";
  if (c.includes("singapore")) return "singapore";
  return "other";
}

interface CountryContextType {
  country: Country;
  setCountry: (c: Country) => void;
  hasSelected: boolean;
  config: CountryConfig | null;
}

const CountryContext = createContext<CountryContextType>({
  country: null,
  setCountry: () => {},
  hasSelected: false,
  config: null,
});

const VALID_CODES: Country[] = [
  "uk",
  "us",
  "australia",
  "canada",
  "europe",
  "uae",
  "south-africa",
  "new-zealand",
  "india",
  "singapore",
  "other",
];

export function CountryProvider({ children }: { children: ReactNode }) {
  const [country, setCountryState] = useState<Country>(() => {
    const stored = localStorage.getItem("aviatoriq_country");
    if (stored && VALID_CODES.includes(stored as Country))
      return stored as Country;
    return null;
  });

  const hasSelected = country !== null;
  const config = country ? COUNTRY_CONFIGS[country] : null;

  const setCountry = (c: Country) => {
    setCountryState(c);
    if (c) localStorage.setItem("aviatoriq_country", c);
    else localStorage.removeItem("aviatoriq_country");
  };

  return (
    <CountryContext.Provider
      value={{ country, setCountry, hasSelected, config }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  return useContext(CountryContext);
}
