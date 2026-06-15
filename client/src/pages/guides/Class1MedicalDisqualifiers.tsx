import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";

const Class1MedicalDisqualifiers = () => {
  return (
    <GuideLayout
      title="What Disqualifies You From a Class 1 Medical? (UK 2026)"
      subtitle="The complete, honest list of conditions that can fail a CAA Class 1 medical — and which ones are manageable under OML or with treatment."
      canonical="/guides/class-1-medical-disqualifiers"
      metaDescription="What medical conditions disqualify you from a CAA Class 1 medical in the UK? This guide covers vision, cardiovascular, mental health, and other conditions — including which ones are manageable under OML."
      faqSchema={[
        { question: "What conditions automatically disqualify you from a Class 1 medical?", answer: "Conditions that typically result in automatic disqualification include insulin-dependent diabetes, active psychosis, severe epilepsy, and certain cardiovascular conditions. However, many conditions that previously disqualified candidates are now manageable under an Operational Multi-crew Limitation (OML)." },
        { question: "Can I fly commercially with glasses or contact lenses?", answer: "Yes. Corrected vision is acceptable for a Class 1 medical. Your uncorrected vision must meet minimum standards, and your corrected vision must reach the required level. Laser eye surgery (LASIK/PRK) is also accepted by the CAA after a suitable recovery period, typically 6–12 months." },
        { question: "Does depression or anxiety disqualify you from a Class 1 medical?", answer: "Not automatically. Mild to moderate depression or anxiety that is well-controlled with medication or therapy may be compatible with a Class 1 medical under OML. The CAA assesses each case individually. Severe or unstable mental health conditions are more likely to result in disqualification." },
        { question: "How much does a Class 1 medical cost in the UK?", answer: "A Class 1 medical examination at a UK CAA-approved Aeromedical Medical Centre (AeMC) costs £957–£1,398 depending on the centre and whether you need a dual UK+EASA certificate. Centreline at Gatwick charges £1,181 inc VAT for a UK-only initial; Birmingham AeMC charges £1,198. It is strongly recommended to complete this before committing to expensive flight training." },
        { question: "What is an OML and how does it affect my flying career?", answer: "An Operational Multi-crew Limitation (OML) allows a pilot with a certain medical condition to fly commercially, provided they always fly with a co-pilot who holds a full, unrestricted medical. Most commercial airline flying is multi-crew anyway, so an OML has minimal practical impact on an airline career." },
      ]}
      readTime="8 min read"
      heroImage="/manus-storage/class1-disqualifiers_e8f2a91c.jpg"
      ctaHref="/roadmap"
      ctaText="Generate my personalised roadmap"
      relatedGuides={[
        { title: "Am I Too Old to Become a Pilot?", href: "/guides/am-i-too-old-to-become-a-pilot", time: "6 min read" },
        { title: "How to Become a Pilot in the UK", href: "/guides/how-to-become-a-pilot-uk", time: "12 min read" },
        { title: "Am I Ready to Start Pilot Training?", href: "/guides/am-i-ready-to-start-pilot-training", time: "7 min read" },
        { title: "Cadet Pilot Programmes UK 2026", href: "/guides/cadet-pilot-programmes", time: "8 min read" },
      ]}
      sections={[
        {
          heading: "Class 1 Medical: What the CAA Actually Checks",
          content: (
            <>
              <div style={{ margin: "0 0 20px 0", borderRadius: "12px", overflow: "hidden" }}>
                <img
                  src="/manus-storage/class1-medical-conditions_c671ee2f.png"
                  alt="CAA Class 1 medical conditions checklist UK 2026"
                  style={{ width: "100%", display: "block" }}
                  loading="lazy"
                />
              </div>
              <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)", textAlign: "center", marginBottom: "16px" }}>
                CAA Class 1 medical assessment areas. Source: CAA Medical Department, 2026.
              </p>
              <img src="/manus-storage/medical-exam_79659228.jpg" alt="Aviation medical examination" className="w-full rounded-xl my-4 object-cover" style={{ maxHeight: "320px" }} />
            </>
          ),
        },
        {
          heading: "Why the Class 1 Medical Matters More Than Anything Else",
          content: (
            <>
              <p>
                Before you spend a single pound on flight training, you need a Class 1 medical. This is not optional advice — it is the most important financial decision you will make in your pilot training journey. The CAA Class 1 medical is the gateway to a commercial flying career, and failing it after spending £60,000–£100,000 on training is a catastrophic outcome that happens to real people every year.
              </p>
              <p>
                The good news is that the medical is far less of a barrier than most people assume. The CAA's approach has become significantly more nuanced over the past decade, with the Operational Multi-crew Limitation (OML) system allowing many previously disqualifying conditions to be managed. This guide gives you the complete, honest picture.
              </p>
            </>
          ),
        },
        {
          heading: "Vision Requirements",
          content: (
            <>
              <p>
                Vision is the area that causes the most anxiety among aspiring pilots, but it is also the area where the CAA is most accommodating. The requirements for a Class 1 medical are:
              </p>
              <p>
                <strong>Distant vision:</strong> 6/9 or better in each eye separately, corrected or uncorrected. With correction, 6/6 or better in each eye. Contact lenses and glasses are both acceptable.
              </p>
              <p>
                <strong>Near vision:</strong> N5 or better at 30–50cm in each eye separately, with correction if needed.
              </p>
              <p>
                <strong>Colour vision:</strong> Must pass the Ishihara test or an alternative CAA-approved colour vision test. Colour deficiency is not automatically disqualifying — candidates who fail the Ishihara can take the CAD (Colour Assessment and Diagnosis) test. If you pass the CAD, you can fly commercially with a colour vision deficiency, though with some limitations on certain roles.
              </p>
              <p>
                <strong>Laser eye surgery:</strong> LASIK and PRK are accepted by the CAA. You must wait at least 6 months after surgery before applying for a Class 1 medical, and your post-operative vision must meet the standard requirements. Most candidates who have had laser surgery pass without issue.
              </p>
            </>
          ),
        },
        {
          heading: "Cardiovascular Conditions",
          content: (
            <>
              <p>
                Cardiovascular health is the area where the CAA is most cautious, for obvious reasons. Conditions that are likely to result in disqualification or significant restriction include:
              </p>
              <p>
                <strong>Conditions that typically disqualify:</strong> A history of myocardial infarction (heart attack), coronary artery bypass surgery, cardiac valve replacement, and certain arrhythmias. However, even here, the CAA assesses each case individually — some candidates with treated cardiovascular conditions have been granted OML certification.
              </p>
              <p>
                <strong>Conditions that are manageable:</strong> Controlled hypertension (high blood pressure) is generally compatible with a Class 1 medical, provided it is well-controlled with medication and there is no evidence of end-organ damage. Many pilots fly commercially with treated hypertension.
              </p>
              <p>
                If you have any cardiovascular history, consult an Aviation Medical Examiner (AME) before booking a full Class 1 examination. An informal pre-assessment can save you the cost of a full medical and give you a realistic picture of your prospects.
              </p>
            </>
          ),
        },
        {
          heading: "Mental Health Conditions",
          content: (
            <>
              <p>
                Mental health is the area that has seen the most change in CAA policy over the past decade. The Germanwings tragedy in 2015 prompted a significant review of mental health assessment in aviation, and the result has been a more nuanced — not more restrictive — approach.
              </p>
              <p>
                <strong>Depression and anxiety:</strong> Mild to moderate depression or anxiety that is stable and well-controlled is generally compatible with a Class 1 medical. The CAA works with a list of approved antidepressants (SSRIs) that are acceptable for commercial pilots. If you are currently taking medication for depression or anxiety, disclose this honestly — attempting to conceal it is a far greater risk to your career than the condition itself.
              </p>
              <p>
                <strong>ADHD:</strong> ADHD is not automatically disqualifying. The CAA assesses each case individually, considering the severity of symptoms, treatment, and functional impact. Some pilots with ADHD hold Class 1 medicals, though stimulant medications (Ritalin, Adderall) are not permitted for commercial flying.
              </p>
              <p>
                <strong>Conditions that typically disqualify:</strong> Active psychosis, bipolar disorder with recent episodes, and severe personality disorders are generally incompatible with a Class 1 medical. A history of psychosis that is in long-term remission may be assessed individually.
              </p>
            </>
          ),
        },
        {
          heading: "Diabetes",
          content: (
            <>
              <p>
                Diabetes is one of the most common concerns raised by aspiring pilots. The rules are specific:
              </p>
              <p>
                <strong>Type 1 diabetes (insulin-dependent):</strong> Previously an automatic disqualifier, the CAA now assesses Type 1 diabetics on a case-by-case basis. Pilots with well-controlled Type 1 diabetes can obtain a Class 1 medical with OML restrictions, requiring continuous glucose monitoring and specific protocols. This is a significant change from previous policy.
              </p>
              <p>
                <strong>Type 2 diabetes:</strong> Well-controlled Type 2 diabetes, managed with diet, metformin, or certain other oral medications, is generally compatible with a Class 1 medical. Insulin-treated Type 2 diabetes is assessed individually.
              </p>
            </>
          ),
        },
        {
          heading: "Other Common Conditions",
          content: (
            <>
              <p>
                <strong>Epilepsy:</strong> A single seizure more than 5 years ago, with no recurrence and no ongoing medication, may be compatible with a Class 1 medical. Active epilepsy or a recent history of seizures is generally disqualifying.
              </p>
              <p>
                <strong>Hearing:</strong> Hearing loss is assessed against specific audiometric standards. Mild hearing loss that meets the CAA's threshold requirements is compatible with a Class 1 medical. Hearing aids are not currently permitted for Class 1 certification.
              </p>
              <p>
                <strong>Kidney stones:</strong> A history of kidney stones is not automatically disqualifying, but the CAA will want to understand the cause and likelihood of recurrence. A single episode with no underlying metabolic cause is generally manageable.
              </p>
              <p>
                <strong>Asthma:</strong> Well-controlled asthma is generally compatible with a Class 1 medical. The CAA will want evidence of good control and will assess the severity and frequency of symptoms.
              </p>
            </>
          ),
        },
        {
          heading: "The OML: Your Safety Net",
          content: (
            <>
              <p>
                The Operational Multi-crew Limitation (OML) is one of the most important and least-understood aspects of aviation medicine. An OML allows a pilot with a specific medical condition to fly commercially, provided they always operate with a co-pilot who holds a full, unrestricted medical certificate.
              </p>
              <p>
                In practice, this has almost no impact on an airline career. Commercial airline flying is always multi-crew — you never fly alone. An OML simply formalises what is already standard practice. Many pilots flying for major UK airlines today hold Class 1 medicals with OML restrictions, and their airlines are fully aware of this.
              </p>
              <p>
                If you have a condition that concerns you, do not assume you are disqualified. Consult an Aviation Medical Examiner (AME) first, and use the <Link href="/tools/class-1-medical-check">AviatorIQ Medical Check tool</Link> to get an initial assessment of your situation.
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default Class1MedicalDisqualifiers;
