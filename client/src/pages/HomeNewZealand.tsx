import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Plane,
  BookOpen,
  School,
  Calculator,
  Stethoscope,
  Target,
  Clock,
  DollarSign,
  Users,
  Star,
  TrendingUp,
  Shield,
} from "lucide-react";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";

const ctaGradient =
  "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";
const brandGradient =
  "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";

const NZ_GUIDES = [
  {
    title: "Pilot Training Costs in New Zealand 2026: Full Breakdown",
    href: "/new-zealand/guides/new-zealand-pilot-training-costs",
    desc: "CAA NZ CPL and ATPL training costs in NZD — real 2026 figures from New Zealand flight schools.",
    tag: "Essential",
  },
  {
    title: "CAA NZ CPL Requirements 2026: Complete Guide",
    href: "/new-zealand/guides/nz-cpl-requirements",
    desc: "Everything you need to know about getting your New Zealand CPL — hours, exams, and costs.",
    tag: "Licence",
  },
  {
    title: "CAA NZ Class 1 Medical Certificate 2026",
    href: "/new-zealand/guides/nz-medical-class-1",
    desc: "CAA NZ medical requirements, approved AMEs, and how to prepare for your Class 1 in New Zealand.",
    tag: "Medical",
  },
  {
    title: "Air New Zealand Cadet Pilot Programme 2026",
    href: "/new-zealand/guides/air-new-zealand-cadet-pilot-training",
    desc: "How to join Air New Zealand's cadet programme — eligibility, selection process, and career pathway.",
    tag: "Cadets",
  },
  {
    title: "New Zealand Pilot Salary 2026",
    href: "/new-zealand/guides/new-zealand-pilot-salary-2026",
    desc: "How much do pilots earn in New Zealand? First Officer to Captain salary breakdown in NZD.",
    tag: "Salary",
  },
  {
    title: "New Zealand Pilot Shortage 2026",
    href: "/new-zealand/guides/new-zealand-pilot-shortage",
    desc: "The growing pilot shortage in New Zealand — opportunities, timelines, and how to position yourself.",
    tag: "Career",
  },
];

const NZ_TOOLS = [
  {
    icon: "🗺️",
    label: "Career Readiness Assessment",
    href: "/quiz",
    desc: "Get your personalised CAA NZ training roadmap",
  },
  {
    icon: "🧮",
    label: "Cost Calculator",
    href: "/calculator",
    desc: "Estimate your total CPL/ATPL training cost in NZD",
  },
  {
    icon: "🩺",
    label: "Medical Check",
    href: "/tools/class-1-medical-check",
    desc: "Assess your CAA NZ Class 1 medical eligibility",
  },
  {
    icon: "✈️",
    label: "Cadet Eligibility Checker",
    href: "/cadet-eligibility",
    desc: "Air New Zealand and regional cadet programmes",
  },
];

const NZ_STATS = [
  {
    value: "NZ$100k–NZ$160k",
    label: "Integrated ATPL cost",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    value: "18–24 months",
    label: "Integrated ATPL duration",
    icon: <Clock className="w-5 h-5" />,
  },
  { value: "CAA NZ", label: "Regulator", icon: <Shield className="w-5 h-5" /> },
  {
    value: "~1,200",
    label: "Commercial pilots in NZ",
    icon: <Users className="w-5 h-5" />,
  },
];

export default function HomeNewZealand() {
  return (
    <>
      <SEO
        title="Become a Pilot in New Zealand 2026 | CAA NZ Training Guide | AviatorIQ"
        description="New Zealand's most complete pilot training resource. CAA NZ CPL/ATPL routes, real 2026 costs in NZD, Air New Zealand cadet programme, and Class 1 medical guidance."
        canonical="https://aviatoriq.com/new-zealand"
        ogImage="https://aviatoriq.com/og-new-zealand.jpg"
      />
      <PublicNav />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 50%, oklch(0.12 0.08 240) 100%)",
          minHeight: "auto",
        }}
      >
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "oklch(0.65 0.22 45 / 0.15)",
                color: "oklch(0.75 0.22 45)",
                border: "1px solid oklch(0.65 0.22 45 / 0.3)",
              }}
            >
              🇳🇿 New Zealand Pilot Training Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Become a Pilot
              <br />
              <span
                style={{
                  background: ctaGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                in New Zealand
              </span>
            </h1>
            <p
              className="text-lg md:text-xl mb-8 max-w-2xl"
              style={{ color: "oklch(0.70 0.04 240)" }}
            >
              New Zealand offers world-class pilot training with excellent
              flying weather and a growing aviation industry. Get accurate CAA
              NZ training routes, real 2026 costs in NZD, and your personalised
              roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all"
                style={{
                  background: ctaGradient,
                  boxShadow: "0 0 30px oklch(0.72 0.18 65 / 0.35)",
                }}
              >
                Get My Free NZ Pilot Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/new-zealand/guides/new-zealand-pilot-training-costs"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white/80 no-underline transition-all hover:text-white"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                }}
              >
                View Training Costs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-10 border-b"
        style={{
          background: "oklch(0.13 0.07 245)",
          borderColor: "oklch(1 0 0 / 0.08)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {NZ_STATS.map(stat => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: "oklch(0.65 0.22 45 / 0.1)",
                    color: "oklch(0.75 0.22 45)",
                  }}
                >
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl font-black text-white">
                  {stat.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.04 240)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NZ */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Why Train in New Zealand?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "☀️",
                title: "Excellent flying weather",
                desc: "New Zealand's diverse climate offers excellent VFR flying conditions, particularly in the South Island, with minimal weather-related training delays.",
              },
              {
                icon: "🌏",
                title: "ICAO-compliant licences",
                desc: "CAA NZ licences are internationally recognised and can be converted to CASA (Australia), FAA (USA), or EASA licences with minimal additional requirements.",
              },
              {
                icon: "✈️",
                title: "Air New Zealand cadet programme",
                desc: "Air New Zealand's cadet programme is one of the most prestigious in the Southern Hemisphere, offering a direct pathway to a major international airline.",
              },
              {
                icon: "🏔️",
                title: "Unique mountain flying experience",
                desc: "New Zealand's terrain offers unique mountain flying experience that is highly valued by international airlines and operators worldwide.",
              },
            ].map(item => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-2xl"
                style={{
                  background: "oklch(1 0 0 / 0.04)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
              >
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.04 240)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
            New Zealand Pilot Training Tools
          </h2>
          <p
            className="text-center mb-10 text-sm"
            style={{ color: "oklch(0.55 0.04 240)" }}
          >
            Free tools built for CAA NZ candidates
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NZ_TOOLS.map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col p-5 rounded-2xl no-underline transition-all hover:scale-[1.02]"
                style={{
                  background: "oklch(1 0 0 / 0.04)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                }}
              >
                <span className="text-3xl mb-4">{tool.icon}</span>
                <h3 className="text-sm font-bold text-white mb-1">
                  {tool.label}
                </h3>
                <p
                  className="text-xs flex-1"
                  style={{ color: "oklch(0.55 0.04 240)" }}
                >
                  {tool.desc}
                </p>
                <div
                  className="flex items-center gap-1 mt-4 text-xs font-semibold"
                  style={{ color: "oklch(0.65 0.22 45)" }}
                >
                  Open tool{" "}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                New Zealand Pilot Training Guides
              </h2>
              <p className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>
                Researched, accurate, and specific to CAA NZ regulations
              </p>
            </div>
            <Link
              href="/guides"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold no-underline"
              style={{ color: "oklch(0.65 0.22 45)" }}
            >
              All guides <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {NZ_GUIDES.map(g => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col p-5 rounded-2xl no-underline transition-all hover:scale-[1.01]"
                style={{
                  background: "oklch(1 0 0 / 0.04)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "oklch(0.65 0.18 240 / 0.15)",
                      color: "oklch(0.65 0.18 240)",
                    }}
                  >
                    {g.tag}
                  </span>
                  <BookOpen
                    className="w-3.5 h-3.5"
                    style={{ color: "oklch(0.45 0.04 240)" }}
                  />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {g.title}
                </h3>
                <p
                  className="text-xs flex-1"
                  style={{ color: "oklch(0.55 0.04 240)" }}
                >
                  {g.desc}
                </p>
                <div
                  className="flex items-center gap-1 mt-4 text-xs font-semibold"
                  style={{ color: "oklch(0.65 0.22 45)" }}
                >
                  Read guide{" "}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Schools */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            New Zealand Flight Schools
          </h2>
          <p
            className="text-base max-w-xl mx-auto mb-8"
            style={{ color: "oklch(0.6 0.04 240)" }}
          >
            Browse CAA NZ-approved flight schools across New Zealand. Compare
            costs, locations, and training routes.
          </p>
          <Link
            href="/schools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline"
            style={{ background: ctaGradient }}
          >
            <School className="w-4 h-4" />
            Browse New Zealand Schools
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)",
        }}
      >
        <div className="container text-center max-w-2xl">
          <div className="text-5xl mb-6">🇳🇿</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start your New Zealand pilot journey?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.65 0.04 240)" }}>
            Get your personalised CAA NZ training roadmap in under 5 minutes.
            Free, no registration required.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline"
            style={{
              background: ctaGradient,
              boxShadow: "0 0 40px oklch(0.72 0.18 65 / 0.3)",
            }}
          >
            Generate My Free Pilot Roadmap
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <PublicFooter />
    </>
  );
}
