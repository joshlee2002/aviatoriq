import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function AustraliaInstrumentRatingRequirements() {
  return (
    <GuideLayout
      title="Australia Instrument Rating Requirements 2026"
      subtitle="Complete CASA requirements for the Instrument Rating — IREX exam, flight hour minimums, permitted materials, and real 2026 cost data from Australian flight schools."
      readTime="12 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Australia Pilot Licences"
      canonical="https://aviatoriq.com/australia/guides/instrument-rating-requirements"
      metaDescription="Australia Instrument Rating requirements 2026: IREX exam ($212.52), 50 hrs XC PIC, 40 hrs instrument time, single-engine $12k-$25k, multi-engine $34k-$46k. Full CASA breakdown."
      ctaText="Check your pilot readiness"
      ctaHref="/quiz"
      sections={[
        {
          heading: "Overview of the Instrument Rating",
          content: (
            <>
              <p>
                An Instrument Rating (IR) allows a pilot to fly an aircraft solely by reference to instruments, without outside visual reference. This capability is essential for operating in Instrument Meteorological Conditions (IMC) and for conducting Instrument Approach Procedures (IAP). In Australia, the IR is regulated by the Civil Aviation Safety Authority (CASA) under Part 61 of the Civil Aviation Safety Regulations (CASR) [1].
              </p>
              <p>
                Holding an IR is a prerequisite for most commercial airline roles in Australia. Pilots must hold at least a Private Pilot Licence (PPL) before commencing IR training.
              </p>
            </>
          )
        },
        {
          heading: "Minimum Aeronautical Experience Requirements",
          content: (
            <>
              <p>
                To be eligible for the Instrument Rating flight test, CASA requires the following minimum experience [1]:
              </p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Requirement</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Minimum Hours</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Cross-country flight time (PIC)</td>
                    <td className="px-4 py-3 text-white/80">50 hours</td>
                    <td className="px-4 py-3 text-white/80">Must be as pilot-in-command</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Total instrument time</td>
                    <td className="px-4 py-3 text-white/80">40 hours</td>
                    <td className="px-4 py-3 text-white/80">In same aircraft category as flight test</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Dual instrument time (with instructor)</td>
                    <td className="px-4 py-3 text-white/80">10 hours minimum</td>
                    <td className="px-4 py-3 text-white/80">Part of the 40 hours total</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Instrument flight time (simulator credit)</td>
                    <td className="px-4 py-3 text-white/80">20 hrs (or 10 hrs with simulator)</td>
                    <td className="px-4 py-3 text-white/80">Simulator credit reduces requirement to 10 hrs</td>
                  </tr>
                </tbody>
              </table>
              <p>
                All instrument time must be accumulated in the same category of aircraft (aeroplane or helicopter) that the candidate intends to use for the flight test [1].
              </p>
            </>
          )
        },
        {
          heading: "Training Requirements",
          content: (
            <>
              <p>
                Instrument Rating training must be conducted with an authorised Part 141 flight training organisation. The training program must include [1]:
              </p>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>An <strong>aircraft instrument endorsement</strong> certifying proficiency in operating the specific aircraft type under instrument conditions</li>
                <li>At least a <strong>2D IAP endorsement</strong> demonstrating the ability to execute two-dimensional instrument approach procedures</li>
                <li>Completion of the theoretical knowledge syllabus as detailed in Part 61 Manual of Standards (MOS) Schedule 3</li>
              </ul>
            </>
          )
        },
        {
          heading: "IREX Exam: Structure, Cost, and Permitted Materials",
          content: (
            <>
              <p>
                The Instrument Rating Exam (IREX) is the mandatory theoretical knowledge examination for the IR. It is administered by CASA-approved test centres across Australia [2].
              </p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Detail</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Duration</td>
                    <td className="px-4 py-3 text-white/80">3.5 hours</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Passing score</td>
                    <td className="px-4 py-3 text-white/80">70% minimum</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">IREX exam fee (2026)</td>
                    <td className="px-4 py-3 text-white/80">AUD $212.52 ($147.52 invigilator + $65 CASA fee)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Permitted materials</td>
                    <td className="px-4 py-3 text-white/80">Airservices list OR Jeppesen list (not both)</td>
                  </tr>
                </tbody>
              </table>
              <p>
                CASA has identified the following as common error areas in the IREX [2]: fuel calculation, DAPS procedures, visual approach requirements, reporting point identification, alternate aerodrome planning, radar and transponder procedures, cruise level selection (FZL and LSALT), and TAF3 forecast interpretation.
              </p>
            </>
          )
        },
        {
          heading: "Estimated Costs for an Instrument Rating in Australia (2026)",
          content: (
            <>
              <p>
                The total cost of an Instrument Rating depends on the aircraft type, training organisation, and how efficiently the candidate accumulates hours. The following figures are drawn from publicly available pricing at Australian flight schools [3][4][5][6][7][8]:
              </p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Training Type / Provider</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Estimated Cost (AUD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Single Engine Instrument Rating</td>
                    <td className="px-4 py-3 text-white/80">$12,000 – $25,000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Multi Engine Instrument Rating</td>
                    <td className="px-4 py-3 text-white/80">$34,000 – $46,501</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Bunbury Flying School (package)</td>
                    <td className="px-4 py-3 text-white/80">~$38,000</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Fly Oz (package)</td>
                    <td className="px-4 py-3 text-white/80">~$32,900</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">IREX exam fee</td>
                    <td className="px-4 py-3 text-white/80">$212.52</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Contact individual flight schools for current pricing, as costs fluctuate and packages vary in what they include (landing fees, study materials, flight test fees).
              </p>
            </>
          )
        },
        {
          heading: "References",
          content: (
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>CASA. <em>Getting an instrument rating.</em> <a href="https://www.casa.gov.au/licences-and-certificates/pilots/ratings-reviews-and-endorsements/instrument-ratings/getting-instrument-rating" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">casa.gov.au</a></li>
              <li>CASA. <em>Instrument rating exam — IREX.</em> <a href="https://www.casa.gov.au/licences-and-certificates/pilots/pilot-and-flight-crew-exams/pilot-exams/instrument-rating-exam-irex" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">casa.gov.au</a></li>
              <li>Aviation Australia. <em>AVI50519 Diploma of Aviation (Instrument Rating).</em> <a href="https://aviationaustralia.aero/study/pilot/career-starter/avi50519-diploma-of-aviation-instrument-rating/avi50519-maf/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">aviationaustralia.aero</a></li>
              <li>Bunbury Flying School. <em>Instrument Rating.</em> <a href="https://www.bunburyflyingschool.com/instrumentrating" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">bunburyflyingschool.com</a></li>
              <li>Royal Victorian Aero Club. <em>AVI50519 Diploma of Aviation — Instrument Rating.</em> <a href="https://rvac.com.au/diploma/multi-engine-command-instrument-rating/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">rvac.com.au</a></li>
              <li>Fly Oz. <em>Instrument Flight Rating Course in Australia.</em> <a href="https://flyoz.com.au/instrument/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">flyoz.com.au</a></li>
              <li>Aviationcareers.com.au. <em>How Much Does It REALLY Cost to Become a Pilot in Australia in 2026?</em> <a href="https://aviationcareers.com.au/blog/how-much-does-it-cost-to-become-a-pilot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">aviationcareers.com.au</a></li>
              <li>SFC Aero. <em>Commercial Pilot Training Package.</em> <a href="https://www.sfcaero.com.au/commercial-pilot-package" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">sfcaero.com.au</a></li>
            </ol>
          )
        }
      ]}
      faqSchema={[
        {
          question: "What are the minimum aeronautical experience requirements for an Instrument Rating in Australia?",
          answer: "To be eligible for the flight test, candidates must have 50 hours of cross-country flight time as pilot-in-command and 40 hours of instrument time. The instrument time must include at least 10 hours of dual instrument time and 20 hours of instrument flight time (reducible to 10 hours with approved simulator training)."
        },
        {
          question: "What is the passing score for the IREX in Australia?",
          answer: "Candidates must achieve a minimum of 70% to pass the Instrument Rating Exam (IREX)."
        },
        {
          question: "How much does an Instrument Rating cost in Australia in 2026?",
          answer: "A single-engine Instrument Rating costs approximately AUD $12,000 to $25,000. A multi-engine rating ranges from AUD $34,000 to $46,501. The IREX exam fee is AUD $212.52."
        },
        {
          question: "Can I use both Airservices and Jeppesen materials during the IREX?",
          answer: "No. Candidates must choose either the Airservices list or the Jeppesen list of permitted materials — not a combination of both."
        }
      ]}
      relatedGuides={[
        { title: "CASA CPL Requirements 2026", href: "/australia/guides/casa-cpl-requirements", time: "10 min" },
        { title: "CASA Medical Class 1 Requirements", href: "/australia/guides/casa-medical-class-1", time: "8 min" },
        { title: "Australia Pilot Training Costs 2026", href: "/australia/guides/pilot-training-costs", time: "12 min" }
      ]}
    />
  );
}
