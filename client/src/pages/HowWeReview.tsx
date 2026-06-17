import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import {
  Search,
  ShieldCheck,
  Globe,
  Stethoscope,
  DollarSign,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Step 1: Identify the primary regulatory source",
    body: "Every guide begins with the relevant regulatory authority. For UK guides, this is the UK Civil Aviation Authority (CAA) and its official publications. For US guides, the FAA Aeronautical Information Manual and 14 CFR. For EASA, the official Part-FCL and Part-MED regulations. For Australia, CASA CASR Part 61. For Canada, Transport Canada CARs. We do not start with secondary sources, aggregators, or forums.",
    sources: [
      {
        name: "UK CAA Official Publications",
        url: "https://www.caa.co.uk/our-work/publications/",
      },
      {
        name: "FAA Aeronautical Information Manual",
        url: "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/",
      },
      {
        name: "EASA Part-FCL",
        url: "https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew-regulation-eu-no-11782011",
      },
      {
        name: "CASA CASR Part 61",
        url: "https://www.legislation.gov.au/Series/F2013L00968",
      },
      {
        name: "Transport Canada CARs",
        url: "https://tc.canada.ca/en/corporate-services/acts-regulations/list-regulations/canadian-aviation-regulations-sor-96-433",
      },
    ],
  },
  {
    icon: Globe,
    title: "Step 2: Verify country-specific facts",
    body: "Each country cluster is treated as a separate research task. We do not mix UK CAA terminology with FAA terminology in the same guide. Costs are verified in local currency against current school prospectuses. Cadet programme statuses are verified against official airline press releases and careers pages — not third-party aggregators. Where a fact cannot be confirmed from an official source, we state 'Not publicly confirmed — verify directly.'",
    sources: [
      {
        name: "British Airways Media Centre",
        url: "https://mediacentre.britishairways.com/",
      },
      { name: "Jet2 Newsroom", url: "https://www.jet2.com/news/" },
      { name: "easyJet Careers", url: "https://careers.easyjet.com/" },
    ],
  },
  {
    icon: Stethoscope,
    title: "Step 3: Medical content — primary source only",
    body: "All medical guides are written directly from the source regulatory documentation. We do not paraphrase or interpret medical standards — we link directly to the official AME guidance and EASA/CAA/FAA medical standards documents. Medical guides carry a mandatory disclaimer that they are not medical advice and that individual eligibility can only be determined by an approved medical examiner. We do not speculate about conditions or outcomes.",
    sources: [
      {
        name: "CAA Medical Standards (AMS)",
        url: "https://www.caa.co.uk/medical/",
      },
      {
        name: "EASA Part-MED",
        url: "https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-aircrew-regulation-eu-no-11782011",
      },
      {
        name: "FAA AME Guidance",
        url: "https://www.faa.gov/licenses_certificates/medical_certification/",
      },
    ],
  },
  {
    icon: DollarSign,
    title: "Step 4: Financial data — verified or disclosed as unconfirmed",
    body: "Training costs are sourced from current school prospectuses or official school websites. Where a school does not publish a fee publicly, we state 'Not publicly confirmed — request direct quote.' We do not estimate fees. Finance provider APRs are sourced from the provider's own website and marked with a confidence level (Confirmed / Estimated / Not confirmed). All finance content carries a mandatory disclaimer that it is not financial advice.",
    sources: [
      {
        name: "Lendwise (FCA authorised, firm no. 782496)",
        url: "https://lendwise.com/",
      },
      {
        name: "Skyborne Airline Academy",
        url: "https://www.skyborne.com/uk/integrated-atpl/",
      },
      {
        name: "BALPA Pay & Conditions",
        url: "https://www.balpa.org/becoming-a-pilot/salary-and-benefits/",
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "Step 5: Review cycle and update triggers",
    body: "Guides are reviewed on a rolling 6-month cycle. Time-sensitive guides (cadet programme status, medical regulations, finance APRs) are reviewed quarterly. Any guide is updated immediately if a primary source changes — for example, if an airline opens or closes a cadet programme, or if a regulator amends a medical standard. The 'Last verified' date on each guide reflects the most recent check against primary sources.",
    sources: [],
  },
];

export default function HowWeReview() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.10 0.08 252)" }}
    >
      <SEO
        title="How We Review Pilot Training Information | AviatorIQ"
        description="Our step-by-step process for researching, verifying, and maintaining pilot training guides across 9 country markets."
        canonical="/how-we-review-pilot-training-information"
      />
      <PublicNav />
      <main className="flex-1">
        {/* Hero */}
        <div
          className="py-10 md:py-14"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.10 0.10 255) 0%, oklch(0.14 0.12 248) 100%)",
          }}
        >
          <div className="container max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "oklch(0.45 0.18 240 / 0.15)" }}
              >
                <ShieldCheck
                  className="w-5 h-5"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                />
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                Research & Review Process
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              How We Review Pilot Training Information
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.65 0.04 240)" }}
            >
              AviatorIQ covers pilot training regulations, medical standards,
              costs, and career pathways across nine country markets. This is
              high-stakes content. Here is exactly how we research, verify, and
              maintain it.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="py-10 md:py-14">
          <div className="container max-w-3xl space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <section
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "oklch(0.14 0.08 250)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "oklch(0.45 0.18 240 / 0.15)" }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: "oklch(0.65 0.18 240)" }}
                      />
                    </div>
                    <h2 className="text-base font-bold text-white">
                      {step.title}
                    </h2>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "oklch(0.65 0.04 240)" }}
                  >
                    {step.body}
                  </p>
                  {step.sources.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-white mb-1">
                        Example sources:
                      </p>
                      <ul className="space-y-0.5">
                        {step.sources.map((src, j) => (
                          <li key={j}>
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs underline hover:opacity-80"
                              style={{ color: "oklch(0.65 0.18 240)" }}
                            >
                              {src.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              );
            })}

            {/* Non-negotiables */}
            <section
              className="rounded-xl p-6"
              style={{
                background: "oklch(0.55 0.18 145 / 0.06)",
                border: "1px solid oklch(0.55 0.18 145 / 0.2)",
              }}
            >
              <h2 className="text-base font-bold text-white mb-3">
                What We Never Do
              </h2>
              <ul
                className="space-y-2 text-sm"
                style={{ color: "oklch(0.65 0.04 240)" }}
              >
                {[
                  "We do not invent certainty. If something is uncertain, we say so.",
                  "We do not attribute content to named experts unless their credentials can be independently verified.",
                  "We do not mix country-specific regulatory information across guides (no UK CAA rules in a FAA guide).",
                  "We do not guarantee employment outcomes from any training route or cadet programme.",
                  "We do not publish training cost estimates without disclosing the source and confidence level.",
                  "We do not provide medical or financial advice — we direct readers to the appropriate professionals.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="flex-shrink-0 text-xs font-bold"
                      style={{ color: "oklch(0.65 0.18 145)" }}
                    >
                      ✗
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Related links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/editorial-policy"
                className="text-sm underline hover:opacity-80"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                Editorial Policy
              </Link>
              <Link
                href="/corrections-policy"
                className="text-sm underline hover:opacity-80"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                Corrections Policy
              </Link>
              <Link
                href="/about-our-authors"
                className="text-sm underline hover:opacity-80"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                About Our Authors
              </Link>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
