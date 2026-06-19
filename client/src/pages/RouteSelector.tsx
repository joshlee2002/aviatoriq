import { useState } from "react";
import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Link } from "wouter";
import { useCountry } from "@/contexts/CountryContext";
import {
  Compass,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  Info,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Question {
  id: string;
  text: string;
  subtext?: string;
  options: { label: string; value: string; description?: string }[];
}

interface RouteResult {
  id: string;
  title: string;
  subtitle: string;
  country: string;
  regulator: string;
  estimatedCost: string;
  estimatedTime: string;
  pros: string[];
  cons: string[];
  suitableFor: string;
  guideHref: string;
  guideLabel: string;
  caveat: string;
}

// ─── Questions ────────────────────────────────────────────────────────────────
const QUESTIONS: Question[] = [
  {
    id: "country",
    text: "Which country do you want to train and work in?",
    subtext:
      "This determines which regulator issues your licence and which airlines you can apply to.",
    options: [
      {
        label: "United Kingdom",
        value: "uk",
        description: "CAA ATPL — widely recognised globally",
      },
      {
        label: "United States",
        value: "us",
        description: "FAA ATP — required for US airlines",
      },
      {
        label: "Europe (EASA)",
        value: "eu",
        description: "EASA ATPL — required for EU airlines",
      },
      { label: "Canada", value: "ca", description: "Transport Canada ATPL" },
      { label: "Australia", value: "au", description: "CASA ATPL" },
    ],
  },
  {
    id: "budget",
    text: "What is your approximate training budget?",
    subtext:
      "This is the total amount you can access — whether savings, loans, or a combination.",
    options: [
      {
        label: "Under £50k / $60k",
        value: "low",
        description: "Limits options to modular or PPL-only routes",
      },
      {
        label: "£50k–£80k / $60k–$100k",
        value: "mid",
        description: "Covers most modular routes",
      },
      {
        label: "£80k–£120k / $100k–$150k",
        value: "high",
        description: "Covers most integrated routes",
      },
      {
        label: "Over £120k / $150k",
        value: "very_high",
        description: "Covers all routes including premium integrated",
      },
      {
        label: "I want to minimise borrowing",
        value: "cadet_only",
        description: "Cadet programmes only — highly competitive",
      },
    ],
  },
  {
    id: "timeline",
    text: "How quickly do you want to reach a commercial licence?",
    options: [
      { label: "As fast as possible (2 years)", value: "fast" },
      { label: "3–4 years is fine", value: "medium" },
      { label: "5+ years — I'm building around work/family", value: "slow" },
    ],
  },
  {
    id: "age",
    text: "How old are you?",
    subtext:
      "There is no upper age limit to train as a pilot in the UK, US, or most markets. However, age affects the financial return on training.",
    options: [
      { label: "Under 25", value: "young" },
      { label: "25–35", value: "mid" },
      { label: "35–45", value: "older" },
      { label: "Over 45", value: "mature" },
    ],
  },
  {
    id: "existing_licence",
    text: "Do you already hold a pilot licence?",
    options: [
      { label: "No licence — starting from zero", value: "zero" },
      { label: "PPL (Private Pilot Licence)", value: "ppl" },
      { label: "PPL + Night Rating / IR", value: "ppl_ir" },
      { label: "Military licence", value: "military" },
    ],
  },
];

// ─── Route Results ─────────────────────────────────────────────────────────────
const ROUTE_RESULTS: Record<string, RouteResult> = {
  uk_integrated: {
    id: "uk_integrated",
    title: "UK Integrated ATPL",
    subtitle: "Full-time residential training from zero to frozen ATPL",
    country: "UK",
    regulator: "CAA",
    estimatedCost: "£85,000–£120,000",
    estimatedTime: "18–24 months",
    pros: [
      "Fastest route to a frozen ATPL in the UK",
      "Structured environment — no self-management required",
      "Often includes airline cadet selection pipelines (e.g. CAE for easyJet)",
      "Single-provider accountability",
    ],
    cons: [
      "Highest upfront cost of any UK route",
      "Requires full-time commitment — not compatible with employment",
      "If the school closes, you may lose credits and fees",
      "No degree qualification unless school offers a university partnership",
    ],
    suitableFor:
      "Candidates with access to £85k+ in funding who want the fastest possible route to an airline.",
    guideHref: "/guides/integrated-vs-modular",
    guideLabel: "Integrated vs Modular Guide",
    caveat:
      "Costs vary significantly between schools. Always obtain an itemised prospectus and verify the school holds a current CAA ATO approval before enrolling.",
  },
  uk_modular: {
    id: "uk_modular",
    title: "UK Modular ATPL",
    subtitle: "Build your licences stage by stage — PPL, CPL, IR, MCC",
    country: "UK",
    regulator: "CAA",
    estimatedCost: "£55,000–£80,000",
    estimatedTime: "3–5 years",
    pros: [
      "Lower total cost than integrated",
      "Can work between stages to fund training",
      "Flexibility to pause and resume",
      "Can choose the best school for each module",
    ],
    cons: [
      "Requires significant self-management and discipline",
      "Longer timeline to first airline job",
      "No built-in cadet pipeline — airline applications are self-directed",
      "Hour-building costs (£10k–£20k) are often underestimated",
    ],
    suitableFor:
      "Candidates who cannot commit to full-time training or want to reduce borrowing by funding stages from income.",
    guideHref: "/guides/integrated-vs-modular",
    guideLabel: "Integrated vs Modular Guide",
    caveat:
      "The modular route requires careful planning. Gaps between modules can affect currency and may require additional training to regain proficiency.",
  },
  uk_cadet: {
    id: "uk_cadet",
    title: "UK Airline Cadet Programme",
    subtitle:
      "Funded or part-funded training with a conditional airline pathway",
    country: "UK",
    regulator: "CAA",
    estimatedCost: "£0–£15,000 (living costs)",
    estimatedTime: "18–24 months",
    pros: [
      "Training costs funded by the airline (e.g. BA Speedbird Academy)",
      "Structured pathway to a specific airline",
      "No large personal loan required",
      "Mentored environment with airline standards from day one",
    ],
    cons: [
      "Extremely competitive — BA Speedbird accepts under 1% of applicants",
      "Not all 'cadet' programmes are funded — some are self-funded with a conditional offer",
      "You are tied to the sponsoring airline for several years",
      "Training bond means you repay costs if you leave early",
    ],
    suitableFor:
      "Candidates who are willing to invest significant time in preparation and can handle a highly competitive selection process.",
    guideHref: "/guides/ba-speedbird-academy",
    guideLabel: "BA Speedbird Academy Guide",
    caveat:
      "Always verify whether a programme is genuinely funded or self-funded with a conditional offer. These are very different propositions.",
  },
  us_part141: {
    id: "us_part141",
    title: "FAA Part 141 Accelerated Programme",
    subtitle: "Structured flight school training leading to FAA ATP",
    country: "USA",
    regulator: "FAA",
    estimatedCost: "$80,000–$120,000",
    estimatedTime: "2–3 years",
    pros: [
      "Structured curriculum with FAA oversight",
      "Many schools have direct regional airline pathway agreements",
      "GI Bill eligible at many schools",
      "R-ATP (1,000 hours) available via degree programmes",
    ],
    cons: [
      "Still requires 1,500 hours ATP (or 1,000 with qualifying degree)",
      "CFI route to build hours takes 1–2 additional years",
      "Total cost including hour-building is often $150k+",
      "Regional airline starting salaries have improved but vary widely",
    ],
    suitableFor:
      "US-based candidates who want a structured pathway with airline partnerships and are prepared for the CFI/hour-building phase.",
    guideHref: "/us/guides/how-to-become-a-pilot-usa",
    guideLabel: "How to Become a Pilot in the USA",
    caveat:
      "The ATP 1,500-hour rule means the US route takes longer than the UK/EASA route. Budget for the CFI phase as a separate cost.",
  },
  eu_integrated: {
    id: "eu_integrated",
    title: "EASA Integrated ATPL",
    subtitle: "Full-time training at an EASA Part-ORA ATO",
    country: "Europe",
    regulator: "EASA",
    estimatedCost: "€80,000–€120,000",
    estimatedTime: "18–24 months",
    pros: [
      "Required for employment at EU-licensed airlines",
      "Several schools have direct Lufthansa, Air France/KLM, or Ryanair pipelines",
      "Training in Southern Europe offers excellent flying weather",
      "EASA licence is widely recognised globally",
    ],
    cons: [
      "Post-Brexit: EASA licences require conversion for UK employment",
      "Significant variation in quality between EASA ATOs",
      "Language of instruction varies — confirm English-language training if needed",
      "Some EU countries have limited regional airline sectors",
    ],
    suitableFor:
      "Candidates who intend to work for EU-licensed airlines and want the fastest EASA ATPL route.",
    guideHref: "/europe/guides/how-to-become-a-pilot-europe",
    guideLabel: "How to Become a Pilot in Europe",
    caveat:
      "UK nationals should confirm the EASA-to-UK CAA licence conversion pathway before enrolling at an EU school.",
  },
};

// ─── Route Selection Logic ────────────────────────────────────────────────────
function selectRoute(answers: Record<string, string>): RouteResult {
  const { country, budget, timeline, existing_licence } = answers;

  if (country === "us") return ROUTE_RESULTS["us_part141"];
  if (country === "eu") return ROUTE_RESULTS["eu_integrated"];

  if (country === "uk") {
    if (budget === "cadet_only") return ROUTE_RESULTS["uk_cadet"];
    if (budget === "low" || budget === "mid" || timeline === "slow")
      return ROUTE_RESULTS["uk_modular"];
    if (existing_licence === "military") return ROUTE_RESULTS["uk_modular"];
    return ROUTE_RESULTS["uk_integrated"];
  }

  // Default fallback
  return ROUTE_RESULTS["uk_integrated"];
}

// ─── Assessment CTA ───────────────────────────────────────────────────────────────
function AssessmentCTA() {
  return (
    <div className="bg-gradient-to-br from-blue-900/60 to-blue-800/40 border border-blue-500/30 rounded-2xl p-7 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3">Next Step</p>
      <h2 className="font-display font-bold text-xl text-white mb-2">
        You've found your route. Now get the full picture.
      </h2>
      <p className="text-white/70 text-sm max-w-lg mx-auto mb-5">
        The full assessment combines your route with your finances, medical readiness and goals — and matches you with flight schools that fit your situation.
      </p>
      <Link
        href="/quiz"
        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
      >
        Get My Full Pilot Assessment
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function RouteSelector() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RouteResult | null>(null);

  const question = QUESTIONS[currentQ];

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setResult(selectRoute(newAnswers));
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <>
      <SEO
        title="Pilot Training Route Selector | AviatorPath"
        description="Answer 5 questions to find the right pilot training route for your budget, timeline, and country. Integrated, modular, cadet, FAA, EASA — we'll point you in the right direction."
        canonical="https://aviatorpath.com/tools/route-selector"
      />
      <PublicNav />
      <main className="min-h-screen bg-[var(--color-navy)] text-white pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              <Compass className="w-4 h-4" />
              Route Selector
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">
              Which Pilot Training Route Is Right for You?
            </h1>
            <p className="text-white/70">
              Answer 5 questions to get a personalised route recommendation.
              This tool provides guidance only — always verify details with
              official sources before committing.
            </p>
          </div>

          {!result ? (
            <div className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8">
              {/* Progress */}
              <div className="flex items-center gap-2 mb-6">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i < currentQ
                        ? "bg-blue-500"
                        : i === currentQ
                          ? "bg-blue-400"
                          : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-white/40 mb-6">
                Question {currentQ + 1} of {QUESTIONS.length}
              </p>

              <h2 className="font-display font-bold text-xl md:text-2xl mb-2">
                {question.text}
              </h2>
              {question.subtext && (
                <div className="flex gap-2 mb-6">
                  <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/60">{question.subtext}</p>
                </div>
              )}

              <div className="space-y-3 mt-6">
                {question.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="w-full text-left px-5 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-white">{opt.label}</p>
                        {opt.description && (
                          <p className="text-sm text-white/50 mt-0.5">
                            {opt.description}
                          </p>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/60 flex-shrink-0 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>

              {currentQ > 0 && (
                <button
                  onClick={() => setCurrentQ(currentQ - 1)}
                  className="mt-4 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Result Header */}
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-2xl border border-blue-500/30 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-sm text-green-400 font-medium">
                    Recommended Route
                  </p>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-1">
                  {result.title}
                </h2>
                <p className="text-white/70 mb-4">{result.subtitle}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Country", value: result.country },
                    { label: "Regulator", value: result.regulator },
                    { label: "Est. Cost", value: result.estimatedCost },
                    { label: "Est. Time", value: result.estimatedTime },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="bg-white/10 rounded-lg p-3 text-center"
                    >
                      <p className="text-xs text-white/50 mb-1">{item.label}</p>
                      <p className="text-sm font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable For */}
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <p className="font-semibold text-sm mb-2">Suitable For</p>
                <p className="text-sm text-white/70">{result.suitableFor}</p>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-900/20 rounded-xl border border-green-500/20 p-5">
                  <p className="font-semibold text-sm text-green-400 mb-3">
                    Advantages
                  </p>
                  <ul className="space-y-2">
                    {result.pros.map((pro, i) => (
                      <li key={i} className="flex gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl border border-red-500/20 p-5">
                  <p className="font-semibold text-sm text-red-400 mb-3">
                    Considerations
                  </p>
                  <ul className="space-y-2">
                    {result.cons.map((con, i) => (
                      <li key={i} className="flex gap-2 text-sm text-white/70">
                        <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Caveat */}
              <div className="bg-amber-900/20 border border-amber-500/20 rounded-xl p-4 flex gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-200">{result.caveat}</p>
              </div>

              {/* Assessment CTA */}
              <AssessmentCTA />

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={result.guideHref}
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Read: {result.guideLabel}
                </Link>
                <Link
                  href="/calculator"
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Cost Calculator
                </Link>
                <button
                  onClick={reset}
                  className="text-sm text-white/50 hover:text-white/80 transition-colors px-3"
                >
                  Start Again
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
