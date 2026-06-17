import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function RyanairCadet() {
  return (
    <GuideLayout
      title="Ryanair Mentored Programme 2026: Costs, Schools & Career Path"
      subtitle="How Ryanair recruits and trains its pilots. Understand the €80,000+ self-funded cost, the partner flight schools, and the reality of the €30,000 Type Rating."
      canonical="https://aviatoriq.com/guides/ryanair-cadet-programme"
      metaDescription="Ryanair Mentored Programme 2026: Compare partner schools like FTEJerez and Bartolini Air. Understand the self-funded costs, the Type Rating bond, and First O..."
      readTime="8 min read"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Airline Cadet Programmes"
      heroImage="/manus-storage/ryanair-cadet_432ca710.jpg"
      ctaHref="/tools/cadet-eligibility"
      ctaText="Check your cadet eligibility"
      scopeBanner={<GuideScopeBanner scope="This guide covers the Ryanair Mentored Programme pathway for UK and European cadets." />}
      relatedGuides={[
        { title: "BA Speedbird Academy 2026: Complete Guide", href: "/guides/ba-speedbird-academy", time: "10 min" },
        { title: "easyJet Generation Pilot Programme", href: "/guides/easyjet-generation-pilot", time: "9 min" },
        { title: "Wizz Air Pilot Academy", href: "/guides/wizz-air-pilot-academy", time: "8 min" },
        { title: "Integrated vs Modular ATPL Training", href: "/guides/integrated-vs-modular", time: "9 min" },
      ]}
      faqSchema={[
        { question: "Does Ryanair pay for your pilot training?", answer: "No. The Ryanair Mentored Programme is entirely self-funded by the cadet. You must pay the flight school directly for your ATPL training (approx €60,000 to €120,000 depending on the school)." },
        { question: "Do you have to pay for your own Type Rating at Ryanair?", answer: "Historically, Ryanair required cadets to pay €30,000 upfront for their Boeing 737 Type Rating. In 2026, Ryanair frequently offers a bonded Type Rating, where the airline pays the upfront cost but deducts it from your salary over 5 years." },
        { question: "Which flight schools does Ryanair partner with?", answer: "Ryanair's official Mentored Programme partners include FTEJerez (Spain), Bartolini Air (Poland), Aviomar (Italy), and AFTA (Ireland). Graduates from these schools get priority assessment for Ryanair First Officer positions." },
        { question: "Is a job guaranteed at the end of the Ryanair Mentored Programme?", answer: "No. The programme offers a 'conditional' pathway. You must pass all flight training, the final Ryanair simulator assessment, and an interview. If you fail the final assessment, you will not be hired." }
      ]}
      sections={[
        {
          heading: "What is the Ryanair Mentored Programme?",
          content: (
            <>
              <p className="mb-4 text-white/80">
                Unlike the British Airways Speedbird Academy (which is fully funded) or the easyJet Generation Programme (which is run exclusively by CAE and Skyborne), Ryanair operates a decentralised "Mentored Programme".
              </p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Not sure if you qualify? Try our free <Link href="/tools/cadet-eligibility" className="text-blue-400 underline">Cadet Eligibility Checker</Link> to see which programmes you are likely to be eligible for.
              </p>
              <p className="mb-4 text-white/80">
                Ryanair partners with a network of independent flight schools across Europe. You apply directly to the flight school, pay the flight school yourself, and complete a standard ATPL course. The "mentored" aspect means that your training includes Ryanair-specific Standard Operating Procedures (SOPs) and you receive priority access to a Ryanair final assessment upon graduation.
              </p>
            </>
          ),
        },
        {
          heading: "The Partner Schools: Where Can You Train?",
          content: (
            <>
              <p className="mb-4 text-white/80">
                Ryanair's partner schools offer vastly different pricing and environments. Choosing the right one is critical for your budget.
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">1. FTEJerez (Spain)</h3>
              <p className="mb-4 text-white/80">
                A premium, fully integrated academy in southern Spain. Offers excellent weather and a campus environment.
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li><strong className="text-white">Cost:</strong> Approx €120,000+</li>
                <li><strong className="text-white">Best for:</strong> Cadets who want a highly structured, premium environment and can afford the high cost.</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">2. Bartolini Air (Poland)</h3>
              <p className="mb-4 text-white/80">
                Based in Łódź, Poland, Bartolini Air offers one of the most cost-effective routes into a Ryanair flight deck.
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li><strong className="text-white">Cost:</strong> Approx €60,000 - €70,000</li>
                <li><strong className="text-white">Best for:</strong> Value-conscious cadets. The training standard is excellent, but you must factor in Polish winter weather delays.</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">3. AFTA - Atlantic Flight Training Academy (Ireland)</h3>
              <p className="mb-4 text-white/80">
                Based in Cork, Ireland, AFTA has a very close relationship with Ryanair (whose headquarters are in Dublin).
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li><strong className="text-white">Cost:</strong> Approx €85,000 - €95,000</li>
                <li><strong className="text-white">Best for:</strong> Cadets who want to train in challenging European weather, preparing them well for Ryanair's network.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "The Financial Reality: ATPL + Type Rating",
          content: (
            <>
              <p className="mb-4 text-white/80">
                The Ryanair pathway is entirely self-funded. You must budget for two massive expenses:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-white/80 space-y-4">
                <li>
                  <strong className="text-white">The ATPL Training (€60k - €120k):</strong> Paid directly to your chosen partner school. No UK high-street banks offer pilot loans for this, so you must rely on savings, remortgaging, or specialist lenders.
                </li>
                <li>
                  <strong className="text-white">The Boeing 737 Type Rating (€30,000):</strong> Even if you pass the final Ryanair assessment, you are not ready to fly a 737. You need a Type Rating. Historically, Ryanair forced cadets to pay this €30,000 upfront. Currently, Ryanair often offers a <strong>Bonded Type Rating</strong>. They pay the €30,000 upfront, but deduct it from your salary over 5 years. If you leave Ryanair before 5 years, you must repay the balance.
                </li>
              </ol>
            </>
          ),
        },
        {
          heading: "The Selection Process",
          content: (
            <>
              <p className="mb-4 text-white/80">
                There are two distinct selection phases:
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li><strong className="text-white">Phase 1 (Flight School Assessment):</strong> You must pass Cut-e/Aon psychometric testing and an interview to be accepted into the partner school.</li>
                <li><strong className="text-white">Phase 2 (Ryanair Final Assessment):</strong> Upon graduating with your Frozen ATPL, you attend a final assessment in Dublin. This involves a technical interview, HR interview, and a simulator assessment in a Boeing 737. <strong>If you fail this, you do not get the job.</strong></li>
              </ul>
              <p className="mb-4 text-white/80">
                The benefit of the Mentored Programme is that you skip the CV screening queue and go straight to the Phase 2 assessment, but you still have to pass it on your own merit.
              </p>
            </>
          ),
        },
        {
          heading: "A Career at Ryanair: What to Expect",
          content: (
            <>
              <p className="mb-4 text-white/80">
                Ryanair operates an all-Boeing 737 fleet (primarily 737-800 and 737 MAX 8-200). It is a high-frequency, short-haul, low-cost carrier.
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li><strong className="text-white">The Roster:</strong> Ryanair is famous for its stable 5-on, 4-off roster. You work 5 days, then have 4 days off. You return to your home base every night (no layovers).</li>
                <li><strong className="text-white">The Pay:</strong> Initial First Officer base pay is relatively low, but Ryanair relies heavily on "Sector Pay" (getting paid per flight). A busy summer roster can significantly boost take-home pay.</li>
                <li><strong className="text-white">The Progression:</strong> Because Ryanair is expanding rapidly, upgrade times from First Officer to Captain are among the fastest in Europe (often 3.5 to 5 years).</li>
              </ul>
              <div className="bg-white/5 border border-white/20 p-6 rounded-lg mb-6">
                <p className="text-white/80 italic">
                  "Many pilots use Ryanair as a stepping stone — building 1,500–3,000 hours over 3–5 years before moving to BA, Emirates, or Virgin Atlantic. Others upgrade to Captain quickly and stay for the stable 5/4 roster and high productivity pay."
                </p>
              </div>
            </>
          ),
        },
      ]}
      sources={[
        { name: "Ryanair Careers (Pilot Recruitment)" },
        { name: "FTEJerez Mentored Programme Guide" },
        { name: "Bartolini Air Ryanair Mentored Programme" },
        { name: "BALPA Pay & Conditions Survey" }
      ]}
    />
  );
}
