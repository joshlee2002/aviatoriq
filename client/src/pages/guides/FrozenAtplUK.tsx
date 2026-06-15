import GuideLayout from "@/components/GuideLayout";

const FrozenAtplUK = () => {
  return (
    <GuideLayout
      title="Frozen ATPL UK 2026: What It Is, How to Get One, and What It Costs"
      subtitle="The complete guide to the Frozen ATPL  -  the qualification every UK airline requires before they will hire you as a First Officer."
      canonical="/guides/frozen-atpl-uk"
      metaDescription="Frozen ATPL UK 2026: what it is, the 13 CAA theory subjects, real costs (Bristol Groundschool from £626), how to unfreeze it, and what airlines actually require."
      faqSchema={[
        {
          question: "What is a Frozen ATPL?",
          answer: "A Frozen ATPL (fATPL) is the status you hold when you have passed all 13 UK CAA ATPL theoretical knowledge examinations and hold a Commercial Pilot Licence (CPL) with a Multi-Engine Instrument Rating (MEIR), but have not yet accumulated the 1,500 hours of flight time required to convert it into a full ATPL. It allows you to fly as a First Officer at an airline while you build those hours.",
        },
        {
          question: "How many ATPL theory subjects are there in the UK?",
          answer: "There are 13 ATPL theory subjects under the UK CAA post-Brexit syllabus: Air Law; Aircraft General Knowledge  -  Airframe & Systems; Aircraft General Knowledge  -  Powerplant; Aircraft General Knowledge  -  Electrics, Electronics & Instruments; Flight Performance & Planning  -  Performance; Flight Performance & Planning  -  Mass & Balance; Human Performance; Meteorology; General Navigation; Radio Navigation; Operational Procedures; Principles of Flight; and Communications. Each paper requires a minimum pass mark of 75%.",
        },
        {
          question: "How much does ATPL ground school cost in the UK?",
          answer: "Bristol Groundschool  -  the market leader  -  charges £626 for individual subjects up to £3,631 for the full ATPL(A) theory package (2026 prices). CAA examination fees are additional: approximately £61 per paper, so 13 papers = £793 in exam fees if passed first time. Total theory cost: approximately £4,400-£5,000 all-in at Bristol Groundschool.",
        },
        {
          question: "How long does ATPL ground school take?",
          answer: "Integrated (full-time): 6-9 months. Modular (part-time, self-study): 12-24 months. Bristol Groundschool's online modular course allows you to study at your own pace with no fixed start date.",
        },
        {
          question: "What are the requirements to unfreeze an ATPL?",
          answer: "To convert a Frozen ATPL into a full ATPL you need: 1,500 hours total flight time; 500 hours in multi-pilot aircraft; 250 hours as Pilot-in-Command (or 100 hours PIC + 150 hours PICUS); 200 hours cross-country; 75 hours instrument time; 100 hours night flying. These hours are accumulated during your first years as a First Officer at an airline.",
        },
      ]}
      readTime="12 min read"
      heroImage="/manus-storage/frozen-atpl_415e1a95.jpg"
      ctaHref="/roadmap"
      ctaText="Generate my personalised roadmap"
      sections={[
        {
          heading: "What is a Frozen ATPL?",
          content: (
            <>
              <p>
                A Frozen ATPL (fATPL) is not a licence in its own right. It is the status you hold when you have passed all 13 UK CAA ATPL theoretical knowledge examinations and hold a Commercial Pilot Licence (CPL) with a Multi-Engine Instrument Rating (MEIR)  -  but have not yet accumulated the 1,500 hours of flight time required to convert it into a full Airline Transport Pilot Licence.
              </p>
              <p>
                In practice, every UK airline requires a Frozen ATPL before they will hire you as a First Officer. The moment you join an airline, you begin building the flight hours that will eventually allow you to "unfreeze" it  -  at which point you hold a full ATPL and become eligible for command upgrade.
              </p>
              <p>
                The Frozen ATPL is the standard entry qualification for commercial aviation in the UK. It applies whether you trained via an integrated programme (CAE Oxford, Skyborne, FTEJerez) or the modular route (PPL → CPL → MEIR → ATPL theory separately).
              </p>
            </>
          ),
        },
        {
          heading: "Frozen ATPL vs Full ATPL: the difference",
          content: (
            <>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">Frozen ATPL (fATPL)</th>
                      <th className="px-4 py-3 font-semibold">Full ATPL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    {[
                      ["Theory exams passed", "Yes  -  all 13", "Yes  -  all 13"],
                      ["CPL + MEIR held", "Yes", "Yes"],
                      ["1,500 hours total time", "Not yet", "Yes"],
                      ["500 hours multi-pilot", "Not yet", "Yes"],
                      ["Can fly as First Officer", "Yes", "Yes"],
                      ["Can act as Pilot-in-Command (commercial)", "No", "Yes"],
                      ["Eligible for command upgrade", "No", "Yes"],
                    ].map(([feature, frozen, full], i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 font-medium text-white">{feature}</td>
                        <td className="px-4 py-3">{frozen}</td>
                        <td className="px-4 py-3">{full}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "The 13 ATPL theory subjects",
          content: (
            <>
              <p>
                Post-Brexit, the UK CAA syllabus has 13 ATPL theory subjects (the old JAA/EASA system had 14  -  the UK merged two of the Aircraft General Knowledge papers). Each paper requires a minimum pass mark of 75%, and you have 6 sittings over 18 months to pass all 13.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">#</th>
                      <th className="px-4 py-3 font-semibold">Subject</th>
                      <th className="px-4 py-3 font-semibold">Typical difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    {[
                      ["1", "Air Law", "Medium"],
                      ["2", "Aircraft General Knowledge  -  Airframe & Systems", "High"],
                      ["3", "Aircraft General Knowledge  -  Powerplant", "High"],
                      ["4", "Aircraft General Knowledge  -  Electrics, Electronics & Instruments", "High"],
                      ["5", "Flight Performance & Planning  -  Performance", "High"],
                      ["6", "Flight Performance & Planning  -  Mass & Balance", "Medium"],
                      ["7", "Human Performance & Limitations", "Low-Medium"],
                      ["8", "Meteorology", "Medium"],
                      ["9", "General Navigation", "High"],
                      ["10", "Radio Navigation", "High"],
                      ["11", "Operational Procedures", "Medium"],
                      ["12", "Principles of Flight", "Medium"],
                      ["13", "Communications (VFR & IFR)", "Low"],
                    ].map(([num, subject, difficulty], i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 text-white/50">{num}</td>
                        <td className="px-4 py-3 font-medium text-white">{subject}</td>
                        <td className="px-4 py-3">{difficulty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Most students find General Navigation, Radio Navigation, and the Aircraft General Knowledge papers the hardest. Human Performance and Communications are typically the easiest. Plan your study order accordingly  -  tackle the hard papers first when your motivation is highest.
              </p>
            </>
          ),
        },
        {
          heading: "How much does ATPL ground school cost?",
          content: (
            <>
              <p>
                The cost of ATPL theory depends on whether you train via an integrated school (theory included in the overall programme fee) or the modular route (theory purchased separately).
              </p>
              <p>
                For modular students, <strong>Bristol Groundschool</strong> is the market-leading UK provider. Their 2026 pricing for the ATPL(A) theory package is:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Item</th>
                      <th className="px-4 py-3 font-semibold">Cost (2026)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    {[
                      ["Bristol Groundschool  -  full ATPL(A) theory package", "£3,631"],
                      ["Individual subjects (from)", "£626 per subject"],
                      ["CAA exam fees (13 papers × ~£61)", "~£793"],
                      ["Total (Bristol Groundschool + CAA fees)", "~£4,424"],
                      ["Resit fees (per paper)", "~£61"],
                    ].map(([item, cost], i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 text-white/80">{item}</td>
                        <td className="px-4 py-3 font-semibold text-white">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Integrated schools (CAE Oxford, Skyborne, FTEJerez) include ATPL theory within their overall programme fee (£99,900-£119,500). The theory is not separately itemised  -  it is delivered as part of the full-time course.
              </p>
              <p>
                Study time: expect 600-700 hours of self-study for the full 13-subject syllabus. Most modular students take 12-18 months studying part-time. Full-time integrated students complete theory in 6-9 months.
              </p>
            </>
          ),
        },
        {
          heading: "How to unfreeze your ATPL",
          content: (
            <>
              <p>
                Once you join an airline as a First Officer, you begin accumulating the flight hours needed to convert your Frozen ATPL into a full ATPL. The UK CAA requirements are:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Requirement</th>
                      <th className="px-4 py-3 font-semibold">Minimum hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    {[
                      ["Total flight time", "1,500 hours"],
                      ["Multi-pilot aircraft", "500 hours"],
                      ["Pilot-in-Command (PIC)", "250 hours (or 100h PIC + 150h PICUS)"],
                      ["Cross-country flight time", "200 hours"],
                      ["Instrument time", "75 hours"],
                      ["Night flying", "100 hours"],
                    ].map(([req, hours], i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 text-white/80">{req}</td>
                        <td className="px-4 py-3 font-semibold text-white">{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                At a typical short-haul airline flying 800-900 hours per year, you will reach 1,500 hours in approximately 18-24 months of line flying. Once you meet all the requirements, you apply to the UK CAA to have your fATPL converted to a full ATPL  -  at which point you become eligible for command upgrade training.
              </p>
            </>
          ),
        },
        {
          heading: "What airlines actually require",
          content: (
            <>
              <p>
                Every UK airline that operates commercial air transport under CAT (Commercial Air Transport) rules requires First Officer applicants to hold a Frozen ATPL. There are no exceptions  -  it is a regulatory requirement under UK Air Navigation Order Article 20.
              </p>
              <p>
                In practice, airlines also require a type rating for their specific aircraft (A320, B737, etc.), which is either funded by the airline (BA Speedbird, Jet2FlightPath) or self-funded by the candidate (Ryanair, easyJet, most others). The type rating costs approximately £20,000-£30,000 and is typically done at a simulator training centre (CAE, L3Harris/Acron, FlightSafety) after receiving a conditional job offer.
              </p>
              <p>
                Some airlines (Ryanair, Wizz Air) accept newly qualified pilots with as few as 200 hours total time  -  the minimum required to hold a CPL/MEIR. Others (BA, Virgin Atlantic) require significantly more experience. The Frozen ATPL is the entry ticket; the hours and type rating determine which airlines you can realistically target.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        { title: "Integrated vs Modular ATPL Training UK", href: "/guides/integrated-vs-modular-atpl-uk", time: "10 min read" },
        { title: "UK Pilot Training Costs 2026", href: "/guides/pilot-training-costs-uk", time: "12 min read" },
        { title: "UK Class 1 Medical: What to Expect", href: "/guides/uk-caa-class-1-medical", time: "10 min read" },
        { title: "UK Cadet Programmes 2026", href: "/guides/cadet-pilot-programmes", time: "10 min read" },
      ]}
    />
  );
};

export default FrozenAtplUK;
