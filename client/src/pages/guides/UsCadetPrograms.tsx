import GuideLayout from "@/components/GuideLayout";

export default function UsCadetPrograms() {
  return (
    <GuideLayout
      title="US Airline Cadet Programmes 2026: United Aviate, Delta Propel, American Cadet & More"
      subtitle="A complete comparison of every major US airline cadet pathway — costs, timelines, eligibility, and which programme gives you the best shot at a major airline career."
      readTime="14 min read"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Airline Pathways"
      canonical="https://aviatoriq.com/us/guides/us-cadet-programs"
      metaDescription="US airline cadet programmes 2026: United Aviate ($111k–$122k), Delta Propel, American Airlines Cadet Academy ($123,995), Southwest Destination 225° (paused). Full comparison, costs, and eligibility."
      ctaText="Check your US cadet programme eligibility"
      ctaHref="/quiz"
      faqSchema={[
        {
          question: "What is the cheapest US airline cadet programme?",
          answer: "United Aviate Academy is the most cost-transparent programme at approximately $111,700–$122,000 all-in (including DPE check rides and FAA knowledge exams). Delta Propel routes through AABI-accredited universities, which can be financed via federal student loans. American Airlines Cadet Academy via ATP Flight School costs $123,995.",
        },
        {
          question: "Does the United Aviate programme guarantee a job at United Airlines?",
          answer: "Graduates of United Aviate Academy receive a Conditional Employment Offer (CEO) for United Airlines, contingent on meeting all ATP minimums, passing all required checks, and maintaining a clean record. It is the closest thing to a guaranteed pathway to a major US airline.",
        },
        {
          question: "Is Southwest Destination 225° still accepting applications in 2026?",
          answer: "No. Southwest Airlines paused new Destination 225° intakes in 2025. As of June 2026, the programme has not reopened for new applications. Check southwest.com/careers for updates.",
        },
        {
          question: "What is Delta Propel and how do I apply?",
          answer: "Delta Propel is Delta Air Lines' pilot career development programme. It partners with AABI-accredited four-year aviation universities and affiliate flight schools (ATP Flight School, Academy of Aviation, Superior Flight School). Graduates receive a single-interview process leading to Endeavor Air (regional) and then mainline Delta. Applications open periodically — check delta.com/careers.",
        },
        {
          question: "Do I need a degree for US airline cadet programmes?",
          answer: "United Aviate Academy requires only a high school diploma. American Airlines Cadet Academy (via ATP) requires only a high school diploma. Delta Propel requires either a 4-year AABI-accredited aviation degree or graduation from a Propel affiliate school. Southwest Destination 225° (paused) required no degree for the Cadet pathway.",
        },
      ]}
      sections={[
        {
          heading: "The four major US airline cadet pathways at a glance",
          content: (
            <>
              <p>
                The US airline industry faces a structural pilot shortage — Boeing projects a need for 674,000 new pilots in North America by 2043. In response, the four largest US carriers have built structured cadet pathways that take candidates from zero flight hours to a First Officer seat at a major airline. Here is how they compare:
              </p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Not sure if you qualify? Try our free <Link href="/us/cadet-eligibility" className="text-blue-400 underline">US Cadet Eligibility Checker</Link> to see which programmes you are likely to be eligible for.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Programme</th>
                      <th className="px-4 py-3 font-semibold">Airline</th>
                      <th className="px-4 py-3 font-semibold">Training Partner</th>
                      <th className="px-4 py-3 font-semibold">Total Cost</th>
                      <th className="px-4 py-3 font-semibold">Degree Required?</th>
                      <th className="px-4 py-3 font-semibold">Status (June 2026)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    {[
                      ["United Aviate Academy", "United Airlines", "Aviate Academy (Goodyear, AZ)", "$111,700–$122,000", "No (HS diploma)", "Open"],
                      ["Delta Propel", "Delta Air Lines", "ATP, Academy of Aviation, Superior, AABI universities", "Varies ($80k–$130k)", "4-yr AABI degree or Propel school", "Open"],
                      ["American Airlines Cadet Academy", "American Airlines", "ATP Flight School (Part 141)", "$123,995", "No (HS diploma)", "Open — next window early 2027"],
                      ["Southwest Destination 225°", "Southwest Airlines", "CAE, SkyWarrior, US Aviation", "$115,000–$125,000", "No", "Paused since 2025"],
                    ].map(([prog, airline, partner, cost, degree, status], i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 font-medium text-white">{prog}</td>
                        <td className="px-4 py-3">{airline}</td>
                        <td className="px-4 py-3">{partner}</td>
                        <td className="px-4 py-3">{cost}</td>
                        <td className="px-4 py-3">{degree}</td>
                        <td className="px-4 py-3">{status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "United Aviate Academy",
          content: (
            <>
              <p>
                United Aviate Academy (UAA) is United Airlines' own ab-initio flight training school, located in Goodyear, Arizona. It is the most direct pathway to a United Airlines First Officer seat available to zero-hour applicants. Graduates receive a <strong>Conditional Employment Offer (CEO)</strong> for United Airlines upon meeting ATP minimums.
              </p>

              <p>
                <strong>Programme structure:</strong> UAA trains students through six certificates — Private Pilot, Instrument Rating, Commercial Single Engine, CFI, CFII, and Commercial Multi Engine. After completing training (~12–18 months), graduates instruct at UAA to build hours toward the 1,500-hour ATP minimum (or 1,000 hours with an AABI aviation degree). Upon reaching minimums, they receive a CEO and join United as a First Officer.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Certificate / Fee</th>
                      <th className="px-4 py-3 font-semibold">Cost (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    {[
                      ["Private Pilot Licence (PPL)", "$22,750"],
                      ["Instrument Rating (IR)", "$17,000"],
                      ["Commercial Single Engine (COM-SE)", "$25,500"],
                      ["Certified Flight Instructor (CFI)", "$10,250"],
                      ["CFI Instrument (CFII)", "$5,500"],
                      ["Commercial Multi Engine (COM-ME)", "$8,000"],
                      ["Subtotal (6 certificates)", "$89,000"],
                      ["Optional: Multi Engine Instructor (MEI)", "$9,250"],
                      ["Required: DPE check ride fees", "$9,700"],
                      ["Required: FAA knowledge exam fees", "$875"],
                      ["Total (all-in, with MEI)", "~$108,825–$122,000"],
                    ].map(([item, cost], i) => (
                      <tr key={i} className={`hover:bg-white/5 transition-colors ${item.startsWith("Total") || item.startsWith("Subtotal") ? "font-semibold text-white" : ""}`}>
                        <td className="px-4 py-3">{item}</td>
                        <td className="px-4 py-3">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Eligibility:</strong> US citizen or permanent resident; at least 18 years old; high school diploma or GED; height under 6'3" and weight under 250 lbs; able to obtain an FAA First Class Medical Certificate. No prior flight experience required.
              </p>

              <p>
                <strong>Financing:</strong> UAA assists cadets with Sallie Mae and AOPA Finance loan applications. Scholarship opportunities are available through partner organisations including the Latino Pilots Association, Women in Aviation International, and the Organization of Black Aerospace Professionals.
              </p>
            </>
          ),
        },
        {
          heading: "Delta Propel",
          content: (
            <>
              <p>
                Delta Propel is Delta Air Lines' structured pilot career development programme. Unlike United Aviate, Delta does not operate its own flight school — instead, it partners with a network of AABI-accredited four-year aviation universities and affiliate flight schools. The pathway leads to Endeavor Air (Delta's wholly-owned regional) and then to mainline Delta Air Lines.
              </p>

              <p>
                <strong>Affiliate schools (Part 141):</strong> ATP Flight School, Academy of Aviation, Superior Flight School. Students at these schools can apply for the Propel programme during training and receive a conditional pathway to Delta upon meeting minimums.
              </p>

              <p>
                <strong>University pathway:</strong> Graduates of AABI-accredited four-year aviation programmes (Embry-Riddle, University of North Dakota, Purdue, etc.) with an aviation degree qualify for the R-ATP at 1,000 hours — 500 hours earlier than the standard ATP. This is the most cost-effective route to Delta if you are willing to commit to a 4-year degree.
              </p>

              <p>
                <strong>The Propel process:</strong> Candidates apply during training, complete a single-interview process, receive a Conditional Job Offer (CJO) for Endeavor Air, build hours to ATP minimums at Endeavor, then flow through to mainline Delta. Total timeline from zero hours to Delta First Officer: approximately 5–7 years.
              </p>

              <p>
                <strong>Cost:</strong> Varies significantly by route. ATP Flight School affiliate route: $123,995. AABI university route: $80,000–$130,000 depending on institution and state residency. Federal student loans (FAFSA) are available for accredited university programmes.
              </p>
            </>
          ),
        },
        {
          heading: "American Airlines Cadet Academy",
          content: (
            <>
              <p>
                The American Airlines Cadet Academy operates exclusively through <strong>ATP Flight School</strong> (Part 141). It is the largest cadet programme in the US by volume of graduates. Cadets receive a <strong>Conditional Job Offer (CJO)</strong> for American Airlines or one of its wholly-owned regional carriers (Envoy, Piedmont, PSA Airlines) upon completing training and meeting ATP minimums.
              </p>

              <p>
                <strong>Cost:</strong> The ATP Flight School Airline Career Pilot Program (ACPP) is priced at <strong>$123,995</strong> for zero-experience applicants (published June 2026). This covers all certificates from PPL through CFI, CFII, and MEI, plus all flight hours to ATP minimums. Students with an existing PPL can enter at $90,995.
              </p>

              <p>
                <strong>Timeline:</strong> Approximately 7–9 months of full-time training to reach Commercial Pilot with CFI ratings, then 18–24 months of instructing at ATP to build to 1,500 hours (or 1,000 hours with an aviation associate's degree).
              </p>

              <p>
                <strong>2026 application window:</strong> The 2026 intake window has closed. The next window is expected to open in early 2027. Applications are accepted at aacadetacademy.com.
              </p>

              <p>
                <strong>Eligibility:</strong> US citizen or legal right to work in the US; 21 years old by programme completion; high school diploma or GED; able to obtain an FAA First Class Medical Certificate; valid passport.
              </p>

              <p>
                <strong>Financing:</strong> American Airlines Federal Credit Union offers dedicated cadet loans. Sallie Mae Airline Career Loan is also accepted at ATP Flight School. The GI Bill can cover a portion of costs for eligible veterans.
              </p>
            </>
          ),
        },
        {
          heading: "Southwest Destination 225° (Paused)",
          content: (
            <>
              <p>
                Southwest Airlines paused new Destination 225° intakes in 2025. As of June 2026, the programme has not reopened for new applications. The information below reflects the programme as it operated before the pause.
              </p>

              <p>
                Destination 225° offered four pathways: Cadet (ab-initio), University, Military, and Employee. The Cadet pathway partnered with CAE (Mesa, AZ), SkyWarrior (Pensacola, FL), and US Aviation Academy (Denton, TX) — all Part 141. Training costs were approximately $115,000–$125,000 depending on the partner school. The programme took approximately 4 years from zero hours to Southwest First Officer.
              </p>

              <p>
                Monitor <a href="https://www.southwest.com/careers" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">southwest.com/careers</a> for updates on when the programme will reopen.
              </p>
            </>
          ),
        },
        {
          heading: "Which programme is right for you?",
          content: (
            <>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Your situation</th>
                      <th className="px-4 py-3 font-semibold">Best option</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    {[
                      ["Zero hours, want fastest path to a major airline", "United Aviate Academy — CEO for United, no degree required"],
                      ["Zero hours, want to keep federal student loan eligibility", "Delta Propel via AABI university — FAFSA eligible, R-ATP at 1,000 hrs"],
                      ["Zero hours, want the lowest fixed cost to ATP minimums", "Epic Flight Academy (Part 141) at $83,647, then apply to Delta Propel or AA Cadet"],
                      ["Already have a PPL, want the fastest path", "ATP Flight School ACPP at $90,995 with existing PPL — AA Cadet or Delta Propel eligible"],
                      ["Military veteran using GI Bill", "ATP Flight School (GI Bill accepted) — AA Cadet or Delta Propel pathway"],
                      ["Want to fly for United specifically", "United Aviate Academy — the only programme with a direct CEO for United mainline"],
                    ].map(([situation, option], i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 text-white/80">{situation}</td>
                        <td className="px-4 py-3 font-medium text-white">{option}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50">
                 United Aviate Academy. "Programme Costs and Structure." <em>unitedaviate.com</em>. Accessed June 2026.<br/>
                 ATP Flight School. "Airline Career Pilot Program — 2026 Pricing." <em>atpflightschool.com</em>. Accessed June 2026.<br/>
                 Delta Air Lines. "Delta Propel Pilot Career Development Programme." <em>delta.com/careers</em>. Accessed June 2026.<br/>
                 American Airlines. "Cadet Academy." <em>aacadetacademy.com</em>. Accessed June 2026.<br/>
                 Southwest Airlines. "Destination 225°." <em>southwest.com/careers</em>. Accessed June 2026 (programme paused).<br/>
                 Boeing. "Pilot &amp; Technician Outlook 2023–2042." <em>boeing.com</em>.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot in the USA (2026)", href: "/us/guides/how-to-become-a-pilot", time: "15 min" },
        { title: "US Pilot Training Costs 2026", href: "/us/guides/pilot-training-costs-usa", time: "12 min" },
        { title: "Part 61 vs Part 141: Which Is Right for You?", href: "/us/guides/part-61-vs-141", time: "10 min" },
        { title: "US Pilot Salary 2026", href: "/us/guides/airline-pilot-salary-usa", time: "10 min" },
      ]}
    
      sources={[
    { name: "UK Civil Aviation Authority (CAA)" },
    { name: "EASA Part-FCL" },
    { name: "BALPA Pay & Conditions Survey" },
  ]}/>
  );
}
