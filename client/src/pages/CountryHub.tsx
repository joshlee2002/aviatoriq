import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  School,
  DollarSign,
  Clock,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { useCountry } from "@/contexts/CountryContext";
import { useEffect } from "react";

// ─── Style tokens ─────────────────────────────────────────────────────────────
const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";
const surface = "oklch(1 0 0 / 0.04)";
const border = "oklch(1 0 0 / 0.1)";
const muted = "oklch(0.55 0.04 240)";

// ─── Types ────────────────────────────────────────────────────────────────────
interface GuideItem {
  title: string;
  href: string;
  desc: string;
  tag: string;
}

interface ToolItem {
  icon: string;
  label: string;
  href: string;
  desc: string;
}

interface StatItem {
  value: string;
  label: string;
  iconName: "dollar" | "clock" | "shield" | "users" | "trending";
}

interface TrainingRoute {
  title: string;
  badge: string;
  cost: string;
  duration: string;
  desc: string;
  pros: string[];
  cons: string[];
}

interface WhyTrainReason {
  icon: string;
  title: string;
  desc: string;
}

interface EuCountry {
  flag: string;
  name: string;
  note: string;
}

interface CountryHubConfig {
  slug: string;
  flag: string;
  label: string;
  regulator: string;
  edition: string; // e.g. "🇦🇺 Australia Edition · CASA Approved · Free"
  heroTitle: string; // The gradient-highlighted part
  heroSubtitle: string;
  heroBullets: string[];
  roadmapHref: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  stats: StatItem[];
  routes: TrainingRoute[];
  tools: ToolItem[];
  guides: GuideItem[];
  schoolsSectionTitle: string;
  schoolsSectionDesc: string;
  finalCtaHeading: string;
  finalCtaSubtext: string;
  // Optional extras
  whyTrain?: { heading: string; reasons: WhyTrainReason[] };
  euCountries?: EuCountry[];
}

// ─── Country Configs ──────────────────────────────────────────────────────────
const COUNTRY_HUB_CONFIGS: Record<string, CountryHubConfig> = {
  australia: {
    slug: "australia",
    flag: "🇦🇺",
    label: "Australia",
    regulator: "CASA",
    edition: "🇦🇺 Australia Edition · CASA Approved · Free",
    heroTitle: "CASA Training Roadmap",
    heroSubtitle:
      "CPL or ATPL? Integrated or modular? How much will it actually cost in AUD? Answer 5 questions and get a specific, data-driven roadmap — your exact CASA route, real 2026 costs, timeline, and matched Australian flight schools. No generic advice.",
    heroBullets: [
      "Free · No registration",
      "Real 2026 CASA costs in AUD",
      "Matched Australian flight schools",
    ],
    roadmapHref: "/quiz",
    seo: {
      title: "Become a Pilot in Australia 2026 | CASA Training Guide | AviatorIQ",
      description:
        "Australia's most complete pilot training resource. CASA CPL/ATPL routes, real 2026 costs in AUD, Class 1 medical guidance, and matched Australian flight schools.",
      canonical: "https://aviatoriq.com/australia",
    },
    stats: [
      { value: "A$80k–A$140k", label: "Integrated ATPL cost", iconName: "dollar" },
      { value: "18–24 months", label: "Integrated ATPL duration", iconName: "clock" },
      { value: "CASA", label: "Regulator", iconName: "shield" },
      { value: "~4,200", label: "Commercial pilots in Australia", iconName: "users" },
    ],
    routes: [
      {
        title: "Integrated ATPL",
        badge: "Fastest to airline",
        cost: "A$80,000 – A$140,000",
        duration: "18–24 months",
        desc: "Full-time, structured programme from zero to frozen ATPL. Preferred by Qantas Group and Virgin Australia cadet programmes. Typically at dedicated academies like AFAC, AVIA, or Griffith Aviation.",
        pros: ["Fastest route to airline", "Structured environment", "Preferred by major cadets"],
        cons: ["Higher upfront cost", "Less flexibility"],
      },
      {
        title: "Modular CPL/ATPL",
        badge: "Most flexible",
        cost: "A$50,000 – A$90,000",
        duration: "2–4 years",
        desc: "Build your licences step by step — PPL, CPL, then ATPL theory and hours. More affordable but requires self-discipline. Popular with career changers and those building hours via instructing.",
        pros: ["Lower cost per stage", "Work while training", "Flexible timeline"],
        cons: ["Longer overall timeline", "Requires self-management"],
      },
    ],
    tools: [
      { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised CASA training roadmap" },
      { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total CPL/ATPL training cost in AUD" },
      { icon: "🩺", label: "CASA Medical Check", href: "/tools/class-1-medical-check", desc: "Assess your Class 1 medical eligibility" },
      { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Qantas, Virgin, Rex, and regional cadet programmes" },
    ],
    guides: [
      { title: "Pilot Training Costs Australia 2026: The Full Breakdown", href: "/australia/guides/australia-pilot-training-costs", desc: "CPL, ATPL, PPL — real 2026 costs from Australian flight schools.", tag: "Popular" },
      { title: "Australian Pilot Salary 2026: Qantas, Virgin & Regionals", href: "/australia/guides/australia-pilot-salary-2026", desc: "From a $65k instructor to a $400k+ Qantas A380 Captain — real 2026 pay scales.", tag: "Salary" },
      { title: "CASA Class 1 Medical: What You Need to Know", href: "/australia/guides/casa-medical-class-1", desc: "DAME requirements, disqualifying conditions, and how to prepare.", tag: "Medical" },
      { title: "CASA CPL Requirements 2026", href: "/australia/guides/casa-cpl-requirements", desc: "Everything you need to know about the CASA Commercial Pilot Licence.", tag: "Licence" },
      { title: "Qantas Group Pilot Academy 2026", href: "/australia/guides/qantas-group-pilot-academy", desc: "Australia's premier pilot training program — costs, curriculum, and career pathways.", tag: "Cadets" },
      { title: "Australian Airline Cadet Programmes 2026", href: "/australia/guides/australia-cadet-programs", desc: "Qantas Group, Virgin Australia, Rex, and regional airline cadet pathways.", tag: "Cadets" },
      { title: "CASA ATPL Requirements 2026", href: "/australia/guides/casa-atpl-requirements", desc: "Everything you need to know about the CASA Airline Transport Pilot Licence.", tag: "Licence" },
      { title: "Rex Pilot Academy 2026", href: "/australia/guides/rex-pilot-academy", desc: "Rex's cadet pathway — structure, costs, and career prospects with Australia's regional carrier.", tag: "Cadets" },
      { title: "Australia Pilot Shortage 2026", href: "/australia/guides/australia-pilot-shortage", desc: "The growing pilot shortage in Australia — opportunities and how to position yourself.", tag: "Career" },
      { title: "Australia Regional Airlines 2026", href: "/australia/guides/australia-regional-airlines", desc: "QantasLink, Rex, Alliance — the stepping stones to mainline airline careers.", tag: "Career" },
      { title: "Flight Instructor Australia 2026", href: "/australia/guides/australia-flight-instructor", desc: "CASA FIR requirements, costs, salary, and how instructing fits into hour building.", tag: "Career" },
    ],
    schoolsSectionTitle: "Australian Flight Schools",
    schoolsSectionDesc: "Browse CASA-approved flight schools across Australia. Compare costs, locations, and training routes.",
    finalCtaHeading: "Ready to start your Australian pilot journey?",
    finalCtaSubtext: "Get your personalised CASA training roadmap in under 5 minutes. Free, no registration required.",
  },

  canada: {
    slug: "canada",
    flag: "🇨🇦",
    label: "Canada",
    regulator: "Transport Canada",
    edition: "🇨🇦 Canada Edition · Transport Canada · Free",
    heroTitle: "Transport Canada Training Roadmap",
    heroSubtitle:
      "CPL or ATPL? Integrated or modular? How much will it actually cost in CAD? Answer 5 questions and get a specific, data-driven roadmap — your exact Transport Canada route, real 2026 costs, timeline, and matched Canadian flight schools. No generic advice.",
    heroBullets: [
      "Free · No registration",
      "Real 2026 Transport Canada costs in CAD",
      "Matched Canadian flight schools",
    ],
    roadmapHref: "/quiz",
    seo: {
      title: "Become a Pilot in Canada 2026 | Transport Canada Training Guide | AviatorIQ",
      description:
        "Canada's most complete pilot training resource. Transport Canada CPL/ATPL routes, real 2026 costs in CAD, Class 1 medical guidance, and matched Canadian flight schools.",
      canonical: "https://aviatoriq.com/canada",
    },
    stats: [
      { value: "C$80k–C$130k", label: "Integrated ATPL cost", iconName: "dollar" },
      { value: "18–24 months", label: "Integrated ATPL duration", iconName: "clock" },
      { value: "Transport Canada", label: "Regulator", iconName: "shield" },
      { value: "~4,000", label: "Commercial pilots in Canada", iconName: "users" },
    ],
    routes: [
      {
        title: "Integrated ATPL",
        badge: "Fastest to airline",
        cost: "C$80,000 – C$130,000",
        duration: "18–24 months",
        desc: "Full-time, structured programme from zero to frozen ATPL. Preferred by Air Canada and WestJet cadet programmes. Typically at dedicated academies like Seneca College, BCIT, or Confederation College.",
        pros: ["Fastest route to airline", "Structured environment", "Preferred by major cadets"],
        cons: ["Higher upfront cost", "Less flexibility"],
      },
      {
        title: "Modular CPL/ATPL",
        badge: "Most flexible",
        cost: "C$50,000 – C$90,000",
        duration: "2–4 years",
        desc: "Build your licences step by step — PPL, CPL, then ATPL theory and hours. More affordable but requires self-discipline. Popular with career changers and those building hours via instructing.",
        pros: ["Lower cost per stage", "Work while training", "Flexible timeline"],
        cons: ["Longer overall timeline", "Requires self-management"],
      },
    ],
    tools: [
      { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised Transport Canada training roadmap" },
      { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total CPL/ATPL training cost in CAD" },
      { icon: "🩺", label: "Medical Readiness Check", href: "/tools/class-1-medical-check", desc: "Assess your Class 1 medical eligibility" },
      { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Air Canada, WestJet, Jazz, and regional cadet programmes" },
    ],
    guides: [
      { title: "Pilot Training Costs Canada 2026: The Full Breakdown", href: "/canada/guides/canada-pilot-training-costs", desc: "CPL, ATPL, PPL — real 2026 costs from Canadian flight schools.", tag: "Popular" },
      { title: "Canadian Pilot Salary 2026: Air Canada, WestJet & Regionals", href: "/canada/guides/canada-pilot-salary-2026", desc: "From a $35k flight instructor to a $350k Air Canada Captain — real 2026 pay scales.", tag: "Salary" },
      { title: "Transport Canada Class 1 Medical: Full Guide", href: "/canada/guides/tc-medical-class-1", desc: "Aviation Medical Examiner (AME) requirements, disqualifying conditions, and how to prepare.", tag: "Medical" },
      { title: "Transport Canada CPL Requirements 2026", href: "/canada/guides/transport-canada-cpl-requirements", desc: "Everything you need to know about the Transport Canada Commercial Pilot Licence.", tag: "Licence" },
      { title: "Air Canada Jazz Cadet Program 2026", href: "/canada/guides/air-canada-jazz-cadet", desc: "The Jazz Approach program — direct pathway to Air Canada Express.", tag: "Cadets" },
      { title: "Canadian Airline Cadet Programmes 2026", href: "/canada/guides/canada-cadet-programs", desc: "Air Canada, WestJet, Jazz, Porter, and regional airline cadet pathways.", tag: "Cadets" },
      { title: "WestJet Encore First Officer 2026", href: "/canada/guides/westjet-encore-cadet", desc: "WestJet Encore pathway — requirements, application, and career progression.", tag: "Cadets" },
      { title: "Porter Airlines Cadet Program 2026", href: "/canada/guides/porter-airlines-cadet-program", desc: "Porter's cadet pathway on the Embraer E195-E2 — eligibility and career trajectory.", tag: "Cadets" },
      { title: "Transport Canada ATPL Requirements 2026", href: "/canada/guides/tc-atpl-requirements", desc: "Everything you need to know about the Transport Canada ATPL licence.", tag: "Licence" },
      { title: "Canada Pilot Shortage 2026", href: "/canada/guides/canada-pilot-shortage", desc: "The growing pilot shortage in Canada — opportunities and how to position yourself.", tag: "Career" },
      { title: "Canada Regional Airlines 2026", href: "/canada/guides/canada-regional-airlines", desc: "Jazz, Encore, PAL — the stepping stones to mainline airline careers in Canada.", tag: "Career" },
    ],
    schoolsSectionTitle: "Canadian Flight Schools",
    schoolsSectionDesc: "Browse Transport Canada-approved flight schools across Canada. Compare costs, locations, and training routes.",
    finalCtaHeading: "Ready to start your Canadian pilot journey?",
    finalCtaSubtext: "Get your personalised Transport Canada training roadmap in under 5 minutes. Free, no registration required.",
  },

  europe: {
    slug: "europe",
    flag: "🇪🇺",
    label: "Europe (EASA)",
    regulator: "EASA",
    edition: "🇪🇺 Europe Edition · EASA Approved · Free",
    heroTitle: "EASA Training Roadmap",
    heroSubtitle:
      "Integrated or modular? Which country? How much will it actually cost in EUR? Answer 5 questions and get a specific, data-driven roadmap — your exact EASA route, real 2026 costs, timeline, and matched European flight schools. No generic advice.",
    heroBullets: [
      "Free · No registration",
      "Real 2026 EASA costs in EUR",
      "Matched European flight schools",
    ],
    roadmapHref: "/quiz",
    seo: {
      title: "Become a Pilot in Europe 2026 | EASA Training Guide | AviatorIQ",
      description:
        "Europe's most complete pilot training resource. EASA ATPL routes, real 2026 costs in EUR, Class 1 medical guidance, and matched European flight schools.",
      canonical: "https://aviatoriq.com/europe",
    },
    stats: [
      { value: "€70k–€120k", label: "Integrated ATPL cost", iconName: "dollar" },
      { value: "18–24 months", label: "Integrated ATPL duration", iconName: "clock" },
      { value: "EASA", label: "Regulator", iconName: "shield" },
      { value: "~38,000", label: "Commercial pilots in EU", iconName: "users" },
    ],
    routes: [
      {
        title: "Integrated ATPL",
        badge: "Fastest to airline",
        cost: "€70,000 – €120,000",
        duration: "18–24 months",
        desc: "Full-time, structured programme from zero to frozen ATPL. Preferred by Lufthansa, Ryanair, and Wizz Air cadet programmes. Typically at dedicated academies like CAE Oxford, EPST, or Lufthansa EFA.",
        pros: ["Fastest route to airline", "Structured environment", "Preferred by major cadets"],
        cons: ["Higher upfront cost", "Less flexibility"],
      },
      {
        title: "Modular ATPL",
        badge: "Most flexible",
        cost: "€40,000 – €80,000",
        duration: "3–5 years",
        desc: "Build your licences step by step — PPL, CPL, IR, then ATPL theory and hours. More affordable but requires self-discipline. Valid across all 32 EASA member states.",
        pros: ["Lower cost per stage", "Work while training", "Flexible timeline"],
        cons: ["Longer overall timeline", "Requires self-management"],
      },
    ],
    tools: [
      { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised EASA training roadmap" },
      { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total ATPL training cost in EUR" },
      { icon: "🩺", label: "EASA Medical Check", href: "/tools/class-1-medical-check", desc: "Assess your Class 1 medical eligibility" },
      { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Lufthansa, Ryanair, easyJet, and other European cadet programmes" },
    ],
    guides: [
      { title: "European Pilot Training Costs 2026", href: "/europe/guides/pilot-training-costs", desc: "Integrated and modular ATPL — real 2026 costs from European flight schools.", tag: "Popular" },
      { title: "European Pilot Salary 2026", href: "/europe/guides/pilot-salary-2026", desc: "FO to Captain pay at Ryanair, Wizz Air, Lufthansa, BA, and Air France.", tag: "Salary" },
      { title: "EASA ATPL Requirements 2026", href: "/europe/guides/easa-atpl-requirements", desc: "EASA ATPL pathways, integrated vs modular, and what it really costs in EUR.", tag: "Essential" },
      { title: "EASA Class 1 Medical 2026", href: "/europe/guides/easa-medical-class-1", desc: "AeMC requirements, disqualifying conditions, and how to prepare across EU countries.", tag: "Medical" },
      { title: "EASA CPL Requirements 2026", href: "/europe/guides/easa-cpl-requirements", desc: "Everything you need to know about the EASA Commercial Pilot Licence.", tag: "Licence" },
      { title: "European Airline Cadet Programmes 2026", href: "/europe/guides/europe-cadet-programs", desc: "Lufthansa EFA, BA Speedbird, Wizz Air WAPA, and Air France — all compared.", tag: "Cadets" },
      { title: "Lufthansa European Flight Academy 2026", href: "/europe/guides/lufthansa-european-flight-academy", desc: "EFA cadet programme — €120k cost, Brain Capital ISA, DLR test, and career paths.", tag: "Cadets" },
      { title: "Air France-KLM Cadet Programs 2026", href: "/europe/guides/air-france-klm-cadet-pilot-program", desc: "Fully sponsored Air France and deferred-payment KLM cadet pathways.", tag: "Cadets" },
      { title: "European Pilot Shortage 2026", href: "/europe/guides/europe-pilot-shortage", desc: "The growing pilot shortage in Europe — opportunities and career outlook.", tag: "Career" },
      { title: "European Regional Airlines 2026", href: "/europe/guides/europe-regional-airlines-pilot-training", desc: "The stepping stones to major European airline careers.", tag: "Career" },
      { title: "EASA Flight Instructor 2026", href: "/europe/guides/europe-flight-instructor", desc: "FI rating requirements, costs, salary, and how instructing fits into hour building.", tag: "Career" },
      { title: "European Military Pilot to Airlines 2026", href: "/europe/guides/military-to-airlines", desc: "EASA ATPL conversion for ex-military pilots — credits, costs, and airline pathways.", tag: "Career" },
    ],
    schoolsSectionTitle: "European Flight Schools",
    schoolsSectionDesc: "Browse EASA-approved flight schools across Europe. Your EASA licence is valid across all 32 member states.",
    finalCtaHeading: "Ready to start your European pilot journey?",
    finalCtaSubtext: "Get your personalised EASA training roadmap in under 5 minutes. Free, no registration required.",
    euCountries: [
      { flag: "🇩🇪", name: "Germany", note: "Lufthansa Aviation Training, DLR selection" },
      { flag: "🇳🇱", name: "Netherlands", note: "KLM Cityhopper cadet, Dutch ATC" },
      { flag: "🇮🇪", name: "Ireland", note: "Ryanair cadet, CAE Oxford Dublin" },
      { flag: "🇪🇸", name: "Spain", note: "Iberia cadet, SENASA, Jerez" },
      { flag: "🇫🇷", name: "France", note: "Air France cadet, ENAC, Aéroformation" },
      { flag: "🇵🇹", name: "Portugal", note: "TAP cadet, EPST, affordable training" },
      { flag: "🇬🇷", name: "Greece", note: "Olympic Air, Aegean cadet, Athens Flying Club" },
      { flag: "🇨🇿", name: "Czech Republic", note: "Czech Airlines, lower cost modular training" },
    ],
  },

  uae: {
    slug: "uae",
    flag: "🇦🇪",
    label: "United Arab Emirates",
    regulator: "GCAA",
    edition: "🇦🇪 UAE Edition · GCAA Approved · Free",
    heroTitle: "GCAA Training Roadmap",
    heroSubtitle:
      "Emirates, Etihad, or independent academy? How much will it cost in AED? Answer 5 questions and get a specific, data-driven roadmap — your exact GCAA route, real 2026 costs, timeline, and matched UAE flight academies. No generic advice.",
    heroBullets: [
      "Free · No registration",
      "Real 2026 GCAA costs in AED",
      "Matched UAE flight academies",
    ],
    roadmapHref: "/quiz",
    seo: {
      title: "Become a Pilot in the UAE 2026 | GCAA Training Guide | AviatorIQ",
      description:
        "The UAE's most complete pilot training resource. GCAA routes, real 2026 costs in AED, Class 1 medical guidance, and matched UAE flight academies.",
      canonical: "https://aviatoriq.com/uae",
    },
    stats: [
      { value: "AED 350k–500k", label: "Integrated ATPL cost", iconName: "dollar" },
      { value: "18–24 months", label: "Integrated ATPL duration", iconName: "clock" },
      { value: "GCAA", label: "Regulator", iconName: "shield" },
      { value: "Tax-free", label: "Pilot salary structure", iconName: "trending" },
    ],
    routes: [
      {
        title: "Emirates Flight Training Academy",
        badge: "World-class",
        cost: "AED 400,000 – 500,000",
        duration: "18–24 months",
        desc: "Emirates' own ab initio academy in Dubai. Graduates are considered for Emirates cadet pathways. State-of-the-art facilities with full-motion simulators and a modern training fleet.",
        pros: ["Direct Emirates pathway", "World-class facilities", "Tax-free career"],
        cons: ["Very high cost", "Highly competitive entry"],
      },
      {
        title: "Independent GCAA Academies",
        badge: "Most accessible",
        cost: "AED 350,000 – 450,000",
        duration: "18–24 months",
        desc: "GCAA-approved independent academies including Etihad Aviation Training, Abu Dhabi Aviation, and others. Graduates can apply to all UAE airlines including Emirates, Etihad, and Air Arabia.",
        pros: ["More accessible entry", "Multiple airline options", "Flexible pathways"],
        cons: ["No guaranteed airline placement", "Costs vary significantly"],
      },
    ],
    tools: [
      { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised UAE pilot training roadmap" },
      { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total training cost in AED" },
      { icon: "🩺", label: "Medical Check", href: "/tools/class-1-medical-check", desc: "Assess your GCAA Class 1 medical eligibility" },
      { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Emirates, Etihad, and Air Arabia cadet programmes" },
    ],
    guides: [
      { title: "Pilot Training Costs in the UAE 2026: The Full Breakdown", href: "/uae/guides/uae-pilot-training-costs", desc: "GCAA-approved training costs in AED. Emirates, Etihad, and independent academy routes.", tag: "Essential" },
      { title: "Emirates Cadet Pilot Programme 2026: Complete Guide", href: "/uae/guides/emirates-cadet-pilot-program", desc: "How to join the Emirates Cadet Programme — eligibility, selection, costs, and career path.", tag: "Popular" },
      { title: "Etihad Cadet Pilot Programme 2026: Complete Guide", href: "/uae/guides/etihad-cadet-pilot-program", desc: "Everything you need to know about Etihad's cadet pathway — from application to wings.", tag: "Cadets" },
      { title: "Air Arabia Cadet Programme 2026", href: "/uae/guides/air-arabia-cadet-program", desc: "Low-cost carrier cadet pathway in the UAE — eligibility, training, and career prospects.", tag: "Cadets" },
      { title: "UAE Pilot Salary 2026: Emirates, Etihad & Air Arabia", href: "/uae/guides/uae-pilot-salary-2026", desc: "Full salary breakdown for pilots in the UAE. Tax-free packages, allowances, and benefits.", tag: "Salary" },
      { title: "GCAA Class 1 Medical in the UAE 2026", href: "/uae/guides/uae-medical-class-1", desc: "GCAA medical requirements, approved AMEs, and how to prepare for your UAE Class 1.", tag: "Medical" },
    ],
    schoolsSectionTitle: "UAE Flight Academies",
    schoolsSectionDesc: "Browse GCAA-approved flight academies across the UAE. Compare Emirates FTA, Etihad Aviation Training, and independent schools.",
    finalCtaHeading: "Ready to start your UAE pilot journey?",
    finalCtaSubtext: "Get your personalised GCAA training roadmap in under 5 minutes. Free, no registration required.",
    whyTrain: {
      heading: "Why Train or Fly in the UAE?",
      reasons: [
        { icon: "✈️", title: "World-class airlines", desc: "Emirates and Etihad are consistently ranked among the world's best airlines, offering exceptional career progression and benefits." },
        { icon: "💰", title: "Tax-free salaries", desc: "UAE pilot salaries are entirely tax-free, making take-home pay significantly higher than equivalent roles in Europe or Australia." },
        { icon: "🌍", title: "Global connectivity", desc: "Dubai and Abu Dhabi are among the world's busiest aviation hubs, with routes to every continent and rapid fleet expansion." },
        { icon: "🏫", title: "GCAA-approved academies", desc: "The UAE has world-class flight training academies including Emirates Flight Training Academy and Etihad Aviation Training." },
      ],
    },
  },

  "south-africa": {
    slug: "south-africa",
    flag: "🇿🇦",
    label: "South Africa",
    regulator: "SACAA",
    edition: "🇿🇦 South Africa Edition · SACAA Approved · Free",
    heroTitle: "SACAA Training Roadmap",
    heroSubtitle:
      "CPL or ATPL? How much will it cost in ZAR? Answer 5 questions and get a specific, data-driven roadmap — your exact SACAA route, real 2026 costs, timeline, and matched South African flight schools. No generic advice.",
    heroBullets: [
      "Free · No registration",
      "Real 2026 SACAA costs in ZAR",
      "Matched South African flight schools",
    ],
    roadmapHref: "/quiz",
    seo: {
      title: "Become a Pilot in South Africa 2026 | SACAA Training Guide | AviatorIQ",
      description:
        "South Africa's most complete pilot training resource. SACAA CPL/ATPL routes, real 2026 costs in ZAR, Class 1 medical guidance, and matched South African flight schools.",
      canonical: "https://aviatoriq.com/south-africa",
    },
    stats: [
      { value: "R350k–R550k", label: "Integrated ATPL cost", iconName: "dollar" },
      { value: "18–24 months", label: "Integrated ATPL duration", iconName: "clock" },
      { value: "SACAA", label: "Regulator", iconName: "shield" },
      { value: "~2,800", label: "Commercial pilots in SA", iconName: "users" },
    ],
    routes: [
      {
        title: "Integrated CPL/ATPL",
        badge: "Fastest to airline",
        cost: "R350,000 – R550,000",
        duration: "18–24 months",
        desc: "Full-time, structured programme from zero to frozen ATPL under SACAA. Preferred by SAA and FlySafair cadet programmes. South Africa's excellent flying weather means faster hour-building.",
        pros: ["Fastest route to airline", "Excellent flying weather", "Lower cost vs Europe/Australia"],
        cons: ["Higher upfront cost", "Less flexibility"],
      },
      {
        title: "Modular CPL/ATPL",
        badge: "Most affordable",
        cost: "R200,000 – R350,000",
        duration: "2–4 years",
        desc: "Build your licences step by step — PPL, CPL, then ATPL theory and hours. South Africa's low training costs make this one of the most affordable modular routes in the world.",
        pros: ["Lower cost per stage", "Work while training", "Internationally recognised"],
        cons: ["Longer overall timeline", "Requires self-management"],
      },
    ],
    tools: [
      { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised SACAA training roadmap" },
      { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total CPL/ATPL training cost in ZAR" },
      { icon: "🩺", label: "Medical Check", href: "/tools/class-1-medical-check", desc: "Assess your SACAA Class 1 medical eligibility" },
      { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "SAA, FlySafair, Airlink cadet programmes" },
    ],
    guides: [
      { title: "Pilot Training Costs in South Africa 2026: Full Breakdown", href: "/south-africa/guides/pilot-training-costs", desc: "SACAA CPL and ATPL training costs in ZAR — real 2026 figures from South African flight schools.", tag: "Essential" },
      { title: "SACAA CPL Requirements 2026: Complete Guide", href: "/south-africa/guides/sacpl-requirements", desc: "Everything you need to know about getting your South African CPL — hours, exams, and costs.", tag: "Licence" },
      { title: "SACAA Class 1 Medical Certificate 2026", href: "/south-africa/guides/sacaa-class-1-medical-certificate", desc: "SACAA medical requirements, approved AMEs, and how to prepare for your Class 1 in South Africa.", tag: "Medical" },
      { title: "South African Airline Cadet Programmes 2026", href: "/south-africa/guides/south-africa-cadet-programs", desc: "SAA, FlySafair, Airlink, and regional airline cadet pathways — eligibility and how to apply.", tag: "Cadets" },
      { title: "South African Pilot Salary 2026", href: "/south-africa/guides/pilot-salary-2026", desc: "How much do pilots earn in South Africa? First Officer to Captain salary breakdown in ZAR.", tag: "Salary" },
      { title: "South Africa Pilot Shortage 2026", href: "/south-africa/guides/south-africa-pilot-shortage", desc: "The growing pilot shortage in South Africa — opportunities, timelines, and how to position yourself.", tag: "Career" },
    ],
    schoolsSectionTitle: "South African Flight Schools",
    schoolsSectionDesc: "Browse SACAA-approved flight schools across South Africa. Compare costs, locations, and training routes.",
    finalCtaHeading: "Ready to start your South African pilot journey?",
    finalCtaSubtext: "Get your personalised SACAA training roadmap in under 5 minutes. Free, no registration required.",
    whyTrain: {
      heading: "Why Train in South Africa?",
      reasons: [
        { icon: "☀️", title: "Ideal flying weather", desc: "South Africa's climate offers near-year-round VFR flying conditions, meaning faster hour-building and less weather-related training delays." },
        { icon: "💰", title: "Affordable training costs", desc: "Training costs in ZAR are significantly lower than equivalent programmes in Europe or Australia, making SA an attractive option for international students." },
        { icon: "📈", title: "Growing pilot shortage", desc: "South Africa faces a significant pilot shortage, with airlines actively recruiting. Qualified pilots have strong career prospects across Africa and beyond." },
        { icon: "🌍", title: "Gateway to African aviation", desc: "South African licences and experience are highly valued across the African continent, opening doors to regional and international airline careers." },
      ],
    },
  },

  "new-zealand": {
    slug: "new-zealand",
    flag: "🇳🇿",
    label: "New Zealand",
    regulator: "CAA NZ",
    edition: "🇳🇿 New Zealand Edition · CAA NZ Approved · Free",
    heroTitle: "CAA NZ Training Roadmap",
    heroSubtitle:
      "CPL or ATPL? How much will it cost in NZD? Answer 5 questions and get a specific, data-driven roadmap — your exact CAA NZ route, real 2026 costs, timeline, and matched New Zealand flight schools. No generic advice.",
    heroBullets: [
      "Free · No registration",
      "Real 2026 CAA NZ costs in NZD",
      "Matched New Zealand flight schools",
    ],
    roadmapHref: "/quiz",
    seo: {
      title: "Become a Pilot in New Zealand 2026 | CAA NZ Training Guide | AviatorIQ",
      description:
        "New Zealand's most complete pilot training resource. CAA NZ CPL/ATPL routes, real 2026 costs in NZD, Class 1 medical guidance, and matched New Zealand flight schools.",
      canonical: "https://aviatoriq.com/new-zealand",
    },
    stats: [
      { value: "NZ$100k–NZ$160k", label: "Integrated ATPL cost", iconName: "dollar" },
      { value: "18–24 months", label: "Integrated ATPL duration", iconName: "clock" },
      { value: "CAA NZ", label: "Regulator", iconName: "shield" },
      { value: "~1,200", label: "Commercial pilots in NZ", iconName: "users" },
    ],
    routes: [
      {
        title: "Integrated CPL/ATPL",
        badge: "Fastest to airline",
        cost: "NZ$100,000 – NZ$160,000",
        duration: "18–24 months",
        desc: "Full-time, structured programme from zero to frozen ATPL under CAA NZ. Preferred by Air New Zealand cadet programme. New Zealand's diverse terrain offers unique mountain flying experience.",
        pros: ["Fastest route to airline", "Air NZ cadet pathway", "Internationally recognised"],
        cons: ["Higher upfront cost", "Less flexibility"],
      },
      {
        title: "Modular CPL/ATPL",
        badge: "Most flexible",
        cost: "NZ$60,000 – NZ$100,000",
        duration: "2–4 years",
        desc: "Build your licences step by step — PPL, CPL, then ATPL theory and hours. CAA NZ licences can be converted to CASA, FAA, or EASA with minimal additional requirements.",
        pros: ["Lower cost per stage", "Work while training", "ICAO-compliant conversion"],
        cons: ["Longer overall timeline", "Requires self-management"],
      },
    ],
    tools: [
      { icon: "🗺️", label: "Career Readiness Assessment", href: "/quiz", desc: "Get your personalised CAA NZ training roadmap" },
      { icon: "🧮", label: "Cost Calculator", href: "/tools/calculator", desc: "Estimate your total CPL/ATPL training cost in NZD" },
      { icon: "🩺", label: "Medical Check", href: "/tools/class-1-medical-check", desc: "Assess your CAA NZ Class 1 medical eligibility" },
      { icon: "✈️", label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Air New Zealand and regional cadet programmes" },
    ],
    guides: [
      { title: "Pilot Training Costs in New Zealand 2026: Full Breakdown", href: "/new-zealand/guides/new-zealand-pilot-training-costs", desc: "CAA NZ CPL and ATPL training costs in NZD — real 2026 figures from New Zealand flight schools.", tag: "Essential" },
      { title: "CAA NZ CPL Requirements 2026: Complete Guide", href: "/new-zealand/guides/nz-cpl-requirements", desc: "Everything you need to know about getting your New Zealand CPL — hours, exams, and costs.", tag: "Licence" },
      { title: "CAA NZ Class 1 Medical Certificate 2026", href: "/new-zealand/guides/nz-medical-class-1", desc: "CAA NZ medical requirements, approved AMEs, and how to prepare for your Class 1 in New Zealand.", tag: "Medical" },
      { title: "Air New Zealand Cadet Pilot Programme 2026", href: "/new-zealand/guides/air-new-zealand-cadet-pilot-training", desc: "How to join Air New Zealand's cadet programme — eligibility, selection process, and career pathway.", tag: "Cadets" },
      { title: "New Zealand Pilot Salary 2026", href: "/new-zealand/guides/new-zealand-pilot-salary-2026", desc: "How much do pilots earn in New Zealand? First Officer to Captain salary breakdown in NZD.", tag: "Salary" },
      { title: "New Zealand Pilot Shortage 2026", href: "/new-zealand/guides/new-zealand-pilot-shortage", desc: "The growing pilot shortage in New Zealand — opportunities, timelines, and how to position yourself.", tag: "Career" },
    ],
    schoolsSectionTitle: "New Zealand Flight Schools",
    schoolsSectionDesc: "Browse CAA NZ-approved flight schools across New Zealand. Compare costs, locations, and training routes.",
    finalCtaHeading: "Ready to start your New Zealand pilot journey?",
    finalCtaSubtext: "Get your personalised CAA NZ training roadmap in under 5 minutes. Free, no registration required.",
    whyTrain: {
      heading: "Why Train in New Zealand?",
      reasons: [
        { icon: "☀️", title: "Excellent flying weather", desc: "New Zealand's diverse climate offers excellent VFR flying conditions, particularly in the South Island, with minimal weather-related training delays." },
        { icon: "🌏", title: "ICAO-compliant licences", desc: "CAA NZ licences are internationally recognised and can be converted to CASA (Australia), FAA (USA), or EASA licences with minimal additional requirements." },
        { icon: "✈️", title: "Air New Zealand cadet programme", desc: "Air New Zealand's cadet programme is one of the most prestigious in the Southern Hemisphere, offering a direct pathway to a major international airline." },
        { icon: "🏔️", title: "Unique mountain flying experience", desc: "New Zealand's terrain offers unique mountain flying experience that is highly valued by international airlines and operators worldwide." },
      ],
    },
  },
};

// ─── Icon helper ──────────────────────────────────────────────────────────────
function StatIcon({ name }: { name: StatItem["iconName"] }) {
  const cls = "w-5 h-5";
  if (name === "dollar") return <DollarSign className={cls} />;
  if (name === "clock") return <Clock className={cls} />;
  if (name === "shield") return <Shield className={cls} />;
  if (name === "trending") return <TrendingUp className={cls} />;
  return <Users className={cls} />;
}

// ─── CountryHub Component ─────────────────────────────────────────────────────
export default function CountryHub() {
  const [location] = useLocation();
  const { setCountry } = useCountry();

  // Derive slug from the URL path — e.g. "/australia" → "australia"
  const slug = location.replace(/^\//, "").split("/")[0];
  const config = COUNTRY_HUB_CONFIGS[slug] ?? null;

  // Sync the country context so nav/footer update correctly
  useEffect(() => {
    if (slug && config) {
      setCountry(slug as any);
    }
  }, [slug]);

  // 404 fallback for unknown slugs
  if (!config) {
    return (
      <>
        <PublicNav />
        <div className="min-h-screen flex items-center justify-center" style={{ background: "oklch(0.11 0.08 252)" }}>
          <div className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <h1 className="text-2xl font-bold text-white mb-3">Country not found</h1>
            <p className="mb-6" style={{ color: muted }}>
              We don't have a dedicated hub for this country yet.
            </p>
            <Link href="/select" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient }}>
              Select your country <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <PublicFooter />
      </>
    );
  }

  return (
    <>
      <SEO
        title={config.seo.title}
        description={config.seo.description}
        canonical={config.seo.canonical}
      />
      <PublicNav />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 50%, oklch(0.12 0.08 240) 100%)",
          minHeight: "auto",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, oklch(0.10 0.10 255 / 0.88) 0%, oklch(0.10 0.10 255 / 0.55) 50%, oklch(0.10 0.10 255 / 0.25) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="container relative w-full py-12 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{ background: "oklch(1 0 0 / 0.07)", border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.75 0.04 240)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {config.edition}
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white mb-4 leading-[1.1]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Your Personalised{" "}
                <span style={{ background: ctaGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {config.heroTitle}
                </span>
              </h1>
              <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "oklch(0.72 0.04 240)" }}>
                {config.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={config.roadmapHref}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all"
                  style={{ background: ctaGradient, boxShadow: "0 0 30px oklch(0.72 0.18 65 / 0.35)" }}
                >
                  Generate My Free Pilot Roadmap
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white/80 no-underline transition-all hover:text-white"
                  style={{ background: "oklch(1 0 0 / 0.06)", border: "1px solid oklch(1 0 0 / 0.15)" }}
                >
                  Full Career Assessment
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-5 mt-8">
                {config.heroBullets.map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "oklch(0.72 0.18 65)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {config.stats.map(s => (
                <div key={s.label} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                  <div className="mb-3" style={{ color: "oklch(0.72 0.18 65)" }}>
                    <StatIcon name={s.iconName} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-sm" style={{ color: "oklch(0.55 0.04 240)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip (mobile) ── */}
      <section className="py-10 border-b lg:hidden" style={{ background: "oklch(0.13 0.07 245)", borderColor: "oklch(1 0 0 / 0.08)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {config.stats.map(stat => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <div className="p-2 rounded-lg" style={{ background: "oklch(0.65 0.22 45 / 0.1)", color: "oklch(0.75 0.22 45)" }}>
                  <StatIcon name={stat.iconName} />
                </div>
                <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs" style={{ color: "oklch(0.55 0.04 240)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Train Here (optional) ── */}
      {config.whyTrain && (
        <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {config.whyTrain.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.whyTrain.reasons.map(item => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl" style={{ background: surface, border }}>
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs" style={{ color: muted }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Training Routes ── */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {config.regulator} Training Routes Explained
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "oklch(0.6 0.04 240)" }}>
              Understanding the difference between your training options is the first decision you'll make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config.routes.map(route => (
              <div key={route.title} className="rounded-2xl p-6" style={{ background: surface, border }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{route.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "oklch(0.72 0.18 65 / 0.15)", color: "oklch(0.72 0.18 65)" }}>
                    {route.badge}
                  </span>
                </div>
                <div className="flex gap-4 mb-4">
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "oklch(0.5 0.04 240)" }}>Typical cost</p>
                    <p className="text-sm font-bold text-white">{route.cost}</p>
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "oklch(0.5 0.04 240)" }}>Duration</p>
                    <p className="text-sm font-bold text-white">{route.duration}</p>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: "oklch(0.65 0.04 240)" }}>{route.desc}</p>
                <div className="space-y-1">
                  {route.pros.map(p => (
                    <div key={p} className="flex items-center gap-2 text-xs" style={{ color: "oklch(0.65 0.04 240)" }}>
                      <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient }}>
              Find my best route <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EU Countries Grid (Europe only) ── */}
      {config.euCountries && (
        <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Train Anywhere in Europe</h2>
            <p className="text-center mb-10 text-sm" style={{ color: muted }}>Your EASA licence is valid across all 32 member states</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {config.euCountries.map(c => (
                <div key={c.name} className="rounded-xl p-4 text-center" style={{ background: surface, border }}>
                  <div className="text-3xl mb-2">{c.flag}</div>
                  <div className="text-sm font-bold text-white mb-1">{c.name}</div>
                  <div className="text-xs" style={{ color: "oklch(0.5 0.04 240)" }}>{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Tools ── */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
            {config.label} Pilot Training Tools
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: muted }}>
            Free tools built for {config.regulator} candidates
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.tools.map(tool => (
              <Link
                key={tool.href + tool.label}
                href={tool.href}
                className="group flex flex-col p-5 rounded-2xl no-underline transition-all hover:scale-[1.02]"
                style={{ background: surface, border }}
              >
                <span className="text-3xl mb-4">{tool.icon}</span>
                <h3 className="text-sm font-bold text-white mb-1">{tool.label}</h3>
                <p className="text-xs flex-1" style={{ color: muted }}>{tool.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: "oklch(0.65 0.22 45)" }}>
                  Open tool <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guides ── */}
      <section className="py-16" style={{ background: "oklch(0.12 0.06 240)" }}>
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {config.label} Pilot Training Guides
              </h2>
              <p className="text-sm" style={{ color: muted }}>
                Researched, accurate, and specific to {config.regulator} regulations
              </p>
            </div>
            <Link href="/guides" className="hidden sm:flex items-center gap-1 text-sm font-semibold no-underline" style={{ color: "oklch(0.65 0.22 45)" }}>
              All guides <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.guides.map(g => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col p-5 rounded-2xl no-underline transition-all hover:scale-[1.01]"
                style={{ background: surface, border }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "oklch(0.65 0.18 240 / 0.15)", color: "oklch(0.65 0.18 240)" }}>
                    {g.tag}
                  </span>
                  <BookOpen className="w-3.5 h-3.5" style={{ color: "oklch(0.45 0.04 240)" }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{g.title}</h3>
                <p className="text-xs flex-1" style={{ color: muted }}>{g.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: "oklch(0.65 0.22 45)" }}>
                  Read guide <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flight Schools ── */}
      <section className="py-16" style={{ background: "oklch(0.11 0.07 245)" }}>
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{config.schoolsSectionTitle}</h2>
          <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "oklch(0.6 0.04 240)" }}>
            {config.schoolsSectionDesc}
          </p>
          <Link href="/schools" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white no-underline" style={{ background: ctaGradient }}>
            <School className="w-4 h-4" />
            Browse {config.label} Schools
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)" }}>
        <div className="container text-center max-w-2xl">
          <div className="text-5xl mb-6">{config.flag}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{config.finalCtaHeading}</h2>
          <p className="text-lg mb-8" style={{ color: "oklch(0.65 0.04 240)" }}>{config.finalCtaSubtext}</p>
          <Link
            href={config.roadmapHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline"
            style={{ background: ctaGradient, boxShadow: "0 0 40px oklch(0.72 0.18 65 / 0.3)" }}
          >
            Generate My Free Pilot Roadmap
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <PublicFooter />
    </>
  );
}
