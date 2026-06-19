import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Plane, ChevronDown, Zap, LayoutDashboard, LogIn, LogOut } from "lucide-react";
import { getLoginUrl } from "@/const";
import { useCurrency, SUPPORTED_CURRENCIES } from "@/contexts/CurrencyContext";
import { useCountry } from "@/contexts/CountryContext";
import { useAuth } from "@/_core/hooks/useAuth";

// ─── Per-country nav config ────────────────────────────────────────────────────
type NavLink = { label: string; href: string };
type ToolLink = { label: string; href: string; desc: string; icon: string };
type Announcement = { text: string; href: string };

interface CountryNavConfig {
  flag: string;
  code: string;
  homeHref: string;
  navLinks: NavLink[];
  toolLinks: ToolLink[];
  announcements: Announcement[];
}

const SHARED_TOOLS: ToolLink[] = [
  { label: "Pilot Roadmap Generator", href: "/roadmap", desc: "Get your personalised training roadmap", icon: "🗺️" },
  { label: "Cost Calculator", href: "/calculator", desc: "Estimate your total training cost", icon: "🧮" },
  { label: "Medical Condition Lookup", href: "/tools/medical-condition-lookup", desc: "Check any condition against pilot medical standards", icon: "🔍" },
  { label: "Cadet Eligibility Checker", href: "/tools/cadet-eligibility", desc: "Find which airline programmes you qualify for", icon: "✈️" },
];

const NAV_CONFIG: Record<string, CountryNavConfig> = {
  uk: {
    flag: "🇬🇧", code: "UK", homeHref: "/",
    navLinks: [
      { label: "Quizzes", href: "/quizzes" },
      { label: "Flight Schools", href: "/schools" },
      { label: "Guides", href: "/guides" },
      { label: "Pilot Stories", href: "/stories" },
      { label: "Jobs", href: "/jobs" },
      { label: "About", href: "/about" },
    ],
    toolLinks: [
      ...SHARED_TOOLS,
      { label: "Integrated vs Modular", href: "/tools/integrated-vs-modular", desc: "Find the right training route", icon: "⚖️" },
      { label: "Medical Readiness Check", href: "/tools/class-1-medical-check", desc: "Assess your CAA/EASA pilot medical eligibility", icon: "🩺" },
      { label: "Finance Calculator", href: "/tools/finance-calculator", desc: "Model loan repayments vs pilot salary over time", icon: "💷" },
      { label: "Salary Estimator", href: "/tools/salary-estimator", desc: "Project your career earnings by airline and seniority", icon: "📈" },
      { label: "Route Selector", href: "/tools/route-selector", desc: "Answer 5 questions to find your ideal training route", icon: "🧭" },
    ],
    announcements: [
      { text: "New guide: BA Speedbird Academy 2026 — full requirements and selection process", href: "/guides/ba-speedbird-academy" },
    ],
  },
  us: {
    flag: "🇺🇸", code: "US", homeHref: "/",
    navLinks: [
      { label: "Quizzes", href: "/quizzes" },
      { label: "US Schools", href: "/us/schools" },
      { label: "Guides", href: "/guides" },
      { label: "Pilot Stories", href: "/stories" },
      { label: "Jobs", href: "/jobs" },
      { label: "About", href: "/about" },
    ],
    toolLinks: [
      ...SHARED_TOOLS,
      { label: "Part 61 vs Part 141", href: "/tools/integrated-vs-modular", desc: "Find the right FAA training route for you", icon: "⚖️" },
      { label: "Salary Estimator", href: "/tools/salary-estimator", desc: "Project your FAA career earnings by airline and seniority", icon: "📈" },
      { label: "Route Selector", href: "/tools/route-selector", desc: "Part 61, Part 141, or cadet — find your FAA path", icon: "🧭" },
    ],
    announcements: [
      { text: "New guide: Delta Propel Program — how to get selected in 2026", href: "/us/guides/delta-propel-program" },
    ],
  },
  australia: {
    flag: "🇦🇺", code: "AU", homeHref: "/",
    navLinks: [
      { label: "Quizzes", href: "/quizzes" },
      { label: "Flight Schools", href: "/australia/guides/best-flight-schools-australia" },
      { label: "Guides", href: "/guides" },
      { label: "Pilot Stories", href: "/stories" },
      { label: "Jobs", href: "/jobs" },
      { label: "About", href: "/about" },
    ],
    toolLinks: SHARED_TOOLS,
    announcements: [
      { text: "New guide: Qantas Group Pilot Academy — 2026 requirements and selection", href: "/australia/guides/qantas-group-pilot-academy" },
    ],
  },
  canada: {
    flag: "🇨🇦", code: "CA", homeHref: "/",
    navLinks: [
      { label: "Quizzes", href: "/quizzes" },
      { label: "Flight Schools", href: "/canada/guides/best-flight-schools-canada" },
      { label: "Guides", href: "/guides" },
      { label: "Pilot Stories", href: "/stories" },
      { label: "Jobs", href: "/jobs" },
      { label: "About", href: "/about" },
    ],
    toolLinks: SHARED_TOOLS,
    announcements: [
      { text: "New guide: Air Canada Pathways Program — 2026 requirements and timeline", href: "/canada/guides/air-canada-pathways" },
    ],
  },
  europe: {
    flag: "🇪🇺", code: "EU", homeHref: "/",
    navLinks: [
      { label: "Quizzes", href: "/quizzes" },
      { label: "Flight Schools", href: "/europe/guides/best-flight-schools-europe" },
      { label: "Guides", href: "/guides" },
      { label: "Pilot Stories", href: "/stories" },
      { label: "Jobs", href: "/jobs" },
      { label: "About", href: "/about" },
    ],
    toolLinks: [
      ...SHARED_TOOLS,
      { label: "Integrated vs Modular", href: "/tools/integrated-vs-modular", desc: "Find the right EASA training route", icon: "⚖️" },
    ],
    announcements: [
      { text: "New guide: Ryanair Mentorship Programme — 2026 requirements and how to apply", href: "/europe/guides/ryanair-mentorship" },
    ],
  },
  "new-zealand": {
    flag: "🇳🇿", code: "NZ", homeHref: "/",
    navLinks: [
      { label: "Quizzes", href: "/quizzes" },
      { label: "Flight Schools", href: "/new-zealand/guides/best-flight-schools-new-zealand" },
      { label: "Guides", href: "/guides" },
      { label: "Pilot Stories", href: "/stories" },
      { label: "Jobs", href: "/jobs" },
      { label: "About", href: "/about" },
    ],
    toolLinks: SHARED_TOOLS,
    announcements: [
      { text: "New guide: Air New Zealand cadet programme — 2026 requirements and selection", href: "/new-zealand/guides/air-new-zealand-cadet" },
    ],
  },
  "south-africa": {
    flag: "🇿🇦", code: "ZA", homeHref: "/",
    navLinks: [
      { label: "Quizzes", href: "/quizzes" },
      { label: "Flight Schools", href: "/south-africa/guides/best-flight-schools-south-africa" },
      { label: "Guides", href: "/guides" },
      { label: "Pilot Stories", href: "/stories" },
      { label: "Jobs", href: "/jobs" },
      { label: "About", href: "/about" },
    ],
    toolLinks: SHARED_TOOLS,
    announcements: [
      { text: "New guide: South African pilot salary guide 2026 — SACAA, airlines and career outlook", href: "/south-africa/guides/pilot-salary-south-africa" },
    ],
  },
  uae: {
    flag: "🇦🇪", code: "UAE", homeHref: "/",
    navLinks: [
      { label: "Quizzes", href: "/quizzes" },
      { label: "Guides", href: "/guides" },
      { label: "Flight Schools", href: "/uae/guides/best-flight-schools-uae" },
      { label: "Pilot Stories", href: "/stories" },
      { label: "Jobs", href: "/jobs" },
      { label: "About", href: "/about" },
    ],
    toolLinks: SHARED_TOOLS,
    announcements: [
      { text: "New guide: Emirates and Etihad cadet programmes — 2026 requirements and pay", href: "/uae/guides/emirates-cadet-programme" },
    ],
  },
};

function getConfig(country: string | null): CountryNavConfig {
  if (!country) return NAV_CONFIG.uk;
  return NAV_CONFIG[country] ?? NAV_CONFIG.uk;
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar({ announcements }: { announcements: Announcement[] }) {
  const ann = announcements[0];
  if (!ann) return null;
  return (
    <div
      className="w-full text-center py-1.5 px-4 text-xs font-medium flex items-center justify-center gap-2"
      style={{ background: "oklch(0.55 0.20 65)", color: "oklch(0.10 0.05 50)" }}
    >
      <span
        className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
        style={{ background: "oklch(0.10 0.05 50 / 0.15)" }}
      >
        NEW
      </span>
      <a href={ann.href} className="hover:underline" style={{ color: "inherit" }}>
        {ann.text}
      </a>
    </div>
  );
}

// ─── Currency Switcher ────────────────────────────────────────────────────────
function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
        style={{ color: "oklch(0.7 0.04 240)", border: "1px solid oklch(1 0 0 / 0.12)" }}
        aria-label="Change currency"
        aria-expanded={open}
      >
        <span>{currency.flag}</span>
        <span className="font-semibold text-white/80">{currency.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-52 rounded-xl z-50 py-1 animate-fade-in"
          style={{
            background: "oklch(0.14 0.08 250)",
            border: "1px solid oklch(1 0 0 / 0.12)",
            boxShadow: "0 16px 40px oklch(0 0 0 / 0.5)",
          }}
        >
          <p className="text-xs px-3 py-2 font-medium uppercase tracking-wider" style={{ color: "oklch(0.55 0.04 240)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
            Select currency
          </p>
          {SUPPORTED_CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => { setCurrency(c.code); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                currency.code === c.code ? "text-[var(--color-primary)]" : "text-white/70 hover:text-white"
              }`}
              style={currency.code === c.code ? { background: "oklch(0.45 0.18 240 / 0.15)" } : {}}
            >
              <span className="text-base">{c.flag}</span>
              <span className="font-medium">{c.code}</span>
              <span className="text-xs ml-auto" style={{ color: "oklch(0.5 0.04 240)" }}>{c.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── User Menu ────────────────────────────────────────────────────────────────
function UserMenu({ user }: { user: { name?: string | null; email?: string | null } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const initials = (user.name ?? user.email ?? "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-semibold transition-all"
        style={{ color: "oklch(0.75 0.04 240)", border: "1px solid oklch(1 0 0 / 0.12)" }}
        aria-label="Account menu"
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ background: "oklch(0.45 0.18 240)", color: "white" }}
        >
          {initials}
        </div>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-52 rounded-xl z-50 py-2 animate-fade-in"
          style={{
            background: "oklch(0.14 0.08 250)",
            border: "1px solid oklch(1 0 0 / 0.12)",
            boxShadow: "0 16px 40px oklch(0 0 0 / 0.5)",
          }}
        >
          <div className="px-4 py-2" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}>
            <p className="text-sm font-semibold text-white truncate">{user.name ?? "Pilot"}</p>
            {user.email && <p className="text-xs truncate" style={{ color: "oklch(0.55 0.04 240)" }}>{user.email}</p>}
          </div>
          <button
            type="button"
            onClick={() => { logout(); setOpen(false); }}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-white/70 hover:text-white"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main Nav ─────────────────────────────────────────────────────────────────
export default function PublicNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const [location, navigate] = useLocation();
  const { currency, setCurrency } = useCurrency();
  const { country } = useCountry();
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  const cfg = getConfig(country);
  const { navLinks, toolLinks, announcements, flag, code, homeHref } = cfg;
  const ctaHref = "/quiz";
  const ctaLabel = "Free Assessment";

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) setToolsOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    background: scrolled ? "oklch(0.10 0.08 250 / 0.92)" : "oklch(0.10 0.08 250 / 0.75)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid oklch(1 0 0 / 0.08)",
    transition: "background 0.3s ease",
  };

  const isActive = (href: string) => location === href;

  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar announcements={announcements} />
        <nav style={navStyle}>
          <div className="container">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link href={homeHref} className="flex items-center gap-2.5 font-display font-bold text-xl text-white no-underline group">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))" }}
                >
                  <Plane className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span>AviatorPath</span>
              </Link>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all no-underline ${
                      isActive(link.href)
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Tools dropdown */}
                <div ref={toolsRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setToolsOpen(!toolsOpen)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      toolLinks.some(t => isActive(t.href))
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    Tools
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {toolsOpen && (
                    <div
                      className="absolute left-0 top-full mt-2 w-72 rounded-xl z-50 py-2 animate-fade-in"
                      style={{
                        background: "oklch(0.12 0.08 250)",
                        border: "1px solid oklch(1 0 0 / 0.12)",
                        boxShadow: "0 20px 60px oklch(0 0 0 / 0.6)",
                      }}
                    >
                      <p className="text-xs px-4 py-2 font-semibold uppercase tracking-widest" style={{ color: "oklch(0.45 0.04 240)" }}>
                        {code} Decision Tools
                      </p>
                      {toolLinks.map((t) => (
                        <Link
                          key={t.href}
                          href={t.href}
                          onClick={() => setToolsOpen(false)}
                          className="flex items-start gap-3 px-4 py-3 transition-colors no-underline group/item"
                          style={{ borderRadius: "0" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "oklch(1 0 0 / 0.05)")}
                          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >
                          <span className="text-lg mt-0.5 flex-shrink-0">{t.icon}</span>
                          <div>
                            <div className="text-sm font-semibold text-white/90 group-hover/item:text-white transition-colors">{t.label}</div>
                            <div className="text-xs mt-0.5" style={{ color: "oklch(0.5 0.04 240)" }}>{t.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right: region switcher + currency + auth + CTA */}
              <div className="hidden md:flex items-center gap-2">
                <CurrencySwitcher />

                {/* Region Switcher */}
                <button
                  type="button"
                  onClick={() => navigate("/select")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                  style={{ color: "oklch(0.78 0.04 240)", border: "1px solid oklch(1 0 0 / 0.15)", background: "oklch(1 0 0 / 0.04)" }}
                  title="Change your country to see region-specific guides, costs, and schools"
                  aria-label="Change country"
                >
                  <span>{flag}</span>
                  <span>{code}</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>

                {user?.role === "admin" && (
                  <Link
                    href="/admin"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all no-underline"
                    style={{ color: "oklch(0.85 0.15 65)", border: "1px solid oklch(0.72 0.18 65 / 0.35)", background: "oklch(0.72 0.18 65 / 0.10)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.18 65 / 0.20)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.18 65 / 0.10)"; }}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    Dashboard
                  </Link>
                )}
                {user && user.role !== "admin" && <UserMenu user={user} />}
                {!user && (
                  <a
                    href={getLoginUrl()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all no-underline"
                    style={{ color: "oklch(0.75 0.04 240)", border: "1px solid oklch(1 0 0 / 0.12)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "oklch(1 0 0 / 0.07)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    Sign in
                  </a>
                )}
                <Link
                  href="/for-schools"
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all no-underline"
                  style={{ color: "white", border: "1px solid oklch(1 0 0 / 0.15)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "oklch(1 0 0 / 0.08)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  For Schools
                </Link>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-bold text-white no-underline transition-all"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))",
                    boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.3)",
                  }}
                >
                  <Zap className="w-3.5 h-3.5" />
                  {ctaLabel}
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                className="md:hidden p-2 rounded-lg text-white/60 hover:text-white transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
              <div
                className="md:hidden py-3 animate-fade-in"
                style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium rounded-lg no-underline transition-colors"
                    style={{ color: isActive(link.href) ? "white" : "oklch(0.7 0.04 240)" }}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="px-4 py-2">
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.45 0.04 240)" }}>Tools</p>
                </div>
                {toolLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg no-underline transition-colors"
                    style={{ color: "oklch(0.7 0.04 240)" }}
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </Link>
                ))}

                {/* Country switcher */}
                <div className="px-4 py-3" style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
                  <Link
                    href="/select"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all no-underline"
                    style={{ border: "1px solid oklch(1 0 0 / 0.15)", color: "oklch(0.75 0.04 240)" }}
                  >
                    {flag} Change country ({code})
                  </Link>
                </div>

                {user?.role === "admin" && (
                  <Link
                    href="/admin"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg no-underline"
                    style={{ color: "oklch(0.85 0.15 65)" }}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>
                )}
                {user && user.role !== "admin" && (
                  <div style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }} className="px-4 py-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "oklch(0.45 0.18 240)", color: "white" }}>
                        {(user.name ?? user.email ?? "U").split(" ").map((w: string) => w[0]).join("").slice(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{user.name ?? "Pilot"}</p>
                        {user.email && <p className="text-xs truncate" style={{ color: "oklch(0.55 0.04 240)" }}>{user.email}</p>}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => { logout(); setMobileOpen(false); }}
                      className="flex items-center gap-2 text-sm transition-colors text-white/60 hover:text-white"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                )}
                {!user && (
                  <div className="px-4 py-2" style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
                    <a
                      href={getLoginUrl()}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-2.5 text-sm font-semibold no-underline transition-colors"
                      style={{ color: "oklch(0.7 0.04 240)" }}
                    >
                      <LogIn className="w-4 h-4" />
                      Sign in
                    </a>
                  </div>
                )}
                <Link
                  href="/for-schools"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold rounded-lg no-underline"
                  style={{ color: "oklch(0.7 0.04 240)" }}
                >
                  For Schools
                </Link>

                {/* Mobile currency picker */}
                <div className="px-4 pt-3 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "oklch(0.45 0.04 240)" }}>Currency</p>
                  <div className="flex flex-wrap gap-2">
                    {SUPPORTED_CURRENCIES.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => { setCurrency(c.code); setMobileOpen(false); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors"
                        style={{
                          border: `1px solid ${currency.code === c.code ? "oklch(0.45 0.18 240)" : "oklch(1 0 0 / 0.12)"}`,
                          background: currency.code === c.code ? "oklch(0.45 0.18 240 / 0.15)" : "transparent",
                          color: currency.code === c.code ? "oklch(0.7 0.18 240)" : "oklch(0.7 0.04 240)",
                          fontWeight: currency.code === c.code ? "700" : "500",
                        }}
                      >
                        <span>{c.flag}</span>
                        <span>{c.code}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-4 pt-2 pb-1">
                  <Link
                    href={ctaHref}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold text-white no-underline"
                    style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))" }}
                  >
                    <Zap className="w-4 h-4" />
                    {ctaLabel}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
