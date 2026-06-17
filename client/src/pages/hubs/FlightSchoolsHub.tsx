import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Link } from "wouter";
import {
  Building2,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Info,
} from "lucide-react";

const SCHOOL_GUIDES = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    href: "/guides/best-flight-schools-uk",
    regulator: "CAA ATO",
    description:
      "CAA-approved UK flight schools for integrated and modular ATPL training.",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    href: "/us/guides/best-flight-schools-usa",
    regulator: "FAA Part 141",
    description: "FAA Part 141 and Part 61 flight schools across the USA.",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    href: "/canada/guides/best-flight-schools-canada",
    regulator: "Transport Canada",
    description:
      "Transport Canada approved flight training units (FTUs) for CPL and ATPL training.",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    href: "/australia/guides/best-flight-schools-australia",
    regulator: "CASA",
    description:
      "CASA-approved flying schools for CPL and ATPL training in Australia.",
  },
  {
    country: "Europe (EASA)",
    flag: "🇪🇺",
    href: "/europe/guides/best-flight-schools-europe",
    regulator: "EASA Part-ORA",
    description:
      "EASA Part-ORA approved ATOs across Germany, Spain, France, and the Netherlands.",
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    href: "/new-zealand/guides/best-flight-schools-new-zealand",
    regulator: "CAA NZ",
    description: "CAA New Zealand approved flight training organisations.",
  },
  {
    country: "South Africa",
    flag: "🇿🇦",
    href: "/south-africa/guides/best-flight-schools-south-africa",
    regulator: "SACAA",
    description:
      "SACAA approved flying schools for CPL and ATPL training in South Africa.",
  },
];

const DUE_DILIGENCE = [
  {
    check: "Verify regulatory approval",
    detail:
      "Confirm the school holds a current ATO/Part 141/Part-ORA approval from the relevant regulator. Check the regulator's public register, not just the school's website.",
  },
  {
    check: "Request an itemised prospectus",
    detail:
      "Get a full breakdown of what is and is not included in the quoted price. Hour-building, type rating, accommodation, and exam fees are often excluded.",
  },
  {
    check: "Check licence outcome rates",
    detail:
      "Ask for the school's first-attempt pass rate for ATPL theory exams and skills tests. Schools are not always required to publish this.",
  },
  {
    check: "Understand the financial risk",
    detail:
      "If the school closes during your training, you may lose credits and fees. Ask about fee protection and what happens to your training records.",
  },
  {
    check: "Visit before committing",
    detail:
      "Visit the school, meet the instructors, and fly a trial lesson before paying a deposit. The relationship with your instructors matters.",
  },
  {
    check: "Check airline partnerships",
    detail:
      "Some schools have formal cadet pipelines with airlines. Understand what 'partnership' means — a formal agreement or a loose relationship.",
  },
];

export default function FlightSchoolsHub() {
  return (
    <>
      <SEO
        title="Best Flight Schools 2026 | UK, USA, Canada, Australia, Europe | AviatorIQ"
        description="Verified flight school guides for every major market. CAA, FAA, EASA, CASA, Transport Canada approved schools. Methodology, scoring criteria, and due diligence checklist."
        canonical="https://aviatoriq.com/hubs/flight-schools"
      />
      <PublicNav />
      <main className="min-h-screen bg-[var(--color-navy)] text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              <Building2 className="w-4 h-4" />
              Flight Schools
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl mb-4">
              Best Flight Schools 2026
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Flight school guides for every major market. All schools listed
              hold current regulatory approval. Our methodology is transparent
              and conflict-of-interest free.
            </p>
          </div>

          {/* Conflict of Interest Statement */}
          <div className="bg-white/5 rounded-xl border border-white/10 p-5 mb-10 flex gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">
                Conflict of Interest Statement
              </p>
              <p className="text-sm text-white/70">
                AviatorIQ does not accept payment from flight schools for
                inclusion in our guides. Schools are assessed against published
                criteria including regulatory approval, training quality
                indicators, fee transparency, and student feedback. We may earn
                a referral fee if you contact a school through our platform —
                this is disclosed where applicable and does not influence our
                rankings.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-4 mb-10 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200">
              <strong>School information changes frequently.</strong> Fees,
              approval status, and programme availability change regularly.
              Always verify current details directly with the school and the
              relevant regulator before committing to training or paying a
              deposit.
            </p>
          </div>

          {/* Country Guides */}
          <h2 className="font-display font-bold text-2xl mb-6">
            Flight School Guides by Country
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {SCHOOL_GUIDES.map(guide => (
              <Link key={guide.country} href={guide.href}>
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-5 transition-all cursor-pointer group">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{guide.flag}</span>
                      <div>
                        <p className="font-semibold text-white">
                          {guide.country}
                        </p>
                        <p className="text-xs text-white/40">
                          Approval: {guide.regulator}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 flex-shrink-0 mt-1 transition-colors" />
                  </div>
                  <p className="text-sm text-white/60">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Due Diligence Checklist */}
          <h2 className="font-display font-bold text-2xl mb-4">
            Due Diligence Checklist
          </h2>
          <p className="text-white/60 text-sm mb-6">
            Before committing to any flight school, work through these checks.
            The financial stakes are too high to skip them.
          </p>
          <div className="space-y-3 mb-12">
            {DUE_DILIGENCE.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl border border-white/10 p-4 flex gap-3"
              >
                <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm">
                    {item.check}
                  </p>
                  <p className="text-sm text-white/60 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/schools">
              <div className="bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-5 transition-all cursor-pointer group">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="font-semibold text-white">
                    UK School Directory
                  </p>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-white/60">
                  Browse CAA-approved UK flight training organisations
                </p>
              </div>
            </Link>
            <Link href="/tools/route-selector">
              <div className="bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-5 transition-all cursor-pointer group">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="font-semibold text-white">Route Selector</p>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-white/60">
                  Find the right training route before choosing a school
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
