import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function CanadaPilotRetirementAge() {
  return (
    <GuideLayout
      title="Canada Pilot Retirement Age 2026"
      subtitle="Transport Canada has no mandatory retirement age for pilots. Here is what the CARs actually say, how ICAO and airline collective agreements affect your career, and what happens when you want to fly internationally after 65."
      readTime="10 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Canada Pilot Careers"
      canonical="https://aviatoriq.com/canada/guides/canada-pilot-retirement-age"
      metaDescription="Canada pilot retirement age 2026: Transport Canada has no mandatory retirement age. ICAO recommends 65 for multi-pilot ops. WestJet and Air Canada collective agreement details explained."
      ctaText="Check your pilot readiness"
      ctaHref="/quiz"
      sections={[
        {
          heading: "Transport Canada Has No Mandatory Retirement Age",
          content: (
            <>
              <p>
                Unlike the United States, the European Union, and most ICAO member states, <strong>Transport Canada does not impose a mandatory retirement age for commercial pilots</strong> under the Canadian Aviation Regulations (CARs) [2]. As long as a pilot holds a valid medical certificate and meets proficiency requirements under Standard 421, they may continue to fly regardless of age.
              </p>
              <p>
                This is a meaningful distinction. A Canadian pilot who is 66 years old, medically fit, and holds a valid ATPL can legally operate as a commercial pilot on domestic routes. The regulatory framework focuses on individual fitness rather than a fixed age ceiling.
              </p>
            </>
          )
        },
        {
          heading: "ICAO Standard: Age 65 for Multi-Pilot International Operations",
          content: (
            <>
              <p>
                The International Civil Aviation Organization (ICAO) recommends a maximum age of <strong>65 for pilots in multi-pilot commercial air transport operations</strong> [4]. This standard is adopted by most countries including the US (FAA Part 121), the EU (EASA), Australia (CASA), and the UK (CAA).
              </p>
              <p>
                In October 2025, ICAO rejected an IATA proposal to raise the limit to 67, maintaining the age 65 standard for international operations [4]. This means Canadian pilots flying internationally — even if permitted to fly domestically beyond 65 — may face restrictions in foreign airspace that enforces the ICAO limit [5].
              </p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Jurisdiction / Operation</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Mandatory Retirement Age</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Canada (domestic)</td>
                    <td className="px-4 py-3 text-white/80">None (federally)</td>
                    <td className="px-4 py-3 text-white/80">Subject to medical fitness and airline CBA</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">ICAO (multi-pilot international)</td>
                    <td className="px-4 py-3 text-white/80">65</td>
                    <td className="px-4 py-3 text-white/80">Recommended standard; IATA proposal to raise to 67 rejected Oct 2025</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">United States (FAA Part 121)</td>
                    <td className="px-4 py-3 text-white/80">65</td>
                    <td className="px-4 py-3 text-white/80">Mandatory for commercial airline operations</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">European Union (EASA)</td>
                    <td className="px-4 py-3 text-white/80">65</td>
                    <td className="px-4 py-3 text-white/80">Follows ICAO standard</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Japan</td>
                    <td className="px-4 py-3 text-white/80">68</td>
                    <td className="px-4 py-3 text-white/80">Higher than ICAO standard, specific conditions apply</td>
                  </tr>
                </tbody>
              </table>
            </>
          )
        },
        {
          heading: "Airline Collective Agreements: Where the Real Age Limits Are Set",
          content: (
            <>
              <p>
                Although Transport Canada has no federal age cap, <strong>most major Canadian airlines set a mandatory retirement age through their collective bargaining agreements (CBAs)</strong> with ALPA [3]. These contractual limits typically align with the ICAO standard of 65, but they are enforced by the airline — not by the regulator.
              </p>
              <p>
                A notable example is WestJet, where ALPA has been actively challenging the airline's mandatory retirement policy. In October 2025, AirlineGeeks reported that the union was fighting WestJet's pilot age cap, arguing it conflicts with Canadian human rights legislation [3]. Air Canada pilots have similarly challenged mandatory retirement provisions in their collective agreements, with cases reaching the courts [7].
              </p>
              <p>
                The practical outcome for most Canadian airline pilots is that retirement at 65 is the effective norm — not because the law requires it, but because their employment contract does. Pilots considering careers at smaller operators or in general aviation have more flexibility, as those environments are less likely to have CBA-mandated age caps.
              </p>
            </>
          )
        },
        {
          heading: "References",
          content: (
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>ALPA. <em>Pilot Retirement Age.</em> <a href="https://www.alpa.org/advocacy/our-priorities/pilot-retirement-age" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">alpa.org</a></li>
              <li>Transport Canada. <em>Standard 421 — Flight Crew Permits, Licences and Ratings.</em> <a href="https://tc.canada.ca/en/corporate-services/acts-regulations/list-regulations/canadian-aviation-regulations-sor-96-433/standards/standard-421-flight-crew-permits-licences-ratings-canadian-aviation-regulations-cars" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">tc.canada.ca</a></li>
              <li>AirlineGeeks. <em>Union Fighting WestJet's Pilot Age Cap.</em> October 2025. <a href="https://airlinegeeks.com/2025/10/13/union-fighting-westjets-pilot-age-cap/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">airlinegeeks.com</a></li>
              <li>Simple Flying. <em>ICAO Rejects IATA Proposal to Raise Pilot Retirement Age to 67.</em> October 2025. <a href="https://simpleflying.com/icao-rejects-iata-pilot-age-limit-proposal/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">simpleflying.com</a></li>
              <li>ops.group. <em>Pilot Age Limits — The Full Picture.</em> October 2025. <a href="https://ops.group/blog/pilot-age-limits-the-full-picture/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ops.group</a></li>
              <li>Courthouse News. <em>Canadian Pilots Sue Over Retirement at 60.</em> <a href="https://www.courthousenews.com/canadian-pilots-sue-over-retirement-at-60/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">courthousenews.com</a></li>
              <li>HCAMag. <em>Air Canada pilots challenge mandatory retirement policy.</em> July 2024. <a href="https://www.hcamag.com/ca/specialization/employment-law/air-canada-pilots-challenge-mandatory-retirement-policy/496412" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">hcamag.com</a></li>
            </ol>
          )
        }
      ]}
      faqSchema={[
        {
          question: "Is there a mandatory retirement age for pilots in Canada?",
          answer: "No. Transport Canada does not impose a mandatory retirement age under the CARs. Pilots can continue to fly as long as they hold a valid medical certificate and meet proficiency requirements. However, individual airlines may set retirement ages through collective bargaining agreements."
        },
        {
          question: "How do Canadian pilot retirement rules compare to international standards?",
          answer: "Canada has no federal mandatory retirement age, while ICAO recommends age 65 for multi-pilot international operations. Most countries including the US and EU enforce the ICAO standard. Canada's approach focuses on individual medical fitness rather than a fixed age limit."
        },
        {
          question: "Can an airline force a Canadian pilot to retire at a certain age?",
          answer: "Yes. Individual airlines can set mandatory retirement ages through collective bargaining agreements with pilot unions, even without a federal mandate. Most major Canadian airlines effectively enforce retirement at 65 through their CBAs."
        },
        {
          question: "What happens if a Canadian pilot wants to fly internationally after age 65?",
          answer: "Canadian pilots flying internationally may face restrictions in countries that enforce the ICAO age 65 limit for multi-pilot operations, even if they are permitted to fly domestically in Canada."
        }
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot in Canada", href: "/canada/guides/how-to-become-a-pilot", time: "12 min" },
        { title: "TC Medical Class 1 Requirements", href: "/canada/guides/tc-medical-class-1", time: "8 min" },
        { title: "TC ATPL Requirements 2026", href: "/canada/guides/atpl-requirements", time: "10 min" }
      ]}
    />
  );
}
