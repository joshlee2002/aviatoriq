import SEO from "@/components/SEO";
import { Link } from "wouter";
import {
  Plane, Calculator, Stethoscope, Compass,
  BookOpen, Target, CheckCircle2,
  Briefcase, Users, BrainCircuit, MonitorPlay
} from "lucide-react";
import { ChevronRight } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";

const bg = "oklch(0.14 0.04 240)";
const cardBg = "oklch(0.18 0.05 240)";
const cardBorder = "oklch(0.28 0.06 240)";
const textMain = "oklch(0.95 0.02 240)";
const textMuted = "oklch(0.65 0.04 240)";
const accent = "oklch(0.65 0.22 45)";
const accentLight = "oklch(0.75 0.22 45)";

export default function HomeUS() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: bg, color: textMain }}>
      <SEO
        title="AviatorIQ US — Pilot Training Guidance & Costs"
        description="The most personalised pilot training guidance platform for the US. Understand FAA requirements, ATP costs, Part 141 vs 61, and find the right flight school."
        canonical="https://www.aviatoriq.com/us"
      />
      <PublicNav />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Cockpit view"
            className="w-full h-full object-cover opacity-[0.28]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.04_240)] via-[oklch(0.14_0.04_240)/0.8] to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column: Copy & CTAs */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{ background: "oklch(0.25 0.06 240)", color: accent }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                </span>
                US Edition
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                Find out exactly what's <br className="hidden sm:block" />
                <span style={{ color: "oklch(0.65 0.18 240)" }}>standing between you</span><br className="hidden sm:block" />
                and the cockpit
              </h1>

              <p className="text-lg sm:text-xl mb-8 leading-relaxed" style={{ color: textMuted }}>
                5 minutes. We'll identify your biggest barrier, your strongest asset, and give you a personalised US training roadmap — not generic advice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/quiz">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                    style={{ background: accent, color: "white" }}>
                    Start the assessment <Target className="w-5 h-5" />
                  </button>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm" style={{ color: textMuted }}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" style={{ color: accent }} />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" style={{ color: accent }} />
                  <span>No registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" style={{ color: accent }} />
                  <span>5 minutes</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="flex-1 w-full max-w-lg hidden lg:block">
              <div className="relative rounded-2xl border overflow-hidden shadow-2xl"
                style={{ background: cardBg, borderColor: cardBorder }}>
                <div className="p-6 border-b" style={{ borderColor: cardBorder }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-xl font-bold text-blue-400">
                        M
                      </div>
                      <div>
                        <div className="font-bold text-white">Michael, 24</div>
                        <div className="text-sm" style={{ color: textMuted }}>Texas • $60k Budget</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-400">Readiness Score</div>
                      <div className="text-2xl font-black text-white">82/100</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-black/20">
                  <div className="text-sm font-bold mb-3 text-white">Recommended Route</div>
                  <div className="p-4 rounded-xl border mb-4" style={{ borderColor: cardBorder, background: cardBg }}>
                    <div className="flex items-center gap-3 mb-2">
                      <Plane className="w-5 h-5" style={{ color: accent }} />
                      <span className="font-bold text-white">Part 141 Flight School</span>
                    </div>
                    <p className="text-sm" style={{ color: textMuted }}>
                      Fastest route to ATP minimums. Eligible for federal student loans.
                    </p>
                  </div>
                  <div className="text-sm font-bold mb-3 text-white">Matched Schools</div>
                  <div className="space-y-2">
                    {["ATP Flight School", "Aerosim Flight Academy", "L3Harris USA"].map((school, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border" style={{ borderColor: cardBorder }}>
                        <span className="text-sm text-white">{school}</span>
                        <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 font-medium">95% Match</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y" style={{ borderColor: cardBorder, background: "oklch(0.16 0.04 240)" }}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            <div>
              <div className="text-3xl font-black text-white mb-1">50+</div>
              <div className="text-sm font-medium" style={{ color: textMuted }}>US flight schools</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">20+</div>
              <div className="text-sm font-medium" style={{ color: textMuted }}>US-specific guides</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">11</div>
              <div className="text-sm font-medium" style={{ color: textMuted }}>Free tools</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white mb-1">Free</div>
              <div className="text-sm font-medium" style={{ color: textMuted }}>Always, no paywall</div>
            </div>
          </div>
        </div>
      </section>

      {/* US TOOLS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Tools built for the US market</h2>
            <p className="text-lg" style={{ color: textMuted }}>
              Stop guessing. Use real data to plan your FAA training route and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/us/calculator">
              <div className="p-6 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer"
                style={{ background: cardBg, borderColor: cardBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "oklch(0.25 0.06 240)", color: accent }}>
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">US Cost Calculator</h3>
                <p className="text-sm" style={{ color: textMuted }}>
                  Itemised breakdown of Part 61 vs 141 costs, checkrides, and FAA written exams.
                </p>
              </div>
            </Link>

            <Link href="/us/medical-lookup">
              <div className="p-6 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer"
                style={{ background: cardBg, borderColor: cardBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "oklch(0.25 0.06 240)", color: accent }}>
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">FAA Medical Lookup</h3>
                <p className="text-sm" style={{ color: textMuted }}>
                  Check specific conditions (ADHD, vision, etc.) against FAA First Class medical standards.
                </p>
              </div>
            </Link>

            <Link href="/us/cadet-eligibility">
              <div className="p-6 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer"
                style={{ background: cardBg, borderColor: cardBorder }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "oklch(0.25 0.06 240)", color: accent }}>
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">US Cadet Eligibility</h3>
                <p className="text-sm" style={{ color: textMuted }}>
                  See if you qualify for United Aviate, American Airlines Cadet Academy, or Delta Propel.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* US GUIDES SECTION */}
      <section className="py-24 border-t" style={{ borderColor: cardBorder, background: "oklch(0.12 0.04 240)" }}>
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">US Pilot Guides</h2>
              <p className="text-lg" style={{ color: textMuted }}>
                Everything you need to know about flying in America.
              </p>
            </div>
            <Link href="/guides">
              <button className="hidden sm:flex items-center gap-2 text-sm font-bold hover:underline" style={{ color: accent }}>
                View all guides <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/us/guides/how-to-become-a-pilot">
              <div className="group rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: cardBorder, background: cardBg }}>
                <div className="h-48 bg-black/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 rounded text-xs font-bold bg-white/20 text-white backdrop-blur-md">Step-by-step</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">How to Become a Pilot in the USA</h3>
                  <p className="text-sm" style={{ color: textMuted }}>The complete 2026 guide to FAA licences, from Student Pilot to ATP.</p>
                </div>
              </div>
            </Link>

            <Link href="/us/guides/part-61-vs-141">
              <div className="group rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: cardBorder, background: cardBg }}>
                <div className="h-48 bg-black/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 rounded text-xs font-bold bg-white/20 text-white backdrop-blur-md">Training Routes</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Part 61 vs Part 141 Flight Schools</h3>
                  <p className="text-sm" style={{ color: textMuted }}>Which route is actually cheaper and faster for airline-bound students?</p>
                </div>
              </div>
            </Link>

            <Link href="/us/guides/faa-medical-requirements">
              <div className="group rounded-2xl border overflow-hidden cursor-pointer" style={{ borderColor: cardBorder, background: cardBg }}>
                <div className="h-48 bg-black/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 rounded text-xs font-bold bg-white/20 text-white backdrop-blur-md">Medical</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">FAA First Class Medical Guide</h3>
                  <p className="text-sm" style={{ color: textMuted }}>What the AME actually checks, disqualifying conditions, and special issuances.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}


