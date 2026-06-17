import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Link } from "wouter";
import { DollarSign, ArrowRight, AlertTriangle, Info } from "lucide-react";

const COST_GUIDES = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    route: "/guides/pilot-training-costs",
    title: "UK Pilot Training Costs 2026",
    summary:
      "Integrated vs modular costs, hour-building, type rating, and total pathway costs. CAA-regulated ATOs.",
    range: "£55,000–£120,000",
    regulator: "CAA",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    route: "/us/guides/pilot-training-costs-usa",
    title: "US Pilot Training Costs 2026",
    summary:
      "FAA Part 61 vs Part 141, ATP certificate, CFI hour-building, and R-ATP pathway costs.",
    range: "$80,000–$150,000+",
    regulator: "FAA",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    route: "/canada/guides/canada-pilot-training-costs",
    title: "Canada Pilot Training Costs 2026",
    summary:
      "Transport Canada ATPL pathway costs, PSTAR, CPL, IR, and multi-engine endorsement fees.",
    range: "CA$70,000–CA$120,000",
    regulator: "Transport Canada",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    route: "/australia/guides/australia-pilot-training-costs",
    title: "Australia Pilot Training Costs 2026",
    summary:
      "CASA-regulated training costs, RPL, CPL, ATPL, and VET Student Loan eligibility.",
    range: "A$80,000–A$130,000",
    regulator: "CASA",
  },
  {
    country: "Europe (EASA)",
    flag: "🇪🇺",
    route: "/europe/guides/europe-pilot-training-costs",
    title: "Europe Pilot Training Costs 2026",
    summary:
      "EASA Part-ORA ATO costs across Germany, Spain, France, and the Netherlands.",
    range: "€80,000–€120,000",
    regulator: "EASA",
  },
];

const TOOLS = [
  {
    href: "/calculator",
    label: "UK Training Cost Calculator",
    description: "Estimate your total UK training costs by route",
  },
  {
    href: "/us/calculator",
    label: "US Training Cost Calculator",
    description: "Estimate your total US training costs",
  },
  {
    href: "/tools/finance-calculator",
    label: "Finance Repayment Calculator",
    description: "Model loan repayments against pilot salary",
  },
  {
    href: "/tools/route-selector",
    label: "Route Selector",
    description: "Find the right training route for your budget",
  },
];

const COST_FACTORS = [
  {
    factor: "Training route",
    detail:
      "Integrated is faster but costs more upfront. Modular spreads cost over time.",
  },
  {
    factor: "School location",
    detail:
      "Southern Europe and Arizona offer lower hourly flying costs due to weather.",
  },
  {
    factor: "Hour-building",
    detail: "Often underestimated at £10,000–£20,000 for the UK modular route.",
  },
  {
    factor: "Type rating",
    detail:
      "Not always included. An A320 or B737 type rating adds £20,000–£30,000.",
  },
  {
    factor: "Living costs",
    detail:
      "Residential integrated programmes require accommodation for 18–24 months.",
  },
  {
    factor: "Exam resits",
    detail:
      "ATPL theory exam resits cost £150–£300 each and can add up quickly.",
  },
];

export default function PilotTrainingCostsHub() {
  return (
    <>
      <SEO
        title="Pilot Training Costs 2026 | UK, USA, Canada, Australia, Europe | AviatorIQ"
        description="Verified pilot training cost guides for every major market. UK integrated and modular costs, US FAA pathway costs, Canada, Australia, and Europe. Use our free cost calculator to estimate your total training budget."
        canonical="https://aviatoriq.com/hubs/pilot-training-costs"
      />
      <PublicNav />
      <main className="min-h-screen bg-[var(--color-navy)] text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              <DollarSign className="w-4 h-4" />
              Pilot Training Costs
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl mb-4">
              How Much Does Pilot Training Cost?
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Verified cost guides for every major market. All figures include
              caveats, source references, and last-checked dates. Costs vary
              significantly — always obtain itemised quotes from approved
              schools.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-4 mb-10 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200">
              <strong>
                Cost figures are indicative ranges, not fixed prices.
              </strong>{" "}
              Training costs vary between schools, change annually, and depend
              on individual progress. Always obtain an itemised prospectus from
              a school holding a current regulatory approval (CAA ATO, FAA Part
              141, EASA Part-ORA, etc.) before committing.
            </p>
          </div>

          {/* Country Cost Guides */}
          <h2 className="font-display font-bold text-2xl mb-6">
            Cost Guides by Country
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {COST_GUIDES.map(guide => (
              <Link key={guide.country} href={guide.route}>
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
                  <p className="text-sm text-white/60 mb-3">{guide.summary}</p>
                  <div className="bg-white/10 rounded-lg px-3 py-2 inline-block">
                    <p className="text-xs text-white/50">Typical range</p>
                    <p className="font-bold text-green-400 text-sm">
                      {guide.range}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Key Cost Factors */}
          <h2 className="font-display font-bold text-2xl mb-4">
            What Affects the Total Cost?
          </h2>
          <div className="bg-white/5 rounded-xl border border-white/10 p-6 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COST_FACTORS.map(item => (
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
          <h2 className="font-display font-bold text-2xl mb-4">
            Cost Calculators and Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {TOOLS.map(tool => (
              <Link key={tool.href} href={tool.href}>
                <div className="bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-4 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {tool.label}
                      </p>
                      <p className="text-xs text-white/50 mt-0.5">
                        {tool.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Finance Link */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/20 p-6 text-center">
            <h3 className="font-display font-bold text-xl mb-2">
              Need to Finance Your Training?
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Read our guide to pilot training loans, career development loans,
              and cadet funding options.
            </p>
            <Link
              href="/guides/how-to-finance-pilot-training-uk"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              UK Pilot Training Finance Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
