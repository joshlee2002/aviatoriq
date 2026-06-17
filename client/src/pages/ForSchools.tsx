import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  CheckCircle2,
  XCircle,
  Users,
  BarChart3,
  Flame,
  Star,
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Check,
  Mail,
  ChevronDown,
  ChevronUp,
  Globe,
} from "lucide-react";

// ─── Schema ───────────────────────────────────────────────────────────────────
const schema = z.object({
  schoolName: z.string().min(2, "School name is required"),
  country: z.string().optional(),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email required"),
  website: z.string().optional(),
  coursesOffered: z.string().optional(),
  financeAvailable: z.boolean().optional(),
  interestedInLeads: z.boolean().optional(),
  notes: z.string().optional(),
  selectedTier: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

// ─── Pricing tiers ────────────────────────────────────────────────────────────
const tiers = [
  {
    id: "founding",
    name: "Founding Partner",
    price: "Free",
    period: "for 3 months",
    description: "Join our founding cohort. Get full Featured access at no cost while we build our audience together.",
    highlight: true,
    badge: "Limited — 10 schools only",
    features: [
      "Full Featured listing in the flight school directory",
      "Receive lead introduction requests — no charge",
      "Full lead profile on each introduction (score, budget, goal, timeline)",
      "Explicit consent confirmed on every lead",
      "Founding Partner badge on your school profile",
      "Input into AviatorIQ product roadmap",
      "First access to Premium features when launched",
    ],
    notIncluded: [
      "Real-time lead notifications (Premium only)",
    ],
    cta: "Apply as Founding Partner",
  },
  {
    id: "basic",
    name: "Basic Listing",
    price: "£149",
    period: "/month",
    description: "Get discovered by aspiring pilots searching for UK flight schools.",
    highlight: false,
    badge: null,
    features: [
      "Standard listing in the flight school directory",
      "School profile: name, location, courses, website",
      "Matched to relevant candidates by route & country",
      "AviatorIQ badge for your website",
      "Monthly performance report (impressions, clicks)",
    ],
    notIncluded: [
      "Lead introductions",
      "Featured placement",
      "Real-time lead notifications",
    ],
    cta: "Apply for Basic",
  },
  {
    id: "featured",
    name: "Featured",
    price: "£349",
    period: "/month",
    description: "Stand out in the directory and receive introduction requests from matched candidates.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Basic",
      "Featured placement — top of matched results",
      "Receive lead introduction requests",
      "Full lead profile on each introduction (score, budget, goal, timeline)",
      "Explicit consent confirmed on every lead",
      "Monthly lead summary report",
    ],
    notIncluded: [
      "Real-time lead notifications",
    ],
    cta: "Apply for Featured",
  },
  {
    id: "premium",
    name: "Premium",
    price: "£699",
    period: "/month",
    description: "Maximum visibility and instant notification on every Flight Ready lead that matches your school.",
    highlight: false,
    badge: "Best for Growth",
    features: [
      "Everything in Featured",
      "Real-time email notification on every new Flight Ready lead",
      "Priority placement above all other schools",
      "Dedicated account review call (quarterly)",
      "Co-branded content opportunity (guide feature, case study)",
      "Early access to new AviatorIQ tools and data",
    ],
    notIncluded: [],
    cta: "Apply for Premium",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How are leads qualified?",
    a: "Every lead completes a 5-minute Career Assessment covering their goal, budget, timeline, medical status, and biggest barrier. We score them 0–100 and only pass introductions from candidates who have explicitly consented to hear from a school.",
  },
  {
    q: "What does an introduction look like?",
    a: "You receive the candidate's full profile: name, email, AviatorIQ score, training goal, budget range, preferred start date, and their biggest stated barrier. You contact them directly — there's no middleman.",
  },
  {
    q: "How many leads can I expect per month?",
    a: "Volume depends on your school's location, courses, and how well your profile matches incoming candidates. Featured and Premium schools typically receive 5–20 introduction requests per month. We'll give you a realistic estimate based on your profile before you commit.",
  },
  {
    q: "Can I list multiple campuses or locations?",
    a: "Yes. Each campus can have its own profile and be matched independently. Contact us to discuss multi-campus pricing.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "No. All plans are month-to-month. You can cancel at any time with 30 days' notice.",
  },
  {
    q: "What countries do you cover?",
    a: "We currently have strong coverage in the UK and US, with growing audiences in Australia, Canada, and Europe. UK schools are matched to UK candidates; US schools to US candidates.",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "4,200+", label: "Assessments completed" },
  { value: "73%", label: "Candidates aged 18–30" },
  { value: "£85k", label: "Average stated budget" },
  { value: "68%", label: "Ready within 12 months" },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer"
      style={{ background: "oklch(0.13 0.06 250)", border: "1px solid oklch(1 0 0 / 0.08)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-4 gap-4">
        <span className="text-sm font-semibold text-white/90">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.65 0.18 240)" }} />
        ) : (
          <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.04 240)" }} />
        )}
      </div>
      {open && (
        <div className="px-6 pb-4 text-sm leading-relaxed" style={{ color: "oklch(0.65 0.04 240)", borderTop: "1px solid oklch(1 0 0 / 0.06)" }}>
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ForSchools() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const mutation = trpc.partner.joinWaitlist.useMutation();

  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { financeAvailable: false, interestedInLeads: true },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await mutation.mutateAsync({
        ...data,
        notes: selectedTier ? `Tier: ${selectedTier}. ${data.notes ?? ""}`.trim() : data.notes,
      });
      setSubmitted(true);
      toast.success("Application received! We'll be in touch within 48 hours.");
    } catch {
      toast.error("Something went wrong. Please try again or email hello@aviatoriq.com");
    }
  };

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    setValue("selectedTier", tierId);
    // Scroll to form
    setTimeout(() => {
      document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const bg = "oklch(0.09 0.06 250)";
  const card = "oklch(0.13 0.07 250)";
  const border = "oklch(1 0 0 / 0.08)";
  const brandGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";
  const blueGradient = "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.55 0.18 200))";

  return (
    <div style={{ background: bg, minHeight: "100vh", color: "white" }}>
      <SEO
        title="Partner With AviatorIQ — For Flight Schools"
        description="Reach qualified, pre-assessed aspiring pilots. AviatorIQ matches candidates to flight schools based on budget, goal, and readiness. Apply for a listing today."
        canonical="/for-schools"
      />
      <PublicNav />

      {/* ── Hero ── */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.45 0.18 240 / 0.12) 0%, transparent 70%)",
          }}
        />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ background: "oklch(0.45 0.18 240 / 0.15)", border: "1px solid oklch(0.45 0.18 240 / 0.3)", color: "oklch(0.7 0.18 240)" }}
            >
              <Building2 className="w-3.5 h-3.5" />
              For Flight Schools
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Reach pilots who are{" "}
              <span style={{ background: brandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                ready to train
              </span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "oklch(0.65 0.04 240)" }}>
              We're onboarding our first 10 founding flight school partners — free for 3 months, no contract. Every candidate has completed a detailed Career Assessment scored on readiness, finance, medical, and career clarity. You only hear from pilots who match your school and have explicitly asked to be contacted.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all"
                style={{ background: brandGradient, boxShadow: "0 0 24px oklch(0.72 0.18 65 / 0.3)" }}
              >
                <Zap className="w-4 h-4" />
                View Pricing
              </button>
              <button
                onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
                style={{ color: "white", border: "1px solid oklch(1 0 0 / 0.15)", background: "oklch(1 0 0 / 0.05)" }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-10" style={{ borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-display font-bold mb-1" style={{ background: brandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why AviatorIQ ── */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-display font-bold mb-4">Why partner with AviatorIQ?</h2>
            <p className="text-base" style={{ color: "oklch(0.6 0.04 240)" }}>
              Unlike job boards or generic directories, every candidate has been pre-qualified before they ever see your school.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Flame className="w-5 h-5" />,
                title: "Pre-qualified candidates",
                desc: "Every lead has completed a 5-minute Career Assessment. You see their AviatorIQ score, budget, goal, and timeline before you respond.",
                color: "oklch(0.72 0.18 65)",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Explicit consent on every lead",
                desc: "Candidates tick a box to request an introduction to a specific school. No cold outreach. No GDPR headaches.",
                color: "oklch(0.55 0.18 160)",
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Data you can act on",
                desc: "Monthly reports show impressions, profile views, introduction requests, and conversion rates — so you know exactly what's working.",
                color: "oklch(0.55 0.18 240)",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Matched by route & location",
                desc: "A candidate looking for Integrated ATPL in the UK only sees UK integrated schools. No wasted introductions.",
                color: "oklch(0.65 0.18 300)",
              },
              {
                icon: <Star className="w-5 h-5" />,
                title: "Featured placement",
                desc: "Featured and Premium schools appear at the top of matched results — above all other listings for relevant candidates.",
                color: "oklch(0.72 0.18 65)",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "UK & US coverage",
                desc: "We have separate UK and US platforms with country-specific tools, guides, and school directories. List in one or both.",
                color: "oklch(0.55 0.18 200)",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6"
                style={{ background: card, border: `1px solid ${border}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}20`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.6 0.04 240)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20" style={{ borderTop: `1px solid ${border}` }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ background: "oklch(0.72 0.18 65 / 0.12)", border: "1px solid oklch(0.72 0.18 65 / 0.3)", color: "oklch(0.72 0.18 65)" }}
            >
              Transparent pricing
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Simple, month-to-month plans</h2>
            <p className="text-base" style={{ color: "oklch(0.6 0.04 240)" }}>
              No long-term contracts. Cancel any time with 30 days' notice.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="rounded-2xl p-6 flex flex-col relative"
                style={{
                  background: tier.highlight ? "oklch(0.15 0.09 250)" : card,
                  border: tier.highlight
                    ? "1px solid oklch(0.45 0.18 240 / 0.5)"
                    : `1px solid ${border}`,
                  boxShadow: tier.highlight ? "0 0 40px oklch(0.45 0.18 240 / 0.15)" : "none",
                }}
              >
                {tier.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: tier.highlight ? blueGradient : brandGradient,
                      color: "white",
                    }}
                  >
                    {tier.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-display font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-sm mb-4" style={{ color: "oklch(0.6 0.04 240)" }}>{tier.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-white">{tier.price}</span>
                    <span className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.18 160)" }} />
                      <span style={{ color: "oklch(0.75 0.04 240)" }}>{f}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.45 0.04 240)" }} />
                      <span style={{ color: "oklch(0.45 0.04 240)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleTierSelect(tier.id)}
                  className="w-full py-3 rounded-xl text-sm font-bold transition-all"
                  style={
                    tier.highlight
                      ? { background: blueGradient, color: "white", boxShadow: "0 0 20px oklch(0.45 0.18 240 / 0.3)" }
                      : { background: "oklch(1 0 0 / 0.07)", color: "white", border: `1px solid ${border}` }
                  }
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-8" style={{ color: "oklch(0.5 0.04 240)" }}>
            All prices exclude VAT. Multi-campus discounts available.{" "}
            <a href="mailto:hello@aviatoriq.com" className="underline" style={{ color: "oklch(0.65 0.18 240)" }}>
              Contact us
            </a>{" "}
            for bespoke pricing.
          </p>
        </div>
      </section>

      {/* ── Example lead card ── */}
      <section className="py-16" style={{ borderTop: `1px solid ${border}` }}>
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">What a lead looks like</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.6 0.04 240)" }}>
                When a candidate requests an introduction to your school, you receive their full profile. No guesswork — you know their goal, budget, timeline, and biggest barrier before you pick up the phone.
              </p>
              <ul className="space-y-3">
                {[
                  "AviatorIQ score (0–100) across 5 dimensions",
                  "Training goal and preferred route",
                  "Budget range and funding method",
                  "Preferred start date",
                  "Biggest stated barrier",
                  "Explicit consent to be contacted",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.18 160)" }} />
                    <span style={{ color: "oklch(0.75 0.04 240)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Sample lead card */}
            <div
              className="rounded-2xl p-6"
              style={{ background: card, border: `1px solid ${border}` }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "oklch(0.55 0.04 240)" }}>
                  Example Lead Profile
                </span>
                <span
                  className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "oklch(0.72 0.18 65 / 0.15)", color: "oklch(0.72 0.18 65)" }}
                >
                  <Flame className="w-3 h-3" /> Flight Ready
                </span>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  ["Goal", "Airline Pilot (ATPL)"],
                  ["Route", "Integrated ATPL"],
                  ["Budget", "£80k–£120k"],
                  ["Start", "Within 6 months"],
                  ["Barrier", "Choosing the right school"],
                  ["Funding", "Bank loan + savings"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center py-2" style={{ borderBottom: `1px solid ${border}` }}>
                    <span style={{ color: "oklch(0.55 0.04 240)" }}>{label}</span>
                    <span className="font-semibold text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4" style={{ borderTop: `1px solid ${border}` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "oklch(0.55 0.04 240)" }}>AviatorIQ Score</span>
                  <span className="text-2xl font-display font-bold" style={{ color: "oklch(0.72 0.18 65)" }}>84</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 0.08)" }}>
                  <div className="h-full rounded-full" style={{ width: "84%", background: brandGradient }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ borderTop: `1px solid ${border}` }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-10 text-center">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply-form" className="py-20" style={{ borderTop: `1px solid ${border}` }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-16">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "oklch(0.55 0.18 160 / 0.15)" }}
                >
                  <CheckCircle2 className="w-8 h-8" style={{ color: "oklch(0.55 0.18 160)" }} />
                </div>
                <h2 className="text-2xl font-display font-bold mb-3">Application received</h2>
                <p className="text-base mb-8" style={{ color: "oklch(0.6 0.04 240)" }}>
                  We'll review your application and be in touch within 48 hours. In the meantime, feel free to explore the platform.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: brandGradient }}>
                  Back to AviatorIQ
                </Link>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-display font-bold mb-3">Apply to list your school</h2>
                  <p className="text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                    {selectedTier
                      ? `You've selected the ${tiers.find(t => t.id === selectedTier)?.name} plan. Fill in your details below and we'll be in touch within 48 hours.`
                      : "Fill in your details below. We'll review your application and be in touch within 48 hours."}
                  </p>
                  {selectedTier && (
                    <div
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full text-sm font-semibold"
                      style={{ background: "oklch(0.45 0.18 240 / 0.15)", border: "1px solid oklch(0.45 0.18 240 / 0.3)", color: "oklch(0.7 0.18 240)" }}
                    >
                      <Check className="w-3.5 h-3.5" />
                      {tiers.find(t => t.id === selectedTier)?.name} selected
                      <button
                        type="button"
                        onClick={() => setSelectedTier(null)}
                        className="ml-1 text-xs underline opacity-60 hover:opacity-100"
                      >
                        change
                      </button>
                    </div>
                  )}
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-2xl p-8 space-y-5"
                  style={{ background: card, border: `1px solid ${border}` }}
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-sm font-medium text-white/80 mb-1.5 block">School Name *</Label>
                      <Input
                        {...register("schoolName")}
                        placeholder="Oxford Aviation Academy"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                      {errors.schoolName && <p className="text-xs text-red-400 mt-1">{errors.schoolName.message}</p>}
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-white/80 mb-1.5 block">Country</Label>
                      <Input
                        {...register("country")}
                        placeholder="United Kingdom"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label className="text-sm font-medium text-white/80 mb-1.5 block">Contact Name *</Label>
                      <Input
                        {...register("contactName")}
                        placeholder="Jane Smith"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                      {errors.contactName && <p className="text-xs text-red-400 mt-1">{errors.contactName.message}</p>}
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-white/80 mb-1.5 block">Email Address *</Label>
                      <Input
                        {...register("email")}
                        type="email"
                        placeholder="jane@school.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-white/80 mb-1.5 block">School Website</Label>
                    <Input
                      {...register("website")}
                      placeholder="https://yourschool.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-white/80 mb-1.5 block">Courses Offered</Label>
                    <Input
                      {...register("coursesOffered")}
                      placeholder="Integrated ATPL, Modular CPL, PPL, IR"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-white/80 mb-1.5 block">Anything else you'd like us to know?</Label>
                    <Textarea
                      {...register("notes")}
                      placeholder="E.g. We have 3 campuses, we offer cadet sponsorships, we're EASA-approved..."
                      rows={3}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="financeAvailable"
                      {...register("financeAvailable")}
                      className="mt-0.5 w-4 h-4 rounded accent-[oklch(0.45_0.18_240)]"
                    />
                    <Label htmlFor="financeAvailable" className="text-sm text-white/70 cursor-pointer">
                      We offer finance or payment plans to students
                    </Label>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="interestedInLeads"
                      {...register("interestedInLeads")}
                      defaultChecked
                      className="mt-0.5 w-4 h-4 rounded accent-[oklch(0.45_0.18_240)]"
                    />
                    <Label htmlFor="interestedInLeads" className="text-sm text-white/70 cursor-pointer">
                      I'm interested in receiving introduction requests from matched candidates
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || mutation.isPending}
                    className="w-full py-3 text-sm font-bold rounded-xl text-white"
                    style={{ background: brandGradient, boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.25)" }}
                  >
                    {isSubmitting || mutation.isPending ? "Submitting..." : "Submit Application"}
                  </Button>
                  <p className="text-xs text-center" style={{ color: "oklch(0.5 0.04 240)" }}>
                    By submitting you agree to our{" "}
                    <Link href="/privacy" className="underline" style={{ color: "oklch(0.65 0.18 240)" }}>Privacy Policy</Link>.
                    We'll never share your details with third parties.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16" style={{ borderTop: `1px solid ${border}` }}>
        <div className="container">
          <div
            className="max-w-3xl mx-auto rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, oklch(0.14 0.09 250), oklch(0.16 0.07 240))", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}
          >
            <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: "oklch(0.65 0.18 240)" }} />
            <h2 className="text-2xl font-display font-bold mb-3">Questions before applying?</h2>
            <p className="text-sm mb-6" style={{ color: "oklch(0.6 0.04 240)" }}>
              Email us at{" "}
              <a href="mailto:hello@aviatoriq.com" className="font-semibold underline" style={{ color: "oklch(0.65 0.18 240)" }}>
                hello@aviatoriq.com
              </a>{" "}
              and we'll get back to you within one business day.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all"
                style={{ background: brandGradient }}
              >
                Apply Now
              </button>
              <Link
                href="/schools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white"
                style={{ border: "1px solid oklch(1 0 0 / 0.15)", background: "oklch(1 0 0 / 0.05)" }}
              >
                View the Directory
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
