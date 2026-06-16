import { useLocation } from "wouter";
import { useCountry, COUNTRY_CONFIGS, Country } from "@/contexts/CountryContext";
import SEO from "@/components/SEO";
import { Globe, ChevronRight } from "lucide-react";

const COUNTRY_DESCRIPTIONS: Record<Exclude<Country, null>, string> = {
  uk: "CAA licences, ATPL training, UK flight schools, airline cadet programmes",
  us: "FAA licences, ATP training, Part 61 vs 141, US airline cadet programmes",
  australia: "CASA licences, CPL/ATPL training, Australian flight schools, cadet programmes",
  canada: "Transport Canada CPL/ATPL, Canadian flight schools, NAV CANADA airspace",
  europe: "EASA licences, integrated ATPL, European flight academies, EU airline cadets",
  uae: "GCAA licences, Gulf airline cadet programmes, UAE flight schools",
  "south-africa": "SACAA licences, South African flight schools, CPL/ATPL training",
  "new-zealand": "CAA NZ licences, NZ flight schools, CPL/ATPL training",
  india: "DGCA licences, Indian flight schools, CPL training, airline cadet programmes",
  singapore: "CAAS licences, Singapore flight schools, regional airline pathways",
  other: "Global guidance — we'll tailor recommendations to your location",
};

const PRIMARY_MARKETS: Exclude<Country, null>[] = ["uk", "us", "australia", "canada", "europe"];
const SECONDARY_MARKETS: Exclude<Country, null>[] = ["uae", "south-africa", "new-zealand", "india", "singapore", "other"];

export default function CountrySelect() {
  const { setCountry } = useCountry();
  const [, navigate] = useLocation();

  const handleSelect = (c: Exclude<Country, null>) => {
    setCountry(c);
    navigate(COUNTRY_CONFIGS[c].homeHref);
  };

  return (
    <>
      <SEO
        title="AviatorIQ — Choose Your Country"
        description="The world's most personalised pilot training guidance platform. Select your country to get started with tailored costs, routes, and school recommendations."
        canonical="https://aviatoriq.com/select"
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        style={{ background: "oklch(0.14 0.04 240)" }}>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "oklch(0.65 0.22 45)" }}>
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">AviatorIQ</span>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ background: "oklch(0.25 0.06 240)", color: "oklch(0.65 0.22 45)" }}>
            <Globe className="w-4 h-4" />
            Select your country
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Where are you based?
          </h1>
          <p className="text-lg max-w-md mx-auto" style={{ color: "oklch(0.7 0.04 240)" }}>
            We'll give you guidance, costs, and school recommendations specific to your country and regulator.
          </p>
        </div>

        {/* Primary markets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
          {PRIMARY_MARKETS.map((code) => {
            const cfg = COUNTRY_CONFIGS[code];
            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className="group relative flex flex-col items-start p-6 rounded-2xl border text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
                style={{ background: "oklch(0.18 0.05 240)", borderColor: "oklch(0.28 0.06 240)" }}
              >
                <div className="text-4xl mb-4">{cfg.flag}</div>
                <h2 className="text-xl font-bold text-white mb-1">{cfg.label}</h2>
                <p className="text-sm mb-4 flex-1" style={{ color: "oklch(0.65 0.04 240)" }}>
                  {COUNTRY_DESCRIPTIONS[code]}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "oklch(0.65 0.22 45)" }}>
                  Get started <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Secondary markets */}
        <div className="mt-6 w-full max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-center" style={{ color: "oklch(0.5 0.04 240)" }}>
            More markets
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SECONDARY_MARKETS.map((code) => {
              const cfg = COUNTRY_CONFIGS[code];
              return (
                <button
                  key={code}
                  onClick={() => handleSelect(code)}
                  className="group flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 hover:scale-[1.01]"
                  style={{ background: "oklch(0.16 0.04 240)", borderColor: "oklch(0.24 0.05 240)" }}
                >
                  <span className="text-2xl">{cfg.flag}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{cfg.label}</p>
                    <p className="text-xs" style={{ color: "oklch(0.55 0.04 240)" }}>{cfg.regulator}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all" style={{ color: "oklch(0.65 0.22 45)" }} />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}
