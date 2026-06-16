import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Plane, BookOpen, School, Calculator, Stethoscope, Target, Clock, DollarSign, Users, Star, TrendingUp, Shield } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";

const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";
const brandGradient = "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";

const AU_GUIDES = [
  { title: "Pilot Training Costs Australia 2026: The Full Breakdown", href: "/australia/guides/australia-pilot-training-costs", desc: "CPL, ATPL, PPL — real 2026 costs from Australian flight schools.", tag: "Popular" },
  { title: "Australian Pilot Salary 2026: Qantas, Virgin & Regionals", href: "/australia/guides/australia-pilot-salary-2026", desc: "From a $65k instructor to a $400k+ Qantas A380 Captain — real 2026 pay scales.", tag: "Salary" },
  { title: "CASA Class 1 Medical: What You Need to Know", href: "/australia/guides/casa-medical-class-1", desc: "DAME requirements, disqualifying conditions, and how to prepare.", tag: "Medical" },
  { title: "CASA CPL Requirements 2026", href: "/australia/guides/casa-cpl-requirements", desc: "Everything you need to know about the CASA Commercial Pilot Licence.", tag: "Licence" },
  { title: "Qantas Group Pilot Academy 2026", href: "/australia/guides/qantas-group-pilot-academy", desc: "Australia's premier pilot training program — costs, curriculum, and career pathways.", tag: "Cadets" },
  { title: "Australian Airline Cadet Programmes 2026", href: "/australia/guides/australia-cadet-programs", desc: "Qantas Group, Virgin Australia, Rex, and regional airline cadet pathways.", tag: "Cadets" },
];

const AU_TOOLS = [
  { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised CASA training roadmap" },
  { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total CPL/ATPL training cost in AUD" },
  { icon: "🩺", label: "CASA Medical Check", href: "/tools/class-1-medical-check", desc: "Assess your Class 1 medical eligibility" },
  { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Qantas, Virgin, Rex, and regional cadet programmes" },
];

const AU_STATS = [
  { value: "A$80k–A$140k", label: "Integrated ATPL cost", icon: <DollarSign className="w-5 h-5" /> },
  { value: "18–24 months", label: "Integrated ATPL duration", icon: <Clock className="w-5 h-5" /> },
  { value: "CASA", label: "Regulator", icon: <Shield className="w-5 h-5" /> },
  { value: "~4,200", label: "Commercial pilots in Australia", icon: <Users className="w-5 h-5" /> },
];

export default function HomeAustralia() {
  return (
    <>
      <SEO
        title="Become a Pilot in Australia 2026 | CASA Training Guide | AviatorIQ"
        description="Australia's most complete pilot training resource. CASA CPL/ATPL routes, real 2026 costs in AUD, Class 1 medical guidance, and matched Australian flight schools."
        canonical="https://aviatoriq.com/australia"
        ogImage="https://aviatoriq.com/og-australia.jpg"
      />
      <PublicNav />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 50%, oklch(0.12 0.08 240) 100%)",
          minHeight: "auto",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, oklch(0.10 0.10 255 / 0.88) 0%, oklch(0.10 0.10 255 / 0.55) 50%, oklch(0.10 0.10 255 / 0.25) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="container relative w-full py-12 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.75 0.04 240)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                🇦🇺 Australia Edition · CASA Approved · Free
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white mb-4 leading-[1.1]" style={{ letterSpacing: "-0.02em" }}>
                Your Personalised{" "}
                <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  CASA Training Roadmap
                </span>
              </h1>
              <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.72 0.04 240)" }}>
                CPL or ATPL? Integrated or modular? How much will it actually cost in AUD? Answer 5 questions and get a specific, data-driven roadmap — your exact CASA route, real 2026 costs, timeline, and matched Australian flight schools. No generic advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all" style={{ background: ctaGradient, boxShadow: "0 0 30px oklch(0.72 0.18 65 / 0.35)" }}>
                  Generate My Free Pilot Roadmap
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/quiz" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white/80 no-underline transition-all hover:text-white" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.15)" }}>
                  Check Career Readiness
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-5 mt-8">
                {["Free · No registration", "Real 2026 CASA costs in AUD", "Matched Australian flight schools"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {AU_STATS.map((s) => (
                <div key={s.label} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                  <div className="mb-3" style={{ color: "oklch(0.72 0.18 65)" }}>{s.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASA Routes Overview */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">CASA Training Routes Explained</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.6 0.04 240)" }}>
              Australia has two main pathways to a commercial pilot licence under CASA. Understanding the difference is the first decision you'll make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Integrated ATPL",
                badge: "Fastest to airline",
                cost: "A$80,000 – A$140,000",
                duration: "18–24 months",
                desc: "Full-time, structured programme from zero to frozen ATPL. Preferred by Qantas Group and Virgin Australia cadet programmes. Typically at dedicated academies like AFAC, AVIA, or Griffith Aviation.",
                pros: ["Fastest route to airline", "Structured environment", "Preferred by major cadets"],
                cons: ["Higher upfront cost", "Less flexibility"],
              },
              {
                title: "Modular CPL/ATPL",
                badge: "Most flexible",
                cost: "A$50,000 – A$90,000",
                duration: "2–4 years",
                desc: "Build your licences step by step — PPL, CPL, then ATPL theory and hours. More affordable but requires self-discipline. Popular with career changers and those building hours via instructing.",
                pros: ["Lower cost per stage", "Work while training", "Flexible timeline"],
                cons: ["Longer overall timeline", "Requires self-management"],
              },
            ].map((route) => (
              <div key={route.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{route.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "oklch(0.72 0.18 65 / 0.15)", color: "oklch(0.72 0.18 65)" }}>{route.badge}</span>
                </div>
                <div className="flex gap-4 mb-4">
                  <div><p className="text-xs mb-0.5" style={{ color: "oklch(0.5 0.04 240)" }}>Typical cost</p><p className="text-sm font-bold text-white">{route.cost}</p></div>
                  <div><p className="text-xs mb-0.5" style={{ color: "oklch(0.5 0.04 240)" }}>Duration</p><p className="text-sm font-bold text-white">{route.duration}</p></div>
                </div>
                <p className="text-sm mb-4" style={{ color: "oklch(0.65 0.04 240)" }}>{route.desc}</p>
                <div className="space-y-1">
                  {route.pros.map(p => <div key={p} className="flex items-center gap-2 text-xs" style={{ color: "oklch(0.65 0.04 240)" }}><CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />{p}</div>)}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient }}>
              Find my best route <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Australian Pilot Training Tools</h2>
          <p className="text-center mb-10 text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Free tools built for CASA candidates</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AU_TOOLS.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group flex flex-col p-5 rounded-2xl no-underline transition-all hover:scale-[1.02]" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                <span className="text-3xl mb-4">{tool.icon}</span>
                <h3 className="text-sm font-bold text-white mb-1">{tool.label}</h3>
                <p className="text-xs flex-1" style={{ color: "oklch(0.55 0.04 240)" }}>{tool.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: "oklch(0.65 0.22 45)" }}>
                  Open tool <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Australian Pilot Training Guides</h2>
              <p className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Researched, accurate, and specific to CASA regulations</p>
            </div>
            <Link href="/guides" className="hidden sm:flex items-center gap-1 text-sm font-semibold no-underline" style={{ color: "oklch(0.65 0.22 45)" }}>
              All guides <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AU_GUIDES.map((g) => (
              <Link key={g.href} href={g.href} className="group flex flex-col p-5 rounded-2xl no-underline transition-all hover:scale-[1.01]" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "oklch(0.65 0.18 240 / 0.15)", color: "oklch(0.65 0.18 240)" }}>{g.tag}</span>
                  <BookOpen className="w-3.5 h-3.5" style={{ color: "oklch(0.45 0.04 240)" }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{g.title}</h3>
                <p className="text-xs flex-1" style={{ color: "oklch(0.55 0.04 240)" }}>{g.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: "oklch(0.65 0.22 45)" }}>
                  Read guide <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Schools */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Australian Flight Schools</h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "oklch(0.6 0.04 240)" }}>
            Browse CASA-approved flight schools across Australia. Compare costs, locations, and training routes.
          </p>
          <Link href="/schools" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient }}>
            <School className="w-4 h-4" />
            Browse Australian Schools
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)" }}>
        <div className="container text-center max-w-2xl">
          <div className="text-5xl mb-6">🇦🇺</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your Australian pilot journey?</h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.65 0.04 240)" }}>
            Get your personalised CASA training roadmap in under 5 minutes. Free, no registration required.
          </p>
          <Link href="/quiz" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline" style={{ background: ctaGradient, boxShadow: "0 0 40px oklch(0.72 0.18 65 / 0.3)" }}>
            Generate My Free Pilot Roadmap
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <PublicFooter />
    </>
  );
}
