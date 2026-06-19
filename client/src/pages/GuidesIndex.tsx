import { Link } from "wouter";
import { ArrowRight, Clock, ChevronRight, BookOpen, Zap, DollarSign, Stethoscope, Scale, Plus } from "lucide-react";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { useCountry } from "@/contexts/CountryContext";
import { GUIDES_BY_COUNTRY, type SupportedCountry } from "@/data/guidesByCountry";

// ─── Style tokens ─────────────────────────────────────────────────────────────
const surface    = "oklch(0.14 0.08 250)";
const borderCol  = "oklch(1 0 0 / 0.08)";
const borderHov  = "oklch(1 0 0 / 0.18)";
const muted      = "oklch(0.55 0.04 240)";
const ctaGrad    = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

// ─── Region switcher data ─────────────────────────────────────────────────────
const REGIONS: { code: SupportedCountry; flag: string; label: string }[] = [
  { code: "uk",           flag: "🇬🇧", label: "United Kingdom" },
  { code: "us",           flag: "🇺🇸", label: "United States"  },
  { code: "australia",    flag: "🇦🇺", label: "Australia"      },
  { code: "canada",       flag: "🇨🇦", label: "Canada"         },
  { code: "europe",       flag: "🇪🇺", label: "Europe"         },
  { code: "new-zealand",  flag: "🇳🇿", label: "New Zealand"    },
  { code: "south-africa", flag: "🇿🇦", label: "South Africa"   },
  { code: "uae",          flag: "🇦🇪", label: "UAE"            },
];

// ─── Category icon ────────────────────────────────────────────────────────────
function CategoryIcon({ category }: { category: string }) {
  const c = category.toLowerCase();
  if (c.includes("start"))                    return <BookOpen className="w-4 h-4" />;
  if (c.includes("cost") || c.includes("financ")) return <DollarSign className="w-4 h-4" />;
  if (c.includes("medical"))                  return <Stethoscope className="w-4 h-4" />;
  if (c.includes("route") || c.includes("train")) return <Scale className="w-4 h-4" />;
  if (c.includes("career") || c.includes("salar")) return <Zap className="w-4 h-4" />;
  return <ArrowRight className="w-4 h-4" />;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function GuidesIndex() {
  const { country, setCountry } = useCountry();

  // Resolve which country to show — default to UK if undetected or unsupported
  const activeCode: SupportedCountry =
    country && country in GUIDES_BY_COUNTRY
      ? (country as SupportedCountry)
      : "uk";

  const config = GUIDES_BY_COUNTRY[activeCode];
  const categories = Array.from(new Set(config.guides.map((g) => g.category)));

  function switchRegion(code: SupportedCountry) {
    setCountry(code);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div style={{ background: "oklch(0.10 0.08 252)", minHeight: "100vh" }}>
      <SEO
        title={`${config.label} Pilot Training Guides 2026 | AviatorPath`}
        description={`Free ${config.label} pilot training guides — ${config.regulator} licences, costs, medical requirements, cadet programmes, and career advice. Updated 2026.`}
      />
      <PublicNav />

      <main>
        {/* ── Region switcher strip ─────────────────────────────────────────── */}
        <div style={{ background: "oklch(0.12 0.08 250)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
          <div className="container py-3">
            <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              <span className="text-xs font-semibold uppercase tracking-widest flex-shrink-0 mr-1" style={{ color: muted }}>
                Region:
              </span>
              {REGIONS.map((r) => {
                const isActive = r.code === activeCode;
                return (
                  <button
                    key={r.code}
                    type="button"
                    onClick={() => switchRegion(r.code)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold flex-shrink-0 transition-all"
                    style={
                      isActive
                        ? { background: "oklch(0.45 0.18 240 / 0.2)", border: "1px solid oklch(0.45 0.18 240 / 0.5)", color: "white" }
                        : { background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.10)", color: "oklch(0.65 0.04 240)" }
                    }
                  >
                    <span>{r.flag}</span>
                    <span className="hidden sm:inline">{r.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div style={{ background: "linear-gradient(160deg, oklch(0.12 0.10 255) 0%, oklch(0.14 0.08 248) 100%)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
          <div className="container py-10 md:py-14">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs mb-4" style={{ color: muted }}>
                <Link href="/" className="no-underline hover:text-white transition-colors" style={{ color: muted }}>Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span style={{ color: "oklch(0.75 0.04 240)" }}>Guides</span>
              </div>

              {/* Country badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}
              >
                <span>{config.flag}</span>
                <span>{config.label} · {config.regulator}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                {config.label} Pilot Training Guides
              </h1>
              <p className="text-base md:text-lg mb-6" style={{ color: "oklch(0.68 0.04 240)" }}>
                Free, sourced guides covering {config.regulator} licences, training costs, medical requirements,
                cadet programmes, and career advice — all specific to {config.label}.
              </p>

              {/* Quick-action CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={config.roadmapHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white no-underline transition-all"
                  style={{ background: ctaGrad, boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.3)" }}
                >
                  Get My Free {config.label} Roadmap
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={config.cadetToolHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold no-underline transition-all"
                  style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.14)", color: "oklch(0.75 0.04 240)" }}
                >
                  Cadet Eligibility Checker
                </Link>
                <Link
                  href={config.medicalToolHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold no-underline transition-all"
                  style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.14)", color: "oklch(0.75 0.04 240)" }}
                >
                  Medical Check
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Guide cards ──────────────────────────────────────────────────── */}
        <div className="container py-10 md:py-14">

          {/* "More guides coming" notice for thin regions */}
          {config.isThin && (
            <div
              className="flex items-start gap-3 p-4 rounded-xl mb-8"
              style={{ background: "oklch(0.45 0.18 240 / 0.08)", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}
            >
              <Plus className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.65 0.18 240)" }} />
              <p className="text-sm" style={{ color: "oklch(0.65 0.04 240)" }}>
                <strong className="text-white/70">More {config.label} guides coming.</strong>{" "}
                We are actively expanding our {config.label} content. Check back soon, or take the free
                assessment to get a personalised roadmap now.
              </p>
            </div>
          )}

          <div className="space-y-10">
            {categories.map((cat) => {
              const catGuides = config.guides.filter((g) => g.category === cat);
              return (
                <div key={cat}>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.45 0.18 240 / 0.15)", color: "oklch(0.65 0.18 240)" }}
                    >
                      <CategoryIcon category={cat} />
                    </div>
                    <h2 className="text-lg font-display font-bold text-white">{cat}</h2>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: "oklch(1 0 0 / 0.06)", color: muted }}
                    >
                      {catGuides.length}
                    </span>
                  </div>

                  {/* Guide cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catGuides.map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group flex flex-col p-4 rounded-xl no-underline transition-all duration-200"
                        style={{ background: surface, border: `1px solid ${borderCol}` }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = borderHov;
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = borderCol;
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-xl flex-shrink-0 mt-0.5">{guide.emoji}</span>
                          <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-white/90">
                            {guide.title}
                          </h3>
                        </div>
                        <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: muted }}>
                          {guide.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-1.5 text-xs" style={{ color: "oklch(0.45 0.04 240)" }}>
                            <Clock className="w-3 h-3" />
                            {guide.time}
                          </div>
                          <ChevronRight
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            style={{ color: "oklch(0.4 0.04 240)" }}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Bottom CTA ───────────────────────────────────────────────── */}
          <div
            className="p-6 md:p-10 rounded-2xl text-center mt-12"
            style={{
              background: "linear-gradient(135deg, oklch(0.14 0.12 255), oklch(0.18 0.14 248))",
              border: "1px solid oklch(0.45 0.18 240 / 0.2)",
            }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ background: "oklch(0.45 0.18 240 / 0.15)", border: "1px solid oklch(0.45 0.18 240 / 0.3)", color: "oklch(0.65 0.18 240)" }}
            >
              {config.flag} {config.label} · Free
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-2">
              Ready to take the next step?
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: muted }}>
              Take the free 5-minute assessment and get a personalised {config.label} pilot training roadmap —
              your exact route, realistic costs, and matched flight schools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={config.roadmapHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white no-underline"
                style={{ background: ctaGrad, boxShadow: "0 0 24px oklch(0.72 0.18 65 / 0.3)" }}
              >
                Get my free {config.label} roadmap
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={config.calculatorHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold no-underline"
                style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.14)", color: "oklch(0.75 0.04 240)" }}
              >
                Estimate my training costs
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
