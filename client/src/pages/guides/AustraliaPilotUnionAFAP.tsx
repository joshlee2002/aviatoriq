import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function AustraliaPilotUnionAFAP() {
  return (
    <GuideLayout
      title="Australia Pilot Union (AFAP) 2026: Award Increases, Super Changes and Jetstar Dispute"
      subtitle="The Australian Federation of Air Pilots (AFAP) represents commercial pilots across Australia. Here is what the 2026 Air Pilots Award increase, Pay Day superannuation reform, and the Jetstar EA dispute mean for your pay and conditions."
      readTime="10 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Australia Pilot Careers"
      canonical="https://aviatoriq.com/australia/guides/australia-pilot-union-afap"
      metaDescription="AFAP Australia 2026: Air Pilots Award minimum wages up 4.75% from July 1. Pay Day superannuation within 7 days from July 1. Jetstar EA dispute: base salary, reassignable provisions, roster stability."
      ctaText="Check your pilot readiness"
      ctaHref="/quiz"
      sections={[
        {
          heading: "2026 Air Pilots Award: 4.75% Wage Increase",
          content: (
            <>
              <p>
                Following the Fair Work Commission (FWC) Annual Wage Review, minimum wage rates under the <strong>Air Pilots Award 2020</strong> will increase by <strong>4.75%</strong>, effective from the first full pay period on or after <strong>1 July 2026</strong> [1].
              </p>
              <p>
                This increase applies to minimum wages and allowances calculated from the Standard Rate. Other allowances — including loss of licence, accommodation, meals, and transport — are subject to separate indexation, with specific figures to be confirmed by the FWC. Pilots covered by enterprise agreements are not directly affected by the award increase, as their terms are governed by their individual EAs [1].
              </p>
            </>
          )
        },
        {
          heading: "Pay Day Superannuation: What Changes on 1 July 2026",
          content: (
            <>
              <p>
                From <strong>1 July 2026</strong>, employers are required to pay superannuation contributions into a pilot's super fund within <strong>7 days of their pay day</strong> — the new "Pay Day superannuation" requirement [1]. The employer Superannuation Guarantee rate remains at a minimum of 12%.
              </p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Category</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Change</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Effective Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Air Pilots Award minimum wages</td>
                    <td className="px-4 py-3 text-white/80">+4.75%</td>
                    <td className="px-4 py-3 text-white/80">First full pay period on or after 1 July 2026</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Superannuation payment timing</td>
                    <td className="px-4 py-3 text-white/80">Within 7 days of pay day</td>
                    <td className="px-4 py-3 text-white/80">1 July 2026</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Employer Superannuation Guarantee</td>
                    <td className="px-4 py-3 text-white/80">Minimum 12%</td>
                    <td className="px-4 py-3 text-white/80">Ongoing</td>
                  </tr>
                </tbody>
              </table>
            </>
          )
        },
        {
          heading: "Jetstar EA 2025/2026 Dispute",
          content: (
            <>
              <p>
                The most significant industrial dispute in Australian aviation in 2026 involves Jetstar pilots. The AFAP, Transport Workers Union (TWU), and Australian International Pilots Association (AIPA) are in a collective bargaining dispute with Jetstar over [2]:
              </p>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li><strong>Base salaries</strong> — pilots seeking increases to keep pace with inflation and industry benchmarks</li>
                <li><strong>Reassignable provisions</strong> — the company's proposed changes to current reassignment rules</li>
                <li><strong>Roster stability</strong> — predictability of schedules and days off</li>
                <li><strong>Duty travel</strong> — conditions for travel to and from duty</li>
              </ul>
              <p>
                The dispute escalated to a compulsory conference at the FWC in Melbourne on 19 March 2026, presided over by Commissioner Redford. A protected action ballot closed on 27 March 2026, authorising industrial action if a negotiated agreement cannot be reached [2].
              </p>
              <p>
                The FWC's role in this process is facilitative — it can assist parties in resolving differences and offer an independent perspective, but it cannot impose an outcome or compel either side to accept a particular position [2].
              </p>
            </>
          )
        },
        {
          heading: "References",
          content: (
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>AFAP. <em>Air Pilots Award Increases and Superannuation Changes for July 2026.</em> June 2026. <a href="https://www.afap.org.au/news1/ArtMID/1606/ArticleID/2314/air-pilots-award-increases-superannuation-changes-for-july-2026" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">afap.org.au</a></li>
              <li>AFAP. <em>Jetstar EA 2025 Update #33.</em> March 2026. <a href="https://www.afap.org.au/membership/join-afap/qantas/ArtMID/4267/ArticleID/2235/jetstar-ea-2025-update-33" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">afap.org.au</a></li>
            </ol>
          )
        }
      ]}
      faqSchema={[
        {
          question: "What is the AFAP?",
          answer: "The Australian Federation of Air Pilots (AFAP) is a professional association and industrial organisation representing commercial pilots in Australia."
        },
        {
          question: "What are the key changes to the Air Pilots Award in 2026?",
          answer: "Following the Fair Work Commission Annual Wage Review, minimum wage rates under the Air Pilots Award 2020 will increase by 4.75% starting from the first full pay period on or after 1 July 2026."
        },
        {
          question: "What is the Pay Day superannuation requirement?",
          answer: "Starting 1 July 2026, employers are required to pay superannuation contributions into a pilot's super fund within 7 days of their pay day."
        },
        {
          question: "Why are Jetstar pilots considering industrial action in 2026?",
          answer: "Jetstar pilots, represented by AFAP, TWU, and AIPA, are in a bargaining dispute over base salaries, the company's proposed changes to reassignable provisions, roster stability, and duty travel, leading to a protected action ballot in March 2026."
        }
      ]}
      relatedGuides={[
        { title: "Australia Pilot Salary 2026", href: "/australia/guides/pilot-salary", time: "10 min" },
        { title: "Australia Pilot Training Costs 2026", href: "/australia/guides/pilot-training-costs", time: "12 min" },
        { title: "CASA Medical Class 1 Requirements", href: "/australia/guides/casa-medical-class-1", time: "8 min" }
      ]}
    />
  );
}
