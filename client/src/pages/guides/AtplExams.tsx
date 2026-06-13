import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";

const AtplExams = () => {
  return (
    <GuideLayout
      title="ATPL Theory Exams UK: Complete Guide 2026"
      subtitle="All 14 ATPL subjects, pass rates, study strategies, and the best resources — from candidates who have been through it."
      canonical="/guides/atpl-theory-exams-uk"
      metaDescription="Complete guide to ATPL theory exams in the UK 2026. All 14 subjects, pass rates, difficulty ratings, best study resources, and strategies to pass first time."
      faqSchema={[
        { question: "How many ATPL exams are there?", answer: "There are 14 ATPL theory subjects in the UK/EASA system: Air Law, Aircraft General Knowledge (Airframes & Systems), Aircraft General Knowledge (Electrics), Aircraft General Knowledge (Powerplant), Aircraft General Knowledge (Instrumentation), Mass & Balance, Performance, Flight Planning & Monitoring, Human Performance, Meteorology, General Navigation, Radio Navigation, Operational Procedures, and Principles of Flight." },
        { question: "How hard are ATPL exams?", answer: "ATPL exams are challenging but passable with consistent study. The overall pass rate is approximately 70–80% per attempt. The hardest subjects are generally considered to be General Navigation, Meteorology, and Principles of Flight. The easiest are typically Air Law and Operational Procedures." },
        { question: "How long does it take to study for ATPL exams?", answer: "Most candidates spend 12–18 months studying for ATPL theory, typically 15–20 hours per week. Intensive full-time study can compress this to 6–9 months. The total recommended study time is approximately 750 hours across all 14 subjects." },
        { question: "What is the pass mark for ATPL exams?", answer: "The pass mark for all ATPL theory exams is 75%. Exams are multiple choice. You have a maximum of 6 attempts per subject and must pass all 14 subjects within 6 years of passing your first exam." },
        { question: "What are the best resources for ATPL study?", answer: "The most widely used resources are Bristol Groundschool (distance learning), Oxford Aviation Academy (ATPL textbooks), and question banks such as Padpilot, Qbase, and ATPL Questions. Most candidates use a combination of a structured course and a question bank for exam practice." },
      ]}
      readTime="10 min read"
      ctaHref="/roadmap"
      ctaText="Generate my personalised roadmap"
      sections={[
        {
          heading: "The 14 ATPL Subjects: An Honest Overview",
          content: (
            <>
              <p>
                The ATPL theory examination consists of 14 subjects, covering everything from the legal framework of aviation to the aerodynamics of swept-wing aircraft. The total recommended study time is approximately 750 hours — equivalent to a full university year. This is not a qualification you can cram for.
              </p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
                  <thead>
                    <tr style={{ backgroundColor: "oklch(0.18 0.08 250)" }}>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Subject</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Questions</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Time</th>
                      <th style={{ border: "1px solid oklch(1 0 0 / 0.1)", padding: "10px", textAlign: "left", color: "oklch(0.85 0.04 240)" }}>Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Air Law", "44", "60 min", "Easy"],
                      ["AGK — Airframes & Systems", "80", "120 min", "Medium"],
                      ["AGK — Electrics", "50", "60 min", "Medium"],
                      ["AGK — Powerplant", "60", "60 min", "Medium"],
                      ["AGK — Instrumentation", "60", "60 min", "Medium-Hard"],
                      ["Mass & Balance", "25", "60 min", "Medium"],
                      ["Performance", "50", "120 min", "Hard"],
                      ["Flight Planning & Monitoring", "43", "120 min", "Hard"],
                      ["Human Performance", "48", "60 min", "Easy-Medium"],
                      ["Meteorology", "84", "120 min", "Hard"],
                      ["General Navigation", "60", "120 min", "Very Hard"],
                      ["Radio Navigation", "66", "90 min", "Hard"],
                      ["Operational Procedures", "45", "75 min", "Easy"],
                      ["Principles of Flight", "44", "60 min", "Hard"],
                    ].map(([subj, q, time, diff]) => (
                      <tr key={subj}>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.85 0.04 240)", fontWeight: "600" }}>{subj}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.75 0.04 240)" }}>{q}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: "oklch(0.75 0.04 240)" }}>{time}</td>
                        <td style={{ border: "1px solid oklch(1 0 0 / 0.08)", padding: "10px", color: diff === "Very Hard" ? "oklch(0.78 0.18 25)" : diff === "Hard" ? "oklch(0.72 0.18 65)" : diff === "Easy" ? "oklch(0.72 0.18 145)" : "oklch(0.75 0.04 240)" }}>{diff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "The Hardest Subjects and How to Tackle Them",
          content: (
            <>
              <p>
                <strong>General Navigation (GNAV)</strong> is consistently rated the hardest ATPL subject. It requires strong mental arithmetic, the ability to work with charts and plotting instruments, and a solid understanding of magnetic variation, wind correction, and time calculations. The key to passing GNAV is practice — not reading. Do hundreds of practice questions, use the navigation computer (CRP-5) until it is second nature, and work through past papers under timed conditions.
              </p>
              <p>
                <strong>Meteorology</strong> is the subject that most surprises candidates with its depth. It is not just "what does a cold front look like" — it covers atmospheric physics, jet streams, SIGMET interpretation, and complex weather phenomena. The Oxford Aviation Academy meteorology textbook is the gold standard. Read it twice, then do question banks.
              </p>
              <p>
                <strong>Performance</strong> is heavily mathematical and requires understanding of take-off and landing performance charts, climb gradients, and obstacle clearance calculations. The CAA's Learning Objectives for Performance are very specific — study to them, not just to the textbook.
              </p>
            </>
          ),
        },
        {
          heading: "Study Strategy: How to Pass First Time",
          content: (
            <>
              <p>
                The candidates who pass ATPL exams first time consistently follow a similar approach:
              </p>
              <p>
                <strong>1. Use a structured course.</strong> Bristol Groundschool's distance learning course is the most widely used in the UK and has an excellent track record. Oxford Aviation Academy's classroom courses are more expensive but provide more structure. Do not try to self-study from textbooks alone — the structured courses are specifically designed around the CAA's learning objectives.
              </p>
              <p>
                <strong>2. Start question banks early.</strong> Do not wait until you have finished studying a subject before starting question bank practice. Do questions from the first week. The question banks (Padpilot, Qbase, ATPL Questions) contain thousands of questions that closely mirror the real exams. Familiarity with the question style is as important as subject knowledge.
              </p>
              <p>
                <strong>3. Study in blocks, not subjects.</strong> Rather than studying one subject from start to finish before moving to the next, rotate through subjects. This improves retention and prevents the burnout that comes from spending three months on a single topic.
              </p>
              <p>
                <strong>4. Sit exams in the right order.</strong> Most experienced candidates recommend sitting Air Law and Human Performance first (easier, builds confidence), then tackling the harder subjects (GNAV, Met, Performance) in the middle of your study period when you are at peak focus.
              </p>
              <p>
                <strong>5. Allow time for resits.</strong> Even well-prepared candidates sometimes fail a subject. Budget time and money for resits. Exam fees are approximately £50–£100 per attempt, and resit sessions are held regularly throughout the year.
              </p>
            </>
          ),
        },
        {
          heading: "The Rules You Must Know",
          content: (
            <>
              <p>
                The CAA's ATPL exam rules are specific and must be understood before you start:
              </p>
              <p>
                <strong>The 6-year rule:</strong> You must pass all 14 subjects within 6 years of passing your first exam. If you pass your first exam in June 2026, you must have passed all 14 by June 2032. This is generous, but it means you cannot take a multi-year break mid-way through.
              </p>
              <p>
                <strong>Maximum 6 attempts per subject:</strong> You have a maximum of 6 attempts at each subject. If you fail a subject 6 times, you cannot retake it and cannot obtain an ATPL. This is rare, but it does happen to candidates who are not adequately prepared.
              </p>
              <p>
                <strong>The 18-month rule:</strong> Once you have passed all 14 subjects, your ATPL theory credit is valid for 7 years. If you do not obtain a CPL/IR within 7 years of passing your last exam, your theory credit expires and you must resit all 14 subjects.
              </p>
            </>
          ),
        },
        {
          heading: "Best Resources for ATPL Study (2026)",
          content: (
            <>
              <p>
                <strong>Bristol Groundschool (BGS):</strong> The most popular distance learning ATPL course in the UK. Comprehensive, well-structured, and regularly updated. Costs approximately £2,500–£3,500 for the full 14-subject course. Includes video lectures, textbooks, and question bank access.
              </p>
              <p>
                <strong>Oxford Aviation Academy (OAA) textbooks:</strong> The industry-standard ATPL textbooks. Available as a set of 14 books or individually. Essential reference material even if you are using a different course provider.
              </p>
              <p>
                <strong>Padpilot:</strong> A highly regarded question bank and study app. The interface is clean, the questions are well-calibrated, and the performance tracking is excellent. Available on iOS and Android. Costs approximately £150–£200 for full access.
              </p>
              <p>
                <strong>ATPL Questions (atplquestions.com):</strong> A free and paid question bank with thousands of questions. Less polished than Padpilot but comprehensive and widely used.
              </p>
              <p>
                Use the <Link href="/roadmap">AviatorIQ Roadmap Generator</Link> to see how ATPL theory fits into your specific training timeline and get a cost estimate for your chosen study route.
              </p>
            </>
          ),
        },
      ]}
    />
  );
};

export default AtplExams;
