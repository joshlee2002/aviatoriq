import { Link } from "wouter";
import GuideLayout from "@/components/GuideLayout";

export default function FaaMedicalClass1() {
  return (
    <GuideLayout
      title="FAA Medical Class 1 Certificate 2026: Requirements, Costs & Process"
      subtitle="A 2026 guide to the FAA First Class Medical — vision and hearing standards, AME exam process, potentially disqualifying conditions, special issuances, and cost ranges to verify."
      readTime="12 min read"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Medical Requirements"
      canonical="https://aviatoriq.com/us/guides/faa-medical-class-1"
      metaDescription="FAA First Class Medical Certificate 2026: vision standards, AME-set costs, duration rules, Special Issuance and potentially disqualifying conditions explained."
      ctaText="Check your FAA medical condition"
      ctaHref="/us/medical-lookup"
      faqSchema={[
        { question: "What are the vision requirements for an FAA Class 1 Medical?", answer: "Distant vision must be 20/20 or better in each eye separately, with or without correction. Near vision must be 20/40 or better at 16 inches. Intermediate vision (20/40 at 32 inches) is required for pilots aged 50 and over. Normal colour vision is required; colour vision deficiency may result in a limitation." },
        { question: "How much does an FAA Class 1 Medical cost?", answer: "FAA Class 1 Medical exams typically cost $150–$400 depending on the AME and location. An EKG (required at age 35 and over) adds $50–$150. There is no set FAA fee — AMEs set their own prices." },
        { question: "How long is an FAA Class 1 Medical valid?", answer: "For ATP privileges: 12 calendar months if under 40, 6 calendar months if 40 or over. For commercial pilot privileges (not ATP): 12 calendar months at any age. After the First Class duration ends, the certificate may still support lower-class privileges for the applicable duration if the pilot otherwise meets FAA rules." },
        { question: "What conditions disqualify you from an FAA Class 1 Medical?", answer: "Statutory disqualifying conditions include angina pectoris, cardiac valve replacement, coronary heart disease, epilepsy, psychosis, bipolar disorder, substance dependence, and diabetes requiring insulin. Many conditions can be considered for Special Issuance with documentation." },
        { question: "Can I fly with depression or anxiety and get an FAA Class 1 Medical?", answer: "Yes, in many cases. The FAA accepts four specific SSRIs (fluoxetine, sertraline, citalopram, escitalopram) under the SSRI protocol after a 6-month stable period. Anxiety managed without medication may be certifiable. Full disclosure to your AME is essential." },
        { question: "What is BasicMed and who can use it?", answer: "BasicMed is an alternative to the traditional FAA medical certificate for private pilots. It requires a physical exam by any state-licensed physician every 48 months and an online course every 24 months. It allows flying aircraft under 6,000 lbs with up to 6 occupants at altitudes below 18,000 ft. It cannot be used for commercial operations or ATP privileges." }
      ]}
      sections={[
        {
          heading: "The Three FAA Medical Classes: Which One Do You Need?",
          content: (
            <>
              <p>
                The FAA issues three classes of medical certificate, each corresponding to different piloting privileges. The class you need depends on what you intend to fly and in what capacity.
              </p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Use our free <Link href="/us/medical-lookup" className="text-blue-400 underline">FAA Medical Condition Lookup Tool</Link> to check whether a specific condition is likely to affect your FAA medical application.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Class</th>
                      <th className="px-4 py-3 font-semibold">Required For</th>
                      <th className="px-4 py-3 font-semibold">Validity (Under 40)</th>
                      <th className="px-4 py-3 font-semibold">Validity (40+)</th>
                      <th className="px-4 py-3 font-semibold">Typical Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Class 1 (First Class)</td>
                      <td className="px-4 py-3">Airline Transport Pilot (ATP); commercial operations requiring ATP</td>
                      <td className="px-4 py-3">12 months</td>
                      <td className="px-4 py-3">6 months</td>
                      <td className="px-4 py-3">$150–$400</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Class 2 (Second Class)</td>
                      <td className="px-4 py-3">Commercial Pilot Certificate (not requiring ATP)</td>
                      <td className="px-4 py-3">12 months</td>
                      <td className="px-4 py-3">12 months</td>
                      <td className="px-4 py-3">$100–$300</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Class 3 (Third Class)</td>
                      <td className="px-4 py-3">Private Pilot, Student Pilot, Recreational Pilot</td>
                      <td className="px-4 py-3">60 months</td>
                      <td className="px-4 py-3">24 months</td>
                      <td className="px-4 py-3">$75–$200</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">BasicMed</td>
                      <td className="px-4 py-3">Private pilot operations only (aircraft under 6,000 lbs, max 6 occupants, below 18,000 ft)</td>
                      <td className="px-4 py-3">48 months (physician exam)</td>
                      <td className="px-4 py-3">48 months</td>
                      <td className="px-4 py-3">$50–$150</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                When a higher-class medical is no longer usable for its highest privilege, it may still support lower-class privileges for the applicable FAA duration. For example, a First Class medical issued before age 40 can continue to support lower-class privileges for longer than the First Class ATP duration, if the pilot otherwise meets FAA rules.
              </p>
            </>
          ),
        },
        {
          heading: "FAA Class 1 Medical Requirements",
          content: (
            <>
              <p>
                The Class 1 standards are set out in 14 CFR Part 67, Subpart B. The examination is conducted by an FAA-authorized Aviation Medical Examiner (AME) and covers the following domains:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Domain</th>
                      <th className="px-4 py-3 font-semibold">Class 1 Standard</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Distant vision</td>
                      <td className="px-4 py-3">20/20 or better in each eye (with or without correction)</td>
                      <td className="px-4 py-3">Glasses and contact lenses are permitted</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Near vision</td>
                      <td className="px-4 py-3">20/40 or better in each eye at 16 inches</td>
                      <td className="px-4 py-3">Reading glasses permitted</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Intermediate vision</td>
                      <td className="px-4 py-3">20/40 or better in each eye at 32 inches</td>
                      <td className="px-4 py-3">Required for pilots aged 50 and over only</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Colour vision</td>
                      <td className="px-4 py-3">Ability to perceive colours necessary for safe flight</td>
                      <td className="px-4 py-3">Tested with pseudoisochromatic plates. Failure may result in a SODA (Statement of Demonstrated Ability) or limitation.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Hearing</td>
                      <td className="px-4 py-3">Conversational voice at 6 feet (back to examiner), or audiometric test</td>
                      <td className="px-4 py-3">Hearing aids are permitted if they meet FAA standards</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Blood pressure</td>
                      <td className="px-4 py-3">No specific numerical limit in regulations; AME uses clinical judgment</td>
                      <td className="px-4 py-3">Controlled hypertension with medication is generally acceptable</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Electrocardiogram (EKG)</td>
                      <td className="px-4 py-3">Required at initial Class 1 exam at age 35 and over</td>
                      <td className="px-4 py-3">Adds $50–$150 to the exam cost</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Urinalysis</td>
                      <td className="px-4 py-3">Required at every exam</td>
                      <td className="px-4 py-3">Screens for diabetes, kidney disease, and other conditions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "The Application Process: MedXPress and Your AME Appointment",
          content: (
            <>
              <p>
                The process for obtaining an FAA medical certificate has two steps:
              </p>

              <p>
                <strong>Step 1: Complete FAA Form 8500-8 via MedXPress.</strong> Before your AME appointment, complete the application at <a href="https://medxpress.faa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">medxpress.faa.gov</a>. This form requires a detailed medical history, current medications, and any prior FAA medical actions. Complete honesty is essential — the FAA cross-references with the National Driver Register, Social Security Administration, and other databases. Omissions can result in certificate denial or criminal prosecution. You will receive a confirmation number to bring to your appointment.
              </p>

              <p>
                <strong>Step 2: Your AME examination.</strong> Schedule an appointment with an FAA-authorized Aviation Medical Examiner (AME) using the <a href="https://amsrvs.ama.org/amsrvs/default.asp" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">FAA AME Locator</a>. The examination typically takes 30–45 minutes and includes a physical examination, vision and hearing tests, blood pressure measurement, urinalysis, and (if aged 35+) an EKG.
              </p>

              <p>
                If the AME finds no disqualifying conditions, they can issue your certificate on the spot. If a condition requires further review, the AME will defer your application to the FAA Aerospace Medical Certification Division (AMCD) in Oklahoma City. A deferral is not a denial — it means the FAA needs more information before making a decision.
              </p>
            </>
          ),
        },
        {
          heading: "Disqualifying Conditions and Special Issuances",
          content: (
            <>
              <p>
                14 CFR Part 67 lists medical standards and conditions that can require denial or FAA review unless the applicant qualifies for FAA authorization such as Special Issuance. Treat this as a regulator/AME decision, not a self-diagnosis checklist.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold">Disqualifying Conditions</th>
                      <th className="px-4 py-3 font-semibold">Special Issuance Possible?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Cardiovascular</td>
                      <td className="px-4 py-3">Angina pectoris, cardiac valve replacement, coronary heart disease, heart replacement, permanent cardiac pacemaker</td>
                      <td className="px-4 py-3">Yes — with extensive cardiology documentation and favourable prognosis</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Neurological</td>
                      <td className="px-4 py-3">Epilepsy, unexplained loss of consciousness, transient loss of neurological function</td>
                      <td className="px-4 py-3">Rarely — epilepsy is very difficult to certify for Class 1</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Mental Health</td>
                      <td className="px-4 py-3">Bipolar disorder, psychosis, personality disorder manifested by overt acts, substance dependence</td>
                      <td className="px-4 py-3">Bipolar: rarely. Substance dependence: possible after documented sobriety period.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Metabolic</td>
                      <td className="px-4 py-3">Diabetes mellitus requiring hypoglycaemic medications (including insulin)</td>
                      <td className="px-4 py-3">Yes — insulin-treated diabetes is now certifiable under strict monitoring protocols</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Depression and SSRIs:</strong> The FAA accepts four specific SSRIs under the SSRI protocol: fluoxetine (Prozac), sertraline (Zoloft), citalopram (Celexa), and escitalopram (Lexapro). To be considered, the pilot must have been on a stable dose for at least 6 months with no significant side effects, and must not be taking the medication for a disqualifying condition. Full disclosure to your AME is essential — flying on an undisclosed SSRI is a serious violation.
              </p>

              <p>
                <strong>ADHD:</strong> ADHD history is evaluated case by case, and stimulant medications such as Adderall or Ritalin are generally not compatible with flying while used. Applicants may need FAA-specified documentation and neuropsychological evaluation before certification can be considered. See our <a href="/us/guides/adhd-faa-medical" className="text-blue-400 hover:underline">ADHD and FAA Medical guide</a> for the full process.
              </p>
            </>
          ),
        },
        {
          heading: "BasicMed: The Alternative for Private Pilots",
          content: (
            <>
              <p>
                Since 2017, private pilots have had an alternative to the traditional FAA medical certificate: <strong>BasicMed</strong>. Under BasicMed, you can fly without an FAA medical certificate if you meet all of the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 my-4">
                <li>You held a valid FAA medical certificate at any time on or after 14 July 2006</li>
                <li>You have a physical examination by any state-licensed physician every 48 months</li>
                <li>You complete the online BasicMed course every 24 months</li>
                <li>You fly an aircraft with a maximum certificated take-off weight of 6,000 lbs or less</li>
                <li>You carry no more than 5 passengers (6 occupants total)</li>
                <li>You fly at altitudes below 18,000 ft MSL and at airspeeds below 250 knots</li>
                <li>You do not fly for compensation or hire</li>
              </ul>
              <p>
                BasicMed cannot be used for commercial operations or ATP privileges, and international use depends on the destination authority. If your goal is an airline career, plan around First Class medical eligibility. If you are flying recreationally, BasicMed may be simpler and cheaper if you meet its limits.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50">
                 Federal Aviation Administration. "14 CFR Part 67 — Medical Standards and Certification." <em>ecfr.gov</em>. Accessed June 2026.<br/>
                 Federal Aviation Administration. "MedXPress." <em>medxpress.faa.gov</em>. Accessed June 2026.<br/>
                 Federal Aviation Administration. "FAA AME Locator." <em>amsrvs.ama.org</em>. Accessed June 2026.<br/>
                 Federal Aviation Administration. "BasicMed." <em>faa.gov/licenses_certificates/airmen_certification/basic_med</em>. Accessed June 2026.<br/>
                 Federal Aviation Administration. "SSRI Protocol." <em>faa.gov/about/office_org/headquarters_offices/avs/offices/aam/ame/guide/app_process/exam_tech/item47/amd/anti</em>. Accessed June 2026.
              </p>
            </>
          ),
        }
      ]}
      relatedGuides={[
        { title: "ADHD and the FAA Medical Certificate", href: "/us/guides/adhd-faa-medical", time: "10 min" },
        { title: "FAA Medical Class 2 Requirements", href: "/us/guides/faa-medical-class-2", time: "8 min" },
        { title: "FAA Medical Class 3 Requirements", href: "/us/guides/faa-medical-class-3", time: "7 min" },
        { title: "How to Become a Pilot in the USA", href: "/us/guides/how-to-become-a-pilot", time: "15 min" },
      ]}
    
      sources={[
    { name: "UK Federal Aviation Administration (CAA)" },
    { name: "EASA Part-MED", url: "https://www.easa.europa.eu/en/document-library/regulations/commission-regulation-eu-no-11782011" },
    { name: "FAA" },
    { name: "CASA" },
  ]}/>
  );
}
