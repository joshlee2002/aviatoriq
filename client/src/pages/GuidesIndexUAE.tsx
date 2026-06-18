import { useEffect } from "react";
import { Link } from "wouter";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { ArrowRight, Clock, ChevronRight, BookOpen, Zap } from "lucide-react";

const guides = [
  // Getting Started
  { title: "How to Become a Pilot in the UAE", description: "The complete 2026 guide to GCAA licences, training costs, and the Emirates, Etihad, and Air Arabia cadet pathways.", href: "/uae/guides/how-to-become-a-pilot-uae", time: "10 min read", category: "Getting Started", emoji: "🛫" },
  { title: "UAE Pilot Shortage 2026", description: "The real state of the UAE pilot shortage — data, causes, and what it means for your career timeline.", href: "/uae/guides/uae-pilot-shortage", time: "7 min read", category: "Getting Started", emoji: "📊" },
  { title: "UAE Pilot Lifestyle", description: "What life as a UAE airline pilot actually looks like — rosters, tax-free salary, accommodation, and expat life.", href: "/uae/guides/uae-pilot-lifestyle", time: "7 min read", category: "Getting Started", emoji: "🌅" },

  // Medical
  { title: "UAE GCAA Class 1 Medical", description: "GCAA Class 1 medical requirements, what the AME examines, common disqualifiers, and how to prepare.", href: "/uae/guides/uae-medical-class-1", time: "7 min read", category: "Medical", emoji: "🩺" },

  // Costs & Finance
  { title: "UAE Pilot Training Costs 2026", description: "Real cost breakdown for UAE pilot training — GCAA PPL to ATPL, hour building, and type ratings.", href: "/uae/guides/uae-pilot-training-costs", time: "9 min read", category: "Costs & Finance", emoji: "💰" },

  // Career
  { title: "UAE Pilot Salary 2026", description: "Real salary figures for UAE first officers and captains at Emirates, Etihad, Air Arabia, and flydubai.", href: "/uae/guides/uae-pilot-salary-2026", time: "9 min read", category: "Career", emoji: "💵" },

  // Cadet Programmes
  { title: "Emirates Cadet Pilot Program", description: "Emirates' cadet programme — how it works, selection, training at ECAS, and the guaranteed FO pathway.", href: "/uae/guides/emirates-cadet-pilot-program", time: "10 min read", category: "Cadet Programmes", emoji: "🇦🇪" },
  { title: "Etihad Cadet Pilot Program", description: "Etihad's cadet pathway — how it works, selection, training, and career prospects.", href: "/uae/guides/etihad-cadet-pilot-program", time: "9 min read", category: "Cadet Programmes", emoji: "🟤" },
  { title: "Air Arabia Cadet Program", description: "Air Arabia's cadet programme — how it works, costs, selection, and the regional-to-mainline pathway.", href: "/uae/guides/air-arabia-cadet-program", time: "8 min read", category: "Cadet Programmes", emoji: "🔴" },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Getting Started": { bg: "oklch(0.45 0.18 240 / 0.12)", text: "oklch(0.7 0.18 240)", border: "oklch(0.45 0.18 240 / 0.25)" },
  "Costs & Finance": { bg: "oklch(0.72 0.18 65 / 0.12)", text: "oklch(0.85 0.15 65)", border: "oklch(0.72 0.18 65 / 0.25)" },
  "Training Routes": { bg: "oklch(0.6 0.18 200 / 0.12)", text: "oklch(0.75 0.15 200)", border: "oklch(0.6 0.18 200 / 0.25)" },
  "Medical": { bg: "oklch(0.55 0.18 145 / 0.12)", text: "oklch(0.7 0.18 145)", border: "oklch(0.55 0.18 145 / 0.25)" },
  "Career": { bg: "oklch(0.65 0.2 300 / 0.12)", text: "oklch(0.78 0.18 300)", border: "oklch(0.65 0.2 300 / 0.25)" },
  "Cadet Programmes": { bg: "oklch(0.55 0.2 145 / 0.12)", text: "oklch(0.72 0.18 145)", border: "oklch(0.55 0.2 145 / 0.25)" },
};

const surface = "oklch(0.14 0.08 250)";
const borderStyle = "oklch(1 0 0 / 0.08)";
const borderHover = "oklch(1 0 0 / 0.18)";
const muted = "oklch(0.55 0.04 240)";
const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

export default function GuidesIndexUAE() {
  useEffect(() => { document.title = "UAE Pilot Training Guides 2026 – AviatorIQ"; }, []);
  const categories = Array.from(new Set(guides.map((g) => g.category)));

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.10 0.08 252)" }}>
      <PublicNav />
      <main className="flex-1">
        <div className="relative overflow-hidden py-10 md:py-16" style={{ background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
          <div className="container max-w-3xl text-center relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5" style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}>
              <BookOpen className="w-3 h-3" />
              🇦🇪 UAE Guides
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
              UAE Pilot Training Guides
            </h1>
            <p className="text-base md:text-lg mb-5" style={{ color: "oklch(0.65 0.04 240)" }}>
              GCAA licences, training costs, tax-free salary data, and cadet programmes at Emirates, Etihad, and Air Arabia. Updated for 2026.
            </p>
            <Link href="/quiz" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient, boxShadow: "0 0 24px oklch(0.72 0.18 65 / 0.3)" }}>
              <Zap className="w-4 h-4" />
              Take the free assessment
            </Link>
          </div>
        </div>

        <div className="px-4 pt-4 pb-0" style={{ background: "oklch(0.11 0.08 252)" }}>
          <div className="container max-w-4xl">
            <p className="text-xs" style={{ color: muted }}>
              <Link href="/guides" className="hover:text-white no-underline transition-colors" style={{ color: muted }}>All Guides</Link>
              {" › "}
              <span style={{ color: "oklch(0.7 0.04 240)" }}>UAE</span>
            </p>
          </div>
        </div>

        <div className="py-6 md:py-8 px-4" style={{ background: "oklch(0.11 0.08 252)" }}>
          <div className="container max-w-4xl">
            {categories.map((cat) => {
              const catColor = categoryColors[cat] ?? categoryColors["Getting Started"];
              return (
                <div key={cat} className="mb-8 md:mb-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider" style={{ background: catColor.bg, color: catColor.text, border: `1px solid ${catColor.border}` }}>{cat}</span>
                    <div className="flex-1 h-px" style={{ background: borderStyle }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {guides.filter((g) => g.category === cat).map((guide) => (
                      <Link key={guide.href} href={guide.href} className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-200 no-underline" style={{ background: surface, border: `1px solid ${borderStyle}` }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${borderHover}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${borderStyle}`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                        <span className="text-2xl flex-shrink-0 mt-0.5">{guide.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-bold text-white/90 group-hover:text-white transition-colors text-sm leading-snug mb-1">{guide.title}</h3>
                          <p className="text-xs leading-relaxed mb-3" style={{ color: muted }}>{guide.description}</p>
                          <div className="flex items-center gap-1.5 text-xs" style={{ color: "oklch(0.45 0.04 240)" }}><Clock className="w-3 h-3" />{guide.time}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" style={{ color: "oklch(0.4 0.04 240)" }} />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
            {/* More guides notice */}
            <div className="p-4 rounded-xl mb-4 flex items-start gap-3" style={{ background: "oklch(0.45 0.18 240 / 0.08)", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}>
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="oklch(0.65 0.18 240)" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              <p className="text-sm" style={{ color: "oklch(0.65 0.04 240)" }}><strong className="text-white/70">More UAE & Middle East guides coming.</strong> We are actively expanding our UAE & Middle East content. Check back soon, or take the free assessment to get a personalised roadmap now.</p>
            </div>
            <div className="p-5 md:p-8 rounded-2xl text-center mt-4" style={{ background: "linear-gradient(135deg, oklch(0.14 0.12 255), oklch(0.18 0.14 248))", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}>
              <h3 className="font-display font-bold text-xl text-white mb-2">Ready to take the next step?</h3>
              <p className="text-sm mb-5" style={{ color: muted }}>Take the free 5-minute assessment and get a personalised pilot training roadmap.</p>
              <Link href="/quiz" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient, boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.3)" }}>
                Get your free roadmap <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
