import { Link } from "wouter";
import { ALL_QUIZZES, Quiz } from "@/data/quizzes";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { ArrowRight, Clock, Zap, Brain, Compass, Target, Star, Trophy, Flame } from "lucide-react";

// ─── Design tokens (match site-wide system) ───────────────────────────────────
const surface = "oklch(0.14 0.08 250)";
const border = "oklch(1 0 0 / 0.08)";
const borderHover = "oklch(1 0 0 / 0.18)";
const muted = "oklch(0.55 0.04 240)";
const brandGradient = "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";
const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

// Each quiz gets a subtle accent colour
const QUIZ_ACCENTS: Record<string, { accent: string; bg: string; border: string }> = {
  "what-kind-of-pilot":       { accent: "oklch(0.65 0.18 240)", bg: "oklch(0.45 0.18 240 / 0.10)", border: "oklch(0.45 0.18 240 / 0.20)" },
  "aviation-myth-buster":     { accent: "oklch(0.72 0.18 65)",  bg: "oklch(0.72 0.18 65 / 0.10)",  border: "oklch(0.72 0.18 65 / 0.20)"  },
  "think-like-a-pilot":       { accent: "oklch(0.65 0.18 200)", bg: "oklch(0.6 0.18 200 / 0.10)",  border: "oklch(0.6 0.18 200 / 0.20)"  },
  "guess-the-aircraft":       { accent: "oklch(0.70 0.15 180)", bg: "oklch(0.6 0.15 180 / 0.10)",  border: "oklch(0.6 0.15 180 / 0.20)"  },
  "flight-training-readiness":{ accent: "oklch(0.65 0.18 145)", bg: "oklch(0.55 0.18 145 / 0.10)", border: "oklch(0.55 0.18 145 / 0.20)" },
  "pilot-medical-check":      { accent: "oklch(0.70 0.15 340)", bg: "oklch(0.6 0.15 340 / 0.10)",  border: "oklch(0.6 0.15 340 / 0.20)"  },
  "biggest-obstacle":         { accent: "oklch(0.70 0.18 280)", bg: "oklch(0.55 0.18 280 / 0.10)", border: "oklch(0.55 0.18 280 / 0.20)" },
};

const BADGE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Most Shared":      { bg: "oklch(0.60 0.18 20 / 0.12)",  text: "oklch(0.80 0.15 20)",  border: "oklch(0.60 0.18 20 / 0.25)"  },
  "Most Fun":         { bg: "oklch(0.55 0.18 280 / 0.12)", text: "oklch(0.75 0.15 280)", border: "oklch(0.55 0.18 280 / 0.25)" },
  "Most Useful":      { bg: "oklch(0.55 0.18 145 / 0.12)", text: "oklch(0.72 0.15 145)", border: "oklch(0.55 0.18 145 / 0.25)" },
  "Most Replayable":  { bg: "oklch(0.72 0.18 65 / 0.12)",  text: "oklch(0.85 0.15 65)",  border: "oklch(0.72 0.18 65 / 0.25)"  },
  "Most Challenging": { bg: "oklch(0.60 0.15 200 / 0.12)", text: "oklch(0.75 0.15 200)", border: "oklch(0.60 0.15 200 / 0.25)" },
  "Anxiety Buster":   { bg: "oklch(0.60 0.15 180 / 0.12)", text: "oklch(0.75 0.15 180)", border: "oklch(0.60 0.15 180 / 0.25)" },
  "Top Funnel":       { bg: "oklch(0.45 0.18 240 / 0.12)", text: "oklch(0.65 0.18 240)", border: "oklch(0.45 0.18 240 / 0.25)" },
};

// ─── Quiz Card ────────────────────────────────────────────────────────────────
function QuizCard({ quiz, index }: { quiz: Quiz; index: number }) {
  const accent = QUIZ_ACCENTS[quiz.slug] ?? { accent: "oklch(0.65 0.18 240)", bg: "oklch(0.45 0.18 240 / 0.10)", border: "oklch(0.45 0.18 240 / 0.20)" };
  const badge = quiz.badge ? BADGE_COLORS[quiz.badge] : null;

  return (
    <Link
      href={`/quizzes/${quiz.slug}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 no-underline"
      style={{ background: surface, border: `1px solid ${border}` }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.border = `1px solid ${accent.border}`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px oklch(0 0 0 / 0.3)`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`;
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Subtle top accent line */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${accent.accent}, transparent)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Top row: emoji + number */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
          >
            {quiz.emoji}
          </div>
          <span className="font-display font-black text-3xl leading-none select-none" style={{ color: "oklch(1 0 0 / 0.06)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Badge */}
        {quiz.badge && badge && (
          <div className="mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: badge.bg, color: badge.text, border: `1px solid ${badge.border}` }}
            >
              {quiz.badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-white leading-tight mb-2">
          {quiz.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: muted }}>
          {quiz.tagline}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${border}` }}>
          <div className="flex items-center gap-3 text-xs" style={{ color: muted }}>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {quiz.duration}
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              {quiz.questionCount} questions
            </span>
          </div>
          <span
            className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
            style={{ color: accent.accent }}
          >
            Start
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Featured Quiz Spotlight ──────────────────────────────────────────────────
function FeaturedQuizSpotlight() {
  return (
    <section className="py-10 px-4" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-6">
          <Flame className="w-4 h-4" style={{ color: "oklch(0.72 0.18 65)" }} />
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: muted }}>
            Most Popular This Week
          </span>
        </div>

        <Link
          href="/quiz/flight-deck"
          className="group relative block rounded-2xl overflow-hidden no-underline transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, oklch(0.16 0.12 255), oklch(0.20 0.14 248))",
            border: "1px solid oklch(0.45 0.18 240 / 0.25)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.border = "1px solid oklch(0.45 0.18 240 / 0.45)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px oklch(0 0 0 / 0.35)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.border = "1px solid oklch(0.45 0.18 240 / 0.25)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "400px", height: "400px", background: "radial-gradient(circle, oklch(0.45 0.18 240 / 0.12) 0%, transparent 65%)", transform: "translate(20%, -20%)" }} />

          <div className="relative z-10 p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">✈️</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "oklch(0.45 0.18 240 / 0.2)", color: "oklch(0.65 0.18 240)", border: "1px solid oklch(0.45 0.18 240 / 0.3)" }}>
                    Flight Deck Quiz
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: ctaGradient, color: "white" }}>
                    ⭐ Featured
                  </span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                What's Really Stopping You Becoming a Pilot?
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: muted }}>
                7 questions. Discover your Flight Potential Score, your biggest barrier (finance, time, confidence, or medical), and your strongest asset. The most honest 2-minute quiz you'll take today.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 2 minutes</span>
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> 7 questions</span>
                <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5" style={{ color: "oklch(0.72 0.18 65)" }} /> Free · No sign-up</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white no-underline transition-all"
                style={{ background: ctaGradient, boxShadow: "0 0 24px oklch(0.72 0.18 65 / 0.3)" }}
              >
                Take the quiz
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div style={{ background: "oklch(0.12 0.08 250)", borderTop: "1px solid oklch(1 0 0 / 0.06)", borderBottom: "1px solid oklch(1 0 0 / 0.06)" }}>
      <div className="container max-w-5xl py-5">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {[
            { icon: <Trophy className="w-4 h-4" />, value: "7", label: "quizzes", color: "oklch(0.72 0.18 65)" },
            { icon: <Clock className="w-4 h-4" />, value: "2–5 min", label: "each", color: "oklch(0.65 0.18 240)" },
            { icon: <Zap className="w-4 h-4" />, value: "Free", label: "always", color: "oklch(0.65 0.18 200)" },
            { icon: <Star className="w-4 h-4" />, value: "No", label: "sign-up needed", color: "oklch(0.70 0.15 340)" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <span style={{ color: stat.color }}>{stat.icon}</span>
              <span className="font-display font-bold text-base text-white">{stat.value}</span>
              <span className="text-sm" style={{ color: muted }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function QuizHub() {
  const features = [
    { icon: <Brain className="w-5 h-5" />, label: "Personality & knowledge", color: "oklch(0.65 0.18 240)" },
    { icon: <Compass className="w-5 h-5" />, label: "Serious & fun formats", color: "oklch(0.72 0.18 65)" },
    { icon: <Target className="w-5 h-5" />, label: "Actionable results", color: "oklch(0.65 0.18 200)" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.10 0.08 252)" }}>
      <SEO
        title="Aviation Quizzes | AviatorIQ"
        description="7 interactive aviation quizzes — from personality tests to myth busters. Find out what kind of pilot you are, test your knowledge, and discover what's really stopping you."
        canonical="/quizzes"
      />
      <PublicNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, oklch(0.45 0.18 240 / 0.10) 0%, transparent 65%)", transform: "translate(30%, -30%)" }} />

        <div className="container relative z-10 max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
            style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}
          >
            ✈️ AviatorIQ Quiz Suite
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Test Your Aviation{" "}
            <span style={{ background: brandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Knowledge & Instincts
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: muted }}>
            Seven quizzes — some serious, some fun, all genuinely useful. Discover your pilot archetype, bust aviation myths, test your decision-making, and find out what's really standing between you and the cockpit.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.10)", color: "oklch(0.72 0.04 240)" }}
              >
                <span style={{ color: f.color }}>{f.icon}</span>
                {f.label}
              </div>
            ))}
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.10)", color: "oklch(0.72 0.04 240)" }}
            >
              <Clock className="w-4 h-4" style={{ color: "oklch(0.72 0.18 65)" }} />
              2–5 min each · Free
            </div>
          </div>
        </div>
      </section>

      <StatsBar />
      <FeaturedQuizSpotlight />

      {/* ── Quiz Grid ────────────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 px-4" style={{ background: "oklch(0.11 0.08 252)" }}>
        <div className="container max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: "oklch(1 0 0 / 0.06)" }} />
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: muted }}>
              All 7 Quizzes
            </span>
            <div className="h-px flex-1" style={{ background: "oklch(1 0 0 / 0.06)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALL_QUIZZES.map((quiz, i) => (
              <QuizCard key={quiz.id} quiz={quiz} index={i} />
            ))}
          </div>

          {/* Category note */}
          <div className="mt-10 p-5 rounded-2xl text-center" style={{ background: "oklch(0.45 0.18 240 / 0.05)", border: "1px solid oklch(0.45 0.18 240 / 0.12)" }}>
            <p className="text-sm" style={{ color: muted }}>
              <span className="font-semibold text-white">New quizzes added regularly.</span>{" "}
              All quizzes are free, require no registration, and your results are never stored without your consent.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-14 px-4" style={{ background: "oklch(0.10 0.08 252)" }}>
        <div className="container max-w-3xl">
          <div
            className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, oklch(0.14 0.12 255), oklch(0.18 0.14 248))",
              border: "1px solid oklch(0.45 0.18 240 / 0.2)",
            }}
          >
            <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "400px", height: "400px", background: "radial-gradient(circle, oklch(0.45 0.18 240 / 0.08) 0%, transparent 65%)", transform: "translate(30%, -30%)" }} />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🛫</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
                Ready for the real thing?
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: muted }}>
                The quizzes are a taster. The full AviatorIQ Career Assessment gives you a personalised AI roadmap, your AviatorIQ Score, and matched flight schools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all"
                  style={{ background: ctaGradient, boxShadow: "0 0 24px oklch(0.72 0.18 65 / 0.3)" }}
                >
                  Take the Full Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/roadmap"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white/70 no-underline transition-all hover:text-white"
                  style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.15)" }}
                >
                  Generate My Roadmap
                </Link>
              </div>
              <p className="text-sm mt-4" style={{ color: muted }}>Free · No registration · 5 minutes</p>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
