import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Analytics } from "@/lib/analytics";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Loader2,
  CheckCircle2,
  ArrowRight,
  Flame,
  Thermometer,
  Snowflake,
  MapPin,
  Globe,
  CreditCard,
  GraduationCap,
  Clock,
  AlertTriangle,
  ChevronRight,
  Heart,
  Briefcase,
  Map,
  PoundSterling,
  Plane,
  School,
  FileDown,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FlightSchool {
  id: number;
  name: string;
  country: string | null;
  city: string | null;
  airport: string | null;
  integratedAtpl: boolean | null;
  modularAtpl: boolean | null;
  ppl: boolean | null;
  priceRange: string | null;
  financeAvailable: "yes" | "no" | "unknown" | null;
  website: string | null;
  active: boolean;
}

interface RoadmapData {
  pilotGoalSummary?: string;
  recommendedRoute?: string;
  routeRationale?: string;
  estimatedCostMin?: number;
  estimatedCostMax?: number;
  estimatedDuration?: string;
  readinessLabel?: string;
  readinessExplanation?: string;
  nextSteps?: string[];
  medicalAdvice?: string;
  financeConsiderations?: string;
  schoolTypeRecommendation?: string;
  disclaimer?: string;
}

interface Dimensions {
  readiness: number;
  finance: number;
  medical: number;
  career: number;
  pathway: number;
}

interface DimensionLabels {
  readiness: string;
  finance: string;
  medical: string;
  career: string;
  pathway: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ScoreRing({ score }: { score: number }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 75 ? "#f97316" : score >= 45 ? "#f59e0b" : "#60a5fa";

  return (
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg className="absolute inset-0 -rotate-90" width="144" height="144" viewBox="0 0 144 144">
        <circle cx="72" cy="72" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
        <circle
          cx="72" cy="72" r={radius} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <div className="text-center text-white">
        <div className="text-4xl font-black">{score}</div>
        <div className="text-xs text-white/60">out of 100</div>
      </div>
    </div>
  );
}

function AnimatedBar({ score }: { score: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(score), 400);
    return () => clearTimeout(t);
  }, [score]);
  const color = score >= 70 ? "bg-green-500" : score >= 45 ? "bg-amber-500" : "bg-red-400";
  return (
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div className={`h-full rounded-full transition-all duration-700 ease-out ${color}`} style={{ width: `${width}%` }} />
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  if (category === "Hot") return <span className="badge-hot"><Flame className="w-3 h-3" /> Hot Lead</span>;
  if (category === "Warm") return <span className="badge-warm"><Thermometer className="w-3 h-3" /> Warm Lead</span>;
  return <span className="badge-cold"><Snowflake className="w-3 h-3" /> Early Stage</span>;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Results() {
  const params = useParams<{ leadId: string }>();
  const leadId = parseInt(params.leadId ?? "0", 10);
  const [roadmap, setRoadmap] = useState<RoadmapData | null>(null);
  const [roadmapError, setRoadmapError] = useState(false);
  const [selectedSchoolIds, setSelectedSchoolIds] = useState<number[]>([]);
  const [introSubmitted, setIntroSubmitted] = useState(false);

  const resultQuery = trpc.leads.getResult.useQuery({ leadId }, { enabled: !!leadId });
  const pdfQuery = trpc.leads.getPdfUrl.useQuery({ leadId }, { enabled: !!leadId, refetchInterval: (q) => (!q.state.data?.pdfUrl ? 5000 : false) });
  const roadmapMutation = trpc.leads.generateRoadmap.useMutation({
    onSuccess: (data) => {
      try { setRoadmap(JSON.parse(data.roadmap)); } catch { setRoadmapError(true); }
    },
    onError: () => setRoadmapError(true),
  });
  const requestIntros = trpc.introductions.requestIntroductions.useMutation();

  useEffect(() => {
    if (resultQuery.data && !roadmap && !roadmapMutation.isPending && !roadmapMutation.isSuccess) {
      const cached = resultQuery.data.lead.aiRoadmap;
      if (cached) {
        try { setRoadmap(JSON.parse(cached)); } catch { roadmapMutation.mutate({ leadId }); }
      } else {
        roadmapMutation.mutate({ leadId });
      }
    }
  }, [resultQuery.data]);

  useEffect(() => {
    if (resultQuery.data) Analytics.quizCompleted();
  }, [resultQuery.data]);

  const toggleSchool = (id: number) => {
    setSelectedSchoolIds(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const handleRequestIntros = async () => {
    if (!selectedSchoolIds.length) return;
    try {
      await requestIntros.mutateAsync({ leadId, schoolIds: selectedSchoolIds });
      setIntroSubmitted(true);
      Analytics.contactRequested();
      toast.success("Introduction requests sent! We'll be in touch shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (resultQuery.isLoading || !resultQuery.data) {
    return (
      <div className="min-h-screen flex flex-col">
        <PublicNav />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <Loader2 className="w-10 h-10 animate-spin text-[var(--color-primary)] mx-auto mb-4" />
            <p className="font-semibold text-[var(--color-navy)] mb-1">Calculating your AviatorIQ Score…</p>
            <p className="text-sm text-[var(--color-muted-foreground)]">Analysing your profile and matching training routes.</p>
          </div>
        </main>
        <PublicFooter />
      </div>
    );
  }

  const { lead, matchedSchools } = resultQuery.data;
  const dimensions = (resultQuery.data as unknown as { dimensions?: Dimensions }).dimensions;
  const labels = (resultQuery.data as unknown as { labels?: DimensionLabels }).labels;
  const nextAction = (resultQuery.data as unknown as { nextAction?: string }).nextAction;
  const biggestRisk = (resultQuery.data as unknown as { biggestRisk?: string }).biggestRisk;
  const estimatedCostRange = (resultQuery.data as unknown as { estimatedCostRange?: string }).estimatedCostRange;
  const estimatedTimeline = (resultQuery.data as unknown as { estimatedTimeline?: string }).estimatedTimeline;
  const recommendedRoute = (resultQuery.data as unknown as { recommendedRoute?: string }).recommendedRoute;

  const isGenerating = roadmapMutation.isPending || (!roadmap && !roadmapError);

  const dimensionConfig = [
    { key: "readiness" as const, label: "Readiness", icon: <Clock className="w-4 h-4" />, color: "text-blue-500" },
    { key: "finance" as const, label: "Finance", icon: <PoundSterling className="w-4 h-4" />, color: "text-green-500" },
    { key: "medical" as const, label: "Medical", icon: <Heart className="w-4 h-4" />, color: "text-red-500" },
    { key: "career" as const, label: "Career Clarity", icon: <Briefcase className="w-4 h-4" />, color: "text-purple-500" },
    { key: "pathway" as const, label: "Pathway Match", icon: <Map className="w-4 h-4" />, color: "text-indigo-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PublicNav />
      <main className="flex-1 bg-sky-subtle">

        {/* ── Hero: AviatorIQ Score ── */}
        <div className="bg-hero py-12 px-4">
          <div className="container max-w-3xl">
            <div className="flex flex-col items-center text-center gap-4 animate-fade-in-up">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-cta)]" />
                Assessment complete — your AviatorIQ Score is ready
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
                {lead.fullName}'s Pilot Readiness Report
              </h1>
              <ScoreRing score={lead.leadScore} />
              <div className="flex items-center gap-2">
                <CategoryBadge category={lead.leadCategory} />
              </div>
              <p className="text-white/70 text-sm max-w-md">
                {lead.leadCategory === "Hot"
                  ? "Your profile shows excellent potential. You're well-positioned to start training."
                  : lead.leadCategory === "Warm"
                  ? "You have good foundations. A few areas to strengthen before you begin."
                  : "You're at the beginning of your journey. Let's map out the path forward."}
              </p>
              {/* PDF Download */}
              {pdfQuery.data?.pdfUrl ? (
                <a
                  href={pdfQuery.data.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  Download Your Pilot Blueprint PDF
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white/50 text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating your Blueprint PDF…
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container max-w-3xl py-10 px-4 space-y-6">

          {/* ── Quick summary cards ── */}
          {(recommendedRoute || estimatedCostRange || estimatedTimeline || biggestRisk) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-in-up">
              {[
                { icon: <Plane className="w-4 h-4" />, label: "Recommended Route", value: recommendedRoute },
                { icon: <PoundSterling className="w-4 h-4" />, label: "Estimated Cost", value: estimatedCostRange },
                { icon: <Clock className="w-4 h-4" />, label: "Timeline", value: estimatedTimeline },
                { icon: <AlertTriangle className="w-4 h-4" />, label: "Biggest Risk", value: biggestRisk },
              ].filter(c => c.value).map((item, i) => (
                <div key={i} className="card-base p-4 text-center">
                  <div className="flex justify-center text-[var(--color-primary)] mb-2">{item.icon}</div>
                  <p className="text-xs text-[var(--color-muted-foreground)] mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-[var(--color-navy)] leading-tight">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── 5-Dimension Score Card ── */}
          {dimensions && labels && (
            <div className="card-base p-6 animate-fade-in-up">
              <h2 className="font-display font-bold text-[var(--color-navy)] text-lg mb-1">Your 5-Dimension AviatorIQ Breakdown</h2>
              <p className="text-sm text-[var(--color-muted-foreground)] mb-5">Each dimension is scored 0–100 based on your answers.</p>
              <div className="space-y-4">
                {dimensionConfig.map(({ key, label, icon, color }) => (
                  <div key={key} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={color}>{icon}</span>
                        <span className="text-sm font-semibold text-[var(--color-navy)]">{label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          dimensions[key] >= 70 ? "bg-green-100 text-green-700" :
                          dimensions[key] >= 45 ? "bg-amber-100 text-amber-700" :
                          "bg-red-100 text-red-700"
                        }`}>{labels[key]}</span>
                        <span className="text-sm font-bold text-[var(--color-navy)] w-8 text-right">{dimensions[key]}</span>
                      </div>
                    </div>
                    <AnimatedBar score={dimensions[key]} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Next Action ── */}
          {nextAction && (
            <div className="card-base p-5 border-[var(--color-primary)] bg-[var(--color-primary-light)] animate-fade-in-up flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-1">Your Next Action</p>
                <p className="font-semibold text-[var(--color-navy)]">{nextAction}</p>
              </div>
            </div>
          )}

          {/* ── Matched Schools + Request Introduction ── */}
          <div className="card-base p-6 animate-fade-in-up">
            <h2 className="font-display font-bold text-[var(--color-navy)] text-xl mb-1">Matched Flight Schools</h2>
            <p className="text-sm text-[var(--color-muted-foreground)] mb-5">
              {matchedSchools.length > 0
                ? `We found ${matchedSchools.length} school${matchedSchools.length !== 1 ? "s" : ""} that match your profile. Select up to 3 and request an introduction — we'll make the connection on your behalf.`
                : "We're expanding our school network. Your profile has been saved and we'll notify you when suitable schools are added."}
            </p>

            {matchedSchools.length > 0 ? (
              <>
                <div className="space-y-3 mb-5">
                  {(matchedSchools as FlightSchool[]).map((school) => {
                    const isSelected = selectedSchoolIds.includes(school.id);
                    const isDisabled = !isSelected && selectedSchoolIds.length >= 3;
                    return (
                      <div
                        key={school.id}
                        onClick={() => !introSubmitted && !isDisabled && toggleSchool(school.id)}
                        className={`border rounded-xl p-4 transition-all cursor-pointer ${
                          introSubmitted ? "opacity-60 cursor-default" :
                          isSelected ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] shadow-sm" :
                          isDisabled ? "border-border opacity-50 cursor-not-allowed" :
                          "border-border hover:border-[var(--color-primary)]/50 hover:bg-muted/30"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Checkbox
                            checked={isSelected}
                            disabled={introSubmitted || isDisabled}
                            onCheckedChange={() => !introSubmitted && !isDisabled && toggleSchool(school.id)}
                            className="mt-0.5 flex-shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-display font-semibold text-[var(--color-navy)] text-sm">{school.name}</h3>
                              {school.financeAvailable === "yes" && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Finance available</span>
                              )}
                            </div>
                            <p className="text-xs text-[var(--color-muted-foreground)] mt-0.5 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {[school.city, school.country].filter(Boolean).join(", ")}
                              {school.priceRange && ` · ${school.priceRange}`}
                            </p>
                            <div className="flex gap-1 mt-1.5 flex-wrap">
                              {school.integratedAtpl && <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">Integrated ATPL</span>}
                              {school.modularAtpl && <span className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">Modular ATPL</span>}
                              {school.ppl && <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">PPL</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {!introSubmitted ? (
                  <div className="space-y-3">
                    <p className="text-xs text-[var(--color-muted-foreground)]">
                      {selectedSchoolIds.length === 0
                        ? "Select up to 3 schools above to request introductions."
                        : `${selectedSchoolIds.length} school${selectedSchoolIds.length !== 1 ? "s" : ""} selected. We'll send your qualified profile to them — no cold calls, no spam.`}
                    </p>
                    <Button
                      onClick={handleRequestIntros}
                      disabled={selectedSchoolIds.length === 0 || requestIntros.isPending}
                      className="w-full btn-cta"
                      size="lg"
                    >
                      {requestIntros.isPending ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending requests…</>
                      ) : (
                        <><School className="w-4 h-4 mr-2" /> Request Introductions ({selectedSchoolIds.length})</>
                      )}
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-800 text-sm">Introduction requests sent!</p>
                      <p className="text-xs text-green-700 mt-0.5">We've notified the selected schools. Expect to hear back within 2–3 business days.</p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-6">
                <Globe className="w-8 h-8 text-[var(--color-muted-foreground)] mx-auto mb-3" />
                <p className="font-display font-semibold text-[var(--color-navy)] mb-1">Expanding our school network</p>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  We are still adding schools that match your profile. Your results have been saved.
                </p>
                <Link href="/schools" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] mt-3">
                  Browse all schools <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}
          </div>

          {/* ── Finance nudge ── */}
          {lead.wantsFinanceInfo === "Yes" && (
            <div className="card-base p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <PoundSterling className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-green-900 mb-1">You may qualify for pilot training finance</h3>
                  <p className="text-sm text-green-800 mb-3">
                    Many aspiring pilots fund their training through specialist aviation loans, career development loans, school payment plans, and airline cadet sponsorships.
                  </p>
                  <Link href="/guides/finance-guide" className="inline-flex items-center gap-1 text-sm font-semibold text-green-700">
                    Read the Finance Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ── AI Roadmap ── */}
          {isGenerating ? (
            <div className="card-base p-8 text-center animate-fade-in">
              <Loader2 className="w-8 h-8 animate-spin text-[var(--color-primary)] mx-auto mb-4" />
              <p className="font-display font-semibold text-[var(--color-navy)] mb-1">Generating your personalised roadmap…</p>
              <p className="text-sm text-[var(--color-muted-foreground)]">Our AI is analysing your profile and preparing your training recommendations.</p>
            </div>
          ) : roadmapError ? (
            <div className="card-base p-6 border-amber-200 bg-amber-50">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">Roadmap generation delayed</span>
              </div>
              <p className="text-sm text-amber-600">We were unable to generate your AI roadmap right now. Your results have been saved and we will follow up with you shortly.</p>
            </div>
          ) : roadmap ? (
            <div className="space-y-5">
              {roadmap.pilotGoalSummary && (
                <div className="card-base p-6 animate-fade-in-up">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-display font-bold text-[var(--color-navy)]">Your pilot goal</h3>
                  </div>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">{roadmap.pilotGoalSummary}</p>
                </div>
              )}

              {roadmap.recommendedRoute && (
                <div className="card-base p-6 animate-fade-in-up delay-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-display font-bold text-[var(--color-navy)]">Your best training route</h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-display font-bold text-sm mb-3">
                    {roadmap.recommendedRoute}
                  </div>
                  {roadmap.routeRationale && (
                    <p className="text-[var(--color-muted-foreground)] leading-relaxed">{roadmap.routeRationale}</p>
                  )}
                </div>
              )}

              {(roadmap.estimatedCostMin || roadmap.estimatedDuration) && (
                <div className="card-base p-6 animate-fade-in-up delay-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-display font-bold text-[var(--color-navy)]">Estimated cost & duration</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {roadmap.estimatedCostMin && roadmap.estimatedCostMax && (
                      <div className="p-4 rounded-xl bg-[var(--color-muted)]">
                        <div className="text-xs text-[var(--color-muted-foreground)] mb-1">Estimated cost range</div>
                        <div className="font-display font-bold text-[var(--color-navy)]">
                          £{roadmap.estimatedCostMin.toLocaleString()} – £{roadmap.estimatedCostMax.toLocaleString()}
                        </div>
                      </div>
                    )}
                    {roadmap.estimatedDuration && (
                      <div className="p-4 rounded-xl bg-[var(--color-muted)]">
                        <div className="text-xs text-[var(--color-muted-foreground)] mb-1">Estimated duration</div>
                        <div className="font-display font-bold text-[var(--color-navy)]">{roadmap.estimatedDuration}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {roadmap.nextSteps && roadmap.nextSteps.length > 0 && (
                <div className="card-base p-6 animate-fade-in-up delay-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-display font-bold text-[var(--color-navy)]">What to do next</h3>
                  </div>
                  <ol className="space-y-3">
                    {roadmap.nextSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-[var(--color-foreground)] leading-relaxed text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-fade-in-up delay-400">
                {roadmap.medicalAdvice && (
                  <div className="card-base p-5">
                    <h4 className="font-display font-bold text-[var(--color-navy)] text-sm mb-2">Medical considerations</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{roadmap.medicalAdvice}</p>
                    <Link href="/guides/class-1-medical" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] mt-2 no-underline">
                      Class 1 Medical guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
                {roadmap.financeConsiderations && (
                  <div className="card-base p-5">
                    <h4 className="font-display font-bold text-[var(--color-navy)] text-sm mb-2">Finance considerations</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">{roadmap.financeConsiderations}</p>
                    <Link href="/guides/finance-guide" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] mt-2 no-underline">
                      Finance guide <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              {roadmap.disclaimer && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 animate-fade-in-up">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 leading-relaxed">{roadmap.disclaimer}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          {/* ── Final CTA ── */}
          <div className="card-base p-6 bg-[var(--color-navy)] text-white text-center">
            <Clock className="w-8 h-8 text-[var(--color-cta)] mx-auto mb-3" />
            <h3 className="font-display font-bold text-xl mb-2">Ready to take the next step?</h3>
            <p className="text-white/70 text-sm mb-5">Browse all flight schools in our directory or use the cost calculator to plan your budget.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/schools" className="btn-cta text-sm">
                Browse all schools <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/calculator" className="btn-outline text-sm border-white/30 text-white hover:bg-white/10">
                Cost calculator
              </Link>
            </div>
          </div>

        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
