import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function HourBuilding() {
  return (
    <GuideLayout
      title="Hour Building for Pilots: The Complete UK Guide (2026)"
      subtitle="How to build your 100 hours of PIC time cheaply and efficiently — the best locations, aircraft, and strategies that actually work."
      canonical="/guides/hour-building-pilot-uk"
      metaDescription="Complete guide to hour building for UK EASA pilots in 2026. Spain costs €90/hr, South Africa €100/hr, UK £150/hr. Methods, destinations, and practical tips."
      readTime="11 min read"
      heroImage="/manus-storage/hour-building_4e2d1a8c.jpg"
      ctaHref="/quiz"
      ctaText="Find my training route"
      scopeBanner={<GuideScopeBanner scope="This guide covers hour building strategies for UK/EASA pilots (CPL prerequisites, popular locations from the UK)." usHref="/us/guides/hour-building-usa" usLabel="View USA version →" />}
      faqSchema={[
        { question: "How many hours do I need for hour building?", answer: "For a modular EASA CPL, you need 200 hours total flight time, of which at least 100 hours must be as Pilot in Command (PIC). After your PPL, you typically have 45-55 hours total with 10-15 hours PIC, so you need to build approximately 85-90 more PIC hours." },
        { question: "Where is the cheapest place to hour build?", answer: "Spain and Portugal offer the best combination of low cost (€75-120/hr) and excellent weather (300+ VFR days/year). South Africa is similarly priced but requires travel. The UK is the most expensive option (£130-170/hr) but the most convenient." },
        { question: "How long does hour building take?", answer: "If you fly intensively (10-15 hours per week), you can complete 100 hours in 7-10 weeks. Part-time hour building at weekends in the UK typically takes 6-12 months." },
        { question: "Can I hour build in the USA?", answer: "Yes. Florida and Arizona offer cheap aircraft rental ($80-140/hr) and excellent weather. However, you need an FAA licence validation or conversion to fly N-registered aircraft. Check acceptance of US hours with your EASA authority before committing." }
      ]}
      sections={[
        {
          heading: "What Is Hour Building and Why Does It Matter?",
          content: (
            <>
              <p>
                Hour building is the phase of modular pilot training that sits between your Private Pilot Licence (PPL) and your Commercial Pilot Licence (CPL). It is the process of accumulating the Pilot in Command (PIC) flight time required by EASA regulations before you can sit your CPL skills test.
              </p>
              <p>
                Under EASA Part-FCL, you need 200 hours total flight time to qualify for a CPL, of which at least 100 hours must be as PIC. After completing your PPL, you typically have 45–55 hours total with only 10–15 hours of solo PIC time. This means you need to build approximately 85–90 more hours of PIC time before you can start your CPL training.
              </p>
              <p>
                The cost of hour building varies enormously depending on where and how you fly. The spread between the cheapest and most expensive options is enormous: from £50/hr in an aircraft syndicate to £170/hr at a UK flying school. This difference, multiplied over 100 hours, can amount to £12,000 in savings — enough to pay for your entire CPL training.
              </p>
            </>
          ),
        },
        {
          heading: "The EASA Requirements You Must Meet",
          content: (
            <>
              <p>
                Before planning where to fly, understand exactly what EASA requires. The rules are in Part-FCL and they are specific.
              </p>
              <p>
                You need 200 hours total flight time, of which at least 100 hours must be as PIC. You also need a qualifying cross-country flight: at least 540 km (300 NM) with full-stop landings at two aerodromes different from the departure point. This must be completed before the CPL skills test.
              </p>
              <p>
                All PIC hours must be on Group A aircraft (single-engine piston aeroplanes, MTOW up to 2,000 kg). Standard trainers like the Cessna 152, Cessna 172, Piper PA-28, and Diamond DA40 all qualify. Night flying hours also count toward your total.
              </p>
              <p>
                Hours on N-registered (US) aircraft are generally accepted by EASA states for hour building, but policies vary. Check with your specific national aviation authority before committing to a US-based programme. South African SACAA hours also require validation by your EASA authority.
              </p>
            </>
          ),
        },
        {
          heading: "Costs by Location: Where to Fly in 2026",
          content: (
            <>
              <p>
                Location is the single biggest variable in your hour building cost. Here are the realistic costs for 100 hours of PIC time in the most popular destinations [1].
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Location</th>
                      <th className="px-4 py-3 font-semibold">Typical Rate</th>
                      <th className="px-4 py-3 font-semibold">100hr Total Cost</th>
                      <th className="px-4 py-3 font-semibold">VFR Days/Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Spain (Mallorca, Granada)</td>
                      <td className="px-4 py-3">€75 – €120/hr</td>
                      <td className="px-4 py-3">€7,500 – €12,000</td>
                      <td className="px-4 py-3 text-green-400">300+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Portugal (Cascais)</td>
                      <td className="px-4 py-3">€75 – €110/hr</td>
                      <td className="px-4 py-3">€7,500 – €11,000</td>
                      <td className="px-4 py-3 text-green-400">280+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">South Africa</td>
                      <td className="px-4 py-3">~€100/hr</td>
                      <td className="px-4 py-3">~€10,000</td>
                      <td className="px-4 py-3 text-green-400">300+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">USA (Florida/Arizona)</td>
                      <td className="px-4 py-3">$80 – $140/hr</td>
                      <td className="px-4 py-3">$8,000 – $14,000</td>
                      <td className="px-4 py-3 text-green-400">300+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Greece</td>
                      <td className="px-4 py-3">€100 – €130/hr</td>
                      <td className="px-4 py-3">€10,000 – €13,000</td>
                      <td className="px-4 py-3 text-amber-400">250+</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">UK</td>
                      <td className="px-4 py-3">£130 – £170/hr</td>
                      <td className="px-4 py-3">£13,000 – £17,000</td>
                      <td className="px-4 py-3 text-red-400">150-180</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Spain</strong> is the most popular European hour building destination for UK pilots. Operators like Fly EPT Spain offer Tecnam P2002 aircraft at €75/hr dry (fuel extra). With fuel, total cost is roughly €90–€100/hr. The weather is outstanding: 300+ VFR days per year, open airspace, and cheap landing fees.
              </p>
              <p>
                <strong>South Africa</strong> offers rates around €100/hr with 300+ flying days per year and English-speaking instruction. Schools like 43 Air School in Port Alfred are SACAA-certified. The main consideration is that SACAA hours need validation by your EASA authority — check acceptance before booking.
              </p>
            </>
          ),
        },
        {
          heading: "Methods: School Rental, Syndicate, or Ownership",
          content: (
            <>
              <p>
                Beyond location, how you access the aircraft makes a significant difference to your hourly cost.
              </p>
              <p>
                <strong>School or Club Rental (Most Common):</strong> You rent a school aircraft by the hour. Simple and requires no commitment. Most schools offer block booking discounts (5–15% off for 50+ hours prepaid). The downside is aircraft availability — popular schools may have limited slots, especially in summer.
              </p>
              <p>
                <strong>Aircraft Syndicate (Best UK Value):</strong> A PA-28 syndicate share might cost £2,000–£5,000 to buy in, with monthly fees of £100–£200 and hourly rates of £80–£100/hr — significantly below school rental. You get better availability and more flexibility. The trade-off: you need to find a syndicate with availability, the buy-in capital, and the commitment to sell your share when done.
              </p>
              <p>
                <strong>Aircraft Ownership (Cheapest Per Hour):</strong> The most extreme option. Pilots report buying a cheap LAA (Light Aircraft Association) aircraft for £10,500, flying 100+ hours at approximately £50/hr in fuel and maintenance, then reselling for a similar price. The hourly cost is almost entirely fuel. You bear the risks of maintenance, insurance, and resale value — but if you buy well and sell well, it can be remarkably cheap.
              </p>
            </>
          ),
        },
        {
          heading: "Practical Tips from Experienced Hour Builders",
          content: (
            <>
              <p>
                These tips come from PPRuNe and pilot community discussions. They represent hard-won experience from pilots who have been through this.
              </p>
              <p>
                <strong>Do not fly more than 15 hours per week.</strong> As a low-hour pilot, flying 20–30 hours per week is not safe. You will not have the capacity to process and learn from that much flying. A sensible maximum is 3 hours per day, 5 days per week — about 15 hours per week. At that pace, 100 hours takes 7 weeks.
              </p>
              <p>
                <strong>Make it count.</strong> Hour building is not just about logging numbers. Use it to build genuine skills: fly to controlled aerodromes, practice radio in busy airspace, plan and execute cross-country flights, handle different weather conditions. Pilots who hour build in interesting environments arrive at CPL training significantly more competent than those who flew 100 boring circuits at one airfield.
              </p>
              <p>
                <strong>Complete your qualifying cross-country early.</strong> The 540km qualifying cross-country (with full-stop landings at two different aerodromes) must be completed before your CPL skills test. Do not leave it until the end of your hour build. If weather delays it, you do not want it blocking your CPL start date.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50 space-y-1">
                [1] Airmappr. "Hour Building Guide: Costs by Country & Method." <em>Flight Training Data 2026</em>.<br/>
                [2] PPRuNe Forums. "Hour building costs: UK vs Europe (90 hours)." <em>Professional Pilot Training Discussions</em>.
              </p>
            </>
          ),
        }
      ]}
      relatedGuides={[
        { title: "Integrated vs Modular ATPL", href: "/guides/integrated-vs-modular", time: "9 min" },
        { title: "Pilot Training Costs UK", href: "/guides/pilot-training-costs", time: "8 min" },
        { title: "ATPL Theory Exams: Complete Guide", href: "/guides/atpl-theory-exams-uk", time: "12 min" },
      ]}
    />
  );
}
