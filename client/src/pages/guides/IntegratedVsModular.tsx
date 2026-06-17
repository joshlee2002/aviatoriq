import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";
import FlightSchoolFeesTable from "@/components/tables/FlightSchoolFeesTable";

export default function IntegratedVsModular() {
  return (
    <GuideLayout
      title="Integrated vs Modular ATPL Training UK 2026: Which Is Right for You?"
      subtitle="An honest, data-driven comparison of the two main routes to an ATPL — including verified 2026 costs, real timelines, airline acceptance, and a decision framework for your situation."
      canonical="https://aviatoriq.com/guides/integrated-vs-modular"
      metaDescription="Integrated vs modular ATPL training UK 2026: compare cost, timeline, airline recognition, flexibility and which route fits your budget."
      readTime="12 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/integrated-training_a566fa21.jpg"
      financeDisclaimer={true}
      regulatorName="UK CAA Licensing"
      regulatorUrl="https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/"
      methodologySummary="Route comparison data sourced from UK CAA Part-FCL documentation and school prospectuses, verified June 2026."
      methodologyDetail="All route comparisons, cost ranges, and timeline estimates in this guide are sourced from UK CAA Part-FCL documentation, official school prospectuses, and BALPA guidance. No figures were estimated without a named source. Where exact costs are not publicly confirmed, this is stated explicitly."
      methodologySources={[
        {
          name: "UK CAA Part-FCL",
          url: "https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/aeroplanes/atpl/",
        },
        {
          name: "BALPA Training Guide",
          url: "https://www.balpa.org/becoming-a-pilot/",
        },
      ]}
      ctaHref="/quiz"
      ctaText="Start your career assessment"
      faqSchema={[
        {
          question:
            "What is the difference between integrated and modular ATPL training?",
          answer:
            "Integrated training is a single full-time programme (18–24 months, £90,000–£115,000) that takes you from zero to frozen ATPL at one academy. Modular training lets you complete each licence stage separately (2–4 years, £60,000–£80,000), allowing you to keep working between phases.",
        },
        {
          question:
            "Is integrated or modular training better for getting an airline job?",
          answer:
            "Both routes lead to the same frozen ATPL qualification. Major UK airlines including British Airways, easyJet, Ryanair, and Jet2 accept both integrated and modular graduates. What matters most is your first-time pass rate, simulator performance, and interview preparation.",
        },
        {
          question: "Can I do modular ATPL training while working full-time?",
          answer:
            "Yes. Modular training is specifically designed to allow this. You complete modules in stages — PPL, night rating, ATPL theory, hour building, CPL, MEP, instrument rating, and APS MCC — around your existing commitments. The ATPL theory phase is largely distance-learning.",
        },
        {
          question: "Which is cheaper, integrated or modular ATPL in the UK?",
          answer:
            "Modular is significantly cheaper: approximately £60,000–£80,000 at a UK school vs £90,000–£115,000 for integrated. However, modular takes longer, so you must factor in living costs and the opportunity cost of an extended training timeline.",
        },
        {
          question: "What is the MPL route?",
          answer:
            "The Multi-Pilot Licence (MPL) is a third training route, only available through sponsored airline cadet programmes such as the easyJet Generation Pilot programme. It is highly structured and leads directly to a First Officer role, but the licence is type-specific and restricted to the sponsoring airline until you unfreeze it.",
        },
      ]}
      relatedGuides={[
        {
          title: "Best Flight Schools in the UK 2026",
          href: "/guides/best-flight-schools-uk-2026",
          time: "14 min",
        },
        {
          title: "Pilot Training Costs UK 2026",
          href: "/guides/pilot-training-costs",
          time: "8 min",
        },
        {
          title: "UK Airline Cadet Programmes",
          href: "/guides/cadet-pilot-programmes-uk",
          time: "10 min",
        },
        {
          title: "How to Finance Pilot Training UK",
          href: "/guides/how-to-finance-pilot-training-uk",
          time: "9 min",
        },
      ]}
      sources={[
        "UK Civil Aviation Authority (CAA) — Licensing requirements and definitions",
        "BALPA (British Airline Pilots' Association) — Route comparisons and cost data",
        "Official flight school prospectuses (CAE, Skyborne, FTEJerez, Stapleford, FTA) — 2026 pricing",
      ]}
      sections={[
        {
          heading: "The Three Routes to a Frozen ATPL",
          content: (
            <>
              <GuideScopeBanner country="UK" regulator="CAA" />
              <p>
                Aspiring airline pilots in the UK have three routes to a frozen
                ATPL: integrated, modular, and MPL. The integrated and modular
                routes lead to the same standard frozen ATPL qualification. MPL
                routes are airline-specific and may be funded, partly funded or
                self-funded depending on the programme. Understanding the real
                differences — not the marketing version — is the most important
                decision you will make before spending £60,000–£115,000.
              </p>
              <p className="text-sm p-3 rounded-lg my-4 bg-blue-50 border border-blue-100 text-blue-900">
                Not sure where to start? Take our free{" "}
                <Link
                  href="/quiz"
                  className="text-blue-700 font-medium underline"
                >
                  Pilot Career Assessment
                </Link>{" "}
                to get a personalised training roadmap in under five minutes.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Feature
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Integrated ATPL
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Modular ATPL
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        MPL (Sponsored)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        2026 Cost (UK)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        £90,000–£115,000
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        £60,000–£80,000
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        £0 to £100k+ (varies)
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Timeline
                      </td>
                      <td className="px-4 py-3 text-gray-700">18–24 months</td>
                      <td className="px-4 py-3 text-gray-700">2–4 years</td>
                      <td className="px-4 py-3 text-gray-700">18–24 months</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Structure
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Full-time, one school
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Self-paced, multiple schools
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Full-time, airline-directed
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Work alongside?
                      </td>
                      <td className="px-4 py-3 text-gray-700">No</td>
                      <td className="px-4 py-3 text-gray-700">
                        Yes (between phases)
                      </td>
                      <td className="px-4 py-3 text-gray-700">No</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Airline flexibility
                      </td>
                      <td className="px-4 py-3 text-gray-700">Any airline</td>
                      <td className="px-4 py-3 text-gray-700">Any airline</td>
                      <td className="px-4 py-3 text-gray-700">
                        Sponsoring airline only
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "Integrated ATPL: What You're Actually Paying For",
          content: (
            <>
              <p>
                An integrated ATPL programme takes a cadet from zero experience
                to a frozen ATPL in a single, continuous, full-time course at
                one academy.
              </p>
              <FlightSchoolFeesTable
                trainingType="Integrated ATPL"
                className="my-6"
              />
              <p>
                The price includes everything: ATPL theory, all flying phases
                (PPL through to APS MCC), accommodation during the overseas
                flight phase (in some cases), examiner fees, and often a
                training guarantee that covers additional hours if you need
                extra support. What it does not include is the type rating — the
                aircraft-specific training required to join an airline — which
                costs an additional £20,000–£30,000.
              </p>
              <p>
                The genuine advantage of integrated training is not the
                qualification itself (which is identical to modular) but the
                structure. You are in a cohort, progressing through defined
                phases, with an academy managing your schedule. For students who
                want the fastest possible route to a frozen ATPL and have the
                capital secured, integrated is the right choice.
              </p>
            </>
          ),
        },
        {
          heading: "Modular ATPL: The Real 2026 Cost Breakdown",
          content: (
            <>
              <p>
                Modular training means completing each phase of the ATPL
                separately, at your own pace, and often at different schools.
                The total cost at a UK school in 2026 is approximately
                £60,000–£80,000 — significantly less than integrated.
              </p>
              <FlightSchoolFeesTable
                trainingType="Modular ATPL"
                className="my-6"
              />
              <p>
                The primary advantage of modular is financial flexibility. You
                pay as you go, phase by phase. You can continue working in your
                current career to fund the training, reducing the need for
                massive unsecured loans. You also have the freedom to switch
                schools if you are unhappy with the quality of instruction,
                whereas integrated students are locked into one provider.
              </p>
              <p>
                The main disadvantage is the timeline. Because you are managing
                your own schedule, dealing with UK weather delays, and balancing
                work commitments, modular training rarely takes less than two
                years and often takes three to four.
              </p>
            </>
          ),
        },
        {
          heading: "The Employment Myth: Do Airlines Prefer Integrated?",
          content: (
            <>
              <p>
                Historically, there was a perception that major airlines
                preferred integrated graduates. In 2026, this is largely a myth.
              </p>
              <p>
                Major UK airlines including British Airways, easyJet, Ryanair,
                Jet2, and Loganair actively recruit both integrated and modular
                graduates. When you sit in a simulator assessment for an airline
                interview, the assessors do not care which route you took — they
                care whether you can fly a raw-data ILS approach, manage a
                failure, and demonstrate strong Multi-Crew Cooperation (MCC)
                skills.
              </p>
              <p>
                However, integrated schools do offer dedicated placement teams
                and strong airline relationships. If you attend a major
                integrated academy, you may get your CV in front of airline
                recruiters faster. Modular students must be more proactive in
                their networking and job hunting.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
