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

const UAE_GUIDES = [
  {
    title: "Pilot Training Costs in the UAE 2026: The Full Breakdown",
    href: "/uae/guides/uae-pilot-training-costs",
    desc: "GCAA-approved training costs in AED. Emirates, Etihad, and independent academy routes.",
    tag: "Essential",
  },
  {
    title: "Emirates Cadet Pilot Programme 2026: Complete Guide",
    href: "/uae/guides/emirates-cadet-pilot-program",
    desc: "How to join the Emirates Cadet Programme — eligibility, selection, costs, and career path.",
    tag: "Popular",
  },
  {
    title: "Etihad Cadet Pilot Programme 2026: Complete Guide",
    href: "/uae/guides/etihad-cadet-pilot-program",
    desc: "Everything you need to know about Etihad's cadet pathway — from application to wings.",
    tag: "Cadets",
  },
  {
    title: "Air Arabia Cadet Programme 2026",
    href: "/uae/guides/air-arabia-cadet-program",
    desc: "Low-cost carrier cadet pathway in the UAE — eligibility, training, and career prospects.",
    tag: "Cadets",
  },
  {
    title: "UAE Pilot Salary 2026: Emirates, Etihad & Air Arabia",
    href: "/uae/guides/uae-pilot-salary-2026",
    desc: "Full salary breakdown for pilots in the UAE. Tax-free packages, allowances, and benefits.",
    tag: "Salary",
  },
  {
    title: "GCAA Class 1 Medical in the UAE 2026",
    href: "/uae/guides/uae-medical-class-1",
    desc: "GCAA medical requirements, approved AMEs, and how to prepare for your UAE Class 1.",
    tag: "Medical",
  },
];

const UAE_TOOLS = [
  {
    icon: "🗺️",
    label: "Career Readiness Assessment",
    href: "/quiz",
    desc: "Get your personalised UAE pilot training roadmap",
  },
  {
    icon: "🧮",
    label: "Cost Calculator",
    href: "/calculator",
    desc: "Estimate your total training cost in AED",
  },
  {
    icon: "🩺",
    label: "Medical Check",
    href: "/tools/class-1-medical-check",
    desc: "Assess your GCAA Class 1 medical eligibility",
  },
  {
    icon: "✈️",
    label: "Cadet Eligibility Checker",
    href: "/cadet-eligibility",
    desc: "Emirates, Etihad, and Air Arabia cadet programmes",
  },
];

const UAE_STATS = [
  {
    value: "AED 350k–500k",
    label: "Integrated ATPL cost",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    value: "18–24 months",
    label: "Integrated ATPL duration",
    icon: <Clock className="w-5 h-5" />,
  },
  { value: "GCAA", label: "Regulator", icon: <Shield className="w-5 h-5" /> },
  {
    value: "Tax-free",
    label: "Pilot salary structure",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

export default function HomeUAE() {
  return (
    <>
      <SEO
        title="Become a Pilot in the UAE 2026 | GCAA Training Guide | AviatorIQ"
        description="The UAE's most complete pilot training resource. GCAA-approved routes, real 2026 costs in AED, Emirates and Etihad cadet programmes, and Class 1 medical guidance."
        canonical="https://aviatoriq.com/uae"
        ogImage="https://aviatoriq.com/og-uae.jpg"
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
              🇦🇪 UAE Pilot Training Hub
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
                in the UAE
              </span>
            </h1>
            <p
              className="text-lg md:text-xl mb-8 max-w-2xl"
              style={{ color: "oklch(0.70 0.04 240)" }}
            >
              The UAE offers some of the world's most prestigious pilot careers
              — Emirates, Etihad, and Air Arabia all operate cadet programmes.
              Get accurate GCAA training routes, real 2026 costs in AED, and
              your personalised roadmap.
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
                Get My Free UAE Pilot Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/uae/guides/uae-pilot-training-costs"
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
            {UAE_STATS.map(stat => (
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

      {/* Why UAE */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Why Train or Fly in the UAE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: "✈️",
                title: "World-class airlines",
                desc: "Emirates and Etihad are consistently ranked among the world's best airlines, offering exceptional career progression and benefits.",
              },
              {
                icon: "💰",
                title: "Tax-free salaries",
                desc: "UAE pilot salaries are entirely tax-free, making take-home pay significantly higher than equivalent roles in Europe or Australia.",
              },
              {
                icon: "🌍",
                title: "Global connectivity",
                desc: "Dubai and Abu Dhabi are among the world's busiest aviation hubs, with routes to every continent and rapid fleet expansion.",
              },
              {
                icon: "🏫",
                title: "GCAA-approved academies",
                desc: "The UAE has world-class flight training academies including Emirates Flight Training Academy and Etihad Aviation Training.",
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
            UAE Pilot Training Tools
          </h2>
          <p
            className="text-center mb-10 text-sm"
            style={{ color: "oklch(0.55 0.04 240)" }}
          >
            Free tools built for GCAA candidates
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UAE_TOOLS.map(tool => (
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
                UAE Pilot Training Guides
              </h2>
              <p className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>
                Researched, accurate, and specific to GCAA regulations
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
            {UAE_GUIDES.map(g => (
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
            UAE Flight Academies
          </h2>
          <p
            className="text-base max-w-xl mx-auto mb-8"
            style={{ color: "oklch(0.6 0.04 240)" }}
          >
            Browse GCAA-approved flight academies across the UAE. Compare
            Emirates FTA, Etihad Aviation Training, and independent schools.
          </p>
          <Link
            href="/schools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline"
            style={{ background: ctaGradient }}
          >
            <School className="w-4 h-4" />
            Browse UAE Schools
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
          <div className="text-5xl mb-6">🇦🇪</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start your UAE pilot journey?
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.65 0.04 240)" }}>
            Get your personalised GCAA training roadmap in under 5 minutes.
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
