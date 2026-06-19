import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Link } from "wouter";
import { TrendingUp, ArrowRight, AlertTriangle, Info } from "lucide-react";

const SALARY_GUIDES = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/guides/pilot-salary-uk-2026",
    range: "£38k–£200k",
    description:
      "UK pilot salaries from regional First Officer to senior long-haul Captain. BALPA-informed data.",
    regulator: "CAA",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    href: "/us/guides/pilot-salary-usa",
    range: "$80k–$400k",
    description:
      "US pilot salaries following the 2024 major carrier contract wins. ALPA and public CBA data.",
    regulator: "FAA",
  },
  {
    country: "Europe (EASA)",
    flag: "🇪🇺",
    href: "/europe/guides/europe-pilot-salary-2026",
    range: "€35k–€180k",
    description:
      "European pilot salaries across low-cost and legacy carriers. Significant variation by country.",
    regulator: "EASA",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    href: "/canada/guides/canada-pilot-salary-2026",
    range: "CA$70k–CA$280k",
    description:
      "Canadian pilot salaries following the 2024 ALPA contract improvements at Air Canada and WestJet.",
    regulator: "Transport Canada",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    href: "/australia/guides/australia-pilot-salary-2026",
    range: "A$75k–A$300k",
    description:
      "Australian pilot salaries at Qantas, Virgin Australia, Rex, and regional operators.",
    regulator: "CASA",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    href: "/uae/guides/uae-pilot-salary",
    range: "AED 25k–AED 80k/month",
    description:
      "UAE pilot salaries at Emirates, Etihad, flydubai, and Air Arabia. Tax-free income context.",
    regulator: "GCAA",
  },
];

const SALARY_FACTORS = [
  {
    factor: "Airline type",
    detail:
      "Major long-haul carriers pay significantly more than regional or low-cost operators.",
  },
  {
    factor: "Seniority",
    detail:
      "Pay is almost entirely seniority-based. Upgrade to Captain depends on the airline's seniority list.",
  },
  {
    factor: "Aircraft type",
    detail:
      "Wide-body (long-haul) captains typically earn more than narrow-body captains.",
  },
  {
    factor: "Collective agreements",
    detail:
      "Unionised airlines (BALPA, ALPA) have published pay scales. Non-union pay is less transparent.",
  },
  {
    factor: "Allowances and per diems",
    detail:
      "Total compensation often exceeds base salary by 10–30% when allowances are included.",
  },
  {
    factor: "Pension and benefits",
    detail:
      "Defined benefit pension schemes at some legacy carriers add significant long-term value.",
  },
];

export default function PilotSalaryHub() {
  return (
    <>
      <SEO
        title="Pilot Salary Guide 2026 | UK, USA, Europe, Canada, Australia | AviatorPath"
        description="Verified pilot salary guides for every major market. UK CAA, FAA, EASA, Transport Canada, CASA. From First Officer to Senior Captain. Use our free salary estimator."
        canonical="https://aviatorpath.com/hubs/pilot-salary"
      />
      <PublicNav />
      <main className="min-h-screen bg-[var(--color-navy)] text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              Pilot Salary
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl mb-4">
              Pilot Salary Guide 2026
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Realistic salary ranges at every career stage, for every major
              market. All figures are sourced from BALPA, ALPA, and publicly
              available collective agreements.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-4 mb-10 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200">
              <strong>
                Salary figures are indicative ranges, not guarantees.
              </strong>{" "}
              Actual pay depends on the specific airline, seniority position,
              contract type, and collective bargaining outcomes. Figures are
              gross before tax unless otherwise stated.
            </p>
          </div>

          {/* Country Salary Guides */}
          <h2 className="font-display font-bold text-2xl mb-6">
            Salary Guides by Country
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {SALARY_GUIDES.map(guide => (
              <Link key={guide.country} href={guide.href}>
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-5 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{guide.flag}</span>
                      <div>
                        <p className="font-semibold text-white">
                          {guide.country}
                        </p>
                        <p className="text-xs text-white/40">
                          Regulator: {guide.regulator}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 flex-shrink-0 mt-1 transition-colors" />
                  </div>
                  <p className="text-sm text-white/60 mb-3">
                    {guide.description}
                  </p>
                  <div className="bg-white/10 rounded-lg px-3 py-2 inline-block">
                    <p className="text-xs text-white/50">
                      Typical range (gross)
                    </p>
                    <p className="font-bold text-green-400 text-sm">
                      {guide.range}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* What Affects Salary */}
          <h2 className="font-display font-bold text-2xl mb-4">
            What Determines a Pilot's Salary?
          </h2>
          <div className="bg-white/5 rounded-xl border border-white/10 p-6 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SALARY_FACTORS.map(item => (
                <div key={item.factor} className="flex gap-3">
                  <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.factor}
                    </p>
                    <p className="text-sm text-white/60">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <Link href="/tools/salary-estimator">
              <div className="bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-5 transition-all cursor-pointer group">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="font-semibold text-white">
                    Pilot Salary Estimator
                  </p>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-white/60">
                  Compare salary ranges across career stages and 5 countries
                </p>
              </div>
            </Link>
            <Link href="/tools/finance-calculator">
              <div className="bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-5 transition-all cursor-pointer group">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="font-semibold text-white">
                    Finance Repayment Calculator
                  </p>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-white/60">
                  Model your loan repayments against pilot salary projections
                </p>
              </div>
            </Link>
          </div>

          {/* Source Note */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-5">
            <p className="text-sm font-semibold mb-2">About Our Salary Data</p>
            <p className="text-sm text-white/60">
              UK figures are informed by{" "}
              <a
                href="https://www.balpa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                BALPA
              </a>{" "}
              salary surveys and publicly available collective agreements. US
              figures are informed by{" "}
              <a
                href="https://www.alpa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ALPA
              </a>{" "}
              data and the 2024 major carrier contract wins. All figures are
              gross before tax. Figures are reviewed annually and updated when
              new collective agreements are published.
            </p>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
