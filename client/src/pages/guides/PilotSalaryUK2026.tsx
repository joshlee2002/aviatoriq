import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";

const PilotSalaryUK2026 = () => {
  return (
    <GuideLayout
      title="UK Pilot Salary Guide 2026: First Officer to Captain"
      subtitle="Real salary figures for UK airline pilots in 2026 — by rank, airline, and aircraft type. Based on current pay scales and union data."
      canonical="/guides/uk-pilot-salary-2026"
      metaDescription="UK pilot salary 2026. Real figures for first officers and captains at Ryanair, easyJet, Jet2, BA, and regional airlines. Includes pay progression, allowances, and total compensation."
      faqSchema={[
        { question: "How much does a UK airline pilot earn in 2026?", answer: "A UK airline first officer earns £45,000–£75,000 in their first year, depending on the airline and aircraft type. Captains earn £80,000–£180,000. Total compensation including allowances, per diems, and pension contributions is typically 20–30% higher than base salary." },
        { question: "How long does it take to become a captain?", answer: "The timeline from first officer to captain varies significantly by airline and market conditions. In a growing airline, promotion can happen in 5–8 years. At legacy carriers like British Airways, it can take 10–15 years. The pilot shortage is accelerating promotion timelines across the industry." },
        { question: "Do pilots get paid per hour or a salary?", answer: "Most UK airline pilots receive a combination of a base salary plus flying hour pay. The base salary covers guaranteed minimum hours, and additional pay is earned for hours flown above the minimum. Some low-cost carriers pay primarily on a per-hour basis." },
        { question: "What is the highest paying airline for pilots in the UK?", answer: "British Airways and Virgin Atlantic typically offer the highest total compensation packages for UK pilots, particularly at captain level. Jet2 is known for competitive pay and a positive working culture. Ryanair pays well at captain level but has a more demanding working environment." },
        { question: "Do pilots pay tax on their salary?", answer: "Yes. UK-based pilots pay income tax and National Insurance on their salary in the normal way. Some allowances and per diems may be tax-free up to HMRC limits. Pilots based overseas may have different tax arrangements depending on their employment contract and residency status." },
      ]}
      readTime="8 min read"
      heroImage="/manus-storage/uk-salary-2026_12c4d065.jpg"
      ctaHref="/roadmap"
      ctaText="Generate my personalised roadmap"
      relatedGuides={[
        { title: "UK Pilot Shortage 2026: What It Means for You", href: "/guides/uk-pilot-shortage-2026", time: "5 min read" },
        { title: "How to Finance Pilot Training UK 2026", href: "/guides/pilot-training-finance-2026", time: "9 min read" },
        { title: "Airline Pilot Interview Guide", href: "/guides/airline-pilot-interview-guide", time: "10 min read" },
        { title: "Type Rating: What It Is and What It Costs", href: "/guides/type-rating-guide", time: "6 min read" },
      ]}
      sections={[
        {
          heading: "Salary Progression: First Officer to Captain",
          content: (
            <>
              <div style={{ margin: "0 0 20px 0", borderRadius: "12px", overflow: "hidden" }}>
                <img
                  src="/manus-storage/pilot-salary-progression_0322057d.png"
                  alt="UK airline pilot salary progression 2026 from first officer to captain"
                  style={{ width: "100%", display: "block" }}
                  loading="lazy"
                />
              </div>
              <p style={{ fontSize: "0.8rem", color: "oklch(0.45 0.04 240)", textAlign: "center", marginBottom: "16px" }}>
                UK airline pilot salary ranges by career stage, 2026. Base salary only — total compensation 20–30% higher.
              </p>
              <img src="/manus-storage/pay-scale_67aa53c9.jpg" alt="UK pilot pay scale" className="w-full rounded-xl my-4 object-cover" style={{ maxHeight: "320px" }} />
              <img src="/manus-storage/pilot-salary-progression_0322057d.png" alt="UK pilot salary progression" className="w-full rounded-xl my-4 object-cover" style={{ maxHeight: "320px" }} />
            </>
          ),
        },
        {
          heading: "The Real Numbers: UK Pilot Pay in 2026",
          content: (
            <>
              <p>
                Pilot salaries in the UK have recovered strongly from the COVID-19 pandemic and are now at or above pre-pandemic levels at most airlines. The ongoing pilot shortage in Europe has given pilots significant negotiating leverage, and pay scales have increased across the industry.
              </p>
              <p>
                The figures below are based on current pay scales from union agreements, publicly available data, and industry sources. They represent base salary — total compensation including allowances, per diems, and pension contributions is typically 20–30% higher.
              </p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
                  <thead>
                    <tr style={{ backgroundColor: "oklch(0.18 0.08 250)" }}>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Airline</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>First Officer (Year 1)</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Senior First Officer</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Captain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["British Airways", "£55,000–£65,000", "£75,000–£95,000", "£120,000–£180,000"],
                      ["easyJet", "£50,000–£60,000", "£65,000–£80,000", "£90,000–£130,000"],
                      ["Jet2", "£50,000–£62,000", "£68,000–£82,000", "£95,000–£130,000"],
                      ["Ryanair", "£45,000–£58,000", "£60,000–£75,000", "£100,000–£150,000"],
                      ["TUI Airways", "£48,000–£60,000", "£65,000–£78,000", "£90,000–£120,000"],
                      ["Virgin Atlantic", "£52,000–£65,000", "£75,000–£90,000", "£110,000–£160,000"],
                      ["Loganair / Regional", "£35,000–£50,000", "£50,000–£65,000", "£65,000–£90,000"],
                    ].map(([airline, fo, sfo, capt]) => (
                      <tr key={airline}>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.85 0.04 240)", fontWeight: "600" }}>{airline}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.75 0.04 240)" }}>{fo}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.75 0.04 240)" }}>{sfo}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.75 0.04 240)" }}>{capt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                These figures are base salary only. Total compensation — including sector pay, allowances, per diems, and pension — is typically 20–30% higher. A Jet2 captain on a £120,000 base salary may have total compensation of £145,000–£155,000.
              </p>
            </>
          ),
        },
        {
          heading: "Pay Progression: From First Officer to Captain",
          content: (
            <>
              <p>
                The journey from newly qualified first officer to captain is the most important financial trajectory in a pilot's career. The timeline varies significantly by airline, market conditions, and the pilot shortage.
              </p>
              <p>
                In the current market (2026), with a significant pilot shortage across Europe, promotion timelines have accelerated. At growing airlines like Jet2 and Ryanair, first officers are being promoted to captain in 5–8 years. At legacy carriers like British Airways, where the fleet is larger and the seniority list is longer, the timeline is typically 10–15 years.
              </p>
              <p>
                The seniority system means that joining a growing airline early is one of the best career decisions a pilot can make. A first officer who joins Jet2 in 2026 will move up the seniority list faster than one who joins a stagnant airline, regardless of their individual performance.
              </p>
            </>
          ),
        },
        {
          heading: "Total Compensation: What's Beyond the Base Salary",
          content: (
            <>
              <p>
                Base salary is only part of the picture. UK airline pilots typically receive a range of additional compensation elements:
              </p>
              <p>
                <strong>Sector pay / flying hour pay:</strong> Additional pay for each sector flown or hour in the air, above a guaranteed minimum. This can add £5,000–£20,000 per year depending on the airline and how much you fly.
              </p>
              <p>
                <strong>Per diems and allowances:</strong> Daily allowances for time away from base, meal allowances, and hotel costs when overnighting away from home. These are often tax-free up to HMRC limits and can add £5,000–£15,000 per year.
              </p>
              <p>
                <strong>Pension:</strong> Most UK airlines contribute 5–15% of salary to a pension scheme. At British Airways, the pension contribution is particularly generous. Over a 30-year career, this is a significant component of total compensation.
              </p>
              <p>
                <strong>Travel benefits:</strong> Staff travel (standby and sometimes confirmed seats) for the pilot and their family is a significant perk. The value varies by airline but can be worth thousands of pounds per year in holiday savings.
              </p>
            </>
          ),
        },
        {
          heading: "The Return on Investment Calculation",
          content: (
            <>
              <p>
                The most important financial question for any aspiring pilot is: does the investment in training pay off? The honest answer, for most people who complete training and get an airline job, is yes — but the timeline matters.
              </p>
              <p>
                Consider this scenario: You spend £100,000 on integrated training plus a type rating, funded by a loan at 7% over 15 years. Your monthly repayment is approximately £900. You join an airline as a first officer at £55,000. After tax, your take-home is approximately £3,400/month. Your loan repayment is £900/month — 26% of take-home pay. Tight, but manageable.
              </p>
              <p>
                By year 5, you are earning £70,000. Your loan repayment is now 18% of take-home pay. By year 10, as a captain on £110,000, your loan may be paid off entirely. Over a 30-year career, your total earnings will be £2.5–£4 million. The £100,000 investment looks very different in that context.
              </p>
              <p>
                The calculation changes significantly if you start training at 45 rather than 25. A 20-year career window changes the ROI fundamentally. Use the <Link href="/calculator">AviatorIQ Cost Calculator</Link> to model your specific scenario.
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default PilotSalaryUK2026;
