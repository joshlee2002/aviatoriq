import { Link } from "wouter";
import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import EmailCapture from "@/components/EmailCapture";
import {
  Plane,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Calculator,
  Building2,
  Shield,
  Clock,
  Target,
  Zap,
  GraduationCap,
  Compass,
  Lock,
  Briefcase,
  BrainCircuit,
  MonitorPlay,
  Users,
  Stethoscope,
} from "lucide-react";

// ─── Shared style tokens ──────────────────────────────────────────────────────
const surface = "oklch(0.14 0.08 250)";
const border = "oklch(1 0 0 / 0.08)";
const borderHover = "oklch(1 0 0 / 0.16)";
const muted = "oklch(0.55 0.04 240)";
const brandGradient =
  "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";
const ctaGradient =
  "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 50%, oklch(0.12 0.08 240) 100%)",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/manus-storage/hero-cockpit_b4476f04.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.22,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.10 0.10 255 / 0.88) 0%, oklch(0.10 0.10 255 / 0.55) 50%, oklch(0.10 0.10 255 / 0.25) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, oklch(0.45 0.18 240 / 0.12) 0%, transparent 65%)",
          transform: "translate(25%, -25%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, oklch(0.6 0.18 200 / 0.07) 0%, transparent 65%)",
          transform: "translate(-25%, 25%)",
        }}
      />

      <div className="container relative w-full py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{
                background: "oklch(1 0 0 / 0.07)",
                border: "1px solid oklch(1 0 0 / 0.15)",
                color: "oklch(0.75 0.04 240)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              🇺🇸 US Edition · FAA Certified · Free
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white mb-4 leading-[1.1]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Your Personalised{" "}
              <span
                style={{
                  background: ctaGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                FAA Training Roadmap
              </span>
            </h1>

            <p
              className="text-base md:text-lg mb-6 leading-relaxed"
              style={{ color: "oklch(0.72 0.04 240)" }}
            >
              Part 141 or Part 61? ATP or CPL? How much will it actually cost?
              Answer 5 questions and get a specific, data-driven roadmap — your
              exact FAA route, real 2026 costs, timeline, and matched US flight
              schools. No generic advice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/us/roadmap"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all"
                style={{
                  background: ctaGradient,
                  boxShadow: "0 0 30px oklch(0.72 0.18 65 / 0.35)",
                }}
              >
                Generate My US Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white/80 no-underline transition-all hover:text-white"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                }}
              >
                Career Readiness Assessment
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-8">
              {[
                "Free · No registration",
                "Real 2026 FAA costs",
                "Matched US flight schools",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "oklch(0.6 0.04 240)" }}
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: "oklch(0.72 0.18 65)" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Platform preview card */}
          <div className="hidden lg:block">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "oklch(1 0 0 / 0.05)",
                border: "1px solid oklch(1 0 0 / 0.12)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "oklch(0.55 0.04 240)" }}
                  >
                    Sample US Roadmap
                  </span>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{
                    background: "oklch(0.72 0.18 65 / 0.2)",
                    color: "oklch(0.85 0.15 65)",
                  }}
                >
                  Free
                </span>
              </div>

              <div
                className="rounded-xl p-4 mb-4"
                style={{
                  background: "oklch(0.45 0.18 240 / 0.1)",
                  border: "1px solid oklch(0.45 0.18 240 / 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: ctaGradient }}
                  >
                    AJ
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Alex, 26 — Dallas, TX
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "oklch(0.6 0.04 240)" }}
                    >
                      Goal: Airline Pilot (ATP)
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div
                      className="text-lg font-display font-black"
                      style={{
                        background: ctaGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      79
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-wider"
                      style={{ color: "oklch(0.55 0.04 240)" }}
                    >
                      IQ Score
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Route", value: "Part 141 ATP" },
                    { label: "Budget", value: "$80k–$120k" },
                    { label: "Timeline", value: "Within 12 months" },
                    { label: "Top barrier", value: "Finance" },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="rounded-lg px-3 py-2"
                      style={{ background: "oklch(1 0 0 / 0.05)" }}
                    >
                      <div
                        className="text-[10px] uppercase tracking-wider mb-0.5"
                        style={{ color: "oklch(0.5 0.04 240)" }}
                      >
                        {item.label}
                      </div>
                      <div className="text-xs font-semibold text-white/80">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "oklch(0.4 0.04 240)" }}
                >
                  Matched US Flight Schools
                </div>
                <div className="space-y-1.5">
                  {[
                    {
                      name: "ATP Flight School",
                      match: "97%",
                      location: "Dallas, TX",
                    },
                    {
                      name: "Embry-Riddle (Daytona)",
                      match: "93%",
                      location: "Daytona Beach, FL",
                    },
                    {
                      name: "L3Harris (Sanford, FL)",
                      match: "88%",
                      location: "Sanford, FL",
                    },
                  ].map(school => (
                    <div
                      key={school.name}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg"
                      style={{
                        background: "oklch(1 0 0 / 0.04)",
                        border: "1px solid oklch(1 0 0 / 0.07)",
                      }}
                    >
                      <div>
                        <div className="text-xs font-medium text-white/80">
                          {school.name}
                        </div>
                        <div
                          className="text-[10px]"
                          style={{ color: "oklch(0.5 0.04 240)" }}
                        >
                          {school.location}
                        </div>
                      </div>
                      <span
                        className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: "oklch(0.72 0.18 65 / 0.15)",
                          color: "oklch(0.85 0.15 65)",
                        }}
                      >
                        {school.match}
                      </span>
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

// ─── Social proof bar ─────────────────────────────────────────────────────────
function SocialProofBar() {
  return (
    <div
      style={{
        background: "oklch(0.12 0.08 250)",
        borderBottom: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { value: "32+", label: "US flight schools listed" },
            { value: "20+", label: "FAA-focused training guides" },
            { value: "8", label: "Free interactive tools" },
            { value: "Free", label: "Always, no registration" },
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-3">
              <span
                className="font-display font-bold text-lg"
                style={{
                  background: brandGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span className="text-sm" style={{ color: muted }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Answer a few honest questions",
      description:
        "Tell us your goal, your situation, and what's been stopping you. The assessment takes around 5 minutes and is completely free — no registration, no spam.",
      color: "oklch(0.45 0.18 240)",
    },
    {
      number: "02",
      icon: <Target className="w-6 h-6" />,
      title: "Discover your biggest barrier",
      description:
        "Get your AviatorIQ Score and a clear, honest answer: what is actually standing between you and an FAA certificate? Finance, time, medical, or something else?",
      color: "oklch(0.72 0.18 65)",
    },
    {
      number: "03",
      icon: <Building2 className="w-6 h-6" />,
      title: "Get a personalised US roadmap",
      description:
        "Receive a training roadmap that addresses your specific barrier, recommends the right FAA route (Part 141 vs 61, ATP vs CPL), and matches you with real US flight schools.",
      color: "oklch(0.6 0.18 200)",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="text-center mb-8 md:mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{
              background: "oklch(0.45 0.18 240 / 0.12)",
              border: "1px solid oklch(0.45 0.18 240 / 0.25)",
              color: "oklch(0.65 0.18 240)",
            }}
          >
            How it works
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Three steps from curiosity to a clear FAA plan
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: muted }}
          >
            No generic advice. No information overload. Just a clear answer to
            the question you actually need answered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(step => (
            <div
              key={step.number}
              className="relative p-5 md:p-8 rounded-2xl transition-all duration-300"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${borderHover}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${border}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${step.color.replace(")", " / 0.15)")}`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>
                <span
                  className="text-5xl font-display font-black leading-none select-none"
                  style={{ color: "oklch(1 0 0 / 0.06)" }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Trust Us ─────────────────────────────────────────────────────────────
function ExpertCredibilitySection() {
  const pillars = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No sponsored rankings",
      body: "US flight schools are listed on merit, not because they pay us. Every school in our directory is an FAA-approved Part 141 or Part 61 training provider.",
      color: "oklch(0.45 0.18 240)",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Sourced from FAA & primary data",
      body: "Every cost figure, timeline, and requirement in our guides is sourced from the FAA, ATP CTP requirements, and direct school prospectuses — not copied from other websites.",
      color: "oklch(0.6 0.18 200)",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Updated for 2026",
      body: "FAA minimums, airline hiring requirements, and training costs change. We review and update every guide at least twice a year. Every page shows its last-updated date.",
      color: "oklch(0.72 0.18 65)",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Built for one decision",
      body: "AviatorIQ exists for one purpose: to help you decide whether and how to become a pilot in the US. We don't sell courses, we don't run a flight school. No agenda.",
      color: "oklch(0.55 0.18 145)",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.13 0.09 250)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{
              background: "oklch(0.72 0.18 65 / 0.12)",
              border: "1px solid oklch(0.72 0.18 65 / 0.25)",
              color: "oklch(0.85 0.15 65)",
            }}
          >
            <Shield className="w-3 h-3" />
            Why trust AviatorIQ
          </div>
          <h2
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Honest information. No agenda.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            The internet is full of flight school websites dressed up as advice.
            AviatorIQ is independent. Here's what that means in practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map(p => (
            <div
              key={p.title}
              className="p-5 md:p-7 rounded-2xl flex gap-5 transition-all duration-300"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${borderHover}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${border}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${p.color.replace(")", " / 0.15)")}`,
                  color: p.color,
                }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-6 rounded-2xl text-center"
          style={{
            background: "oklch(0.45 0.18 240 / 0.06)",
            border: "1px solid oklch(0.45 0.18 240 / 0.15)",
          }}
        >
          <p className="text-sm" style={{ color: "oklch(0.65 0.04 240)" }}>
            <span className="font-semibold text-white">
              Are you a CFI or ATP?
            </span>{" "}
            If you spot anything inaccurate in our guides, we want to know.{" "}
            <a
              href="mailto:hello@aviatoriq.com"
              className="underline"
              style={{ color: "oklch(0.65 0.18 240)" }}
            >
              Email us
            </a>{" "}
            and we'll review and credit you.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Quiz Teaser ──────────────────────────────────────────────────────────────
function QuizTeaserSection() {
  const quizCards = [
    {
      emoji: "✈️",
      badge: "2 minutes",
      badgeColor: "oklch(0.45 0.18 240)",
      tag: "New",
      title: "What's Really Stopping You?",
      desc: "7 questions. Find your biggest barrier to the FAA certificate, your strongest asset, and your Flight Potential Score — no sign-up needed.",
      href: "/quiz/flight-deck",
      cta: "Find out now",
      variant: "secondary",
    },
    {
      emoji: "🎓",
      badge: "2–3 minutes",
      badgeColor: "oklch(0.6 0.18 200)",
      tag: null,
      title: "Which FAA Licence Is Right For You?",
      desc: "PPL, CPL, or ATP? Part 141 or 61? Answer 8 questions and get a personalised FAA licence recommendation with cost estimates.",
      href: "/quiz/licence",
      cta: "Find my licence",
      variant: "secondary",
    },
    {
      emoji: "🛫",
      badge: "5 minutes",
      badgeColor: "oklch(0.72 0.18 65)",
      tag: "Most popular",
      title: "Career Readiness Assessment",
      desc: "Your AviatorIQ Score, biggest barrier, AI training roadmap, matched US flight schools, and a free PDF blueprint.",
      href: "/quiz",
      cta: "Take the assessment",
      variant: "primary",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="text-center mb-8 md:mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{
              background: "oklch(0.72 0.18 65 / 0.12)",
              border: "1px solid oklch(0.72 0.18 65 / 0.25)",
              color: "oklch(0.85 0.15 65)",
            }}
          >
            Three assessments
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Find your answer in minutes
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: muted }}
          >
            Each assessment gives you one thing: certainty. Not information —
            certainty. Pick the question you most need answered right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {quizCards.map(card => (
            <div
              key={card.href}
              className="flex flex-col p-5 md:p-7 rounded-2xl transition-all duration-300"
              style={{
                background:
                  card.variant === "primary"
                    ? "oklch(0.45 0.18 240 / 0.08)"
                    : surface,
                border:
                  card.variant === "primary"
                    ? "1px solid oklch(0.45 0.18 240 / 0.3)"
                    : `1px solid ${border}`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div className="text-3xl mb-5">{card.emoji}</div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: card.badgeColor }}
                >
                  {card.badge}
                </span>
                {card.tag && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{
                      background:
                        card.variant === "primary"
                          ? ctaGradient
                          : "oklch(0.45 0.18 240 / 0.2)",
                      color: "white",
                    }}
                  >
                    {card.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-3">
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: muted }}
              >
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white no-underline transition-all"
                style={
                  card.variant === "primary"
                    ? {
                        background: ctaGradient,
                        boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.3)",
                      }
                    : {
                        background: "oklch(1 0 0 / 0.08)",
                        border: "1px solid oklch(1 0 0 / 0.15)",
                      }
                }
              >
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/quizzes"
            className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-all"
            style={{ color: "oklch(0.65 0.18 240)" }}
          >
            Browse all 7 quizzes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── US Tools ─────────────────────────────────────────────────────────────────
function USToolsSection() {
  const tools = [
    {
      href: "/us/calculator",
      icon: <Calculator className="w-6 h-6" />,
      color: "oklch(0.72 0.18 65)",
      title: "US Cost Calculator",
      desc: "Itemised breakdown of Part 61 vs 141 costs, checkrides, FAA written exams, and living expenses.",
      badge: "Most used",
    },
    {
      href: "/us/medical-lookup",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "oklch(0.6 0.18 200)",
      title: "FAA Medical Lookup",
      desc: "Check specific conditions (ADHD, vision, diabetes) against FAA First, Second, and Third Class medical standards.",
      badge: null,
    },
    {
      href: "/us/cadet-eligibility",
      icon: <Compass className="w-6 h-6" />,
      color: "oklch(0.45 0.18 240)",
      title: "US Cadet Eligibility",
      desc: "See if you qualify for United Aviate, American Airlines Cadet Academy, Delta Propel, or Southwest Destination 225°.",
      badge: null,
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.12 0.09 252)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{
              background: "oklch(0.72 0.18 65 / 0.12)",
              border: "1px solid oklch(0.72 0.18 65 / 0.25)",
              color: "oklch(0.85 0.15 65)",
            }}
          >
            <Zap className="w-3 h-3" />
            Decision Tools
          </div>
          <h2
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Tools built for the US market
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Stop guessing. Use real FAA data to plan your training route and
            budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className="p-6 rounded-2xl transition-all duration-300 no-underline group block"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${borderHover}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${border}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${tool.color.replace(")", " / 0.15)")}`,
                    color: tool.color,
                  }}
                >
                  {tool.icon}
                </div>
                {tool.badge && (
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{
                      background: "oklch(0.72 0.18 65 / 0.12)",
                      color: "oklch(0.72 0.18 65)",
                      border: "1px solid oklch(0.72 0.18 65 / 0.25)",
                    }}
                  >
                    {tool.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                {tool.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: muted }}
              >
                {tool.desc}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: tool.color }}
              >
                Open tool{" "}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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
      color: "oklch(0.45 0.18 240)",
      title: "Airline Pilot (ATP)",
      description:
        "The most common goal. Part 141 accelerated programmes (1,500 hrs ATP minimum) or Part 61 flexible route. Typical cost: $80k–$120k over 2–4 years.",
      cta: "Find ATP training",
      href: "/quiz",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      color: "oklch(0.6 0.18 200)",
      title: "Private Pilot Licence (PPL)",
      description:
        "Fly for pleasure or personal travel. A PPL typically takes 6–18 months and costs $8,000–$15,000 depending on location and aircraft type.",
      cta: "Explore PPL training",
      href: "/quiz",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      color: "oklch(0.72 0.18 65)",
      title: "Corporate & Charter",
      description:
        "Fly high-net-worth clients on business jets or charter aircraft. Requires CPL, instrument rating, and eventually type ratings. Strong demand in 2026.",
      cta: "Learn about corporate",
      href: "/quiz",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      color: "oklch(0.65 0.2 300)",
      title: "Flight Instructor (CFI)",
      description:
        "Teach others to fly while building your own hours toward ATP minimums. The most common path from CPL to airline hiring. CFI/CFII/MEI ratings available.",
      cta: "Explore CFI route",
      href: "/us/guides/cfi-career-usa",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Every FAA training route, covered
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Whether you want to fly for a major airline, for pleasure, or as a
            career change, AviatorIQ helps you find the right FAA route.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {routes.map(route => (
            <div
              key={route.title}
              className="p-5 md:p-7 rounded-2xl transition-all duration-300 group"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${borderHover}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${border}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${route.color.replace(")", " / 0.15)")}`,
                  color: route.color,
                }}
              >
                {route.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {route.title}
              </h3>
              <p
                className="leading-relaxed mb-5 text-sm"
                style={{ color: muted }}
              >
                {route.description}
              </p>
              <Link
                href={route.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all"
                style={{ color: route.color }}
              >
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

// ─── After Training ───────────────────────────────────────────────────────────
function AfterTrainingSection() {
  const resources = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      color: "oklch(0.72 0.18 65)",
      title: "Pilot Resume & Cover Letters",
      description:
        "How to structure an aviation resume for US airline applications, highlight your flight hours, and write a cover letter that passes HR screening.",
      href: "/us/guides/pilot-resume-usa",
    },
    {
      icon: <Users className="w-6 h-6" />,
      color: "oklch(0.45 0.18 240)",
      title: "Airline Interview Prep",
      description:
        "Common technical and HR questions for US regionals and majors, CRM scenarios, and how to prepare for the TMAAT-style competency interview.",
      href: "/us/guides/airline-interview-usa",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      color: "oklch(0.6 0.18 200)",
      title: "Aptitude Testing",
      description:
        "What to expect from ADAPT, PILAPT, and airline-specific cognitive tests. How to practice numerical reasoning, spatial awareness, and multitasking.",
      href: "/us/guides/pilot-aptitude-test-usa",
    },
    {
      icon: <MonitorPlay className="w-6 h-6" />,
      color: "oklch(0.65 0.2 300)",
      title: "Airline Cadet Programmes",
      description:
        "Delta Propel, United Aviate, American Cadet Academy, and more. How to qualify, apply, and what the pathway to a major airline actually looks like.",
      href: "/us/guides/delta-propel-program",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.13 0.09 250)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
            style={{
              background: "oklch(0.45 0.18 240 / 0.12)",
              border: "1px solid oklch(0.45 0.18 240 / 0.25)",
              color: "oklch(0.65 0.18 240)",
            }}
          >
            <Briefcase className="w-3 h-3" />
            Beyond Flight School
          </div>
          <h2
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            The final hurdle: getting hired
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Getting your ATP certificate is only half the battle. Landing a
            regional or major airline job is what gets you into the right-hand
            seat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map(res => (
            <div
              key={res.title}
              className="p-5 rounded-2xl transition-all duration-300 group"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${borderHover}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${border}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: `${res.color.replace(")", " / 0.15)")}`,
                  color: res.color,
                }}
              >
                {res.icon}
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">
                {res.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: muted }}
              >
                {res.description}
              </p>
              <Link
                href={res.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all"
                style={{ color: res.color }}
              >
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
  const costData = [
    {
      route: "Part 141 ATP Programme",
      range: "$80,000 – $120,000",
      duration: "2–3 years",
      flag: "🇺🇸",
      color: "oklch(0.45 0.18 240)",
    },
    {
      route: "Part 61 Flexible Route",
      range: "$60,000 – $100,000",
      duration: "3–5 years",
      flag: "🇺🇸",
      color: "oklch(0.6 0.18 200)",
    },
    {
      route: "PPL Only",
      range: "$8,000 – $15,000",
      duration: "6–18 months",
      flag: "🇺🇸",
      color: "oklch(0.72 0.18 65)",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl font-display font-bold text-white mb-5"
              style={{ letterSpacing: "-0.02em" }}
            >
              How much does FAA pilot training cost?
            </h2>
            <p
              className="text-lg mb-7 leading-relaxed"
              style={{ color: muted }}
            >
              Training costs vary significantly by route, school, and location.
              Use our US cost calculator for a personalised estimate, or take
              the assessment to see what suits your budget.
            </p>
            <div className="space-y-3 mb-8">
              {costData.map(item => (
                <div
                  key={item.route}
                  className="flex items-center justify-between p-4 rounded-xl transition-all"
                  style={{ background: surface, border: `1px solid ${border}` }}
                >
                  <div>
                    <div className="font-display font-semibold text-white text-sm">
                      {item.flag} {item.route}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: muted }}>
                      {item.duration}
                    </div>
                  </div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: item.color }}
                  >
                    {item.range}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/us/calculator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white no-underline"
                style={{ background: brandGradient }}
              >
                <Calculator className="w-4 h-4" />
                US Cost Calculator
              </Link>
              <Link
                href="/us/guides/how-to-fund-pilot-training-usa"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: `1px solid ${border}`,
                }}
              >
                Finance Guide
              </Link>
            </div>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{
              background: "oklch(0.16 0.10 248)",
              border: "1px solid oklch(1 0 0 / 0.12)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: ctaGradient }}
              >
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">
                  Finance options available
                </div>
                <div className="text-sm" style={{ color: muted }}>
                  For qualifying US candidates
                </div>
              </div>
            </div>
            <p
              className="mb-6 leading-relaxed text-sm"
              style={{ color: muted }}
            >
              Many US flight schools offer finance plans, and there are
              government-backed options for veterans and qualifying students.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "GI Bill® flight training benefits",
                "FAA-approved school payment plans",
                "Airline cadet sponsorships (Delta, United)",
                "Federal student loans (Part 141 schools)",
              ].map(item => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "oklch(0.72 0.04 240)" }}
                >
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "oklch(0.72 0.18 65)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/us/guides/how-to-fund-pilot-training-usa"
              className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all"
              style={{ color: "oklch(0.72 0.18 65)" }}
            >
              Read the US finance guide
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
    <section className="section" style={{ background: "oklch(0.12 0.09 252)" }}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Matched to the right US flight school
          </h2>
          <p className="text-lg" style={{ color: muted }}>
            After your assessment, AviatorIQ matches you with US flight schools
            based on your state, training goal, budget and FAA route — not
            random results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: <Users className="w-6 h-6" />,
              color: "oklch(0.45 0.18 240)",
              title: "Qualified matches only",
              desc: "Schools are filtered by your FAA training goal, budget range, and location preferences.",
            },
            {
              icon: <Lock className="w-6 h-6" />,
              color: "oklch(0.6 0.18 200)",
              title: "Your data is protected",
              desc: "We only share your details with schools you explicitly request introductions from.",
            },
            {
              icon: <Clock className="w-6 h-6" />,
              color: "oklch(0.72 0.18 65)",
              title: "No cold calls",
              desc: "You control who contacts you. No unsolicited calls from schools you haven't chosen.",
            },
          ].map(item => (
            <div
              key={item.title}
              className="p-7 rounded-2xl text-center"
              style={{ background: surface, border: `1px solid ${border}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `${item.color.replace(")", " / 0.15)")}`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-wrap gap-4 justify-center">
          <Link
            href="/us/schools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: `1px solid ${border}`,
            }}
          >
            Browse US Flight Schools
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline"
            style={{
              background: ctaGradient,
              boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.25)",
            }}
          >
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
  const guides = [
    {
      title: "How to become a pilot in the US",
      href: "/us/guides/how-to-become-a-pilot",
      time: "8 min read",
      icon: "🛫",
    },
    {
      title: "Part 141 vs Part 61 training",
      href: "/us/guides/part-61-vs-141",
      time: "6 min read",
      icon: "⚖️",
    },
    {
      title: "FAA medical requirements",
      href: "/us/guides/faa-medical-requirements",
      time: "5 min read",
      icon: "🩺",
    },
    {
      title: "US airline pilot salary guide",
      href: "/us/guides/airline-pilot-salary-usa",
      time: "7 min read",
      icon: "💰",
    },
    {
      title: "GI Bill® flight training",
      href: "/us/guides/gi-bill-flight-training",
      time: "5 min read",
      icon: "🎖️",
    },
    {
      title: "How to fund pilot training in the US",
      href: "/us/guides/how-to-fund-pilot-training-usa",
      time: "6 min read",
      icon: "🏦",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2
              className="text-3xl font-display font-bold text-white mb-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              FAA pilot training guides
            </h2>
            <p style={{ color: muted }}>
              Everything you need to understand before you start.
            </p>
          </div>
          <Link
            href="/us/guides"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white whitespace-nowrap"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: `1px solid ${border}`,
            }}
          >
            All US guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map(guide => (
            <Link
              key={guide.href}
              href={guide.href}
              className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 no-underline group"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${borderHover}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.border =
                  `1px solid ${border}`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <span className="text-2xl flex-shrink-0">{guide.icon}</span>
              <div>
                <div className="font-semibold text-white text-sm mb-1 group-hover:text-white/90">
                  {guide.title}
                </div>
                <div
                  className="text-xs flex items-center gap-1"
                  style={{ color: muted }}
                >
                  <Clock className="w-3 h-3" />
                  {guide.time}
                </div>
              </div>
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
      style={{
        background:
          "linear-gradient(135deg, oklch(0.12 0.12 255) 0%, oklch(0.16 0.14 248) 50%, oklch(0.14 0.10 240) 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, oklch(0.45 0.18 240 / 0.15) 0%, transparent 65%)",
        }}
      />

      <div className="container relative text-center">
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{
              background: "oklch(1 0 0 / 0.08)",
              border: "1px solid oklch(1 0 0 / 0.15)",
              color: "oklch(0.7 0.04 240)",
            }}
          >
            <Zap className="w-3 h-3" style={{ color: "oklch(0.72 0.18 65)" }} />
            Free · No registration required
          </div>
          <h2
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Your FAA Roadmap Is 5 Questions Away.
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.72 0.04 240)" }}>
            Answer 5 questions. Get your specific FAA training route, real 2026
            costs, a step-by-step action plan, and matched US flight schools.
            Free, no registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/us/roadmap"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold text-white no-underline transition-all"
              style={{
                background: ctaGradient,
                boxShadow: "0 0 40px oklch(0.72 0.18 65 / 0.4)",
              }}
            >
              Generate My US Roadmap
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white/70 no-underline transition-all hover:text-white"
              style={{
                background: "oklch(1 0 0 / 0.08)",
                border: "1px solid oklch(1 0 0 / 0.15)",
              }}
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
export default function HomeUS() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="AviatorIQ US — FAA Pilot Training Guidance, Costs & Flight Schools 2026"
        description="The most personalised pilot training guidance platform for the US. Part 141 vs 61, FAA medical requirements, ATP costs, airline cadet programmes, and the best US flight schools."
        canonical="/us"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "AviatorIQ US",
          url: "https://aviatoriq.com/us",
          description:
            "The decision platform for people thinking about becoming a pilot in the United States.",
        }}
      />
      <PublicNav />
      <main className="flex-1">
        <HeroSection />
        <SocialProofBar />
        <HowItWorksSection />
        <ExpertCredibilitySection />
        <QuizTeaserSection />
        <USToolsSection />
        <TrainingRoutesSection />
        <AfterTrainingSection />
        <CostSection />
        <SchoolMatchingSection />
        <GuidesSection />
        <CtaBannerSection />
        <section
          style={{
            padding: "4rem 1.5rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <EmailCapture
            source="us_homepage"
            headline="Get the free US Pilot Training Guide 2026"
            subtext="Everything you need to know about becoming a pilot in the US — FAA costs, routes, medical, and airline cadet programmes. Sent straight to your inbox."
            ctaLabel="Send me the free guide"
            variant="card"
          />
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
