import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, BookOpen, School, DollarSign, Clock, Shield, Users } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";

const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

const EU_GUIDES = [
  { title: "How to Become a Pilot in Europe (2026 EASA Guide)", href: "/guides/how-to-become-a-pilot-europe", desc: "EASA ATPL pathways, integrated vs modular, and what it really costs in EUR.", tag: "Essential" },
  { title: "EASA ATPL Training Costs 2026: The Full Breakdown", href: "/guides/easa-atpl-training-costs", desc: "Integrated and modular ATPL — real 2026 costs from European flight schools.", tag: "Popular" },
  { title: "EASA Class 1 Medical: What You Need to Know", href: "/guides/easa-class-1-medical", desc: "AeMC requirements, disqualifying conditions, and how to prepare across EU countries.", tag: "Medical" },
  { title: "Best Flight Schools in Europe 2026", href: "/guides/best-flight-schools-europe", desc: "EASA-approved schools ranked by completion rates, cost, and airline placement.", tag: "Schools" },
  { title: "European Airline Cadet Programmes 2026", href: "/guides/european-airline-cadet-programmes", desc: "Lufthansa, Ryanair, easyJet, KLM, and other European airline cadet pathways.", tag: "Cadets" },
  { title: "Integrated vs Modular ATPL in Europe", href: "/guides/integrated-vs-modular-europe", desc: "Which route is right for you? Costs, timelines, and airline hiring preferences.", tag: "Route" },
];

const EU_TOOLS = [
  { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised EASA training roadmap" },
  { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total ATPL training cost in EUR" },
  { icon: "🩺", label: "EASA Medical Check", href: "/tools/class-1-medical-check", desc: "Assess your Class 1 medical eligibility" },
  { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Lufthansa, Ryanair, easyJet, and other European cadet programmes" },
];

const EU_STATS = [
  { value: "€70k–€120k", label: "Integrated ATPL cost", icon: <DollarSign className="w-5 h-5" /> },
  { value: "18–24 months", label: "Integrated ATPL duration", icon: <Clock className="w-5 h-5" /> },
  { value: "EASA", label: "Regulator", icon: <Shield className="w-5 h-5" /> },
  { value: "~38,000", label: "Commercial pilots in EU", icon: <Users className="w-5 h-5" /> },
];

const EU_COUNTRIES = [
  { flag: "🇩🇪", name: "Germany", note: "Lufthansa Aviation Training, DLR selection" },
  { flag: "🇳🇱", name: "Netherlands", note: "KLM Cityhopper cadet, Dutch ATC" },
  { flag: "🇮🇪", name: "Ireland", note: "Ryanair cadet, CAE Oxford Dublin" },
  { flag: "🇪🇸", name: "Spain", note: "Iberia cadet, SENASA, Jerez" },
  { flag: "🇫🇷", name: "France", note: "Air France cadet, ENAC, Aéroformation" },
  { flag: "🇵🇹", name: "Portugal", note: "TAP cadet, EPST, affordable training" },
  { flag: "🇬🇷", name: "Greece", note: "Olympic Air, Aegean cadet, Athens Flying Club" },
  { flag: "🇨🇿", name: "Czech Republic", note: "Czech Airlines, lower cost modular training" },
];

export default function HomeEurope() {
  return (
    <>
      <SEO
        title="Become a Pilot in Europe 2026 | EASA Training Guide | AviatorIQ"
        description="Europe's most complete EASA pilot training resource. Integrated and modular ATPL routes, real 2026 costs in EUR, Class 1 medical guidance, and matched European flight schools."
        canonical="https://aviatoriq.com/europe"
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
                🇪🇺 Europe Edition · EASA Regulations · Free
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white mb-4 leading-[1.1]" style={{ letterSpacing: "-0.02em" }}>
                Your Personalised{" "}
                <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  EASA Training Roadmap
                </span>
              </h1>
              <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.72 0.04 240)" }}>
                Integrated or modular ATPL? Which European country? How much will it actually cost in EUR? Answer 5 questions and get a specific, data-driven roadmap — your exact EASA route, real 2026 costs, timeline, and matched European flight schools.
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
                {["Free · No registration", "Real 2026 EASA costs in EUR", "Matched European flight schools"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {EU_STATS.map((s) => (
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

      {/* EASA Routes */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">EASA Training Routes Explained</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.6 0.04 240)" }}>
              EASA standardises pilot training across all EU member states. The same licence is valid across 32 countries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Integrated ATPL",
                badge: "Fastest to airline",
                cost: "€70,000 – €120,000",
                duration: "18–24 months",
                desc: "Full-time, structured programme from zero to frozen ATPL. Preferred by Lufthansa, Ryanair, and easyJet cadet programmes. Schools include CAE Oxford, L3Harris, and national academies.",
                pros: ["Fastest route to airline", "Structured environment", "Preferred by major cadets"],
                cons: ["Higher upfront cost", "Less flexibility"],
              },
              {
                title: "Modular ATPL",
                badge: "Most flexible",
                cost: "€40,000 – €80,000",
                duration: "2–4 years",
                desc: "Build your licences step by step — PPL, CPL, IR, then ATPL theory and hours. More affordable and popular in Eastern Europe where costs are lower. Work while training.",
                pros: ["Lower cost per stage", "Work while training", "Eastern Europe options"],
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
        </div>
      </section>

      {/* Country Grid */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Train Anywhere in Europe</h2>
          <p className="text-center mb-10 text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Your EASA licence is valid across all 32 member states</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {EU_COUNTRIES.map((c) => (
              <div key={c.name} className="rounded-xl p-4 text-center" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                <div className="text-3xl mb-2">{c.flag}</div>
                <div className="text-sm font-bold text-white mb-1">{c.name}</div>
                <div className="text-xs" style={{ color: "oklch(0.5 0.04 240)" }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">European Pilot Training Tools</h2>
          <p className="text-center mb-10 text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Free tools built for EASA candidates</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EU_TOOLS.map((tool) => (
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
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">European Pilot Training Guides</h2>
              <p className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Researched, accurate, and specific to EASA regulations</p>
            </div>
            <Link href="/guides" className="hidden sm:flex items-center gap-1 text-sm font-semibold no-underline" style={{ color: "oklch(0.65 0.22 45)" }}>
              All guides <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EU_GUIDES.map((g) => (
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
          <div className="text-5xl mb-6">🇪🇺</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your European pilot journey?</h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.65 0.04 240)" }}>
            Get your personalised EASA training roadmap in under 5 minutes. Free, no registration required.
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
