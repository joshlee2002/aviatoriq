import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function CanadaPilotUnionALPA() {
  return (
    <GuideLayout
      title="Canada Pilot Union: ALPA and 2026 Salary Insights"
      subtitle="ALPA Canada represents over 95% of unionized commercial pilots in Canada. Here is what the 2026 collective agreements actually say — Jazz Aviation pay rates, Air Transat ratification, WestJet contract expiry, and Canadian North deal."
      readTime="10 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Canada Pilot Careers"
      canonical="https://aviatoriq.com/canada/guides/canada-pilot-union-alpa"
      metaDescription="ALPA Canada 2026: Jazz Aviation FO starts at CA$66,894, Captain CA$109,286. Canadian North ratified April 2026. WestJet contract expires Dec 2026. Full union activity breakdown."
      ctaText="Check your pilot readiness"
      ctaHref="/quiz"
      sections={[
        {
          heading: "ALPA Canada: Who They Represent",
          content: (
            <>
              <p>
                The Air Line Pilots Association (ALPA) is the world's largest airline pilot union. In Canada, ALPA represents over <strong>95% of unionized commercial airline pilots</strong>, covering major carriers including Air Canada, WestJet, Air Transat, Jazz Aviation, and Canadian North [3]. Through collective bargaining, ALPA sets the minimum pay scales, benefits, scheduling rules, and safety standards that govern pilot employment at each of these airlines.
              </p>
            </>
          )
        },
        {
          heading: "Jazz Aviation Pilot Salaries 2026 (ALPA CA-7)",
          content: (
            <>
              <p>
                Jazz Aviation's pilot pay is governed by Collective Agreement No. 7 (CA-7), ratified in 2023. The figures below are based on an average monthly credit of 82.5 hours [1]:
              </p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Role</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Starting Base Salary (CAD)</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Additional Annual Benefits (CAD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">First Officer</td>
                    <td className="px-4 py-3 text-white/80">$66,894</td>
                    <td className="px-4 py-3 text-white/80">~$10,600 (meal per diems + allowances)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Captain</td>
                    <td className="px-4 py-3 text-white/80">$109,286</td>
                    <td className="px-4 py-3 text-white/80">~$10,600 (meal per diems + allowances)</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Beyond base salary, Jazz pilots receive tax-free meal per diems averaging CA$9,000/year, medical/passport/uniform allowances over CA$1,600/year, a Defined Contribution Pension Plan with up to 8% company match, a minimum of 12 days off per month, and Air Canada Group travel benefits [1].
              </p>
            </>
          )
        },
        {
          heading: "2026 Union Activity Across Canadian Airlines",
          content: (
            <>
              <ul className="list-disc pl-5 space-y-4 my-4">
                <li>
                  <strong>Canadian North (April 2026):</strong> Pilots ratified a new three-year collective agreement covering approximately 240 pilots. The deal brought improvements in scheduling, compensation, and quality of life for pilots operating in the Canadian Arctic [4].
                </li>
                <li>
                  <strong>Air Transat (January 2026):</strong> Pilots ratified a new agreement on January 6, 2026, including significant pay increases and quality-of-life provisions following negotiations that began in January 2025 [5].
                </li>
                <li>
                  <strong>WestJet Airlines (Contract Expiry December 2026):</strong> The WestJet ALPA collective agreement expires December 31, 2026. ALPA has initiated contract negotiations with management, targeting improved job security, enhanced compensation, and more flexible scheduling [8][9].
                </li>
                <li>
                  <strong>Air Canada (Amendable September 2027):</strong> The Air Canada ALPA contract ratified in October 2024 — which included a 42% raise over four years — is amendable in September 2027. The deal reduced the fixed-pay period for new hires from four to two years [6][7].
                </li>
              </ul>
            </>
          )
        },
        {
          heading: "References",
          content: (
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Jazz Aviation LP. <em>Pilot Recruitment.</em> <a href="https://flyjazz.com/en/pilot-recruitment/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">flyjazz.com</a></li>
              <li>Pelican Flight School. <em>Pay and Benefits for Airline Pilots.</em> <a href="https://pelicanflightschool.com/blog/articles/airline-pilot-salary-and-career-path" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">pelicanflightschool.com</a></li>
              <li>ALPA. <em>ALPA Canada.</em> <a href="https://www.alpa.org/canada" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">alpa.org</a></li>
              <li>ALPA. <em>Canadian North Pilots Ratify Tentative Agreement.</em> April 2026. <a href="https://www.alpa.org/press-room/2026/04/canadian-north-pilots-ratify-tentative-agreement" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">alpa.org</a></li>
              <li>ALPA. <em>Air Transat.</em> <a href="https://www.alpa.org/supporting-pilots/pilot-groups/air-transat" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">alpa.org</a></li>
              <li>ALPA. <em>Air Canada.</em> <a href="https://www.alpa.org/supporting-pilots/pilot-groups/air-canada" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">alpa.org</a></li>
              <li>ALPA. <em>Air Canada Pilots Vote to Ratify Collective Agreement.</em> October 2024. <a href="https://www.alpa.org/press-room/2024/air-canada-pilots-vote-to-ratify-collective-agreement" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">alpa.org</a></li>
              <li>ALPA. <em>WestJet Airlines.</em> <a href="https://www.alpa.org/supporting-pilots/pilot-groups/westjet-airlines" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">alpa.org</a></li>
              <li>Canadian Aviation News. <em>WestJet Pilots Send Notice to Open Contract Negotiations with Management.</em> <a href="https://canadianaviationnews.ca/westjet-pilots-send-notice-to-open-contract-negotiations-with-management/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">canadianaviationnews.ca</a></li>
            </ol>
          )
        }
      ]}
      faqSchema={[
        {
          question: "What is ALPA Canada's role in Canadian aviation?",
          answer: "ALPA Canada represents over 95% of unionized commercial airline pilots in Canada, advocating for better working conditions, safety standards, and fair contracts through collective bargaining at airlines including Air Canada, WestJet, Jazz Aviation, Air Transat, and Canadian North."
        },
        {
          question: "What are the starting salaries for pilots at Jazz Aviation in 2026?",
          answer: "As of 2026, a First Officer at Jazz Aviation starts at CA$66,894 and a Captain starts at CA$109,286, based on an average monthly credit of 82.5 hours under Collective Agreement No. 7."
        },
        {
          question: "What are some recent union activities involving ALPA Canada in 2026?",
          answer: "In April 2026, Canadian North pilots ratified a three-year agreement. Air Transat pilots ratified a new deal in January 2026. WestJet's contract expires December 2026 and negotiations have begun. Air Canada's contract is amendable in September 2027."
        },
        {
          question: "What factors influence pilot salaries in Canada?",
          answer: "Pilot salaries in Canada are influenced by the type of airline (regional vs. major), rank (First Officer vs. Captain), aircraft type, years of experience and seniority, and the specific terms negotiated in collective bargaining agreements."
        }
      ]}
      relatedGuides={[
        { title: "Canada Pilot Salary 2026", href: "/canada/guides/pilot-salary", time: "10 min" },
        { title: "Jazz Aviation Pilot Salary 2026", href: "/canada/guides/jazz-aviation-pilot-salary", time: "8 min" },
        { title: "TC ATPL Requirements 2026", href: "/canada/guides/atpl-requirements", time: "10 min" }
      ]}
    />
  );
}
