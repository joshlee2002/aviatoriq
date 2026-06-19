import { useState } from "react";
import { Link } from "wouter";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import {
  Calculator as CalcIcon,
  ChevronRight,
  Info,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

type Route = "part_141_university" | "part_141_academy" | "part_61";
type Location = "high_cost" | "average_cost" | "low_cost";
type Pace = "full_time" | "part_time";
type Experience = "zero" | "ppl" | "instrument";

interface CostBreakdown {
  total: number;
  flightTraining: number;
  writtenExams: number;
  checkrides: number;
  medical: number;
  supplies: number;
  contingency: number;
}

export default function CalculatorUS() {
  const [step, setStep] = useState(1);
  const [route, setRoute] = useState<Route | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [pace, setPace] = useState<Pace | null>(null);
  const [experience, setExperience] = useState<Experience | null>(null);

  const calculateCosts = (): CostBreakdown => {
    let flightTraining = 0;

    // Base training cost (Zero to Commercial Multi-Engine + CFI)
    if (route === "part_141_university") flightTraining = 95000;
    else if (route === "part_141_academy") flightTraining = 85000;
    else if (route === "part_61") flightTraining = 65000;

    // Location multiplier
    let locMultiplier = 1.0;
    if (location === "high_cost")
      locMultiplier = 1.2; // CA, NY, etc
    else if (location === "low_cost") locMultiplier = 0.9; // Midwest, etc

    flightTraining = flightTraining * locMultiplier;

    // Experience deduction
    if (experience === "ppl") flightTraining -= 15000;
    else if (experience === "instrument") flightTraining -= 25000;

    // Fixed costs
    const writtenExams = 1050; // 6 exams x $175
    const checkrides = 4800; // 6 checkrides x $800
    const medical = 200; // First class
    const supplies = 1500; // Headset, iPad, ForeFlight, books

    // Contingency (10% of flight training for extra hours)
    const contingency = flightTraining * 0.1;

    return {
      total:
        flightTraining +
        writtenExams +
        checkrides +
        medical +
        supplies +
        contingency,
      flightTraining,
      writtenExams,
      checkrides,
      medical,
      supplies,
      contingency,
    };
  };

  const handleNext = () => setStep(s => s + 1);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "oklch(0.14 0.04 240)",
        color: "oklch(0.95 0.02 240)",
      }}
    >
      <SEO
        title="US Pilot Training Cost Calculator | AviatorPath US"
        description="Calculate the exact cost of becoming an airline pilot in the USA. Compare Part 61 vs Part 141 costs."
        canonical="https://aviatorpath.com/us/calculator"
      />
      <PublicNav />

      <section className="py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: "oklch(0.25 0.06 240)",
                color: "oklch(0.65 0.22 45)",
              }}
            >
              <CalcIcon className="w-4 h-4" />
              US Cost Calculator
            </div>
            <h1 className="text-4xl font-bold mb-4">How much will it cost?</h1>
            <p className="text-lg" style={{ color: "oklch(0.65 0.04 240)" }}>
              Get a realistic, itemized estimate for US flight training from
              zero to Commercial Pilot.
            </p>
          </div>

          {step < 5 ? (
            <div
              className="rounded-2xl border p-8"
              style={{
                background: "oklch(0.18 0.05 240)",
                borderColor: "oklch(0.28 0.06 240)",
              }}
            >
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="h-1.5 flex-1 rounded-full transition-colors"
                    style={{
                      background:
                        i <= step
                          ? "oklch(0.65 0.22 45)"
                          : "oklch(0.28 0.06 240)",
                    }}
                  />
                ))}
              </div>

              {step === 1 && (
                <Question
                  title="Which training route are you considering?"
                  options={[
                    {
                      id: "part_141_university",
                      label: "Part 141 University Degree Program",
                      desc: "4-year degree + flight training. Eligible for R-ATP at 1,000 hours.",
                    },
                    {
                      id: "part_141_academy",
                      label: "Part 141 Accelerated Academy",
                      desc: "Fast-track programs like ATP Flight School. Zero to CFI in 7-9 months.",
                    },
                    {
                      id: "part_61",
                      label: "Part 61 Local Flight School",
                      desc: "Pay-as-you-go at a local airport. Flexible but requires 1,500 hours for ATP.",
                    },
                  ]}
                  selected={route}
                  onSelect={v => {
                    setRoute(v as Route);
                    setTimeout(handleNext, 300);
                  }}
                />
              )}

              {step === 2 && (
                <Question
                  title="Where will you be training?"
                  options={[
                    {
                      id: "high_cost",
                      label: "High Cost Area",
                      desc: "California, New York, major metro areas",
                    },
                    {
                      id: "average_cost",
                      label: "Average Cost Area",
                      desc: "Florida, Texas, Arizona, most suburban areas",
                    },
                    {
                      id: "low_cost",
                      label: "Low Cost Area",
                      desc: "Midwest, rural areas",
                    },
                  ]}
                  selected={location}
                  onSelect={v => {
                    setLocation(v as Location);
                    setTimeout(handleNext, 300);
                  }}
                />
              )}

              {step === 3 && (
                <Question
                  title="What is your current flight experience?"
                  options={[
                    {
                      id: "zero",
                      label: "Zero Hours",
                      desc: "Starting from scratch",
                    },
                    {
                      id: "ppl",
                      label: "Private Pilot License (PPL)",
                      desc: "Already hold a PPL",
                    },
                    {
                      id: "instrument",
                      label: "Instrument Rating",
                      desc: "Already hold PPL and Instrument Rating",
                    },
                  ]}
                  selected={experience}
                  onSelect={v => {
                    setExperience(v as Experience);
                    setTimeout(handleNext, 300);
                  }}
                />
              )}

              {step === 4 && (
                <Question
                  title="What pace will you train at?"
                  options={[
                    {
                      id: "full_time",
                      label: "Full-Time (4-5 days/week)",
                      desc: "Fastest route, lower overall cost due to less skill fade",
                    },
                    {
                      id: "part_time",
                      label: "Part-Time (1-2 days/week)",
                      desc: "Slower route, higher overall cost due to relearning",
                    },
                  ]}
                  selected={pace}
                  onSelect={v => {
                    setPace(v as Pace);
                    setTimeout(handleNext, 300);
                  }}
                />
              )}
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <div
                className="rounded-2xl border overflow-hidden shadow-2xl"
                style={{
                  background: "oklch(0.18 0.05 240)",
                  borderColor: "oklch(0.28 0.06 240)",
                }}
              >
                {/* Total Header */}
                <div
                  className="p-8 text-center border-b"
                  style={{
                    borderColor: "oklch(0.28 0.06 240)",
                    background: "oklch(0.25 0.06 240)",
                  }}
                >
                  <div
                    className="text-sm font-bold uppercase tracking-wider mb-2"
                    style={{ color: "oklch(0.65 0.22 45)" }}
                  >
                    Estimated Total Cost
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-white">
                    $
                    {calculateCosts().total.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </div>
                  <p
                    className="mt-4 text-sm"
                    style={{ color: "oklch(0.7 0.04 240)" }}
                  >
                    From your current experience to Commercial Pilot (CPL) +
                    Flight Instructor (CFI).
                  </p>
                </div>

                {/* Breakdown */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Itemized Breakdown
                  </h3>

                  <div className="space-y-4">
                    <CostRow
                      label="Aircraft Rental & Instruction"
                      amount={calculateCosts().flightTraining}
                    />
                    <CostRow
                      label="FAA Checkride Fees (DPE)"
                      amount={calculateCosts().checkrides}
                    />
                    <CostRow
                      label="FAA Written Exams"
                      amount={calculateCosts().writtenExams}
                    />
                    <CostRow
                      label="Aviation Supplies (Headset, iPad)"
                      amount={calculateCosts().supplies}
                    />
                    <CostRow
                      label="FAA First Class Medical"
                      amount={calculateCosts().medical}
                    />

                    <div
                      className="pt-4 mt-4 border-t"
                      style={{ borderColor: "oklch(0.28 0.06 240)" }}
                    >
                      <CostRow
                        label="10% Contingency (Extra hours)"
                        amount={calculateCosts().contingency}
                        isContingency
                      />
                    </div>
                  </div>

                  <div
                    className="mt-8 p-4 rounded-xl flex gap-3"
                    style={{ background: "oklch(0.14 0.04 240)" }}
                  >
                    <Info
                      className="w-5 h-5 shrink-0"
                      style={{ color: "oklch(0.65 0.22 45)" }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.65 0.04 240)" }}
                    >
                      <strong>Note:</strong> This estimate covers training up to
                      Commercial Pilot and CFI. To reach the airlines, you will
                      need to work as a CFI to build from ~250 hours to the
                      1,500 hours required for an ATP certificate. You are paid
                      during this hour-building phase.
                    </p>
                  </div>
                </div>
              </div>

              {/* Assessment CTA */}
              <div className="mt-8 rounded-2xl p-7 text-center" style={{ background: "oklch(0.18 0.06 240)", border: "1px solid oklch(0.3 0.1 240)" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "oklch(0.65 0.22 45)" }}>Next Step</p>
                <h3 className="font-bold text-xl text-white mb-2">
                  You've seen the cost. Now find out if the full picture adds up.
                </h3>
                <p className="text-sm mb-5 max-w-md mx-auto" style={{ color: "oklch(0.65 0.04 240)" }}>
                  The full assessment combines your cost estimate with your goals, medical readiness and training options — and matches you with flight schools that fit your budget.
                </p>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-colors text-sm text-white"
                  style={{ background: "oklch(0.65 0.22 45)" }}
                >
                  Get My Full Pilot Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    setStep(1);
                    setRoute(null);
                    setLocation(null);
                    setExperience(null);
                    setPace(null);
                  }}
                  className="text-sm font-bold hover:underline"
                  style={{ color: "oklch(0.65 0.22 45)" }}
                >
                  Recalculate
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}

function Question({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: { id: string; label: string; desc: string }[];
  selected: string | null;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-3">
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="w-full text-left p-4 rounded-xl border transition-all hover:scale-[1.01]"
            style={{
              background:
                selected === opt.id ? "oklch(0.25 0.06 240)" : "transparent",
              borderColor:
                selected === opt.id
                  ? "oklch(0.65 0.22 45)"
                  : "oklch(0.28 0.06 240)",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-lg text-white">{opt.label}</span>
              {selected === opt.id && (
                <CheckCircle2
                  className="w-5 h-5"
                  style={{ color: "oklch(0.65 0.22 45)" }}
                />
              )}
            </div>
            <span
              className="text-sm block"
              style={{ color: "oklch(0.65 0.04 240)" }}
            >
              {opt.desc}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CostRow({
  label,
  amount,
  isContingency = false,
}: {
  label: string;
  amount: number;
  isContingency?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span
        className="text-sm"
        style={{
          color: isContingency ? "oklch(0.5 0.04 240)" : "oklch(0.8 0.02 240)",
        }}
      >
        {label}
      </span>
      <span className="font-bold text-white">
        ${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </span>
    </div>
  );
}
