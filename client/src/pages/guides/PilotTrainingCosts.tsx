import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";
import FlightSchoolFeesTable from "@/components/tables/FlightSchoolFeesTable";
import VerifiedFeeTable from "@/components/tables/VerifiedFeeTable";
import FinanceProvidersTable from "@/components/tables/FinanceProvidersTable";
import UKCostStackDiagram from "@/components/diagrams/UKCostStackDiagram";

// ── Cost Scenario Table ─────────────────────────────────────────────────────
const COST_SCENARIOS = [
  {
    route: "Integrated ATPL (UK school)",
    trainingFee: "£90,000–£115,000",
    livingCosts: "£15,000–£25,000",
    hiddenCosts: "£5,000–£10,000",
    typeRating: "£20,000–£30,000 (if self-funded)",
    totalRange: "£130,000–£180,000",
    riskNote: "Highest upfront cost. Full financial risk if you fail or do not secure a job.",
    confidence: "medium" as const,
  },
  {
    route: "Modular ATPL (UK school, part-time)",
    trainingFee: "£60,000–£80,000",
    livingCosts: "Minimal (can work alongside)",
    hiddenCosts: "£5,000–£10,000",
    typeRating: "£20,000–£30,000 (if self-funded)",
    totalRange: "£85,000–£120,000",
    riskNote: "Lower cost, longer timeline (2–4 yrs). Can work alongside training.",
    confidence: "medium" as const,
  },
  {
    route: "Overseas integrated ATPL (e.g. Spain, Poland)",
    trainingFee: "Not publicly confirmed — varies by school",
    livingCosts: "Variable (must live abroad)",
    hiddenCosts: "£5,000–£10,000 + conversion costs",
    typeRating: "£20,000–£30,000 (if self-funded)",
    totalRange: "Requires direct quote",
    riskNote: "Verify UK CAA approval, licence outcome, and airline acceptance before enrolling.",
    confidence: "low" as const,
  },
  {
    route: "Fully funded cadet programme (e.g. BA Speedbird)",
    trainingFee: "£0 (airline funded)",
    livingCosts: "£10,000–£20,000 (self-funded)",
    hiddenCosts: "Minimal",
    typeRating: "Funded by airline",
    totalRange: "£10,000–£20,000 (living costs only)",
    riskNote: "Acceptance rate <1%. Training bond applies — repay pro-rata if you leave early.",
    confidence: "high" as const,
  },
  {
    route: "Failed medical / deposit risk",
    trainingFee: "Deposit lost (typically £1,000–£5,000)",
    livingCosts: "N/A",
    hiddenCosts: "Class 1 medical: £500–£1,400",
    typeRating: "N/A",
    totalRange: "£1,500–£6,400 at risk if medical fails after deposit",
    riskNote: "Always get your Class 1 medical before paying any training deposit. This is non-negotiable.",
    confidence: "high" as const,
  },
];

const confidenceColour = {
  high: { bg: "oklch(0.55 0.18 145 / 0.12)", text: "oklch(0.7 0.18 145)", label: "High" },
  medium: { bg: "oklch(0.72 0.18 65 / 0.12)", text: "oklch(0.8 0.18 65)", label: "Medium" },
  low: { bg: "oklch(0.65 0.18 30 / 0.15)", text: "oklch(0.75 0.18 30)", label: "Low" },
};

export default function PilotTrainingCosts() {
  return (
    <GuideLayout
      title="Pilot Training Costs UK 2026: The Complete Breakdown"
      subtitle="Every cost involved in becoming a UK airline pilot — integrated vs modular, hidden costs, overseas options, financing, and the real total you need to budget for."
      canonical="https://aviatoriq.com/guides/pilot-training-costs"
      metaDescription="Pilot training costs UK 2026: integrated vs modular ATPL prices, hidden fees, type ratings, finance risks and realistic route-by-route budgets."
      readTime="15 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/pilot-training-cost_55d64cb4.jpg"
      ctaHref="/calculator"
      ctaText="Calculate your training costs"
      financeDisclaimer={true}
      regulatorName="UK CAA Licensing"
      regulatorUrl="https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/"
      methodologySummary="Fee data sourced from official school prospectuses and the UK CAA ATO register, verified June 2026."
      methodologyDetail="All training fee ranges in this guide are sourced from official school prospectuses, the UK CAA Approved Training Organisation (ATO) register, and BALPA published guidance. Where a school does not publish fees publicly, this is stated explicitly and a direct quote is recommended. No figures were estimated or extrapolated from third-party aggregators. Cost scenario totals are indicative ranges based on published data and should be verified before committing."
      methodologySources={[
        { name: "UK CAA ATO Register", url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/approved-training-organisations/" },
        { name: "BALPA Training Finance Guide", url: "https://www.balpa.org/becoming-a-pilot/finance/" },
        { name: "Lendwise", url: "https://lendwise.com/" },
      ]}
      faqSchema={[
        { question: "How much does ATPL training cost in the UK in 2026?", answer: "Integrated ATPL training at UK schools typically costs £90,000–£115,000. Modular ATPL training typically costs £60,000–£80,000 spread over 2–4 years. These figures represent training fees only — living costs, medical fees, and type ratings (if not funded by an airline) are additional." },
        { question: "What is the cheapest way to become a pilot in the UK?", answer: "The cheapest route to a UK commercial pilot licence is modular ATPL training, which can be completed for £60,000–£80,000 over 2–4 years. Overseas integrated training (e.g. in Poland or Spain) can also offer significant savings compared to UK-based integrated schools, though living abroad is required." },
        { question: "Is pilot training worth the debt?", answer: "For most people who complete training and secure an airline job, yes. UK airline First Officers typically earn £35,000–£60,000, rising significantly with seniority and command. However, the financial risk is substantial — there is no guarantee of employment after self-funded training, and loan repayments must be met regardless of employment status." },
        { question: "Can I get a loan for pilot training?", answer: "Yes, but options are limited. Specialist aviation loans (e.g. Lendwise) are available but assess future earnings potential. High street personal loans rarely cover the full cost. Student loans are only available for specific university-linked degree routes (e.g. Skyborne/UWL). Always compare multiple providers." },
        { question: "What are the hidden costs of pilot training?", answer: "Beyond tuition, budget for: Class 1 Medical (£950–£1,400 initial at an AeMC), ATPL exam fees (£1,000–£1,500), equipment/headset (£500–£1,000), living costs during training (£12,000–£25,000+), exam resit fees, and potentially a type rating (£20,000–£30,000) if not funded by an airline." },
        { question: "Do airlines pay for the type rating?", answer: "It depends on the airline and recruitment route. Fully funded cadet programmes (e.g. BA Speedbird) cover the type rating. Many self-sponsored graduates must pay for their own type rating (e.g. Ryanair historically required this, though models change). Always clarify type rating funding before accepting a job offer." },
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot in the UK", href: "/guides/how-to-become-a-pilot", time: "14 min" },
        { title: "Integrated vs Modular ATPL Training", href: "/guides/integrated-vs-modular", time: "9 min" },
        { title: "How to Finance Pilot Training UK 2026", href: "/guides/pilot-training-finance-2026", time: "10 min" },
        { title: "BA Speedbird Academy Guide", href: "/guides/ba-speedbird-academy", time: "10 min" },
      ]}
      sources={[
        { name: "UK CAA — Licensing and Medical fees", url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/" },
        { name: "BALPA — Salary and cost guidance", url: "https://www.balpa.org/becoming-a-pilot/finance/" },
        { name: "FCA — Financial Services Register", url: "https://register.fca.org.uk/" },
        { name: "Official flight school prospectuses (June 2026)", url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/approved-training-organisations/" },
      ]}
      sections={[
        {
          heading: "The Real Numbers: What Pilot Training Actually Costs in 2026",
          content: (
            <>
              <GuideScopeBanner scope="This guide covers UK CAA pilot training and licensing requirements." />
              <p>
                The cost of pilot training is the single biggest barrier for most aspiring pilots — and it is also the topic most frequently obscured by optimistic marketing, outdated figures, and incomplete cost breakdowns. This guide gives you the real numbers for 2026, including the costs that most guides omit.
              </p>
              <img src="/manus-storage/training-finance-loan_7be38da5.jpg" alt="Pilot training finance and loans" className="w-full rounded-xl my-4 object-cover" style={{ maxHeight: "320px" }} />
              <p>
                The headline figures are well-known: integrated ATPL training at a UK school typically costs £90,000–£115,000; modular ATPL training typically costs £60,000–£80,000. But these figures represent training fees only. The true total cost of becoming a UK airline pilot — including living costs, medical fees, equipment, exam fees, and the type rating — is often significantly higher.
              </p>
              <p>
                There is also a third option that most UK guides underreport: overseas integrated training. Some overseas schools offer lower-cost EASA or UK-linked training routes, but you must verify the exact approval, licence outcome, conversion implications, and airline acceptance before enrolling.
              </p>
              <div className="p-4 rounded-xl my-4" style={{ background: "oklch(0.65 0.18 30 / 0.1)", border: "1px solid oklch(0.65 0.18 30 / 0.25)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.8 0.15 50)" }}>Critical: Get your Class 1 medical before paying any deposit</p>
                <p className="text-sm" style={{ color: "oklch(0.7 0.04 240)" }}>
                  A disqualifying medical condition discovered after paying a training deposit — or worse, after starting training — can result in unrecoverable financial loss. The Class 1 medical costs £950–£1,400 and takes half a day. Do it before committing any money. See our <Link href="/guides/class-1-medical" className="underline" style={{ color: "oklch(0.72 0.18 240)" }}>Class 1 Medical guide</Link>.
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "Cost Scenarios: Route-by-Route Budget Comparison",
          content: (
            <>
              <p>
                The table below compares the five main cost scenarios for UK pilot training in 2026. All figures are indicative ranges based on publicly available data. Where exact fees are not publicly confirmed, this is stated explicitly. Every money claim in this guide has either a row-level source or a clear caveat.
              </p>
              <div className="overflow-x-auto my-6 rounded-xl" style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "oklch(0.16 0.09 250)", borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}>
                      <th className="text-left px-4 py-3 font-semibold text-white">Route</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Training Fee</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Living Costs</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Type Rating</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Total Range</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COST_SCENARIOS.map((row, i) => {
                      const conf = confidenceColour[row.confidence];
                      return (
                        <tr key={i} style={{ borderBottom: "1px solid oklch(1 0 0 / 0.06)", background: i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.02)" }}>
                          <td className="px-4 py-3 font-medium text-white">{row.route}</td>
                          <td className="px-4 py-3" style={{ color: "oklch(0.7 0.04 240)" }}>{row.trainingFee}</td>
                          <td className="px-4 py-3" style={{ color: "oklch(0.7 0.04 240)" }}>{row.livingCosts}</td>
                          <td className="px-4 py-3" style={{ color: "oklch(0.7 0.04 240)" }}>{row.typeRating}</td>
                          <td className="px-4 py-3 font-semibold" style={{ color: "oklch(0.85 0.15 65)" }}>{row.totalRange}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: conf.bg, color: conf.text }}>
                              {conf.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="space-y-2">
                {COST_SCENARIOS.map((row, i) => (
                  <div key={i} className="p-3 rounded-lg text-xs" style={{ background: "oklch(0.16 0.06 250)", border: "1px solid oklch(1 0 0 / 0.06)", color: "oklch(0.6 0.04 240)" }}>
                    <span className="font-semibold text-white">{row.route}:</span> {row.riskNote}
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: "oklch(0.45 0.04 240)" }}>
                All figures are indicative ranges based on publicly available data as of June 2026. Training fees must be verified directly with the school before committing. AviatorIQ does not receive referral fees from any school listed.
              </p>
            </>
          ),
        },
        {
          heading: "Integrated ATPL Fees (UK Schools) — Verified Data",
          content: (
            <>
              <p>
                An integrated ATPL at a UK school is the most expensive route to a commercial pilot licence, but it offers the fastest timeline (18–24 months), the most structured learning environment, and — for some schools — direct links to airline cadet selection processes.
              </p>
              <p>
                The following table shows verified 2026 fee data for UK integrated schools, including confidence level, what is and is not included, and the source URL for each row. Figures marked "Not publicly confirmed" require a direct quote from the school.
              </p>
              <VerifiedFeeTable routeType="Integrated ATPL" className="my-6" />
              <p>
                These figures represent training fees only. You must add living costs for the 18–24 month training period (depending on location and lifestyle), plus the hidden costs detailed later in this guide.
              </p>
            </>
          ),
        },
        {
          heading: "Modular ATPL Fees (UK Schools) — Verified Data",
          content: (
            <>
              <p>
                Modular ATPL training is the most cost-effective route to a UK commercial pilot licence, and it is equally respected by airlines. The ability to keep working and spread costs over time is its key financial advantage.
              </p>
              <p>
                The following table shows verified 2026 fee data for modular training providers, with confidence level, inclusions, and source links.
              </p>
              <VerifiedFeeTable routeType="Modular ATPL" className="my-6" />
              <p>
                Because modular training is completed in phases (PPL, Hour Building, ATPL Theory, CPL, ME/IR, MCC), you can pay as you go. However, you must still budget for the same hidden costs (medical, exams, equipment) as integrated students.
              </p>
            </>
          ),
        },
        {
          heading: "The Hidden Costs of Pilot Training",
          content: (
            <>
              <UKCostStackDiagram />
              <p>
                The training fee is only part of the financial picture. Whether you choose integrated or modular training, you must budget for the following additional costs:
              </p>
              <div className="overflow-x-auto my-6 rounded-xl" style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "oklch(0.16 0.09 250)", borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}>
                      <th className="text-left px-4 py-3 font-semibold text-white">Cost Item</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Indicative Range</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Notes</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: "Class 1 Medical (initial)", range: "£950–£1,400", note: "At a CAA-approved AeMC. Combined UK+EASA is higher. Renewals £297–£332.", source: "Centreline / Birmingham AeMC / Heathrow Medical Services (June 2026)", url: "https://www.caa.co.uk/medical/" },
                      { item: "ATPL Exam Fees (13 exams)", range: "£1,000–£1,500", note: "CAA charges per exam. Budget for at least one resit per subject.", source: "UK CAA exam fees schedule", url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/atpl/" },
                      { item: "Aviation Headset", range: "£500–£1,100", note: "Bose A30 approx £900–£1,100. Budget options available from £200.", source: "Manufacturer RRP (June 2026)", url: "https://www.bose.co.uk/" },
                      { item: "iPad + EFB apps", range: "£200–£500", note: "iPad for electronic flight bags (ForeFlight, SkyDemon). Charts and study materials additional.", source: "Indicative retail pricing", url: "" },
                      { item: "Living costs (integrated, 18–24 months)", range: "£12,000–£25,000+", note: "Accommodation, food, transport. Highly location-dependent.", source: "Indicative estimate — verify for your location", url: "" },
                      { item: "Exam resits", range: "£200–£400 per resit", note: "Budget for at least one resit per subject across 13 ATPL exams.", source: "UK CAA exam fees schedule", url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/atpl/" },
                      { item: "Type Rating (if self-funded)", range: "£20,000–£30,000", note: "Not required at licence issue. Required before flying for an airline. Some airlines fund this.", source: "Indicative market rate — verify with airline/ATO", url: "" },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid oklch(1 0 0 / 0.06)", background: i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.02)" }}>
                        <td className="px-4 py-3 font-medium text-white">{row.item}</td>
                        <td className="px-4 py-3 font-semibold" style={{ color: "oklch(0.85 0.15 65)" }}>{row.range}</td>
                        <td className="px-4 py-3 text-xs" style={{ color: "oklch(0.65 0.04 240)" }}>{row.note}</td>
                        <td className="px-4 py-3 text-xs">
                          {row.url ? (
                            <a href={row.url} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "oklch(0.65 0.18 240)" }}>{row.source}</a>
                          ) : (
                            <span style={{ color: "oklch(0.5 0.04 240)" }}>{row.source}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "The Type Rating: Who Pays?",
          content: (
            <>
              <p>
                A commercial pilot licence allows you to fly for reward, but it does not qualify you to fly a specific airliner (like a Boeing 737 or Airbus A320). For that, you need a Type Rating, which costs approximately £20,000–£30,000 at a UK-approved ATO.
              </p>
              <p>
                The funding model for type ratings varies significantly by route:
              </p>
              <div className="overflow-x-auto my-6 rounded-xl" style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "oklch(0.16 0.09 250)", borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}>
                      <th className="text-left px-4 py-3 font-semibold text-white">Route</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Who Pays?</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Caveat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { route: "BA Speedbird Academy", who: "British Airways (fully funded)", caveat: "Training bond applies — repay pro-rata if you leave within bonded period." },
                      { route: "easyJet Generation easyJet", who: "Self-funded (part of total programme cost)", caveat: "Conditional offer attached. Verify current terms directly with easyJet." },
                      { route: "Ryanair Cadet pathway", who: "Historically self-funded (~€30,000)", caveat: "Terms change per intake. Verify directly with Ryanair before committing." },
                      { route: "Self-sponsored graduate (no cadet programme)", who: "Self-funded", caveat: "Must be budgeted in addition to ATPL training costs. Some airlines offer bonded type ratings." },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid oklch(1 0 0 / 0.06)", background: i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.02)" }}>
                        <td className="px-4 py-3 font-medium text-white">{row.route}</td>
                        <td className="px-4 py-3" style={{ color: "oklch(0.7 0.04 240)" }}>{row.who}</td>
                        <td className="px-4 py-3 text-xs" style={{ color: "oklch(0.6 0.04 240)" }}>{row.caveat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                You must clarify the type rating funding model before accepting any conditional offer or starting training. This is a material financial term that changes the total cost of the route significantly.
              </p>
            </>
          ),
        },
        {
          heading: "Financing Pilot Training",
          content: (
            <>
              <p>
                Securing £80,000–£130,000 for training is a major challenge. The following table outlines the verified finance providers operating in the UK market in 2026, with representative APR, eligibility notes, and source links.
              </p>
              <FinanceProvidersTable country="UK" className="my-6" />
              <div className="p-4 rounded-xl my-4" style={{ background: "oklch(0.65 0.18 30 / 0.1)", border: "1px solid oklch(0.65 0.18 30 / 0.25)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.8 0.15 50)" }}>Risk Warning</p>
                <p className="text-sm" style={{ color: "oklch(0.7 0.04 240)" }}>
                  <strong className="text-white">Never borrow more than you can realistically repay if you do not secure a flying job immediately.</strong> The financial risk of self-funded training sits entirely with you. There is no guarantee of employment after completing training. Loan repayments must be met regardless of your employment status. At Lendwise's representative APR of 13.96%, a £100,000 loan over 10 years costs approximately £1,653 per month — roughly 48–57% of a new First Officer's net take-home pay.
                </p>
              </div>
              <p className="text-sm" style={{ color: "oklch(0.65 0.04 240)" }}>
                For a full breakdown of repayment scenarios, cadet programme alternatives, and what happens if you fail training or the medical, see our dedicated{" "}
                <Link href="/guides/pilot-training-finance-2026" className="underline" style={{ color: "oklch(0.72 0.18 240)" }}>
                  Pilot Training Finance Guide 2026
                </Link>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
