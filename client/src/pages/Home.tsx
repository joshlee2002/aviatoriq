import { Link } from "wouter";
import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import EmailCapture from "@/components/EmailCapture";
import { trpc } from "@/lib/trpc";
import { useCountry } from "@/contexts/CountryContext";
import {
  Plane,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  TrendingUp,
  BookOpen,
  Calculator,
  Building2,
  ChevronRight,
  Shield,
  Clock,
  Target,
  Zap,
  Activity,
  MapPin,
  Stethoscope,
  GraduationCap,
  Compass,
  BarChart3,
  Lock,
  Award,
  BadgeCheck,
  Quote,
  Briefcase,
  BrainCircuit,
  MonitorPlay,
} from "lucide-react";

// ─── Per-country config ─────────────────────────────────────────────────────
interface HomeCountryConfig {
  flag: string;
  label: string;
  regulator: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSub: string;
  roadmapHref: string;
  heroBadges: string[];
  sampleCandidate: { initials: string; name: string; route: string; budget: string; timeline: string; barrier: string };
  sampleSchools: { name: string; match: string; location: string }[];
  featuredGuides: { title: string; href: string; time: string; icon: string }[];
  guidesIndexHref: string;
  guidesIndexLabel: string;
  emailSource: string;
  emailHeadline: string;
  emailSubtext: string;
  financeGuideHref: string;
}

const HOME_CONFIGS: Record<string, HomeCountryConfig> = {
  uk: {
    flag: "🇬🇧", label: "United Kingdom", regulator: "CAA",
    seoTitle: "AviatorIQ – What's Really Stopping You Becoming A Pilot?",
    seoDescription: "Find your best route into UK pilot training. Take the free AviatorIQ career assessment and get a personalised pilot training roadmap matched to real UK flight schools.",
    heroHeadline: "Could You Actually Become A Pilot?",
    heroSub: "Discover your training route, costs, challenges and matched UK flight schools in under 5 minutes. Free, no registration required.",
    roadmapHref: "/roadmap",
    heroBadges: ["Free · No registration", "Real 2026 UK costs", "Matched UK flight schools"],
    sampleCandidate: { initials: "JM", name: "Jamie, 24 — London", route: "Integrated ATPL", budget: "£90k–£130k", timeline: "Within 12 months", barrier: "Finance" },
    sampleSchools: [
      { name: "Oxford Aviation Academy", match: "98%", location: "Oxford, UK" },
      { name: "Acron Aviation Academy", match: "94%", location: "Bournemouth, UK" },
      { name: "FTE Jerez", match: "91%", location: "Jerez, Spain" },
    ],
    featuredGuides: [
      { title: "How to become a pilot in the UK", href: "/guides/how-to-become-a-pilot", time: "8 min read", icon: "🛫" },
      { title: "Integrated vs Modular training", href: "/guides/integrated-vs-modular", time: "6 min read", icon: "⚖️" },
      { title: "What is a CAA Class 1 Medical?", href: "/guides/class-1-medical", time: "5 min read", icon: "🩺" },
      { title: "UK airline pilot salary 2026", href: "/guides/uk-pilot-salary-2026", time: "7 min read", icon: "💰" },
      { title: "How long does training take?", href: "/guides/training-timeline", time: "5 min read", icon: "📅" },
      { title: "How to finance pilot training", href: "/guides/how-to-finance-pilot-training-uk", time: "6 min read", icon: "🏦" },
    ],
    guidesIndexHref: "/guides", guidesIndexLabel: "All UK guides →",
    emailSource: "global_homepage",
    emailHeadline: "Get the free UK Pilot Training Guide 2026",
    emailSubtext: "Everything you need to know about becoming a pilot in the UK — CAA costs, routes, medical requirements, and how to get your first airline job.",
    financeGuideHref: "/guides/how-to-finance-pilot-training-uk",
  },
  us: {
    flag: "🇺🇸", label: "United States", regulator: "FAA",
    seoTitle: "AviatorIQ US — FAA Pilot Training Guidance, Costs & Flight Schools 2026",
    seoDescription: "The most personalised pilot training guidance platform for the US. Part 141 vs 61, FAA medical requirements, ATP costs, airline cadet programmes, and the best US flight schools.",
    heroHeadline: "Could You Actually Become A Pilot?",
    heroSub: "Discover your FAA training route, costs, challenges and matched US flight schools in under 5 minutes. Free, no registration required.",
    roadmapHref: "/roadmap",
    heroBadges: ["Free · No registration", "Real 2026 FAA costs", "Matched US flight schools"],
    sampleCandidate: { initials: "AJ", name: "Alex, 26 — Dallas, TX", route: "Part 141 Accelerated", budget: "$80k–$120k", timeline: "Within 12 months", barrier: "Finance" },
    sampleSchools: [
      { name: "ATP Flight School", match: "97%", location: "Dallas, TX" },
      { name: "Embry-Riddle Aeronautical", match: "93%", location: "Daytona Beach, FL" },
      { name: "Sierra Academy", match: "89%", location: "Oakland, CA" },
    ],
    featuredGuides: [
      { title: "How to become a pilot in the US", href: "/us/guides/how-to-become-a-pilot", time: "8 min read", icon: "🛫" },
      { title: "Part 141 vs Part 61 training", href: "/us/guides/part-61-vs-141", time: "6 min read", icon: "⚖️" },
      { title: "FAA medical requirements", href: "/us/guides/faa-medical-requirements", time: "5 min read", icon: "🩺" },
      { title: "US airline pilot salary 2026", href: "/us/guides/airline-pilot-salary-usa", time: "7 min read", icon: "💰" },
      { title: "GI Bill® flight training", href: "/us/guides/gi-bill-flight-training", time: "5 min read", icon: "🎖️" },
      { title: "How to fund pilot training in the US", href: "/us/guides/how-to-fund-pilot-training-usa", time: "6 min read", icon: "🏦" },
    ],
    guidesIndexHref: "/guides", guidesIndexLabel: "All US guides →",
    emailSource: "us_homepage",
    emailHeadline: "Get the free US Pilot Training Guide 2026",
    emailSubtext: "Everything you need to know about becoming a pilot in the US — FAA costs, routes, medical, and airline cadet programmes.",
    financeGuideHref: "/us/guides/how-to-fund-pilot-training-usa",
  },
  australia: {
    flag: "🇦🇺", label: "Australia", regulator: "CASA",
    seoTitle: "AviatorIQ Australia — CASA Pilot Training Guidance & Costs 2026",
    seoDescription: "Personalised pilot training guidance for Australia. CASA CPL/ATPL requirements, medical standards, training costs, and matched Australian flight schools.",
    heroHeadline: "Could You Actually Become A Pilot?",
    heroSub: "Discover your CASA training route, costs, challenges and matched Australian flight schools in under 5 minutes. Free, no registration required.",
    roadmapHref: "/roadmap",
    heroBadges: ["Free · No registration", "Real 2026 CASA costs", "Matched Australian schools"],
    sampleCandidate: { initials: "SB", name: "Sam, 23 — Sydney", route: "Integrated ATPL", budget: "A$100k–A$150k", timeline: "Within 12 months", barrier: "Finance" },
    sampleSchools: [
      { name: "Qantas Group Pilot Academy", match: "96%", location: "Toowoomba, QLD" },
      { name: "CASA Aviation Academy", match: "92%", location: "Melbourne, VIC" },
      { name: "Flight Training Adelaide", match: "88%", location: "Adelaide, SA" },
    ],
    featuredGuides: [
      { title: "How to become a pilot in Australia", href: "/guides/how-to-become-a-pilot-australia", time: "8 min read", icon: "🛫" },
      { title: "CASA CPL requirements", href: "/australia/guides/casa-cpl-requirements", time: "6 min read", icon: "📋" },
      { title: "CASA Class 1 Medical", href: "/australia/guides/casa-medical-class-1", time: "5 min read", icon: "🩺" },
      { title: "Australia pilot salary 2026", href: "/australia/guides/australia-pilot-salary-2026", time: "7 min read", icon: "💰" },
      { title: "Qantas Group Pilot Academy", href: "/australia/guides/qantas-group-pilot-academy", time: "6 min read", icon: "✈️" },
      { title: "Australia pilot training costs", href: "/australia/guides/australia-pilot-training-costs", time: "6 min read", icon: "🏦" },
    ],
    guidesIndexHref: "/guides", guidesIndexLabel: "All Australia guides →",
    emailSource: "australia_homepage",
    emailHeadline: "Get the free Australia Pilot Training Guide 2026",
    emailSubtext: "CASA requirements, training costs, cadet programmes, and how to get your first airline job in Australia.",
    financeGuideHref: "/australia/guides/australia-pilot-training-costs",
  },
  canada: {
    flag: "🇨🇦", label: "Canada", regulator: "Transport Canada",
    seoTitle: "AviatorIQ Canada — Transport Canada Pilot Training Guidance & Costs 2026",
    seoDescription: "Personalised pilot training guidance for Canada. Transport Canada CPL/ATPL requirements, medical standards, training costs, and matched Canadian flight schools.",
    heroHeadline: "Could You Actually Become A Pilot?",
    heroSub: "Discover your Transport Canada training route, costs, challenges and matched Canadian flight schools in under 5 minutes. Free, no registration required.",
    roadmapHref: "/roadmap",
    heroBadges: ["Free · No registration", "Real 2026 TC costs", "Matched Canadian schools"],
    sampleCandidate: { initials: "MC", name: "Mike, 25 — Toronto", route: "Integrated ATPL", budget: "C$90k–C$140k", timeline: "Within 12 months", barrier: "Finance" },
    sampleSchools: [
      { name: "Seneca College Aviation", match: "95%", location: "Toronto, ON" },
      { name: "Coastal Pacific Aviation", match: "91%", location: "Kelowna, BC" },
      { name: "Harv's Air", match: "87%", location: "Steinbach, MB" },
    ],
    featuredGuides: [
      { title: "How to become a pilot in Canada", href: "/guides/how-to-become-a-pilot-canada", time: "8 min read", icon: "🛫" },
      { title: "Transport Canada CPL requirements", href: "/canada/guides/transport-canada-cpl-requirements", time: "6 min read", icon: "📋" },
      { title: "TC Class 1 Medical", href: "/canada/guides/tc-medical-class-1", time: "5 min read", icon: "🩺" },
      { title: "Canada pilot salary 2026", href: "/canada/guides/canada-pilot-salary-2026", time: "7 min read", icon: "💰" },
      { title: "Air Canada Jazz cadet programme", href: "/canada/guides/air-canada-jazz-cadet", time: "6 min read", icon: "✈️" },
      { title: "Canada pilot training costs", href: "/canada/guides/canada-pilot-training-costs", time: "6 min read", icon: "🏦" },
    ],
    guidesIndexHref: "/guides", guidesIndexLabel: "All Canada guides →",
    emailSource: "canada_homepage",
    emailHeadline: "Get the free Canada Pilot Training Guide 2026",
    emailSubtext: "Transport Canada requirements, training costs, cadet programmes, and how to get your first airline job in Canada.",
    financeGuideHref: "/canada/guides/canada-pilot-training-costs",
  },
  europe: {
    flag: "🇪🇺", label: "Europe", regulator: "EASA",
    seoTitle: "AviatorIQ Europe — EASA Pilot Training Guidance & Costs 2026",
    seoDescription: "Personalised pilot training guidance for Europe. EASA CPL/ATPL requirements, medical standards, training costs, and matched European flight schools.",
    heroHeadline: "Could You Actually Become A Pilot?",
    heroSub: "Discover your EASA training route, costs, challenges and matched European flight schools in under 5 minutes. Free, no registration required.",
    roadmapHref: "/roadmap",
    heroBadges: ["Free · No registration", "Real 2026 EASA costs", "Matched European schools"],
    sampleCandidate: { initials: "LP", name: "Lukas, 22 — Berlin", route: "Integrated ATPL", budget: "€80k–€120k", timeline: "Within 12 months", barrier: "Finance" },
    sampleSchools: [
      { name: "Lufthansa European Flight Academy", match: "96%", location: "Bremen, Germany" },
      { name: "FTE Jerez", match: "92%", location: "Jerez, Spain" },
      { name: "CAE Oxford (Amsterdam)", match: "88%", location: "Amsterdam, NL" },
    ],
    featuredGuides: [
      { title: "How to become a pilot in Europe", href: "/guides/how-to-become-a-pilot-europe", time: "8 min read", icon: "🛫" },
      { title: "EASA CPL requirements", href: "/europe/guides/easa-cpl-requirements", time: "6 min read", icon: "📋" },
      { title: "EASA Class 1 Medical", href: "/europe/guides/easa-medical-class-1", time: "5 min read", icon: "🩺" },
      { title: "Europe pilot salary 2026", href: "/europe/guides/pilot-salary-2026", time: "7 min read", icon: "💰" },
      { title: "Lufthansa European Flight Academy", href: "/europe/guides/lufthansa-european-flight-academy", time: "6 min read", icon: "✈️" },
      { title: "Europe pilot training costs", href: "/europe/guides/pilot-training-costs", time: "6 min read", icon: "🏦" },
    ],
    guidesIndexHref: "/guides", guidesIndexLabel: "All Europe guides →",
    emailSource: "europe_homepage",
    emailHeadline: "Get the free Europe Pilot Training Guide 2026",
    emailSubtext: "EASA requirements, training costs, cadet programmes, and how to get your first airline job in Europe.",
    financeGuideHref: "/europe/guides/pilot-training-costs",
  },
  "new-zealand": {
    flag: "🇳🇿", label: "New Zealand", regulator: "CAA NZ",
    seoTitle: "AviatorIQ New Zealand — CAA NZ Pilot Training Guidance & Costs 2026",
    seoDescription: "Personalised pilot training guidance for New Zealand. CAA NZ requirements, training costs, and matched NZ flight schools.",
    heroHeadline: "Could You Actually Become A Pilot?",
    heroSub: "Discover your CAA NZ training route, costs, challenges and matched New Zealand flight schools in under 5 minutes. Free, no registration required.",
    roadmapHref: "/roadmap",
    heroBadges: ["Free · No registration", "Real 2026 NZ costs", "Matched NZ schools"],
    sampleCandidate: { initials: "TW", name: "Tom, 24 — Auckland", route: "Integrated ATPL", budget: "NZ$90k–NZ$130k", timeline: "Within 12 months", barrier: "Finance" },
    sampleSchools: [
      { name: "Air New Zealand Cadet Programme", match: "95%", location: "Auckland, NZ" },
      { name: "Massey University Aviation", match: "90%", location: "Palmerston North, NZ" },
      { name: "New Zealand Aviation Academy", match: "86%", location: "Hamilton, NZ" },
    ],
    featuredGuides: [
      { title: "NZ CPL requirements", href: "/new-zealand/guides/nz-cpl-requirements", time: "6 min read", icon: "📋" },
      { title: "NZ Class 1 Medical", href: "/new-zealand/guides/nz-medical-class-1", time: "5 min read", icon: "🩺" },
      { title: "NZ pilot salary 2026", href: "/new-zealand/guides/new-zealand-pilot-salary-2026", time: "7 min read", icon: "💰" },
      { title: "Air New Zealand cadet programme", href: "/new-zealand/guides/air-new-zealand-cadet-pilot-training", time: "6 min read", icon: "✈️" },
      { title: "NZ pilot training costs", href: "/new-zealand/guides/new-zealand-pilot-training-costs", time: "6 min read", icon: "🏦" },
      { title: "Best flight schools NZ", href: "/new-zealand/guides/best-flight-schools-new-zealand", time: "5 min read", icon: "🏫" },
    ],
    guidesIndexHref: "/guides", guidesIndexLabel: "All NZ guides →",
    emailSource: "nz_homepage",
    emailHeadline: "Get the free NZ Pilot Training Guide 2026",
    emailSubtext: "CAA NZ requirements, training costs, and how to get your first airline job in New Zealand.",
    financeGuideHref: "/new-zealand/guides/new-zealand-pilot-training-costs",
  },
  "south-africa": {
    flag: "🇿🇦", label: "South Africa", regulator: "SACAA",
    seoTitle: "AviatorIQ South Africa — SACAA Pilot Training Guidance & Costs 2026",
    seoDescription: "Personalised pilot training guidance for South Africa. SACAA requirements, training costs, and matched SA flight schools.",
    heroHeadline: "Could You Actually Become A Pilot?",
    heroSub: "Discover your SACAA training route, costs, challenges and matched South African flight schools in under 5 minutes. Free, no registration required.",
    roadmapHref: "/roadmap",
    heroBadges: ["Free · No registration", "Real 2026 SA costs", "Matched SA schools"],
    sampleCandidate: { initials: "KM", name: "Kyle, 23 — Cape Town", route: "Integrated ATPL", budget: "R800k–R1.2m", timeline: "Within 12 months", barrier: "Finance" },
    sampleSchools: [
      { name: "43 Air School", match: "95%", location: "Port Elizabeth, SA" },
      { name: "Comair Aviation Academy", match: "90%", location: "Johannesburg, SA" },
      { name: "Stellenbosch Flying Club", match: "85%", location: "Stellenbosch, SA" },
    ],
    featuredGuides: [
      { title: "SACAA CPL requirements", href: "/south-africa/guides/sacpl-requirements", time: "6 min read", icon: "📋" },
      { title: "SACAA Class 1 Medical", href: "/south-africa/guides/sacaa-class-1-medical-certificate", time: "5 min read", icon: "🩺" },
      { title: "SA pilot salary 2026", href: "/south-africa/guides/pilot-salary-2026", time: "7 min read", icon: "💰" },
      { title: "Best flight schools SA", href: "/south-africa/guides/best-flight-schools-south-africa", time: "5 min read", icon: "🏫" },
      { title: "SA pilot training costs", href: "/south-africa/guides/pilot-training-costs", time: "6 min read", icon: "🏦" },
      { title: "SA regional airlines guide", href: "/south-africa/guides/south-africa-regional-airlines-pilot-training", time: "6 min read", icon: "✈️" },
    ],
    guidesIndexHref: "/guides", guidesIndexLabel: "All SA guides →",
    emailSource: "sa_homepage",
    emailHeadline: "Get the free SA Pilot Training Guide 2026",
    emailSubtext: "SACAA requirements, training costs, and how to get your first airline job in South Africa.",
    financeGuideHref: "/south-africa/guides/pilot-training-costs",
  },
  uae: {
    flag: "🇦🇪", label: "UAE", regulator: "GCAA",
    seoTitle: "AviatorIQ UAE — GCAA Pilot Training, Emirates & Etihad Cadet 2026",
    seoDescription: "Personalised pilot training guidance for the UAE. GCAA requirements, Emirates and Etihad cadet programmes, training costs, and matched UAE flight schools.",
    heroHeadline: "Could You Actually Become A Pilot?",
    heroSub: "Discover your GCAA training route, costs, challenges and matched UAE flight schools in under 5 minutes. Free, no registration required.",
    roadmapHref: "/roadmap",
    heroBadges: ["Free · No registration", "Real 2026 UAE costs", "Emirates & Etihad cadet info"],
    sampleCandidate: { initials: "OA", name: "Omar, 24 — Dubai", route: "Integrated ATPL", budget: "AED 350k–500k", timeline: "Within 12 months", barrier: "Eligibility" },
    sampleSchools: [
      { name: "Emirates Flight Training Academy", match: "96%", location: "Dubai, UAE" },
      { name: "Etihad Aviation Training", match: "92%", location: "Abu Dhabi, UAE" },
      { name: "CAE Oxford (Dubai)", match: "87%", location: "Dubai, UAE" },
    ],
    featuredGuides: [
      { title: "How to become a pilot in the UAE", href: "/uae/guides/how-to-become-a-pilot-uae", time: "8 min read", icon: "🛫" },
      { title: "Emirates Cadet Pilot Program", href: "/uae/guides/emirates-cadet-pilot-program", time: "6 min read", icon: "✈️" },
      { title: "Etihad Cadet Pilot Program", href: "/uae/guides/etihad-cadet-pilot-program", time: "6 min read", icon: "✈️" },
      { title: "UAE pilot salary 2026", href: "/uae/guides/uae-pilot-salary-2026", time: "7 min read", icon: "💰" },
      { title: "UAE pilot training costs", href: "/uae/guides/uae-pilot-training-costs", time: "6 min read", icon: "🏦" },
      { title: "UAE Class 1 Medical", href: "/uae/guides/uae-medical-class-1", time: "5 min read", icon: "🩺" },
    ],
    guidesIndexHref: "/guides", guidesIndexLabel: "All UAE guides →",
    emailSource: "uae_homepage",
    emailHeadline: "Get the free UAE Pilot Training Guide 2026",
    emailSubtext: "GCAA requirements, Emirates and Etihad cadet programmes, training costs, and how to get your first airline job in the UAE.",
    financeGuideHref: "/uae/guides/uae-pilot-training-costs",
  },
};

// ─── Shared style tokens ──────────────────────────────────────────────────────
const surface = "oklch(0.14 0.08 250)";
const surfaceHover = "oklch(0.17 0.08 250)";
const border = "oklch(1 0 0 / 0.08)";
const borderHover = "oklch(1 0 0 / 0.16)";
const muted = "oklch(0.55 0.04 240)";
const brandGradient = "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";
const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection({ cfg }: { cfg: HomeCountryConfig }) {
  const statsQuery = trpc.platform.stats.useQuery(undefined, { staleTime: 60_000 });
  const stats = statsQuery.data;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 50%, oklch(0.12 0.08 240) 100%)",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Hero background photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/manus-storage/hero-cockpit_b4476f04.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.28,
        }}
      />
      {/* Dark gradient overlay to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, oklch(0.10 0.10 255 / 0.85) 0%, oklch(0.10 0.10 255 / 0.55) 50%, oklch(0.10 0.10 255 / 0.25) 100%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Radial glows */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "700px", height: "700px", background: "radial-gradient(circle, oklch(0.45 0.18 240 / 0.12) 0%, transparent 65%)", transform: "translate(25%, -25%)" }} />
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, oklch(0.6 0.18 200 / 0.07) 0%, transparent 65%)", transform: "translate(-25%, 25%)" }} />

      <div className="container relative w-full py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in"
              style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.75 0.04 240)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Free · No registration · {cfg.flag} {cfg.label}
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white mb-4 leading-[1.1] animate-fade-in-up"
              style={{ letterSpacing: "-0.02em" }}
            >
              {cfg.heroHeadline.split(" ").slice(0, -3).join(" ")}{" "}
              <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {cfg.heroHeadline.split(" ").slice(-3).join(" ")}
              </span>
            </h1>

            <p className="text-base md:text-lg mb-6 leading-relaxed animate-fade-in-up delay-100" style={{ color: "oklch(0.72 0.04 240)" }}>
              {cfg.heroSub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all"
                style={{ background: ctaGradient, boxShadow: "0 0 30px oklch(0.72 0.18 65 / 0.35)" }}
              >
                Start Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-8 animate-fade-in-up delay-300">
              {cfg.heroBadges.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Platform preview — decorative, no competing CTAs */}
          <div className="hidden lg:block animate-fade-in-up delay-200">
            <div
              className="rounded-2xl p-6"
              style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.12)", backdropFilter: "blur(20px)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.55 0.04 240)" }}>Sample Roadmap</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: "oklch(0.72 0.18 65 / 0.2)", color: "oklch(0.85 0.15 65)" }}>Free</span>
              </div>

              {/* Candidate summary */}
              <div className="rounded-xl p-4 mb-4" style={{ background: "oklch(0.45 0.18 240 / 0.1)", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: ctaGradient }}>JM</div>
                  <div>
                    <div className="text-sm font-semibold text-white">{cfg.sampleCandidate.name}</div>
                    <div className="text-xs" style={{ color: "oklch(0.6 0.04 240)" }}>Goal: Airline Pilot (ATPL)</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-lg font-display font-black" style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>84</div>
                    <div className="text-[10px] uppercase tracking-wider" style={{ color: "oklch(0.55 0.04 240)" }}>IQ Score</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Route", value: cfg.sampleCandidate.route },
                    { label: "Budget", value: cfg.sampleCandidate.budget },
                    { label: "Timeline", value: cfg.sampleCandidate.timeline },
                    { label: "Top barrier", value: cfg.sampleCandidate.barrier },
                  ].map(item => (
                    <div key={item.label} className="rounded-lg px-3 py-2" style={{ background: "oklch(1 0 0 / 0.05)" }}>
                      <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: "oklch(0.5 0.04 240)" }}>{item.label}</div>
                      <div className="text-xs font-semibold text-white/80">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended schools */}
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest mb-2 flex items-center gap-1.5" style={{ color: "oklch(0.4 0.04 240)" }}>Example Matched Schools <span className="text-[9px] px-1.5 py-0.5 rounded font-normal" style={{ background: "oklch(1 0 0 / 0.06)", color: "oklch(0.5 0.04 240)" }}>Illustrative only</span></div>
                <div className="space-y-1.5">
                  {cfg.sampleSchools.map(school => (
                    <div
                      key={school.name}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg"
                      style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid oklch(1 0 0 / 0.07)" }}
                    >
                      <div>
                        <div className="text-xs font-medium text-white/80">{school.name}</div>
                        <div className="text-[10px]" style={{ color: "oklch(0.5 0.04 240)" }}>{school.location}</div>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: "oklch(0.72 0.18 65 / 0.15)", color: "oklch(0.85 0.15 65)" }}>{school.match}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Social proof bar ─────────────────────────────────────────────────────────
function SocialProofBar() {
  return (
    <div style={{ background: "oklch(0.12 0.08 250)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { value: "50+", label: "Flight schools analysed" },
            { value: "Personalised", label: "Training routes" },
            { value: "UK costs", label: "Included in results" },
            { value: "School", label: "Matching included" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="font-display font-bold text-lg" style={{ background: brandGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {stat.value}
              </span>
              <span className="text-sm" style={{ color: muted }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    { number: "01", icon: <BookOpen className="w-6 h-6" />, title: "Answer a few honest questions", description: "Tell us about your goal, your situation, and what's been stopping you. Takes around 5 minutes. Completely free.", color: "oklch(0.45 0.18 240)" },
    { number: "02", icon: <Target className="w-6 h-6" />, title: "Discover your biggest barrier", description: "Get your AviatorIQ Score and a clear answer to what is actually standing between you and the cockpit.", color: "oklch(0.72 0.18 65)" },
    { number: "03", icon: <Building2 className="w-6 h-6" />, title: "Get a personalised roadmap", description: "A training roadmap built around your barrier, your budget, and your timeline — with matched flight schools.", color: "oklch(0.6 0.18 200)" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="text-center mb-8 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}>
            Three steps
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            From curiosity to a clear plan
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Answer a few questions. Get a personalised roadmap. No generic advice, no information overload.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-5 md:p-8 rounded-2xl transition-all duration-300"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${borderHover}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${step.color.replace(")", " / 0.15)")}`, color: step.color }}>
                  {step.icon}
                </div>
                <span className="text-5xl font-display font-black leading-none mt-1" style={{ color: "oklch(1 0 0 / 0.06)" }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: muted }}>{step.description}</p>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 z-10" style={{ color: "oklch(1 0 0 / 0.15)" }} />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all"
            style={{ background: ctaGradient, boxShadow: "0 0 24px oklch(0.72 0.18 65 / 0.3)" }}
          >
            Start Free Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Why Trust Us ─────────────────────────────────────────────────────────────
function ExpertCredibilitySection() {
  const pillars = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No sponsored rankings",
      body: "Flight schools are listed on merit, not because they pay us. Every school in our directory is included because it's a legitimate, nationally approved training provider.",
      color: "oklch(0.45 0.18 240)",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Researched from primary sources",
      body: "Every cost figure, timeline, and requirement in our guides is sourced from national aviation authorities and direct school prospectuses — not copied from other websites. We cite our sources.",
      color: "oklch(0.6 0.18 200)",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Updated for 2026",
      body: "Pilot training costs and requirements change. We review and update every guide at least twice a year. Every page shows its last-updated date so you know what you're reading.",
      color: "oklch(0.72 0.18 65)",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Built for one decision",
      body: "AviatorIQ exists for one purpose: to help you decide whether and how to become a pilot. We don't sell courses, we don't run a flight school. We have no incentive to mislead you.",
      color: "oklch(0.55 0.18 145)",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: "oklch(0.72 0.18 65 / 0.12)", border: "1px solid oklch(0.72 0.18 65 / 0.25)", color: "oklch(0.85 0.15 65)" }}>
            <Shield className="w-3 h-3" />
            Why trust AviatorIQ
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Honest information. No agenda.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            The internet is full of flight school websites dressed up as advice. AviatorIQ is independent. Here's what that means in practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-5 md:p-7 rounded-2xl flex gap-5 transition-all duration-300"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${borderHover}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color.replace(")", " / 0.15)")}`, color: p.color }}>
                {p.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pilot community note */}
        <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: "oklch(0.45 0.18 240 / 0.06)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
          <p className="text-sm" style={{ color: "oklch(0.65 0.04 240)" }}>
            <span className="font-semibold text-white">Are you a pilot or flight instructor?</span>{" "}
            If you spot anything inaccurate in our guides, we want to know.{" "}
            <a href="mailto:hello@aviatoriq.com" className="underline" style={{ color: "oklch(0.65 0.18 240)" }}>Email us</a>{" "}
            and we'll review and credit you.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Quiz Teaser ──────────────────────────────────────────────────────────────
function QuizTeaserSection() {
  const quizCards = [
    {
      emoji: "✈️",
      badge: "2 minutes",
      badgeColor: "oklch(0.45 0.18 240)",
      tag: "New",
      title: "What's Stopping Me Becoming A Pilot?",
      desc: "7 questions. Find your biggest barrier, your strongest asset, and your Flight Potential Score — no sign-up needed.",
      href: "/quiz/flight-deck",
      cta: "Find out now",
      variant: "secondary",
    },
    {
      emoji: "🎓",
      badge: "2–3 minutes",
      badgeColor: "oklch(0.6 0.18 200)",
      tag: null,
      title: "Which Licence Is Right For Me?",
      desc: "PPL, ATPL, LAPL or CPL? Answer 8 questions and get a personalised licence recommendation with cost estimates.",
      href: "/quiz/licence",
      cta: "Find my licence",
      variant: "secondary",
    },
    {
      emoji: "🛫",
      badge: "5 minutes",
      badgeColor: "oklch(0.72 0.18 65)",
      tag: "Most popular",
      title: "Could I Become A Pilot?",
      desc: "Your AviatorIQ Score, biggest barrier, personalised training roadmap, matched flight schools, and a free PDF blueprint.",
      href: "/quiz",
      cta: "Take the assessment",
      variant: "primary",
    },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.13 0.09 250)" }}>
      <div className="container">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4" style={{ background: "oklch(0.72 0.18 65 / 0.12)", border: "1px solid oklch(0.72 0.18 65 / 0.25)", color: "oklch(0.85 0.15 65)" }}>
            Three assessments
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Pick the question you need answered
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Three short assessments. Each one gives you a clear, personalised answer — not generic advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {quizCards.map((card) => (
            <div
              key={card.href}
              className="flex flex-col p-5 md:p-7 rounded-2xl transition-all duration-300"
              style={{
                background: card.variant === "primary" ? "oklch(0.45 0.18 240 / 0.08)" : surface,
                border: card.variant === "primary" ? "1px solid oklch(0.45 0.18 240 / 0.3)" : `1px solid ${border}`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div className="text-3xl mb-5">{card.emoji}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: card.badgeColor }}>{card.badge}</span>
                {card.tag && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: card.variant === "primary" ? ctaGradient : "oklch(0.45 0.18 240 / 0.2)", color: "white" }}>
                    {card.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: muted }}>{card.desc}</p>
              <Link
                href={card.href}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white no-underline transition-all"
                style={card.variant === "primary" ? { background: ctaGradient, boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.3)" } : { background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.15)" }}
              >
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* Quiz hub link */}
        <div className="text-center mt-8">
          <Link href="/quizzes" className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-all" style={{ color: "oklch(0.65 0.18 240)" }}>
            Browse all 7 quizzes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Training Routes ──────────────────────────────────────────────────────────
function TrainingRoutesSection() {
  const routes = [
    { icon: <Plane className="w-6 h-6" />, color: "oklch(0.45 0.18 240)", title: "Airline Pilot Training", description: "The most common goal. Choose between Integrated ATPL (fastest, £80k–£120k) or Modular ATPL (flexible, £40k–£80k). Both lead to the same licence.", cta: "Find airline training", href: "/quiz" },
    { icon: <Compass className="w-6 h-6" />, color: "oklch(0.6 0.18 200)", title: "Private Pilot Licence", description: "Fly for pleasure or personal travel. A PPL typically takes 6–18 months and costs £8,000–£15,000 depending on location and aircraft type.", cta: "Explore PPL training", href: "/quiz" },
    { icon: <Building2 className="w-6 h-6" />, color: "oklch(0.72 0.18 65)", title: "Corporate & Private Jets", description: "Fly high-net-worth individuals on business jets. Requires ATPL and type ratings. A growing sector with strong demand for experienced pilots.", cta: "Learn about corporate", href: "/quiz" },
    { icon: <GraduationCap className="w-6 h-6" />, color: "oklch(0.65 0.2 300)", title: "Flight Instructor", description: "Teach others to fly while building your own hours. A popular route for modular students to build flight time before airline applications.", cta: "Explore instructing", href: "/quiz" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Every type of pilot training, covered
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Whether you want to fly for an airline, for pleasure, or as a career change, AviatorIQ helps you find the right route.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {routes.map((route) => (
            <div
              key={route.title}
              className="p-5 md:p-7 rounded-2xl transition-all duration-300 group"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${borderHover}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${route.color.replace(")", " / 0.15)")}`, color: route.color }}>
                {route.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{route.title}</h3>
              <p className="leading-relaxed mb-5 text-sm" style={{ color: muted }}>{route.description}</p>
              <Link href={route.href} className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all" style={{ color: route.color }}>
                {route.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── After Training ─────────────────────────────────────────────────────────────
function AfterTrainingSection() {
  const resources = [
    { icon: <Briefcase className="w-6 h-6" />, color: "oklch(0.72 0.18 65)", title: "Pilot CV & Cover Letters", description: "How to structure an aviation CV, highlight your training achievements, and write a cover letter that passes airline screening.", href: "/guides/pilot-cv-cover-letter" },
    { icon: <Users className="w-6 h-6" />, color: "oklch(0.45 0.18 240)", title: "Airline Interview Prep", description: "Common technical and HR questions, group exercise strategies, and how to prepare for the competency-based interview.", href: "/guides/airline-pilot-interview" },
    { icon: <BrainCircuit className="w-6 h-6" />, color: "oklch(0.6 0.18 200)", title: "Aptitude Testing", description: "What to expect from CUT-E, Symbiotics, and Pilapt tests. How to practice numerical reasoning, spatial awareness, and multitasking.", href: "/guides/pilot-aptitude-test-preparation" },
    { icon: <MonitorPlay className="w-6 h-6" />, color: "oklch(0.65 0.2 300)", title: "Simulator Assessments", description: "How airlines assess your raw flying ability and CRM (Crew Resource Management) in a full-motion simulator before hiring.", href: "/guides/airline-simulator-assessment" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.12 0.09 252)" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5" style={{ background: "oklch(0.45 0.18 240 / 0.12)", border: "1px solid oklch(0.45 0.18 240 / 0.25)", color: "oklch(0.65 0.18 240)" }}>
            <Briefcase className="w-3 h-3" />
            Beyond Flight School
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            The final hurdle: getting hired
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: muted }}>
            Getting your licence is only half the battle. Passing airline selection is what gets you into the right-hand seat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((res) => (
            <div
              key={res.title}
              className="p-5 rounded-2xl transition-all duration-300 group"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${borderHover}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${res.color.replace(")", " / 0.15)")}`, color: res.color }}>
                {res.icon}
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">{res.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: muted }}>{res.description}</p>
              <Link href={res.href} className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all" style={{ color: res.color }}>
                Read guide
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cost Section ─────────────────────────────────────────────────────────────
function CostSection({ cfg }: { cfg: HomeCountryConfig }) {
  const costData = [
    { route: "Integrated ATPL", range: "£80k–£120k / $100k–$150k", duration: "18–24 months", flag: "✈️", color: "oklch(0.45 0.18 240)" },
    { route: "Modular ATPL", range: "£40k–£80k / $50k–$100k", duration: "3–5 years", flag: "🎓", color: "oklch(0.6 0.18 200)" },
    { route: "PPL Only", range: "£8k–£15k / $10k–$20k", duration: "6–18 months", flag: "🛩️", color: "oklch(0.72 0.18 65)" },
  ];

  return (
    <section className="section" style={{ background: "oklch(0.13 0.09 250)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
              How much does pilot training cost?
            </h2>
            <p className="text-lg mb-7 leading-relaxed" style={{ color: muted }}>
              Training costs vary significantly depending on your chosen route, country and school. Use our cost calculator for a personalised estimate, or take the assessment to see what suits your budget.
            </p>
            <div className="space-y-3 mb-8">
              {costData.map((item) => (
                <div
                  key={item.route}
                  className="flex items-center justify-between p-4 rounded-xl transition-all"
                  style={{ background: surface, border: `1px solid ${border}` }}
                >
                  <div>
                    <div className="font-display font-semibold text-white text-sm">{item.flag} {item.route}</div>
                    <div className="text-xs mt-0.5" style={{ color: muted }}>{item.duration}</div>
                  </div>
                  <div className="font-bold text-sm" style={{ color: item.color }}>{item.range}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/calculator" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white no-underline" style={{ background: brandGradient }}>
                <Calculator className="w-4 h-4" />
                Cost Calculator
              </Link>
              <Link href="/guides/pilot-training-costs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white" style={{ background: "oklch(1 0 0 / 0.06)", border: `1px solid ${border}` }}>
                Full Cost Guide
              </Link>
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ background: "oklch(0.16 0.10 248)", border: "1px solid oklch(1 0 0 / 0.12)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: ctaGradient }}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">Finance options available</div>
                <div className="text-sm" style={{ color: muted }}>For qualifying candidates</div>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-sm" style={{ color: muted }}>
              Many flight schools offer finance plans, career development loans, and payment structures to help spread the cost of training.
            </p>
            <ul className="space-y-3 mb-6">
              {["Career development loans", "School payment plans", "Airline cadet sponsorships", "Government-backed schemes"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.72 0.04 240)" }}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={cfg.financeGuideHref} className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-all" style={{ color: "oklch(0.72 0.18 65)" }}>
              Read the finance guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── School Matching ──────────────────────────────────────────────────────────
function SchoolMatchingSection() {
  return (
    <section className="section" style={{ background: "oklch(0.11 0.08 252)" }}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Matched to the right flight school
          </h2>
          <p className="text-lg" style={{ color: muted }}>
            After your assessment, AviatorIQ matches you with flight schools based on your country, training goal, budget and preferences — not random results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            { icon: <Users className="w-6 h-6" />, color: "oklch(0.45 0.18 240)", title: "Qualified matches only", desc: "Schools are filtered by your training goal, budget range and location preferences." },
            { icon: <Lock className="w-6 h-6" />, color: "oklch(0.6 0.18 200)", title: "Your data is protected", desc: "We only share your details with schools you explicitly request introductions from." },
            { icon: <Clock className="w-6 h-6" />, color: "oklch(0.72 0.18 65)", title: "No cold calls", desc: "You control who contacts you. No unsolicited calls from schools you haven't chosen." },
          ].map((item) => (
            <div key={item.title} className="p-7 rounded-2xl text-center" style={{ background: surface, border: `1px solid ${border}` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${item.color.replace(")", " / 0.15)")}`, color: item.color }}>
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-wrap gap-4 justify-center">
          <Link href="/schools" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white" style={{ background: "oklch(1 0 0 / 0.06)", border: `1px solid ${border}` }}>
            Browse All Schools
          </Link>
          <Link href="/quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient, boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.25)" }}>
            Get Matched Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Guides ───────────────────────────────────────────────────────────────────
function GuidesSection({ cfg }: { cfg: HomeCountryConfig }) {
  const guides = cfg.featuredGuides;

  return (
    <section className="section" style={{ background: "oklch(0.13 0.09 250)" }}>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
              Pilot training guides
            </h2>
            <p style={{ color: muted }}>Everything you need to understand before you start.</p>
          </div>
          <Link href={cfg.guidesIndexHref} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white/70 no-underline transition-all hover:text-white whitespace-nowrap" style={{ background: "oklch(1 0 0 / 0.06)", border: `1px solid ${border}` }}>
            {cfg.guidesIndexLabel}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-200 no-underline"
              style={{ background: surface, border: `1px solid ${border}` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${borderHover}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <span className="text-2xl flex-shrink-0">{guide.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="font-display font-semibold text-white/90 group-hover:text-white transition-colors text-sm truncate">{guide.title}</div>
                <div className="text-xs mt-0.5" style={{ color: muted }}>{guide.time}</div>
              </div>
              <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: muted }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CtaBannerSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, oklch(0.12 0.12 255) 0%, oklch(0.16 0.14 248) 50%, oklch(0.14 0.10 240) 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, oklch(0.45 0.18 240 / 0.15) 0%, transparent 65%)" }} />

      <div className="container relative text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6" style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.7 0.04 240)" }}>
            <Zap className="w-3 h-3" style={{ color: "oklch(0.72 0.18 65)" }} />
            Free · No registration required
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Your answer is 5 questions away.
          </h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.72 0.04 240)" }}>
            Get your specific training route, real 2026 costs, and matched flight schools. Free, no registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold text-white no-underline transition-all"
              style={{ background: ctaGradient, boxShadow: "0 0 40px oklch(0.72 0.18 65 / 0.4)" }}
            >
              Start Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { country } = useCountry();
  const cfg = HOME_CONFIGS[country ?? "uk"] ?? HOME_CONFIGS["uk"];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={cfg.seoTitle}
        description={cfg.seoDescription}
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "AviatorIQ",
          "url": "https://aviatoriq.com",
          "description": "The decision platform for people thinking about becoming a pilot.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://aviatoriq.com/schools?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <PublicNav />
      <main className="flex-1">
        <HeroSection cfg={cfg} />
        <SocialProofBar />
        <QuizTeaserSection />
        <HowItWorksSection />
        <ExpertCredibilitySection />
        <TrainingRoutesSection />
        <AfterTrainingSection />
        <CostSection cfg={cfg} />
        <SchoolMatchingSection />
        <GuidesSection cfg={cfg} />
        <CtaBannerSection />
        {/* Email Capture Section */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "600px", margin: "0 auto" }}>
          <EmailCapture
            source={cfg.emailSource}
            headline={cfg.emailHeadline}
            subtext={cfg.emailSubtext}
            ctaLabel="Send me the free guide"
            variant="card"
          />
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
