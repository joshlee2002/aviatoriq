import { useEffect } from "react";
import { Link } from "wouter";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import {
  ArrowRight,
  Clock,
  ChevronRight,
  BookOpen,
  Zap,
  DollarSign,
  Stethoscope,
  Scale,
} from "lucide-react";
import SEO from "@/components/SEO";

const usGuides = [
  // Getting Started
  {
    title: "How to Become a Pilot in the USA",
    description:
      "The complete 2026 guide to FAA licences, Part 141 vs Part 61, ATP minimums, airline cadet programmes, and the R-ATP 1,000-hour advantage.",
    href: "/us/guides/how-to-become-a-pilot",
    time: "9 min read",
    category: "Getting Started",
    emoji: "🛫",
  },
  {
    title: "Part 61 vs Part 141: Which is Right for You?",
    description:
      "The honest comparison of the two FAA training structures — minimum hours, cost differences, school types, and which route fits your situation.",
    href: "/us/guides/part-61-vs-141",
    time: "8 min read",
    category: "Getting Started",
    emoji: "⚖️",
  },
  {
    title: "PPL Requirements USA (2026)",
    description:
      "Everything you need to know about getting your FAA Private Pilot Licence — minimum hours, written test, checkride, costs, and how long it takes.",
    href: "/us/guides/ppl-requirements-usa",
    time: "7 min read",
    category: "Getting Started",
    emoji: "🪂",
  },
  {
    title: "Commercial Pilot Certificate USA",
    description:
      "How to earn your FAA Commercial Pilot Certificate — hour requirements, knowledge test, practical test standards, and what jobs it unlocks.",
    href: "/us/guides/commercial-pilot-certificate-usa",
    time: "8 min read",
    category: "Getting Started",
    emoji: "🏆",
  },
  {
    title: "ATP Certificate USA: The Final Step to the Airlines",
    description:
      "The Airline Transport Pilot certificate explained — R-ATP vs full ATP, hour requirements, knowledge test, and how to get hired at a regional airline.",
    href: "/us/guides/atp-certificate-usa",
    time: "8 min read",
    category: "Getting Started",
    emoji: "✈️",
  },
  // Career & Salary
  {
    title: "US Airline Pilot Salary (2026)",
    description:
      "Regional vs major airline pay, First Officer vs Captain earnings, per diem, and how long it takes to reach the six-figure salary at United, Delta, and American.",
    href: "/us/guides/airline-pilot-salary-usa",
    time: "7 min read",
    category: "Career & Salary",
    emoji: "💰",
  },
  {
    title: "US Pilot Career Outlook 2026",
    description:
      "Is the pilot shortage real? Hiring trends at regional and major airlines, mandatory retirement age, and what the next 10 years look like for new pilots.",
    href: "/us/guides/us-pilot-career-outlook",
    time: "7 min read",
    category: "Career & Salary",
    emoji: "📈",
  },
  {
    title: "CFI Career USA: Become a Flight Instructor",
    description:
      "How to become a Certified Flight Instructor — CFI, CFII, MEI ratings, pay rates, hour-building strategy, and using instructing as a pathway to the airlines.",
    href: "/us/guides/cfi-career-usa",
    time: "7 min read",
    category: "Career & Salary",
    emoji: "🎓",
  },
  // Finance & Funding
  {
    title: "How to Fund Pilot Training in the USA",
    description:
      "Sallie Mae flight school loans, AOPA finance, VA benefits, scholarships, and the Part 141 federal student aid advantage — every funding option explained.",
    href: "/us/guides/how-to-fund-pilot-training-usa",
    time: "8 min read",
    category: "Finance & Funding",
    emoji: "🏦",
  },
  {
    title: "GI Bill Flight Training: The Complete Guide",
    description:
      "How veterans can use the Post-9/11 GI Bill and Montgomery GI Bill for FAA pilot training — eligible programmes, approved schools, and how to apply.",
    href: "/us/guides/gi-bill-flight-training",
    time: "8 min read",
    category: "Finance & Funding",
    emoji: "🎖️",
  },
  // Medical
  {
    title: "FAA Medical Requirements (2026)",
    description:
      "First, Second, and Third Class medical standards — what the AME checks, common disqualifiers, Special Issuance, and how to prepare for your exam.",
    href: "/us/guides/faa-medical-requirements",
    time: "7 min read",
    category: "Medical",
    emoji: "🏥",
  },
  {
    title: "ADHD and FAA Medical: What You Need to Know",
    description:
      "Can you get an FAA medical with ADHD? The Special Issuance process, approved medications, neuropsychological testing requirements, and real approval timelines.",
    href: "/us/guides/adhd-faa-medical",
    time: "7 min read",
    category: "Medical",
    emoji: "🧠",
  },
  // Ratings
  {
    title: "Instrument Rating USA: Complete Guide",
    description:
      "FAA Instrument Rating requirements, training structure, written test, checkride, and why it's the most important rating you'll earn after your PPL.",
    href: "/us/guides/instrument-rating-usa",
    time: "7 min read",
    category: "Ratings",
    emoji: "🌫️",
  },
  {
    title: "Type Ratings in the USA: Costs, Process & 2026 Guide",
    description:
      "How airline type ratings work in the US, who pays, costs ($20,000–$35,000 self-funded), and which airlines provide type rating training as part of hiring.",
    href: "/us/guides/type-rating-usa",
    time: "8 min read",
    category: "Ratings",
    emoji: "🛩️",
  },
  // Flight Schools
  {
    title: "Best Flight Schools in the USA 2026",
    description:
      "ATP Flight School, United Aviate Academy, Embry-Riddle, L3Harris, CAE, Epic — compare costs, airline partnerships, and completion rates.",
    href: "/us/guides/best-flight-schools-usa",
    time: "11 min read",
    category: "Flight Schools",
    emoji: "🏫",
  },
  {
    title: "ATP Flight School 2026: Complete Review",
    description:
      "America's largest flight school — Airline Career Pilot Program ($123,995), airline partner guarantees, CFI pathway, financing, and honest pros/cons.",
    href: "/us/guides/atp-flight-school-guide",
    time: "11 min read",
    category: "Flight Schools",
    emoji: "🏆",
  },
  {
    title: "Embry-Riddle Aeronautical University: Pilot Programme Guide 2026",
    description:
      "Is ERAU worth the $220,000+ cost? Airline partnerships, R-ATP eligibility, Daytona vs Prescott, graduate outcomes, and an honest cost-benefit analysis.",
    href: "/us/guides/embry-riddle-aeronautical-university",
    time: "13 min read",
    category: "Flight Schools",
    emoji: "🎓",
  },
  // Airline Cadet Programmes
  {
    title: "United Aviate Academy 2026: Complete Guide",
    description:
      "Everything about United Airlines' cadet programme — eligibility, costs ($111,700–$122,000), application process, Aviate ID, and how to maximise your chances.",
    href: "/us/guides/united-aviate-program",
    time: "12 min read",
    category: "Airline Cadet Programmes",
    emoji: "🔵",
  },
  {
    title: "Delta Propel Program 2026: Complete Guide",
    description:
      "Delta Air Lines' cadet programme — partner schools, Propel ID system, eligibility, timeline to Delta FO, and how it compares to United Aviate.",
    href: "/us/guides/delta-propel-program",
    time: "10 min read",
    category: "Airline Cadet Programmes",
    emoji: "🔴",
  },
  // Career Preparation
  {
    title: "US Airline Pilot Interview Guide 2026",
    description:
      "How to prepare for US airline assessments — TBAS/ASTB tests, simulator sessions, HR interviews, CRM evaluations. United, Delta, American, Southwest, and regionals.",
    href: "/us/guides/airline-interview-usa",
    time: "11 min read",
    category: "Career Preparation",
    emoji: "🎤",
  },
  {
    title: "US Pilot Aptitude Tests 2026: TBAS, ASTB & Airline Assessments",
    description:
      "Complete guide to TBAS, ASTB-E, and airline-specific aptitude tests. How to prepare, what to expect, and how to score in the top percentile.",
    href: "/us/guides/pilot-aptitude-test-usa",
    time: "8 min read",
    category: "Career Preparation",
    emoji: "🧪",
  },
  {
    title: "Airline Pilot Resume & Cover Letter Guide USA 2026",
    description:
      "How to write a US airline pilot resume — logbook summary, certificates, hours breakdown, and cover letter tips for United, Delta, American, Southwest.",
    href: "/us/guides/pilot-resume-usa",
    time: "8 min read",
    category: "Career Preparation",
    emoji: "📄",
  },
  {
    title: "Military Pilot to Airline: The Complete US Transition Guide 2026",
    description:
      "How US military pilots transition to airline careers — JTIP programme, military experience credit toward ATP, which airlines recruit military pilots, and timeline.",
    href: "/us/guides/military-to-airline-usa",
    time: "10 min read",
    category: "Career Preparation",
    emoji: "🎖️",
  },
  // Hour Building
  {
    title: "How to Build Flight Hours in the USA: Complete 2026 Guide",
    description:
      "CFI route, banner towing, pipeline patrol, skydive pilot, charter flying — all methods for building hours from CPL to ATP minimums, with costs and timelines.",
    href: "/us/guides/hour-building-usa",
    time: "9 min read",
    category: "Hour Building",
    emoji: "⏱️",
  },
  {
    title: "US Pilot Training Timeline: Zero to Airline in 2026",
    description:
      "Realistic step-by-step timeline from zero hours to regional airline First Officer — PPL, IR, CPL, CFI, hour building, ATP written, regional hiring. Total: 3–4 years.",
    href: "/us/guides/pilot-training-timeline-usa",
    time: "9 min read",
    category: "Hour Building",
    emoji: "📅",
  },
  // Finance
  {
    title: "How Much Does Pilot Training Cost in the USA? 2026",
    description:
      "Full breakdown of all US pilot training costs — PPL ($10–15k), IR, CPL, CFI, total zero-to-ATP ($100–130k). Part 61 vs 141 vs Embry-Riddle vs ATP Flight School.",
    href: "/us/guides/pilot-training-costs-usa",
    time: "10 min read",
    category: "Finance & Funding",
    emoji: "💵",
  },
  // Diversity & Inclusion
  {
    title:
      "Women in Aviation USA: Scholarships, Programmes & Career Guide 2026",
    description:
      "WAI, Ninety-Nines, airline diversity programmes, key scholarships, current statistics (women are ~7% of US airline pilots), and how to break in.",
    href: "/us/guides/women-in-aviation-usa",
    time: "9 min read",
    category: "Diversity & Inclusion",
    emoji: "👩‍✈️",
  },
  // Career Changers
  {
    title: "Am I Too Old to Become a Pilot in the USA? 2026",
    description:
      "FAA age rules (no upper limit for PPL/CPL, mandatory retirement at 65), realistic timelines for career changers aged 30–50, and real examples of late starters.",
    href: "/us/guides/am-i-too-old-to-become-a-pilot-usa",
    time: "8 min read",
    category: "Career Changers",
    emoji: "🕐",
  },
  {
    title: "Becoming a Pilot Over 40 in the USA: Complete 2026 Guide",
    description:
      "Realistic guide for career changers over 40 — FAA medical considerations, timeline to ATP, regional vs major airline prospects, financing, and what's achievable.",
    href: "/us/guides/pilot-training-over-40-usa",
    time: "9 min read",
    category: "Career Changers",
    emoji: "🔄",
  },
  {
    title: "The US Pilot Shortage 2026: What It Means for Your Career",
    description:
      "Boeing projects 17,000 new pilots needed per year through 2042. Regional airline hiring surge, upgrade timelines, starting salaries, and why now is the best time to start.",
    href: "/us/guides/us-pilot-shortage-2026",
    time: "8 min read",
    category: "Career & Salary",
    emoji: "📊",
  },
  {
    title: "US Airline Pilot Salary 2026: Real Pay Scales",
    description:
      "Real 2026 pay scales from Delta, United, American, Southwest, and regional carriers. Per diem, profit-sharing, and full career earnings breakdown.",
    href: "/us/guides/us-pilot-salary-2026",
    time: "12 min read",
    category: "Career & Salary",
    emoji: "💵",
  },
  {
    title: "US Regional Airlines Guide 2026",
    description:
      "How regional airlines work as the gateway to major carriers. Hiring requirements, upgrade timelines, and which regionals have the best flow-through agreements.",
    href: "/us/guides/us-regional-airlines-guide",
    time: "10 min read",
    category: "Career & Salary",
    emoji: "🛫",
  },
  {
    title: "US Military Pilot to Airlines 2026",
    description:
      "Transitioning from US military to commercial aviation. R-ATP at 750 hours, MilComp credits, ATP CTP waiver, and which airlines prioritise military hires.",
    href: "/us/guides/us-military-pilot-to-airlines",
    time: "10 min read",
    category: "Career & Salary",
    emoji: "🪖",
  },
  {
    title: "US Airline Pilot Benefits 2026",
    description:
      "Beyond the hourly rate: 16-18% direct 401(k) contributions, profit sharing, loss of license insurance, and non-revenue travel explained.",
    href: "/us/guides/us-pilot-benefits",
    time: "11 min read",
    category: "Career & Salary",
    emoji: "🏦",
  },
  {
    title: "US Airline Pilot Retirement Age 2026",
    description:
      "The FAA mandates retirement at 65 for Part 121 airline pilots. How the rule works, the push to raise it to 67, and what it means for your career timeline.",
    href: "/us/guides/us-pilot-retirement-age",
    time: "8 min read",
    category: "Career & Salary",
    emoji: "📅",
  },
  {
    title: "US Pilot Taxes 2026: Deductions & Planning",
    description:
      "Tax deductions available to US airline pilots: per diem, uniform costs, union dues, training expenses, and how to use a 529 plan for flight training.",
    href: "/us/guides/us-pilot-taxes",
    time: "9 min read",
    category: "Career & Salary",
    emoji: "🧾",
  },
  {
    title: "US Pilot Housing 2026: Crash Pads & Living",
    description:
      "Where US airline pilots live and how crash pads work. Cost comparison of living in base vs commuting, and the best cities for pilot quality of life.",
    href: "/us/guides/us-pilot-housing",
    time: "8 min read",
    category: "Career & Salary",
    emoji: "🏠",
  },
  // Medical — detailed class guides
  {
    title: "FAA First Class Medical: Full Requirements 2026",
    description: "Everything required for an FAA First Class Medical Certificate — vision, hearing, cardiovascular, mental health, and how to prepare for your AME exam.",
    href: "/us/guides/faa-medical-class-1",
    time: "8 min read",
    category: "Medical",
    emoji: "🏥",
  },
  {
    title: "FAA Second Class Medical: Requirements & Differences 2026",
    description: "How the FAA Second Class Medical differs from First Class, who needs it, and what commercial pilots must maintain to keep their certificate current.",
    href: "/us/guides/faa-medical-class-2",
    time: "7 min read",
    category: "Medical",
    emoji: "🩺",
  },
  {
    title: "FAA Third Class Medical: Private Pilot Requirements 2026",
    description: "The FAA Third Class Medical explained — BasicMed as an alternative, eligibility, duration, and what conditions are most commonly flagged.",
    href: "/us/guides/faa-medical-class-3",
    time: "7 min read",
    category: "Medical",
    emoji: "📋",
  },
  // Ratings — ATP requirements
  {
    title: "FAA ATP Requirements 2026: The Complete Guide",
    description: "Full breakdown of FAA ATP certificate requirements — 1,500 hours (or R-ATP), ATP CTP, knowledge test, and the practical test standards.",
    href: "/us/guides/faa-atp-requirements",
    time: "8 min read",
    category: "Ratings",
    emoji: "📜",
  },
  // Career Preparation
  {
    title: "US Airline Interview Preparation 2026",
    description: "How to prepare for major and regional airline interviews — HR questions, technical oral, sim evaluation, and what Delta, United, American, and Southwest look for.",
    href: "/us/guides/airline-interview-prep",
    time: "10 min read",
    category: "Career Preparation",
    emoji: "🎯",
  },
  {
    title: "Major US Airlines Hiring 2026: Who Is Recruiting?",
    description: "Current hiring status at Delta, United, American, Southwest, Alaska, and JetBlue — minimums, flow-through agreements, and how to get your application noticed.",
    href: "/us/guides/major-airlines-hiring-usa",
    time: "9 min read",
    category: "Career Preparation",
    emoji: "📊",
  },
  {
    title: "US Airline Cadet Programs 2026: Complete Guide",
    description: "Every major US airline cadet pathway compared — United Aviate, Delta Propel, American Cadet Academy, Southwest Destination 225°. Eligibility, costs, and timelines.",
    href: "/us/guides/us-cadet-programs",
    time: "11 min read",
    category: "Airline Cadet Programmes",
    emoji: "🔗",
  },
  // Finance
  {
    title: "US Flight School Loans 2026: Sallie Mae, AOPA & More",
    description: "Every loan option for US pilot training — Sallie Mae, AOPA, Stratus Financial, Climb Credit, and VA benefits. Rates, terms, and how to choose.",
    href: "/us/guides/us-flight-school-loans",
    time: "8 min read",
    category: "Finance & Funding",
    emoji: "💳",
  },
  // Pilot Lifestyle
  {
    title: "US Pilot Schedule 2026: Rosters, Days Off & Work-Life Balance",
    description: "How US airline pilot schedules work — bidding systems, reserve, line holder, days off per month, and how lifestyle differs by airline and fleet type.",
    href: "/us/guides/us-pilot-schedule",
    time: "8 min read",
    category: "Career & Salary",
    emoji: "🗓️",
  },
  {
    title: "US Airline Pilot Commuting 2026: Is It Worth It?",
    description: "How commuting works for US airline pilots — non-rev travel, crash pads, commuter clauses, and whether living away from base makes financial sense.",
    href: "/us/guides/us-pilot-commuting",
    time: "8 min read",
    category: "Career & Salary",
    emoji: "🛫",
  },
  {
    title: "US Airline Pilot Seniority 2026: How It Works",
    description: "The seniority system explained — how it affects pay, schedule, base, aircraft type, and upgrade timeline at US airlines. Why seniority is everything.",
    href: "/us/guides/us-pilot-seniority",
    time: "8 min read",
    category: "Career & Salary",
    emoji: "📊",
  },
  // Overview guides
  {
    title: "US Pilot Training 2026: The Complete Overview",
    description: "The definitive 2026 overview of becoming a pilot in the United States — FAA licences, costs, timelines, airline pathways, and the current hiring market.",
    href: "/us/guides/us-pilot-training-2026",
    time: "12 min read",
    category: "Getting Started",
    emoji: "🇺🇸",
  },
  {
    title: "US Pilot Training Market Guide 2026",
    description: "A data-driven look at the US pilot training market — school costs, airline demand, regional vs major pathways, and how to position yourself for success.",
    href: "/us/guides/us-pilot-training-market-guide",
    time: "10 min read",
    category: "Getting Started",
    emoji: "📊",
  },
];

const categoryColors: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  "Getting Started": {
    bg: "oklch(0.45 0.18 240 / 0.12)",
    text: "oklch(0.7 0.18 240)",
    border: "oklch(0.45 0.18 240 / 0.25)",
  },
  "Career & Salary": {
    bg: "oklch(0.55 0.18 145 / 0.12)",
    text: "oklch(0.7 0.18 145)",
    border: "oklch(0.55 0.18 145 / 0.25)",
  },
  "Finance & Funding": {
    bg: "oklch(0.72 0.18 65 / 0.12)",
    text: "oklch(0.85 0.15 65)",
    border: "oklch(0.72 0.18 65 / 0.25)",
  },
  Medical: {
    bg: "oklch(0.60 0.15 340 / 0.12)",
    text: "oklch(0.75 0.15 340)",
    border: "oklch(0.60 0.15 340 / 0.25)",
  },
  Ratings: {
    bg: "oklch(0.6 0.18 200 / 0.12)",
    text: "oklch(0.75 0.15 200)",
    border: "oklch(0.6 0.18 200 / 0.25)",
  },
  "Flight Schools": {
    bg: "oklch(0.55 0.18 280 / 0.12)",
    text: "oklch(0.75 0.15 280)",
    border: "oklch(0.55 0.18 280 / 0.25)",
  },
  "Airline Cadet Programmes": {
    bg: "oklch(0.55 0.2 25 / 0.12)",
    text: "oklch(0.75 0.18 25)",
    border: "oklch(0.55 0.2 25 / 0.25)",
  },
  "Career Preparation": {
    bg: "oklch(0.55 0.18 145 / 0.12)",
    text: "oklch(0.7 0.18 145)",
    border: "oklch(0.55 0.18 145 / 0.25)",
  },
  "Hour Building": {
    bg: "oklch(0.6 0.18 200 / 0.12)",
    text: "oklch(0.75 0.15 200)",
    border: "oklch(0.6 0.18 200 / 0.25)",
  },
  "Diversity & Inclusion": {
    bg: "oklch(0.60 0.15 340 / 0.12)",
    text: "oklch(0.75 0.15 340)",
    border: "oklch(0.60 0.15 340 / 0.25)",
  },
  "Career Changers": {
    bg: "oklch(0.72 0.18 65 / 0.12)",
    text: "oklch(0.85 0.15 65)",
    border: "oklch(0.72 0.18 65 / 0.25)",
  },
};

const surface = "oklch(0.14 0.08 250)";
const border = "oklch(1 0 0 / 0.08)";
const borderHover = "oklch(1 0 0 / 0.18)";
const muted = "oklch(0.55 0.04 240)";
const ctaGradient =
  "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

const usTools = [
  {
    label: "US Cost Calculator",
    href: "/us/calculator",
    emoji: "🧮",
    desc: "Part 141 vs Part 61 vs University R-ATP — real 2026 USD costs.",
  },
  {
    label: "FAA Medical Lookup",
    href: "/us/medical-lookup",
    emoji: "🏥",
    desc: "Check 20+ conditions against FAA medical standards.",
  },
  {
    label: "Cadet Eligibility Checker",
    href: "/us/cadet-eligibility",
    emoji: "🎓",
    desc: "See if you qualify for United Aviate, American, Delta Propel, or Southwest 225°.",
  },
  {
    label: "US Training Roadmap",
    href: "/us/roadmap",
    emoji: "🗺️",
    desc: "5 questions. A personalised FAA training roadmap built for your situation.",
  },
];

export default function GuidesIndexUS() {
  useEffect(() => {
    document.title = "US Pilot Training Guides (2026) – AviatorIQ";
  }, []);

  const categoryOrder = [
    "Getting Started",
    "Career & Salary",
    "Finance & Funding",
    "Medical",
    "Ratings",
    "Flight Schools",
    "Airline Cadet Programmes",
    "Career Preparation",
    "Hour Building",
    "Diversity & Inclusion",
    "Career Changers",
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.10 0.08 252)" }}
    >
      <SEO
        title="US Pilot Training Guides (2026) | AviatorIQ"
        description="Free guides for aspiring US pilots — FAA licences, Part 141 vs Part 61, ATP certificate, medical requirements, GI Bill, airline cadet programmes, and pilot salaries. Updated for 2026."
        canonical="https://aviatoriq.com/us/guides"
      />
      <PublicNav />
      <main className="flex-1">
        {/* Hero */}
        <div
          className="relative overflow-hidden py-10 md:py-16"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="container max-w-3xl text-center relative">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
              style={{
                background: "oklch(0.55 0.2 25 / 0.12)",
                border: "1px solid oklch(0.55 0.2 25 / 0.25)",
                color: "oklch(0.75 0.18 25)",
              }}
            >
              <BookOpen className="w-3 h-3" />
              🇺🇸 US Pilot Guides
            </div>
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              US Pilot Training Guides
            </h1>
            <p
              className="text-base md:text-lg mb-2"
              style={{ color: "oklch(0.65 0.04 240)" }}
            >
              Everything you need to understand before starting FAA pilot
              training. Written clearly, updated for 2026, built for the US
              market.
            </p>
            <p
              className="text-sm mb-6"
              style={{ color: "oklch(0.5 0.04 240)" }}
            >
              30 free guides covering FAA licences, medical, funding, career,
              flight schools, cadet programmes, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/us/roadmap"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white no-underline"
                style={{
                  background: ctaGradient,
                  boxShadow: "0 0 24px oklch(0.72 0.18 65 / 0.3)",
                }}
              >
                <Zap className="w-4 h-4" />
                Get my US roadmap
              </Link>
              <Link
                href="/us/calculator"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white no-underline"
                style={{
                  background: "oklch(1 0 0 / 0.07)",
                  border: "1px solid oklch(1 0 0 / 0.12)",
                }}
              >
                <DollarSign className="w-4 h-4" />
                US cost calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Guides by category */}
        <div
          className="py-6 md:py-12 px-4"
          style={{ background: "oklch(0.11 0.08 252)" }}
        >
          <div className="container max-w-4xl">
            {categoryOrder.map(cat => {
              const guides = usGuides.filter(g => g.category === cat);
              if (!guides.length) return null;
              const catColor =
                categoryColors[cat] ?? categoryColors["Getting Started"];
              return (
                <div key={cat} className="mb-8 md:mb-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                      style={{
                        background: catColor.bg,
                        color: catColor.text,
                        border: `1px solid ${catColor.border}`,
                      }}
                    >
                      {cat}
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{ background: border }}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {guides.map(guide => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-200 no-underline"
                        style={{
                          background: surface,
                          border: `1px solid ${border}`,
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.border =
                            `1px solid ${borderHover}`;
                          (e.currentTarget as HTMLElement).style.transform =
                            "translateY(-3px)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.border =
                            `1px solid ${border}`;
                          (e.currentTarget as HTMLElement).style.transform =
                            "translateY(0)";
                        }}
                      >
                        <span className="text-2xl flex-shrink-0 mt-0.5">
                          {guide.emoji}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-bold text-white/90 group-hover:text-white transition-colors mb-1.5 text-sm leading-snug">
                            {guide.title}
                          </h3>
                          <p
                            className="text-xs leading-relaxed mb-3"
                            style={{ color: muted }}
                          >
                            {guide.description}
                          </p>
                          <div
                            className="flex items-center gap-1.5 text-xs"
                            style={{ color: "oklch(0.45 0.04 240)" }}
                          >
                            <Clock className="w-3 h-3" />
                            {guide.time}
                          </div>
                        </div>
                        <ChevronRight
                          className="w-4 h-4 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                          style={{ color: "oklch(0.4 0.04 240)" }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* US Tools section */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                  style={{
                    background: "oklch(0.55 0.2 25 / 0.12)",
                    color: "oklch(0.75 0.18 25)",
                    border: "1px solid oklch(0.55 0.2 25 / 0.25)",
                  }}
                >
                  🇺🇸 US Decision Tools
                </span>
                <div className="flex-1 h-px" style={{ background: border }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {usTools.map(tool => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-200 no-underline"
                    style={{
                      background: surface,
                      border: `1px solid ${border}`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.border =
                        `1px solid ${borderHover}`;
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.border =
                        `1px solid ${border}`;
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">
                      {tool.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-white/90 group-hover:text-white transition-colors mb-1.5 text-sm leading-snug">
                        {tool.label}
                      </h3>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: muted }}
                      >
                        {tool.desc}
                      </p>
                    </div>
                    <ChevronRight
                      className="w-4 h-4 flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                      style={{ color: "oklch(0.4 0.04 240)" }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="p-5 md:p-8 rounded-2xl text-center mt-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.14 0.12 255), oklch(0.18 0.14 248))",
                border: "1px solid oklch(0.45 0.18 240 / 0.2)",
              }}
            >
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Ready to find your FAA path?
              </h3>
              <p className="text-sm mb-5" style={{ color: muted }}>
                Answer 5 questions and get a personalised US pilot training
                roadmap — Part 141, Part 61, airline cadet, or university R-ATP.
              </p>
              <Link
                href="/us/roadmap"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white no-underline"
                style={{
                  background: ctaGradient,
                  boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.3)",
                }}
              >
                Get your free US roadmap
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
