import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";
import SalarySourceTable from "@/components/tables/SalarySourceTable";

// ── Pay basis explainer ───────────────────────────────────────────────────────
// All salary figures in this guide are base pay only unless stated otherwise.
// Total compensation (base + per diem + profit sharing + 401k + benefits) is
// materially higher for most pilots. See the "Beyond Base Pay" section.

// ── Seniority caveat ─────────────────────────────────────────────────────────
// All pay ranges are scenario illustrations based on publicly reported CBA data.
// Actual pay depends on: airline, seat (FO/CA), fleet, base, credit hours,
// guarantee, seniority number, contract year, and the state of the hiring cycle.
// Do not use any figure in this guide as a guaranteed earnings projection.

const PilotSalaryUSA = () => {
  return (
    <GuideLayout
      title="Airline Pilot Salary USA 2026: First Officer & Captain Pay at Every Major Airline"
      subtitle="2026 US airline pilot pay ranges for regional and major airline pilots — what compensation can look like by seat, seniority, contract and airline cycle."
      canonical="https://aviatoriq.com/us/guides/airline-pilot-salary-usa"
      metaDescription="US airline pilot salary guide 2026 with indicative pay ranges for regional FOs, major airline first officers and captains, plus contract and seniority caveats."
      readTime="10 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/pilot-salary-usa_292045db.jpg"
      ctaHref="/us/roadmap"
      ctaText="Get my free US pilot roadmap"
      methodologySummary="Salary data sourced from ALPA, ATP Flight School, and publicly reported CBA data. All figures are indicative ranges — verify current pay scales directly with airlines or via ALPA."
      methodologyDetail="All salary figures in this guide are sourced from publicly available data: ALPA (Air Line Pilots Association) published guidance, ATP Flight School's publicly available salary data, and press-reported collective bargaining agreement (CBA) figures. No salary figure is estimated or extrapolated from non-public sources. All figures are base pay only unless explicitly stated. Total compensation (base + per diem + profit sharing + 401k + benefits) is materially higher. Actual pay depends on airline, seat, fleet, base, credit hours, guarantee, seniority, contract year, and the state of the hiring cycle. This guide is updated when new CBA data is publicly reported. Last reviewed June 2026."
      methodologySources={[
        {
          name: "ALPA (Air Line Pilots Association)",
          url: "https://www.alpa.org/",
        },
        {
          name: "ATP Flight School — Pilot Salary Data",
          url: "https://atpflightschool.com/become-a-pilot/airline-career/commercial-pilot-salary.html",
        },
        { name: "FAA", url: "https://www.faa.gov/" },
      ]}
      faqSchema={[
        {
          question: "How much does a first officer make at a US major airline?",
          answer:
            "Major-airline first-officer pay varies by contract, seat, fleet, guarantee, credit hours and seniority. Use current collective bargaining agreements or airline recruiting pages before relying on a specific figure; total compensation can differ materially from base pay alone.",
        },
        {
          question: "How much does a regional airline first officer make?",
          answer:
            "Regional first-officer pay has risen sharply, but published starting pay and bonuses change by carrier, contract and staffing need. Verify current hourly rate, guarantee, bonus terms, training pay and repayment obligations directly with the airline.",
        },
        {
          question: "How much does an airline captain make in the USA?",
          answer:
            "Major-airline captain compensation can be very high, but it depends on seniority, aircraft, schedule, credit hours, profit sharing, benefits and contract rules. Treat headline numbers as scenarios, not guaranteed earnings.",
        },
        {
          question:
            "How long does it take to upgrade from first officer to captain?",
          answer:
            "Upgrade timelines have shortened at some airlines in recent hiring cycles, but they are not guaranteed. Regional and major-airline upgrades depend on fleet growth, retirements, hiring pauses, base, seat, contract and seniority.",
        },
        {
          question: "What is per diem and how much do pilots earn from it?",
          answer:
            "Per diem is a daily allowance paid to pilots when away from their base, intended to cover meals and incidentals. Rates vary by airline but typically range from $2.00 to $3.50 per hour away from base. A pilot away from base 15 days per month at $2.50 per hour earns approximately $900 to $1,200 per month in per diem, largely tax-advantaged.",
        },
      ]}
      relatedGuides={[
        {
          title: "US Pilot Career Outlook 2026: Is Now the Best Time to Start?",
          href: "/us/guides/us-pilot-career-outlook",
          time: "8 min read",
        },
        {
          title: "How to Fund Pilot Training in the USA",
          href: "/us/guides/how-to-fund-pilot-training-usa",
          time: "8 min read",
        },
        {
          title: "ATP Certificate USA: Requirements & How to Get One",
          href: "/us/guides/atp-certificate-usa",
          time: "10 min read",
        },
      ]}
      sources={[
        {
          name: "ALPA (Air Line Pilots Association)",
          url: "https://www.alpa.org/",
        },
        {
          name: "ATP Flight School — Pilot Salary Data",
          url: "https://atpflightschool.com/become-a-pilot/airline-career/commercial-pilot-salary.html",
        },
        { name: "FAA", url: "https://www.faa.gov/" },
        {
          name: "Boeing Commercial Market Outlook",
          url: "https://www.boeing.com/commercial/market/pilot-technician-outlook/",
        },
      ]}
      sections={[
        {
          heading: "The US Pilot Salary Landscape in 2026",
          content: (
            <>
              <p>
                US airline pilot salaries rose sharply in recent contract
                cycles, influenced by retirement flow, post-pandemic demand
                recovery, bargaining power and regional-airline staffing
                pressure. Pay remains airline-, contract-, seat-, base- and
                cycle-dependent.
              </p>
              <div
                className="p-4 rounded-xl my-4"
                style={{
                  background: "oklch(0.72 0.18 65 / 0.08)",
                  border: "1px solid oklch(0.72 0.18 65 / 0.25)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: "oklch(0.85 0.15 65)" }}
                >
                  How to read the salary figures in this guide
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs mt-2">
                    <thead>
                      <tr
                        style={{ borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}
                      >
                        <th className="text-left py-2 pr-4 font-semibold text-white">
                          Pay Component
                        </th>
                        <th className="text-left py-2 pr-4 font-semibold text-white">
                          What It Means
                        </th>
                        <th className="text-left py-2 font-semibold text-white">
                          Caveat
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          component: "Base pay",
                          meaning:
                            "Guaranteed annual salary before any additions",
                          caveat:
                            "Varies by airline, contract, seat, fleet, and seniority year",
                        },
                        {
                          component: "Per diem",
                          meaning:
                            "$2.00–$3.50/hr away from base (largely tax-advantaged)",
                          caveat:
                            "Adds $8,000–$15,000/yr for active pilots. Varies by airline and contract.",
                        },
                        {
                          component: "Profit sharing",
                          meaning: "Annual bonus tied to airline profitability",
                          caveat:
                            "Not guaranteed. Delta, Southwest, Alaska have historically paid 5–15% of eligible earnings.",
                        },
                        {
                          component: "401(k) match",
                          meaning:
                            "Employer contribution to retirement account (typically 15–17% of base)",
                          caveat:
                            "Adds $15,000–$50,000/yr equivalent for senior pilots. Varies by airline.",
                        },
                        {
                          component: "Signing bonus",
                          meaning:
                            "One-time payment on hire (varies by airline and staffing need)",
                          caveat:
                            "Not always available. May have repayment obligation if you leave early.",
                        },
                        {
                          component: "Total compensation",
                          meaning:
                            "Base + per diem + profit sharing + 401k + benefits",
                          caveat:
                            "Can exceed $400,000/yr for senior major-airline captains. Not representative of a new entrant.",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            borderBottom: "1px solid oklch(1 0 0 / 0.06)",
                          }}
                        >
                          <td className="py-2 pr-4 font-medium text-white">
                            {row.component}
                          </td>
                          <td
                            className="py-2 pr-4"
                            style={{ color: "oklch(0.7 0.04 240)" }}
                          >
                            {row.meaning}
                          </td>
                          <td
                            className="py-2"
                            style={{ color: "oklch(0.6 0.04 240)" }}
                          >
                            {row.caveat}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p
                className="text-sm p-3 rounded-lg my-3"
                style={{
                  background: "oklch(0.45 0.18 240 / 0.07)",
                  border: "1px solid oklch(0.45 0.18 240 / 0.15)",
                }}
              >
                Want a scenario-based salary and career projection? Generate
                your free{" "}
                <Link
                  href="/us/roadmap"
                  className="underline"
                  style={{ color: "oklch(0.72 0.18 240)" }}
                >
                  personalised US pilot career roadmap
                </Link>{" "}
                to see a timeline from training to captain.
              </p>
              <img
                src="/manus-storage/pay-scale_67aa53c9.jpg"
                alt="US airline pilot salary"
                className="w-full rounded-xl my-4 object-cover"
                style={{ maxHeight: "320px" }}
              />
              <p>
                The career path often follows a broad arc: start as a regional
                airline first officer, upgrade to regional captain or move
                directly to a major airline as a first officer, then work
                through the seniority list to captain. Recent timelines have
                compressed for some pilots, but future timing depends on the
                airline cycle, retirements, aircraft deliveries and seniority
                movement.
              </p>
            </>
          ),
        },
        {
          heading: "Verified Salary Sources — US Pilot Pay Data",
          content: (
            <>
              <p>
                The following table shows the verified sources used for salary
                data in this guide, including the source URL, last checked date,
                pay basis, and caveat for each data point. All figures are
                indicative ranges — verify current pay scales directly with
                airlines or via ALPA before making any financial decision.
              </p>
              <SalarySourceTable country="United States" className="my-6" />
              <div
                className="p-4 rounded-xl mt-4"
                style={{
                  background: "oklch(0.65 0.18 30 / 0.1)",
                  border: "1px solid oklch(0.65 0.18 30 / 0.25)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: "oklch(0.8 0.15 50)" }}
                >
                  Seniority caveat — read before using any figure
                </p>
                <p className="text-sm" style={{ color: "oklch(0.7 0.04 240)" }}>
                  All pay ranges in this guide are scenario illustrations based
                  on publicly reported CBA data. Actual pay depends on: airline,
                  seat (FO/CA), fleet, base, credit hours, guarantee, seniority
                  number, contract year, and the state of the hiring cycle. A
                  downturn, furlough, or hiring pause can change upgrade
                  timelines and pay expectations significantly.{" "}
                  <strong className="text-white">
                    Do not use any figure in this guide as a guaranteed earnings
                    projection.
                  </strong>
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "Regional Airline Salaries: Where Most Careers Begin",
          content: (
            <>
              <p>
                Most pilots begin their airline careers at regional carriers —
                airlines such as SkyWest, Envoy, Piedmont, PSA, Horizon, GoJet,
                and Republic that operate regional jets under the banners of the
                major carriers. Regional airlines are the primary path for
                pilots who have built their 1,500 hours (or R-ATP minimums) as a
                CFI or in other roles.
              </p>
              <p>
                Regional first officer pay has increased sharply since the late
                2010s. Published partner-school and airline-recruiting figures
                can be useful snapshots, but they change with contracts, bonuses
                and staffing needs. Verify current pay, bonus terms,
                training-pay rules and repayment obligations directly with the
                airline before relying on a figure.
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
                        Pay Component
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Indicative Range (2026)
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Pay Basis
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Caveat
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        component: "Regional FO starting pay",
                        range: "$85,000–$100,000+/yr",
                        basis: "Annual (base + per diem)",
                        caveat:
                          "Figures include base pay and per diem. Actual pay depends on airline, domicile, and contract. Verify via ALPA or airline careers pages.",
                      },
                      {
                        component: "Regional FO signing bonus",
                        range: "$10,000–$75,000 (varies widely)",
                        basis: "One-time",
                        caveat:
                          "Bonuses change with staffing needs. May have repayment obligation if you leave within 1–2 years. Verify terms before accepting.",
                      },
                      {
                        component: "Regional captain upgrade timeline",
                        range: "1–5 years (varies by carrier)",
                        basis: "Scenario",
                        caveat:
                          "Treat any upgrade timeline claim as a scenario, not a promise. Depends on fleet growth, retirements, and hiring pauses.",
                      },
                      {
                        component: "Regional captain pay",
                        range: "$120,000–$180,000/yr",
                        basis: "Annual (base)",
                        caveat:
                          "Indicative range. Verify current CBA rates via ALPA or airline careers pages.",
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
                          {row.component}
                        </td>
                        <td
                          className="px-4 py-3 font-semibold align-top"
                          style={{ color: "oklch(0.85 0.15 65)" }}
                        >
                          {row.range}
                        </td>
                        <td
                          className="px-4 py-3 align-top text-xs"
                          style={{ color: "oklch(0.65 0.04 240)" }}
                        >
                          {row.basis}
                        </td>
                        <td
                          className="px-4 py-3 align-top text-xs"
                          style={{ color: "oklch(0.6 0.04 240)" }}
                        >
                          {row.caveat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs" style={{ color: "oklch(0.45 0.04 240)" }}>
                Source:{" "}
                <a
                  href="https://atpflightschool.com/become-a-pilot/airline-career/commercial-pilot-salary.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                >
                  ATP Flight School salary data
                </a>{" "}
                and{" "}
                <a
                  href="https://www.alpa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                >
                  ALPA
                </a>
                , June 2026. Verify current figures directly.
              </p>
            </>
          ),
        },
        {
          heading: "Major Airline First Officer Pay",
          content: (
            <>
              <p>
                Major airline first officer salaries are governed by collective
                bargaining agreements negotiated by pilot unions (ALPA at most
                carriers, SWAPA at Southwest). The following figures represent
                approximate 2026 base pay ranges for first officers at the major
                US carriers. <strong>These are base pay only</strong> — per
                diem, profit sharing, and 401(k) contributions add substantially
                to total compensation.
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
                        Airline
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Year 1 FO (base)
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Year 5 FO (base)
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Year 10 FO (base)
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Confidence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        airline: "Delta Air Lines",
                        y1: "$100,000",
                        y5: "$145,000",
                        y10: "$185,000",
                        conf: "medium",
                      },
                      {
                        airline: "United Airlines",
                        y1: "$95,000",
                        y5: "$140,000",
                        y10: "$180,000",
                        conf: "medium",
                      },
                      {
                        airline: "American Airlines",
                        y1: "$90,000",
                        y5: "$135,000",
                        y10: "$175,000",
                        conf: "medium",
                      },
                      {
                        airline: "Southwest Airlines",
                        y1: "$85,000",
                        y5: "$130,000",
                        y10: "$170,000",
                        conf: "medium",
                      },
                      {
                        airline: "Alaska Airlines",
                        y1: "$80,000",
                        y5: "$125,000",
                        y10: "$160,000",
                        conf: "medium",
                      },
                      {
                        airline: "FedEx Express",
                        y1: "$105,000",
                        y5: "$155,000",
                        y10: "$195,000",
                        conf: "medium",
                      },
                      {
                        airline: "UPS Airlines",
                        y1: "$100,000",
                        y5: "$150,000",
                        y10: "$190,000",
                        conf: "medium",
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
                        <td className="px-4 py-3 font-medium text-white">
                          {row.airline}
                        </td>
                        <td
                          className="px-4 py-3 font-semibold"
                          style={{ color: "oklch(0.85 0.15 65)" }}
                        >
                          {row.y1}
                        </td>
                        <td
                          className="px-4 py-3"
                          style={{ color: "oklch(0.7 0.04 240)" }}
                        >
                          {row.y5}
                        </td>
                        <td
                          className="px-4 py-3"
                          style={{ color: "oklch(0.7 0.04 240)" }}
                        >
                          {row.y10}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              background: "oklch(0.72 0.18 65 / 0.12)",
                              color: "oklch(0.8 0.18 65)",
                            }}
                          >
                            Medium
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                className="text-xs mb-4"
                style={{ color: "oklch(0.45 0.04 240)" }}
              >
                Indicative ranges based on publicly reported CBA data and ATP
                Flight School salary data (June 2026). Base pay only — does not
                include per diem, profit sharing, or 401(k). Verify current pay
                scales via{" "}
                <a
                  href="https://www.alpa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                >
                  ALPA
                </a>{" "}
                or airline careers pages before relying on any figure.
              </p>
              <p>
                These figures are base pay only. Per diem, profit sharing, and
                401(k) contributions add substantially to total compensation.
                Delta's profit sharing has historically added $15,000 to $40,000
                per year for first officers. Southwest's profit sharing has been
                similarly generous in profitable years.
              </p>
            </>
          ),
        },
        {
          heading: "Major Airline Captain Salaries",
          content: (
            <>
              <p>
                Captain salaries at major US airlines represent some of the
                highest compensation packages in any profession. The following
                figures represent approximate 2026 base pay for captains at
                major carriers. <strong>These are base pay only</strong> — total
                compensation including per diem, profit sharing, and 401(k) is
                materially higher.
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
                        Airline
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Year 1 Captain (base)
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Senior Captain (base)
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Confidence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        airline: "Delta Air Lines",
                        y1: "$200,000",
                        senior: "$320,000+",
                        conf: "medium",
                      },
                      {
                        airline: "United Airlines",
                        y1: "$195,000",
                        senior: "$310,000+",
                        conf: "medium",
                      },
                      {
                        airline: "American Airlines",
                        y1: "$185,000",
                        senior: "$295,000+",
                        conf: "medium",
                      },
                      {
                        airline: "Southwest Airlines",
                        y1: "$180,000",
                        senior: "$285,000+",
                        conf: "medium",
                      },
                      {
                        airline: "FedEx Express",
                        y1: "$220,000",
                        senior: "$360,000+",
                        conf: "medium",
                      },
                      {
                        airline: "UPS Airlines",
                        y1: "$215,000",
                        senior: "$350,000+",
                        conf: "medium",
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
                        <td className="px-4 py-3 font-medium text-white">
                          {row.airline}
                        </td>
                        <td
                          className="px-4 py-3 font-semibold"
                          style={{ color: "oklch(0.85 0.15 65)" }}
                        >
                          {row.y1}
                        </td>
                        <td
                          className="px-4 py-3 font-semibold"
                          style={{ color: "oklch(0.85 0.15 65)" }}
                        >
                          {row.senior}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              background: "oklch(0.72 0.18 65 / 0.12)",
                              color: "oklch(0.8 0.18 65)",
                            }}
                          >
                            Medium
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                className="text-xs mb-4"
                style={{ color: "oklch(0.45 0.04 240)" }}
              >
                Indicative ranges based on publicly reported CBA data (June
                2026). Base pay only. Verify current pay scales via{" "}
                <a
                  href="https://www.alpa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                >
                  ALPA
                </a>{" "}
                or airline careers pages.
              </p>
              <p>
                FedEx and UPS captain salaries are among the highest in the
                industry because cargo operations often involve less desirable
                schedules (night flying, weekends, holidays) and the unions have
                negotiated premium compensation accordingly. Total compensation
                for senior FedEx and UPS captains, including per diem, profit
                sharing, and benefits, can exceed $400,000 per year — but this
                reflects senior widebody captains, not new entrants.
              </p>
            </>
          ),
        },
        {
          heading: "Career Timeline: How Long to Reach Each Salary Level",
          content: (
            <>
              <p>
                The timeline from zero hours to major airline captain has
                compressed for some pilots in recent hiring cycles. A typical
                career arc in 2026 looks like this — but treat all timelines as
                scenarios, not promises:
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
                        Career Stage
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Approximate Timeline
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Indicative Pay Range
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Key Variables
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        stage: "Flight training (PPL → CFI)",
                        timeline: "Years 0–2",
                        pay: "$30,000–$50,000/yr as CFI",
                        variables:
                          "Training cost, loan terms, time to 1,500 hours",
                      },
                      {
                        stage: "Regional FO",
                        timeline: "Years 2–4",
                        pay: "$85,000–$130,000/yr",
                        variables:
                          "Airline, contract, base, signing bonus terms",
                      },
                      {
                        stage: "Regional captain or major FO hire",
                        timeline: "Years 4–6",
                        pay: "$90,000–$180,000/yr",
                        variables: "Fleet growth, retirements, hiring cycle",
                      },
                      {
                        stage: "Major airline FO",
                        timeline: "Years 6–12",
                        pay: "$100,000–$185,000/yr (base)",
                        variables: "Seniority, fleet, base, credit hours",
                      },
                      {
                        stage: "Major airline captain",
                        timeline: "Years 12–20+",
                        pay: "$200,000–$320,000+/yr (base)",
                        variables: "Seniority, fleet, airline, contract year",
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
                          {row.stage}
                        </td>
                        <td
                          className="px-4 py-3 align-top"
                          style={{ color: "oklch(0.7 0.04 240)" }}
                        >
                          {row.timeline}
                        </td>
                        <td
                          className="px-4 py-3 font-semibold align-top"
                          style={{ color: "oklch(0.85 0.15 65)" }}
                        >
                          {row.pay}
                        </td>
                        <td
                          className="px-4 py-3 align-top text-xs"
                          style={{ color: "oklch(0.6 0.04 240)" }}
                        >
                          {row.variables}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                These timelines are approximate and depend heavily on the state
                of the industry, the specific airline, fleet, base and
                individual seniority. A downturn or hiring pause can quickly
                change upgrade expectations.
              </p>
              <p>
                Training ROI depends on debt terms, interest rate, time to first
                airline job, furlough/hiring cycles, tax, base, living costs and
                seniority. Do not assume a fixed payback period or lifetime
                earnings figure without modelling conservative and downside
                scenarios.
              </p>
            </>
          ),
        },
        {
          heading: "Beyond Base Pay: The Full Compensation Picture",
          content: (
            <>
              <p>
                Pilot compensation is more complex than base salary alone.
                Understanding the full picture helps you evaluate offers and
                plan your career. Every component below has a caveat — none are
                guaranteed, and all vary by airline, contract, and year.
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
                        Component
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Indicative Value
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-white">
                        Caveat
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        component: "Per diem",
                        value: "$8,000–$15,000/yr",
                        caveat:
                          "Paid at $2.00–$3.50/hr away from base. Largely tax-advantaged. Varies by airline and contract.",
                      },
                      {
                        component: "Profit sharing",
                        value: "$10,000–$50,000/yr (profitable years)",
                        caveat:
                          "Not guaranteed. Delta, Southwest, Alaska have historically paid 5–15% of eligible earnings. Zero in loss years.",
                      },
                      {
                        component: "401(k) employer contribution",
                        value: "$15,000–$50,000/yr equivalent",
                        caveat:
                          "Most major airlines contribute 15–17% of base pay. Vesting schedule applies.",
                      },
                      {
                        component: "Signing bonus",
                        value: "$10,000–$75,000 (one-time)",
                        caveat:
                          "Not always available. Changes with staffing needs. May have repayment obligation if you leave early.",
                      },
                      {
                        component: "Travel benefits",
                        value: "Thousands of dollars/yr in equivalent value",
                        caveat:
                          "Free and discounted travel for pilot and immediate family. Value depends on how much you use it.",
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
                          {row.component}
                        </td>
                        <td
                          className="px-4 py-3 font-semibold align-top"
                          style={{ color: "oklch(0.85 0.15 65)" }}
                        >
                          {row.value}
                        </td>
                        <td
                          className="px-4 py-3 align-top text-xs"
                          style={{ color: "oklch(0.6 0.04 240)" }}
                        >
                          {row.caveat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                className="p-4 rounded-xl mt-4"
                style={{
                  background: "oklch(0.16 0.06 250)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
              >
                <p className="text-sm font-semibold mb-2 text-white">
                  Update schedule for this guide
                </p>
                <p
                  className="text-sm"
                  style={{ color: "oklch(0.65 0.04 240)" }}
                >
                  Salary data in this guide is reviewed when new collective
                  bargaining agreements are publicly reported or when ALPA
                  publishes updated pay scale data. This guide was last reviewed
                  in <strong className="text-white">June 2026</strong>. For the
                  most current pay scales, consult{" "}
                  <a
                    href="https://www.alpa.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: "oklch(0.65 0.18 240)" }}
                  >
                    ALPA.org
                  </a>{" "}
                  or the relevant airline's careers page directly.
                </p>
              </div>
            </>
          ),
        },
      ]}
    />
  );
};

export default PilotSalaryUSA;
