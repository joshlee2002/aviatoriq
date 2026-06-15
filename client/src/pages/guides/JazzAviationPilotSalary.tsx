import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function JazzAviationPilotSalary() {
  return (
    <GuideLayout
      title="Jazz Aviation Pilot Salary 2026: Complete Pay Guide"
      subtitle="Real salary figures from Jazz Aviation's ALPA Collective Agreement No. 7 — First Officer and Captain pay rates, per diems, benefits, and the Air Canada flow-through pathway."
      readTime="10 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Canada Pilot Careers"
      canonical="https://aviatoriq.com/canada/guides/jazz-aviation-pilot-salary"
      metaDescription="Jazz Aviation pilot salary 2026: First Officers start at CA$66,894, Captains at CA$109,286. Full breakdown from ALPA CA No. 7 including per diems, pension, and Air Canada flow-through."
      ctaText="Check your pilot readiness"
      ctaHref="/quiz"
      sections={[
        {
          heading: "Jazz Aviation Pilot Salary Overview (2026)",
          content: (
            <>
              <p>
                Jazz Aviation LP, operating as Air Canada Express under a Capacity Purchase Agreement with Air Canada, is Canada's largest regional airline. It operates a fleet of Bombardier CRJ-200, CRJ-900, and Dash 8-300/400 aircraft from bases across Canada. For pilots, Jazz represents the primary first rung on the Air Canada Group ladder, with a structured flow-through pathway to Air Canada mainline.
              </p>
              <p>
                Pilot pay at Jazz is governed by <strong>Collective Agreement No. 7 (CA-7)</strong>, negotiated between Jazz Aviation LP and the Air Line Pilots Association (ALPA), with the Memorandum of Settlement No. 7 (MOS-7) ratified in 2023 [1][2].
              </p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Position</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Annual Base Salary (CAD)</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">First Officer (Year 1)</td>
                    <td className="px-4 py-3 text-white/80">$66,894</td>
                    <td className="px-4 py-3 text-white/80">82.5 avg monthly credit hours [1]</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Captain (Year 1)</td>
                    <td className="px-4 py-3 text-white/80">$109,286</td>
                    <td className="px-4 py-3 text-white/80">82.5 avg monthly credit hours [1]</td>
                  </tr>
                </tbody>
              </table>
              <p>
                These figures represent base pay only. Total compensation is meaningfully higher when per diems, allowances, and benefits are included.
              </p>
            </>
          )
        },
        {
          heading: "Per Diems, Allowances, and Benefits",
          content: (
            <>
              <p>Jazz Aviation pilots receive the following on top of base salary [1]:</p>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li><strong>Meal per diems:</strong> Tax-free daily allowances averaging approximately CA$9,000 per year</li>
                <li><strong>Medical, passport, and uniform allowances:</strong> Over CA$1,600 annually</li>
                <li><strong>Training Pilot premium:</strong> Additional pay for line training officer (LTO) or check pilot duties</li>
                <li><strong>Healthcare:</strong> Comprehensive health, dental, and disability benefits</li>
                <li><strong>Pension:</strong> Defined Contribution Plan with company match up to 8%</li>
                <li><strong>Employee Share Ownership:</strong> Access to the Air Canada Group share purchase program</li>
                <li><strong>Staff travel:</strong> Travel privileges across the Air Canada network</li>
              </ul>
            </>
          )
        },
        {
          heading: "Career Progression: The Air Canada Flow-Through",
          content: (
            <>
              <p>
                The most strategically important aspect of a Jazz Aviation career is the <strong>Air Canada flow-through provision</strong> in CA-7. The collective agreement includes a commitment to offer a defined percentage of Air Canada's annual new hire positions to eligible Jazz pilots [4].
              </p>
              <p>
                A Jazz First Officer who builds seniority, upgrades to Captain on the CRJ-900 or Dash 8-400, and meets Air Canada's minimum requirements (typically 2,000+ hours total time, ATPL) is well-positioned to receive a direct offer to Air Canada mainline. At Air Canada, a Year 1 First Officer earns CA$78,732 under the 2024 ALPA contract, rising to CA$350,964+ for senior widebody Captains.
              </p>
              <p>
                The typical timeline from Jazz First Officer to Air Canada First Officer has historically been 3 to 7 years, depending on fleet expansion, retirements, and individual seniority. The post-COVID pilot shortage has compressed this timeline significantly for many pilots.
              </p>
            </>
          )
        },
        {
          heading: "References",
          content: (
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Jazz Aviation LP. <em>Pilot Recruitment.</em> <a href="https://flyjazz.com/en/pilot-recruitment/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">flyjazz.com</a></li>
              <li>Air Line Pilots Association. <em>Jazz Aviation.</em> <a href="https://www.alpa.org/supporting-pilots/pilot-groups/jazz-aviation" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">alpa.org</a></li>
              <li>Government of Canada. <em>Collective Agreement No. 5 Between Jazz Aviation LP and the Pilots in the Service of Jazz Aviation LP.</em> <a href="https://negotech.service.canada.ca/eng/agreements/12/1271907a.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">negotech.service.canada.ca</a></li>
              <li>AVCANADA Forum. <em>Jazz/Air Canada Negotiations Discussion.</em> <a href="http://www.avcanada.ca/forums2/viewtopic.php?t=171211&start=1300" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">avcanada.ca</a></li>
            </ol>
          )
        }
      ]}
      faqSchema={[
        {
          question: "What is the starting salary for a First Officer at Jazz Aviation in 2026?",
          answer: "The starting base salary for a First Officer at Jazz Aviation in 2026 is CA$66,894, based on an average monthly credit of 82.5 hours under Collective Agreement No. 7."
        },
        {
          question: "What is the starting salary for a Captain at Jazz Aviation in 2026?",
          answer: "Captains at Jazz Aviation in 2026 have a starting salary of CA$109,286, based on an average monthly credit of 82.5 hours under CA-7."
        },
        {
          question: "Does Jazz Aviation have a flow-through to Air Canada mainline?",
          answer: "Yes. The Jazz Aviation collective agreement (CA-7) includes a provision for eligible Jazz pilots to flow through to Air Canada mainline. A percentage of Air Canada's annual new hire positions are reserved for Jazz pilots who meet the minimum requirements."
        },
        {
          question: "What additional benefits do Jazz Aviation pilots receive?",
          answer: "In addition to base salary, Jazz pilots receive tax-free meal per diems (approx. CA$9,000/year), medical and uniform allowances (over CA$1,600/year), a comprehensive healthcare plan, a Defined Contribution Pension Plan with up to 8% company match, and Air Canada Group travel benefits."
        }
      ]}
      relatedGuides={[
        { title: "Canada Pilot Salary 2026", href: "/canada/guides/pilot-salary", time: "10 min" },
        { title: "Air Canada Jazz Cadet Program", href: "/canada/guides/air-canada-jazz-cadet", time: "8 min" },
        { title: "TC ATPL Requirements 2026", href: "/canada/guides/atpl-requirements", time: "12 min" }
      ]}
    />
  );
}
