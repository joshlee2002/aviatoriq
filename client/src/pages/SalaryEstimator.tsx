import { useState, useMemo, useEffect } from "react";
import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Link } from "wouter";
import { TrendingUp, AlertTriangle, Info, ArrowRight } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";

// ─── Data ─────────────────────────────────────────────────────────────────────
// All figures are indicative ranges sourced from BALPA, ALPA, and public
// collective agreements. They are not guarantees. Actual pay depends on
// airline, seniority, contract type, and collective bargaining outcomes.

interface SalaryBand {
  role: string;
  yearsExperience: string;
  ukGbp: [number, number];
  usUsd: [number, number];
  euEur: [number, number];
  caAud: [number, number]; // Canada CAD
  auAud: [number, number]; // Australia AUD
  source: string;
  caveat: string;
}

const SALARY_DATA: SalaryBand[] = [
  {
    role: "First Officer (Regional/Low-Cost)",
    yearsExperience: "0–3 years",
    ukGbp: [38000, 55000],
    usUsd: [80000, 130000],
    euEur: [35000, 55000],
    caAud: [70000, 100000],
    auAud: [75000, 110000],
    source: "BALPA (UK), ALPA (US), public CBA data",
    caveat:
      "UK figure reflects typical low-cost/regional FO starting pay. US figure reflects regional airline FO pay post-2024 contract improvements. All figures are gross before tax.",
  },
  {
    role: "First Officer (Major/Long-Haul)",
    yearsExperience: "3–8 years",
    ukGbp: [60000, 90000],
    usUsd: [140000, 200000],
    euEur: [55000, 85000],
    caAud: [100000, 150000],
    auAud: [110000, 160000],
    source: "BALPA (UK), ALPA (US), public CBA data",
    caveat:
      "Progression to major/long-haul depends on airline hiring cycles and seniority. These figures are not guaranteed at any specific point in a career.",
  },
  {
    role: "Captain (Narrow-Body)",
    yearsExperience: "8–15 years",
    ukGbp: [90000, 130000],
    usUsd: [200000, 280000],
    euEur: [80000, 120000],
    caAud: [150000, 200000],
    auAud: [160000, 220000],
    source: "BALPA (UK), ALPA (US), public CBA data",
    caveat:
      "Upgrade to Captain depends on airline seniority lists and fleet requirements. Timeline varies significantly between airlines.",
  },
  {
    role: "Captain (Wide-Body/Long-Haul)",
    yearsExperience: "15+ years",
    ukGbp: [130000, 200000],
    usUsd: [280000, 400000],
    euEur: [120000, 180000],
    caAud: [200000, 280000],
    auAud: [210000, 300000],
    source: "BALPA (UK), ALPA (US), public CBA data",
    caveat:
      "Senior Captain pay at major carriers. Includes base salary only. Total compensation including allowances, pension, and benefits may be significantly higher.",
  },
];

type CountryKey = "uk" | "us" | "eu" | "ca" | "au";

const COUNTRY_CONFIG: Record<
  CountryKey,
  { label: string; sym: string; key: keyof SalaryBand }
> = {
  uk: { label: "United Kingdom", sym: "£", key: "ukGbp" },
  us: { label: "United States", sym: "$", key: "usUsd" },
  eu: { label: "Europe (EASA)", sym: "€", key: "euEur" },
  ca: { label: "Canada", sym: "CA$", key: "caAud" },
  au: { label: "Australia", sym: "A$", key: "auAud" },
};

// Map CountryContext country keys to SalaryEstimator CountryKey
const CONTEXT_TO_SALARY_KEY: Record<string, CountryKey> = {
  uk: "uk",
  us: "us",
  europe: "eu",
  canada: "ca",
  australia: "au",
  "new-zealand": "au",
  uae: "uk",
  "south-africa": "uk",
  india: "uk",
  singapore: "uk",
  other: "uk",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function SalaryEstimator() {
  const { country: ctxCountry } = useCountry();
  const [country, setCountry] = useState<CountryKey>("uk");

  // Auto-select salary market based on user's country
  useEffect(() => {
    const mapped = ctxCountry ? (CONTEXT_TO_SALARY_KEY[ctxCountry] ?? "uk") : "uk";
    setCountry(mapped);
  }, [ctxCountry]);
  const [yearsTraining, setYearsTraining] = useState(2);
  const [route, setRoute] = useState<"integrated" | "modular" | "cadet">(
    "integrated"
  );

  const cfg = COUNTRY_CONFIG[country];
  const sym = cfg.sym;

  const fmt = (n: number) => `${sym}${Math.round(n / 1000)}k`;
  const fmtFull = (n: number) => `${sym}${n.toLocaleString("en-GB")}`;

  // Estimated year of first job based on route
  const firstJobYear = useMemo(() => {
    const base = new Date().getFullYear();
    const trainingYears =
      route === "integrated" ? 2 : route === "modular" ? 3 : 2;
    return base + trainingYears + yearsTraining;
  }, [route, yearsTraining]);

  return (
    <>
      <SEO
        title="Pilot Salary Estimator | AviatorIQ"
        description="Estimate your pilot salary at each career stage — First Officer to Senior Captain. Compare UK, US, Europe, Canada, and Australia. All figures are indicative ranges from BALPA and ALPA data."
        canonical="https://aviatoriq.com/tools/salary-estimator"
      />
      <PublicNav />
      <main className="min-h-screen bg-[var(--color-navy)] text-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              Salary Tool
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">
              Pilot Salary Estimator
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Understand realistic salary ranges at each stage of a pilot
              career. Figures are indicative ranges from BALPA, ALPA, and public
              collective bargaining agreements — not guarantees.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-4 mb-8 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200">
              <strong>These are indicative ranges, not guarantees.</strong>{" "}
              Actual pay depends on the specific airline, seniority position,
              contract type, and collective bargaining outcomes at the time of
              employment. Salary data is sourced from BALPA, ALPA, and publicly
              available collective agreements. Figures are gross before tax.
            </p>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <label className="block text-xs text-white/60 mb-2">
                Country / Market
              </label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value as CountryKey)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
              >
                {Object.entries(COUNTRY_CONFIG).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <label className="block text-xs text-white/60 mb-2">
                Training Route
              </label>
              <select
                value={route}
                onChange={e => setRoute(e.target.value as typeof route)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
              >
                <option value="integrated">Integrated (≈2 years)</option>
                <option value="modular">Modular (≈3 years)</option>
                <option value="cadet">Cadet Programme (≈2 years)</option>
              </select>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <label className="block text-xs text-white/60 mb-2">
                Years to Start Training
              </label>
              <input
                type="number"
                value={yearsTraining}
                onChange={e => setYearsTraining(Number(e.target.value))}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
                min={0}
                max={10}
              />
              <p className="text-xs text-white/40 mt-1">
                Estimated first job: ~{firstJobYear}
              </p>
            </div>
          </div>

          {/* Salary Bands */}
          <div className="space-y-4">
            {SALARY_DATA.map((band, i) => {
              const [low, high] = band[cfg.key] as [number, number];
              const midpoint = (low + high) / 2;
              return (
                <div
                  key={i}
                  className="bg-white/5 rounded-xl border border-white/10 p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <p className="font-semibold text-white">{band.role}</p>
                      <p className="text-sm text-white/50">
                        {band.yearsExperience} post-qualification
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-400">
                        {fmt(low)} – {fmt(high)}
                      </p>
                      <p className="text-xs text-white/40">gross per year</p>
                    </div>
                  </div>

                  {/* Bar visualisation */}
                  <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-3">
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
                      style={{
                        width: `${Math.min(100, (midpoint / 400000) * 100)}%`,
                      }}
                    />
                  </div>

                  <div className="flex gap-2 items-start mt-3">
                    <Info className="w-3.5 h-3.5 text-white/30 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-white/40">{band.caveat}</p>
                  </div>
                  <p className="text-xs text-white/30 mt-1">
                    Source: {band.source}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Source Note */}
          <div className="mt-8 bg-white/5 rounded-xl border border-white/10 p-5">
            <p className="text-sm font-semibold mb-2">About These Figures</p>
            <ul className="text-sm text-white/60 space-y-1.5 list-disc pl-5">
              <li>
                UK figures are informed by{" "}
                <a
                  href="https://www.balpa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white/80"
                >
                  BALPA
                </a>{" "}
                salary surveys and publicly available collective agreements.
              </li>
              <li>
                US figures are informed by{" "}
                <a
                  href="https://www.alpa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white/80"
                >
                  ALPA
                </a>{" "}
                data and the major 2024 contract wins at Delta, United,
                American, and Southwest.
              </li>
              <li>
                European figures reflect EASA-licensed pilots at major European
                carriers. Significant variation exists between low-cost and
                legacy carriers.
              </li>
              <li>
                All figures are gross before income tax, national
                insurance/social security, and pension contributions.
              </li>
              <li>
                Figures do not include allowances, per diems, profit share, or
                benefits — which can add 10–30% to total compensation at some
                airlines.
              </li>
            </ul>
          </div>

          {/* Tool CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/finance-calculator"
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Finance Repayment Calculator
            </Link>
            <Link
              href="/calculator"
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Training Cost Calculator
            </Link>
          </div>

          {/* Assessment CTA */}
          <div className="mt-8 bg-gradient-to-br from-blue-900/60 to-blue-800/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Next Step</p>
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              You've seen the salary potential. Now find out if the path is realistic for you.
            </h2>
            <p className="text-white/70 text-sm max-w-xl mx-auto mb-6">
              The full assessment combines your goals, finances, medical readiness and training options into one personalised result — with matched flight schools.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
            >
              Get My Full Pilot Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
