import { useEffect } from "react";
import { Link } from "wouter";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { ArrowRight, Clock, ChevronRight, BookOpen, Zap } from "lucide-react";

const guides = [
  // Getting Started
  { title: "South Africa Pilot Shortage 2026", description: "The real state of the South African pilot shortage — data, causes, and what it means for your career timeline.", href: "/south-africa/guides/south-africa-pilot-shortage", time: "7 min read", category: "Getting Started", emoji: "📊" },

  // Training Routes
  { title: "SA ATPL Requirements", description: "Full breakdown of SACAA ATPL requirements — hours, ratings, knowledge tests, and checkrides.", href: "/south-africa/guides/sa-atpl-requirements", time: "8 min read", category: "Training Routes", emoji: "📋" },
  { title: "SA CPL Requirements", description: "SACAA CPL requirements, what jobs it unlocks, and how it fits into the airline career pathway.", href: "/south-africa/guides/sacpl-requirements", time: "7 min read", category: "Training Routes", emoji: "📋" },
  { title: "Best Flight Schools South Africa 2026", description: "Data-driven comparison of South Africa's top flight schools — outcomes, costs, fleet, and student reviews.", href: "/south-africa/guides/best-flight-schools-south-africa", time: "10 min read", category: "Training Routes", emoji: "🏫" },
  { title: "Military to Airlines in South Africa", description: "How South African military pilots transition to civilian airlines — SAAF pathways, credits, and timelines.", href: "/south-africa/guides/military-to-airlines", time: "8 min read", category: "Training Routes", emoji: "🪖" },

  // Medical
  { title: "SACAA Class 1 Medical Certificate", description: "SACAA Class 1 medical requirements, what the DAME examines, common disqualifiers, and how to prepare.", href: "/south-africa/guides/sacaa-class-1-medical-certificate", time: "7 min read", category: "Medical", emoji: "🩺" },

  // Costs & Finance
  { title: "South Africa Pilot Training Costs 2026", description: "Real cost breakdown for South African pilot training — SACAA PPL to ATPL, hour building, and type ratings.", href: "/south-africa/guides/pilot-training-costs", time: "9 min read", category: "Costs & Finance", emoji: "💰" },

  // Career
  { title: "South Africa Pilot Salary 2026", description: "Real salary figures for South African first officers and captains at SAA, FlySafair, Airlink, and regional carriers.", href: "/south-africa/guides/pilot-salary-2026", time: "9 min read", category: "Career", emoji: "💵" },
  { title: "South Africa Regional Airlines Guide", description: "Regional airline careers in South Africa — Airlink, CemAir, and the pathway to the majors.", href: "/south-africa/guides/south-africa-regional-airlines-pilot-training", time: "7 min read", category: "Career", emoji: "🗺️" },

  // Cadet Programmes
  { title: "South Africa Cadet Programs 2026", description: "Every South African airline cadet and pathway program — eligibility, costs, and how to apply.", href: "/south-africa/guides/south-africa-cadet-programs", time: "8 min read", category: "Cadet Programmes", emoji: "🎓" },
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

export default function GuidesIndexSouthAfrica() {
  useEffect(() => { document.title = "South Africa Pilot Training Guides 2026 – AviatorIQ"; }, []);
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
              🇿🇦 South Africa Guides
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
              South Africa Pilot Training Guides
            </h1>
            <p className="text-base md:text-lg mb-5" style={{ color: "oklch(0.65 0.04 240)" }}>
              SACAA licences, flight school costs, salary data, and cadet programmes — everything for aspiring South African pilots. Updated for 2026.
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
              <span style={{ color: "oklch(0.7 0.04 240)" }}>South Africa</span>
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
