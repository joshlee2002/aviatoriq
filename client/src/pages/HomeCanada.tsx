import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, BookOpen, School, DollarSign, Clock, Shield, Users } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";

const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

const CA_GUIDES = [
  { title: "Pilot Training Costs Canada 2026: The Full Breakdown", href: "/canada/guides/canada-pilot-training-costs", desc: "CPL, ATPL, PPL — real 2026 costs from Canadian flight schools.", tag: "Popular" },
  { title: "Canadian Pilot Salary 2026: Air Canada, WestJet & Regionals", href: "/canada/guides/canada-pilot-salary-2026", desc: "From a $35k flight instructor to a $350k Air Canada Captain — real 2026 pay scales.", tag: "Salary" },
  { title: "Transport Canada Class 1 Medical: Full Guide", href: "/canada/guides/tc-medical-class-1", desc: "Aviation Medical Examiner (AME) requirements, disqualifying conditions, and how to prepare.", tag: "Medical" },
  { title: "Transport Canada CPL Requirements 2026", href: "/canada/guides/transport-canada-cpl-requirements", desc: "Everything you need to know about the Transport Canada Commercial Pilot Licence.", tag: "Licence" },
  { title: "Air Canada Jazz Cadet Program 2026", href: "/canada/guides/air-canada-jazz-cadet", desc: "The Jazz Approach program — direct pathway to Air Canada Express.", tag: "Cadets" },
  { title: "Canadian Airline Cadet Programmes 2026", href: "/canada/guides/canada-cadet-programs", desc: "Air Canada, WestJet, Jazz, Porter, and regional airline cadet pathways.", tag: "Cadets" },
  { title: "WestJet Encore First Officer 2026", href: "/canada/guides/westjet-encore-cadet", desc: "WestJet Encore pathway — requirements, application, and career progression.", tag: "Cadets" },
  { title: "Porter Airlines Cadet Program 2026", href: "/canada/guides/porter-airlines-cadet-program", desc: "Porter's cadet pathway on the Embraer E195-E2 — eligibility and career trajectory.", tag: "Cadets" },
  { title: "Transport Canada ATPL Requirements 2026", href: "/canada/guides/tc-atpl-requirements", desc: "Everything you need to know about the Transport Canada ATPL licence.", tag: "Licence" },
  { title: "Canada Pilot Shortage 2026", href: "/canada/guides/canada-pilot-shortage", desc: "The growing pilot shortage in Canada — opportunities and how to position yourself.", tag: "Career" },
  { title: "Canada Regional Airlines 2026", href: "/canada/guides/canada-regional-airlines", desc: "Jazz, Encore, PAL — the stepping stones to mainline airline careers in Canada.", tag: "Career" },
];

const CA_TOOLS = [
  { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised Transport Canada training roadmap" },
  { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total CPL/ATPL training cost in CAD" },
  { icon: "🩺", label: "Medical Readiness Check", href: "/tools/class-1-medical-check", desc: "Assess your Class 1 medical eligibility" },
  { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Air Canada, WestJet, Jazz, and regional cadet programmes" },
];

const CA_STATS = [
  { value: "C$80k–C$130k", label: "Integrated ATPL cost", icon: <DollarSign className="w-5 h-5" /> },
  { value: "18–24 months", label: "Integrated ATPL duration", icon: <Clock className="w-5 h-5" /> },
  { value: "Transport Canada", label: "Regulator", icon: <Shield className="w-5 h-5" /> },
  { value: "~4,000", label: "Commercial pilots in Canada", icon: <Users className="w-5 h-5" /> },
];

export default function HomeCanada() {
  return (
    <>
      <SEO
        title="Become a Pilot in Canada 2026 | Transport Canada Training Guide | AviatorIQ"
        description="Canada's most complete pilot training resource. Transport Canada CPL/ATPL routes, real 2026 costs in CAD, Class 1 medical guidance, and matched Canadian flight schools."
        canonical="https://aviatoriq.com/canada"
      />
      <PublicNav />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 50%, oklch(0.12 0.08 240) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, oklch(0.10 0.10 255 / 0.88) 0%, oklch(0.10 0.10 255 / 0.55) 50%, oklch(0.10 0.10 255 / 0.25) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="container relative w-full py-12 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.75 0.04 240)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                🇨🇦 Canada Edition · Transport Canada · Free
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white mb-4 leading-[1.1]" style={{ letterSpacing: "-0.02em" }}>
                Your Personalised{" "}
                <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Canadian Pilot Roadmap
                </span>
              </h1>
              <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.72 0.04 240)" }}>
                CPL or ATPL? Integrated or modular? How much will it actually cost in CAD? Answer 5 questions and get a specific, data-driven roadmap — your exact Transport Canada route, real 2026 costs, timeline, and matched Canadian flight schools.
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
                {["Free · No registration", "Real 2026 Transport Canada costs in CAD", "Matched Canadian flight schools"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {CA_STATS.map((s) => (
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

      {/* Routes */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Transport Canada Training Routes</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.6 0.04 240)" }}>
              Canada has two main pathways to a commercial pilot licence. Understanding the difference is the first decision you'll make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Integrated ATPL",
                badge: "Fastest to airline",
                cost: "C$80,000 – C$130,000",
                duration: "18–24 months",
                desc: "Full-time, structured programme from zero to frozen ATPL. Preferred by Air Canada and WestJet cadet programmes. Typically at dedicated academies like Seneca College, BCIT, or Confederation College.",
                pros: ["Fastest route to airline", "Structured environment", "Preferred by major cadets"],
                cons: ["Higher upfront cost", "Less flexibility"],
              },
              {
                title: "Modular CPL/ATPL",
                badge: "Most flexible",
                cost: "C$50,000 – C$90,000",
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Canadian Pilot Training Tools</h2>
          <p className="text-center mb-10 text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Free tools built for Transport Canada candidates</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CA_TOOLS.map((tool) => (
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Canadian Pilot Training Guides</h2>
              <p className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Researched, accurate, and specific to Transport Canada regulations</p>
            </div>
            <Link href="/guides" className="hidden sm:flex items-center gap-1 text-sm font-semibold no-underline" style={{ color: "oklch(0.65 0.22 45)" }}>
              All guides <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CA_GUIDES.map((g) => (
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

      {/* Final CTA */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)" }}>
        <div className="container text-center max-w-2xl">
          <div className="text-5xl mb-6">🇨🇦</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your Canadian pilot journey?</h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.65 0.04 240)" }}>
            Get your personalised Transport Canada training roadmap in under 5 minutes. Free, no registration required.
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
