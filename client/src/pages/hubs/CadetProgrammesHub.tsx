import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Link } from "wouter";
import {
  GraduationCap,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { CADET_PROGRAMMES_2026 } from "@/data/cadetProgrammes2026";

const CADET_GUIDES = [
  {
    href: "/guides/ba-speedbird-academy",
    label: "BA Speedbird Academy",
    flag: "🇬🇧",
    status: "Open 2026",
    funded: true,
  },
  {
    href: "/guides/easyjet-generation",
    label: "easyJet Generation easyJet",
    flag: "🇬🇧",
    status: "Open",
    funded: false,
  },
  {
    href: "/guides/ryanair-cadet",
    label: "Ryanair Cadet Pilot",
    flag: "🇮🇪",
    status: "Open",
    funded: false,
  },
  {
    href: "/guides/wizz-air-academy",
    label: "Wizz Air Academy",
    flag: "🇭🇺",
    status: "Open",
    funded: false,
  },
  {
    href: "/guides/tui-mpl",
    label: "TUI MPL Programme",
    flag: "🇬🇧",
    status: "Paused 2026",
    funded: true,
  },
  {
    href: "/guides/emirates-cadet-pilot-program",
    label: "Emirates Cadet Programme",
    flag: "🇦🇪",
    status: "Open",
    funded: true,
  },
  {
    href: "/guides/qantas-group-pilot-academy",
    label: "Qantas Group Pilot Academy",
    flag: "🇦🇺",
    status: "Open",
    funded: false,
  },
  {
    href: "/guides/air-canada-jazz-cadet",
    label: "Air Canada Jazz Approach",
    flag: "🇨🇦",
    status: "Open",
    funded: false,
  },
];

const KEY_QUESTIONS = [
  {
    q: "Is the training funded or self-funded?",
    a: "This is the most important question. Funded means the airline pays for your training (e.g. BA Speedbird). Self-funded with a conditional offer means you take out a loan and the airline offers you a job if you pass — very different propositions.",
  },
  {
    q: "What happens if I fail a training stage?",
    a: "Most programmes have defined failure points. Some offer a resit; others terminate your place. Read the terms carefully before applying.",
  },
  {
    q: "Is there a training bond?",
    a: "Most funded programmes include a bond requiring you to repay training costs if you leave within a set period (typically 5–7 years). Understand the bond terms before accepting.",
  },
  {
    q: "What is the acceptance rate?",
    a: "Genuinely funded programmes like BA Speedbird receive thousands of applications for under 50 places. Acceptance rates can be below 1%. Prepare accordingly.",
  },
  {
    q: "What licence do I hold at the end?",
    a: "Most programmes lead to a frozen ATPL (fATPL) or MPL. Understand which licence you will hold and whether it restricts you to one airline.",
  },
];

export default function CadetProgrammesHub() {
  const openProgrammes = CADET_PROGRAMMES_2026.filter(
    p =>
      p.status === "Open — applications accepted" ||
      p.status === "Ongoing intake — rolling applications"
  );
  const pausedProgrammes = CADET_PROGRAMMES_2026.filter(
    p =>
      p.status !== "Open — applications accepted" &&
      p.status !== "Ongoing intake — rolling applications"
  );

  return (
    <>
      <SEO
        title="Airline Cadet Programmes 2026 | BA, easyJet, Emirates, Ryanair | AviatorPath"
        description="Complete guide to airline cadet programmes in 2026. BA Speedbird Academy, easyJet Generation easyJet, Emirates, Ryanair, Wizz Air, TUI MPL, Qantas, and more. Understand funded vs self-funded pathways."
        canonical="https://aviatorpath.com/hubs/cadet-programmes"
      />
      <PublicNav />
      <main className="min-h-screen bg-[var(--color-navy)] text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              <GraduationCap className="w-4 h-4" />
              Cadet Programmes
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl mb-4">
              Airline Cadet Programmes 2026
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              A complete guide to airline-sponsored and airline-linked pilot
              training programmes. Understand the difference between funded and
              self-funded pathways before you apply.
            </p>
          </div>

          {/* Critical Warning */}
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-5 mb-10 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-300 mb-1">
                Funded vs Self-Funded: The Most Important Distinction
              </p>
              <p className="text-sm text-amber-200">
                Not all "cadet programmes" are funded. Some airlines offer a
                conditional job offer but require you to self-fund training
                through a loan. Always confirm whether the airline is paying for
                your training or whether you are taking out a loan with a
                conditional offer attached. These are fundamentally different
                financial propositions.
              </p>
            </div>
          </div>

          {/* Funded vs Self-Funded Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="bg-green-900/20 rounded-xl border border-green-500/20 p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <p className="font-semibold text-green-400">
                  Genuinely Funded Programmes
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Airline pays for your training</li>
                <li>No large personal loan required</li>
                <li>Training bond repayable if you leave early</li>
                <li>
                  Extremely competitive selection (often &lt;1% acceptance)
                </li>
                <li>Examples: BA Speedbird Academy, Emirates Cadet</li>
              </ul>
            </div>
            <div className="bg-orange-900/20 rounded-xl border border-orange-500/20 p-5">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-orange-400" />
                <p className="font-semibold text-orange-400">
                  Self-Funded with Conditional Offer
                </p>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                <li>You take out a loan (typically £80k–£120k)</li>
                <li>Airline offers a job if you pass all stages</li>
                <li>
                  Financial risk is yours if you fail or the offer changes
                </li>
                <li>Less competitive to enter than funded programmes</li>
                <li>Examples: easyJet Generation easyJet, Ryanair Cadet</li>
              </ul>
            </div>
          </div>

          {/* Programme Status Table */}
          <h2 className="font-display font-bold text-2xl mb-4">
            Programme Status (2026)
          </h2>
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-4 py-3 text-white/60 font-medium">
                      Programme
                    </th>
                    <th className="text-left px-4 py-3 text-white/60 font-medium">
                      Status
                    </th>
                    <th className="text-left px-4 py-3 text-white/60 font-medium">
                      Funded?
                    </th>
                    <th className="text-left px-4 py-3 text-white/60 font-medium">
                      Guide
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CADET_GUIDES.map((prog, i) => (
                    <tr
                      key={prog.href}
                      className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
                    >
                      <td className="px-4 py-3 text-white">
                        <span className="mr-2">{prog.flag}</span>
                        {prog.label}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            prog.status.includes("Open")
                              ? "bg-green-900/40 text-green-300"
                              : "bg-amber-900/40 text-amber-300"
                          }`}
                        >
                          {prog.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {prog.funded ? (
                          <span className="inline-flex items-center gap-1 text-green-400 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Funded
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-orange-400 text-xs">
                            <XCircle className="w-3.5 h-3.5" /> Self-funded
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={prog.href}
                          className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-xs"
                        >
                          Read guide <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/30 px-4 py-3 border-t border-white/5">
              Status is based on publicly available information as of 2026.
              Always verify current status directly with the airline before
              applying.
            </p>
          </div>

          {/* Key Questions */}
          <h2 className="font-display font-bold text-2xl mb-4">
            Key Questions Before You Apply
          </h2>
          <div className="space-y-3 mb-12">
            {KEY_QUESTIONS.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl border border-white/10 p-4"
              >
                <p className="font-semibold text-white text-sm mb-1">
                  {item.q}
                </p>
                <p className="text-sm text-white/60">{item.a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 rounded-xl border border-blue-500/20 p-6 text-center">
            <h3 className="font-display font-bold text-xl mb-2">
              Check Your Eligibility
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Use our cadet eligibility checker to see which programmes you may
              qualify for based on your age, qualifications, and experience.
            </p>
            <Link
              href="/tools/cadet-eligibility"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Cadet Eligibility Checker <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
