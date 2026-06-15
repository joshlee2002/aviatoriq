import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function CanadaFlightInstructor() {
  const faqSchema = [
    { question: "What is the minimum age to become a Flight Instructor in Canada?", answer: "You must be at least 18 years old to apply for a Flight Instructor Rating in Canada, a requirement consistent with Transport Canada regulations." },
    { question: "Do I need a Commercial Pilot Licence before starting Flight Instructor training?", answer: "Yes, a valid Commercial Pilot Licence (CPL) or Airline Transport Pilot Licence (ATPL) is a fundamental prerequisite for the Flight Instructor Rating, demonstrating a high level of aeronautical proficiency." },
    { question: "How long does it take to become a Flight Instructor in Canada?", answer: "The duration for Flight Instructor training typically ranges from 2 to 4 months after obtaining your CPL, depending on whether you pursue full-time or part-time study and your individual progress through the curriculum." },
    { question: "What is the difference between a Class 4 and Class 1 Flight Instructor?", answer: "A Class 4 instructor is an entry-level rating, authorized to provide flight instruction under the direct supervision of a Class 1 or 2 instructor. A Class 1 instructor represents the highest rating, permitting supervision of other instructors, advanced training, and leadership roles such as Chief Flight Instructor." },
    { question: "Are the costs for Flight Instructor training tax-deductible in Canada?", answer: "Prospective flight instructors should consult with a qualified tax professional regarding the deductibility of flight training expenses, as eligibility is subject to individual financial circumstances and evolving Canadian tax laws." }
  ];

  const relatedGuides = [
    { title: "How to Become a Pilot in Canada: A 2026 Comprehensive Guide", href: "/canada/guides/how-to-become-a-pilot-canada", time: "18 min" },
    { title: "Pilot Training Costs in Canada 2026: An In-Depth Analysis", href: "/canada/guides/pilot-training-costs-canada", time: "14 min" },
    { title: "Commercial Pilot Licence Requirements Canada: 2026 Regulatory Overview", href: "/canada/guides/commercial-pilot-licence-canada", time: "11 min" }
  ];

  const references = [
    { title: "ATAC Pilot Shortage Forecast", url: "https://www.atac.ca/news/pilot-shortage-forecast" },
    { title: "Air Canada ALPA Contract Details", url: "https://www.alpa.org/news-and-events/news-room/2024-10-01-air-canada-alpa-contract" },
    { title: "WestJet ALPA Contract Details", url: "https://www.alpa.org/news-and-events/news-room/2023-01-01-westjet-alpa-contract" },
    { title: "Jazz Aviation Careers", url: "https://www.flyjazz.ca/en/careers" },
    { title: "Canada Revenue Agency (CRA) 2026 Tax Brackets", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html" }
  ];

  return (
    <GuideLayout
      title="Mastering the Skies: Your Definitive Guide to Becoming a Flight Instructor in Canada (2026)"
      subtitle="Navigate the rigorous path to becoming a certified Flight Instructor in Canada, covering Transport Canada regulations, training, costs, and career opportunities for 2026."
      readTime="20 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Flight Instructor"
      canonical="https://aviatoriq.com/canada/guides/canada-flight-instructor"
      metaDescription="A comprehensive guide for aspiring flight instructors in Canada. Learn about Transport Canada requirements, training, costs, and career paths in 2026."
      ctaText="Check your pilot readiness"
      ctaHref="/quiz"
      faqSchema={faqSchema}
      relatedGuides={relatedGuides}
      sections={[
        {
          heading: "Introduction: The Pivotal Role of a Flight Instructor in Canadian Aviation (2026)",
          content: (
            <>
              <p>Becoming a Flight Instructor (FI) in Canada is not merely a career choice; it is a critical contribution to the nation's aviation infrastructure and safety. In 2026, the role of FIs is more vital than ever, particularly in addressing the significant pilot shortage projected to impact the Canadian aviation industry. The Air Transport Association of Canada (ATAC) forecasts a demand for 7,300 pilots, yet only approximately 680 Commercial Pilot Licences (CPLs) are issued annually, a figure that has remained stagnant for 15 years. This disparity is expected to result in a shortfall of 6,000 pilots by 2036, underscoring the indispensable role of flight instructors in training the next generation of aviators [1].</p>
              <p>This comprehensive guide provides an in-depth examination of the requirements, rigorous training processes, associated financial investments, and promising career prospects for aspiring flight instructors in Canada. All information is meticulously updated for 2026, adhering to the latest Transport Canada (TC) regulations and industry standards. The journey to becoming a certified FI demands unwavering dedication, exceptional precision, and a profound mastery of aviation principles, coupled with advanced instructional techniques.</p>
              <p>Flight Instructors transcend the traditional role of pilots; they are mentors, educators, and unwavering advocates for aviation safety. Their primary responsibility involves imparting critical theoretical knowledge and practical flying skills, ensuring that student pilots develop the requisite competence and confidence to operate aircraft safely and efficiently. Canada's vast and diverse operational environments, from the Arctic to the Pacific, rely heavily on highly qualified flight instructors to uphold its esteemed safety record and meet the escalating demand for skilled pilots across all sectors of aviation.</p>
            </>
          )
        },
        {
          heading: "Transport Canada Requirements for Flight Instructor Rating (Aeroplane)",
          content: (
            <>
              <p>To embark on the distinguished path of becoming a Flight Instructor in Canada, candidates must meticulously satisfy the stringent requirements stipulated by Transport Canada (TC) under the Canadian Aviation Regulations (CARs), specifically Standard 421. These regulations are meticulously designed to ensure that instructors possess not only superior flying acumen but also the pedagogical capabilities essential for effectively training and mentoring student pilots.</p>
              <h3>Prerequisites for Application:</h3>
              <ul>
                <li><strong>Commercial Pilot Licence (CPL) or Airline Transport Pilot Licence (ATPL):</strong> A valid CPL or ATPL is a foundational requirement, serving as irrefutable evidence of a high level of aeronautical knowledge and demonstrated flight proficiency.</li>
                <li><strong>Medical Certificate:</strong> A valid Category 1 Medical Certificate is unequivocally mandatory, guaranteeing that the instructor meets the most rigorous medical fitness standards prescribed for aviation professionals.</li>
                <li><strong>Age:</strong> Applicants must have attained a minimum age of 18 years.</li>
                <li><strong>Language Proficiency:</strong> Demonstrated proficiency in either English or French, in strict accordance with International Civil Aviation Organization (ICAO) standards, is imperative for clear and effective communication within the aviation domain.</li>
              </ul>
              <h3>Knowledge Requirements:</h3>
              <p>Applicants are mandated to demonstrate comprehensive theoretical knowledge by successfully completing Transport Canada written examinations. The specific examinations and required pass marks are contingent upon the class of instructor rating being sought:</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Examination</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Questions</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Time Limit</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Pass Mark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Flight Instructor Rating - Class 4 (AIRAF)</td>
                    <td className="px-4 py-3 text-white/80">100</td>
                    <td className="px-4 py-3 text-white/80">3 hours</td>
                    <td className="px-4 py-3 text-white/80">70%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Flight Instructor Rating - Class 2 (AIRAT)</td>
                    <td className="px-4 py-3 text-white/80">100</td>
                    <td className="px-4 py-3 text-white/80">3 hours</td>
                    <td className="px-4 py-3 text-white/80">70%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Flight Instructor Rating - Class 1 (AIRAT)</td>
                    <td className="px-4 py-3 text-white/80">100</td>
                    <td className="px-4 py-3 text-white/80">3 hours</td>
                    <td className="px-4 py-3 text-white/80">80%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Flight Instructor Rating - Aerobatic Class 1 (FITEN)</td>
                    <td className="px-4 py-3 text-white/80">25</td>
                    <td className="px-4 py-3 text-white/80">1 hour</td>
                    <td className="px-4 py-3 text-white/80">80%</td>
                  </tr>
                </tbody>
              </table>
              <p>These examinations comprehensively cover subjects such as Air Law, the Fundamentals of Instructing, and various Aeronautical Subjects. A Class 1 instructor, in particular, is expected to demonstrate not only subject matter expertise but also a profound understanding of the administrative procedures relevant to the role of a Chief Flight Instructor.</p>
            </>
          )
        },
        {
          heading: "Flight Training and Experience Requirements",
          content: (
            <>
              <p>Beyond the acquisition of theoretical knowledge, practical flight training and extensive experience are paramount for aspiring flight instructors. The training program is meticulously structured to cultivate advanced instructional techniques, foster effective communication strategies, and hone the ability to flawlessly demonstrate a diverse array of flight maneuvers.</p>
              <h3>Minimum Flight Training:</h3>
              <ul>
                <li><strong>Ground School:</strong> A minimum of 25 to 30 hours of specialized ground school instruction is required, with a dedicated focus on instructional methodologies, effective teaching techniques, and the pertinent sections of the CARs relevant to flight training.</li>
                <li><strong>Dual Flight Instruction:</strong> Candidates must complete a minimum of 30 hours of dual flight instruction under the direct supervision of a qualified flight instructor. This training segment must include at least 5 hours of instrument instruction, specifically emphasizing the practical application of instructional techniques across various complex flight scenarios.</li>
              </ul>
              <h3>Experience:</h3>
              <p>While the specific flight hour requirements are primarily fulfilled during the Commercial Pilot Licence (CPL) acquisition, the Flight Instructor Rating training builds upon this foundational experience. The core objective is to develop and refine the instructor's ability to effectively teach and mentor. For the renewal of a Flight Instructor Rating, Transport Canada may stipulate a minimum of 300 hours of flight training conducted within the preceding 24 months, alongside successful recommendations for at least four student pilots.</p>
            </>
          )
        },
        {
          heading: "Understanding Flight Instructor Rating Classes",
          content: (
            <>
              <p>Transport Canada delineates distinct classes of Flight Instructor Ratings, each endowed with specific privileges and responsibilities. A thorough understanding of these classifications is absolutely crucial for strategic career progression within the Canadian aviation instruction sector.</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Class</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Privileges</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Key Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80"><strong>Class 4</strong></td>
                    <td className="px-4 py-3 text-white/80">Authorized to provide flight instruction under the direct supervision of a Class 1 or 2 instructor. This typically represents the entry-level rating for aspiring FIs.</td>
                    <td className="px-4 py-3 text-white/80">Guiding students towards obtaining Recreational Pilot Permits, Private Pilot Licences, Commercial Pilot Licences, VFR Over-the-Top Ratings, and Night Ratings.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80"><strong>Class 3</strong></td>
                    <td className="px-4 py-3 text-white/80">Progression from Class 4, typically achieved through accumulated experience and a recommendation, without a separate examination. Offers increased autonomy.</td>
                    <td className="px-4 py-3 text-white/80">Similar instructional responsibilities to Class 4, but with enhanced experience and reduced direct supervision.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80"><strong>Class 2</strong></td>
                    <td className="px-4 py-3 text-white/80">Empowered to supervise Class 4 instructors and deliver advanced flight instruction.</td>
                    <td className="px-4 py-3 text-white/80">Supervision and mentorship of junior instructors, provision of advanced flight training, and a deeper engagement with administrative procedures within a flight school.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80"><strong>Class 1</strong></td>
                    <td className="px-4 py-3 text-white/80">The pinnacle of instructor ratings. Holders can supervise all other classes of instructors, provide the most advanced training, and assume leadership roles such as Chief Flight Instructor.</td>
                    <td className="px-4 py-3 text-white/80">Acting as a subject matter expert, training candidates for Flight Instructor Ratings, designing and evaluating comprehensive training programs, and managing entire flight training operations.</td>
                  </tr>
                </tbody>
              </table>
              <p>Progression through these distinct classes is predicated on accumulating substantial experience, undertaking additional specialized training, and successfully completing higher-level examinations and rigorous flight tests.</p>
            </>
          )
        },
        {
          heading: "Estimated Costs for Flight Instructor Training in Canada (CAD 2026)",
          content: (
            <>
              <p>The financial investment required to obtain a Flight Instructor Rating in Canada can exhibit considerable variability, influenced by factors such as the chosen flight school, geographical location, and the individual's pace of progress. The following table furnishes estimated costs in Canadian Dollars (CAD) for 2026, derived from prevailing market rates and the minimum regulatory requirements. These figures are approximate, and prospective students are strongly advised to consult directly with flight schools for precise and personalized quotations.</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Item</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Estimated Cost (CAD)</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Yearly Membership (Flight School)</td>
                    <td className="px-4 py-3 text-white/80">{">"}$200 - $300</td>
                    <td className="px-4 py-3 text-white/80">Varies by school, often an annual administrative fee.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Ground School (30 hours)</td>
                    <td className="px-4 py-3 text-white/80">{">"}$2,500 - $3,500</td>
                    <td className="px-4 py-3 text-white/80">Includes comprehensive instruction on teaching methodologies and aviation regulations.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Dual Flight Instruction (30 hours)</td>
                    <td className="px-4 py-3 text-white/80">{">"}$9,000 - $12,000</td>
                    <td className="px-4 py-3 text-white/80">Based on typical aircraft rental rates (e.g., Cessna 172R/S at $300-$400/hour) and instructor fees.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Transport Canada Written Exam Fees</td>
                    <td className="px-4 py-3 text-white/80">{">"}$100 - $200</td>
                    <td className="px-4 py-3 text-white/80">Per attempt for required written examinations.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Flight Test Fee</td>
                    <td className="px-4 py-3 text-white/80">{">"}$500 - $800</td>
                    <td className="px-4 py-3 text-white/80">Fee paid to the flight examiner for the practical test.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Study Materials & Supplies</td>
                    <td className="px-4 py-3 text-white/80">{">"}$300 - $600</td>
                    <td className="px-4 py-3 text-white/80">Includes essential textbooks, navigation charts, E6B flight computer, and logbooks.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80"><strong>Total Estimated Cost</strong></td>
                    <td className="px-4 py-3 text-white/80"><strong>$12,600 - $17,400</strong></td>
                    <td className="px-4 py-3 text-white/80">Excludes the costs associated with obtaining a CPL/ATPL, which are prerequisites.</td>
                  </tr>
                </tbody>
              </table>
              <p>Certain flight schools may offer integrated training programs that bundle these costs, potentially yielding a slight financial advantage. It is critically important to allocate additional budget for potential extra hours of training, should they be required to achieve the necessary proficiency standards.</p>
            </>
          )
        },
        {
          heading: "Career Prospects and Earning Potential: Beyond the Instructor Seat",
          content: (
            <>
              <p>A Flight Instructor Rating serves as a highly valuable credential, unlocking a diverse array of career opportunities within the dynamic aviation industry. For many aspiring airline pilots, the FI rating is a strategic stepping stone, providing an unparalleled opportunity to accumulate essential flight hours and refine critical airmanship skills.</p>
              <h3>Key Benefits of Becoming a Flight Instructor:</h3>
              <ul>
                <li><strong>Rapid Hour Building:</strong> Instructing allows for the swift accumulation of flight hours, which is often a prerequisite for meeting the minimum experience requirements of major airlines.</li>
                <li><strong>Deepened Knowledge and Mastery:</strong> The act of teaching profoundly reinforces and expands an instructor's understanding of complex aviation theory, practical application, and regulatory frameworks.</li>
                <li><strong>Enhanced Leadership & Communication Skills:</strong> The instructional role inherently develops robust leadership, impeccable communication, and decisive decision-making abilities, all highly valued in any aviation career.</li>
                <li><strong>Invaluable Networking Opportunities:</strong> Instructors frequently interact with a broad spectrum of aviation professionals, fostering invaluable connections and building a strong industry network.</li>
                <li><strong>Profound Job Satisfaction:</strong> There is immense personal and professional satisfaction derived from guiding students from their inaugural flight to the successful attainment of their pilot licences.</li>
              </ul>
              <p>With the global demand for pilots projected to remain robust, particularly within regional airlines and flight training organizations, a Flight Instructor Rating offers a stable, respected, and highly advantageous entry point or advancement opportunity within the broader aviation ecosystem.</p>

              <h3>Airline Pilot Salaries in Canada (2026 Data):</h3>
              <p>While direct flight instructor salary data can vary significantly by school and region, the FI rating often serves as a direct pathway to lucrative airline careers. The following table provides a snapshot of 2026 airline pilot salaries in Canada, based on recent collective bargaining agreements and industry data:</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Airline</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Position</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Hourly Rate (CAD)</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Annual Salary (CAD)</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Air Canada [2]</td>
                    <td className="px-4 py-3 text-white/80">Year 1 First Officer</td>
                    <td className="px-4 py-3 text-white/80">{">"}$87.48</td>
                    <td className="px-4 py-3 text-white/80">{">"}$78,732</td>
                    <td className="px-4 py-3 text-white/80">Based on new ALPA contract (Oct 2024), 42% raise over 4 years.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Air Canada [2]</td>
                    <td className="px-4 py-3 text-white/80">Senior B787 Captain (12+ yrs)</td>
                    <td className="px-4 py-3 text-white/80">{">"}$389.96</td>
                    <td className="px-4 py-3 text-white/80">{">"}$350,964</td>
                    <td className="px-4 py-3 text-white/80">Fixed-pay period reduced from 4 to 2 years.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">WestJet [3]</td>
                    <td className="px-4 py-3 text-white/80">Year 1 First Officer</td>
                    <td className="px-4 py-3 text-white/80">{">"}$86.79</td>
                    <td className="px-4 py-3 text-white/80">{">"}$80,715</td>
                    <td className="px-4 py-3 text-white/80">Based on ALPA contract (Jan 2023 - Dec 2026).</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">WestJet [3]</td>
                    <td className="px-4 py-3 text-white/80">Senior 787 Captain</td>
                    <td className="px-4 py-3 text-white/80">{">"}$345.31</td>
                    <td className="px-4 py-3 text-white/80">{">"}$321,138</td>
                    <td className="px-4 py-3 text-white/80">Non-seniority bidding for schedules; seniority for upgrades.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Jazz Aviation [4]</td>
                    <td className="px-4 py-3 text-white/80">First Officer (Base)</td>
                    <td className="px-4 py-3 text-white/80">N/A</td>
                    <td className="px-4 py-3 text-white/80">{">"}$66,894</td>
                    <td className="px-4 py-3 text-white/80">CPA with Air Canada extended to 2035. Fleet: E175, CRJ900, Dash 8-400.</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Jazz Aviation [4]</td>
                    <td className="px-4 py-3 text-white/80">Captain (Base)</td>
                    <td className="px-4 py-3 text-white/80">N/A</td>
                    <td className="px-4 py-3 text-white/80">{">"}$109,286</td>
                    <td className="px-4 py-3 text-white/80"></td>
                  </tr>
                </tbody>
              </table>
              <p>It is important to note that these figures represent base salaries and do not include additional compensation such as per diems, override pay, or benefits packages, which can significantly increase total remuneration.</p>

              <h3>Tax Implications for High Earners:</h3>
              <p>For flight instructors and airline pilots achieving higher income brackets, it is pertinent to consider the Canadian tax landscape. In 2026, federal tax brackets can reach up to 33% on taxable income exceeding $258,482. Provincial taxes will apply in addition to these federal rates [5]. Strategic financial planning is advisable for optimizing net income.</p>

              <h3>Other Aviation Opportunities:</h3>
              <p>Beyond the airlines, a Flight Instructor Rating can open doors to diverse aviation roles, including corporate aviation, charter operations, aerial survey, flight school management, and specialized flight training programs. The skills honed as an FI are highly transferable and valued across the entire aviation spectrum.</p>
            </>
          )
        },
        {
          heading: "Conclusion: Your Indispensable Contribution to Canadian Aviation",
          content: (
            <>
              <p>Becoming a Flight Instructor in Canada represents a challenging yet profoundly rewarding career trajectory. It necessitates a substantial investment of time, dedicated effort, and financial resources. However, the returns, measured in terms of personal growth, professional development, and an invaluable contribution to the broader aviation community, are immeasurable. By meticulously adhering to Transport Canada's rigorous regulations, committing to a philosophy of continuous learning, and wholeheartedly embracing the pivotal role of a mentor, you can attain this esteemed qualification and play an indispensable role in shaping the future of Canadian aviation, ensuring its continued safety and excellence for generations to come.</p>
            </>
          )
        },
        {
          heading: "References",
          content: (
            <>
              <ul>
                {references.map((ref, index) => (
                  <li key={index}><a href={ref.url} target="_blank" rel="noopener noreferrer">[{index + 1}] {ref.title}</a></li>
                ))}
              </ul>
            </>
          )
        }
      ]}
    />
  );
}
