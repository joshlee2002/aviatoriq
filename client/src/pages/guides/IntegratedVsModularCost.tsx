import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function IntegratedVsModularCost() {
  return (
    <GuideLayout
      title="Integrated vs Modular ATPL: Which is Actually Cheaper? (2026)"
      subtitle="A brutally honest cost comparison of the two main routes to a commercial pilot licence — including the hidden costs that marketing materials never mention."
      canonical="/guides/integrated-vs-modular-cost"
      metaDescription="Integrated vs modular ATPL cost comparison 2026. Integrated: £80k-£130k. Modular: £55k-£85k. But the real difference is smaller than you think. Full breakdown."
      readTime="11 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/training-costs_9d4c2b8e.jpg"
      ctaHref="/calculator"
      ctaText="Use the cost calculator"
      scopeBanner={<GuideScopeBanner scope="Cost figures in this guide are based on UK/EASA training prices in GBP. Costs vary significantly by country." usHref="/us/guides/pilot-training-costs-usa" usLabel="View USA costs →" globalHref="/calculator" globalLabel="Use the cost calculator →" />}
      faqSchema={[
        { question: "Is integrated or modular ATPL cheaper?", answer: "Modular is generally cheaper in headline training fees (£55k-£85k vs £80k-£130k). However, the real difference is smaller once you factor in the opportunity cost of income lost during integrated training, and the hidden costs of modular training." },
        { question: "What are the hidden costs of modular training?", answer: "Hidden modular costs include: skill decay between modules (requiring extra hours), multiple school fees and travel costs, longer timeline before earning an airline salary, and the psychological cost of self-managing a 3-5 year programme." },
        { question: "Does integrated training lead to better job prospects?", answer: "The myth that integrated training is significantly better for employment prospects is largely outdated. Major airlines including Ryanair, easyJet, and Jet2 all accept modular graduates. What matters is your exam scores, simulator performance, and interview skills." }
      ]}
      sections={[
        {
          heading: "The Headline Numbers",
          content: (
            <>
              <p>
                The headline cost comparison is straightforward. Integrated ATPL training at a major UK academy costs £80,000–£130,000. Modular ATPL training typically costs £55,000–£85,000. On paper, modular is cheaper by £25,000–£45,000.
              </p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Use our free <Link href="/calculator" className="text-blue-400 underline">Pilot Training Cost Calculator</Link> to get a personalised cost estimate based on your chosen route and country.
              </p>
              <p>
                But the headline numbers are misleading. The real cost comparison is more nuanced, and for many candidates, the difference is smaller than it appears — or even reversed.
              </p>
            </>
          ),
        },
        {
          heading: "Integrated Training: The True All-In Cost",
          content: (
            <>
              <p>
                An integrated programme takes you from zero hours to a frozen ATPL in 18–24 months of full-time training. Here is a realistic all-in cost breakdown for 2026:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Cost Item</th>
                      <th className="px-4 py-3 font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">School fees (CAE/Acron/FTEJerez/Skyborne)</td>
                      <td className="px-4 py-3">£99,900 – £119,500</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Living costs during training (20 months)</td>
                      <td className="px-4 py-3">£15,000 – £25,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Type rating (if not included)</td>
                      <td className="px-4 py-3">£0 – £30,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors font-semibold">
                      <td className="px-4 py-3 text-white">Total (without type rating)</td>
                      <td className="px-4 py-3 text-white">£115,000 – £145,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The key hidden cost of integrated training is the <strong>opportunity cost</strong> — the income you give up by training full-time for 20 months. If you were earning £35,000/year before training, that is £58,000 in foregone income over 20 months. This is a real cost that most integrated school brochures never mention.
              </p>
            </>
          ),
        },
        {
          heading: "Modular Training: The True All-In Cost",
          content: (
            <>
              <p>
                A modular programme allows you to train stage-by-stage over 3–5 years while maintaining your income. Here is a realistic all-in cost breakdown:
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Module</th>
                      <th className="px-4 py-3 font-semibold">Cost Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">PPL (Private Pilot Licence)</td>
                      <td className="px-4 py-3">£8,000 – £15,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">ATPL Theory (distance learning)</td>
                      <td className="px-4 py-3">£2,500 – £4,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Hour Building (100 hours, Spain)</td>
                      <td className="px-4 py-3">£9,000 – £14,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">CPL (Commercial Pilot Licence)</td>
                      <td className="px-4 py-3">£10,000 – £15,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Multi-Engine Rating (ME)</td>
                      <td className="px-4 py-3">£5,000 – £8,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Instrument Rating (IR)</td>
                      <td className="px-4 py-3">£12,000 – £18,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">MCC/JOC Course</td>
                      <td className="px-4 py-3">£3,500 – £6,000</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors font-semibold">
                      <td className="px-4 py-3 text-white">Total (without type rating)</td>
                      <td className="px-4 py-3 text-white">£50,000 – £80,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The key hidden cost of modular training is <strong>skill decay</strong>. If you take 6 months off between your PPL and your hour building, you will need extra hours to get back to standard. If you take a year off between your CPL and your IR, the same thing happens. These extra hours cost money and are not in any school's brochure.
              </p>
            </>
          ),
        },
        {
          heading: "The Real Comparison: Which Is Cheaper?",
          content: (
            <>
              <p>
                When you factor in the opportunity cost of income lost during integrated training, the comparison looks very different.
              </p>
              <p>
                <strong>Integrated (20 months, full-time):</strong> School fees £99,900–£119,500 (e.g. CAE £99,900, FTEJerez £119,500) + living costs £20,000 + lost income (£35k/year × 1.7 years) £60,000 = <strong>total economic cost: ~£180,000–£200,000</strong>.
              </p>
              <p>
                <strong>Modular (4 years, part-time):</strong> Training fees £65,000 + skill decay extra hours £5,000 + no lost income = <strong>total economic cost: ~£70,000</strong>.
              </p>
              <p>
                On this basis, modular is dramatically cheaper — but only if you maintain your income throughout training and avoid significant skill decay gaps.
              </p>
              <p>
                The integrated route is worth the premium if: you cannot self-motivate over a 4-year period, you want the fastest possible route to an airline job, or you have access to a cadet programme that requires integrated training.
              </p>
            </>
          ),
        },
        {
          heading: "The Employment Reality in 2026",
          content: (
            <>
              <p>
                The myth that integrated training is significantly better for employment prospects is largely outdated. A decade ago, legacy carriers like British Airways and Lufthansa had strong preferences for integrated graduates from specific partner schools. Today, the pilot shortage has fundamentally changed the hiring landscape.
              </p>
              <p>
                Ryanair, easyJet, Jet2, and Wizz Air — the four largest employers of newly qualified pilots in the UK — all actively recruit modular graduates. What matters to these airlines is your ATPL exam average (aim for 85%+), your simulator performance in their assessment, and your interview skills. They do not ask whether you trained at CAE Oxford or Bristol Groundschool.
              </p>
              <p>
                The one area where integrated training still has a genuine advantage is access to specific cadet programmes. The BA Speedbird Academy, easyJet Generation Pilot, and Jet2 FlightPath programmes all require integrated training at their partner schools. If you want a conditional pathway offer before you start training, integrated is the only option.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        { title: "Integrated vs Modular ATPL", href: "/guides/integrated-vs-modular", time: "9 min" },
        { title: "Pilot Training Costs UK", href: "/guides/pilot-training-costs", time: "8 min" },
        { title: "Best Flight Schools UK 2026", href: "/guides/best-flight-schools-uk-2026", time: "12 min" },
      ]}
    
      sources={[
    { name: "UK Civil Aviation Authority (CAA)" },
    { name: "EASA Part-FCL" },
    { name: "BALPA Pay & Conditions Survey" },
  ]}/>
  );
}
