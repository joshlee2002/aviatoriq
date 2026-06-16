import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function UsRegionalAirlinesGuide() {
  return (
    <GuideLayout
      title="Navigating the US Regional Airline Pilot Pathway: A 2026 Comprehensive Guide"
      subtitle="An in-depth exploration of the training, costs, and career progression for aspiring regional airline pilots in the United States, adhering to 2026 FAA standards."
      readTime="14 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Airline Pilot Careers"
      canonical="https://aviatoriq.com/us/guides/us-regional-airlines-guide"
      metaDescription="Comprehensive guide for aspiring regional airline pilots in the US. Covers 2026 FAA regulations, training costs, career paths, and hiring requirements."
      ctaText="Get my free US pilot roadmap"
      ctaHref="/us/roadmap"
      sections={[
        {
          heading: "The Gateway to Commercial Aviation: Understanding Regional Airlines",
          content: (
            <>
              <p>
                The journey to becoming a commercial airline pilot in the United States often begins with the regional airlines. These carriers serve as a vital feeder system to major airlines, offering invaluable experience in multi-crew, turbine aircraft operations within a structured airline environment. For 2026, the demand for qualified pilots at regional carriers remains robust, driven by retirements at major airlines and sustained growth in air travel. Aspiring aviators must navigate a complex landscape of Federal Aviation Administration (FAA) regulations, rigorous training requirements, and significant financial investment. This guide provides an authoritative and detailed roadmap for individuals committed to a career in the US regional airline sector.
              </p>
              <p className="text-sm p-3 rounded-lg my-3" style={{ background: "oklch(0.45 0.18 240 / 0.07)", border: "1px solid oklch(0.45 0.18 240 / 0.15)" }}>
                Not sure where to start? Generate your free <Link href="/us/roadmap" className="text-blue-400 underline">personalised US pilot career roadmap</Link> to get a clear path from zero to airline.
              </p>
              <p>
                Regional airlines, such as Envoy Air, Republic Airways, SkyWest Airlines, and Mesa Airlines, operate under Part 121 of the FAA regulations, similar to major carriers, but typically fly smaller aircraft on shorter routes. This operational model provides a unique training ground for new pilots, allowing them to accumulate the necessary flight hours and experience required for advancement. Understanding the nuances of this pathway, from initial flight training to securing that first officer position, is paramount for success.
              </p>
            </>
          )
        },
        {
          heading: "FAA Regulations: Part 61 vs. Part 141 Flight Training in 2026",
          content: (
            <>
              <p>
                The foundation of all pilot training in the U.S. is governed by the Federal Aviation Regulations (FARs), specifically Parts 61 and 141. Choosing between a Part 61 or Part 141 flight school is one of the most critical decisions an aspiring pilot will make, as it impacts the structure, pace, and potentially the cost of their training. Both pathways lead to the same FAA certificates, but the methodology and minimum hour requirements differ significantly.
              </p>
              <h3>Part 61 Flight Training</h3>
              <p>
                Part 61 outlines general requirements for pilot certification and offers maximum flexibility. Training is typically one-on-one with an instructor, allowing students to tailor their schedule around other commitments. This flexibility is ideal for individuals balancing work, family, or academic pursuits. While the FAA mandates a minimum of 40 flight hours for a Private Pilot License (PPL) under Part 61, the national average for completion often ranges from 60 to 75 hours due to the less structured nature and potential for inconsistent flight schedules. The pay-as-you-go billing model is common, which can ease immediate financial burden but may lead to higher overall costs if training extends over a prolonged period due to skill decay and the need for refresher lessons.
              </p>
              <h3>Part 141 Flight Training</h3>
              <p>
                Part 141 schools operate under a highly structured, FAA-approved syllabus. These programs are designed for efficiency and accelerated learning, often resembling a collegiate or academy-style environment. The FAA permits reduced minimum flight hours for certificates under Part 141; for instance, a PPL can be obtained with a minimum of 35 hours. This reduction is predicated on the rigorous, standardized curriculum and frequent evaluations (stage checks) that ensure consistent progress. Part 141 programs often require a full-time commitment and may involve upfront tuition payments or structured payment plans. While the initial cost might seem higher, the reduced hour requirements and accelerated pace can sometimes lead to lower overall expenses for dedicated students.
              </p>
              <h4>Key Differences: Part 61 vs. Part 141 (2026)</h4>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Feature</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Part 61 Training</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Part 141 Training</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Flexibility</td>
                    <td className="px-4 py-3 text-white/80">High (tailored schedule)</td>
                    <td className="px-4 py-3 text-white/80">Low (rigid, structured syllabus)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">PPL Minimum Hours</td>
                    <td className="px-4 py-3 text-white/80">40 hours</td>
                    <td className="px-4 py-3 text-white/80">35 hours</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Typical Completion Hours (PPL)</td>
                    <td className="px-4 py-3 text-white/80">60-75 hours</td>
                    <td className="px-4 py-3 text-white/80">40-55 hours</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Pace</td>
                    <td className="px-4 py-3 text-white/80">Self-paced</td>
                    <td className="px-4 py-3 text-white/80">Accelerated, full-time often recommended</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Payment Structure</td>
                    <td className="px-4 py-3 text-white/80">Pay-as-you-go</td>
                    <td className="px-4 py-3 text-white/80">Upfront tuition or structured plans</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">FAA Oversight</td>
                    <td className="px-4 py-3 text-white/80">General requirements</td>
                    <td className="px-4 py-3 text-white/80">Approved syllabus, regular inspections</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">GI Bill Eligibility</td>
                    <td className="px-4 py-3 text-white/80">Limited</td>
                    <td className="px-4 py-3 text-white/80">Often eligible (check specific programs)</td>
                  </tr>
                </tbody>
              </table>
              <p>
                For aspiring regional airline pilots, Part 141 programs are often favored due to their structured nature, potential for reduced hours, and the accelerated path to meeting airline hiring minimums. Many airlines also have established cadet programs or partnerships with Part 141 schools, offering clearer pathways to employment. However, a hybrid approach—starting with Part 61 for initial certificates and transitioning to Part 141 for advanced ratings—can also be effective, allowing for initial flexibility before committing to an intensive program.
              </p>
            </>
          )
        },
        {
          heading: "The Pilot Training Pathway: From Zero to Regional First Officer",
          content: (
            <>
              <p>
                The journey to the right seat of a regional jet is a multi-stage process, requiring dedication, perseverance, and significant investment. Each certificate and rating builds upon the last, culminating in the Airline Transport Pilot (ATP) certificate, which is mandatory for airline operations. The typical progression is as follows:
              </p>
              <h3>1. Private Pilot License (PPL)</h3>
              <p>
                This is the entry point, allowing you to fly an aircraft solo and carry passengers under Visual Flight Rules (VFR). Training covers basic aerodynamics, flight maneuvers, navigation, and FAA regulations. It typically requires 40-75 hours of flight time, depending on the chosen Part (61 or 141) and individual aptitude.
              </p>
              <h3>2. Instrument Rating (IR)</h3>
              <p>
                The IR allows you to fly under Instrument Flight Rules (IFR), navigating solely by reference to instruments, crucial for flying in adverse weather conditions or through controlled airspace. This rating is indispensable for airline operations. Training involves complex navigation, instrument approaches, and emergency procedures.
              </p>
              <h3>3. Commercial Pilot License (CPL)</h3>
              <p>
                The CPL permits you to be compensated for flying. It requires a higher level of precision and proficiency than the PPL. The minimum flight time for a CPL is 250 hours under Part 61 or 190 hours under Part 141. Many aspiring airline pilots will also add a Complex and High-Performance endorsement during this phase.
              </p>
              <h3>4. Multi-Engine Rating (ME)</h3>
              <p>
                Essential for flying regional jets, this rating allows you to operate aircraft with more than one engine. Training focuses on multi-engine aerodynamics, engine-out procedures, and advanced aircraft systems. This is often integrated into CPL training or added shortly thereafter.
              </p>
              <h3>5. Certified Flight Instructor (CFI/CFII/MEI)</h3>
              <p>
                Becoming a flight instructor is the most common and efficient way for aspiring airline pilots to build the significant flight hours required for the Airline Transport Pilot (ATP) certificate. As a CFI, you teach new students, reinforcing your own knowledge and skills while earning an income. Additional ratings like CFII (Instrument Instructor) and MEI (Multi-Engine Instructor) further enhance marketability and hour-building opportunities.
              </p>
              <h3>6. Airline Transport Pilot (ATP) Certificate / Restricted ATP (R-ATP)</h3>
              <p>
                The ATP is the highest level of pilot certification and is required to act as an airline pilot. It mandates a minimum of 1,500 hours of total flight time. However, certain qualifications can reduce this requirement under the Restricted ATP (R-ATP) rule:
                <ul>
                  <li><strong>1,000 hours:</strong> Graduates of an FAA-approved Part 141 collegiate program with a bachelor's degree in aviation.</li>
                  <li><strong>1,250 hours:</strong> Graduates of an FAA-approved Part 141 collegiate program with an associate's degree in aviation, or graduates of an FAA-approved Part 141 program without a degree but with at least 60 semester credit hours.</li>
                </ul>
                The R-ATP allows pilots to serve as a First Officer for an airline before reaching the full 1,500 hours, accelerating entry into the airline industry. All ATP candidates must also complete the ATP Certification Training Program (ATP CTP) before taking the ATP written exam.
              </p>
            </>
          )
        },
        {
          heading: "Estimated Costs and Financing Your Pilot Career (2026)",
          content: (
            <>
              <p>
                The financial investment required to become a regional airline pilot is substantial, often ranging from $80,000 to $120,000+ for a zero-to-hero training path (PPL through CFI/MEI). These figures encompass aircraft rental, instructor fees, ground school materials, FAA exam fees, and supplies. The total cost can vary significantly based on the chosen flight school (Part 61 vs. 141), individual learning pace, and geographic location.
              </p>
              <h4>Typical Cost Breakdown (Estimated 2026 USD)</h4>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Certificate/Rating</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Estimated Cost Range (USD)</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Typical Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Private Pilot License (PPL)</td>
                    <td className="px-4 py-3 text-white/80">$10,000 - $18,000</td>
                    <td className="px-4 py-3 text-white/80">40-75</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Instrument Rating (IR)</td>
                    <td className="px-4 py-3 text-white/80">$12,000 - $20,000</td>
                    <td className="px-4 py-3 text-white/80">40-60</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Commercial Pilot License (CPL)</td>
                    <td className="px-4 py-3 text-white/80">$20,000 - $35,000</td>
                    <td className="px-4 py-3 text-white/80">110-190 (Part 141) / 250 (Part 61 total time)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Multi-Engine Rating (ME)</td>
                    <td className="px-4 py-3 text-white/80">$6,000 - $10,000</td>
                    <td className="px-4 py-3 text-white/80">10-15</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Certified Flight Instructor (CFI/CFII/MEI)</td>
                    <td className="px-4 py-3 text-white/80">$8,000 - $15,000</td>
                    <td className="px-4 py-3 text-white/80">20-40 per rating</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">ATP CTP Course</td>
                    <td className="px-4 py-3 text-white/80">$5,000 - $8,000</td>
                    <td className="px-4 py-3 text-white/80">N/A (ground/simulator)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80"><strong>Total Estimated Range</strong></td>
                    <td className="px-4 py-3 text-white/80"><strong>$80,000 - $120,000+</strong></td>
                    <td className="px-4 py-3 text-white/80"><strong>250-1500 (total time)</strong></td>
                  </tr>
                </tbody>
              </table>
              <p>
                It is crucial to budget not only for flight training but also for living expenses, study materials, medical exams, and unforeseen costs. Many flight schools offer comprehensive programs that bundle these costs, often with financing options.
              </p>
              <h3>Financing Options</h3>
              <p>
                Several avenues exist to finance pilot training:
                <ul>
                  <li><strong>Student Loans:</strong> Specialized aviation lenders (e.g., Stratus Financial, Flight Training Finance, Sallie Mae) offer loans specifically for flight training. These often have more favorable terms than traditional personal loans.</li>
                  <li><strong>GI Bill Benefits:</strong> Eligible veterans can utilize their GI Bill benefits for Part 141 flight training programs.</li>
                  <li><strong>Scholarships:</strong> Numerous aviation organizations (e.g., AOPA, EAA, Ninety-Nines) offer scholarships to aspiring pilots.</li>
                  <li><strong>Airline Cadet Programs:</strong> Some regional and major airlines offer cadet programs that provide financial assistance, mentorship, and a direct path to employment upon completion of training and hour requirements.</li>
                  <li><strong>Personal Savings/Family Support:</strong> A significant portion of funding often comes from personal savings or support from family.</li>
                </ul>
                Thorough research into financing options and careful financial planning are essential before embarking on this career path.
              </p>
            </>
          )
        },
        {
          heading: "Regional Airline Hiring Requirements and Career Progression (2026)",
          content: (
            <>
              <p>
                Once an aspiring pilot has accumulated the necessary certificates, ratings, and flight hours, the focus shifts to securing a position with a regional airline. While specific requirements can vary slightly between carriers, general qualifications for a First Officer position in 2026 typically include:
              </p>
              <ul>
                <li><strong>FAA Commercial Pilot Certificate</strong> with Multi-Engine and Instrument Ratings.</li>
                <li><strong>FAA Airline Transport Pilot (ATP) Certificate</strong> or eligibility for a Restricted ATP (R-ATP).</li>
                <li><strong>First Class FAA Medical Certificate.</strong></li>
                <li><strong>Minimum Flight Hours:</strong> 1,500 hours total time (or 1,000/1,250 for R-ATP eligible candidates). This typically includes specific minimums for multi-engine, cross-country, and night flying.</li>
                <li><strong>Clean FAA Record:</strong> No history of FAA violations or accidents.</li>
                <li><strong>Valid Passport</strong> and legal right to work in the United States.</li>
                <li><strong>Bachelor's Degree:</strong> While not always strictly required, a four-year degree is highly preferred by many airlines and can accelerate career progression.</li>
                <li><strong>Strong Interview Performance:</strong> Both technical and HR interviews are standard.</li>
              </ul>
              <p>
                Regional airlines are actively recruiting, with many offering competitive pay, benefits, and clear pathways to major airlines. Examples of prominent US regional airlines include:
                <ul>
                  <li><strong>Envoy Air (American Airlines Group)</strong></li>
                  <li><strong>Piedmont Airlines (American Airlines Group)</strong></li>
                  <li><strong>PSA Airlines (American Airlines Group)</strong></li>
                  <li><strong>Republic Airways (operates for American Eagle, Delta Connection, United Express)</strong></li>
                  <li><strong>SkyWest Airlines (operates for Alaska Airlines, American Eagle, Delta Connection, United Express)</strong></li>
                  <li><strong>Mesa Airlines (operates for American Eagle, United Express)</strong></li>
                  <li><strong>CommutAir (United Express)</strong></li>
                  <li><strong>GoJet Airlines (United Express)</strong></li>
                </ul>
              </p>
              <h3>Career Progression</h3>
              <p>
                The traditional career progression involves spending 2-5 years as a First Officer at a regional airline, building experience and upgrading to Captain. After accumulating sufficient turbine time and meeting major airline hiring minimums (typically 2,500-5,000+ hours of total time, with significant turbine PIC time), pilots can then transition to a major airline. Many regional airlines have "flow-through" or "cadet" programs that offer a direct path to their major airline partners (e.g., American Airlines, Delta Air Lines, United Airlines) upon meeting specific criteria. These programs significantly de-risk the transition to a major carrier and are highly sought after.
              </p>
              <h4>Major Airline Flow-Through Programs (Examples)</h4>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Regional Airline</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Major Airline Partner</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Program Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Envoy Air</td>
                    <td className="px-4 py-3 text-white/80">American Airlines</td>
                    <td className="px-4 py-3 text-white/80">Flow-Through</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Piedmont Airlines</td>
                    <td className="px-4 py-3 text-white/80">American Airlines</td>
                    <td className="px-4 py-3 text-white/80">Flow-Through</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">PSA Airlines</td>
                    <td className="px-4 py-3 text-white/80">American Airlines</td>
                    <td className="px-4 py-3 text-white/80">Flow-Through</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Republic Airways</td>
                    <td className="px-4 py-3 text-white/80">American, Delta, United</td>
                    <td className="px-4 py-3 text-white/80">Cadet/Pathway</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">SkyWest Airlines</td>
                    <td className="px-4 py-3 text-white/80">Alaska, American, Delta, United</td>
                    <td className="px-4 py-3 text-white/80">Cadet/Pathway</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Mesa Airlines</td>
                    <td className="px-4 py-3 text-white/80">American, United</td>
                    <td className="px-4 py-3 text-white/80">Cadet/Pathway</td>
                  </tr>
                </tbody>
              </table>
              <p>
                The current pilot demand forecast for 2026 and beyond indicates a continued need for new pilots, ensuring that the regional airline pathway remains a viable and attractive career option for those dedicated to the profession.
              </p>
            </>
          )
        },
        {
          heading: "Challenges and Rewards of a Regional Airline Pilot Career",
          content: (
            <>
              <p>
                The path to becoming a regional airline pilot is undoubtedly challenging, demanding significant financial investment, rigorous training, and personal sacrifice. However, the rewards are substantial, offering a dynamic career with excellent earning potential and the opportunity to fly advanced aircraft.
              </p>
              <h3>Challenges:</h3>
              <ul>
                <li><strong>Financial Burden:</strong> The high cost of training requires careful financial planning and often involves taking on student loans.</li>
                <li><strong>Time Commitment:</strong> The training process is intensive and can take 2-4 years to complete, followed by several years at a regional airline before transitioning to a major.</li>
                <li><strong>Demanding Lifestyle:</strong> Regional pilots often face irregular schedules, significant time away from home, and the pressures of operating in a highly regulated environment.</li>
                <li><strong>Initial Compensation:</strong> While improving, initial first officer salaries at regional airlines may be lower than other professions requiring similar levels of education and training, though rapid progression and significant pay increases are typical with experience and upgrades.</li>
              </ul>
              <h3>Rewards:</h3>
              <ul>
                <li><strong>Career Progression:</strong> A clear and established pathway to major airlines, offering long-term career stability and high earning potential.</li>
                <li><strong>Dynamic Work Environment:</strong> Flying modern aircraft, visiting diverse locations, and facing new challenges daily.</li>
                <li><strong>Professional Development:</strong> Continuous learning and skill enhancement in a highly skilled profession.</li>
                <li><strong>Job Security:</strong> Strong demand for qualified pilots ensures excellent job prospects for the foreseeable future.</li>
                <li><strong>Prestige and Satisfaction:</strong> The immense satisfaction of a challenging and rewarding career, contributing to global connectivity and safety.</li>
              </ul>
            </>
          )
        },
        {
          heading: "Conclusion: Your Future in the Cockpit",
          content: (
            <>
              <p>
                The US regional airline pilot pathway in 2026 represents a challenging yet highly rewarding career choice. With meticulous planning, unwavering dedication, and a clear understanding of the FAA regulations, training requirements, and financial commitments, aspiring aviators can successfully navigate this journey. The demand for skilled pilots remains strong, and the regional airlines offer an unparalleled opportunity to gain the experience necessary to achieve the ultimate goal of flying for a major carrier. Your future in the cockpit awaits.
              </p>
            </>
          )
        },
      ]}
      faqSchema={[
        { 
          question: "What are the minimum flight hours required to become a regional airline pilot in 2026?", 
          answer: "To become a regional airline pilot, you generally need an Airline Transport Pilot (ATP) certificate, which requires 1,500 hours of total flight time. However, a Restricted ATP (R-ATP) allows pilots to start with 1,000 hours (for graduates of FAA-approved Part 141 collegiate aviation programs with a bachelor's degree) or 1,250 hours (for those with an associate's degree or 60 semester credit hours from a Part 141 program)."
        },
        { 
          question: "How much does it cost to become a regional airline pilot in the US?", 
          answer: "The total cost for pilot training from zero experience to becoming eligible for a regional airline (PPL, IR, CPL, ME, CFI, ATP CTP) typically ranges from $80,000 to $120,000+ in 2026. This can vary based on the flight school, individual learning pace, and chosen training path (Part 61 vs. Part 141)."
        },
        { 
          question: "What is the difference between Part 61 and Part 141 flight training?", 
          answer: "Part 61 training offers flexibility, allowing students to train at their own pace with an instructor, often on a pay-as-you-go basis. Part 141 training is a highly structured, FAA-approved curriculum, often full-time and accelerated, with reduced minimum flight hour requirements. Both lead to the same FAA certificates, but Part 141 is often favored for career-oriented pilots due to its efficiency and potential for R-ATP eligibility."
        },
        { 
          question: "Which regional airlines offer flow-through programs to major carriers?", 
          answer: "Many regional airlines have flow-through or cadet programs with major airline partners. Examples include Envoy Air, Piedmont Airlines, and PSA Airlines (all with American Airlines), and Republic Airways and SkyWest Airlines (with various major partners like American, Delta, and United). These programs provide a direct path to a major airline upon meeting specific criteria."
        },
        { 
          question: "Is a college degree required to become a regional airline pilot?", 
          answer: "While not always strictly required, a four-year college degree is highly preferred by many airlines and can significantly accelerate career progression, particularly by making you eligible for a Restricted ATP (R-ATP) with fewer flight hours. Some airlines may consider experience in lieu of a degree, but a degree is generally an advantage."
        }
      ]}
      relatedGuides={[
        { title: "How to Become a Pilot in the US", href: "/us/guides/how-to-become-a-pilot", time: "15 min" },
        { title: "US Pilot Training Costs 2026", href: "/us/guides/pilot-training-costs-usa", time: "12 min" },
        { title: "Major Airline Pilot Career Path US", href: "/us/guides/major-airlines-hiring-usa", time: "18 min" }
      ]}
    />
  );
}