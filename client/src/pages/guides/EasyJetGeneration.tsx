import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function EasyJetGeneration() {
  return (
    <GuideLayout
      title="easyJet Generation Pilot Programme 2026: MPL vs ATPL Routes"
      subtitle="A detailed breakdown of the easyJet cadet pathway. Understand the €100,000+ self-funded cost, the CAE MPL route vs the Skyborne ATPL route, and the conditional employment reality."
      canonical="https://aviatoriq.com/guides/easyjet-generation-pilot"
      metaDescription="easyJet Generation Pilot Programme 2026: Compare the CAE MPL and Skyborne ATPL routes. Understand the €100,000+ self-funded costs and conditional First Officer pathway."
      readTime="9 min read"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Airline Cadet Programmes"
      heroImage="/manus-storage/easyjet-generation_0954c6af.jpg"
      ctaHref="/tools/cadet-eligibility"
      ctaText="Check your cadet eligibility"
      scopeBanner={<GuideScopeBanner scope="This guide covers the UK and European easyJet cadet training pathways via CAE and Skyborne." />}
      relatedGuides={[
        { title: "BA Speedbird Academy 2026: Complete Guide", href: "/guides/ba-speedbird-academy", time: "10 min" },
        { title: "Ryanair Cadet Pilot Programme", href: "/guides/ryanair-cadet-programme", time: "8 min" },
        { title: "Integrated vs Modular ATPL Training", href: "/guides/integrated-vs-modular", time: "9 min" },
        { title: "Pilot Training Costs UK 2026", href: "/guides/pilot-training-costs", time: "8 min" },
      ]}
      faqSchema={[
        { question: "What is the easyJet Generation Pilot Programme?", answer: "The Generation easyJet programme is a mentored cadet pathway that trains pilots from zero experience. Successful graduates receive a conditional offer for an easyJet First Officer role, subject to passing all training, medical, and airline standards." },
        { question: "Does easyJet pay for the Generation pilot training?", answer: "No. The Generation easyJet programme is entirely self-funded by the cadet. The cost at CAE is approximately €102,942, plus living expenses and medical fees." },
        { question: "What is the difference between the CAE and Skyborne easyJet routes?", answer: "CAE Oxford delivers the Multi-Crew Pilot Licence (MPL) route, which is type-specific to the A320 and ties you to easyJet initially. Skyborne Airline Academy delivers a traditional Integrated ATPL route, which provides a more flexible 'frozen ATPL' upon graduation." },
        { question: "Is a job guaranteed at the end of the easyJet Generation programme?", answer: "No airline training programme guarantees a job. The pathway offers a conditional offer of employment, meaning you will be hired provided you pass all flight phases, simulator checks, line training, and easyJet's final recruitment standards." }
      ]}
      sections={[
        {
          heading: "What Is the Generation easyJet Programme?",
          content: (
            <>
              <p className="mb-4 text-white/80">
                The Generation easyJet programme is a structured, "mentored" cadet pathway designed to take students with zero flying experience and train them specifically for the right seat of an easyJet Airbus A320.
              </p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Not sure if you qualify? Try our free <Link href="/tools/cadet-eligibility" className="text-blue-400 underline">Cadet Eligibility Checker</Link> to see which airline programmes you match with.
              </p>
              <p className="mb-4 text-white/80">
                It is crucial to understand the financial reality upfront: <strong>easyJet does not pay for your training.</strong> This is a self-funded programme costing upwards of €100,000. What easyJet provides is a "conditional offer of employment" before you begin training, meaning that if you pass all phases to their required standard, a First Officer job is waiting for you.
              </p>
            </>
          ),
        },
        {
          heading: "Two Training Providers, Two Different Licences",
          content: (
            <>
              <p className="mb-4 text-white/80">
                As of 2026, easyJet partners with two different flight schools to deliver the Generation programme, and they offer fundamentally different licence outcomes:
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">1. CAE Oxford (The MPL Route)</h3>
              <p className="mb-4 text-white/80">
                CAE delivers the Multi-Crew Pilot Licence (MPL). The MPL is designed purely for airline operations. You spend less time in small single-engine aircraft and much more time in an A320 simulator learning easyJet's Standard Operating Procedures (SOPs).
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li><strong className="text-white">The Catch:</strong> An MPL is type-specific and operator-specific. If you fail easyJet line training, or if easyJet stops hiring due to an economic downturn, your licence is essentially useless for other airlines until you pay to convert it to a standard ATPL.</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">2. Skyborne Airline Academy (The ATPL Route)</h3>
              <p className="mb-4 text-white/80">
                Skyborne delivers a traditional Integrated ATPL course. You do more real-world flying in light aircraft and graduate with a standard "Frozen ATPL" before completing your A320 type rating.
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li><strong className="text-white">The Benefit:</strong> A Frozen ATPL is universally recognised. If your easyJet job offer falls through, you can take this licence and apply to Ryanair, Jet2, Wizz Air, or any other commercial operator immediately.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Entry Requirements & Selection",
          content: (
            <>
              <p className="mb-4 text-white/80">
                The formal minimum requirements to apply for the Generation easyJet programme are:
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li>Minimum age of 18 to commence training.</li>
                <li>Right to live and work in the UK (or EU/EAA/Switzerland for the European pathway).</li>
                <li>Minimum 5 GCSEs at grade C/4 or above, including Maths, English, and a Science.</li>
                <li>Ability to obtain a CAA or EASA Class 1 Medical Certificate.</li>
                <li>Fluent in English (ICAO Level 4 minimum).</li>
              </ul>
              <p className="mb-4 text-white/80">
                The selection process is rigorous and highly competitive, consisting of online psychometric testing (Cut-e/Aon), a video interview, and a final assessment centre involving group exercises and a simulator aptitude test.
              </p>
            </>
          ),
        },
        {
          heading: "Costs and Financing",
          content: (
            <>
              <p className="mb-4 text-white/80">
                The Generation easyJet programme represents a massive financial commitment. The exact cost depends on whether you choose the CAE or Skyborne route, but you must budget for the following:
              </p>
              <ul className="list-disc pl-6 mb-6 text-white/80 space-y-2">
                <li><strong className="text-white">Tuition Fees:</strong> €102,942 at CAE (billed in euros). Skyborne pricing is comparable but billed in GBP.</li>
                <li><strong className="text-white">Living Expenses:</strong> Accommodation, food, and travel for 18-24 months (approx. £15,000 - £20,000).</li>
                <li><strong className="text-white">Medical & Assessment Fees:</strong> Class 1 Medical (£600+), selection fees, and CAA/EASA exam fees.</li>
              </ul>
              <div className="bg-white/5 border border-white/20 p-6 rounded-lg mb-6">
                <p className="text-white/80 font-semibold text-red-400 mb-2">Funding Warning</p>
                <p className="text-white/80">
                  As of 2026, no UK high-street bank offers unsecured pilot training loans. Candidates must rely on savings, remortgaging property, the Bank of Mum and Dad, or specialist aviation lenders like Lendwise (which often require property as collateral or charge high interest rates).
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "Generation easyJet vs BA Speedbird Academy",
          content: (
            <>
              <p className="mb-4 text-white/80">
                The two highest-profile cadet programmes in the UK are often compared, but they are fundamentally different financial propositions.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Feature</th>
                      <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Generation easyJet</th>
                      <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">BA Speedbird Academy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium">Training Cost</td>
                      <td className="px-4 py-3">€100,000+ (Self-Funded)</td>
                      <td className="px-4 py-3 text-green-400">£0 (Fully Funded by BA)</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium">Living Costs</td>
                      <td className="px-4 py-3">Self-Funded</td>
                      <td className="px-4 py-3">Self-Funded</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium">Acceptance Rate</td>
                      <td className="px-4 py-3">Approx. 3-5%</td>
                      <td className="px-4 py-3">Less than 1%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-white font-medium">Licence Outcome</td>
                      <td className="px-4 py-3">MPL (CAE) or ATPL (Skyborne)</td>
                      <td className="px-4 py-3">Frozen ATPL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4 text-white/80">
                While the BA Speedbird Academy is financially superior, it is exceptionally difficult to get into. The Generation easyJet programme remains one of the safest ways to self-fund your training, provided you can secure the capital and are comfortable with the risks of the MPL route.
              </p>
            </>
          ),
        },
      ]}
      sources={[
        { name: "easyJet Careers (Generation easyJet Programme)" },
        { name: "CAE Oxford Aviation Academy" },
        { name: "Skyborne Airline Academy" },
        { name: "UK Civil Aviation Authority (CAA) - MPL Regulations" }
      ]}
    />
  );
}
