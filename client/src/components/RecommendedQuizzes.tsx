import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

// ─── All quiz definitions (slug, title, emoji, short description) ─────────────
const ALL_QUIZZES = [
  {
    slug: "what-kind-of-pilot",
    title: "What Kind of Pilot Are You?",
    emoji: "🧠",
    desc: "Discover which pilot archetype matches your personality and ambitions.",
    tag: "Personality",
    tagColor: "oklch(0.55 0.18 240)",
  },
  {
    slug: "pilot-medical-check",
    title: "Could You Pass a Pilot Medical?",
    emoji: "🩺",
    desc: "Walk through the key medical criteria in plain English before you apply.",
    tag: "Medical",
    tagColor: "oklch(0.52 0.18 160)",
  },
  {
    slug: "aviation-myth-buster",
    title: "Aviation Myth Buster",
    emoji: "💡",
    desc: "Separate aviation fact from fiction. How sharp is your aviation radar?",
    tag: "Trivia",
    tagColor: "oklch(0.65 0.18 50)",
  },
  {
    slug: "flight-training-readiness",
    title: "How Ready Are You to Start Training?",
    emoji: "📊",
    desc: "A 5-dimension gap analysis — get an honest score on your readiness.",
    tag: "Readiness",
    tagColor: "oklch(0.72 0.18 65)",
  },
  {
    slug: "guess-the-aircraft",
    title: "Guess the Aircraft",
    emoji: "✈️",
    desc: "From legendary airliners to historic warbirds — how well do you know your aircraft?",
    tag: "Visual",
    tagColor: "oklch(0.55 0.18 280)",
  },
  {
    slug: "biggest-obstacle",
    title: "What's Your Biggest Obstacle?",
    emoji: "🚧",
    desc: "Identify your primary barrier to becoming a pilot — and what to do about it.",
    tag: "Insight",
    tagColor: "oklch(0.58 0.2 30)",
  },
  {
    slug: "think-like-a-pilot",
    title: "Do You Think Like a Pilot?",
    emoji: "🧩",
    desc: "Test the calm, systematic thinking that pilots actually use in the cockpit.",
    tag: "Cognitive",
    tagColor: "oklch(0.52 0.18 200)",
  },
];

interface RecommendedQuizzesProps {
  /** Slug of the quiz the user just completed — excluded from recommendations */
  currentSlug?: string;
  /** How many to show (default 3) */
  count?: number;
}

export default function RecommendedQuizzes({
  currentSlug,
  count = 3,
}: RecommendedQuizzesProps) {
  // Filter out the current quiz and pick a deterministic set
  const others = ALL_QUIZZES.filter(q => q.slug !== currentSlug);
  // Shuffle deterministically based on currentSlug so it feels curated
  const seed = currentSlug ? currentSlug.length % others.length : 0;
  const rotated = [...others.slice(seed), ...others.slice(0, seed)];
  const shown = rotated.slice(0, count);

  return (
    <section className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-display font-bold text-lg">
          Try another quiz
        </h2>
        <Link
          href="/quizzes"
          className="text-white/50 hover:text-white/80 text-xs flex items-center gap-1 transition-colors no-underline"
        >
          See all
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {shown.map(quiz => (
          <Link
            key={quiz.slug}
            href={`/quizzes/${quiz.slug}`}
            className="group block rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 p-4 transition-all duration-200 no-underline"
          >
            {/* Emoji + tag row */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{quiz.emoji}</span>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: `${quiz.tagColor}22`,
                  color: quiz.tagColor,
                  border: `1px solid ${quiz.tagColor}44`,
                }}
              >
                {quiz.tag}
              </span>
            </div>
            {/* Title */}
            <h3 className="text-white font-display font-semibold text-sm leading-snug mb-1.5 group-hover:text-white/90">
              {quiz.title}
            </h3>
            {/* Description */}
            <p className="text-white/45 text-xs leading-relaxed line-clamp-2">
              {quiz.desc}
            </p>
            {/* CTA arrow */}
            <div className="mt-3 flex items-center gap-1 text-white/30 group-hover:text-white/60 text-xs transition-colors">
              Take quiz
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
