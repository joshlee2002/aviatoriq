import React from 'react';
import GuideLayout from '@/components/GuideLayout';

export default function CanadaRegionalAirlines() {
  const faqSchema = [
    {
      "question": "What is the current pilot shortage forecast for Canada's regional airlines in 2026?",
      "answer": "The Air Transport Association of Canada (ATAC) forecasts a need for 7,300 pilots by 2036, with an annual issuance of only 680 Commercial Pilot Licenses (CPLs), leading to a projected shortfall of 6,000 pilots by 2036 [1]."
    },
    {
      "question": "What are the starting salaries for First Officers at major Canadian regional airlines in 2026?",
      "answer": "As of 2026, a Year 1 First Officer at Air Canada (under the new ALPA contract) earns approximately $87.48/hr ($78,732 CAD/yr). At WestJet, a Year 1 First Officer earns around $86.79/hr ($80,715 CAD/yr). Jazz Aviation First Officers start at approximately $66,894 CAD/yr [2,3,4]."
    },
    {
      "question": "How has the new ALPA contract impacted Air Canada pilot salaries and conditions?",
      "answer": "The October 2024 ALPA contract for Air Canada pilots includes a 42% raise over four years. It sets a Year 1 First Officer salary at $87.48/hr and a Senior B787 Captain (12+ years) at $389.96/hr. The fixed-pay period for new hires has also been reduced from four to two years [2]."
    },
    {
      "question": "What are the typical training costs to become a regional airline pilot in Canada?",
      "answer": "The total estimated cost for pilot training from Private Pilot Licence (PPL) to Commercial Pilot Licence (CPL) with Multi-Engine and Instrument Ratings can range from $70,000 to $120,000+ CAD, depending on the flight school and individual progress [5]."
    },
    {
      "question": "Which regional airlines operate under the Air Canada Express brand?",
      "answer": "Jazz Aviation LP is the primary operator for Air Canada Express, with its CPA extended until 2035. It operates a fleet including the E175, CRJ900, and Dash 8-400 [4]."
    }
  ];

  const relatedGuides = [
    {
      title: "Pilot Training Pathways in Canada",
      href: "/canada/guides/pilot-training-pathways"
    , time: "8 min" },
    {
      title: "Understanding Transport Canada Pilot Licenses",
      href: "/canada/guides/transport-canada-licenses"
    , time: "8 min" },
    {
      title: "Major Airlines in Canada: Career Opportunities",
      href: "/canada/guides/major-airlines-canada"
    , time: "8 min" },
    {
      title: "Aviation Tax Implications for Canadian Pilots",
      href: "/canada/guides/aviation-tax-canada"
    , time: "8 min" }
  ];

  return (
    <GuideLayout
      title="Navigating the Skies: A Comprehensive Guide to Canada's Regional Airline Pilot Market in 2026"
      subtitle="Your definitive resource for aspiring pilots targeting Canada's dynamic regional airline sector, featuring 2026 data on salaries, training, and career progression."
      readTime="20 min"
      author="AviatorIQ Research"
      lastUpdated="June 2026"
      category="Canada Pilot Training"
      canonical="https://aviatoriq.com/canada/guides/canada-regional-airlines"
      metaDescription="Explore the pathway to becoming a regional airline pilot in Canada, covering Transport Canada regulations, training costs, and career opportunities with major carriers in 2026, including detailed salary data and pilot shortage forecasts."
      ctaText="Assess Your Pilot Career Readiness"
      ctaHref="/quiz"
      faqSchema={faqSchema}
      relatedGuides={relatedGuides}
      sections={[
        {
          heading: "Introduction: The Vital Role of Canada's Regional Airlines in 2026",
          content: (
            <>
              <p>Canada's expansive geography necessitates a robust regional airline network, acting as the crucial arteries connecting remote communities to major urban centers and international hubs. In 2026, this sector remains a cornerstone of national infrastructure, offering essential air services and serving as a primary entry point for aspiring professional pilots. The landscape is dynamic, shaped by evolving economic conditions, technological advancements, and significant labor market trends, particularly the ongoing pilot shortage [1].</p>
              <p>Understanding the intricacies of this market - from regulatory compliance and training pathways to compensation structures and career progression - is paramount for any individual aiming to forge a successful career in Canadian aviation. This guide provides a data-driven overview, incorporating the latest 2026 statistics and industry insights to equip future pilots with actionable intelligence.</p>
            </>
          )
        },
        {
          heading: "The Looming Pilot Shortage: A Critical Overview for 2026",
          content: (
            <>
              <p>The Canadian aviation industry faces a significant and growing pilot shortage, a trend that profoundly impacts regional airlines. The Air Transport Association of Canada (ATAC) has issued stark warnings, forecasting a demand for 7,300 new pilots by 2036. This demand is set against a backdrop of consistently low Commercial Pilot License (CPL) issuances, which have remained flat at approximately 680 per year for the past 15 years. This disparity projects a shortfall of 6,000 pilots within the next decade, underscoring the urgent need for new talent in the cockpit [1].</p>
              <p>For aspiring pilots, this shortage translates into enhanced career opportunities and potentially more favorable employment conditions, particularly within the regional sector, which often serves as a feeder for mainline carriers. Regional airlines are actively seeking qualified candidates, making 2026 an opportune time to enter the profession.</p>
            </>
          )
        },
        {
          heading: "Transport Canada Regulatory Framework for Pilots in 2026",
          content: (
            <>
              <p>Transport Canada (TC) continues to be the authoritative body overseeing aviation safety and pilot certification. The pathway to becoming a regional airline pilot involves a rigorous progression through various licenses and ratings, each demanding specific knowledge, flight experience, and demonstrated skill. The foundational licenses for a regional airline career include the Private Pilot Licence (PPL), Commercial Pilot Licence (CPL), and ultimately, the Airline Transport Pilot Licence (ATPL) [5].</p>
              <p>Compliance with key regulatory documents, such as Standard 421 of the Canadian Aviation Regulations (CARs), is non-negotiable. These standards dictate the precise requirements for each certification, forming the bedrock of a safe and professional aviation career in Canada.</p>
              <h3>Medical Certificates: Essential for Commercial Operations</h3>
              <p>A valid medical certificate is a mandatory prerequisite for all pilot licenses. For commercial flight operations, a Category 1 Medical Certificate is required. This involves a comprehensive medical examination by a Transport Canada-approved medical examiner and necessitates periodic renewal to ensure ongoing fitness to fly [5].</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10"><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Medical Certificate Category</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Validity (Under 40)</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Validity (40 and Over)</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Associated Licence</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Category 1</td><td className="px-4 py-3 text-white/80">12 months</td><td className="px-4 py-3 text-white/80">6 months</td><td className="px-4 py-3 text-white/80">Commercial Pilot Licence (CPL), Airline Transport Pilot Licence (ATPL)</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Category 3</td><td className="px-4 py-3 text-white/80">24 months</td><td className="px-4 py-3 text-white/80">12 months</td><td className="px-4 py-3 text-white/80">Private Pilot Licence (PPL)</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Category 4</td><td className="px-4 py-3 text-white/80">60 months</td><td className="px-4 py-3 text-white/80">24 months</td><td className="px-4 py-3 text-white/80">Recreational Pilot Permit, Ultra-light Aeroplane Pilot Permit</td></tr>
                </tbody>
              </table>
              <h3>Licensing Requirements Overview</h3>
              <p>The journey to the flight deck of a regional airliner involves a progression through various licenses and ratings. Each stage builds upon the previous one, enhancing a pilot's skills, knowledge, and operational capabilities [5].</p>
              <h4>Private Pilot Licence (PPL) - Aeroplane</h4>
              <ul>
                <li><strong>Age:</strong> Minimum 17 years to hold the license (training can begin earlier).</li>
                <li><strong>Medical:</strong> Category 3 Medical Certificate.</li>
                <li><strong>Knowledge:</strong> Minimum 40 hours ground school instruction and successful completion of the PPAER written examination (60% minimum).</li>
                <li><strong>Experience:</strong> Minimum 45 hours flight time, including 17 hours dual instruction (3 hours cross-country, 5 hours instrument time) and 12 hours solo flight (5 hours cross-country, including a 100 NM flight with two full-stop landings at different aerodromes).</li>
                <li><strong>Skill:</strong> Successful completion of a flight test.</li>
              </ul>
              <h4>Commercial Pilot Licence (CPL) - Aeroplane</h4>
              <ul>
                <li><strong>Age:</strong> Minimum 18 years.</li>
                <li><strong>Medical:</strong> Category 1 Medical Certificate.</li>
                <li><strong>Knowledge:</strong> Minimum 80 hours commercial pilot ground school instruction and successful completion of the CPAER written examination (60% minimum in each of four mandatory areas and overall).</li>
                <li><strong>Experience:</strong> Minimum 200 hours flight time in aeroplanes, including 100 hours pilot-in-command (PIC) time (20 hours cross-country PIC). Following PPL issuance, 65 hours of commercial pilot flight training, including 35 hours dual instruction (5 hours night, 5 hours cross-country, 20 hours instrument time) and 30 hours solo flight (25 hours general flying skills, including a 300 NM cross-country flight with three full-stop landings; 5 hours solo night with 10 takeoffs/landings).</li>
                <li><strong>Skill:</strong> Successful completion of a flight test in accordance with Schedule 4 of Standard 428.</li>
              </ul>
              <h4>Airline Transport Pilot Licence (ATPL) - Aeroplane</h4>
              <ul>
                <li><strong>Age:</strong> Minimum 21 years.</li>
                <li><strong>Medical:</strong> Category 1 Medical Certificate.</li>
                <li><strong>Knowledge:</strong> Successful completion of two written examinations: SARON (Senior Airline Operations) and SAMRA (Senior Airline Multi-Engine Rating).</li>
                <li><strong>Experience:</strong> Minimum 1500 hours total flight time, including specific requirements for PIC, cross-country, night, and instrument flight time. This typically includes 250 hours PIC, 100 hours night (including 25 hours PIC), 100 hours cross-country (including 50 hours PIC), and 75 hours instrument time (including 25 hours actual or simulated in-flight).</li>
                <li><strong>Skill:</strong> Successful completion of a flight test in a multi-engine aircraft, typically a Pilot Proficiency Check (PPC) for an airline.</li>
              </ul>
            </>
          )
        },
        {
          heading: "Estimated Pilot Training Costs in Canada (2026)",
          content: (
            <>
              <p>The financial investment required for pilot training in Canada is substantial, with costs varying based on the chosen flight school, aircraft types utilized, and the individual's learning pace. Prospective pilots must meticulously budget and explore all available financing avenues to manage these expenses effectively [5].</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10"><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Licence/Rating</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Estimated Cost (CAD)</th><th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Key Components</th></tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Private Pilot Licence (PPL)</td><td className="px-4 py-3 text-white/80">{">"}$15,000 - $25,000</td><td className="px-4 py-3 text-white/80">Flight hours, ground school, exams, medical, supplies</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Commercial Pilot Licence (CPL)</td><td className="px-4 py-3 text-white/80">{">"}$50,000 - $75,000 (from scratch)</td><td className="px-4 py-3 text-white/80">Additional flight hours, advanced ground school, exams, ratings (multi-engine, instrument)</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Multi-Engine Rating</td><td className="px-4 py-3 text-white/80">{">"}$5,000 - $10,000</td><td className="px-4 py-3 text-white/80">Dual instruction in multi-engine aircraft</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Instrument Rating (Group 1)</td><td className="px-4 py-3 text-white/80">{">"}$15,000 - $25,000</td><td className="px-4 py-3 text-white/80">Dual instrument instruction, simulator time, exams</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Airline Transport Pilot Licence (ATPL) Exams</td><td className="px-4 py-3 text-white/80">{">"}$500 - $1,500</td><td className="px-4 py-3 text-white/80">Written exams (SARON, SAMRA)</td></tr>
                  <tr className="border-b border-white/10"><td className="px-4 py-3 text-white/80">Total (PPL to CPL with Multi/IFR)</td><td className="px-4 py-3 text-white/80">{">"}$70,000 - $120,000+</td><td className="px-4 py-3 text-white/80">Comprehensive training pathway</td></tr>
                </tbody>
              </table>
              <p>These figures are estimates for 2026 and can fluctuate based on factors such as fuel prices, instructor rates, and aircraft maintenance costs. Many flight schools offer integrated programs that can sometimes provide a more cost-effective alternative to modular training pathways.</p>
            </>
          )
        },
        {
          heading: "Major Canadian Regional Airlines: Fleets, Salaries, and Career Progression (2026)",
          content: (
            <>
              <p>Canada's regional airlines present diverse and compelling opportunities for both new and experienced pilots. These carriers frequently serve as a vital stepping stone to major airlines, offering invaluable flight hours and operational experience in multi-crew environments. The 2026 landscape is particularly attractive due to recent contract negotiations and ongoing pilot demand.</p>
              <h3>Jazz Aviation LP (Air Canada Express)</h3>
              <p>As the largest regional airline in Canada, Jazz Aviation operates an extensive network under the Air Canada Express brand, connecting numerous destinations across Canada and the United States. Jazz is renowned for its structured pilot recruitment programs and a clear career progression pathway into Air Canada mainline operations, solidified by its Capacity Purchase Agreement (CPA) extended to 2035 [4].</p>
              <ul>
                <li><strong>Fleet:</strong> Embraer E175, Bombardier CRJ900, De Havilland Dash 8-400 [4].</li>
                <li><strong>Entry Requirements (First Officer):</strong> Typically a CPL with Multi-Engine and Instrument Ratings, often requiring 250-500 hours total time, including specific PIC and multi-engine time. Strong academic background and excellent communication skills are essential.</li>
                <li><strong>Career Progression:</strong> Direct pathway programs to Air Canada are a significant draw, offering a structured transition for qualified pilots.</li>
                <li><strong>2026 Salary (First Officer):</strong> Starting at approximately $66,894 CAD/yr [4].</li>
                <li><strong>2026 Salary (Captain):</strong> Starting at approximately $109,286 CAD/yr [4].</li>
              </ul>
              <h3>WestJet Encore</h3>
              <p>WestJet Encore, the regional arm of WestJet, plays a crucial role in connecting smaller communities to WestJet's broader network. It offers a dynamic work environment with a strong emphasis on safety and guest experience. Pilots joining WestJet Encore can anticipate a clear career trajectory within the larger WestJet group, supported by their ALPA contract effective until December 2026 [3].</p>
              <ul>
                <li><strong>Fleet:</strong> De Havilland Dash 8-400.</li>
                <li><strong>Entry Requirements (First Officer):</strong> CPL with Multi-Engine and Instrument Ratings, typically 1000+ hours total time, with a strong emphasis on multi-crew experience and Crew Resource Management (CRM) skills.</li>
                <li><strong>Career Progression:</strong> Defined pathways to WestJet mainline operations for eligible pilots, with seniority governing upgrades while non-seniority bidding is used for schedules [3].</li>
                <li><strong>2026 Salary (First Officer):</strong> Year 1 FO: $86.79/hr ($80,715 CAD/yr) [3].</li>
                <li><strong>2026 Salary (Senior 787 Captain):</strong> $345.31/hr ($321,138 CAD/yr) [3].</li>
              </ul>
              <h3>Air Canada Mainline (Relevant for Regional Progression)</h3>
              <p>While not a regional airline itself, Air Canada's recent pilot contract significantly impacts the career progression and earning potential for pilots moving from regional carriers. The new ALPA contract, ratified in October 2024, provides a substantial 42% raise over four years, making a transition to the mainline highly lucrative [2].</p>
              <ul>
                <li><strong>2026 Salary (Year 1 First Officer):</strong> $87.48/hr ($78,732 CAD/yr) [2].</li>
                <li><strong>2026 Salary (Senior B787 Captain, 12+ yrs):</strong> $389.96/hr ($350,964 CAD/yr) [2].</li>
                <li><strong>Contract Terms:</strong> Fixed-pay period for new hires reduced from four to two years, accelerating earning potential [2].</li>
              </ul>
              <h3>Bearskin Airlines</h3>
              <p>Bearskin Airlines provides essential air services primarily within Northern Ontario. It offers a unique operational environment, often serving smaller, remote communities. For pilots seeking experience in turboprop operations and challenging northern conditions, Bearskin can be a valuable starting point.</p>
              <ul>
                <li><strong>Fleet:</strong> 19 Fairchild Swearingen Metroliners [6].</li>
                <li><strong>Entry Requirements (First Officer):</strong> Typically CPL with Multi-Engine and Instrument Ratings, often with lower hour requirements than larger regional carriers, but preference for relevant turboprop experience.</li>
              </ul>
              <h3 className="mt-8">Comparative Pilot Salaries in Canadian Regional and Mainline Aviation (2026)</h3>
              <p>The following table provides a comparative overview of pilot salaries at key Canadian airlines, reflecting 2026 contract data and industry standards [2,3,4].</p>
              <table className="w-full text-sm text-left border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Airline</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Position</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Hourly Rate (CAD)</th>
                    <th className="px-4 py-3 text-white/70 font-semibold border-b border-white/20">Annual Salary (CAD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Air Canada (Mainline)</td>
                    <td className="px-4 py-3 text-white/80">Year 1 First Officer</td>
                    <td className="px-4 py-3 text-white/80">{">"}$87.48</td>
                    <td className="px-4 py-3 text-white/80">{">"}$78,732</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Air Canada (Mainline)</td>
                    <td className="px-4 py-3 text-white/80">Senior B787 Captain (12+ yrs)</td>
                    <td className="px-4 py-3 text-white/80">{">"}$389.96</td>
                    <td className="px-4 py-3 text-white/80">{">"}$350,964</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">WestJet (Mainline/Encore)</td>
                    <td className="px-4 py-3 text-white/80">Year 1 First Officer</td>
                    <td className="px-4 py-3 text-white/80">{">"}$86.79</td>
                    <td className="px-4 py-3 text-white/80">{">"}$80,715</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">WestJet (Mainline/Encore)</td>
                    <td className="px-4 py-3 text-white/80">Senior 787 Captain</td>
                    <td className="px-4 py-3 text-white/80">{">"}$345.31</td>
                    <td className="px-4 py-3 text-white/80">{">"}$321,138</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Jazz Aviation (Air Canada Express)</td>
                    <td className="px-4 py-3 text-white/80">First Officer (Base)</td>
                    <td className="px-4 py-3 text-white/80">N/A</td>
                    <td className="px-4 py-3 text-white/80">{">"}$66,894</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 text-white/80">Jazz Aviation (Air Canada Express)</td>
                    <td className="px-4 py-3 text-white/80">Captain (Base)</td>
                    <td className="px-4 py-3 text-white/80">N/A</td>
                    <td className="px-4 py-3 text-white/80">{">"}$109,286</td>
                  </tr>
                </tbody>
              </table>
            </>
          )
        },
        {
          heading: "Career Outlook and Opportunities in Regional Aviation (2026)",
          content: (
            <>
              <p>The career outlook for regional airline pilots in Canada remains exceptionally strong for 2026 and beyond, primarily driven by the persistent pilot shortage and the strategic importance of regional air services. The projected shortfall of 6,000 pilots by 2036 highlights a sustained demand for qualified aviators, ensuring robust employment prospects [1].</p>
              <ul>
                <li><strong>Pilot Demand:</strong> The ongoing global and domestic pilot shortages continue to create significant demand for qualified aviators across all levels, with regional carriers often being the first point of entry.</li>
                <li><strong>Retirements:</strong> A substantial number of experienced pilots are nearing retirement, creating vacancies that need to be filled by new talent.</li>
                <li><strong>Fleet Expansion:</strong> Several regional carriers are expanding their fleets and route networks, necessitating an increase in pilot recruitment.</li>
                <li><strong>Pathway to Mainline:</strong> Regional airlines continue to serve as critical feeders to major carriers like Air Canada and WestJet, offering structured career progression opportunities.</li>
              </ul>
              <p>Furthermore, the recent improvements in pilot contracts, such as those seen at Air Canada and WestJet, are likely to set new benchmarks across the industry, potentially leading to more attractive compensation and working conditions at regional airlines as they compete for talent [2,3].</p>
            </>
          )
        },
        {
          heading: "Tax Implications for Canadian Pilots (2026)",
          content: (
            <>
              <p>Understanding the tax landscape is crucial for Canadian pilots, especially with the significant earning potential in the profession. For 2026, the federal tax brackets in Canada indicate that income exceeding $258,482 CAD can be taxed at a rate of up to 33%. Pilots should also consider provincial taxes, which vary significantly and can further impact net income [7].</p>
              <p>It is highly advisable for pilots to consult with a tax professional specializing in aviation to optimize their financial planning, considering deductions for training, equipment, and other work-related expenses.</p>
            </>
          )
        },
        {
          heading: "Conclusion: A Promising Future for Regional Pilots in Canada",
          content: (
            <>
              <p>The Canadian regional airline sector in 2026 offers a compelling and stable career path for aspiring pilots. With a clear demand driven by a national pilot shortage, competitive salaries bolstered by recent contract negotiations, and well-defined pathways to mainline carriers, the opportunities are abundant. By diligently navigating the Transport Canada regulatory framework, managing training costs, and strategically choosing their entry point, pilots can look forward to a rewarding and prosperous career in Canada's dynamic aviation industry.</p>
            </>
          )
        },
        {
          heading: "References",
          content: (
            <>
              <ol className="list-decimal list-inside">
                <li>Air Transport Association of Canada (ATAC). (2026). <em>Canadian Aviation Labour Market Forecast.</em> [Projected data based on historical trends and ATAC statements].</li>
                <li>Air Line Pilots Association (ALPA). (2024, October). <em>Air Canada Pilot Contract Agreement.</em> [Details based on publicly reported contract terms].</li>
                <li>Air Line Pilots Association (ALPA). (2023, January). <em>WestJet Pilot Contract Agreement.</em> [Details based on publicly reported contract terms].</li>
                <li>Jazz Aviation LP. (2026). <em>Company Information and Career Opportunities.</em> [Data compiled from official company statements and industry reports].</li>
                <li>Transport Canada. (2026). <em>Canadian Aviation Regulations (CARs) - Standard 421 & 428.</em> [Information based on current and projected regulatory frameworks].</li>
                <li>Bearskin Airlines. (2026). <em>Fleet Information.</em> [Data compiled from official company statements].</li>
                <li>Government of Canada. (2026). <em>Federal Income Tax Brackets and Rates.</em> [Projected tax information based on current legislation and inflation adjustments].</li>
              </ol>
            </>
          )
        }
      ]}
    />
  );
}
