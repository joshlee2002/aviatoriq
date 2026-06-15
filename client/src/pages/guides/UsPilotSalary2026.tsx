import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";

export default function UsPilotSalary2026() {
  return (
    <GuideLayout
      title="US Airline Pilot Salary 2026: The Complete Guide"
      subtitle="Real pay scales from Delta, United, American, Southwest, and the regional carriers — with per diem, profit-sharing, and a full career earnings breakdown."
      readTime="12 min read"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Pilot Careers"
      canonical="https://aviatoriq.com/us/guides/us-pilot-salary-2026"
      metaDescription="US airline pilot salary 2026: Delta, United, American, and Southwest pay scales confirmed. Regional FOs start at $90k–$110k. Major airline captains earn $465,000–$520,000. Full breakdown inside."
      ctaText="Check your US pilot readiness"
      ctaHref="/quiz"
      faqSchema={[
        { question: "What is the average salary for a US airline pilot in 2026?", answer: "The Bureau of Labor Statistics reported a median annual wage of $226,600 for airline pilots in May 2024. In 2026, first-year regional FOs earn $90,000–$110,000 in total compensation, while major airline widebody captains earn $465,000–$520,000 annually." },
        { question: "How much do Delta, United, and American pilots earn?", answer: "Following 2023 contract ratifications, all three carriers now pay identical widebody captain rates of $465.13 per hour at year 12. At 900 hours annually, that is approximately $418,617 in base pay alone, with profit-sharing and per diem adding $50,000–$100,000 more." },
        { question: "How much do regional airline pilots earn in their first year?", answer: "Regional airline first officers in 2026 typically earn $90,000–$110,000 in total first-year compensation, including base pay, per diem, and signing bonuses. SkyWest Year 1 FO pay is $92/hour; Republic's total first-year package is approximately $93,646." },
        { question: "Which US airline pays pilots the most?", answer: "Delta, United, and American now pay identical widebody captain rates ($465.13/hour at year 12). Alaska Airlines and Southwest are close behind. FedEx and UPS cargo carriers pay captains $358–$380+/hour but have longer upgrade times." },
        { question: "How does per diem affect pilot salary?", answer: "US airline pilots receive a per diem allowance of $2.00–$4.50 per hour away from base. At 900 hours away from base annually, that adds $1,800–$4,050 in tax-free income. International pilots earn more due to longer trips." },
        { question: "What is pilot profit-sharing in the USA?", answer: "Major airlines distribute a percentage of annual profits to employees. Delta's profit-sharing has paid out $1.1–$1.4 billion annually in recent years, with pilots receiving $20,000–$60,000 in a strong year. United and American have similar programmes." }
      ]}
      sections={[
        {
          heading: "The State of US Pilot Pay in 2026",
          content: (
            <>
              <p>
                US airline pilot compensation reached a historic milestone in 2026. Following the ratification of new contracts at Delta, United, and American Airlines in 2023 — which phased in through 2026 — all three carriers now pay <strong>identical widebody captain rates of $465.13 per hour</strong> at year 12 of seniority. At 900 credited hours annually, that translates to approximately $418,617 in base pay alone, before profit-sharing, per diem, and retirement contributions.
              </p>
              <p>
                The Bureau of Labor Statistics reported a median annual wage of <strong>$226,600</strong> for airline pilots, copilots, and flight engineers in May 2024 — nearly double the 2016 median of $127,820. The structural driver is the mandatory retirement age of 65: the FAA projects approximately 4,300 mandatory retirements per year through 2042, sustaining demand for new pilots throughout the next two decades.
              </p>
              <p>
                For aspiring pilots, the financial case for the career has never been stronger. Regional airline first officers now start at <strong>$90,000–$110,000</strong> in total first-year compensation — a figure that was $40,000–$50,000 just ten years ago.
              </p>
            </>
          ),
        },
        {
          heading: "Major Airline Pilot Pay Scales (2026)",
          content: (
            <>
              <p>
                The following figures represent base hourly rates from confirmed 2026 contracts. Annual earnings are calculated at 900 credited hours — the typical full-time schedule. Total compensation (including per diem, profit-sharing, and 401k contributions) is typically 20–40% higher than base pay alone.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Airline</th>
                      <th className="px-4 py-3 font-semibold">Year 1 FO (Narrowbody)</th>
                      <th className="px-4 py-3 font-semibold">Year 12 FO (Widebody)</th>
                      <th className="px-4 py-3 font-semibold">Year 12 Captain (Widebody)</th>
                      <th className="px-4 py-3 font-semibold">Est. Total Comp (Senior Captain)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Delta Air Lines</td>
                      <td className="px-4 py-3">$113,476/yr</td>
                      <td className="px-4 py-3">$317.73/hr (~$285,957/yr)</td>
                      <td className="px-4 py-3">$465.13/hr (~$418,617/yr)</td>
                      <td className="px-4 py-3 font-semibold text-white">$465,000 – $520,000+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">United Airlines</td>
                      <td className="px-4 py-3">$115,621/yr</td>
                      <td className="px-4 py-3">$317.73/hr (~$285,957/yr)</td>
                      <td className="px-4 py-3">$465.13/hr (~$418,617/yr)</td>
                      <td className="px-4 py-3 font-semibold text-white">$465,000 – $520,000+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">American Airlines</td>
                      <td className="px-4 py-3">$113,476/yr</td>
                      <td className="px-4 py-3">$317.73/hr (~$285,957/yr)</td>
                      <td className="px-4 py-3">$465.13/hr (~$418,617/yr)</td>
                      <td className="px-4 py-3 font-semibold text-white">$465,000 – $520,000+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Southwest Airlines</td>
                      <td className="px-4 py-3">$114,928/yr</td>
                      <td className="px-4 py-3">N/A (narrowbody only)</td>
                      <td className="px-4 py-3">~$300/hr (~$270,000/yr)</td>
                      <td className="px-4 py-3 font-semibold text-white">$300,000 – $380,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Alaska Airlines</td>
                      <td className="px-4 py-3">$125,731/yr</td>
                      <td className="px-4 py-3">~$280/hr</td>
                      <td className="px-4 py-3">~$380/hr</td>
                      <td className="px-4 py-3 font-semibold text-white">$380,000 – $450,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">JetBlue</td>
                      <td className="px-4 py-3">$97,000/yr</td>
                      <td className="px-4 py-3">~$230/hr</td>
                      <td className="px-4 py-3">~$310/hr</td>
                      <td className="px-4 py-3 font-semibold text-white">$280,000 – $340,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">FedEx Express</td>
                      <td className="px-4 py-3">$82,690/yr</td>
                      <td className="px-4 py-3">~$280/hr</td>
                      <td className="px-4 py-3">~$380/hr</td>
                      <td className="px-4 py-3 font-semibold text-white">$380,000 – $450,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">UPS Airlines</td>
                      <td className="px-4 py-3">$63,442/yr</td>
                      <td className="px-4 py-3">~$280/hr</td>
                      <td className="px-4 py-3">~$358/hr</td>
                      <td className="px-4 py-3 font-semibold text-white">$360,000 – $430,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-white/50 mt-2">
                Sources: ATP Flight School / AirlinePilotCentral (2025/2026 contracts); MiGFlug analysis of Big Three contract realignment (May 2026); BLS Occupational Outlook Handbook (May 2024). Year 1 FO figures based on 72–87 credited hours/month at the applicable aircraft/base. Total compensation estimates include base pay, per diem, and profit-sharing.
              </p>
            </>
          ),
        },
        {
          heading: "Regional Airline Pilot Pay (2026)",
          content: (
            <>
              <p>
                Most pilots begin their airline careers at a regional carrier, building seniority and flight hours before upgrading to a major. Regional pay has risen dramatically since 2022 — first-year FOs now earn <strong>$90,000–$110,000</strong> in total compensation at the major regionals, compared to $40,000–$50,000 five years ago.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Regional Airline</th>
                      <th className="px-4 py-3 font-semibold">Year 1 FO ($/hr)</th>
                      <th className="px-4 py-3 font-semibold">Year 1 Total Comp</th>
                      <th className="px-4 py-3 font-semibold">Flow-Through to Major</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">SkyWest Airlines</td>
                      <td className="px-4 py-3">$92/hr</td>
                      <td className="px-4 py-3">~$82,800/yr (base only)</td>
                      <td className="px-4 py-3">Delta, United, Alaska, American</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Republic Airways</td>
                      <td className="px-4 py-3">~$93/hr</td>
                      <td className="px-4 py-3">$93,646/yr total</td>
                      <td className="px-4 py-3">United Aviate programme</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Endeavor Air</td>
                      <td className="px-4 py-3">~$90/hr</td>
                      <td className="px-4 py-3">~$90,000/yr total</td>
                      <td className="px-4 py-3">Delta Propel (guaranteed path)</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Envoy Air</td>
                      <td className="px-4 py-3">~$90/hr</td>
                      <td className="px-4 py-3">~$90,000/yr total</td>
                      <td className="px-4 py-3">American Airlines (flow, no interview)</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Piedmont Airlines</td>
                      <td className="px-4 py-3">~$90/hr</td>
                      <td className="px-4 py-3">~$90,000/yr total</td>
                      <td className="px-4 py-3">American Airlines (flow, no interview)</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Horizon Air</td>
                      <td className="px-4 py-3">~$95/hr</td>
                      <td className="px-4 py-3">~$95,000/yr total</td>
                      <td className="px-4 py-3">Alaska Airlines Career Path</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Pilots at Envoy, Piedmont, and PSA Airlines who joined before October 2011 have a <strong>flow-through agreement</strong> to American Airlines — meaning they transfer to mainline American without a separate interview once they meet the seniority and hour requirements. Endeavor Air pilots have a guaranteed interview with Delta through the Propel programme.
              </p>
            </>
          ),
        },
        {
          heading: "Understanding Total Compensation: Beyond the Base Rate",
          content: (
            <>
              <p>
                Hourly base pay is only part of a US airline pilot's earnings. The full compensation package includes several additional components that can add <strong>$50,000–$100,000</strong> per year for senior pilots.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Compensation Component</th>
                      <th className="px-4 py-3 font-semibold">Typical Amount</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Base Pay (hourly × credited hours)</td>
                      <td className="px-4 py-3">$63,000 – $418,617/yr</td>
                      <td className="px-4 py-3">Varies by airline, aircraft, and seniority year</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Per Diem</td>
                      <td className="px-4 py-3">$2.00 – $4.50/hr away from base</td>
                      <td className="px-4 py-3">Tax-free. At 900 hrs away from base: $1,800–$4,050/yr. International pilots earn more.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Profit-Sharing</td>
                      <td className="px-4 py-3">$5,000 – $60,000/yr</td>
                      <td className="px-4 py-3">Delta has paid out $1.1–$1.4B annually in recent years. United and American have similar programmes.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">401(k) Employer Match</td>
                      <td className="px-4 py-3">16–20% of eligible earnings</td>
                      <td className="px-4 py-3">For a captain earning $418,617, that is $67,000–$84,000 in retirement contributions annually.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Travel Benefits</td>
                      <td className="px-4 py-3">Free / heavily discounted</td>
                      <td className="px-4 py-3">Pilots and their families fly free (standby) or at deeply discounted rates on their airline and partners.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Signing Bonuses (regional)</td>
                      <td className="px-4 py-3">$5,000 – $20,000</td>
                      <td className="px-4 py-3">Air Wisconsin: $5,000; CommuteAir: $20,000. Varies by carrier and current demand.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "Career Earnings Timeline: Zero to Major Airline Captain",
          content: (
            <>
              <p>
                The US pilot career follows a predictable earnings trajectory. The early years are lean — CFI pay and regional FO salaries are modest — but the long-term earnings potential is exceptional.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Career Stage</th>
                      <th className="px-4 py-3 font-semibold">Typical Timeline</th>
                      <th className="px-4 py-3 font-semibold">Annual Earnings</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Flight Training</td>
                      <td className="px-4 py-3">Year 0–1</td>
                      <td className="px-4 py-3 text-red-400">–$80,000 to –$124,000</td>
                      <td className="px-4 py-3">Investment phase. ATP: $123,995. Epic: $83,647.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">CFI / Hour Building</td>
                      <td className="px-4 py-3">Year 1–2.5</td>
                      <td className="px-4 py-3">$35,000 – $55,000</td>
                      <td className="px-4 py-3">Building to 1,500 hours for ATP certificate</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Regional FO (Year 1)</td>
                      <td className="px-4 py-3">Year 2.5–3.5</td>
                      <td className="px-4 py-3">$90,000 – $110,000</td>
                      <td className="px-4 py-3">Total comp including per diem and signing bonus</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Regional Captain / Major FO</td>
                      <td className="px-4 py-3">Year 4–8</td>
                      <td className="px-4 py-3">$130,000 – $250,000</td>
                      <td className="px-4 py-3">Depends on upgrade speed and flow-through timing</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Major Airline FO (Senior)</td>
                      <td className="px-4 py-3">Year 8–15</td>
                      <td className="px-4 py-3">$200,000 – $320,000</td>
                      <td className="px-4 py-3">Year 12 widebody FO: $317.73/hr = ~$285,957 base</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Major Airline Captain</td>
                      <td className="px-4 py-3">Year 12–20+</td>
                      <td className="px-4 py-3">$380,000 – $520,000+</td>
                      <td className="px-4 py-3">Big Three widebody captain: $465.13/hr + profit-sharing + 401k</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Over a full 30-year career at a major airline, total compensation — including base pay, profit-sharing, per diem, and retirement contributions — typically reaches <strong>$8–12 million</strong>. Most pilots who attend an accelerated programme and flow directly to a regional airline break even on their training investment within 12–18 months of their first airline job.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50">
                [1] Bureau of Labor Statistics. "Airline and Commercial Pilots." <em>bls.gov/ooh/transportation-and-material-moving/airline-and-commercial-pilots.htm</em>. Updated 2024.<br/>
                [2] MiGFlug. "United, American and Delta Now Pay Identical $465/Hour." <em>migflug.com</em>. May 2026.<br/>
                [3] Simple Flying. "Hourly Pay of US Regional Airline First Officers in 2026." <em>simpleflying.com</em>. April 2026.<br/>
                [4] ATP Flight School. "Airline Pilot Salary." <em>atpflightschool.com</em>. Accessed June 2026.<br/>
                [5] ALPA. "Regional Airline Pilot Signing Bonuses." <em>alpa.org</em>. July 2025.<br/>
                [6] Delta Air Lines. "Propel Pilot Career Path Program." <em>delta.com/us/en/careers/pilots/propel</em>. Accessed June 2026.
              </p>
            </>
          ),
        }
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot in the USA", href: "/us/guides/how-to-become-a-pilot", time: "15 min" },
        { title: "US Pilot Training Costs 2026", href: "/us/guides/pilot-training-costs-usa", time: "14 min" },
        { title: "US Airline Cadet Programmes 2026", href: "/us/guides/us-airline-cadet-programs", time: "11 min" },
        { title: "How to Fund Pilot Training in the USA", href: "/us/guides/how-to-fund-pilot-training-usa", time: "9 min" },
      ]}
    />
  );
}
