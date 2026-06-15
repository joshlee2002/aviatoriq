import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function AtplExams() {
  return (
    <GuideLayout
      title="ATPL Theory Exams UK: Complete Guide 2026"
      subtitle="All 13 ATPL subjects ranked from easiest to hardest, with real pass rates, exam durations, and the study strategies that actually work."
      canonical="/guides/atpl-theory-exams-uk"
      metaDescription="Complete guide to the 13 UK CAA/EASA ATPL theory exams. See real pass rates, subject difficulty rankings (Communications to Performance), and study tips."
      readTime="12 min read"
      heroImage="/manus-storage/atpl-exams_5e2d1a8c.jpg"
      ctaHref="/quiz"
      ctaText="Find your training route"
      scopeBanner={<GuideScopeBanner scope="This guide covers the 13 ATPL theory exams under UK CAA/EASA regulations. The FAA has a different exam structure." usHref="/us/guides/atp-certificate-usa" usLabel="View USA ATP certificate →" />}
      faqSchema={[
        { question: "How many ATPL exams are there?", answer: "There are 13 ATPL theory exams under the current UK CAA and EASA syllabus (previously 14, but VFR and IFR Communications were merged). You must pass all 13 to obtain a Frozen ATPL." },
        { question: "What is the pass mark for ATPL exams?", answer: "The minimum pass mark for every ATPL exam is 75%. However, airlines highly value first-time passes and strong average scores (aiming for 85-90%+)." },
        { question: "How many times can you fail an ATPL exam?", answer: "You have a maximum of 6 attempts per subject, across a maximum of 6 total sittings. You must pass all 13 exams within 18 months of taking your first exam." },
        { question: "Which is the hardest ATPL exam?", answer: "Performance is widely considered the hardest ATPL exam, with the lowest average pass rate (around 58%). Principles of Flight and General Navigation are also consistently ranked among the most difficult." },
        { question: "How long does ATPL theory take?", answer: "Full-time residential ground school typically takes 6 to 8 months. Part-time distance learning usually takes 12 to 18 months while working alongside study." }
      ]}
      sections={[
        {
          heading: "The Academic Hurdle of Pilot Training",
          content: (
            <>
              <p>
                The Airline Transport Pilot Licence (ATPL) theory exams are the academic backbone of European and UK pilot training. While the flight training teaches you how to handle the aircraft, the ATPL exams prove you have the technical knowledge required to operate a complex commercial airliner safely.
              </p>
              <p>
                There are 13 exams in total (reduced from 14 after VFR and IFR Communications were merged). They cover everything from basic aerodynamics to complex high-altitude meteorology and human psychology. The sheer volume of information is what makes the ATPL theory phase notoriously difficult  -  it is often described as trying to drink from a firehose.
              </p>
              <p>
                You must pass all 13 exams within an 18-month window, starting from the end of the calendar month in which you attempt your first exam. You have a maximum of 6 sittings (a sitting is a consecutive 10-day period where you can take multiple exams) and a maximum of 4 attempts per subject [1].
              </p>
            </>
          ),
        },
        {
          heading: "The 13 ATPL Subjects Ranked (Easiest to Hardest)",
          content: (
            <>
              <p>
                The difficulty of an ATPL exam rarely correlates with how complex the subject is in the real world. Difficulty is driven by how the UK CAA/EASA phrases the questions, the time pressure of the exam, and the sheer volume of rote memorisation required.
              </p>
              <p>
                Based on historic pass rate data and feedback from thousands of candidates, here is the honest ranking of the 13 subjects, from easiest to hardest [2].
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Rank</th>
                      <th className="px-4 py-3 font-semibold">Subject</th>
                      <th className="px-4 py-3 font-semibold">Questions</th>
                      <th className="px-4 py-3 font-semibold">Time Allowed</th>
                      <th className="px-4 py-3 font-semibold">Est. Pass Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">1 (Easiest)</td>
                      <td className="px-4 py-3">Communications</td>
                      <td className="px-4 py-3">34</td>
                      <td className="px-4 py-3">45 mins</td>
                      <td className="px-4 py-3 text-green-400">~90%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">2</td>
                      <td className="px-4 py-3">Instrumentation</td>
                      <td className="px-4 py-3">60</td>
                      <td className="px-4 py-3">90 mins</td>
                      <td className="px-4 py-3 text-green-400">~87%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">3</td>
                      <td className="px-4 py-3">Human Performance & Limitations</td>
                      <td className="px-4 py-3">48</td>
                      <td className="px-4 py-3">60 mins</td>
                      <td className="px-4 py-3 text-green-400">~84%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">4</td>
                      <td className="px-4 py-3">Air Law</td>
                      <td className="px-4 py-3">44</td>
                      <td className="px-4 py-3">60 mins</td>
                      <td className="px-4 py-3 text-amber-400">~82%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">5</td>
                      <td className="px-4 py-3">Mass & Balance</td>
                      <td className="px-4 py-3">25</td>
                      <td className="px-4 py-3">60 mins</td>
                      <td className="px-4 py-3 text-amber-400">~79%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">6</td>
                      <td className="px-4 py-3">Aircraft General Knowledge (AGK)</td>
                      <td className="px-4 py-3">80</td>
                      <td className="px-4 py-3">120 mins</td>
                      <td className="px-4 py-3 text-amber-400">~76%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">7</td>
                      <td className="px-4 py-3">Operational Procedures</td>
                      <td className="px-4 py-3">45</td>
                      <td className="px-4 py-3">75 mins</td>
                      <td className="px-4 py-3 text-amber-400">~74%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">8</td>
                      <td className="px-4 py-3">Meteorology</td>
                      <td className="px-4 py-3">84</td>
                      <td className="px-4 py-3">120 mins</td>
                      <td className="px-4 py-3 text-amber-400">~71%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">9</td>
                      <td className="px-4 py-3">Radio Navigation</td>
                      <td className="px-4 py-3">66</td>
                      <td className="px-4 py-3">90 mins</td>
                      <td className="px-4 py-3 text-orange-400">~69%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">10</td>
                      <td className="px-4 py-3">General Navigation</td>
                      <td className="px-4 py-3">60</td>
                      <td className="px-4 py-3">120 mins</td>
                      <td className="px-4 py-3 text-orange-400">~67%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">11</td>
                      <td className="px-4 py-3">Flight Planning & Monitoring</td>
                      <td className="px-4 py-3">43</td>
                      <td className="px-4 py-3">120 mins</td>
                      <td className="px-4 py-3 text-orange-400">~65%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">12</td>
                      <td className="px-4 py-3">Principles of Flight</td>
                      <td className="px-4 py-3">46</td>
                      <td className="px-4 py-3">90 mins</td>
                      <td className="px-4 py-3 text-red-400">~62%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">13 (Hardest)</td>
                      <td className="px-4 py-3">Performance</td>
                      <td className="px-4 py-3">61</td>
                      <td className="px-4 py-3">120 mins</td>
                      <td className="px-4 py-3 text-red-400">~58%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          heading: "The 'Big Three' Killers: Performance, PoF, and Gen Nav",
          content: (
            <>
              <p>
                <strong>Performance</strong> is universally regarded as the hardest ATPL exam. It combines complex graph reading, multi-variable calculations, and regulatory knowledge under severe time pressure. You must calculate climb gradients, obstacle clearance, and field length requirements. One misread line on a CAP 698 graph will cascade into a wrong answer.
              </p>
              <p>
                <strong>Principles of Flight (PoF)</strong> covers lift, drag, stall, high-speed aerodynamics, and compressibility effects. It requires genuine conceptual understanding  -  you cannot memorise your way through this one. The exam frequently tests edge cases like swept-wing behaviour and Mach tuck.
              </p>
              <p>
                <strong>General Navigation</strong> humbles candidates who underestimate it. It covers charts, great circles, rhumb lines, and wind calculations. The exam is heavily calculation-based and requires fast, accurate use of the CRP-5 flight computer. Time pressure is the main reason candidates fail.
              </p>
            </>
          ),
        },
        {
          heading: "The Memory Tests: Air Law and AGK",
          content: (
            <>
              <p>
                <strong>Air Law</strong> is 100% a memory test. You must memorise specific regulation numbers, time limits, and licence requirements. There is no conceptual reasoning to rely on. The pass rate is relatively high only because the question bank covers the vast majority of what shows up in the real exam.
              </p>
              <p>
                <strong>Aircraft General Knowledge (AGK)</strong> is a broad, substantial exam covering airframes, hydraulics, pneumatics, fuel systems, electrics, and powerplants. The sheer breadth of material is what makes it demanding. You can spend weeks studying one system and still get caught out on a small detail in another.
              </p>
            </>
          ),
        },
        {
          heading: "Study Strategies That Actually Work",
          content: (
            <>
              <p>
                The most common mistake candidates make is relying entirely on question banks (like Bristol Groundschool's BGSonline or AviationExam) without understanding the underlying theory. The UK CAA frequently updates its question database specifically to catch out candidates who have memorised answers rather than learned the concepts.
              </p>
              <p>
                <strong>The optimal study loop:</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-2 mt-2 mb-4">
                <li>Read the textbook chapter or watch the ground school lecture to build the conceptual foundation.</li>
                <li>Attempt the end-of-chapter progress tests without looking at the answers.</li>
                <li>Only once you have finished the entire subject module, move to the question bank.</li>
                <li>When using the question bank, read the explanation for <em>every</em> question you get wrong. If you don't understand the explanation, go back to the textbook.</li>
                <li>Aim for consistent 90%+ scores in mock exams before sitting the real thing. The real exam environment induces stress that will naturally lower your score by 5-10%.</li>
              </ol>
              <p>
                Group your exams logically. Do not sit Performance, Gen Nav, and PoF in the same sitting. Mix calculation-heavy subjects with memory-heavy subjects (e.g., pair Gen Nav with Communications and Air Law).
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50 space-y-1">
                [1] UK Civil Aviation Authority (CAA). "Commercial pilot theory exams." <em>CAA Official Guidelines</em>.<br/>
                [2] ClearATPL. "13 ATPL Exams Ranked: Easiest to Hardest." <em>Aviation Training Data</em>.
              </p>
            </>
          ),
        }
      ]}
      relatedGuides={[
        { title: "Integrated vs Modular ATPL", href: "/guides/integrated-vs-modular", time: "9 min" },
        { title: "Pilot Training Costs UK", href: "/guides/pilot-training-costs", time: "8 min" },
        { title: "How to Become a Pilot in the UK", href: "/guides/how-to-become-a-pilot", time: "14 min" },
      ]}
    />
  );
}
