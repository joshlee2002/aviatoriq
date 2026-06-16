import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function IntegratedVsModular() {
  return (
    <GuideLayout
      title="Integrated vs Modular ATPL Training UK 2026: Which Is Right for You?"
      subtitle="An honest, data-driven comparison of the two main routes to an ATPL — including verified 2026 costs, real timelines, airline acceptance, and a decision framework for your situation."
      canonical="/guides/integrated-vs-modular"
      metaDescription="Integrated vs modular ATPL training UK 2026: honest comparison of cost, timeline, airline acceptance and which route suits your situation. Includes real 2026 prices from CAE, Acron, Stapleford and Bristol Groundschool."
      faqSchema={[
        { question: "What is the difference between integrated and modular ATPL training?", answer: "Integrated training is a single full-time programme (18–24 months, £95,880–£119,500) that takes you from zero to frozen ATPL at one academy. Modular training lets you complete each licence stage separately (2–5 years, £77,000–£90,000 in the UK), allowing you to keep working between phases." },
        { question: "Is integrated or modular training better for getting an airline job?", answer: "Both routes lead to the same frozen ATPL qualification. Major UK airlines including British Airways, easyJet, Ryanair, and Jet2 all accept both integrated and modular graduates. What matters most is your simulator performance, interview preparation, and total hours. The MPL route (via BA Speedbird or easyJet Generation) is the only route where the training method is tied to a specific airline." },
        { question: "Can I do modular ATPL training while working full-time?", answer: "Yes. Modular training is specifically designed to allow this. You complete modules in stages — PPL, night rating, ATPL theory, hour building, CPL, MEP, instrument rating, and APS MCC — around your existing commitments. The ATPL theory phase (Bristol Groundschool) is entirely distance-learning and can be done evenings and weekends." },
        { question: "Which is cheaper, integrated or modular ATPL in the UK?", answer: "Modular is typically cheaper: approximately £77,000–£90,000 at a UK school (Stapleford 2026 prices) vs £95,880–£119,500 for integrated. Training in Poland with Bartolini Air reduces modular costs to £55,000–£65,000 for an EASA licence. However, modular takes longer, so factor in living costs and the opportunity cost of an extended training timeline." },
        { question: "How many ATPL theory exams are there in the UK?", answer: "The UK CAA requires 13 ATPL theoretical knowledge subjects. These are: Air Law, Aircraft General Knowledge (Airframes & Systems), Aircraft General Knowledge (Electrics), Aircraft General Knowledge (Powerplant), Aircraft General Knowledge (Instrumentation), Mass & Balance, Performance, Flight Planning & Monitoring, Human Performance, Meteorology, General Navigation, Radio Navigation, and Operational Procedures. The initial sitting fee is £1,261 per paper; resits are £97 per paper." },
        { question: "What is the MPL route?", answer: "The Multi-Pilot Licence (MPL) is a third training route, only available through sponsored airline cadet programmes such as the BA Speedbird Academy and easyJet Generation Pilot programme. It is fully funded by the airline and leads directly to a First Officer role, but the licence is type-specific and cannot easily be used at other airlines without conversion." },
      ]}
      readTime="12 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/integrated-training_a566fa21.jpg"
      ctaHref="/quiz"
      ctaText="Start your career assessment"
      relatedGuides={[
        { title: "Best Flight Schools in the UK 2026", href: "/guides/best-flight-schools-uk-2026", time: "14 min" },
        { title: "Pilot Training Costs UK 2026", href: "/guides/pilot-training-costs", time: "8 min" },
        { title: "UK Airline Cadet Programmes", href: "/guides/cadet-pilot-programmes-uk", time: "10 min" },
        { title: "How to Finance Pilot Training UK", href: "/guides/how-to-finance-pilot-training-uk", time: "9 min" },
      ]}
      sections={[
        {
          heading: "The Three Routes to a Frozen ATPL",
          content: (
            <>
              <p>
                Aspiring airline pilots in the UK have three routes to a frozen ATPL: integrated, modular, and MPL. The integrated and modular routes are self-funded and lead to the same qualification. The MPL is only available through sponsored airline cadet programmes. Understanding the real differences — not the marketing version — is the most important decision you will make before spending £80,000–£120,000.
              </p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Not sure where to start? Take our free <Link href="/quiz" className="text-blue-400 underline">Pilot Career Assessment</Link> to get a personalised training roadmap in under five minutes.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">Integrated ATPL</th>
                      <th className="px-4 py-3 font-semibold">Modular ATPL</th>
                      <th className="px-4 py-3 font-semibold">MPL (Sponsored)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">2026 Cost (UK)</td>
                      <td className="px-4 py-3">£95,880–£119,500</td>
                      <td className="px-4 py-3">£77,000–£90,000</td>
                      <td className="px-4 py-3">£0 (airline-funded)</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Timeline</td>
                      <td className="px-4 py-3">18–24 months</td>
                      <td className="px-4 py-3">2–5 years</td>
                      <td className="px-4 py-3">18–24 months</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Structure</td>
                      <td className="px-4 py-3">Full-time, one school</td>
                      <td className="px-4 py-3">Self-paced, multiple schools</td>
                      <td className="px-4 py-3">Full-time, airline-directed</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Work alongside?</td>
                      <td className="px-4 py-3">No</td>
                      <td className="px-4 py-3">Yes (between phases)</td>
                      <td className="px-4 py-3">No</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Airline flexibility</td>
                      <td className="px-4 py-3">Any airline</td>
                      <td className="px-4 py-3">Any airline</td>
                      <td className="px-4 py-3">Sponsoring airline only</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Availability</td>
                      <td className="px-4 py-3">Open to all</td>
                      <td className="px-4 py-3">Open to all</td>
                      <td className="px-4 py-3">Competitive selection only</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Best for</td>
                      <td className="px-4 py-3">Structured learners with funding</td>
                      <td className="px-4 py-3">Working adults, budget-conscious</td>
                      <td className="px-4 py-3">Highly competitive candidates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "Integrated ATPL: What You're Actually Paying For",
          content: (
            <>
              <p>
                An integrated ATPL programme takes a cadet from zero experience to a frozen ATPL in a single, continuous, full-time course at one academy. In 2026, UK integrated programmes cost between £95,880 (Leading Edge Aviation, with Student Loans Company tuition loan) and £119,500 (FTEJerez UK CAA route). CAE Oxford is £99,900 and Acron Aviation (formerly L3Harris) is £102,500.
              </p>
              <p>
                The price includes everything: ATPL theory, all flying phases (PPL through to APS MCC), accommodation during the overseas flight phase, examiner fees, and in most cases a training guarantee that covers additional hours if you need extra support. What it does not include is the type rating — the aircraft-specific training required to join an airline — which costs an additional £20,000–£30,000 and is either self-funded or covered by the airline if you are accepted onto a sponsored cadet programme.
              </p>
              <p>
                The genuine advantage of integrated training is not the qualification itself (which is identical to modular) but the structure. You are in a cohort, progressing through defined phases, with an academy managing your schedule. For students who struggle with self-motivation or who want the fastest possible route to a frozen ATPL, integrated is the right choice. The airline partnership networks at CAE Oxford and Acron Aviation also provide direct access to BA Speedbird and easyJet Generation selection processes.
              </p>
            </>
          ),
        },
        {
          heading: "Modular ATPL: The Real 2026 Cost Breakdown",
          content: (
            <>
              <p>
                Modular training means completing each phase of the ATPL separately, at your own pace, and often at different schools. The total cost at a UK school in 2026 is approximately £77,000–£90,000 — significantly less than integrated, but not the £40,000–£60,000 figure that is often quoted on forums (those figures are outdated or exclude CAA fees and hour building).
              </p>
              <p>
                The following breakdown is based on published prices from Stapleford Flight Centre (updated 1 April 2026) and Bristol Groundschool:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Phase</th>
                      <th className="px-4 py-3 font-semibold">2026 Cost (UK)</th>
                      <th className="px-4 py-3 font-semibold">Min Hours</th>
                      <th className="px-4 py-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">PPL</td>
                      <td className="px-4 py-3">~£9,600</td>
                      <td className="px-4 py-3">45 hrs</td>
                      <td className="px-4 py-3">6–12 months</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">ATPL Theory (BGS course + CAA exams)</td>
                      <td className="px-4 py-3">£3,631 + up to £16,393 CAA fees</td>
                      <td className="px-4 py-3">13 subjects</td>
                      <td className="px-4 py-3">6–18 months</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Night Rating</td>
                      <td className="px-4 py-3">~£1,650</td>
                      <td className="px-4 py-3">5 hrs</td>
                      <td className="px-4 py-3">1–2 weeks</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Hour Building (~130 hrs)</td>
                      <td className="px-4 py-3">~£21,320 (UK) / ~£14,000 (Spain/Florida)</td>
                      <td className="px-4 py-3">~130 hrs</td>
                      <td className="px-4 py-3">3–9 months</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">CPL</td>
                      <td className="px-4 py-3">~£8,265</td>
                      <td className="px-4 py-3">25 hrs</td>
                      <td className="px-4 py-3">6–10 weeks</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">MEP Rating</td>
                      <td className="px-4 py-3">~£4,044</td>
                      <td className="px-4 py-3">6 hrs</td>
                      <td className="px-4 py-3">1–2 weeks</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">CB Instrument Rating</td>
                      <td className="px-4 py-3">~£16,505</td>
                      <td className="px-4 py-3">35 hrs</td>
                      <td className="px-4 py-3">3–5 months</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">APS MCC</td>
                      <td className="px-4 py-3">~£5,995</td>
                      <td className="px-4 py-3">40 hrs sim</td>
                      <td className="px-4 py-3">2–3 weeks</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">CAA licence fees, skill tests</td>
                      <td className="px-4 py-3">~£3,000–£5,000</td>
                      <td className="px-4 py-3">—</td>
                      <td className="px-4 py-3">—</td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="px-4 py-3 font-medium text-white">Total (UK, excl. living costs)</td>
                      <td className="px-4 py-3 font-medium text-white">~£77,000–£90,000</td>
                      <td className="px-4 py-3">—</td>
                      <td className="px-4 py-3">2–5 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-white/50 mt-2">
                Costs based on Stapleford Flight Centre pricelist from 1 April 2026 and Bristol Groundschool published prices. ATPL theory CAA exam fees assume all 13 papers passed at first sitting (£1,261 per paper = £16,393 total). Hour building overseas (Spain or Florida) reduces that line item to approximately £14,000. Total can be reduced to £55,000–£65,000 by training with Bartolini Air in Poland for an EASA licence.
              </p>
            </>
          ),
        },
        {
          heading: "The 13 ATPL Theory Subjects",
          content: (
            <>
              <p>
                Both integrated and modular students must pass the same 13 UK CAA ATPL theoretical knowledge subjects. These are examined by the CAA at approved test centres. The initial sitting fee is £1,261 per paper; resits cost £97 per paper. Passing all 13 at the first attempt costs £16,393 in CAA fees alone — a figure that is frequently omitted from modular cost estimates.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">#</th>
                      <th className="px-4 py-3 font-semibold">Subject</th>
                      <th className="px-4 py-3 font-semibold">Typical Difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    {[
                      ["1", "Air Law", "Medium"],
                      ["2", "Aircraft General Knowledge — Airframes & Systems", "Hard"],
                      ["3", "Aircraft General Knowledge — Electrics", "Hard"],
                      ["4", "Aircraft General Knowledge — Powerplant", "Hard"],
                      ["5", "Aircraft General Knowledge — Instrumentation", "Medium"],
                      ["6", "Mass & Balance", "Medium"],
                      ["7", "Performance", "Hard"],
                      ["8", "Flight Planning & Monitoring", "Hard"],
                      ["9", "Human Performance & Limitations", "Easy"],
                      ["10", "Meteorology", "Medium"],
                      ["11", "General Navigation", "Hard"],
                      ["12", "Radio Navigation", "Hard"],
                      ["13", "Operational Procedures", "Easy"],
                    ].map(([num, subject, difficulty]) => (
                      <tr key={num} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 text-white/50">{num}</td>
                        <td className="px-4 py-3 font-medium text-white">{subject}</td>
                        <td className="px-4 py-3 text-white/70">{difficulty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Difficulty ratings are based on student feedback from PPRuNe forums and Bristol Groundschool guidance. Performance, General Navigation, and Flight Planning are consistently the hardest subjects. Most students allow 12–18 months for the full theory phase when studying alongside work.
              </p>
            </>
          ),
        },
        {
          heading: "Which Airlines Accept Which Route?",
          content: (
            <>
              <p>
                This is the question most candidates want answered before choosing a route. The short answer is: all major UK airlines accept both integrated and modular graduates. The longer answer is that the route to selection differs.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Airline</th>
                      <th className="px-4 py-3 font-semibold">Integrated</th>
                      <th className="px-4 py-3 font-semibold">Modular</th>
                      <th className="px-4 py-3 font-semibold">MPL (Sponsored)</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">British Airways</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-green-400">✓ (Speedbird)</td>
                      <td className="px-4 py-3">Speedbird MPL via CAE or Acron. Direct entry accepts both routes.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">easyJet</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-green-400">✓ (Generation)</td>
                      <td className="px-4 py-3">Generation MPL via CAE. Direct entry accepts both routes.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Ryanair</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-white/30">—</td>
                      <td className="px-4 py-3">Mentored Programme via Bartolini Air (EASA). Self-fund type rating.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Jet2</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-white/30">—</td>
                      <td className="px-4 py-3">Jet2FlightPath sponsored programme (60 places, 2026). Direct entry both routes.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Wizz Air UK</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-white/30">—</td>
                      <td className="px-4 py-3">Accepts both routes. Acron Aviation is a preferred feeder.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">TUI Airways</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-green-400">✓</td>
                      <td className="px-4 py-3 text-white/30">—</td>
                      <td className="px-4 py-3">TUI MPL programme paused for 2026 intake.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The MPL route is the only one where the training method is directly tied to a specific airline. An MPL licence is type-specific and cannot easily be used at another airline without conversion. If you are selected for BA Speedbird or easyJet Generation, the MPL is an excellent outcome — but you should not choose integrated training specifically hoping to get onto these programmes, as selection rates are very low.
              </p>
            </>
          ),
        },
        {
          heading: "Which Route Is Right for You?",
          content: (
            <>
              <p>
                The decision comes down to three factors: your financial situation, your life commitments, and your learning style.
              </p>
              <p>
                <strong>Choose integrated if:</strong> you have access to £95,000–£120,000 in funding (loan, family, savings), you have no dependants or employment commitments that prevent full-time training, and you want the fastest possible route to a frozen ATPL with a structured peer environment. The airline partnership networks at CAE Oxford and Acron Aviation provide the most direct access to BA and easyJet selection.
              </p>
              <p>
                <strong>Choose modular if:</strong> you need to keep working during training, you want to spread the financial burden over time, or you prefer to choose the best specialist school for each phase rather than committing to one academy. The total cost saving of £20,000–£40,000 compared to integrated is significant. The trade-off is a longer timeline (2–5 years) and the need to manage your own progression.
              </p>
              <p>
                <strong>Apply for MPL if:</strong> you meet the academic and aptitude requirements and want to pursue BA Speedbird or easyJet Generation. These are the only routes where your training is fully funded. Acceptance rates are very competitive — treat it as a lottery ticket, not a plan.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50 space-y-1">
                [1] Stapleford Flight Centre. "Modular Course Pricelist — Training Course Fees from 1st April 2026." <em>flysfc.com</em>.<br/>
                [2] Bristol Groundschool. "ATPL(A) Course." <em>bristol.gs</em>. Accessed June 2026.<br/>
                [3] CAA. "ATPL Theoretical Knowledge Examination Fees." Effective 1 April 2026. <em>caa.co.uk</em>.<br/>
                [4] Leading Edge Aviation. "Integrated Pilot Training (LEAP) — Fees." <em>leadingedgeaviation.com</em>. Accessed June 2026.<br/>
                [5] Airmappr. "Acron Aviation Review 2026." January 2026.<br/>
                [6] Skyborne. "Integrated ATPL Course." <em>skyborne.com/uk/integrated-atpl-course/</em>. Accessed June 2026.
              </p>
            </>
          ),
        },
      ]}
      scopeBanner={<GuideScopeBanner scope="This guide covers integrated vs modular ATPL training under UK CAA regulations. Costs are UK-based. EASA equivalents differ." usHref="/us/guides/part-61-vs-141" usLabel="View USA equivalent (Part 61 vs 141) →" />}
    />
  );
}
