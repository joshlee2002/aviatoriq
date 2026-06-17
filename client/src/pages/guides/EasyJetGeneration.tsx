import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";
import CadetProgrammesTable from "@/components/tables/CadetProgrammesTable";

export default function EasyJetGeneration() {
  return (
    <GuideLayout
      title="easyJet Generation Pilot Programme 2026: MPL vs ATPL Routes"
      subtitle="A detailed breakdown of the easyJet cadet pathway. Understand the €100,000+ self-funded cost, the CAE MPL route vs the Skyborne ATPL route, and the conditional employment reality."
      canonical="https://aviatoriq.com/guides/easyjet-generation-pilot"
      metaDescription="easyJet Generation Pilot Programme 2026: Compare the CAE MPL and Skyborne ATPL routes. Understand the €100,000+ self-funded costs and conditional First Offic..."
      readTime="9 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/easyjet-generation_0954c6af.jpg"
      ctaHref="/tools/cadet-eligibility"
      ctaText="Check your cadet eligibility"
      faqSchema={[
        { question: "What is the easyJet Generation Pilot Programme?", answer: "The Generation easyJet programme is a mentored cadet pathway that trains pilots from zero experience. Successful graduates receive a conditional offer for an easyJet First Officer role, subject to passing all training, medical, and airline standards." },
        { question: "Does easyJet pay for the Generation pilot training?", answer: "No. The Generation easyJet programme is entirely self-funded by the cadet. The cost at CAE is approximately €102,942, plus living expenses and medical fees." },
        { question: "What is the difference between the CAE and Skyborne easyJet routes?", answer: "CAE Oxford delivers the Multi-Crew Pilot Licence (MPL) route, which is type-specific to the A320 and ties you to easyJet initially. Skyborne Airline Academy delivers a traditional Integrated ATPL route, which provides a more flexible 'frozen ATPL' upon graduation." },
        { question: "Is a job guaranteed at the end of the easyJet Generation programme?", answer: "No airline training programme guarantees a job. The pathway offers a conditional offer of employment, meaning you will be hired provided you pass all flight phases, simulator checks, line training, and easyJet's final recruitment standards." }
      ]}
      relatedGuides={[
        { title: "BA Speedbird Academy 2026", href: "/guides/ba-speedbird-academy", time: "10 min" },
        { title: "Ryanair Cadet Pilot Programme", href: "/guides/ryanair-cadet-programme", time: "8 min" },
        { title: "Integrated vs Modular ATPL Training", href: "/guides/integrated-vs-modular", time: "9 min" },
        { title: "Pilot Training Costs UK 2026", href: "/guides/pilot-training-costs", time: "8 min" },
      ]}
      sources={[
        "easyJet Careers — Generation easyJet official portal",
        "CAE Oxford Aviation Academy — easyJet MPL pricing and structure",
        "Skyborne Airline Academy — easyJet ATPL partnership details",
        "UK Civil Aviation Authority (CAA) — MPL Regulations"
      ]}
      sections={[
        {
          heading: "What Is the Generation easyJet Programme?",
          content: (
            <>
              <GuideScopeBanner country="UK/Europe" regulator="CAA/EASA" />
              <p>
                The Generation easyJet programme is a structured, "mentored" cadet pathway designed to take students with zero flying experience and train them specifically for the right seat of an easyJet Airbus A320.
              </p>
              <p className="text-sm p-3 rounded-lg my-4 bg-blue-50 border border-blue-100 text-blue-900">
                Not sure if you qualify? Try our free <Link href="/tools/cadet-eligibility" className="text-blue-700 font-medium underline">Cadet Eligibility Checker</Link> to see which airline programmes you match with.
              </p>
              <p>
                It is crucial to understand the financial reality upfront: <strong>easyJet does not pay for your training.</strong> This is a self-funded programme costing upwards of €100,000. What easyJet provides is a "conditional offer of employment" before you begin training, meaning that if you pass all phases to their required standard, a First Officer job is waiting for you.
              </p>
            </>
          ),
        },
        {
          heading: "Current Status: UK Cadet Programmes (2026)",
          content: (
            <>
              <p>
                Below is the verified status of the easyJet Generation programme alongside other major UK cadet programmes.
              </p>
              <CadetProgrammesTable country="UK" className="my-6" />
            </>
          ),
        },
        {
          heading: "Two Training Providers, Two Different Licences",
          content: (
            <>
              <p>
                As of 2026, easyJet partners with two different flight schools to deliver the Generation programme, and they offer fundamentally different licence outcomes:
              </p>
              <h3 className="text-xl font-bold mt-6 mb-3">1. CAE Oxford (The MPL Route)</h3>
              <p>
                CAE delivers the Multi-Crew Pilot Licence (MPL). The MPL is designed purely for airline operations. You spend less time in small single-engine aircraft and much more time in an A320 simulator learning easyJet's Standard Operating Procedures (SOPs).
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 mb-6">
                <li><strong>The Catch:</strong> An MPL is type-specific and operator-specific. If you fail easyJet line training, or if easyJet stops hiring due to an economic downturn, your licence is restricted to easyJet until you meet the requirements to unfreeze it to a full ATPL.</li>
              </ul>
              <h3 className="text-xl font-bold mt-6 mb-3">2. Skyborne Airline Academy (The ATPL Route)</h3>
              <p>
                Skyborne delivers a traditional Integrated ATPL course. You do more real-world flying in light aircraft and graduate with a standard "Frozen ATPL" before completing your A320 type rating.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 mb-6">
                <li><strong>The Benefit:</strong> A Frozen ATPL is universally recognised. If your easyJet job offer falls through, you can take this licence and apply to Ryanair, Jet2, Wizz Air, or any other commercial operator immediately.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Entry Requirements & Selection",
          content: (
            <>
              <p>
                The formal minimum requirements to apply for the Generation easyJet programme are:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 mb-6">
                <li>Minimum age of 18 to commence training.</li>
                <li>Right to live and work in the UK (or EU/EAA/Switzerland for the European pathway).</li>
                <li>Minimum 5 GCSEs at grade C/4 or above, including Maths, English, and a Science.</li>
                <li>Ability to obtain a CAA or EASA Class 1 Medical Certificate.</li>
                <li>Fluent in English (ICAO Level 4 minimum).</li>
              </ul>
              <p>
                The selection process is rigorous and highly competitive, consisting of online psychometric testing (Cut-e/Aon), a video interview, and a final assessment centre involving group exercises and a simulator aptitude test.
              </p>
            </>
          ),
        },
        {
          heading: "Costs and Financing",
          content: (
            <>
              <p>
                The Generation easyJet programme represents a massive financial commitment. The exact cost depends on whether you choose the CAE or Skyborne route, but you must budget for the following:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 mb-6">
                <li><strong>Tuition Fees:</strong> €102,942 at CAE (billed in euros). Skyborne pricing is comparable but billed in GBP.</li>
                <li><strong>Living Expenses:</strong> Accommodation, food, and travel for 18-24 months (approx. £15,000 - £25,000).</li>
                <li><strong>Medical & Assessment Fees:</strong> Class 1 Medical (£600+), selection fees, and CAA/EASA exam fees.</li>
              </ul>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6 text-red-900">
                <p className="font-semibold mb-2">Funding Warning</p>
                <p className="text-sm">
                  As of 2026, no UK high-street bank offers unsecured pilot training loans. Candidates must rely on savings, remortgaging property, the Bank of Mum and Dad, or specialist aviation lenders like Lendwise (which assess future earnings but carry high interest rates). The financial risk of self-funded training sits entirely with you.
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "Generation easyJet vs BA Speedbird Academy",
          content: (
            <>
              <p>
                The two highest-profile cadet programmes in the UK are often compared, but they are fundamentally different financial propositions.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">Feature</th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">Generation easyJet</th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">BA Speedbird Academy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Training Cost</td>
                      <td className="px-4 py-3 text-gray-700">€100,000+ (Self-Funded)</td>
                      <td className="px-4 py-3 font-semibold text-green-700">£0 (Fully Funded by BA)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Living Costs</td>
                      <td className="px-4 py-3 text-gray-700">Self-Funded</td>
                      <td className="px-4 py-3 text-gray-700">Self-Funded</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Acceptance Rate</td>
                      <td className="px-4 py-3 text-gray-700">Approx. 3-5%</td>
                      <td className="px-4 py-3 text-gray-700">Less than 1%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Licence Outcome</td>
                      <td className="px-4 py-3 text-gray-700">MPL (CAE) or ATPL (Skyborne)</td>
                      <td className="px-4 py-3 text-gray-700">Frozen ATPL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                While the BA Speedbird Academy is financially superior, it is exceptionally difficult to get into. The Generation easyJet programme remains one of the safest ways to self-fund your training, provided you can secure the capital and are comfortable with the risks of the MPL route.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
