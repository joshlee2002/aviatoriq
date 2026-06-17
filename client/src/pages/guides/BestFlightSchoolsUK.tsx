import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";
import VerifiedFeeTable from "@/components/tables/VerifiedFeeTable";

// ── Scoring criteria ─────────────────────────────────────────────────────────
const SCORING_CRITERIA = [
  {
    criterion: "Regulatory Approval",
    weight: "Pass/Fail",
    description:
      "Verified against the UK CAA ATO register. Schools must hold current approval for the specific courses they advertise. A school without current ATO approval is not listed.",
    sourceUrl:
      "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/approved-training-organisations/",
  },
  {
    criterion: "Fee Transparency",
    weight: "High",
    description:
      "Whether the school publishes a full, itemised fee schedule on its public website. Schools that require a 'call for a quote' are noted explicitly. No fee is estimated or assumed.",
    sourceUrl: "",
  },
  {
    criterion: "Fleet Size & Availability",
    weight: "High",
    description:
      "Number of multi-engine aircraft relative to student intake. Poor ratios cause delays at the critical IR phase. Figures sourced from school websites and CAA ATO register.",
    sourceUrl: "",
  },
  {
    criterion: "Verified Airline Relationships",
    weight: "High",
    description:
      "Verified partnerships with named airlines for cadet selection pipelines. Marketing language ('airline links') without named partners is not counted. Only confirmed partnerships are listed.",
    sourceUrl: "",
  },
  {
    criterion: "Financial Protection",
    weight: "High",
    description:
      "Whether student funds are held in an independent escrow or trust account. Schools that do not disclose this are noted. This is a critical risk factor if a school ceases trading.",
    sourceUrl: "",
  },
  {
    criterion: "First-Time Pass Rates",
    weight: "Medium",
    description:
      "Publicly disclosed ATPL theory and CPL/IR first-time pass rates. Schools that do not disclose this are noted. No pass rate is assumed or estimated.",
    sourceUrl: "",
  },
];

// ── School comparison table ──────────────────────────────────────────────────
// All data sourced from official school websites and UK CAA ATO register, June 2026.
// "Not disclosed" means the school does not publish this information publicly.
// AviatorIQ does not receive referral fees from any school listed.
const SCHOOL_COMPARISON = [
  {
    schoolName: "Skyborne Airline Academy",
    location: "Gloucestershire Airport",
    routeType: "Integrated ATPL (degree)",
    fee: "£114,950",
    feeConfidence: "high" as const,
    caaAto: true,
    verifiedAirlinePartners: "BA Speedbird Academy, IndiGo",
    degreePathway: true,
    slcFunding: true,
    financialProtection: "Not publicly disclosed — verify before enrolling",
    passRates: "Not publicly disclosed",
    bestFor: "BA Speedbird cadet entry, degree pathway, SLC funding",
    sourceUrl: "https://www.skyborne.com/uk/integrated-atpl/",
    lastChecked: "June 2026",
  },
  {
    schoolName: "CAE Oxford Aviation Academy",
    location: "Oxford Airport (+ international campuses)",
    routeType: "Integrated ATPL",
    fee: "Not publicly confirmed",
    feeConfidence: "low" as const,
    caaAto: true,
    verifiedAirlinePartners: "easyJet (Generation easyJet)",
    degreePathway: false,
    slcFunding: false,
    financialProtection: "Not publicly disclosed — verify before enrolling",
    passRates: "Not publicly disclosed",
    bestFor: "easyJet Generation easyJet cadet entry",
    sourceUrl: "https://www.cae.com/civil-aviation/become-a-pilot/",
    lastChecked: "June 2026",
  },
  {
    schoolName: "L3Harris Airline Academy",
    location: "Bournemouth Airport (+ international campuses)",
    routeType: "Integrated ATPL",
    fee: "Not publicly confirmed",
    feeConfidence: "low" as const,
    caaAto: true,
    verifiedAirlinePartners: "Not publicly confirmed — verify directly",
    degreePathway: false,
    slcFunding: false,
    financialProtection: "Not publicly disclosed — verify before enrolling",
    passRates: "Not publicly disclosed",
    bestFor:
      "Requires direct enquiry — airline partnerships not publicly confirmed",
    sourceUrl: "https://l3airlineacademy.com/",
    lastChecked: "June 2026",
  },
  {
    schoolName: "FTE Jerez",
    location: "Jerez de la Frontera, Spain (UK CAA + EASA approved)",
    routeType: "Integrated ATPL",
    fee: "Not publicly confirmed",
    feeConfidence: "low" as const,
    caaAto: true,
    verifiedAirlinePartners:
      "Aer Lingus, easyJet, BA CityFlyer (historically confirmed)",
    degreePathway: false,
    slcFunding: false,
    financialProtection: "Not publicly disclosed — verify before enrolling",
    passRates: "Not publicly disclosed",
    bestFor:
      "Campus environment (accommodation + meals included in some packages), European airline links",
    sourceUrl: "https://www.ftejerez.com/",
    lastChecked: "June 2026",
  },
  {
    schoolName: "Leading Edge Aviation",
    location: "Carlisle Lake District Airport",
    routeType: "Integrated ATPL",
    fee: "Not publicly confirmed",
    feeConfidence: "low" as const,
    caaAto: true,
    verifiedAirlinePartners: "Jet2 (Jet2FlightPath training partner)",
    degreePathway: true,
    slcFunding: true,
    financialProtection: "Not publicly disclosed — verify before enrolling",
    passRates: "Not publicly disclosed",
    bestFor: "Jet2FlightPath cadet entry, degree pathway",
    sourceUrl: "https://www.leadingedgeaviation.co.uk/",
    lastChecked: "June 2026",
  },
  {
    schoolName: "Bristol Groundschool",
    location: "Online / Bristol (ground school only)",
    routeType: "Modular ATPL (ground school only)",
    fee: "£3,000–£5,000",
    feeConfidence: "medium" as const,
    caaAto: true,
    verifiedAirlinePartners: "N/A (ground school only)",
    degreePathway: false,
    slcFunding: false,
    financialProtection: "N/A",
    passRates:
      "Industry-leading pass rates (widely reported, not independently verified)",
    bestFor: "Modular ATPL theory — widely used by UK modular students",
    sourceUrl: "https://www.bristol.gs/",
    lastChecked: "June 2026",
  },
];

const confidenceColour = {
  high: {
    bg: "oklch(0.55 0.18 145 / 0.12)",
    text: "oklch(0.7 0.18 145)",
    label: "High",
  },
  medium: {
    bg: "oklch(0.72 0.18 65 / 0.12)",
    text: "oklch(0.8 0.18 65)",
    label: "Medium",
  },
  low: {
    bg: "oklch(0.65 0.18 30 / 0.15)",
    text: "oklch(0.75 0.18 30)",
    label: "Low",
  },
};

export default function BestFlightSchoolsUK() {
  return (
    <GuideLayout
      title="Best Flight Schools in the UK 2026: Compare Costs, Fleets & Reviews"
      subtitle="An independent, data-backed analysis of the UK's leading integrated and modular flight schools — comparing 2026 fees, airline relationships, fleet sizes, and student outcomes."
      canonical="https://aviatoriq.com/guides/best-flight-schools-uk-2026"
      metaDescription="Best flight schools UK 2026: compare integrated and modular academies, costs, airline connections, fleet size, pass rates, and how to choose."
      readTime="16 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/flight-schools-uk_d1a2b3c4.jpg"
      financeDisclaimer={true}
      regulatorName="UK CAA Approved Training Organisations"
      regulatorUrl="https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/approved-training-organisations/"
      methodologySummary="School data sourced from UK CAA ATO register and individual school prospectuses, verified June 2026. AviatorIQ does not receive referral fees from any school listed."
      methodologyDetail="All school listings in this guide are verified against the UK CAA Approved Training Organisation (ATO) register. Fee data is sourced from individual school public websites or direct prospectuses as of June 2026. Where fees are not publicly confirmed, this is stated explicitly — no fee is estimated or assumed. Airline partnership claims are only listed where confirmed by the school or airline publicly. AviatorIQ does not receive referral fees, commissions, or payment from any flight school listed in this guide. The 'best for' categories are based on the scoring criteria described in this guide, not on editorial opinion or commercial relationships."
      methodologySources={[
        {
          name: "UK CAA ATO Register",
          url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/approved-training-organisations/",
        },
        {
          name: "BALPA Training Guide",
          url: "https://www.balpa.org/becoming-a-pilot/",
        },
        {
          name: "Skyborne official website",
          url: "https://www.skyborne.com/uk/integrated-atpl/",
        },
      ]}
      ctaHref="/schools"
      ctaText="Find schools near you"
      faqSchema={[
        {
          question: "What is the best flight school in the UK?",
          answer:
            "There is no single 'best' flight school in the UK — the right school depends on your route (integrated vs modular), budget, and whether you are targeting a specific airline cadet programme. This guide presents verified data on the main schools so you can make an informed decision. AviatorIQ does not rank schools by name or accept payment to promote any school.",
        },
        {
          question: "How much does a UK flight school cost in 2026?",
          answer:
            "The only publicly confirmed integrated ATPL fee as of June 2026 is Skyborne at £114,950. Other major schools (CAE, L3Harris, FTE Jerez) do not publish headline fees — you must request a direct quote. Modular ATPL training typically costs £60,000–£80,000 total.",
        },
        {
          question: "Do flight schools guarantee you a job?",
          answer:
            "No. Flight schools provide training, not employment. While some schools offer 'placement assistance' or 'airline partnerships', no school can guarantee you a First Officer role. Your employment depends on your first-time pass rates, simulator assessment performance, and the hiring market when you graduate.",
        },
        {
          question: "Are university degree flight programmes worth it?",
          answer:
            "Aviation degrees (like the BSc offered by Skyborne/UWL or Leading Edge) can be valuable because they unlock access to Student Loans Company (SLC) tuition fee funding, which can reduce the upfront private capital required. However, airlines do not require a degree to hire you as a pilot.",
        },
      ]}
      relatedGuides={[
        {
          title: "Integrated vs Modular ATPL UK 2026",
          href: "/guides/integrated-vs-modular",
          time: "12 min",
        },
        {
          title: "Pilot Training Costs UK 2026",
          href: "/guides/pilot-training-costs",
          time: "8 min",
        },
        {
          title: "UK Airline Cadet Programmes 2026",
          href: "/guides/cadet-pilot-programmes-uk",
          time: "10 min",
        },
        {
          title: "How to Finance Pilot Training UK",
          href: "/guides/how-to-finance-pilot-training-uk",
          time: "9 min",
        },
      ]}
      sources={[
        {
          name: "UK CAA — Approved Training Organisation (ATO) registry",
          url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/approved-training-organisations/",
        },
        {
          name: "Skyborne official website — 2026 fee schedule",
          url: "https://www.skyborne.com/uk/integrated-atpl/",
        },
        {
          name: "BALPA — Flight school evaluation guidelines",
          url: "https://www.balpa.org/becoming-a-pilot/",
        },
      ]}
      sections={[
        {
          heading: "Editorial Methodology & Conflict of Interest Statement",
          content: (
            <>
              <div
                className="p-5 rounded-xl mb-6"
                style={{
                  background: "oklch(0.72 0.18 65 / 0.08)",
                  border: "1px solid oklch(0.72 0.18 65 / 0.25)",
                }}
              >
                <p
                  className="font-semibold text-base mb-3"
                  style={{ color: "oklch(0.85 0.15 65)" }}
                >
                  Conflict of Interest Disclosure
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ color: "oklch(0.7 0.04 240)" }}
                >
                  AviatorIQ does not receive referral fees, commissions, or
                  payment from any flight school listed in this guide. No school
                  has paid to be featured, ranked, or described in any
                  particular way. The "best for" categories in this guide are
                  based solely on the objective scoring criteria described below
                  — not on editorial opinion or commercial relationships.
                </p>
                <p
                  className="text-sm mb-3"
                  style={{ color: "oklch(0.7 0.04 240)" }}
                >
                  <strong className="text-white">
                    We do not make unsupported "best" claims.
                  </strong>{" "}
                  Where a school is described as "best for" a particular
                  category, this reflects a specific, verifiable criterion (e.g.
                  "best for BA Speedbird cadet entry" means Skyborne is the
                  confirmed BA Speedbird training partner — not a general
                  quality ranking). No school is described as "the best flight
                  school in the UK" without methodology support.
                </p>
                <p className="text-sm" style={{ color: "oklch(0.7 0.04 240)" }}>
                  <strong className="text-white">
                    Regulatory verification:
                  </strong>{" "}
                  All schools listed are checked against the{" "}
                  <a
                    href="https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/approved-training-organisations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: "oklch(0.72 0.18 240)" }}
                  >
                    UK CAA Approved Training Organisation register
                  </a>
                  . A school must hold a current CAA ATO for the courses it
                  advertises to be included in this guide.
                </p>
              </div>
              <p>
                Every flight school in this guide is evaluated against six
                objective scoring criteria. These criteria are designed to help
                you make a decision based on verifiable facts rather than
                marketing materials.
              </p>
              <div
                className="overflow-x-auto my-6 rounded-xl"
                style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      style={{
                        background: "oklch(0.16 0.09 250)",
                        borderBottom: "1px solid oklch(1 0 0 / 0.1)",
                      }}
                    >
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Criterion
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Weight
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Description
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCORING_CRITERIA.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: "1px solid oklch(1 0 0 / 0.06)",
                          background:
                            i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.02)",
                        }}
                      >
                        <td className="px-4 py-3 font-medium text-white align-top">
                          {row.criterion}
                        </td>
                        <td className="px-4 py-3 align-top">
                          <span
                            className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              background: "oklch(0.55 0.18 145 / 0.12)",
                              color: "oklch(0.7 0.18 145)",
                            }}
                          >
                            {row.weight}
                          </span>
                        </td>
                        <td
                          className="px-4 py-3 text-xs align-top"
                          style={{ color: "oklch(0.65 0.04 240)" }}
                        >
                          {row.description}
                        </td>
                        <td className="px-4 py-3 text-xs align-top">
                          {row.sourceUrl ? (
                            <a
                              href={row.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                              style={{ color: "oklch(0.65 0.18 240)" }}
                            >
                              CAA ATO Register
                            </a>
                          ) : (
                            <span style={{ color: "oklch(0.45 0.04 240)" }}>
                              School websites
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 font-medium text-white">
                Best-for categories used in this guide:
              </p>
              <div className="grid grid-cols-1 gap-3 mt-4">
                {[
                  {
                    label: "Best for Airline Cadet Entry",
                    desc: "Schools with verified, named cadet programme partnerships (e.g. Skyborne for BA Speedbird, CAE for easyJet, Leading Edge for Jet2).",
                  },
                  {
                    label: "Best for Fee Transparency",
                    desc: "Schools that publish a full, itemised fee schedule on their public website. Currently only Skyborne meets this criterion for integrated ATPL.",
                  },
                  {
                    label: "Best for Modular Flexibility",
                    desc: "Schools that allow pay-as-you-go modular training without requiring full upfront commitment.",
                  },
                  {
                    label: "Best for Degree Pathway",
                    desc: "Schools offering a university-linked BSc that unlocks Student Loans Company (SLC) tuition-fee funding.",
                  },
                ].map((cat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg"
                    style={{
                      background: "oklch(0.16 0.06 250)",
                      border: "1px solid oklch(1 0 0 / 0.06)",
                    }}
                  >
                    <span className="font-semibold text-white text-sm">
                      {cat.label}:{" "}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.65 0.04 240)" }}
                    >
                      {cat.desc}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="text-xs mt-4"
                style={{ color: "oklch(0.45 0.04 240)" }}
              >
                Visible uncertainty: Where a school does not publicly disclose a
                metric (e.g. pass rates or exact fees), this is explicitly noted
                in the relevant entry. We do not assume or estimate undisclosed
                data.
              </p>
            </>
          ),
        },
        {
          heading: "How to Choose a Flight School in 2026",
          content: (
            <>
              <GuideScopeBanner scope="This guide covers UK CAA pilot training and licensing requirements." />
              <p>
                Choosing a flight school is a £60,000 to £115,000+ decision. The
                most common mistake aspiring pilots make is choosing a school
                based on marketing materials or shiny aircraft rather than
                objective metrics.
              </p>
              <p>
                When evaluating a school, BALPA recommends checking four
                critical metrics before committing any money:
              </p>
              <div
                className="overflow-x-auto my-6 rounded-xl"
                style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      style={{
                        background: "oklch(0.16 0.09 250)",
                        borderBottom: "1px solid oklch(1 0 0 / 0.1)",
                      }}
                    >
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Check
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        What to Ask
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Red Flag
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        check: "CAA ATO Approval",
                        ask: "Are they on the CAA ATO register for the specific course they are selling?",
                        flag: "Not on the register, or approved for a different course than advertised.",
                      },
                      {
                        check: "First-Time Pass Rates",
                        ask: "What are your verified ATPL theory and CPL/IR first-time pass rates?",
                        flag: "Refusal to provide data, or rates below 85%.",
                      },
                      {
                        check: "Fleet Availability",
                        ask: "How many multi-engine aircraft do you have per student?",
                        flag: "Vague answers, or a ratio that suggests significant delays at the IR phase.",
                      },
                      {
                        check: "Financial Protection",
                        ask: "Are student funds held in an independent escrow account? What happens to my money if the school ceases trading?",
                        flag: "No escrow, no clear answer, or funds held in the school's operating account.",
                      },
                      {
                        check: "Refund Policy",
                        ask: "What is the refund policy if I fail a medical, fail a stage, or need to withdraw?",
                        flag: "No written refund policy, or a policy that offers no refund after deposit.",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: "1px solid oklch(1 0 0 / 0.06)",
                          background:
                            i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.02)",
                        }}
                      >
                        <td className="px-4 py-3 font-medium text-white align-top">
                          {row.check}
                        </td>
                        <td
                          className="px-4 py-3 align-top text-xs"
                          style={{ color: "oklch(0.7 0.04 240)" }}
                        >
                          {row.ask}
                        </td>
                        <td
                          className="px-4 py-3 align-top text-xs"
                          style={{ color: "oklch(0.75 0.18 30)" }}
                        >
                          {row.flag}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                className="p-4 rounded-xl"
                style={{
                  background: "oklch(0.65 0.18 30 / 0.1)",
                  border: "1px solid oklch(0.65 0.18 30 / 0.25)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: "oklch(0.8 0.15 50)" }}
                >
                  Get your Class 1 medical before paying any deposit
                </p>
                <p className="text-sm" style={{ color: "oklch(0.7 0.04 240)" }}>
                  A disqualifying medical condition discovered after paying a
                  deposit can result in unrecoverable financial loss. The Class
                  1 medical costs £950–£1,400 and takes half a day. Do it before
                  committing any money. See our{" "}
                  <Link
                    href="/guides/class-1-medical"
                    className="underline"
                    style={{ color: "oklch(0.72 0.18 240)" }}
                  >
                    Class 1 Medical guide
                  </Link>
                  .
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "School Comparison Table — Verified Data (June 2026)",
          content: (
            <>
              <p>
                The following table compares the main UK flight schools against
                the six scoring criteria. All data is sourced from official
                school websites and the UK CAA ATO register as of June 2026.
                Where a school does not publicly disclose a metric, this is
                stated explicitly.
              </p>
              <div
                className="overflow-x-auto my-6 rounded-xl"
                style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}
              >
                <table className="w-full text-sm" style={{ minWidth: "900px" }}>
                  <thead>
                    <tr
                      style={{
                        background: "oklch(0.16 0.09 250)",
                        borderBottom: "1px solid oklch(1 0 0 / 0.1)",
                      }}
                    >
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        School
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Route
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Fee (2026)
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        CAA ATO
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Verified Airline Partners
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Degree / SLC
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Best For
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCHOOL_COMPARISON.map((row, i) => {
                      const conf = confidenceColour[row.feeConfidence];
                      return (
                        <tr
                          key={i}
                          style={{
                            borderBottom: "1px solid oklch(1 0 0 / 0.06)",
                            background:
                              i % 2 === 0
                                ? "transparent"
                                : "oklch(1 0 0 / 0.02)",
                          }}
                        >
                          <td className="px-4 py-3 font-medium text-white align-top">
                            {row.schoolName}
                            <br />
                            <span
                              className="text-xs font-normal"
                              style={{ color: "oklch(0.5 0.04 240)" }}
                            >
                              {row.location}
                            </span>
                          </td>
                          <td
                            className="px-4 py-3 align-top text-xs"
                            style={{ color: "oklch(0.7 0.04 240)" }}
                          >
                            {row.routeType}
                          </td>
                          <td className="px-4 py-3 align-top">
                            <span
                              className="font-semibold"
                              style={{ color: "oklch(0.85 0.15 65)" }}
                            >
                              {row.fee}
                            </span>
                            <br />
                            <span
                              className="inline-flex mt-1 px-2 py-0.5 rounded-full text-xs font-medium"
                              style={{ background: conf.bg, color: conf.text }}
                            >
                              {conf.label}
                            </span>
                          </td>
                          <td className="px-4 py-3 align-top text-center">
                            {row.caaAto ? (
                              <span
                                className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{
                                  background: "oklch(0.55 0.18 145 / 0.12)",
                                  color: "oklch(0.7 0.18 145)",
                                }}
                              >
                                ✓ Yes
                              </span>
                            ) : (
                              <span
                                className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{
                                  background: "oklch(0.65 0.18 30 / 0.15)",
                                  color: "oklch(0.75 0.18 30)",
                                }}
                              >
                                ✗ No
                              </span>
                            )}
                          </td>
                          <td
                            className="px-4 py-3 align-top text-xs"
                            style={{ color: "oklch(0.65 0.04 240)" }}
                          >
                            {row.verifiedAirlinePartners}
                          </td>
                          <td className="px-4 py-3 align-top text-center text-xs">
                            {row.degreePathway ? (
                              <span
                                className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{
                                  background: "oklch(0.55 0.18 145 / 0.12)",
                                  color: "oklch(0.7 0.18 145)",
                                }}
                              >
                                ✓ Degree + SLC
                              </span>
                            ) : (
                              <span style={{ color: "oklch(0.45 0.04 240)" }}>
                                —
                              </span>
                            )}
                          </td>
                          <td
                            className="px-4 py-3 align-top text-xs"
                            style={{ color: "oklch(0.72 0.18 240)" }}
                          >
                            {row.bestFor}
                          </td>
                          <td className="px-4 py-3 align-top text-xs">
                            <a
                              href={row.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                              style={{ color: "oklch(0.65 0.18 240)" }}
                            >
                              Official website
                            </a>
                            <br />
                            <span style={{ color: "oklch(0.45 0.04 240)" }}>
                              {row.lastChecked}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs" style={{ color: "oklch(0.45 0.04 240)" }}>
                All data sourced from official school websites and UK CAA ATO
                register, June 2026. AviatorIQ does not receive referral fees
                from any school listed. Fee confidence: High = confirmed on
                school website; Medium = from press/third-party; Low = not
                publicly confirmed — request direct quote.
              </p>
            </>
          ),
        },
        {
          heading: "Integrated ATPL Fees — Verified Data",
          content: (
            <>
              <p>
                The UK integrated market is dominated by a few large academies.
                They charge premium prices but offer structured, full-time
                programmes and — for some schools — verified airline cadet entry
                pipelines. The following table shows verified 2026 fee data with
                confidence levels and source links.
              </p>
              <VerifiedFeeTable routeType="Integrated ATPL" className="my-6" />
              <p>
                <strong className="text-white">
                  CAE (Oxford/Phoenix/Madrid):
                </strong>{" "}
                One of the largest aviation training organisations globally.
                They run the Generation easyJet Pilot Training Programme and
                have historically strong links with British Airways and Ryanair.
                Training is split between European/US fair-weather bases and the
                UK. Fees are not publicly listed — request a direct quote.
              </p>
              <p>
                <strong className="text-white">
                  Skyborne Airline Academy (Gloucestershire/Vero Beach):
                </strong>{" "}
                The only major UK integrated school to publish a confirmed 2026
                fee (£114,950). They operate the British Airways Speedbird Pilot
                Academy and the IndiGo cadet programme. They offer a BSc degree
                pathway linked with the University of West London, which unlocks
                SLC funding.
              </p>
              <p>
                <strong className="text-white">
                  FTE Jerez (Jerez, Spain):
                </strong>{" "}
                While based in Spain, FTE Jerez holds UK CAA approval. They are
                known for their campus environment where accommodation and meals
                are included in some packages, and they hold confirmed
                partnerships with Aer Lingus, easyJet, and BA CityFlyer. Fees
                are not publicly listed.
              </p>
            </>
          ),
        },
        {
          heading: "Modular Flight Schools — Verified Data",
          content: (
            <>
              <p>
                Modular schools offer the exact same frozen ATPL qualification
                as integrated schools, but allow you to train at your own pace
                and pay as you go. The total cost is significantly lower
                (typically £60,000–£80,000 for the full route). The following
                table shows verified 2026 data.
              </p>
              <VerifiedFeeTable routeType="Modular ATPL" className="my-6" />
              <p>
                <strong className="text-white">
                  Bristol Groundschool (Clevedon):
                </strong>{" "}
                The most widely used UK modular ATPL theory provider. While they
                do not provide the flying phases, the vast majority of UK
                modular students use BGS for their distance-learning theory
                phase. Ground school only — budget separately for all flight
                training.
              </p>
              <p
                className="text-xs mt-4"
                style={{ color: "oklch(0.45 0.04 240)" }}
              >
                Modular ATPL total costs vary widely depending on school,
                aircraft type, pace of training, and whether hour-building is
                done in the UK or abroad. The figures above represent individual
                components — always request a full breakdown from each school
                before committing. Source:{" "}
                <a
                  href="https://www.balpa.org/becoming-a-pilot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                >
                  BALPA Training Finance Guide
                </a>
                , June 2026.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
