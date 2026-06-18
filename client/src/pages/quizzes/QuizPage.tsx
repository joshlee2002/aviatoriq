import { useState, useEffect, useCallback, useRef } from "react";
import { useRoute, Link } from "wouter";
import {
  getQuizBySlug,
  Quiz,
  QuizQuestion,
  QuizResult,
  QuizOption,
} from "@/data/quizzes";
import PublicNav from "@/components/PublicNav";
import RecommendedQuizzes from "@/components/RecommendedQuizzes";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { trpc } from "@/lib/trpc";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Share2,
  RotateCcw,
  ChevronLeft,
  Plane,
  Download,
  Mail,
  CheckCircle,
} from "lucide-react";

// ─── Helpers ─────────────────────────────────────────────────────────────

function computeResult(
  quiz: Quiz,
  answers: Record<string, string>
): QuizResult {
  if (quiz.type === "personality") {
    const votes: Record<string, number> = {};
    quiz.questions.forEach(q => {
      const chosen = q.options.find(o => o.value === answers[q.id]);
      if (chosen?.archetypes) {
        chosen.archetypes.forEach(a => {
          votes[a] = (votes[a] ?? 0) + 1;
        });
      }
    });
    const topArchetype = Object.entries(votes).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0];
    return quiz.results.find(r => r.id === topArchetype) ?? quiz.results[0];
  }

  if (quiz.type === "diagnostic") {
    const normalizeValue = (v: string) => v.replace(/\d+$/, "");
    const votes: Record<string, number> = {};
    quiz.questions.forEach(q => {
      const val = answers[q.id];
      if (val) {
        const key = normalizeValue(val);
        votes[key] = (votes[key] ?? 0) + 1;
      }
    });
    const top = Object.entries(votes).sort((a, b) => b[1] - a[1])[0]?.[0];
    const byId = quiz.results.find(r => r.id === top);
    if (byId) return byId;
  }

  let total = 0;
  quiz.questions.forEach(q => {
    const chosen = q.options.find(o => o.value === answers[q.id]);
    if (chosen) {
      if (quiz.type === "trivia" || quiz.type === "visual") {
        total += chosen.correct ? 1 : 0;
      } else {
        total += chosen.score ?? 0;
      }
    }
  });

  const match = quiz.results
    .filter(r => r.minScore !== undefined && r.maxScore !== undefined)
    .find(r => total >= (r.minScore ?? 0) && total <= (r.maxScore ?? 999));
  return match ?? quiz.results[quiz.results.length - 1];
}

function computeScore(quiz: Quiz, answers: Record<string, string>): number {
  let total = 0;
  quiz.questions.forEach(q => {
    const chosen = q.options.find(o => o.value === answers[q.id]);
    if (chosen) {
      if (quiz.type === "trivia" || quiz.type === "visual") {
        total += chosen.correct ? 1 : 0;
      } else {
        total += chosen.score ?? 0;
      }
    }
  });
  return total;
}

// ─── Option Button ────────────────────────────────────────────────────────

function OptionButton({
  option,
  selected,
  revealed,
  onClick,
  accentColor,
}: {
  option: QuizOption;
  selected: boolean;
  revealed: boolean;
  onClick: () => void;
  accentColor: string;
}) {
  const isCorrect = option.correct === true;
  const isWrong = selected && option.correct === false;

  let borderColor = "border-white/12";
  let bg = "bg-white/5";
  let textColor = "text-white";
  let icon = null;

  if (revealed) {
    if (isCorrect) {
      borderColor = "border-emerald-400/60";
      bg = "bg-emerald-500/15";
      textColor = "text-emerald-300";
      icon = <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
    } else if (isWrong) {
      borderColor = "border-red-400/60";
      bg = "bg-red-500/15";
      textColor = "text-red-300";
      icon = <XCircle className="w-5 h-5 text-red-400 shrink-0" />;
    } else {
      borderColor = "border-white/6";
      bg = "bg-white/3";
      textColor = "text-white/40";
    }
  } else if (selected) {
    borderColor = "border-[var(--accent)]";
    bg = "bg-[var(--accent)]/10";
    icon = (
      <CheckCircle2
        className="w-5 h-5 shrink-0"
        style={{ color: accentColor }}
      />
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={revealed}
      className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-150 group
        ${borderColor} ${bg}
        ${!revealed && !selected ? "hover:border-white/25 hover:bg-white/8 active:scale-[0.98]" : ""}
        ${selected && !revealed ? "scale-[0.99]" : ""}
      `}
      style={{ "--accent": accentColor } as React.CSSProperties}
    >
      <div className="flex items-center gap-3">
        {option.emoji && (
          <span className="text-xl w-8 shrink-0 text-center">
            {option.emoji}
          </span>
        )}
        <span
          className={`font-semibold text-sm md:text-base flex-1 ${textColor}`}
        >
          {option.label}
        </span>
        {icon}
        {!icon && !revealed && (
          <ArrowRight className="w-4 h-4 text-white/15 group-hover:text-white/35 shrink-0 transition-colors" />
        )}
      </div>
    </button>
  );
}

// ─── Shareable Card (hidden, used for html2canvas) ────────────────────────

function ShareableCard({
  quiz,
  result,
  score,
  total,
  cardRef,
}: {
  quiz: Quiz;
  result: QuizResult;
  score: number;
  total: number;
  cardRef: React.RefObject<HTMLDivElement>;
}) {
  const isScored = ["scored", "trivia", "visual", "cognitive"].includes(quiz.type);
  const pct = isScored ? Math.round((score / total) * 100) : null;

  return (
    <div
      ref={cardRef}
      style={{
        position: "fixed",
        left: "-9999px",
        top: 0,
        width: "600px",
        height: "315px",
        background: "linear-gradient(135deg, #0a1628 0%, #1a2d4e 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: "system-ui, sans-serif",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute",
        top: "-60px",
        right: "-60px",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: `${result.color}22`,
        filter: "blur(40px)",
      }} />

      {/* AviatorIQ brand */}
      <div style={{ position: "absolute", top: "20px", left: "28px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: result.color }} />
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          AviatorIQ
        </span>
      </div>

      {/* Quiz title */}
      <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {quiz.title}
      </p>

      {/* Emoji or score */}
      {pct !== null ? (
        <div style={{ fontSize: "40px", fontWeight: 800, color: result.color, marginBottom: "8px" }}>
          {score}/{total}
        </div>
      ) : (
        <div style={{ fontSize: "52px", marginBottom: "8px" }}>{result.emoji}</div>
      )}

      {/* Result title */}
      <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: 800, textAlign: "center", margin: "0 0 6px 0" }}>
        {result.title}
      </h2>

      {/* Subtitle */}
      <p style={{ color: result.color, fontSize: "14px", textAlign: "center", margin: "0 0 16px 0" }}>
        {result.subtitle}
      </p>

      {/* CTA */}
      <div style={{ position: "absolute", bottom: "20px", right: "28px" }}>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px" }}>aviatoriq.com</span>
      </div>
    </div>
  );
}

// ─── Result Card ──────────────────────────────────────────────────────────

// Map standalone quiz answer values to main assessment QuizData fields
function buildPrefillUrl(quiz: Quiz, answers: Record<string, string>): string {
  const params = new URLSearchParams();
  params.set("source", `quiz:${quiz.slug}`);

  // readiness quiz mappings
  if (quiz.slug === "flight-training-readiness") {
    const medical = answers["r3"];
    if (medical) params.set("class1Medical", medical === "have_class1" ? "Yes, I hold a Class 1" : medical === "no_concerns" ? "No concerns" : medical === "some_concerns" ? "Some concerns" : "Significant concerns");
    const experience = answers["r7"];
    if (experience) params.set("flyingExperience", experience === "none" ? "None" : experience === "trial" ? "Trial lesson only" : experience === "ppl" ? "PPL holder" : "50+ hours");
    const seriousness = answers["r6"];
    if (seriousness) params.set("seriousness", seriousness === "full_time" ? "I want to start as soon as possible" : seriousness === "part_time" ? "I'm planning but not ready yet" : "Just exploring");
  }

  // obstacle/barrier quiz mappings
  if (quiz.slug === "biggest-obstacle") {
    const barrier = answers["o1"];
    if (barrier) params.set("biggestConcern", barrier === "finance" ? "Cost of training" : barrier === "medical" ? "Medical requirements" : barrier === "confidence" ? "Not sure I could do it" : barrier === "time" ? "Time commitment" : "Not enough information");
  }

  // affordability quiz mappings
  if (quiz.slug === "can-you-afford-pilot-training") {
    const savings = answers["af2"];
    if (savings) {
      if (savings === "over100k") params.set("budgetRange", "£100,000+");
      else if (savings === "50k_100k") params.set("budgetRange", "£50,000–£100,000");
      else if (savings === "20k_50k") params.set("budgetRange", "£20,000–£50,000");
      else params.set("budgetRange", "Under £20,000");
    }
    const financeResearch = answers["af4"];
    if (financeResearch === "yes_researched" || financeResearch === "yes_approved") params.set("wantsFinanceInfo", "Yes");
  }

  const qs = params.toString();
  return qs ? `/quiz?${qs}` : "/quiz";
}

function ResultCard({
  quiz,
  result,
  score,
  total,
  onRetake,
  answers = {},
}: {
  quiz: Quiz;
  result: QuizResult;
  score: number;
  total: number;
  onRetake: () => void;
  answers?: Record<string, string>;
}) {
  const prefillUrl = buildPrefillUrl(quiz, answers);
  const [emailInput, setEmailInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [generatingCard, setGeneratingCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const captureEmailMutation = trpc.quizzes.captureEmail.useMutation({
    onSuccess: () => setEmailSubmitted(true),
    onError: () => setEmailError("Something went wrong. Please try again."),
  });

  const isScored = ["scored", "trivia", "visual", "cognitive"].includes(
    quiz.type
  );
  const pct = isScored ? Math.round((score / total) * 100) : null;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !/^[^@]+@[^@]+\.[^@]+$/.test(emailInput)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    captureEmailMutation.mutate({
      email: emailInput,
      quizSlug: quiz.slug,
      quizTitle: quiz.title,
      resultId: result.id,
      resultTitle: result.title,
      consentToContact: true,
    });
  };

  const handleGenerateCard = async () => {
    if (!cardRef.current) return;
    setGeneratingCard(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#0a1628",
        scale: 2,
        useCORS: true,
        logging: false,
      });
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `aviatoriq-${quiz.slug}-result.png`;
      a.click();
    } catch (e) {
      console.warn("Card generation failed:", e);
    } finally {
      setGeneratingCard(false);
    }
  };

  const handleShare = () => {
    const text = `I just took the "${quiz.title}" quiz on AviatorIQ and got: ${result.title}! ${result.subtitle}. Try it yourself 👉`;
    if (navigator.share) {
      navigator
        .share({ title: result.title, text, url: window.location.href })
        .catch(() => {});
    } else {
      navigator.clipboard
        .writeText(`${text} ${window.location.href}`)
        .then(() => {
          alert("Copied to clipboard! Share it with your friends.");
        });
    }
  };

  // Email capture prompt — personalised by result type
  const emailPromptText = (() => {
    if (quiz.type === "personality") {
      return `Want a personalised guide for ${result.title}? We'll send you the exact training route, costs, and next steps for your pilot type.`;
    }
    if (quiz.type === "diagnostic") {
      return `We'll send you a free guide on overcoming your biggest obstacle — tailored to your result.`;
    }
    if (quiz.type === "scored" || quiz.type === "cognitive") {
      return `Get a personalised breakdown of your result and what it means for your training readiness — sent to your inbox.`;
    }
    return `Get a free guide based on your result, plus tips on starting your pilot training journey.`;
  })();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
      {/* Hidden shareable card for html2canvas */}
      <ShareableCard quiz={quiz} result={result} score={score} total={total} cardRef={cardRef} />

      <div className="w-full max-w-lg">
        {/* Score ring (for scored quizzes) */}
        {pct !== null && (
          <div className="flex justify-center mb-8">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke={result.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
                  style={{ transition: "stroke-dashoffset 1s ease-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white font-display font-bold text-2xl">
                  {score}
                </span>
                <span className="text-white/50 text-xs">/ {total}</span>
              </div>
            </div>
          </div>
        )}

        {/* Emoji */}
        {pct === null && (
          <div className="text-center text-6xl mb-6 animate-bounce-once">
            {result.emoji}
          </div>
        )}

        {/* Badge */}
        {result.badge && (
          <div className="flex justify-center mb-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/15">
              {result.badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-2">
          {result.title}
        </h1>
        <p className="text-center mb-6" style={{ color: result.color }}>
          {result.subtitle}
        </p>

        {/* Description */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <p className="text-white/75 text-sm leading-relaxed">
            {result.description}
          </p>
        </div>

        {/* ── Email Capture ─────────────────────────────────────────────── */}
        <div
          className="mb-6 p-5 rounded-2xl border"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
            borderColor: `${result.color}40`,
          }}
        >
          {emailSubmitted ? (
            <div className="flex items-center gap-3 text-center justify-center py-2">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-emerald-300 text-sm font-semibold">
                You're in! Check your inbox for your personalised guide.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-start gap-3 mb-4">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" style={{ color: result.color }} />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    Get your free personalised guide
                  </p>
                  <p className="text-white/55 text-xs leading-relaxed">
                    {emailPromptText}
                  </p>
                </div>
              </div>
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={e => { setEmailInput(e.target.value); setEmailError(""); }}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  disabled={captureEmailMutation.isPending}
                  className="px-4 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:scale-105 disabled:opacity-50 whitespace-nowrap"
                  style={{ background: result.color }}
                >
                  {captureEmailMutation.isPending ? "Sending..." : "Send it"}
                </button>
              </form>
              {emailError && (
                <p className="text-red-400 text-xs mt-2">{emailError}</p>
              )}
              <p className="text-white/25 text-xs mt-2">
                No spam. Unsubscribe any time.
              </p>
            </>
          )}
        </div>

        {/* ── Actions ───────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <Link
            href={result.cta.href}
            className="flex-1 flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-2xl text-sm transition-all duration-200 hover:scale-105 no-underline"
            style={{ background: result.color, color: "#fff" }}
          >
            {result.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 bg-white/8 hover:bg-white/14 border border-white/12 text-white font-semibold px-5 py-3.5 rounded-2xl text-sm transition-all duration-200"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button
            onClick={onRetake}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/8 text-white/60 hover:text-white font-semibold px-5 py-3.5 rounded-2xl text-sm transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Retake
          </button>
        </div>

        {/* ── Download shareable card ───────────────────────────────────── */}
        <button
          onClick={handleGenerateCard}
          disabled={generatingCard}
          className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/8 border border-white/10 text-white/60 hover:text-white/80 font-semibold px-5 py-3 rounded-2xl text-sm transition-all duration-200 mb-6 disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          {generatingCard ? "Generating..." : "Download shareable result card"}
        </button>

        {/* ── Contextual Assessment CTA ─────────────────────────────────── */}
        <div
          className="p-6 rounded-2xl text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.18 240 / 0.12), oklch(0.45 0.2 260 / 0.08))",
            border: "1px solid oklch(0.55 0.18 240 / 0.25)",
          }}
        >
          <Plane
            className="w-8 h-8 mx-auto mb-3"
            style={{ color: "oklch(0.72 0.18 65)" }}
          />
          <p className="font-display font-bold text-white text-base mb-1">
            {result.cta.assessmentPrompt ?? "Want a full personalised roadmap?"}
          </p>
          <p className="text-xs mb-4" style={{ color: "oklch(0.55 0.04 240)" }}>
            {result.cta.assessmentSubtext ??
              "The Free Assessment scores you across 5 dimensions, matches you with flight schools, and generates an AI-powered PDF roadmap — free, no obligation."}
          </p>
          <Link
            href={result.cta.href?.startsWith("/quiz") ? prefillUrl : (result.cta.href ?? prefillUrl)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all hover:scale-[1.02] no-underline w-full"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.62 0.2 45))",
              boxShadow: "0 4px 20px oklch(0.72 0.18 65 / 0.3)",
            }}
          >
            {result.cta.assessmentLabel ?? "Get My Free Pilot Assessment"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Recommended quizzes */}
        <RecommendedQuizzes currentSlug={quiz.slug} count={3} />
      </div>
    </div>
  );
}

// ─── Main Quiz Page ───────────────────────────────────────────────────────

export default function QuizPage() {
  const [, params] = useRoute("/quizzes/:slug");
  const slug = params?.slug ?? "";
  const quiz = getQuizBySlug(slug);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setCurrentStep(0);
    setAnswers({});
    setRevealed(false);
    setDone(false);
    setAnimating(false);
    setFadeIn(true);
  }, [slug]);

  const handleRetake = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setRevealed(false);
    setDone(false);
    setAnimating(false);
    setFadeIn(true);
  }, []);

  if (!quiz) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #1a2d4e 100%)",
        }}
      >
        <div className="text-white text-center">
          <div className="text-5xl mb-4">🤔</div>
          <h1 className="text-2xl font-bold mb-2">Quiz not found</h1>
          <Link
            href="/quizzes"
            className="text-blue-400 hover:text-blue-300 no-underline"
          >
            ← Back to all quizzes
          </Link>
        </div>
      </div>
    );
  }

  const question: QuizQuestion = quiz.questions[currentStep];
  const progress = (currentStep / quiz.questions.length) * 100;
  const isTriviaType = quiz.type === "trivia" || quiz.type === "visual";
  const selectedValue = answers[question?.id];

  const advanceQuestion = () => {
    setAnimating(true);
    setFadeIn(false);
    setTimeout(() => {
      if (currentStep < quiz.questions.length - 1) {
        setCurrentStep(s => s + 1);
        setRevealed(false);
      } else {
        setDone(true);
      }
      setAnimating(false);
      setFadeIn(true);
    }, 220);
  };

  const handleSelect = (value: string) => {
    if (animating) return;
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    if (isTriviaType) {
      setRevealed(true);
    } else {
      setTimeout(advanceQuestion, 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setAnimating(true);
      setFadeIn(false);
      setTimeout(() => {
        setCurrentStep(s => s - 1);
        setRevealed(false);
        setAnimating(false);
        setFadeIn(true);
      }, 180);
    }
  };

  const result = done ? computeResult(quiz, answers) : null;
  const score = done ? computeScore(quiz, answers) : 0;
  const maxScore =
    quiz.type === "trivia" || quiz.type === "visual"
      ? quiz.questions.length
      : quiz.questions.reduce(
          (sum, q) => sum + Math.max(...q.options.map(o => o.score ?? 0)),
          0
        );

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: quiz.gradient }}
    >
      <SEO
        title={`${quiz.title} | AviatorIQ Quizzes`}
        description={quiz.description}
        canonical={`/quizzes/${quiz.slug}`}
      />

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Link
          href="/quizzes"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors no-underline"
        >
          <Plane className="w-4 h-4" style={{ color: quiz.accentColor }} />
          <span className="font-display font-bold text-sm text-white/80">
            AviatorIQ
          </span>
        </Link>
        {!done && (
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-xs">
              {currentStep + 1} / {quiz.questions.length}
            </span>
            <span className="text-white/30 text-xs hidden sm:block">
              {quiz.title}
            </span>
          </div>
        )}
      </header>

      {/* Progress bar */}
      {!done && (
        <div className="h-0.5 bg-white/8">
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%`, background: quiz.accentColor }}
          />
        </div>
      )}

      {/* Content */}
      {done && result ? (
        <ResultCard
          quiz={quiz}
          result={result}
          score={score}
          total={maxScore}
          onRetake={handleRetake}
          answers={answers}
        />
      ) : (
        <div
          className={`flex-1 flex flex-col items-center justify-center px-4 py-10 transition-opacity duration-200 ${fadeIn ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-full max-w-lg">
            {/* Quiz label */}
            <p className="text-white/50 text-xs uppercase tracking-widest mb-5 text-center font-medium">
              {quiz.title}
            </p>

            {/* Question */}
            <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 text-center leading-tight">
              {question.question}
            </h1>
            {question.subtext && (
              <p className="text-white/50 text-sm mb-8 text-center">
                {question.subtext}
              </p>
            )}
            {!question.subtext && <div className="mb-8" />}

            {/* Options */}
            <div className="space-y-2.5">
              {question.options.map(option => (
                <OptionButton
                  key={option.value}
                  option={option}
                  selected={selectedValue === option.value}
                  revealed={revealed}
                  onClick={() => handleSelect(option.value)}
                  accentColor={quiz.accentColor}
                />
              ))}
            </div>

            {/* Trivia explanation */}
            {revealed && question.explanation && (
              <div className="mt-5 p-4 rounded-2xl border border-white/12 bg-white/5 animate-fade-in">
                <p className="text-white/75 text-sm leading-relaxed">
                  <span className="font-semibold text-white">
                    Did you know?{" "}
                  </span>
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between">
              {currentStep > 0 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {/* Next button for trivia (after reveal) */}
              {isTriviaType && revealed && (
                <button
                  onClick={advanceQuestion}
                  className="flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                  style={{ background: quiz.accentColor, color: "#fff" }}
                >
                  {currentStep < quiz.questions.length - 1
                    ? "Next Question"
                    : "See Results"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {!done && (
        <div className="text-center pb-6 px-4">
          <p className="text-white/40 text-xs">
            Free · No registration · {quiz.questionCount} questions ·{" "}
            {quiz.duration}
          </p>
        </div>
      )}
    </div>
  );
}
