import { useState } from "react";
import { Link } from "wouter";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { CheckCircle2, XCircle, ChevronRight, Info, Plane, GraduationCap, Clock, Wallet } from "lucide-react";

// ─── Types & Data ───────────────────────────────────────────────────────────

type AgeRange = "under_18" | "18_32" | "over_32";
type Budget = "under_10k" | "10k_50k" | "50k_80k" | "over_80k";
type FlightHours = "zero" | "under_10" | "under_50" | "over_50";
type Education = "high_school" | "college_degree" | "none";
type RightToWork = "yes" | "no";

interface UserProfile {
  age: AgeRange | null;
  budget: Budget | null;
  hours: FlightHours | null;
  education: Education | null;
  rightToWork: RightToWork | null;
}

interface CadetProgramme {
  id: string;
  name: string;
  airline: string;
  logoColor: string;
  description: string;
  keyFacts: {
    cost: string;
    duration: string;
    location: string;
    bond: string;
  };
  requirements: {
    minAge: number;
    maxAge?: number;
    maxHours: number;
    education: Education[];
    rightToWorkRequired: boolean;
  };
  checkEligibility: (profile: UserProfile) => {
    eligible: boolean;
    reasons: string[];
  };
}

const PROGRAMMES: CadetProgramme[] = [
  {
    id: "united-aviate",
    name: "Aviate Academy",
    airline: "United Airlines",
    logoColor: "bg-blue-600",
    description: "United's wholly-owned flight academy. Zero time to Commercial Pilot, then build hours at a partner Part 135 operator before flowing to United.",
    keyFacts: {
      cost: "$71,250 (PPL to CPL)",
      duration: "12 months",
      location: "Goodyear, AZ",
      bond: "Conditional job offer upon acceptance",
    },
    requirements: {
      minAge: 18,
      maxHours: 0, // Prefer zero time, but accept PPL
      education: ["high_school", "college_degree"],
      rightToWorkRequired: true,
    },
    checkEligibility: (p) => {
      const reasons: string[] = [];
      let eligible = true;

      if (p.age === "under_18") { eligible = false; reasons.push("Must be at least 18 years old"); }
      if (p.rightToWork === "no") { eligible = false; reasons.push("Must have right to work in the USA"); }
      if (p.education === "none") { eligible = false; reasons.push("High school diploma or GED required"); }
      if (p.budget === "under_10k" || p.budget === "10k_50k") { eligible = false; reasons.push("Budget insufficient ($71k+ required, though financing is available)"); }
      
      return { eligible, reasons };
    }
  },
  {
    id: "american-cadet",
    name: "Cadet Academy",
    airline: "American Airlines",
    logoColor: "bg-gray-200 text-blue-800",
    description: "Partner flight school model. Train at CAE or Coast Flight, build hours as a CFI, flow to a wholly-owned regional, then American Airlines.",
    keyFacts: {
      cost: "$90,000 - $100,000",
      duration: "12-15 months to CFI",
      location: "Multiple US locations",
      bond: "Flow-through agreement",
    },
    requirements: {
      minAge: 18,
      maxHours: 50,
      education: ["high_school", "college_degree"],
      rightToWorkRequired: true,
    },
    checkEligibility: (p) => {
      const reasons: string[] = [];
      let eligible = true;

      if (p.age === "under_18") { eligible = false; reasons.push("Must be at least 18 years old"); }
      if (p.rightToWork === "no") { eligible = false; reasons.push("Must have right to work in the USA"); }
      if (p.education === "none") { eligible = false; reasons.push("High school diploma or GED required"); }
      if (p.hours === "over_50") { eligible = false; reasons.push("Too many flight hours (must have zero or very few)"); }
      if (p.budget === "under_10k" || p.budget === "10k_50k") { eligible = false; reasons.push("Budget insufficient ($90k+ required, financing available)"); }

      return { eligible, reasons };
    }
  },
  {
    id: "delta-propel",
    name: "Propel Flight Academy",
    airline: "Delta Air Lines",
    logoColor: "bg-red-700",
    description: "Delta's dedicated academy operated by Skyborne. Zero time to CFI, then instruct, then fly for a Delta Connection carrier.",
    keyFacts: {
      cost: "$85,000 - $95,000",
      duration: "12 months to CFI",
      location: "Vero Beach, FL",
      bond: "Qualified Job Offer (QJO)",
    },
    requirements: {
      minAge: 18,
      maxHours: 0,
      education: ["high_school", "college_degree"],
      rightToWorkRequired: true,
    },
    checkEligibility: (p) => {
      const reasons: string[] = [];
      let eligible = true;

      if (p.age === "under_18") { eligible = false; reasons.push("Must be at least 18 years old"); }
      if (p.rightToWork === "no") { eligible = false; reasons.push("Must have right to work in the USA"); }
      if (p.education === "none") { eligible = false; reasons.push("High school diploma or GED required"); }
      if (p.budget === "under_10k" || p.budget === "10k_50k") { eligible = false; reasons.push("Budget insufficient ($85k+ required, financing available)"); }

      return { eligible, reasons };
    }
  },
  {
    id: "southwest-225",
    name: "Destination 225°",
    airline: "Southwest Airlines",
    logoColor: "bg-blue-800 text-yellow-400",
    description: "Comprehensive pathway to the right seat of a Southwest 737. Multiple tracks including university, military, and ab-initio.",
    keyFacts: {
      cost: "$100,000+",
      duration: "4-5 years total to Southwest",
      location: "Multiple partner schools",
      bond: "Mentorship and interview guarantee",
    },
    requirements: {
      minAge: 18,
      maxHours: 0,
      education: ["high_school", "college_degree"],
      rightToWorkRequired: true,
    },
    checkEligibility: (p) => {
      const reasons: string[] = [];
      let eligible = true;

      if (p.age === "under_18") { eligible = false; reasons.push("Must be at least 18 years old"); }
      if (p.rightToWork === "no") { eligible = false; reasons.push("Must have right to work in the USA"); }
      if (p.education === "none") { eligible = false; reasons.push("High school diploma or GED required"); }
      if (p.budget === "under_10k" || p.budget === "10k_50k" || p.budget === "50k_80k") { eligible = false; reasons.push("Budget insufficient ($100k+ required, financing available)"); }

      return { eligible, reasons };
    }
  }
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function CadetEligibilityUS() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    age: null,
    budget: null,
    hours: null,
    education: null,
    rightToWork: null,
  });

  const updateProfile = (key: keyof UserProfile, value: any) => {
    setProfile(prev => ({ ...prev, [key]: value }));
    setTimeout(() => setStep(prev => prev + 1), 300); // Auto-advance
  };

  const isComplete = step > 5;

  const eligibleProgrammes = PROGRAMMES.filter(p => p.checkEligibility(profile).eligible);
  const ineligibleProgrammes = PROGRAMMES.filter(p => !p.checkEligibility(profile).eligible);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.14 0.04 240)", color: "oklch(0.95 0.02 240)" }}>
      <SEO 
        title="US Airline Cadet Eligibility Checker | AviatorIQ US"
        description="Check if you qualify for United Aviate, American Airlines Cadet Academy, Delta Propel, and Southwest Destination 225°."
        canonical="https://www.aviatoriq.com/us/cadet-eligibility"
      />
      <PublicNav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden border-b" style={{ borderColor: "oklch(0.28 0.06 240)" }}>
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-cadet.jpg"
            alt="Flight simulator training"
            className="w-full h-full object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.04_240)] to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">US Cadet Programme Checker</h1>
          <p className="text-lg" style={{ color: "oklch(0.65 0.04 240)" }}>
            Find out if you meet the requirements for the major US airline flight academies.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          
          {!isComplete ? (
            <div className="rounded-2xl border p-8 shadow-xl" style={{ background: "oklch(0.18 0.05 240)", borderColor: "oklch(0.28 0.06 240)" }}>
              {/* Progress Bar */}
              <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-1.5 flex-1 rounded-full transition-colors duration-300"
                    style={{ background: i <= step ? "oklch(0.65 0.22 45)" : "oklch(0.28 0.06 240)" }}
                  />
                ))}
              </div>

              {/* Questions */}
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                {step === 1 && (
                  <Question
                    title="How old are you?"
                    options={[
                      { label: "Under 18", value: "under_18" },
                      { label: "18 to 32", value: "18_32" },
                      { label: "Over 32", value: "over_32" },
                    ]}
                    onSelect={(v) => updateProfile("age", v)}
                  />
                )}
                {step === 2 && (
                  <Question
                    title="Do you have the right to live and work in the USA?"
                    description="Cadet programmes cannot sponsor visas."
                    options={[
                      { label: "Yes (US Citizen / Green Card)", value: "yes" },
                      { label: "No", value: "no" },
                    ]}
                    onSelect={(v) => updateProfile("rightToWork", v)}
                  />
                )}
                {step === 3 && (
                  <Question
                    title="What is your highest level of education?"
                    options={[
                      { label: "High School Diploma / GED", value: "high_school" },
                      { label: "College Degree (Associate/Bachelor's)", value: "college_degree" },
                      { label: "None of the above", value: "none" },
                    ]}
                    onSelect={(v) => updateProfile("education", v)}
                  />
                )}
                {step === 4 && (
                  <Question
                    title="How many flight hours do you have?"
                    description="Most ab-initio programmes require zero or very few hours."
                    options={[
                      { label: "Zero", value: "zero" },
                      { label: "Under 10 hours", value: "under_10" },
                      { label: "Under 50 hours (PPL)", value: "under_50" },
                      { label: "Over 50 hours", value: "over_50" },
                    ]}
                    onSelect={(v) => updateProfile("hours", v)}
                  />
                )}
                {step === 5 && (
                  <Question
                    title="What is your training budget?"
                    description="Include loans you could secure. US cadet programmes are not fully sponsored."
                    options={[
                      { label: "Under $10,000", value: "under_10k" },
                      { label: "$10,000 - $50,000", value: "10k_50k" },
                      { label: "$50,000 - $80,000", value: "50k_80k" },
                      { label: "Over $80,000", value: "over_80k" },
                    ]}
                    onSelect={(v) => updateProfile("budget", v)}
                  />
                )}
              </div>
            </div>
          ) : (
            /* Results */
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Your Eligibility Results</h2>
                <p className="text-lg" style={{ color: "oklch(0.65 0.04 240)" }}>
                  Based on your profile, here is how you stack up against the major US cadet programmes.
                </p>
                <button 
                  onClick={() => { setStep(1); setProfile({ age: null, budget: null, hours: null, education: null, rightToWork: null }); }}
                  className="mt-4 text-sm font-bold hover:underline" style={{ color: "oklch(0.65 0.22 45)" }}
                >
                  Start again
                </button>
              </div>

              {/* Eligible Programmes */}
              {eligibleProgrammes.length > 0 && (
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <h3 className="text-2xl font-bold text-white">Potentially Eligible</h3>
                  </div>
                  <div className="space-y-4">
                    {eligibleProgrammes.map(p => (
                      <ProgrammeCard key={p.id} programme={p} eligible={true} profile={profile} />
                    ))}
                  </div>
                </div>
              )}

              {/* Ineligible Programmes */}
              {ineligibleProgrammes.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <XCircle className="w-6 h-6 text-red-400" />
                    <h3 className="text-2xl font-bold text-white">Eligibility Barriers</h3>
                  </div>
                  <div className="space-y-4">
                    {ineligibleProgrammes.map(p => (
                      <ProgrammeCard key={p.id} programme={p} eligible={false} profile={profile} />
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </section>

      <PublicFooter />
    </div>
  );
}

function Question({ title, description, options, onSelect }: { title: string; description?: string; options: { label: string; value: string }[]; onSelect: (v: string) => void }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      {description && <p className="text-sm mb-6" style={{ color: "oklch(0.65 0.04 240)" }}>{description}</p>}
      <div className="space-y-3 mt-6">
        {options.map((opt: any) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className="w-full text-left px-6 py-4 rounded-xl border transition-all hover:scale-[1.01] hover:bg-white/5"
            style={{ borderColor: "oklch(0.28 0.06 240)", color: "white" }}
          >
            <span className="font-bold text-lg">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ProgrammeCard({ programme, eligible, profile }: { programme: CadetProgramme, eligible: boolean, profile: UserProfile }) {
  const result = programme.checkEligibility(profile);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border overflow-hidden transition-all" style={{ background: "oklch(0.18 0.05 240)", borderColor: "oklch(0.28 0.06 240)" }}>
      
      {/* Header */}
      <div 
        className="p-6 cursor-pointer flex items-center justify-between hover:bg-white/5"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${programme.logoColor}`}>
            {programme.airline.charAt(0)}
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">{programme.airline}</h4>
            <div className="text-sm font-medium" style={{ color: "oklch(0.65 0.04 240)" }}>{programme.name}</div>
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 transition-transform ${expanded ? 'rotate-90' : ''}`} style={{ color: "oklch(0.5 0.04 240)" }} />
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="p-6 pt-0 border-t" style={{ borderColor: "oklch(0.28 0.06 240)" }}>
          
          {!eligible && (
            <div className="mt-6 mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <div className="font-bold text-red-400 mb-2 text-sm uppercase tracking-wider">Why you don't qualify yet:</div>
              <ul className="space-y-1">
                {result.reasons.map((r, i) => (
                  <li key={i} className="text-sm text-white flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-base leading-relaxed mb-6 mt-6" style={{ color: "oklch(0.8 0.02 240)" }}>
            {programme.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-3 rounded-lg bg-black/20">
              <div className="flex items-center gap-2 mb-1" style={{ color: "oklch(0.5 0.04 240)" }}>
                <Wallet className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Est. Cost</span>
              </div>
              <div className="text-sm font-bold text-white">{programme.keyFacts.cost}</div>
            </div>
            <div className="p-3 rounded-lg bg-black/20">
              <div className="flex items-center gap-2 mb-1" style={{ color: "oklch(0.5 0.04 240)" }}>
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Duration</span>
              </div>
              <div className="text-sm font-bold text-white">{programme.keyFacts.duration}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
