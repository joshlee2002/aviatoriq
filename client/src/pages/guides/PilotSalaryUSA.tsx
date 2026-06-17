import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";

const PilotSalaryUSA = () => {
  return (
    <GuideLayout
      title="Airline Pilot Salary USA 2026: First Officer & Captain Pay at Every Major Airline"
      subtitle="2026 US airline pilot pay ranges for regional and major airline pilots — what compensation can look like by seat, seniority, contract and airline cycle."
      canonical="/us/guides/airline-pilot-salary-usa"
      metaDescription="US airline pilot salary guide 2026 with indicative pay ranges for regional FOs, major airline first officers and captains, plus contract and seniority caveats."
      faqSchema={[
        {
          question: "How much does a first officer make at a US major airline?",
          answer: "Major-airline first-officer pay varies by contract, seat, fleet, guarantee, credit hours and seniority. Use current collective bargaining agreements or airline recruiting pages before relying on a specific figure; total compensation can differ materially from base pay alone.",
        },
        {
          question: "How much does a regional airline first officer make?",
          answer: "Regional first-officer pay has risen sharply, but published starting pay and bonuses change by carrier, contract and staffing need. Verify current hourly rate, guarantee, bonus terms, training pay and repayment obligations directly with the airline.",
        },
        {
          question: "How much does an airline captain make in the USA?",
          answer: "Major-airline captain compensation can be very high, but it depends on seniority, aircraft, schedule, credit hours, profit sharing, benefits and contract rules. Treat headline numbers as scenarios, not guaranteed earnings.",
        },
        {
          question: "How long does it take to upgrade from first officer to captain?",
          answer: "Upgrade timelines have shortened at some airlines in recent hiring cycles, but they are not guaranteed. Regional and major-airline upgrades depend on fleet growth, retirements, hiring pauses, base, seat, contract and seniority.",
        },
        {
          question: "What is per diem and how much do pilots earn from it?",
          answer: "Per diem is a daily allowance paid to pilots when away from their base, intended to cover meals and incidentals. Rates vary by airline but typically range from $2.00 to $3.50 per hour away from base. A pilot away from base 15 days per month at $2.50 per hour earns approximately $900 to $1,200 per month in per diem, largely tax-advantaged.",
        },
      ]}
      readTime="10 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/pilot-salary-usa_292045db.jpg"
      ctaHref="/us/roadmap"
      ctaText="Get my free US pilot roadmap"
      sections={[
        {
          heading: "The US Pilot Salary Landscape in 2026",
          content: (
            <>
              <p>
                US airline pilot salaries rose sharply in recent contract cycles, influenced by retirement flow, post-pandemic demand recovery, bargaining power and regional-airline staffing pressure. Pay remains airline-, contract-, seat-, base- and cycle-dependent.
              </p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Want a scenario-based salary and career projection? Generate your free <Link href="/us/roadmap" className="text-blue-400 underline">personalised US pilot career roadmap</Link> to see a timeline from training to captain.
              </p>
              <img src="/manus-storage/pay-scale_67aa53c9.jpg" alt="US airline pilot salary" className="w-full rounded-xl my-4 object-cover" style={{ maxHeight: "320px" }} />
              <p>
                Understanding pilot compensation requires looking beyond base pay. Total compensation includes base salary, per diem (a daily allowance when away from base), profit sharing (which at Delta and Southwest has added $20,000 to $50,000 per year for senior pilots), 401(k) contributions, health insurance, travel benefits, and signing bonuses. For senior captains at major carriers, total compensation routinely exceeds $400,000 per year.
              </p>
              <p>
                The career path often follows a broad arc: start as a regional airline first officer, upgrade to regional captain or move directly to a major airline as a first officer, then work through the seniority list to captain. Recent timelines have compressed for some pilots, but future timing depends on the airline cycle, retirements, aircraft deliveries and seniority movement.
              </p>
            </>
          ),
        },
        {
          heading: "Regional Airline Salaries: Where Most Careers Begin",
          content: (
            <>
              <p>
                Most pilots begin their airline careers at regional carriers — airlines such as SkyWest, Envoy, Piedmont, PSA, Horizon, GoJet, and Republic that operate regional jets under the banners of the major carriers. Regional airlines are the primary path for pilots who have built their 1,500 hours (or R-ATP minimums) as a CFI or in other roles.
              </p>
              <p>
                Regional first officer pay has increased sharply since the late 2010s. Published partner-school and airline-recruiting figures can be useful snapshots, but they change with contracts, bonuses and staffing needs. Verify current pay, bonus terms, training-pay rules and repayment obligations directly with the airline before relying on a figure.
              </p>
              <p>
                Regional captain pay and upgrade timelines vary by carrier, contract, aircraft type, base, staffing and attrition. Treat any 1–3 year upgrade claim as a scenario, not a promise. The regional captain role is often used as a stepping stone to major airline first officer positions, where seniority resets but pay increases significantly.
              </p>
            </>
          ),
        },
        {
          heading: "Major Airline First Officer Pay",
          content: (
            <>
              <p>
                Major airline first officer salaries are governed by collective bargaining agreements negotiated by pilot unions (ALPA at most carriers, SWAPA at Southwest). The following figures represent approximate 2026 base pay ranges for first officers at the major US carriers:
              </p>
              <div style={{ overflowX: "auto", margin: "1rem 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr style={{ background: "#f3f4f6" }}>
                      <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>Airline</th>
                      <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>Year 1 FO</th>
                      <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>Year 5 FO</th>
                      <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>Year 10 FO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Delta Air Lines", "$100,000", "$145,000", "$185,000"],
                      ["United Airlines", "$95,000", "$140,000", "$180,000"],
                      ["American Airlines", "$90,000", "$135,000", "$175,000"],
                      ["Southwest Airlines", "$85,000", "$130,000", "$170,000"],
                      ["Alaska Airlines", "$80,000", "$125,000", "$160,000"],
                      ["FedEx Express", "$105,000", "$155,000", "$195,000"],
                      ["UPS Airlines", "$100,000", "$150,000", "$190,000"],
                    ].map(([airline, y1, y5, y10]) => (
                      <tr key={airline} style={{ borderBottom: "1px solid #e5e7eb" }}>
                        <td style={{ padding: "0.75rem" }}>{airline}</td>
                        <td style={{ padding: "0.75rem" }}>{y1}</td>
                        <td style={{ padding: "0.75rem" }}>{y5}</td>
                        <td style={{ padding: "0.75rem" }}>{y10}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                These figures are base pay only. Per diem, profit sharing, and 401(k) contributions add substantially to total compensation. Delta's profit sharing has historically added $15,000 to $40,000 per year for first officers. Southwest's profit sharing has been similarly generous in profitable years.
              </p>
            </>
          ),
        },
        {
          heading: "Major Airline Captain Salaries",
          content: (
            <>
              <p>
                Captain salaries at major US airlines represent some of the highest compensation packages in any profession. The following figures represent approximate 2026 base pay for captains at major carriers:
              </p>
              <div style={{ overflowX: "auto", margin: "1rem 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                  <thead>
                    <tr style={{ background: "#f3f4f6" }}>
                      <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>Airline</th>
                      <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>Year 1 Captain</th>
                      <th style={{ padding: "0.75rem", textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>Senior Captain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Delta Air Lines", "$200,000", "$320,000+"],
                      ["United Airlines", "$195,000", "$310,000+"],
                      ["American Airlines", "$185,000", "$295,000+"],
                      ["Southwest Airlines", "$180,000", "$285,000+"],
                      ["FedEx Express", "$220,000", "$360,000+"],
                      ["UPS Airlines", "$215,000", "$350,000+"],
                    ].map(([airline, y1, senior]) => (
                      <tr key={airline} style={{ borderBottom: "1px solid #e5e7eb" }}>
                        <td style={{ padding: "0.75rem" }}>{airline}</td>
                        <td style={{ padding: "0.75rem" }}>{y1}</td>
                        <td style={{ padding: "0.75rem" }}>{senior}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                FedEx and UPS captain salaries are among the highest in the industry because cargo operations often involve less desirable schedules (night flying, weekends, holidays) and the unions have negotiated premium compensation accordingly. Total compensation for senior FedEx and UPS captains, including per diem, profit sharing, and benefits, regularly exceeds $400,000 per year.
              </p>
            </>
          ),
        },
        {
          heading: "Career Timeline: How Long to Reach Each Salary Level",
          content: (
            <>
              <p>
                The timeline from zero hours to major airline captain has compressed significantly. A typical career path in 2026 looks like this:
              </p>
              <ul style={{ paddingLeft: "1.5rem", lineHeight: "2.2" }}>
                <li><strong>Years 0 to 2:</strong> Flight training (PPL, IR, CPL, CFI) — earning $30,000 to $50,000 as a CFI</li>
                <li><strong>Years 2 to 4:</strong> Regional airline first officer — earning $110,000 to $130,000 (2026 figures)</li>
                <li><strong>Years 4 to 6:</strong> Regional captain or major airline FO hire — earning $90,000 to $130,000</li>
                <li><strong>Years 6 to 12:</strong> Major airline first officer — earning $100,000 to $185,000</li>
                <li><strong>Years 12 to 20:</strong> Major airline captain — earning $200,000 to $320,000+</li>
              </ul>
              <p>
                These timelines are approximate and depend heavily on the state of the industry, the specific airline, fleet, base and individual seniority. Recent hiring cycles have compressed some timelines, but a downturn or hiring pause can quickly change upgrade expectations.
              </p>
              <p>
                Training ROI depends on debt terms, interest rate, time to first airline job, furlough/hiring cycles, tax, base, living costs and seniority. Do not assume a fixed payback period or lifetime earnings figure without modelling conservative and downside scenarios.
              </p>
            </>
          ),
        },
        {
          heading: "Beyond Base Pay: The Full Compensation Picture",
          content: (
            <>
              <p>
                Pilot compensation is more complex than base salary alone. Understanding the full picture helps you evaluate offers and plan your career:
              </p>
              <p>
                <strong>Per diem:</strong> Paid at $2.00 to $3.50 per hour away from base. A pilot away from base 15 days per month earns $720 to $1,260 per month in per diem, which is largely tax-advantaged as it is intended to cover expenses. Annual per diem income of $8,000 to $15,000 is typical for active pilots.
              </p>
              <p>
                <strong>Profit sharing:</strong> Delta, Southwest, and Alaska have historically paid significant profit sharing. Delta paid 10% of eligible earnings in profit sharing in recent years, adding $10,000 to $40,000 to annual compensation for first officers and captains respectively.
              </p>
              <p>
                <strong>401(k) and pension:</strong> Most major airlines contribute 15 to 17% of base pay to a 401(k) plan. Some carriers also have defined benefit pension plans for pilots hired before certain dates. The retirement benefits alone add $25,000 to $50,000 per year in equivalent compensation for senior pilots.
              </p>
              <p>
                <strong>Travel benefits:</strong> Free and heavily discounted travel for pilots and their immediate family members on their airline and often partner airlines. For pilots who value travel, this benefit alone is worth thousands of dollars per year.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        { title: "US Pilot Career Outlook 2026: Is Now the Best Time to Start?", href: "/us/guides/us-pilot-career-outlook", time: "8 min read" },
        { title: "How to Fund Pilot Training in the USA", href: "/us/guides/how-to-fund-pilot-training-usa", time: "8 min read" },
        { title: "ATP Certificate USA: Requirements & How to Get One", href: "/us/guides/atp-certificate-usa", time: "10 min read" },
      ]}
    
      sources={[
    { name: "FAA" },
    { name: "FAA Aeronautical Information Manual" },
    { name: "Boeing Commercial Market Outlook" },
  ]}/>
  );
};

export default PilotSalaryUSA;
