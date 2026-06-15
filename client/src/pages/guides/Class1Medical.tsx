import React from 'react';
import GuideLayout from '@/components/GuideLayout';
import { Link } from 'wouter';

const Class1Medical: React.FC = () => {
  return (
    <GuideLayout
      title="UK CAA Class 1 Medical: Complete 2026 Guide"
      subtitle="Everything you need to know about the UK CAA Class 1 Medical Certificate — what it tests, where to get it, what it costs in 2026, what can disqualify you, and the critical post-Brexit dual certificate situation."
      canonical="/guides/class-1-medical"
      metaDescription="UK CAA Class 1 Medical guide 2026. Real prices: Centreline £1,181, Birmingham £1,198, Heathrow £957–£1,377. Post-Brexit UK vs EASA certificates explained. SSRI acceptance, OML, colour vision, renewal frequency. Get your medical before you start training."
      faqSchema={[
        { question: "How much does a UK CAA Class 1 medical cost in 2026?", answer: "UK CAA initial Class 1 medical costs: Centreline (London/Gatwick) £1,181 inc VAT; Birmingham AeMC £1,198 inc VAT; Heathrow Medical Services £1,377 inc VAT (combined UK+EASA). Renewals cost £297–£332 at most AMEs. The guide's older figures of £400–£600 are no longer accurate." },
        { question: "Do I need a UK CAA or EASA Class 1 medical?", answer: "Since Brexit, UK CAA and EASA are completely separate systems with no mutual recognition. If you plan to fly for UK operators (BA, easyJet UK, Jet2, TUI, Loganair), you need a UK CAA medical. If you want to fly for EASA operators (Ryanair with Irish licence, Wizz Air, Vueling), you need an EASA medical from an EASA-state AeMC. Most UK students get a combined UK+EASA medical to keep all options open." },
        { question: "Can I become a pilot with anxiety or depression?", answer: "Yes, in many cases. Mild, well-controlled anxiety or depression does not automatically disqualify you. The CAA assesses each case individually. Crucially, four SSRIs (citalopram, sertraline, fluoxetine, escitalopram) are now accepted under EASA/UK CAA rules for Class 1 holders, subject to a stability period and specialist review. An OML (Operational Multi-crew Limitation) is typically applied, meaning you must fly with another pilot — which is standard for airline operations anyway." },
        { question: "How often do I need to renew my Class 1 medical?", answer: "Under 40: annually. Age 40 and over (for single-pilot commercial operations): every 6 months. For multi-crew airline operations, the standard renewal is annually until age 60, then every 6 months. An ECG is required from age 40 onwards at each renewal." },
        { question: "What happens if I fail the colour vision test?", answer: "Failing the standard Ishihara plate test does not automatically disqualify you. You can proceed to the Colour Vision Medical Assessment (CVMA) — a more detailed test using a lantern or anomaloscope. If you pass the CVMA, you receive a Class 1 with an OML restriction (no flying as sole pilot at night or in IMC). If you fail the CVMA, you cannot hold a Class 1 medical. Get tested before committing to training." },
        { question: "Should I get my Class 1 medical before starting training?", answer: "Yes — always. The CAA and every UK flight school strongly recommend getting your Class 1 medical before committing any significant funds to training. Discovering a disqualifying condition after spending £100,000 on an integrated course would be financially devastating. Book your medical as the very first step." },
      ]}
      readTime="12 min read"
      heroImage="/manus-storage/class1-medical_c4a3b12e.jpg"
      ctaHref="/quiz/flight-deck"
      ctaText="Check your readiness for free"
      relatedGuides={[
        { title: "How to Become a Pilot in the UK 2026", href: "/guides/how-to-become-a-pilot", time: "15 min" },
        { title: "Pilot Training Costs UK 2026", href: "/guides/pilot-training-costs", time: "8 min" },
        { title: "UK Integrated vs Modular ATPL 2026", href: "/guides/integrated-vs-modular", time: "12 min" },
        { title: "UK Airline Cadet Programmes 2026", href: "/guides/uk-cadet-programmes", time: "10 min" },
      ]}
      sections={[
        {
          heading: "Get Your Medical First — Before Anything Else",
          content: (
            <>
              <p>
                The single most important piece of advice in this guide: <strong>book your Class 1 medical before you spend a single pound on flight training.</strong> The CAA, BALPA, and every reputable UK flight school say the same thing. Leading Edge Aviation now requires cadets to have their Class 1 medical in place at least three months before their course start date.
              </p>
              <p>
                The reason is simple. If you discover a disqualifying condition after spending £100,000 on an integrated ATPL course, you have no recourse. The medical is the gateway. Everything else — training, licences, employment — depends on it. It takes approximately half a day and costs £957–£1,377. Do it first.
              </p>
            </>
          ),
        },
        {
          heading: "UK CAA vs EASA: The Post-Brexit Situation",
          content: (
            <>
              <p>
                Since 1 January 2021, the UK CAA and EASA operate as completely separate regulatory systems. <strong>A UK CAA Class 1 medical has zero EASA validity, and an EASA Class 1 medical has zero UK CAA validity.</strong> There is no mutual recognition.
              </p>
              <p>
                This matters because different airlines operate under different regulatory frameworks:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Certificate Needed</th>
                      <th className="px-4 py-3 font-semibold">Airlines</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">UK CAA only</td>
                      <td className="px-4 py-3">British Airways, easyJet (UK ops), Jet2, TUI, Loganair, any UK-registered operator</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">EASA only</td>
                      <td className="px-4 py-3">Ryanair (Irish licence), Wizz Air, Vueling, Norwegian, any EASA-state operator</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Both (dual)</td>
                      <td className="px-4 py-3">Keeping all options open; flying for both UK and EASA operators</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Most UK student pilots get a <strong>combined UK+EASA medical</strong> at their initial examination. All three UK AeMC organisations now offer dual issuance — the examination is conducted once, and results are submitted to both authorities. The EASA premium is approximately £366–£500 on top of the UK-only price.
              </p>
              <p>
                If you only need an EASA medical (for example, you are targeting Ryanair or Wizz Air), you do not need a UK AeMC at all. Flying to Sofia, Riga, or Prague for an EASA medical costs approximately £260–£515 total (flights + medical), compared to £957–£1,377 at a UK AeMC. The saving is real. [1]
              </p>
            </>
          ),
        },
        {
          heading: "Where to Get Your Initial Class 1 Medical",
          content: (
            <>
              <p>
                Your initial Class 1 medical must be conducted at a CAA-approved Aeromedical Centre (AeMC). In the UK, there are four AeMC locations operated by three organisations. For renewals, you can use any CAA-registered Aeromedical Examiner (AME) — no AeMC visit required.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">AeMC</th>
                      <th className="px-4 py-3 font-semibold">Location</th>
                      <th className="px-4 py-3 font-semibold">UK Only (Initial)</th>
                      <th className="px-4 py-3 font-semibold">Dual UK+EASA</th>
                      <th className="px-4 py-3 font-semibold">Renewal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Centreline (London)</td>
                      <td className="px-4 py-3">Wimpole St, London</td>
                      <td className="px-4 py-3">£1,181 inc VAT</td>
                      <td className="px-4 py-3">£1,350 ex VAT</td>
                      <td className="px-4 py-3">£297</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Centreline (Gatwick)</td>
                      <td className="px-4 py-3">Horley, Surrey</td>
                      <td className="px-4 py-3">£1,181 inc VAT</td>
                      <td className="px-4 py-3">£1,350 ex VAT</td>
                      <td className="px-4 py-3">£297</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Birmingham AeMC</td>
                      <td className="px-4 py-3">Birmingham Airport</td>
                      <td className="px-4 py-3">£1,198 inc VAT</td>
                      <td className="px-4 py-3">£1,398 ex VAT</td>
                      <td className="px-4 py-3">£332</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Heathrow Medical</td>
                      <td className="px-4 py-3">Longford, near Heathrow</td>
                      <td className="px-4 py-3">N/A (EASA only: £957)</td>
                      <td className="px-4 py-3">£1,377 inc VAT</td>
                      <td className="px-4 py-3">£315</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-white/50">
                Prices verified from AeMC websites, May 2026. Centreline pricing shown ex-VAT per their website. Heathrow Medical does not offer a standalone UK CAA-only initial — options are EASA-only (£957) or combined UK+EASA (£1,377). [1]
              </p>
              <p>
                <strong>Which AeMC to choose:</strong> Heathrow Medical Services has the strongest reputation on PPRuNe (the professional pilots forum) and is CQC-inspected, SEQOHS-accredited, and ISO 9001 certified. Centreline Gatwick is the cheapest option and reviews better than their London branch. Birmingham AeMC is the only option outside the M25 corridor — the right choice for anyone in the Midlands, North England, Wales, or Scotland. [1]
              </p>
            </>
          ),
        },
        {
          heading: "What the Examination Tests",
          content: (
            <>
              <p>
                The initial Class 1 examination takes approximately four hours. The CAA specifies the following components: [2]
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Test</th>
                      <th className="px-4 py-3 font-semibold">What It Checks</th>
                      <th className="px-4 py-3 font-semibold">Standard Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Medical history review</td>
                      <td className="px-4 py-3">Past illness, surgery, medication</td>
                      <td className="px-4 py-3">Full disclosure required</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Vision (distant)</td>
                      <td className="px-4 py-3">Visual acuity each eye</td>
                      <td className="px-4 py-3">6/6 or better (corrected); uncorrected 6/60 or better</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Vision (near)</td>
                      <td className="px-4 py-3">Reading vision</td>
                      <td className="px-4 py-3">N5 at 30–50 cm; N14 at 100 cm</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Colour vision (Ishihara)</td>
                      <td className="px-4 py-3">Colour plate recognition</td>
                      <td className="px-4 py-3">Pass required; CVMA available if failed</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Audiometry</td>
                      <td className="px-4 py-3">Pure tone hearing test</td>
                      <td className="px-4 py-3">No loss &gt;35dB at 500–2000Hz; &gt;50dB at 3000Hz</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">ECG (resting)</td>
                      <td className="px-4 py-3">Heart rhythm and conduction</td>
                      <td className="px-4 py-3">Required at initial; required from age 40 at renewals</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Blood pressure</td>
                      <td className="px-4 py-3">Cardiovascular risk</td>
                      <td className="px-4 py-3">Systolic ≤160mmHg; diastolic ≤95mmHg</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Lung function (spirometry)</td>
                      <td className="px-4 py-3">Respiratory capacity</td>
                      <td className="px-4 py-3">FEV1/FVC ratio; asthma triggers specialist referral</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Blood tests</td>
                      <td className="px-4 py-3">Haemoglobin, cholesterol, glucose</td>
                      <td className="px-4 py-3">Diabetes, anaemia, cardiovascular risk markers</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Urine test</td>
                      <td className="px-4 py-3">Kidney function, glucose, protein</td>
                      <td className="px-4 py-3">Attend with full bladder</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Drug &amp; alcohol screen</td>
                      <td className="px-4 py-3">Psychoactive substances</td>
                      <td className="px-4 py-3">Breath alcohol + saliva swab; required at initial</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Mental health assessment</td>
                      <td className="px-4 py-3">Psychological fitness</td>
                      <td className="px-4 py-3">Comprehensive structured interview; see section below</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">General physical examination</td>
                      <td className="px-4 py-3">Neurological, musculoskeletal, ENT</td>
                      <td className="px-4 py-3">Full head-to-toe assessment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "Renewal Frequency",
          content: (
            <>
              <p>
                Class 1 medical certificates have different validity periods depending on age and operation type:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Age</th>
                      <th className="px-4 py-3 font-semibold">Multi-crew Operations</th>
                      <th className="px-4 py-3 font-semibold">Single-pilot Commercial</th>
                      <th className="px-4 py-3 font-semibold">ECG Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Under 40</td>
                      <td className="px-4 py-3">12 months</td>
                      <td className="px-4 py-3">12 months</td>
                      <td className="px-4 py-3">Not required at renewal</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">40–59</td>
                      <td className="px-4 py-3">12 months</td>
                      <td className="px-4 py-3">6 months</td>
                      <td className="px-4 py-3">Required at each renewal from age 40</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">60 and over</td>
                      <td className="px-4 py-3">6 months</td>
                      <td className="px-4 py-3">6 months</td>
                      <td className="px-4 py-3">Required at each renewal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                For the vast majority of airline pilots (multi-crew operations), the renewal is annual until age 60, then every six months. Renewal costs are £297–£332 at most AMEs. You do not need to return to an AeMC for renewals — any CAA-registered AME can conduct them.
              </p>
            </>
          ),
        },
        {
          heading: "Common Conditions: What to Expect",
          content: (
            <>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Condition</th>
                      <th className="px-4 py-3 font-semibold">Typical Outcome</th>
                      <th className="px-4 py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Corrected vision (glasses/contacts)</td>
                      <td className="px-4 py-3 text-green-400">Pass with restriction</td>
                      <td className="px-4 py-3">Must wear correction when flying. Spare pair required in cockpit.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Laser eye surgery (LASIK/PRK)</td>
                      <td className="px-4 py-3 text-green-400">Pass (after recovery)</td>
                      <td className="px-4 py-3">Accepted after stable refraction period. Declare to AME.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Colour blindness (mild — Ishihara fail)</td>
                      <td className="px-4 py-3 text-yellow-400">CVMA test required</td>
                      <td className="px-4 py-3">Pass CVMA = Class 1 with OML (no night/IMC solo). Fail CVMA = no Class 1.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Asthma (controlled)</td>
                      <td className="px-4 py-3 text-green-400">Pass with specialist report</td>
                      <td className="px-4 py-3">Severity determines outcome. Mild, well-controlled asthma is generally acceptable.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Type 2 diabetes (controlled, no insulin)</td>
                      <td className="px-4 py-3 text-yellow-400">Pass with OML</td>
                      <td className="px-4 py-3">Requires regular monitoring. Insulin-dependent diabetes is significantly harder to certify.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Depression/anxiety (resolved, no medication)</td>
                      <td className="px-4 py-3 text-green-400">Pass with specialist report</td>
                      <td className="px-4 py-3">History reviewed. Current stability and absence of symptoms are favourable.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Depression on approved SSRI</td>
                      <td className="px-4 py-3 text-yellow-400">Pass with OML (case-by-case)</td>
                      <td className="px-4 py-3">See mental health section below. Requires CAA psychiatric review.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">High blood pressure (controlled)</td>
                      <td className="px-4 py-3 text-green-400">Pass with specialist report</td>
                      <td className="px-4 py-3">Must be well-controlled; no organ damage. Medication acceptable.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Epilepsy (active)</td>
                      <td className="px-4 py-3 text-red-400">Fail</td>
                      <td className="px-4 py-3">Disqualifying due to incapacitation risk. Long seizure-free periods may be reviewed.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Schizophrenia / psychotic disorder</td>
                      <td className="px-4 py-3 text-red-400">Fail</td>
                      <td className="px-4 py-3">Absolute disqualifier under CAA regulations.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">ADHD</td>
                      <td className="px-4 py-3 text-yellow-400">Case-by-case</td>
                      <td className="px-4 py-3">Assessed individually. Medication compatibility is the key issue. Consult an AME first.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "Mental Health, SSRIs, and the OML",
          content: (
            <>
              <p>
                Mental health is assessed comprehensively at every Class 1 examination. The CAA's guidance covers mood, coping strategies, relationship history, work stressors, and personality. A history of depression or anxiety does not automatically disqualify you — the key factors are stability, current symptom status, and whether medication is required. [2]
              </p>
              <p>
                <strong>SSRI antidepressants:</strong> Four SSRIs are now accepted under EASA/UK CAA rules for Class 1 certificate holders: <strong>citalopram, sertraline, fluoxetine, and escitalopram.</strong> Acceptance is not automatic — it requires a period of stability on the medication (typically 6 months minimum), a specialist psychiatric evaluation, and CAA medical assessor review. If accepted, an OML (Operational Multi-crew Limitation) is typically applied. [3]
              </p>
              <p>
                <strong>What an OML means in practice:</strong> An OML means you can only exercise your licence as part of a multi-crew operation — i.e., with another qualified pilot present. For airline flying (which is almost always multi-crew), this is not a career barrier. An OML does not prevent you from flying for BA, easyJet, Ryanair, or any major airline.
              </p>
              <p>
                <strong>Self-harm history:</strong> The CAA regulations state that applicants with a documented history of deliberate self-harm or suicide attempt "shall be assessed as unfit." However, they "may be assessed as fit after satisfactory psychiatric evaluation." This is assessed individually. [2]
              </p>
              <p>
                The most important rule with mental health: <strong>always disclose.</strong> Withholding a mental health history from your AME is a serious regulatory offence and, if discovered later, can result in licence revocation. The CAA's approach is to assess risk, not to penalise honesty.
              </p>
            </>
          ),
        },
        {
          heading: "What to Bring and How to Prepare",
          content: (
            <>
              <p>
                Before your appointment, register with the UK CAA online portal and pay the CAA administrative fee (approximately £15–£20) at least 10 days before your examination. Complete the medical history form honestly and in full.
              </p>
              <p>
                On the day, bring: photo ID, your glasses or contact lenses and the most recent optician's report if applicable, any relevant medical records or specialist reports for pre-existing conditions, and attend with a full bladder (urine test required). Avoid caffeine for at least 20 minutes before the examination. The examination takes approximately four hours. Same-day certificate issuance is standard if no specialist referral is required.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50">
                [1] Airmappr. "EASA Class 1 Medical in the UK: 4 AeMCs Compared (2026 Prices)." March 2026. <em>airmappr.com/articles/medical/easa-class-one-medical-uk-aemc-comparison</em>. Prices verified from AeMC websites, May 2026.<br/>
                [2] UK Civil Aviation Authority. "Initial Class 1 medical examination." <em>caa.co.uk/commercial-industry/pilot-licences/medical/initial-class-1-medical-examination/</em>. Accessed June 2026.<br/>
                [3] UK Civil Aviation Authority. "Mental Health Guidance Material." <em>caa.co.uk/aeromedical-examiners/medical-standards/pilots/medical-conditions/mental-health/</em>. Accessed June 2026. SSRIs accepted: citalopram, sertraline, fluoxetine, escitalopram — subject to stability period and CAA psychiatric review.<br/>
                [4] Leading Edge Aviation. "Getting your UK CAA and EASA Class 1 Medical Certificates." January 2026. <em>leadingedgeaviation.com/blog/getting-your-uk-caa-easa-class-1-medical/</em>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default Class1Medical;
