import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function ReadyToStartTraining() {
  return (
    <GuideLayout
      title="Am I Ready to Start Pilot Training? 8 Questions to Answer Honestly"
      subtitle="Before you commit £100,000 to flight training, answer these 8 questions honestly. They will tell you whether you are genuinely ready — or whether you need to prepare more."
      canonical="/guides/am-i-ready-to-start-pilot-training"
      metaDescription="Am I ready to start pilot training? 8 honest questions to answer before committing to flight school. Covers medical, finances, aptitude, motivation, and lifestyle."
      readTime="10 min read"
      heroImage="/manus-storage/ready-to-train_9d4c2b8e.jpg"
      ctaHref="/quiz"
      ctaText="Find my training route"
      scopeBanner={<GuideScopeBanner scope="This guide references UK training costs and CAA/EASA medical standards. The self-assessment questions apply globally." />}
      faqSchema={[
        { question: "How do I know if I am ready to start pilot training?", answer: "The key readiness indicators are: a valid Class 1 medical, financial plan covering full training costs plus living expenses, realistic understanding of the time commitment, and evidence of aptitude through ground school study or a trial flight." },
        { question: "Should I do a trial flight before committing to training?", answer: "Yes, absolutely. A trial flight costs £150–£250 and gives you 30–60 minutes in a light aircraft. It is the single best way to test whether you enjoy the physical experience of flying before committing tens of thousands of pounds." },
        { question: "What maths do I need for pilot training?", answer: "You need solid GCSE-level maths — fractions, percentages, basic algebra, and mental arithmetic. ATPL theory exams include navigation calculations and meteorology that require comfort with numbers. You do not need A-level maths, but you must be comfortable with numbers." }
      ]}
      sections={[
        {
          heading: "Why This Guide Exists",
          content: (
            <>
              <p>
                Flight schools have a financial incentive to tell you that you are ready to start training. They will not tell you that your finances are too thin, that your aptitude test scores need work, or that your medical history might be a problem. That is not their job.
              </p>
              <p>
                This guide asks the questions that flight schools do not. Answer them honestly — not optimistically, not pessimistically, but honestly. If you can answer all 8 positively, you are ready. If you cannot, this guide will tell you what to fix first.
              </p>
            </>
          ),
        },
        {
          heading: "Question 1: Have You Passed a Class 1 Medical?",
          content: (
            <>
              <p>
                This is the most important question on the list, and it must be answered before any other. A Class 1 Medical Certificate is a legal requirement for commercial flying. If you cannot obtain one, you cannot fly commercially — regardless of how much money you spend on training.
              </p>
              <p>
                Do not assume you will pass. Conditions that seem minor — a history of depression, ADHD, colour blindness, or elevated blood pressure — can cause significant delays or permanent disqualification. The medical costs £500–£800 and takes a full day. If you have any doubt about your medical fitness, get the medical first.
              </p>
              <p>
                <strong>If your answer is no:</strong> Book a Class 1 Medical before you do anything else. Do not spend a single pound on flight training until you have a valid Class 1.
              </p>
            </>
          ),
        },
        {
          heading: "Question 2: Do You Have a Realistic Financial Plan?",
          content: (
            <>
              <p>
                Integrated ATPL training costs £80,000–£130,000. Modular training costs £55,000–£85,000. These figures do not include living costs during training, type rating costs, or the income you will lose if you train full-time.
              </p>
              <p>
                A realistic financial plan means: you know exactly how much training will cost, you have secured the funding (savings, loan, or a combination), you have modelled the loan repayments against your expected first-year salary, and you have a contingency for cost overruns (extra hours, failed checkrides).
              </p>
              <p>
                <strong>If your answer is no:</strong> Spend time building your financial plan before committing to a school. Use the AviatorIQ Cost Calculator to model your specific scenario.
              </p>
            </>
          ),
        },
        {
          heading: "Question 3: Have You Taken a Trial Flight?",
          content: (
            <>
              <p>
                A trial flight costs £150–£250 and takes about an hour. It will tell you more about whether you want to be a pilot than any amount of online research.
              </p>
              <p>
                Many people discover that the reality of sitting in a small aircraft, wearing headphones, and being responsible for the controls is very different from their imagination of it. Some love it immediately. Some find it uncomfortable or anxiety-inducing. Both reactions are valid — but you need to know which one applies to you before you commit £100,000.
              </p>
              <p>
                <strong>If your answer is no:</strong> Book a trial flight at your nearest flying club or flight school. This is the cheapest and most informative investment you can make.
              </p>
            </>
          ),
        },
        {
          heading: "Question 4: Have You Practised Aptitude Tests?",
          content: (
            <>
              <p>
                Airline aptitude tests (PILAPT, Compass, Saville) are the first filter in airline selection. Many technically capable pilots fail at this stage because they have never practised the specific skills being tested — multi-tasking, spatial reasoning, and psychomotor coordination.
              </p>
              <p>
                These skills are learnable with practice. Candidates who practise consistently for 4–6 weeks before their tests perform significantly better than those who do not. If you are planning to apply to a cadet programme or an airline, start practising aptitude tests now — not the week before your assessment.
              </p>
              <p>
                <strong>If your answer is no:</strong> Start practising immediately. Use platforms like PilotAptitudeTest.com or the PILAPT practice software. Make it a daily habit.
              </p>
            </>
          ),
        },
        {
          heading: "Question 5: Do You Understand What the Career Actually Involves?",
          content: (
            <>
              <p>
                The romantic image of the pilot career — exotic destinations, glamorous lifestyle, respected profession — is real, but it is only part of the picture.
              </p>
              <p>
                The reality also includes: shift work (early starts, late finishes, night flights), irregular schedules that make social and family planning difficult, time away from home (especially in the early years), constant recurrent training and simulator checks, the ever-present possibility of a medical issue ending your career, and the financial pressure of loan repayments on a first officer's salary.
              </p>
              <p>
                None of these are reasons not to pursue the career. But they are reasons to go in with eyes open. Talk to working pilots. Read forums like PPRuNe. Shadow a pilot for a day if you can arrange it.
              </p>
              <p>
                <strong>If your answer is no:</strong> Do more research before committing. The career is genuinely rewarding for the right person — but it is not for everyone.
              </p>
            </>
          ),
        },
        {
          heading: "Question 6: Is Your Family Supportive?",
          content: (
            <>
              <p>
                Pilot training is demanding on relationships. If you are training full-time, you will be unavailable for 18–24 months. If you are training modularly, you will be spending weekends and evenings studying and flying for 3–5 years.
              </p>
              <p>
                If you have a partner, they need to understand and accept this commitment. If you have children, you need a childcare plan for the training period. If your family is not supportive, the training will be significantly harder — and the subsequent career (with its irregular schedules and time away from home) will put further strain on relationships that are already under pressure.
              </p>
              <p>
                <strong>If your answer is no:</strong> Have the conversation with your family before you commit. This is not a reason to abandon the dream, but it is a reason to make sure everyone is aligned.
              </p>
            </>
          ),
        },
        {
          heading: "Question 7: Have You Researched and Visited Your Chosen School?",
          content: (
            <>
              <p>
                Flight schools go bust. They have done so repeatedly over the past decade, leaving students with incomplete training, lost deposits, and no recourse. Before you hand over £100,000, you must verify the financial health of the school you are choosing.
              </p>
              <p>
                Check the school's Companies House filing. Look at their cash position and their liabilities. Read recent student reviews on forums like PPRuNe. Visit the school in person and speak to current students. Ask about their aircraft availability, instructor-to-student ratio, and employment outcomes.
              </p>
              <p>
                <strong>If your answer is no:</strong> Do not commit to any school without visiting it first and doing financial due diligence. The extra time is worth it.
              </p>
            </>
          ),
        },
        {
          heading: "Question 8: Are You Applying to Cadet Programmes First?",
          content: (
            <>
              <p>
                If you are under 40, you should apply to airline cadet programmes before committing to self-funded training. Cadet programmes (BA Speedbird Academy, Jet2 FlightPath, easyJet Generation Pilot) offer a conditional job offer before you start training — the single most valuable thing in pilot training.
              </p>
              <p>
                The acceptance rates are low (under 1% for BA Speedbird), but the cost of applying is zero. If you are accepted, you have a guaranteed job. If you are rejected, you can proceed with self-funded training. There is no downside to applying.
              </p>
              <p>
                <strong>If your answer is no:</strong> Apply to cadet programmes before committing to self-funded training. Use the <Link href="/tools/cadet-eligibility">Cadet Eligibility Checker</Link> to see which programmes you are eligible for.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot in the UK", href: "/guides/how-to-become-a-pilot", time: "14 min" },
        { title: "Class 1 Medical Guide", href: "/guides/class-1-medical", time: "5 min" },
        { title: "UK Airline Cadet Programmes 2026", href: "/guides/cadet-pilot-programmes-uk", time: "13 min" },
      ]}
    />
  );
}
