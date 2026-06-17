import { useState, useCallback, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { useRoute, Link } from "wouter";
import {
  getQuizBySlug,
  Quiz,
  QuizQuestion,
  QuizResult,
  QuizOption,
} from "@/data/quizzes";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Share2,
  RotateCcw,
  ChevronLeft,
  Plane,
  Mail,
} from "lucide-react";

// ─── Helpers ─────────────────────────────────────────────────────────────

function computeResult(quiz: Quiz, answers: Record<string, string>): QuizResult {
  if (quiz.type === "personality") {
    // Count archetype votes
    const votes: Record<string, number> = {};
    quiz.questions.forEach((q) => {
      const chosen = q.options.find((o) => o.value === answers[q.id]);
      if (chosen?.archetypes) {
        chosen.archetypes.forEach((a) => {
          votes[a] = (votes[a] ?? 0) + 1;
        });
      }
    });
    const topArchetype = Object.entries(votes).sort((a, b) => b[1] - a[1])[0]?.[0];
    return quiz.results.find((r) => r.id === topArchetype) ?? quiz.results[0];
  }

  if (quiz.type === "diagnostic") {
    // Obstacle quiz: find most-voted category
    // Normalize variant values (e.g. finance2 → finance) before tallying
    const normalizeValue = (v: string) => v.replace(/\d+$/, "");
    const votes: Record<string, number> = {};
    quiz.questions.forEach((q) => {
      const val = answers[q.id];
      if (val) {
        const key = normalizeValue(val);
        votes[key] = (votes[key] ?? 0) + 1;
      }
    });
    const top = Object.entries(votes).sort((a, b) => b[1] - a[1])[0]?.[0];
    const byId = quiz.results.find((r) => r.id === top);
    if (byId) return byId;
    // Fallback: scored
  }

  // Scored / trivia / visual / cognitive — sum scores
  let total = 0;
  quiz.questions.forEach((q) => {
    const chosen = q.options.find((o) => o.value === answers[q.id]);
    if (chosen) {
      if (quiz.type === "trivia" || quiz.type === "visual") {
        total += chosen.correct ? 1 : 0;
      } else {
        total += chosen.score ?? 0;
      }
    }
  });

  const match = quiz.results
    .filter((r) => r.minScore !== undefined && r.maxScore !== undefined)
    .find((r) => total >= (r.minScore ?? 0) && total <= (r.maxScore ?? 999));
  return match ?? quiz.results[quiz.results.length - 1];
}

function computeScore(quiz: Quiz, answers: Record<string, string>): number {
  let total = 0;
  quiz.questions.forEach((q) => {
    const chosen = q.options.find((o) => o.value === answers[q.id]);
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
  revealed: boolean; // trivia: show correct/wrong
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
    icon = <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: accentColor }} />;
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
          <span className="text-xl w-8 shrink-0 text-center">{option.emoji}</span>
        )}
        <span className={`font-semibold text-sm md:text-base flex-1 ${textColor}`}>
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

// ─── Quiz Email Capture Card ─────────────────────────────────────────────

function QuizEmailCapture({ quizSlug }: { quizSlug: string }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  const subscribe = trpc.guides.subscribe.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    subscribe.mutate({ email, source: `quiz_result:${quizSlug}` });
  };

  if (subscribe.isSuccess) {
    return (
      <div className="mt-6 rounded-2xl p-5 flex items-center gap-4" style={{ background: "oklch(0.18 0.06 145 / 0.25)", border: "1px solid oklch(0.55 0.18 145 / 0.35)" }}>
        <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: "oklch(0.72 0.18 145)" }} />
        <div>
          <p className="font-bold text-white text-sm">You're on the list.</p>
          <p className="text-xs" style={{ color: "oklch(0.6 0.04 240)" }}>We'll send you pilot training insights and tool updates — no spam, unsubscribe any time.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl p-5" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "oklch(0.72 0.18 65 / 0.15)" }}>
          <Mail className="w-4 h-4" style={{ color: "oklch(0.72 0.18 65)" }} />
        </div>
        <div>
          <p className="font-bold text-white text-sm">Get your personalised pilot training guide</p>
          <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 240)" }}>Join 4,000+ aspiring pilots. Monthly insights, tool updates, no spam.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-2.5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full px-4 py-2.5 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
          style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.15)" }}
        />
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5"
          />
          <span className="text-xs leading-relaxed" style={{ color: "oklch(0.5 0.03 240)" }}>
            I'm happy to hear from AviatorIQ about pilot training options and matched flight schools.
          </span>
        </label>
        <button
          type="submit"
          disabled={subscribe.isPending || !consent}
          className="w-full py-2.5 rounded-xl font-bold text-sm transition-all disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.62 0.2 45))", color: "oklch(0.12 0.04 250)" }}
        >
          {subscribe.isPending ? "Sending…" : "Send me the guide"}
        </button>
      </form>
    </div>
  );
}

// ─── Result Card ──────────────────────────────────────────────────────────

function ResultCard({
  quiz,
  result,
  score,
  total,
  onRetake,
}: {
  quiz: Quiz;
  result: QuizResult;
  score: number;
  total: number;
  onRetake: () => void;
}) {
  const isScored = ["scored", "trivia", "visual", "cognitive"].includes(quiz.type);
  const pct = isScored ? Math.round((score / total) * 100) : null;

  const handleShare = () => {
    const text = `I just took the "${quiz.title}" quiz on AviatorIQ and got: ${result.title}! ${result.subtitle}. Try it yourself 👉`;
    if (navigator.share) {
      navigator.share({ title: result.title, text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`).then(() => {
        alert("Copied to clipboard! Share it with your friends.");
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        {/* Score ring (for scored quizzes) */}
        {pct !== null && (
          <div className="flex justify-center mb-8">
            <div className="relative w-28 h-28">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                <circle
                  cx="50" cy="50" r="42" fill="none"
                  stroke={result.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
                  style={{ transition: "stroke-dashoffset 1s ease-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white font-display font-bold text-2xl">{score}</span>
                <span className="text-white/50 text-xs">/ {total}</span>
              </div>
            </div>
          </div>
        )}

        {/* Emoji */}
        {pct === null && (
          <div className="text-center text-6xl mb-6 animate-bounce-once">{result.emoji}</div>
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
          <p className="text-white/75 text-sm leading-relaxed">{result.description}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
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

        {/* Free Assessment CTA */}
        <div className="mt-6 p-6 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, oklch(0.55 0.18 240 / 0.12), oklch(0.45 0.2 260 / 0.08))', border: '1px solid oklch(0.55 0.18 240 / 0.25)' }}>
          <Plane className="w-8 h-8 mx-auto mb-3" style={{ color: 'oklch(0.72 0.18 65)' }} />
          <p className="font-display font-bold text-white text-base mb-1">Want a full personalised roadmap?</p>
          <p className="text-xs mb-4" style={{ color: 'oklch(0.55 0.04 240)' }}>The Free Assessment scores you across 5 dimensions, matches you with flight schools, and generates an AI-powered PDF roadmap — free, no obligation.</p>
          <Link href="/quiz" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all hover:scale-[1.02] no-underline w-full"
            style={{ background: 'linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.62 0.2 45))', boxShadow: '0 4px 20px oklch(0.72 0.18 65 / 0.3)' }}>
            Get My Free Pilot Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Email capture */}
        <QuizEmailCapture quizSlug={quiz.slug} />

        {/* More quizzes */}
        <div className="mt-4 text-center">
          <Link href="/quizzes" className="text-white/50 hover:text-white/80 text-sm transition-colors no-underline">
            ← Try another quiz
          </Link>
        </div>
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
  const [revealed, setRevealed] = useState(false); // trivia: show explanation
  const [done, setDone] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  // Reset on slug change
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
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a2d4e 100%)" }}>
        <div className="text-white text-center">
          <div className="text-5xl mb-4">🤔</div>
          <h1 className="text-2xl font-bold mb-2">Quiz not found</h1>
          <Link href="/quizzes" className="text-blue-400 hover:text-blue-300 no-underline">
            ← Back to all quizzes
          </Link>
        </div>
      </div>
    );
  }

  const question: QuizQuestion = quiz.questions[currentStep];
  const progress = ((currentStep) / quiz.questions.length) * 100;
  const isTriviaType = quiz.type === "trivia" || quiz.type === "visual";
  const selectedValue = answers[question?.id];

  const advanceQuestion = () => {
    setAnimating(true);
    setFadeIn(false);
    setTimeout(() => {
      if (currentStep < quiz.questions.length - 1) {
        setCurrentStep((s) => s + 1);
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
      // Reveal correct/wrong, then wait for "Next" button
      setRevealed(true);
    } else {
      // Auto-advance after short delay
      setTimeout(advanceQuestion, 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setAnimating(true);
      setFadeIn(false);
      setTimeout(() => {
        setCurrentStep((s) => s - 1);
        setRevealed(false);
        setAnimating(false);
        setFadeIn(true);
      }, 180);
    }
  };

  const result = done ? computeResult(quiz, answers) : null;
  const score = done ? computeScore(quiz, answers) : 0;
  const maxScore = quiz.type === "trivia" || quiz.type === "visual"
    ? quiz.questions.length
    : quiz.questions.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.score ?? 0)), 0);

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
        <Link href="/quizzes" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors no-underline">
          <Plane className="w-4 h-4" style={{ color: quiz.accentColor }} />
          <span className="font-display font-bold text-sm text-white/80">AviatorIQ</span>
        </Link>
        {!done && (
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-xs">{currentStep + 1} / {quiz.questions.length}</span>
            <span className="text-white/30 text-xs hidden sm:block">{quiz.title}</span>
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
              <p className="text-white/50 text-sm mb-8 text-center">{question.subtext}</p>
            )}
            {!question.subtext && <div className="mb-8" />}

            {/* Options */}
            <div className="space-y-2.5">
              {question.options.map((option) => (
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
              <div
                className="mt-5 p-4 rounded-2xl border border-white/12 bg-white/5 animate-fade-in"
              >
                <p className="text-white/75 text-sm leading-relaxed">
                  <span className="font-semibold text-white">Did you know? </span>
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
                  {currentStep < quiz.questions.length - 1 ? "Next Question" : "See Results"}
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
            Free · No registration · {quiz.questionCount} questions · {quiz.duration}
          </p>
        </div>
      )}
    </div>
  );
}
