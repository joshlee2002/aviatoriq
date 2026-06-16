import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function EasaMedicalClass1() {
  return (
    <GuideLayout
      title="EASA Class 1 Medical Certificate: The Complete 2026 Guide for European Pilots"
      subtitle="EASA Class 1 medical requirements, process, costs, and validity for aspiring and current commercial pilots in Europe."
      readTime="15 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Pilot Medicals"
      canonical="https://aviatoriq.com/europe/guides/easa-medical-class-1"
      metaDescription="Detailed guide on EASA Class 1 medical certificate for European pilots, covering requirements, examination process, 2026 costs, and validity."
      ctaText="Check your medical condition"
      ctaHref="/tools/medical-condition-lookup"
      sections={[
        {
          heading: "Introduction",
          content: (
            <>
              <p>The EASA Class 1 medical certificate is the foundational requirement for any pilot intending to fly commercially within the European Union and other EASA member states. Whether your goal is to become an Airline Transport Pilot (ATPL), a Commercial Pilot (CPL), or a Multi-crew Pilot (MPL), this certificate is mandatory. It represents the strictest aviation medical standard in Europe, meticulously assessing cardiovascular health, vision, hearing, mental health, and neurological fitness. This guide covers the exact requirements, the examination process at approved Aeromedical Centres (AeMCs) across Europe, real 2026 costs by country, and what to do if you have a condition that may affect your certification.</p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Use our free <Link href="/tools/medical-condition-lookup" className="text-blue-400 underline">Medical Condition Lookup Tool</Link> to check whether a specific condition is likely to affect your Class 1 medical application.
              </p>
            </>
          )
        },
        {
          heading: "What is the EASA Class 1 Medical Certificate?",
          content: (
            <>
              <p>A Class 1 medical certification is non-negotiable for anyone exercising commercial pilot privileges in EASA member states. The standards are deliberately stringent because commercial operations involve passenger safety and extended duty periods. A Class 1 certificate automatically includes Class 2 (private pilot) and LAPL (Light Aircraft Pilot Licence) privileges. Governed by Part-MED (Annex IV to EU Regulation 1178/2011), the certificate is recognized across all 31 EASA member states without additional formalities.</p>
              <h3>Who Needs a Class 1 Medical?</h3>
              <ul>
                <li>Airline Transport Pilots (ATPL)</li>
                <li>Commercial Pilots (CPL)</li>
                <li>Multi-crew Pilots (MPL)</li>
                <li>Flight instructors exercising CPL privileges</li>
                <li>Any pilot receiving compensation for flying</li>
              </ul>
              <p>It is highly recommended to obtain your Class 1 medical before commencing expensive commercial pilot training. An integrated ATPL course can cost between €60,000 and €120,000. Discovering a disqualifying condition after starting training can be financially devastating.</p>
            </>
          )
        },
        {
          heading: "Medical Requirements and Standards",
          content: (
            <>
              <p>The Class 1 requirements cover seven primary body systems. Each is assessed at every examination, though the depth of certain tests varies by age.</p>
              <h3>Vision Requirements</h3>
              <p>Vision testing is the most detailed part of the Class 1 examination. It covers acuity at three distances, color perception, visual fields, eye muscle balance, and refractive error. Corrected vision is acceptable, provided it meets the standards.</p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10"><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Test</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Requirement</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Notes</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Distant vision</td><td className="px-4 py-3 text-white/80">6/9 each eye, 6/6 both</td><td className="px-4 py-3 text-white/80">With or without correction</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Near vision</td><td className="px-4 py-3 text-white/80">N5 at 30-50 cm</td><td className="px-4 py-3 text-white/80">Reading small print (charts, checklists)</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Intermediate vision</td><td className="px-4 py-3 text-white/80">N14 at 100 cm</td><td className="px-4 py-3 text-white/80">Instrument panel reading distance</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Colour vision</td><td className="px-4 py-3 text-white/80">Ishihara plates (initial)</td><td className="px-4 py-3 text-white/80">Lantern test (CAD) if Ishihara failed</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Refractive limits</td><td className="px-4 py-3 text-white/80">+5.0 to -6.0 diopters</td><td className="px-4 py-3 text-white/80">Max 2.0 astigmatism, max 2.0 anisometropia</td></tr>
                </tbody>
              </table>
              <p>If you wear correction, you must bring your current optician prescription to the exam. Contact lenses must be monofocal and well-tolerated. A VDL (distant correction) or VML (multifocal correction) limitation will be endorsed on your certificate.</p>
              <h3>Hearing Requirements</h3>
              <p>Class 1 requires pure tone audiometry at every examination, plus a conversational voice test. The audiometry measures hearing sensitivity across four frequencies to ensure you can hear radio communications and cockpit aural warnings.</p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10"><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Frequency</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Maximum Loss (each ear)</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">What It Tests</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">500 Hz</td><td className="px-4 py-3 text-white/80">35 dB</td><td className="px-4 py-3 text-white/80">Low-frequency sounds (engine hum)</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">1000 Hz</td><td className="px-4 py-3 text-white/80">35 dB</td><td className="px-4 py-3 text-white/80">Speech range (ATC communications)</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">2000 Hz</td><td className="px-4 py-3 text-white/80">35 dB</td><td className="px-4 py-3 text-white/80">Speech clarity and consonants</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">3000 Hz</td><td className="px-4 py-3 text-white/80">50 dB</td><td className="px-4 py-3 text-white/80">Aural warnings (more tolerance allowed)</td></tr>
                </tbody>
              </table>
              <p>Hearing aids are permitted if they are well-tolerated and suitable for aviation purposes, resulting in a HAL (Hearing Aid Limitation) endorsement.</p>
              <h3>Cardiovascular Health</h3>
              <p>Cardiovascular assessment intensifies with age. The ECG schedule is strictly regulated:</p>
              <ul>
                <li>Initial examination: Required</li>
                <li>Under 30: Every 5 years</li>
                <li>Ages 30-39: Every 2 years</li>
                <li>Ages 40-49: Every year</li>
                <li>Ages 50+: Every revalidation/renewal exam</li>
              </ul>
              <p>Blood pressure at or above 160/95 mmHg at examination is disqualifying.</p>
              <h3>Other Systems</h3>
              <ul>
                <li><strong>Respiratory & Metabolic:</strong> Urinalysis checks for sugar, protein, and blood. Diabetes management with insulin is generally disqualifying, though well-controlled Type 2 diabetes on oral medication may be certifiable with an OML limitation.</li>
                <li><strong>Neurological:</strong> Checks coordination, balance, reflexes, and motor/sensory function. History of epilepsy or unexplained loss of consciousness requires referral.</li>
                <li><strong>Mental Health:</strong> A clinical assessment is part of every exam. Stable conditions on approved medications are often certifiable, but concealment is strictly prohibited and carries severe consequences.</li>
              </ul>
            </>
          )
        },
        {
          heading: "The Examination Process",
          content: (
            <>
              <p>Initial Class 1 examinations take approximately 3-4 hours and must be conducted at an Aeromedical Centre (AeMC). Routine renewals can be done by any Aeromedical Examiner (AME) with Class 1 privileges.</p>
              <h3>What to Expect on Exam Day</h3>
              <ol>
                <li><strong>Medical History Review (30-45 min):</strong> Detailed discussion of declared medical history.</li>
                <li><strong>Clinical Examinations (60-90 min):</strong> Vision, hearing, ECG, blood/urine tests, physical exam, and drug/alcohol screening (initial only).</li>
                <li><strong>Final Assessment (30-60 min):</strong> Review of results. If fit, the certificate is often issued the same day.</li>
              </ol>
              <h3>Documentation Checklist</h3>
              <ul>
                <li>Photo ID (Passport or national identity card)</li>
                <li>Previous medical certificate (for renewals)</li>
                <li>Current optician prescription (if applicable)</li>
                <li>Medical records for any declared conditions</li>
                <li>Specialist reports (if previously referred)</li>
                <li>Medication list with exact dosages</li>
              </ul>
            </>
          )
        },
        {
          heading: "2026 Costs by Country",
          content: (
            <>
              <p>Class 1 medical costs vary enormously across Europe, though the certificate is identical and valid across all EASA states. Many pilots travel to Eastern Europe for their initial examination to save money.</p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10"><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Country</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Initial Cost (EUR)</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Renewal Cost (EUR)</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Notes</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Bulgaria</td><td className="px-4 py-3 text-white/80">€150</td><td className="px-4 py-3 text-white/80">€95</td><td className="px-4 py-3 text-white/80">Cheapest in Europe — same-day certificate</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Latvia</td><td className="px-4 py-3 text-white/80">€180</td><td className="px-4 py-3 text-white/80">€120</td><td className="px-4 py-3 text-white/80">Blood panel not included (€20-€40 extra)</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Czech Republic</td><td className="px-4 py-3 text-white/80">€220</td><td className="px-4 py-3 text-white/80">€88-€140</td><td className="px-4 py-3 text-white/80">AME renewals from €88</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Spain</td><td className="px-4 py-3 text-white/80">€350-€600</td><td className="px-4 py-3 text-white/80">€200-€300</td><td className="px-4 py-3 text-white/80">14 AeMCs — wide price competition</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Germany</td><td className="px-4 py-3 text-white/80">€500-€700</td><td className="px-4 py-3 text-white/80">€200-€350</td><td className="px-4 py-3 text-white/80">Multiple AeMCs, varies by region</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Ireland</td><td className="px-4 py-3 text-white/80">€750</td><td className="px-4 py-3 text-white/80">€350</td><td className="px-4 py-3 text-white/80">One of Europe\'s most expensive</td></tr>
                </tbody>
              </table>
              <p><em>Note: Base prices exclude specialist referrals, additional testing, or casework, which can add €100-€500+.</em></p>
            </>
          )
        },
        {
          heading: "Validity and Renewal",
          content: (
            <>
              <p>Validity depends on age and the type of commercial operations. Multi-pilot airline operations have the longest validity periods.</p>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10"><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Age at Exam</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Multi-Pilot Ops</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Single-Pilot Commercial (Pax)</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Under 40</td><td className="px-4 py-3 text-white/80">12 months</td><td className="px-4 py-3 text-white/80">12 months</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">40-49</td><td className="px-4 py-3 text-white/80">12 months</td><td className="px-4 py-3 text-white/80">6 months</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">50-59</td><td className="px-4 py-3 text-white/80">12 months</td><td className="px-4 py-3 text-white/80">6 months</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">60-64</td><td className="px-4 py-3 text-white/80">6 months</td><td className="px-4 py-3 text-white/80">6 months</td></tr>
                </tbody>
              </table>
              <p>It is advised to book your revalidation examination 3-4 weeks before your certificate expires to stay within the 45-day revalidation window.</p>
            </>
          )
        },
        {
          heading: "Limitation Codes and Failures",
          content: (
            <>
              <p>If you do not fully meet a medical standard but are safe to fly under certain conditions, a limitation code is endorsed. Common codes include:</p>
              <ul>
                <li><strong>VDL/VML:</strong> Vision correction required.</li>
                <li><strong>OML:</strong> Valid only as or with a qualified co-pilot (multi-crew only).</li>
                <li><strong>HAL:</strong> Valid only with hearing aid(s) worn.</li>
              </ul>
              <p>If assessed as \"unfit,\" the Part-MED flexibility clause allows certification if the condition does not compromise flight safety. You have the right to appeal to the medical assessor of your national aviation authority.</p>
            </>
          )
        },
      ]}
      faqSchema={[
        { question: "Can I get an EASA Class 1 medical if I wear glasses?", answer: "Yes, corrected vision is acceptable as long as it meets the standards (e.g., distant vision 6/9 each eye, 6/6 both). Refractive limits are generally +5.0 to -6.0 diopters." },
        { question: "How much does an initial EASA Class 1 medical cost in 2026?", answer: "Costs range from €150 in countries like Bulgaria to €750 in Ireland. The certificate is valid across all EASA member states regardless of where it is issued." },
        { question: "What happens if I fail the medical exam?", answer: "An \"unfit\" assessment is not always final. You can appeal to your national aviation authority\'s medical assessor, and the flexibility clause may allow certification if your condition doesn\'t compromise flight safety." },
        { question: "How long is the Class 1 medical valid?", answer: "For multi-pilot operations, it is valid for 12 months if you are under 60, and 6 months if you are 60-64. For single-pilot commercial operations carrying passengers, it drops to 6 months after age 40." },
        { question: "Do I need to go to an AeMC for my renewal?", answer: "No, while the initial examination must be at an Aeromedical Centre (AeMC), routine renewals can be performed by any Aeromedical Examiner (AME) with Class 1 privileges." },
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot", href: "/europe/guides/pilot-training-costs", time: "15 min" },
        { title: "Pilot Training Costs 2026", href: "/europe/guides/pilot-training-costs", time: "12 min" }
      ]}
    
      sources={[
    { name: "UK Civil Aviation Authority (CAA)" },
    { name: "EASA Part-MED", url: "https://www.easa.europa.eu/en/document-library/regulations/commission-regulation-eu-no-11782011" },
    { name: "FAA" },
    { name: "CASA" },
  ]}/>
  );
}