import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { ArrowRight, Clock, BookOpen, ChevronRight, Zap, Mail, CheckCircle2, List, ShieldCheck } from "lucide-react";
import GuideSourcesBox, { type GuideSource } from "@/components/GuideSourcesBox";
import { trpc } from "@/lib/trpc";

// ─── Inline Email Capture ────────────────────────────────────────────
function InlineEmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [location] = useLocation();

  const subscribe = trpc.guides.subscribe.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: () => setSubmitted(true), // still show success to user
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    subscribe.mutate({ email, source: `guide:${location}` });
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl my-6" style={{ background: "oklch(0.55 0.18 145 / 0.1)", border: "1px solid oklch(0.55 0.18 145 / 0.25)" }}>
        <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "oklch(0.7 0.18 145)" }} />
        <p className="text-sm" style={{ color: "oklch(0.75 0.04 240)" }}>
          <strong className="text-white">You're on the list.</strong> We'll email you when new guides and tools drop — no spam, unsubscribe any time.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5 rounded-xl my-6" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.18)" }}>
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-4 h-4" style={{ color: "oklch(0.65 0.18 240)" }} />
        <p className="text-sm font-semibold text-white">Get new guides before everyone else</p>
      </div>
      <p className="text-xs mb-3" style={{ color: "oklch(0.55 0.04 240)" }}>We publish new pilot training guides and tools monthly. No spam. Unsubscribe any time.</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "oklch(0.16 0.08 250)", border: "1px solid oklch(1 0 0 / 0.12)", color: "white" }}
        />
        <button
          type="submit"
          disabled={subscribe.isPending}
          className="px-4 py-2 rounded-lg text-sm font-bold text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))", opacity: subscribe.isPending ? 0.7 : 1 }}
        >
          {subscribe.isPending ? "..." : "Notify me"}
        </button>
      </form>
    </div>
  );
}

// ─── Table of Contents ────────────────────────────────────────────────
interface TocItem {
  id: string;
  heading: string;
}

function TableOfContents({ items, ctaHref, ctaText }: { items: TocItem[]; ctaHref: string; ctaText: string }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0">
      <div
        className="sticky top-24 rounded-2xl p-5"
        style={{ background: "oklch(0.14 0.08 250)", border: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <List className="w-4 h-4" style={{ color: "oklch(0.65 0.18 240)" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "oklch(0.5 0.04 240)" }}>
            In this guide
          </span>
        </div>
        <nav>
          <ol className="space-y-2">
            {items.map(({ id, heading }, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex items-start gap-2 text-xs leading-snug no-underline transition-colors group"
                  style={{ color: activeId === id ? "white" : "oklch(0.55 0.04 240)" }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-colors"
                    style={{
                      background: activeId === id ? "oklch(0.45 0.18 240 / 0.4)" : "oklch(0.45 0.18 240 / 0.1)",
                      color: activeId === id ? "oklch(0.75 0.18 240)" : "oklch(0.5 0.18 240)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="group-hover:text-white transition-colors">{heading}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-5 pt-4" style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)" }}>
          <Link
            href={ctaHref}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-bold text-white no-underline"
            style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))", boxShadow: "0 0 14px oklch(0.72 0.18 65 / 0.2)" }}
          >
            <Zap className="w-3 h-3" />
            {ctaText}
          </Link>
        </div>
      </div>
    </aside>
  );
}

interface GuideSection {
  heading: string;
  content: React.ReactNode;
}

interface RelatedGuide {
  title: string;
  href: string;
  time: string;
}

interface GuideLayoutProps {
  title: string;
  subtitle: string;
  readTime: string;
  sections: GuideSection[];
  relatedGuides?: RelatedGuide[];
  ctaText?: string;
  ctaHref?: string;
  canonical?: string;
  metaDescription?: string;
  faqSchema?: { question: string; answer: string }[];
  author?: string;
  authorRole?: string;
  lastUpdated?: string;
  category?: string;
  heroImage?: string;
  /** Optional scope banner shown above the article for non-UK/US readers */
  scopeBanner?: React.ReactNode;
  /** Sources reviewed for this guide */
  sources?: GuideSource[];
}

const surface = "oklch(0.14 0.08 250)";
const border = "oklch(1 0 0 / 0.08)";
const borderHover = "oklch(1 0 0 / 0.18)";
const muted = "oklch(0.55 0.04 240)";
const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";
const brandGradient = "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";

/** Convert a section heading to a URL-safe id */
function toId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

export default function GuideLayout({
  title,
  subtitle,
  readTime,
  sections,
  relatedGuides = [],
  ctaText = "Find my training route",
  ctaHref = "/quiz",
  canonical,
  metaDescription,
  faqSchema,
  author = "Joshua Fagan",
  authorRole = "Founder, AviatorIQ — researched from CAA, EASA & official school prospectuses",
  lastUpdated = "June 2026",
  category,
  heroImage,
  scopeBanner,
  sources,
}: GuideLayoutProps) {
  const schemas: object[] = [];

  if (faqSchema && faqSchema.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSchema.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription || subtitle,
    publisher: { "@type": "Organization", name: "AviatorIQ", url: "https://aviatoriq.com", logo: { "@type": "ImageObject", url: "https://aviatoriq.com/logo.png" } },
    author: { "@type": "Person", name: author, url: "https://aviatoriq.com/about-our-authors" },
    dateModified: lastUpdated,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical ? (canonical.startsWith("http") ? canonical : `https://aviatoriq.com${canonical}`) : "https://aviatoriq.com" },
  });

  // Breadcrumb schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aviatoriq.com" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://aviatoriq.com/guides" },
      { "@type": "ListItem", position: 3, name: title, item: canonical ? (canonical.startsWith("http") ? canonical : `https://aviatoriq.com${canonical}`) : "https://aviatoriq.com" },
    ],
  });

  // Organization schema (sitewide)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AviatorIQ",
    url: "https://aviatoriq.com",
    logo: "https://aviatoriq.com/logo.png",
    sameAs: [],
    contactPoint: { "@type": "ContactPoint", email: "hello@aviatoriq.com", contactType: "customer support" },
  });

  // Build ToC items from section headings
  const tocItems: TocItem[] = sections.map((s) => ({
    id: toId(s.heading),
    heading: s.heading,
  }));

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.10 0.08 252)" }}>
      <SEO
        title={`${title} | AviatorIQ`}
        description={metaDescription || subtitle}
        canonical={canonical}
        schema={schemas}
      />
      <PublicNav />
      <main className="flex-1">

        {/* Hero */}
        <div
          className="relative overflow-hidden py-10 md:py-14"
          style={{ background: "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url('${heroImage || '/manus-storage/airplane-takeoff_6f139e92.jpg'}')`, backgroundSize: "cover", backgroundPosition: "center 40%", opacity: heroImage ? 0.18 : 0.08 }} />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
          <div className="container max-w-5xl relative">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-5" style={{ color: "oklch(0.5 0.04 240)" }}>
              <Link href="/guides" className="no-underline transition-colors hover:text-white" style={{ color: "oklch(0.5 0.04 240)" }}>Guides</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span style={{ color: "oklch(0.7 0.04 240)" }}>{title}</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>{title}</h1>
            <p className="text-base md:text-lg mb-4 max-w-2xl" style={{ color: "oklch(0.65 0.04 240)" }}>{subtitle}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: "oklch(0.5 0.04 240)" }}>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "oklch(0.45 0.18 240 / 0.2)", color: "oklch(0.65 0.18 240)" }}>JF</div>
                <Link href="/about-our-authors" className="no-underline hover:text-white transition-colors" style={{ color: "oklch(0.5 0.04 240)" }}>{author}</Link>
              </span>
              <span className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.55 0.18 145)" }} />
                <span style={{ color: "oklch(0.55 0.18 145)" }}>Updated {lastUpdated}</span>
              </span>
              {/* Editorial Policy badge */}
              <Link
                href="/editorial-policy"
                className="flex items-center gap-1.5 no-underline transition-colors hover:text-white"
                style={{ color: "oklch(0.5 0.04 240)" }}
              >
                <ShieldCheck className="w-3.5 h-3.5" style={{ color: "oklch(0.65 0.18 240)" }} />
                <span className="text-xs">Editorial Policy</span>
              </Link>
            </div>
            {authorRole && (
              <p className="text-xs mt-2" style={{ color: "oklch(0.42 0.04 240)" }}>{authorRole}</p>
            )}
          </div>
        </div>

        {/* Content area — two-column on xl screens */}
        <div className="py-6 md:py-10 px-4" style={{ background: "oklch(0.11 0.08 252)" }}>
          <div className="container max-w-5xl">
            <div className="flex gap-10 items-start">

              {/* Main content column */}
              <div className="flex-1 min-w-0">

                {/* Mid-page CTA banner */}
                <div
                  className="flex flex-col sm:flex-row items-center gap-3 p-4 md:p-5 rounded-2xl mb-6"
                  style={{ background: "oklch(0.45 0.18 240 / 0.08)", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}
                >
                  <div className="flex-1">
                    <p className="font-display font-bold text-white text-sm mb-0.5">Get your personalised pilot roadmap</p>
                    <p className="text-xs" style={{ color: muted }}>Free 5-minute assessment. No registration required.</p>
                  </div>
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white no-underline whitespace-nowrap flex-shrink-0"
                    style={{ background: ctaGradient, boxShadow: "0 0 16px oklch(0.72 0.18 65 / 0.25)" }}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    {ctaText}
                  </Link>
                </div>

                {/* Scope banner for non-UK/US readers */}
                {scopeBanner && (
                  <div className="mb-2">{scopeBanner}</div>
                )}

                {/* Article content */}
                <div
                  className="p-5 md:p-8 lg:p-10 rounded-2xl mb-6"
                  style={{ background: surface, border: `1px solid ${border}` }}
                >
                  {sections.map((section, i) => (
                    <div
                      key={i}
                      id={tocItems[i]?.id}
                      className={i > 0 ? "mt-10 pt-10 scroll-mt-24" : "scroll-mt-24"}
                      style={i > 0 ? { borderTop: `1px solid ${border}` } : {}}
                    >
                      <h2 className="text-xl font-display font-bold text-white mb-4">{section.heading}</h2>
                      <div
                        className="leading-relaxed space-y-4 text-sm"
                        style={{ color: "oklch(0.7 0.04 240)" }}
                      >
                        {section.content}
                      </div>
                      {/* Inject email capture after the 3rd section */}
                      {i === 2 && <InlineEmailCapture />}
                    </div>
                  ))}
                  {/* If fewer than 3 sections, show email capture at the end */}
                  {sections.length <= 2 && <div className="mt-10 pt-10" style={{ borderTop: `1px solid ${border}` }}><InlineEmailCapture /></div>}
                </div>

                {/* Sources box */}
                {sources && sources.length > 0 && (
                  <GuideSourcesBox sources={sources} lastReviewed={lastUpdated} />
                )}

                {/* Bottom CTA */}
                <div
                  className="p-5 md:p-8 rounded-2xl text-center mb-8"
                  style={{ background: "linear-gradient(135deg, oklch(0.14 0.12 255), oklch(0.18 0.14 248))", border: "1px solid oklch(0.45 0.18 240 / 0.2)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "oklch(0.72 0.18 65 / 0.15)", color: "oklch(0.85 0.15 65)" }}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Ready to plan your pilot training?</h3>
                  <p className="text-sm mb-5" style={{ color: muted }}>Take the free assessment and get a personalised roadmap, readiness score and matched flight schools.</p>
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white no-underline"
                    style={{ background: ctaGradient, boxShadow: "0 0 20px oklch(0.72 0.18 65 / 0.3)" }}
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Related guides */}
                {relatedGuides.length > 0 && (
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-4">Related guides</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {relatedGuides.map((guide) => (
                        <Link
                          key={guide.href}
                          href={guide.href}
                          className="group flex items-center justify-between p-4 rounded-xl transition-all no-underline"
                          style={{ background: surface, border: `1px solid ${border}` }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${borderHover}`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                        >
                          <div>
                            <div className="font-display font-semibold text-white/80 group-hover:text-white transition-colors text-sm">
                              {guide.title}
                            </div>
                            <div className="text-xs mt-0.5" style={{ color: muted }}>{guide.time}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: muted }} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sticky Table of Contents sidebar (xl screens only) */}
              <TableOfContents items={tocItems} ctaHref={ctaHref} ctaText={ctaText} />

            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
