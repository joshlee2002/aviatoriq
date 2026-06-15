import GuideLayout from "@/components/GuideLayout";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function AdhdPilotGuide() {
  return (
    <GuideLayout
      title="Can I Become a Pilot with ADHD in the UK? (2026 CAA Rules)"
      subtitle="The honest truth about getting a Class 1 Medical with ADHD. CAA rules, medication bans, and the exact steps to prove your fitness to fly."
      canonical="/guides/adhd-pilot-uk"
      metaDescription="Can you become a commercial pilot in the UK with ADHD? The 2026 CAA rules explained. Medication bans, neuropsychological testing, and the 4 scenarios for certification."
      readTime="11 min read"
      heroImage="/manus-storage/medical-check_8e2a1b9f.jpg"
      ctaHref="/tools/class-1-medical-check"
      ctaText="Check your medical readiness"
      scopeBanner={<GuideScopeBanner scope="This guide covers UK CAA medical regulations for ADHD. FAA rules in the USA are different." usHref="/us/guides/adhd-faa-medical" usLabel="View USA ADHD guide →" />}
      faqSchema={[
        { question: "Can I get a Class 1 Medical with ADHD in the UK?", answer: "Yes. A previous diagnosis of ADHD is not automatically disqualifying for a UK CAA Class 1 Medical. However, each case is assessed individually, and you must demonstrate that you have no safety-relevant symptoms." },
        { question: "Can I fly while taking ADHD medication?", answer: "No. All stimulant ADHD medications (such as Ritalin, Concerta, Adderall, and Vyvanse) are strictly prohibited for pilots holding any class of medical certificate under CAA and EASA rules." },
        { question: "How long do I need to be off ADHD medication before applying?", answer: "The CAA does not have a strict fixed timeframe like the FAA's 90-day rule, but they typically require a stability period of 6 to 12 months off medication with documented evidence of stable functioning in daily life before certification." },
        { question: "Do I have to declare childhood ADHD if I no longer have symptoms?", answer: "Yes. Concealing a medical diagnosis on an aviation medical application is a criminal offence and grounds for permanent licence revocation. Honest disclosure with good documentation leads to certification far more often than pilots expect." }
      ]}
      sections={[
        {
          heading: "The Short Answer: Yes, But With Conditions",
          content: (
            <>
              <p>
                This is the question anxious student pilots search for at 2am. The answer is more nuanced — and more hopeful — than most of what you will find on internet forums. ADHD is not automatically disqualifying for a UK CAA Class 1 Medical Certificate [1].
              </p>
              <p>
                Many pilots with a childhood ADHD diagnosis, and some with adult ADHD, currently hold valid Class 1 certificates and fly commercially for UK airlines. The problem is that most ADHD-and-flying content online is heavily focused on the American FAA system. The UK CAA rules are different, and in some ways, they offer a more individualised approach.
              </p>
              <p>
                You can become a commercial pilot with ADHD if you are not currently taking medication, you have no safety-relevant symptoms (meaning your attention and executive function are adequate for pilot duties), and you can demonstrate stable functioning in work or education without treatment.
              </p>
            </>
          ),
        },
        {
          heading: "The Medication Ban: A Hard Line",
          content: (
            <>
              <p>
                This is the non-negotiable part of the CAA's policy. ADHD medications are not accepted for flight by the UK CAA, EASA, the FAA, or any major aviation authority globally. The reasons are specific to aviation safety, not a judgment on ADHD treatment in general.
              </p>
              <p>
                You cannot fly while taking methylphenidate (Ritalin, Concerta, Medikinet), amphetamine salts (Adderall), lisdexamfetamine (Vyvanse, Elvanse), atomoxetine (Strattera), or guanfacine (Intuniv).
              </p>
              <p>
                The aviation safety concerns with these medications are well-documented by aeromedical experts. They include impaired perception of fatigue (you do not realise you are tired), potential for visual and tactile hallucinations at therapeutic doses in rare cases, and time-limited effectiveness. If a dose is missed mid-flight or a long-haul flight exceeds the drug's therapeutic window, the sudden return of symptoms in the cockpit is a major risk.
              </p>
              <p>
                Some pilots assume they can take ADHD medication for daily life and simply skip it on flying days. This is absolutely not acceptable to the CAA. The requirement is to be fully off medication and to demonstrate that you can function adequately without it. Intermittent use still counts as current use.
              </p>
            </>
          ),
        },
        {
          heading: "Four Common ADHD Scenarios for Aspiring Pilots",
          content: (
            <>
              <p>
                The CAA assesses every ADHD case individually based on current symptoms, medication status, and functional capacity. Your path to certification depends heavily on which of these four scenarios fits your history.
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Scenario</th>
                      <th className="px-4 py-3 font-semibold">Typical Outcome</th>
                      <th className="px-4 py-3 font-semibold">What You Will Need</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Childhood ADHD, off meds for years</td>
                      <td className="px-4 py-3 text-green-400">Very likely certifiable</td>
                      <td className="px-4 py-3">Treatment records, letter from childhood doctor, possible neuropsych assessment.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Adult ADHD, recently stopped meds</td>
                      <td className="px-4 py-3 text-amber-400">Possible but slower</td>
                      <td className="px-4 py-3">6-12 month stability period, psychiatrist report, neuropsych evaluation.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">Currently taking ADHD medication</td>
                      <td className="px-4 py-3 text-red-400">Not certifiable</td>
                      <td className="px-4 py-3">Must safely discontinue meds with doctor supervision before applying.</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">ADHD with depression/anxiety</td>
                      <td className="px-4 py-3 text-orange-400">Complex, case-by-case</td>
                      <td className="px-4 py-3">Multiple specialist reports, extended evaluation period (12-24 months).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Scenario 1 (Childhood ADHD):</strong> This is the most common and most favourable case. You were diagnosed as a child, took medication during school, stopped at some point (often 16–18), and have no current symptoms. Research showing 40–60% of childhood cases improve significantly in adulthood is explicitly referenced by the CAA [2].
              </p>
              <p>
                <strong>Scenario 2 (Recently stopped medication):</strong> You were diagnosed as an adult, took medication, and are now stopping specifically to pursue a pilot career. The authority will want to see a stability period off medication (typically 6–12 months) and evidence that you can function without it.
              </p>
            </>
          ),
        },
        {
          heading: "The Certification Process: What to Expect",
          content: (
            <>
              <p>
                If you have an ADHD history, your Class 1 application follows an enhanced pathway. You cannot simply walk into an Aeromedical Examiner (AME) office and walk out with a certificate the same day.
              </p>
              <p>
                First, gather all your treatment records: original diagnosis, medication history, treatment dates, and assessment reports from childhood or adulthood. The more complete your file, the faster the process. Disclose your ADHD history on the medical application. The AME will forward your case to the CAA's Aeromedical Section (AMS) at Gatwick for review.
              </p>
              <p>
                The CAA may request an assessment by a neuropsychologist or aviation clinical psychologist. This evaluates attention, working memory, processing speed, and executive function. It is thorough but not hostile — the purpose is to establish your cognitive fitness, not to catch you out.
              </p>
              <p>
                The AMS reviews everything and issues a decision: fit (possibly with an Operational Multi-crew Limitation initially), unfit, or a request for more information. Positive decisions may include a surveillance requirement — an annual specialist review for 3–5 years, after which it may be removed.
              </p>
            </>
          ),
        },
        {
          heading: "Why You Must Never Hide Your Diagnosis",
          content: (
            <>
              <p>
                The temptation to simply tick "No" on the medical declaration form is strong for many applicants. Do not do it. Hiding an ADHD diagnosis is far riskier than disclosing it.
              </p>
              <p>
                Concealing a medical diagnosis on an official aviation document is a criminal offence. If an undisclosed condition is discovered later — through medical records integration, insurance claims, or during an incident investigation — your commercial pilot licence can be permanently revoked, ending your career instantly.
              </p>
              <p>
                The CAA's approach to mental health and neurodevelopmental conditions has become significantly more nuanced and supportive in recent years. Honest disclosure with good documentation leads to certification far more often than pilots expect.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50 space-y-1">
                [1] UK Civil Aviation Authority (CAA). "Neurodevelopmental conditions." <em>Aeromedical Examiner Guidance</em>.<br/>
                [2] Airmappr. "Can You Be a Pilot with ADHD? EASA Rules Explained (2026)." <em>Aviation Medical Data</em>.
              </p>
            </>
          ),
        }
      ]}
      relatedGuides={[
        { title: "Class 1 Medical Disqualifiers", href: "/guides/class-1-medical-disqualifiers", time: "7 min" },
        { title: "Pilot Eyesight Requirements UK", href: "/guides/pilot-eyesight-requirements-uk", time: "6 min" },
        { title: "How to Become a Pilot in the UK", href: "/guides/how-to-become-a-pilot", time: "14 min" },
      ]}
    />
  );
}
