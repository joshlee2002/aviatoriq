import { Link } from "wouter";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import EmailCapture from "@/components/EmailCapture";
import { trpc } from "@/lib/trpc";
import { useCountry } from "@/contexts/CountryContext";
import {
  Plane,
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  BookOpen,
  Calculator,
  Building2,
  ChevronRight,
  Shield,
  Clock,
  Target,
  Zap,
  MapPin,
  Stethoscope,
  GraduationCap,
  Compass,
  Lock,
  Award,
  Briefcase,
  BrainCircuit,
  MonitorPlay,
  Globe,
  X,
  ShieldCheck,
  CalendarCheck,
  BadgeCheck,
} from "lucide-react";

// ─── Shared style tokens ──────────────────────────────────────────────────────
const surface = "oklch(0.14 0.08 250)";
const surfaceHover = "oklch(0.17 0.08 250)";
const border = "oklch(1 0 0 / 0.08)";
const borderHover = "oklch(1 0 0 / 0.16)";
const muted = "oklch(0.55 0.04 240)";
const brandGradient = "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";
const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

// ─── Country Detection Banner ─────────────────────────────────────────────────
function CountryDetectionBanner() {
  const { country, setCountry } = useCountry();
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (country || dismissed) return;
    // Detect via timezone
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.startsWith("America/")) {
        setDetectedCountry("us");
      } else if (tz.startsWith("Australia/")) {
        setDetectedCountry("australia");
      } else if (tz.startsWith("Europe/London") || tz === "GB") {
        setDetectedCountry("uk");
      } else if (tz.startsWith("Europe/")) {
        setDetectedCountry("europe");
      } else if (tz.startsWith("Canada/") || tz.startsWith("America/Toronto") || tz.startsWith("America/Vancouver")) {
        setDetectedCountry("canada");
      }
    } catch {}
  }, [country, dismissed]);

  if (!detectedCountry || country || dismissed) return null;

  const labels: Record<string, { flag: string; name: string; href: string }> = {
    us: { flag: "🇺🇸", name: "United States", href: "/us" },
    australia: { flag: "🇦🇺", name: "Australia", href: "/australia" },
    uk: { flag: "🇬🇧", name: "United Kingdom", href: "/" },
    europe: { flag: "🇪🇺", name: "Europe (EASA)", href: "/europe" },
    canada: { flag: "🇨🇦", name: "Canada", href: "/canada" },
  };

  const detected = labels[detectedCountry];
  if (!detected) return null;

  return (
    <div
      className="relative flex items-center justify-between gap-3 px-4 py-2.5 text-sm"
      style={{ background: "oklch(0.18 0.08 240)", borderBottom: "1px solid oklch(0.45 0.18 240 / 0.3)" }}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <Globe className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.65 0.18 240)" }} />
        <span style={{ color: "oklch(0.75 0.04 240)" }}>
          Looks like you're in <strong className="text-white">{detected.flag} {detected.name}</strong>.
        </span>
        <button
          onClick={() => { setCountry(detectedCountry as any); if (detectedCountry !== "uk") window.location.href = detected.href; setDismissed(true); }}
          className="ml-1 px-3 py-0.5 rounded-full text-xs font-semibold transition-all"
          style={{ background: ctaGradient, color: "white" }}
        >
          Switch to {detected.name} version
        </button>
      </div>
      <button onClick={() => setDismissed(true)} className="flex-shrink-0 p-1 rounded-full hover:bg-white/10 transition-all" aria-label="Dismiss">
        <X className="w-3.5 h-3.5" style={{ color: muted }} />
      </button>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const statsQuery = trpc.platform.stats.useQuery(undefined, { staleTime: 60_000 });
  const stats = statsQuery.data;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 50%, oklch(0.12 0.08 240) 100%)",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Hero background photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/manus-storage/hero-cockpit_b4476f04.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.22,
        }}
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, oklch(0.10 0.10 255 / 0.88) 0%, oklch(0.10 0.10 255 / 0.55) 50%, oklch(0.10 0.10 255 / 0.25) 100%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Radial glows */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "700px", height: "700px", background: "radial-gradient(circle, oklch(0.45 0.18 240 / 0.12) 0%, transparent 65%)", transform: "translate(25%, -25%)" }} />
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, oklch(0.6 0.18 200 / 0.07) 0%, transparent 65%)", transform: "translate(-25%, 25%)" }} />

      <div className="container relative w-full py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in"
              style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.75 0.04 240)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Free · No registration · 5 minutes
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-display font-bold text-white mb-4 leading-[1.1] animate-fade-in-up"
              style={{ letterSpacing: "-0.02em" }}
            >
              AviatorIQ helps aspiring pilots understand their{" "}
              <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                best route, costs, readiness
              </span>
              {" "}and matched training options
            </h1>

            <p className="text-base md:text-lg mb-3 leading-relaxed animate-fade-in-up delay-100" style={{ color: "oklch(0.72 0.04 240)" }}>
              Based on your country — UK CAA, FAA, CASA, EASA or beyond. Get country-specific routes, real 2026 costs, and matched flight schools. No generic advice.
            </p>

            {/* Country quick-select */}
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up delay-150">
              {[
                { flag: "🇬🇧", label: "UK", href: "/" },
                { flag: "🇺🇸", label: "USA", href: "/us" },
                { flag: "🇦🇺", label: "Australia", href: "/australia" },
                { flag: "🇨🇦", label: "Canada", href: "/canada" },
                { flag: "🇪🇺", label: "Europe", href: "/europe" },
              ].map(c => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold no-underline transition-all hover:scale-105"
                  style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.8 0.04 240)" }}
                >
                  {c.flag} {c.label}
                </Link>
              ))}
              <Link
                href="/select"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold no-underline transition-all hover:scale-105"
                style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.10)", color: muted }}
              >
                <Globe className="w-3 h-3" /> More
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Link
                href="/roadmap"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all hover:scale-[1.02]"
                style={{ background: ctaGradient, boxShadow: "0 0 30px oklch(0.72 0.18 65 / 0.35)" }}
              >
                Get My Free Pilot Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white/80 no-underline transition-all hover:text-white"
                style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.15)" }}
              >
                Full Career Assessment
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-8 animate-fade-in-up delay-300">
              {["Free · No registration", "Country-specific guidance", "Real 2026 costs & timelines"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Platform preview — UK sample, clearly labelled illustrative */}
          <div className="hidden lg:block animate-fade-in-up delay-200">
            <div
              className="rounded-2xl p-6"
              style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)", backdropFilter: "blur(20px)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.04 240)" }}>Sample Roadmap</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "oklch(0.72 0.18 65 / 0.2)", color: "oklch(0.85 0.15 65)" }}>🇬🇧 UK Example</span>
              </div>

              {/* Candidate summary */}
              <div className="rounded-xl p-4 mb-4" style={{ background: "oklch(0.45 0.18 240 / 0.1)", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: ctaGradient }}>JM</div>
                  <div>
                    <div className="text-sm font-semibold text-white">Jamie, 24 — London, UK</div>
                    <div className="text-xs" style={{ color: "oklch(0.6 0.04 240)" }}>Goal: Airline Pilot (CAA ATPL)</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-lg font-display font-black" style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>84</div>
                    <div className="text-[10px] uppercase tracking-wider" style={{ color: "oklch(0.55 0.04 240)" }}>IQ Score</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Route", value: "Integrated ATPL" },
                    { label: "Budget", value: "£80k–£120k" },
                    { label: "Timeline", value: "Within 12 months" },
                    { label: "Top barrier", value: "Finance" },
                  ].map(item => (
                    <div key={item.label} className="rounded-lg px-3 py-2" style={{ background: "oklch(1 0 0 / 0.05)" }}>
                      <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "oklch(0.5 0.04 240)" }}>{item.label}</div>
                      <div className="text-xs font-semibold text-white/80">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended schools */}
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-2 flex items-center gap-1.5" style={{ color: "oklch(0.4 0.04 240)" }}>
                  Matched UK Flight Schools
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-normal" style={{ background: "oklch(1 0 0 / 0.06)", color: "oklch(0.5 0.04 240)" }}>Illustrative</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: "Oxford Aviation Academy (CAE)", match: "98%", location: "Oxford, UK 🇬🇧" },
                    { name: "L3Harris Airline Academy", match: "94%", location: "Bournemouth, UK 🇬🇧" },
                    { name: "Skyborne Airline Academy", match: "91%", location: "Gloucestershire, UK 🇬🇧" },
                  ].map(school => (
                    <div
                      key={school.name}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg"
                      style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.07)" }}
                    >
                      <div>
                        <div className="text-xs font-medium text-white/80">{school.name}</div>
                        <div className="text-[10px]" style={{ color: "oklch(0.5 0.04 240)" }}>{school.location}</div>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: "oklch(0.72 0.18 65 / 0.15)", color: "oklch(0.85 0.15 65)" }}>{school.match}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Trust Signal Bar ────────────────────────────────────────────────────────
function TrustSignalBar() {
  return (
    <div
      style={{
        background: "oklch(0.13 0.06 250)",
        borderBottom: "1px solid oklch(1 0 0 / 0.07)",
        borderTop: "1px solid oklch(1 0 0 / 0.07)",
      }}
    >
      <div className="container py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            {
              icon: <BadgeCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />,
              text: "Verified school data",
            },
            {
              icon: <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.65 0.18 240)" }} />,
              text: "UK CAA & FAA licensed routes",
            },
            {
              icon: <CalendarCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.65 0.15 160)" }} />,
              text: "Updated June 2026",
            },
            {
              icon: <Globe className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.65 0.18 200)" }} />,
              text: "Trusted by aspiring pilots in 12+ countries",
            },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              {item.icon}
              <span className="text-xs font-medium" style={{ color: "oklch(0.62 0.04 240)" }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Social proof bar ─────────────────────────────────────────────────────────
function SocialProofBar() {
  return (
    <div style={{ background: "oklch(0.12 0.08 250)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { value: "54+", label: "Flight schools worldwide" },
            { value: "33+", label: "In-depth training guides" },
            { value: "10+", label: "Countries covered" },
            { value: "Free", label: "Always, no registration" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="font-display font-bold text-lg" style={{ background: brandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {stat.value}
              </span>
              <span className="text-sm" style={{ color: muted }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Country Versions ─────────────────────────────────────────────────────────
function CountryVersionsSection() {
  const versions = [
    { flag: "🇬🇧", label: "United Kingdom", regulator: "UK CAA", desc: "ATPL, CAA licences, UK flight schools, airline cadet programmes", href: "/", cta: "UK version" },
    { flag: "🇺🇸", label: "United States", regulator: "FAA", desc: "FAA licences, Part 61 vs 141, ATP, US airline cadet programmes", href: "/us", cta: "US version" },
    { flag: "🇦🇺", label: "Australia", regulator: "CASA", desc: "CASA licences, CPL/ATPL, Australian flight schools, Qantas Academy", href: "/australia", cta: "AU version" },
    { flag: "🇨🇦", label: "Canada", regulator: "Transport Canada", desc: "TC CPL/ATPL, Canadian flight schools, NAV CANADA airspace", href: "/canada", cta: "CA version" },
    { flag: "🇪🇺", label: "Europe (EASA)", regulator: "EASA", desc: "EASA ATPL, integrated academies, Lufthansa, Wizz Air, Ryanair cadets", href: "/europe", cta: "EU version" },
    { flag: "🌍", label: "Other Countries", regulator: "Global", desc: "UAE, South Africa, New Zealand, India, Singapore and more", href: "/select", cta: "Select country" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}>
            <Globe className="w-3 h-3" />
            Country-specific guidance
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
            Select your country for the right guidance
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Costs, routes, regulators, and flight schools differ significantly between countries. AviatorIQ gives you the correct information for your location — not a generic global average.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {versions.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              className="group flex flex-col p-5 rounded-2xl no-underline transition-all duration-200 hover:scale-[1.02]"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = borderHover; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = border; }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{v.flag}</span>
                <div>
                  <div className="font-display font-bold text-white">{v.label}</div>
                  <div className="text-xs font-semibold" style={{ color: "oklch(0.65 0.18 240)" }}>{v.regulator}</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: muted }}>{v.desc}</p>
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "oklch(0.72 0.18 65)" }}>
                {v.cta}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    { number: "01", icon: <BookOpen className="w-6 h-6" />, title: "Answer a few honest questions", description: "Tell us about your goal, your country, your situation, and what has been stopping you. The assessment takes around 5 minutes and is completely free.", color: "oklch(0.45 0.18 240)" },
    { number: "02", icon: <Target className="w-6 h-6" />, title: "Discover your biggest barrier", description: "Get your AviatorIQ Score and a clear, honest answer to the question you have been avoiding: what is actually standing between you and the cockpit?", color: "oklch(0.72 0.18 65)" },
    { number: "03", icon: <Building2 className="w-6 h-6" />, title: "Get a country-specific roadmap", description: "Receive a training roadmap with the correct regulator, routes, costs, and matched flight schools for your country — not a generic global template.", color: "oklch(0.6 0.18 200)" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.13 0.09 250)" }}>
      <div className="container">
        <div className="text-center mb-8 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}>
            How it works
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Three steps from curiosity to a clear plan
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            No generic advice. No information overload. Just a clear answer to the question you actually need answered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-5 md:p-8 rounded-2xl transition-all duration-300"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = borderHover; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${step.color.replace(")", " / 0.15)")}`, color: step.color }}>
                  {step.icon}
                </div>
                <div className="text-4xl font-display font-black leading-none mt-1" style={{ color: "oklch(0.25 0.06 240)" }}>{step.number}</div>
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Training Routes ──────────────────────────────────────────────────────────
function TrainingRoutesSection() {
  const routes = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Airline Pilot (ATPL)",
      description: "The most structured path to the airlines. Integrated ATPL (18–24 months full-time) or Modular ATPL (3–5 years flexible). Costs and routes vary significantly by country.",
      href: "/guides/integrated-vs-modular",
      cta: "Compare routes",
      color: "oklch(0.45 0.18 240)",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Private Pilot (PPL)",
      description: "Fly for pleasure or as a stepping stone to a commercial licence. The most accessible entry point into aviation, available worldwide.",
      href: "/guides/how-to-become-a-pilot",
      cta: "Learn more",
      color: "oklch(0.6 0.18 200)",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Flight Instructor (FI)",
      description: "Train others to fly while building hours towards an airline career. A popular route for modular trainees who need to build the required flight time.",
      href: "/guides/flight-instructor-uk",
      cta: "Explore this route",
      color: "oklch(0.72 0.18 65)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Airline Cadet Programmes",
      description: "Sponsored training directly with an airline. Highly competitive but removes the finance burden. BA, easyJet, Ryanair, TUI, Delta, United and more.",
      href: "/guides/cadet-pilot-programmes-uk",
      cta: "View programmes",
      color: "oklch(0.65 0.2 300)",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.12 0.09 252)" }}>
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}>
            Training routes
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
            Every type of pilot training, covered
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Whether you want to fly for an airline, for pleasure, or as a career change, AviatorIQ helps you find the right route.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {routes.map((route) => (
            <div
              key={route.title}
              className="p-5 md:p-7 rounded-2xl transition-all duration-300 group"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = borderHover; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${route.color.replace(")", " / 0.15)")}`, color: route.color }}>
                {route.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{route.title}</h3>
              <p className="leading-relaxed mb-5 text-sm" style={{ color: muted }}>{route.description}</p>
              <Link href={route.href} className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all" style={{ color: route.color }}>
                {route.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── After Training ─────────────────────────────────────────────────────────────
function AfterTrainingSection() {
  const resources = [
    { icon: <Briefcase className="w-6 h-6" />, color: "oklch(0.72 0.18 65)", title: "Airline Interview Prep", description: "Common technical and HR questions, group exercise strategies, and how to prepare for the competency-based interview.", href: "/guides/airline-pilot-interview" },
    { icon: <Users className="w-6 h-6" />, color: "oklch(0.45 0.18 240)", title: "Pilot CV & Cover Letters", description: "How to structure an aviation CV, highlight your training achievements, and write a cover letter that passes airline screening.", href: "/guides/pilot-cv-cover-letter" },
    { icon: <BrainCircuit className="w-6 h-6" />, color: "oklch(0.6 0.18 200)", title: "Aptitude Testing", description: "What to expect from CUT-E, Symbiotics, and Pilapt tests. How to practice numerical reasoning, spatial awareness, and multitasking.", href: "/guides/pilot-aptitude-test-preparation" },
    { icon: <MonitorPlay className="w-6 h-6" />, color: "oklch(0.65 0.2 300)", title: "Simulator Assessments", description: "How airlines assess your raw flying ability and CRM in a full-motion simulator before hiring.", href: "/guides/airline-simulator-assessment" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5" style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}>
            <Briefcase className="w-3 h-3" />
            Beyond Flight School
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            The final hurdle: getting hired
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Getting your licence is only half the battle. Passing airline selection is what gets you into the right-hand seat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((res) => (
            <div
              key={res.title}
              className="p-5 rounded-2xl transition-all duration-300 group"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = borderHover; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${res.color.replace(")", " / 0.15)")}`, color: res.color }}>
                {res.icon}
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">{res.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: muted }}>{res.description}</p>
              <Link href={res.href} className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all" style={{ color: res.color }}>
                Read guide
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cost Section ─────────────────────────────────────────────────────────────
function CostSection() {
  const { country } = useCountry();
  const isUS = country === "us";
  const costData = isUS ? [
    { route: "Integrated ATP", range: "$100k–$150k", duration: "18–24 months", flag: "✈️", color: "oklch(0.45 0.18 240)" },
    { route: "Modular / Part 61", range: "$50k–$100k", duration: "3–5 years", flag: "🎓", color: "oklch(0.6 0.18 200)" },
    { route: "Private Pilot (PPL)", range: "$8k–$15k", duration: "6–18 months", flag: "🛩️", color: "oklch(0.72 0.18 65)" },
  ] : [
    { route: "Integrated ATPL", range: "£80k–£120k", duration: "18–24 months", flag: "✈️", color: "oklch(0.45 0.18 240)" },
    { route: "Modular ATPL", range: "£40k–£80k", duration: "3–5 years", flag: "🎓", color: "oklch(0.6 0.18 200)" },
    { route: "PPL Only", range: "£8k–£15k", duration: "6–18 months", flag: "🛩️", color: "oklch(0.72 0.18 65)" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.13 0.09 250)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
              How much does pilot training cost?
            </h2>
            <p className="text-lg mb-7 leading-relaxed" style={{ color: muted }}>
              Training costs vary significantly depending on your chosen route, country and school. Use our cost calculator for a personalised estimate, or take the assessment to see what suits your budget.
            </p>
            <div className="space-y-3 mb-8">
              {costData.map((item) => (
                <div
                  key={item.route}
                  className="flex items-center justify-between p-4 rounded-xl transition-all"
                  style={{ background: surface, border: `1px solid ${border}` }}
                >
                  <div>
                    <div className="font-display font-semibold text-white text-sm">{item.flag} {item.route}</div>
                    <div className="text-xs mt-0.5" style={{ color: muted }}>{item.duration}</div>
                  </div>
                  <div className="font-bold text-xs text-right max-w-[140px]" style={{ color: item.color }}>{item.range}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/calculator" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white no-underline" style={{ background: brandGradient }}>
                <Calculator className="w-4 h-4" />
                Cost Calculator
              </Link>
              <Link href="/guides/pilot-training-costs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white" style={{ background: "oklch(1 0 0 / 0.06)", border: `1px solid ${border}` }}>
                Full Cost Guide
              </Link>
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ background: "oklch(0.16 0.10 248)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: ctaGradient }}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">Finance options available</div>
                <div className="text-sm" style={{ color: muted }}>For qualifying candidates</div>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-sm" style={{ color: muted }}>
              {isUS
                ? "Many US flight schools offer financing, and veterans may qualify for GI Bill or VA benefits. Airline cadet programmes also offer sponsored pathways."
                : "Many UK flight schools offer finance plans, career development loans, and payment structures to help spread the cost of training."}
            </p>
            <ul className="space-y-3 mb-6">
              {(isUS
                ? ["GI Bill & VA benefits", "School payment plans", "Airline cadet sponsorships", "Sallie Mae aviation loans", "ATP CTP funding options"]
                : ["Career development loans", "School payment plans", "Airline cadet sponsorships", "Government-backed schemes", "Part-time modular funding"]
              ).map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.72 0.04 240)" }}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={isUS ? "/us/guides/financing-pilot-training" : "/guides/how-to-finance-pilot-training-uk"}
              className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all"
              style={{ color: "oklch(0.72 0.18 65)" }}
            >
              {isUS ? "Read the US finance guide" : "Read the UK finance guide"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── School Matching ──────────────────────────────────────────────────────────
function SchoolMatchingSection() {
  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Matched to the right flight school
          </h2>
          <p className="text-lg" style={{ color: muted }}>
            After your assessment, AviatorIQ matches you with flight schools based on your country, training goal, budget and preferences — not random results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            { icon: <Users className="w-6 h-6" />, color: "oklch(0.45 0.18 240)", title: "Country-filtered matches", desc: "Schools are filtered by your country, training goal, budget range and location preferences." },
            { icon: <Lock className="w-6 h-6" />, color: "oklch(0.6 0.18 200)", title: "Your data is protected", desc: "We only share your details with schools you explicitly request introductions from." },
            { icon: <Clock className="w-6 h-6" />, color: "oklch(0.72 0.18 65)", title: "No cold calls", desc: "You control who contacts you. No unsolicited calls from schools you have not chosen." },
          ].map((item) => (
            <div key={item.title} className="p-7 rounded-2xl text-center" style={{ background: surface, border: `1px solid ${border}` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${item.color.replace(")", " / 0.15)")}`, color: item.color }}>
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-wrap gap-4 justify-center">
          <Link href="/schools" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white" style={{ background: "oklch(1 0 0 / 0.06)", border: `1px solid ${border}` }}>
            Browse All Schools
          </Link>
          <Link href="/quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient, boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.25)" }}>
            Get Matched Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Guides ───────────────────────────────────────────────────────────────────
function GuidesSection() {
  const { country } = useCountry();
  const isUS = country === "us";
  const guides = isUS ? [
    { title: "How to become a pilot (USA)", href: "/us/guides/how-to-become-a-pilot", time: "8 min read", icon: "🛫" },
    { title: "FAA Private Pilot Licence (PPL)", href: "/us/guides/private-pilot-licence", time: "6 min read", icon: "⚖️" },
    { title: "FAA Class 1 Medical", href: "/us/guides/faa-class-1-medical", time: "5 min read", icon: "🩺" },
    { title: "US airline pilot salary 2026", href: "/us/guides/airline-pilot-salary", time: "7 min read", icon: "💰" },
    { title: "Delta Propel Cadet Programme", href: "/us/guides/delta-propel-cadet-programme", time: "5 min read", icon: "📅" },
    { title: "How to finance pilot training (US)", href: "/us/guides/financing-pilot-training", time: "6 min read", icon: "🏦" },
  ] : [
    { title: "How to become a pilot (UK)", href: "/guides/how-to-become-a-pilot", time: "8 min read", icon: "🛫" },
    { title: "Integrated vs Modular training", href: "/guides/integrated-vs-modular", time: "6 min read", icon: "⚖️" },
    { title: "What is a Class 1 Medical?", href: "/guides/class-1-medical", time: "5 min read", icon: "🩺" },
    { title: "UK airline pilot salary 2026", href: "/guides/uk-pilot-salary-2026", time: "7 min read", icon: "💰" },
    { title: "How long does training take?", href: "/guides/training-timeline", time: "5 min read", icon: "📅" },
    { title: "How to finance pilot training (UK)", href: "/guides/how-to-finance-pilot-training-uk", time: "6 min read", icon: "🏦" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.13 0.09 250)" }}>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
              Pilot training guides
            </h2>
            <p style={{ color: muted }}>Everything you need to understand before you start.</p>
          </div>
          <Link href="/guides" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white whitespace-nowrap" style={{ background: "oklch(1 0 0 / 0.06)", border: `1px solid ${border}` }}>
            All guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-200 no-underline"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = borderHover; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <span className="text-2xl flex-shrink-0">{guide.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-display font-semibold text-white/90 group-hover:text-white transition-colors text-sm truncate">{guide.title}</div>
                <div className="text-xs mt-0.5" style={{ color: muted }}>{guide.time}</div>
              </div>
              <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: muted }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CtaBannerSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, oklch(0.12 0.12 255) 0%, oklch(0.16 0.14 248) 50%, oklch(0.14 0.10 240) 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, oklch(0.45 0.18 240 / 0.15) 0%, transparent 65%)" }} />

      <div className="container relative text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.7 0.04 240)" }}>
            <Zap className="w-3 h-3" style={{ color: "oklch(0.72 0.18 65)" }} />
            Free · No registration required
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Your Roadmap Is 5 Questions Away.
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.72 0.04 240)" }}>
            Answer 5 questions. Get your country-specific training route, real 2026 costs, a step-by-step action plan, and matched flight schools. Free, no registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold text-white no-underline transition-all hover:scale-[1.02]"
              style={{ background: ctaGradient, boxShadow: "0 0 40px oklch(0.72 0.18 65 / 0.4)" }}
            >
              Generate My Roadmap
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white/70 no-underline transition-all hover:text-white"
              style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.15)" }}
            >
              Full Career Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="AviatorIQ – Country-Specific Pilot Training Guidance"
        description="AviatorIQ helps aspiring pilots understand their best route, costs, readiness and matched training options based on their country. UK CAA, FAA, CASA, EASA and beyond."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AviatorIQ",
          "url": "https://aviatoriq.com",
          "description": "Country-specific pilot training guidance platform. UK, USA, Australia, Canada, Europe and beyond.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://aviatoriq.com/schools?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <PublicNav />
      <CountryDetectionBanner />
      <main className="flex-1">
        <HeroSection />
        <TrustSignalBar />
        <SocialProofBar />
        <CountryVersionsSection />
        <HowItWorksSection />
        <TrainingRoutesSection />
        <AfterTrainingSection />
        <CostSection />
        <SchoolMatchingSection />
        <GuidesSection />
        <CtaBannerSection />
        {/* Email Capture Section */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "600px", margin: "0 auto" }}>
          <EmailCapture
            source="global_homepage"
            headline="Get the free Pilot Training Guide 2026"
            subtext="Everything you need to know about becoming a pilot — costs, routes, medical requirements, and how to get your first airline job. Sent straight to your inbox."
            ctaLabel="Send me the free guide"
            variant="card"
          />
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
