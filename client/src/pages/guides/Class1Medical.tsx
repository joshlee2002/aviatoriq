import React from "react";
import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";
import Class1MedicalProcess from "@/components/diagrams/Class1MedicalProcess";
import { Link } from "wouter";

export default function Class1Medical() {
  return (
    <GuideLayout
      title="UK CAA Class 1 Medical: Complete 2026 Guide"
      subtitle="Everything you need to know about the UK CAA Class 1 Medical Certificate — what it tests, where to get it, what it costs in 2026, and the critical post-Brexit dual certificate situation."
      canonical="https://aviatorpath.com/guides/class-1-medical"
      metaDescription="UK CAA Class 1 Medical 2026: costs, exam process, eyesight, mental health, deferrals, renewals and when to speak to an AME/AeMC."
      readTime="12 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/class1-medical_c4a3b12e.jpg"
      medicalDisclaimer={true}
      medicalAuthority="UK CAA"
      regulatorName="UK CAA Medical"
      regulatorUrl="https://www.caa.co.uk/medical/"
      methodologySummary="Primary source: UK CAA AMS documentation, AME/AeMC pricing verified June 2026."
      methodologyDetail="All medical standards referenced in this guide are taken directly from the UK CAA Aeromedical Standards documentation and official AME/AeMC pricing pages, verified in June 2026. No secondary sources or forum posts were used for regulatory claims. Pricing was confirmed by direct review of Centreline, Birmingham AeMC, and Heathrow Medical Services public fee schedules."
      methodologySources={[
        { name: "UK CAA Medical", url: "https://www.caa.co.uk/medical/" },
        {
          name: "Centreline Aviation Medical",
          url: "https://www.centreline.co.uk/",
        },
        {
          name: "Birmingham AeMC",
          url: "https://www.birminghamaeromedical.co.uk/",
        },
      ]}
      ctaHref="/tools/medical-condition-lookup"
      ctaText="Check medical conditions"
      faqSchema={[
        {
          question: "How much does a UK CAA Class 1 medical cost in 2026?",
          answer:
            "UK CAA initial Class 1 medical costs: Centreline (London/Gatwick) £1,181 inc VAT; Birmingham AeMC £1,198 inc VAT; Heathrow Medical Services £1,377 inc VAT (combined UK+EASA). Renewals cost £297–£332 at most AMEs.",
        },
        {
          question: "Do I need a UK CAA or EASA Class 1 medical?",
          answer:
            "Since Brexit, UK CAA and EASA are completely separate systems with no mutual recognition. If you plan to fly for UK operators (BA, easyJet UK, Jet2, TUI, Loganair), you need a UK CAA medical. If you want to fly for EASA operators (Ryanair with Irish licence, Wizz Air, Vueling), you need an EASA medical. Most UK students get a combined UK+EASA medical to keep all options open.",
        },
        {
          question: "Can I become a pilot with anxiety or depression?",
          answer:
            "Mild, well-controlled anxiety or depression does not automatically disqualify you. The CAA assesses each case individually based on specialist psychiatric reports. Four SSRIs (citalopram, sertraline, fluoxetine, escitalopram) are now accepted under EASA/UK CAA rules for Class 1 holders, subject to a strict stability period and specialist review. An OML (Operational Multi-crew Limitation) is typically applied.",
        },
        {
          question: "How often do I need to renew my Class 1 medical?",
          answer:
            "Under 40: annually. Age 40 and over (for single-pilot commercial operations): every 6 months. For multi-crew airline operations, the standard renewal is annually until age 60, then every 6 months. An ECG is required from age 40 onwards at each renewal.",
        },
        {
          question: "What happens if I fail the colour vision test?",
          answer:
            "Failing the standard Ishihara plate test does not automatically disqualify you. You can proceed to the Colour Vision Medical Assessment (CVMA) — a more detailed test using a lantern or anomaloscope. If you pass the CVMA, you receive a Class 1 with an OML restriction (no flying as sole pilot at night or in IMC). If you fail the CVMA, you cannot hold a Class 1 medical.",
        },
        {
          question: "Should I get my Class 1 medical before starting training?",
          answer:
            "Yes — always. The CAA and every UK flight school strongly recommend getting your Class 1 medical before committing any significant funds to training. Discovering a disqualifying condition after spending £100,000 on an integrated course would be financially devastating.",
        },
      ]}
      relatedGuides={[
        {
          title: "How to Become a Pilot in the UK 2026",
          href: "/guides/how-to-become-a-pilot",
          time: "15 min",
        },
        {
          title: "Pilot Training Costs UK 2026",
          href: "/guides/pilot-training-costs",
          time: "8 min",
        },
        {
          title: "UK Integrated vs Modular ATPL 2026",
          href: "/guides/integrated-vs-modular",
          time: "12 min",
        },
        {
          title: "UK Airline Cadet Programmes 2026",
          href: "/guides/cadet-pilot-programmes-uk",
          time: "10 min",
        },
      ]}
      sources={[
        "UK Civil Aviation Authority (CAA) — Aeromedical requirements and guidance",
        "Heathrow Medical Services — Pricing and procedures (June 2026)",
        "Centreline Aviation Medical Services — Pricing and procedures (June 2026)",
        "Birmingham Aeromedical Centre — Pricing and procedures (June 2026)",
      ]}
      sections={[
        {
          heading: "Get Your Medical First — Before Anything Else",
          content: (
            <>
              <GuideScopeBanner country="UK" regulator="CAA" />
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6 text-red-900">
                <p className="font-semibold mb-2">Medical Disclaimer</p>
                <p className="text-sm">
                  The information in this guide is for educational purposes only
                  and does not constitute medical advice. Aviation medical
                  decisions are made on a case-by-case basis by certified
                  Aeromedical Examiners (AMEs) in accordance with CAA/EASA
                  regulations. Always consult an AME regarding your specific
                  medical history.
                </p>
              </div>
              <p>
                The single most important piece of advice in this guide:{" "}
                <strong>
                  book your Class 1 medical before you spend a single pound on
                  flight training.
                </strong>{" "}
                The CAA process makes the Class 1 medical the gateway to
                commercial pilot training, and reputable schools expect you to
                resolve it early.
              </p>
              <p className="text-sm p-3 rounded-lg my-4 bg-blue-50 border border-blue-100 text-blue-900">
                Use our free{" "}
                <Link
                  href="/tools/medical-condition-lookup"
                  className="text-blue-700 font-medium underline"
                >
                  Medical Condition Lookup Tool
                </Link>{" "}
                to check whether a specific condition is likely to require
                specialist review during your Class 1 application.
              </p>
              <p>
                If you discover a disqualifying condition after spending
                £100,000 on an integrated ATPL course, you have no recourse. The
                medical is the gateway. Everything else — training, licences,
                employment — depends on it. It takes approximately half a day
                and costs £950–£1,400. Do it first.
              </p>
            </>
          ),
        },
        {
          heading: "UK CAA vs EASA: The Post-Brexit Situation",
          content: (
            <>
              <p>
                Since 1 January 2021, the UK CAA and EASA operate as completely
                separate regulatory systems.{" "}
                <strong>
                  A UK CAA Class 1 medical has zero EASA validity, and an EASA
                  Class 1 medical has zero UK CAA validity.
                </strong>{" "}
                There is no mutual recognition.
              </p>
              <p>
                This matters because different airlines operate under different
                regulatory frameworks:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Certificate Needed
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Airlines
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        UK CAA only
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        British Airways, easyJet (UK ops), Jet2, TUI, Loganair,
                        any UK-registered operator
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        EASA only
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Ryanair (Irish licence), Wizz Air, Vueling, Norwegian,
                        any EASA-state operator
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Both (dual)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Keeping all options open; flying for both UK and EASA
                        operators
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Most UK student pilots get a{" "}
                <strong>combined UK+EASA medical</strong> at their initial
                examination. Some AeMCs offer combined UK CAA/EASA medical
                options, but availability, process and pricing vary. Check the
                AeMC directly before booking if you want both UK and EASA
                medical certificates.
              </p>
            </>
          ),
        },
        {
          heading: "Where to Get Your Initial Class 1 Medical",
          content: (
            <>
              <p>
                Your initial Class 1 medical must be conducted at a CAA-approved
                Aeromedical Centre (AeMC). In the UK, there are four AeMC
                locations. For renewals, you can use any CAA-registered
                Aeromedical Examiner (AME) — no AeMC visit required.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        AeMC
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Location
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        UK Only (Initial)
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Dual UK+EASA
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Renewal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Centreline (London)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Wimpole St, London
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        £1,181 inc VAT
                      </td>
                      <td className="px-4 py-3 text-gray-700">£1,350 ex VAT</td>
                      <td className="px-4 py-3 text-gray-700">£297</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Centreline (Gatwick)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Horley, Surrey
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        £1,181 inc VAT
                      </td>
                      <td className="px-4 py-3 text-gray-700">£1,350 ex VAT</td>
                      <td className="px-4 py-3 text-gray-700">£297</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Birmingham AeMC
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Birmingham Airport
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        £1,198 inc VAT
                      </td>
                      <td className="px-4 py-3 text-gray-700">£1,398 ex VAT</td>
                      <td className="px-4 py-3 text-gray-700">£332</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Heathrow Medical
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Longford, near Heathrow
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        N/A (EASA only: £957)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        £1,377 inc VAT
                      </td>
                      <td className="px-4 py-3 text-gray-700">£315</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 italic">
                Prices verified from AeMC websites, June 2026. Note that
                Heathrow Medical does not offer a standalone UK CAA-only initial
                — options are EASA-only (£957) or combined UK+EASA (£1,377).
              </p>
            </>
          ),
        },
        {
          heading: "What the Examination Tests",
          content: (
            <>
              <Class1MedicalProcess />
              <p>
                The initial Class 1 examination takes approximately four hours.
                The CAA specifies the following components:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Test
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        What It Checks
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Standard Required
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Medical history review
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Past illness, surgery, medication
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Full disclosure required
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Vision (distant)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Visual acuity each eye
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        6/6 or better (corrected); uncorrected 6/60 or better
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Colour vision (Ishihara)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Colour plate recognition
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Pass required; CVMA available if failed
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Audiometry
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Pure tone hearing test
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        No loss &gt;35dB at 500–2000Hz; &gt;50dB at 3000Hz
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        ECG (resting)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Heart rhythm and conduction
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Required at initial; required from age 40 at renewals
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Lung function (Spirometry)
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Asthma, COPD, lung capacity
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Normal function for age/height
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        Blood/Urine tests
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Haemoglobin, cholesterol, glucose
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        Normal range; no diabetes indicators
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        General physical exam
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        BMI, blood pressure, neurological
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        No significant abnormalities
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
