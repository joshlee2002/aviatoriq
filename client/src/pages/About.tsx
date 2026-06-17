import { Link } from "wouter";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  Target,
  Shield,
  Users,
  BookOpen,
  Zap,
  CheckCircle2,
  Quote,
} from "lucide-react";

const bg = "oklch(0.10 0.08 252)";
const surface = "oklch(0.14 0.08 250)";
const border = "oklch(1 0 0 / 0.08)";
const muted = "oklch(0.55 0.04 240)";
const brandGradient =
  "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";
const ctaGradient =
  "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joshua Fagan",
  jobTitle: "Founder, AviatorIQ",
  description:
    "Joshua Fagan is the founder of AviatorIQ, the UK's most personalised pilot training guidance platform. He built AviatorIQ after spending years researching the UK pilot training market and identifying how confusing, expensive, and poorly explained the path to becoming a pilot was for most aspiring aviators.",
  url: "https://aviatoriq.com/about",
  worksFor: {
    "@type": "Organization",
    name: "AviatorIQ",
    url: "https://aviatoriq.com",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AviatorIQ",
  url: "https://aviatoriq.com",
  description:
    "AviatorIQ is the UK's most personalised pilot training guidance platform — interactive tools, deep research guides, and a free career assessment that matches aspiring pilots with the right flight school.",
  founder: {
    "@type": "Person",
    name: "Joshua Fagan",
  },
  foundingDate: "2025",
  areaServed: "GB",
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: bg }}>
      <SEO
        title="About AviatorIQ | Founded by Joshua Fagan"
        description="AviatorIQ was founded by Joshua Fagan to fix the broken, confusing world of UK pilot training guidance. Learn who we are, why we built this, and what we stand for."
        canonical="https://aviatoriq.com/about"
        schema={[founderSchema, orgSchema]}
      />
      <PublicNav />
      <main className="flex-1">
        {/* Hero */}
        <div
          className="relative overflow-hidden py-10 md:py-16"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)",
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
          <div className="container max-w-4xl relative">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "oklch(0.45 0.18 240 / 0.15)",
                border: "1px solid oklch(0.45 0.18 240 / 0.3)",
                color: "oklch(0.7 0.18 240)",
              }}
            >
              About AviatorIQ
            </div>
            <h1
              className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Built by someone who wanted
              <br className="hidden md:block" /> straight answers
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl max-w-2xl"
              style={{ color: "oklch(0.65 0.04 240)" }}
            >
              AviatorIQ exists because the information aspiring pilots actually
              need — honest, specific, and personalised — was almost impossible
              to find.
            </p>
          </div>
        </div>

        {/* Founder section */}
        <div
          className="py-8 md:py-16 px-4"
          style={{ background: "oklch(0.11 0.08 252)" }}
        >
          <div className="container max-w-4xl">
            <div
              className="rounded-2xl overflow-hidden mb-12"
              style={{ background: surface, border: `1px solid ${border}` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* Founder card */}
                <div
                  className="md:col-span-2 p-6 md:p-8 flex flex-col items-center text-center"
                  style={{
                    background: "oklch(0.12 0.09 252)",
                    borderRight: "0",
                    borderBottom: "1px solid oklch(1 0 0 / 0.07)",
                  }}
                >
                  {/* Avatar */}
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-display font-bold text-white mb-4 flex-shrink-0"
                    style={{
                      background: brandGradient,
                      boxShadow: "0 0 40px oklch(0.45 0.18 240 / 0.3)",
                    }}
                  >
                    JF
                  </div>
                  <h2 className="font-display font-bold text-xl text-white mb-1">
                    Joshua Fagan
                  </h2>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: "oklch(0.6 0.18 240)" }}
                  >
                    Founder, AviatorIQ
                  </p>
                  <div className="space-y-2 w-full">
                    {[
                      "UK Pilot Training Researcher",
                      "Aviation Career Guidance",
                      "Lead-Gen & EdTech Builder",
                    ].map(tag => (
                      <div
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium text-center"
                        style={{
                          background: "oklch(0.45 0.18 240 / 0.1)",
                          color: "oklch(0.65 0.12 240)",
                          border: "1px solid oklch(0.45 0.18 240 / 0.2)",
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Founder bio */}
                <div className="md:col-span-3 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <Quote
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "oklch(0.6 0.18 240)" }}
                    />
                    <span
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ color: muted }}
                    >
                      Founder's Note
                    </span>
                  </div>
                  <div
                    className="space-y-4 text-sm leading-relaxed"
                    style={{ color: "oklch(0.7 0.04 240)" }}
                  >
                    <p>
                      I built AviatorIQ because the information available to
                      aspiring pilots was, frankly, a mess. Scattered across
                      dozens of sites, full of outdated costs, vague advice, and
                      — in some cases — outright misleading claims designed to
                      push people towards expensive courses without helping them
                      understand whether those courses were right for them.
                    </p>
                    <p>
                      The real questions people have —{" "}
                      <em>
                        "Am I too old? Can I afford this? Could I pass the
                        medical? What if I spend £100,000 and don't get a job?"
                      </em>{" "}
                      — were almost never answered honestly. Most sites either
                      ignored them or buried them under generic content.
                    </p>
                    <p>
                      So I spent a significant amount of time researching the UK
                      pilot training market properly: reading CAA data,
                      analysing school prospectuses, studying the cadet
                      programme selection criteria, and understanding the
                      financial models that make this industry work.
                    </p>
                    <p>
                      The result is AviatorIQ — a platform built around one
                      principle:{" "}
                      <strong className="text-white">
                        every aspiring pilot deserves personalised, honest
                        guidance before they commit a penny.
                      </strong>
                    </p>
                  </div>
                  <div
                    className="mt-6 pt-6"
                    style={{ borderTop: `1px solid ${border}` }}
                  >
                    <p className="text-xs" style={{ color: muted }}>
                      All content on AviatorIQ is researched from primary
                      sources: CAA publications, EASA regulations, official
                      school prospectuses, BALPA data, and direct school
                      communications. Where we express opinions, we say so
                      clearly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What we stand for */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-2xl text-white mb-2">
                What AviatorIQ stands for
              </h2>
              <p className="text-sm mb-8" style={{ color: muted }}>
                Three principles that guide every page on this site.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: "Barrier-first guidance",
                    desc: "We don't just tell you what to do — we identify what's actually stopping you. Every assessment result leads with your biggest barrier, not a generic score.",
                    color: "oklch(0.72 0.18 65)",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Honest, not promotional",
                    desc: "We have commercial relationships with flight schools, but we never let that influence our guidance. We will tell you when a route isn't right for you.",
                    color: "oklch(0.55 0.18 145)",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Personalised, not generic",
                    desc: "The right training route depends on your age, budget, timeline, and goals. We built tools that account for all of that — not one-size-fits-all advice.",
                    color: "oklch(0.6 0.18 200)",
                  },
                ].map(item => (
                  <div
                    key={item.title}
                    className="p-5 md:p-6 rounded-2xl"
                    style={{
                      background: surface,
                      border: `1px solid ${border}`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `oklch(0.45 0.18 240 / 0.12)`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-display font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: muted }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How we research */}
            <div
              className="p-5 md:p-8 rounded-2xl mb-12"
              style={{ background: surface, border: `1px solid ${border}` }}
            >
              <h2 className="font-display font-bold text-xl text-white mb-6">
                How our content is researched
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "CAA (Civil Aviation Authority) official publications and regulatory guidance",
                  "EASA (European Union Aviation Safety Agency) licensing requirements",
                  "Official school prospectuses and fee schedules — updated annually",
                  "BALPA (British Airline Pilots' Association) salary and employment data",
                  "Direct communications with UK flight schools and cadet programme teams",
                  "UK government pilot shortage and workforce planning reports",
                  "Airline recruitment pages and cadet programme selection criteria",
                  "Student forums, Reddit aviation communities, and pilot career groups",
                ].map(source => (
                  <div key={source} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.55 0.18 145)" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.65 0.04 240)" }}
                    >
                      {source}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-6 pt-6"
                style={{ borderTop: `1px solid ${border}` }}
              >
                <p className="text-xs" style={{ color: muted }}>
                  <strong className="text-white/60">Important:</strong>{" "}
                  AviatorIQ provides guidance and information only. Nothing on
                  this site constitutes official medical, financial, or career
                  advice. Always verify medical eligibility with a CAA-approved
                  AME, financial decisions with a qualified adviser, and
                  training requirements directly with your chosen flight school.
                </p>
              </div>
            </div>

            {/* What's on the site */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-2xl text-white mb-2">
                What you'll find on AviatorIQ
              </h2>
              <p className="text-sm mb-8" style={{ color: muted }}>
                Everything built to answer the questions aspiring pilots
                actually have.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🗺️",
                    title: "Personalised Roadmap Generator",
                    desc: "5 questions → your personalised training path with costs, timeline, and next steps.",
                    href: "/roadmap",
                  },
                  {
                    icon: "🎯",
                    title: "Free Career Assessment",
                    desc: "7-step assessment that identifies your biggest barrier and matches you with flight schools.",
                    href: "/quiz",
                  },
                  {
                    icon: "🧠",
                    title: "7 Aviation Quizzes",
                    desc: "From 'What Kind of Pilot Are You?' to 'Could You Pass a Pilot Medical?' — shareable and honest.",
                    href: "/quizzes",
                  },
                  {
                    icon: "🏫",
                    title: "Flight School Directory",
                    desc: "16 UK and international schools with 2026 costs, fleet, finance options, and links.",
                    href: "/schools",
                  },
                  {
                    icon: "📚",
                    title: "24 Deep-Dive Guides",
                    desc: "From Class 1 Medical to Pilot Salary UK 2026 — research-backed, not promotional.",
                    href: "/guides",
                  },
                  {
                    icon: "💼",
                    title: "Pilot Jobs Board",
                    desc: "Current UK airline and aviation vacancies — updated regularly.",
                    href: "/jobs",
                  },
                ].map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-4 p-5 rounded-xl no-underline group transition-all"
                    style={{
                      background: surface,
                      border: `1px solid ${border}`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.border =
                        "1px solid oklch(1 0 0 / 0.18)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.border =
                        `1px solid ${border}`;
                    }}
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-display font-semibold text-white/90 group-hover:text-white transition-colors text-sm mb-1">
                        {item.title}
                      </div>
                      <div
                        className="text-xs leading-relaxed"
                        style={{ color: muted }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="p-8 rounded-2xl text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.14 0.12 255), oklch(0.18 0.14 248))",
                border: "1px solid oklch(0.45 0.18 240 / 0.2)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "oklch(0.72 0.18 65 / 0.15)",
                  color: "oklch(0.85 0.15 65)",
                }}
              >
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Ready to find your path?
              </h3>
              <p className="text-sm mb-6" style={{ color: muted }}>
                Take the free 5-minute assessment. Get a personalised readiness
                score, matched flight schools, and a clear next step — no
                registration required.
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white no-underline"
                style={{
                  background: ctaGradient,
                  boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.3)",
                }}
              >
                <Zap className="w-4 h-4" />
                Take the Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
