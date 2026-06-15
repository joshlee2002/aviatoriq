import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Plane, BookOpen, School, Calculator, Stethoscope, Target, Clock, DollarSign, Users, Star, TrendingUp, Shield } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";

const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";
const brandGradient = "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";

const SA_GUIDES = [
  { title: "Pilot Training Costs in South Africa 2026: Full Breakdown", href: "/south-africa/guides/pilot-training-costs", desc: "SACAA CPL and ATPL training costs in ZAR — real 2026 figures from South African flight schools.", tag: "Essential" },
  { title: "SACAA CPL Requirements 2026: Complete Guide", href: "/south-africa/guides/sacpl-requirements", desc: "Everything you need to know about getting your South African CPL — hours, exams, and costs.", tag: "Licence" },
  { title: "SACAA Class 1 Medical Certificate 2026", href: "/south-africa/guides/sacaa-class-1-medical-certificate", desc: "SACAA medical requirements, approved AMEs, and how to prepare for your Class 1 in South Africa.", tag: "Medical" },
  { title: "South African Airline Cadet Programmes 2026", href: "/south-africa/guides/south-africa-cadet-programs", desc: "SAA, FlySafair, Airlink, and regional airline cadet pathways — eligibility and how to apply.", tag: "Cadets" },
  { title: "South African Pilot Salary 2026", href: "/south-africa/guides/pilot-salary-2026", desc: "How much do pilots earn in South Africa? First Officer to Captain salary breakdown in ZAR.", tag: "Salary" },
  { title: "South Africa Pilot Shortage 2026", href: "/south-africa/guides/south-africa-pilot-shortage", desc: "The growing pilot shortage in South Africa — opportunities, timelines, and how to position yourself.", tag: "Career" },
];

const SA_TOOLS = [
  { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised SACAA training roadmap" },
  { icon: "🧮", label: "Cost Calculator", href: "/calculator", desc: "Estimate your total CPL/ATPL training cost in ZAR" },
  { icon: "🩺", label: "Medical Check", href: "/tools/class-1-medical-check", desc: "Assess your SACAA Class 1 medical eligibility" },
  { icon: "✈️", label: "Cadet Eligibility Checker", href: "/cadet-eligibility", desc: "SAA, FlySafair, Airlink cadet programmes" },
];

const SA_STATS = [
  { value: "R350k–R550k", label: "Integrated ATPL cost", icon: <DollarSign className="w-5 h-5" /> },
  { value: "18–24 months", label: "Integrated ATPL duration", icon: <Clock className="w-5 h-5" /> },
  { value: "SACAA", label: "Regulator", icon: <Shield className="w-5 h-5" /> },
  { value: "~2,800", label: "Commercial pilots in SA", icon: <Users className="w-5 h-5" /> },
];

export default function HomeSouthAfrica() {
  return (
    <>
      <SEO
        title="Become a Pilot in South Africa 2026 | SACAA Training Guide | AviatorIQ"
        description="South Africa's most complete pilot training resource. SACAA CPL/ATPL routes, real 2026 costs in ZAR, Class 1 medical guidance, and matched South African flight schools."
        canonical="https://aviatoriq.com/south-africa"
        ogImage="https://aviatoriq.com/og-south-africa.jpg"
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
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "oklch(0.65 0.22 45 / 0.15)", color: "oklch(0.75 0.22 45)", border: "1px solid oklch(0.65 0.22 45 / 0.3)" }}>
              🇿🇦 South Africa Pilot Training Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Become a Pilot<br />
              <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                in South Africa
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl" style={{ color: "oklch(0.70 0.04 240)" }}>
              South Africa has a growing aviation industry with a significant pilot shortage. Get accurate SACAA training routes, real 2026 costs in ZAR, and your personalised roadmap to the flight deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quiz" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all" style={{ background: ctaGradient, boxShadow: "0 0 30px oklch(0.72 0.18 65 / 0.35)" }}>
                Get My Free SA Pilot Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/south-africa/guides/pilot-training-costs" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white/80 no-underline transition-all hover:text-white" style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.15)" }}>
                View Training Costs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-b" style={{ background: "oklch(0.13 0.07 245)", borderColor: "oklch(1 0 0 / 0.08)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SA_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <div className="p-2 rounded-lg" style={{ background: "oklch(0.65 0.22 45 / 0.1)", color: "oklch(0.75 0.22 45)" }}>{stat.icon}</div>
                <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs" style={{ color: "oklch(0.55 0.04 240)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SA */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Why Train in South Africa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "☀️", title: "Ideal flying weather", desc: "South Africa's climate offers near-year-round VFR flying conditions, meaning faster hour-building and less weather-related training delays." },
              { icon: "💰", title: "Affordable training costs", desc: "Training costs in ZAR are significantly lower than equivalent programmes in Europe or Australia, making SA an attractive option for international students." },
              { icon: "📈", title: "Growing pilot shortage", desc: "South Africa faces a significant pilot shortage, with airlines actively recruiting. Qualified pilots have strong career prospects across Africa and beyond." },
              { icon: "🌍", title: "Gateway to African aviation", desc: "South African licences and experience are highly valued across the African continent, opening doors to regional and international airline careers." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.08)" }}>
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs" style={{ color: "oklch(0.55 0.04 240)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">South African Pilot Training Tools</h2>
          <p className="text-center mb-10 text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Free tools built for SACAA candidates</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SA_TOOLS.map((tool) => (
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">South African Pilot Training Guides</h2>
              <p className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>Researched, accurate, and specific to SACAA regulations</p>
            </div>
            <Link href="/guides" className="hidden sm:flex items-center gap-1 text-sm font-semibold no-underline" style={{ color: "oklch(0.65 0.22 45)" }}>
              All guides <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SA_GUIDES.map((g) => (
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">South African Flight Schools</h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "oklch(0.6 0.04 240)" }}>
            Browse SACAA-approved flight schools across South Africa. Compare costs, locations, and training routes.
          </p>
          <Link href="/schools" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient }}>
            <School className="w-4 h-4" />
            Browse South African Schools
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)" }}>
        <div className="container text-center max-w-2xl">
          <div className="text-5xl mb-6">🇿🇦</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your South African pilot journey?</h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.65 0.04 240)" }}>
            Get your personalised SACAA training roadmap in under 5 minutes. Free, no registration required.
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
