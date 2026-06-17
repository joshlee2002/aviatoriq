import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";

export default function CadetProgrammes() {
  return (
    <GuideLayout
      title="UK Airline Cadet Pilot Programmes 2026: The Complete Guide"
      subtitle="Every sponsored cadet scheme in the UK — BA Speedbird, easyJet Generation, Jet2FlightPath, Ryanair, Wizz Air — with real costs, places, timelines, bonds, and current application status."
      canonical="https://aviatoriq.com/guides/cadet-pilot-programmes-uk"
      metaDescription="UK airline cadet programmes 2026: BA Speedbird, Jet2, easyJet, Ryanair, Wizz and TUI status, costs, requirements and funding."
      readTime="14 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/cadet-programme_7f3a2c9e.jpg"
      regulatorName="UK CAA Licensing"
      regulatorUrl="https://www.caa.co.uk/commercial-industry/aircraft/pilot-licences/"
      methodologySummary="Programme statuses verified against official airline careers pages and press releases, June 2026."
      methodologyDetail="All cadet programme statuses in this guide are verified against official airline careers pages and press releases as of June 2026. No third-party aggregators or forums were used. Where a programme status could not be confirmed from an official source, this is stated explicitly."
      methodologySources={[
        {
          name: "BA Speedbird Academy",
          url: "https://careers.britishairways.com/speedbird-pilot-academy",
        },
        { name: "easyJet Careers", url: "https://careers.easyjet.com/" },
        { name: "Jet2 Careers", url: "https://www.jet2.com/careers" },
      ]}
      ctaHref="/tools/cadet-eligibility"
      ctaText="Check your cadet eligibility"
      scopeBanner={
        <GuideScopeBanner
          scope="This guide covers UK airline cadet programmes only. For US cadet routes, see the United Aviate Program guide."
          usHref="/us/guides/united-aviate-program"
          usLabel="View USA cadet programmes →"
        />
      }
      faqSchema={[
        {
          question: "What are the UK airline cadet programmes in 2026?",
          answer:
            "The main UK airline cadet programmes in 2026 are: BA Speedbird Academy (fully funded, ~160 places, 2026 window closed — apply April 2027), easyJet Generation Pilot MPL via CAE (self-funded at €102,942), easyJet Skyborne FlightCrew Futures ATPL (self-funded, ~£129,000, announced April 2026), Jet2FlightPath via Leading Edge Aviation (fully funded, at least 60 total places), Ryanair mentored cadet (self-funded via FTEJerez/Bartolini/MATS), and Wizz Air Pilot Academy (pre-financed, €14,000 upfront).",
        },
        {
          question: "How competitive is the BA Speedbird Academy?",
          answer:
            "Extremely competitive. The 2026 intake received over 20,000 applications for approximately 160 places — an acceptance rate of under 1%. It is widely considered the most competitive cadet programme in the UK. The 2026 application window opened 14 April and closed 23 April 2026. The next window is expected to open in April 2027.",
        },
        {
          question: "Is the easyJet Generation Pilot programme fully funded?",
          answer:
            "No — this is a common misconception. The easyJet Generation Pilot MPL programme via CAE is self-funded at €102,942 (approximately £88,000). You pay for training yourself. What you get in return is a structured pathway with a conditional easyJet First Officer position at the end, provided you meet training standards. It is not a sponsored or funded programme.",
        },
        {
          question: "Do I need a degree to apply for a cadet programme?",
          answer:
            "No. Most UK cadet programmes only require completed secondary education — typically 5 GCSEs at grade C/4 or higher, including Maths, English, and a Science. No degree or A-levels required. BA Speedbird requires 6 GCSEs. None require a university degree.",
        },
        {
          question:
            "What is the difference between a funded and self-funded cadet programme?",
          answer:
            "Funded programmes (BA Speedbird, Jet2FlightPath) cover all training costs with no upfront payment — usually in exchange for a bond (commitment to stay with the airline for several years). Self-funded programmes (easyJet Generation MPL, Ryanair mentored cadet) require you to pay for training yourself, but provide a structured pathway and conditional job offer. Wizz Air sits in between — you pay €14,000 upfront and repay the rest via salary deductions.",
        },
        {
          question: "When does the BA Speedbird Academy open for applications?",
          answer:
            "The 2026 application window opened on 14 April 2026 and closed on 23 April 2026. The next window is expected to open in April 2027. Register for job alerts on the BA Careers website to be notified when applications reopen.",
        },
      ]}
      sections={[
        {
          heading: "All UK Cadet Programmes at a Glance (2026)",
          content: (
            <>
              <p>
                The table below compares every active UK airline cadet pathway
                in 2026. Read the detailed sections below for the full picture
                on each programme.
              </p>
              <p
                className="text-sm p-3 rounded-lg my-3"
                style={{
                  background: "oklch(0.45 0.18 240 / 0.07)",
                  border: "1px solid oklch(0.45 0.18 240 / 0.15)",
                }}
              >
                Not sure if you qualify? Try our free{" "}
                <Link
                  href="/tools/cadet-eligibility"
                  className="text-blue-400 underline"
                >
                  Cadet Eligibility Checker
                </Link>{" "}
                to see which programmes you are likely to be eligible for.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Programme</th>
                      <th className="px-4 py-3 font-semibold">Airline</th>
                      <th className="px-4 py-3 font-semibold">Funded?</th>
                      <th className="px-4 py-3 font-semibold">Cost</th>
                      <th className="px-4 py-3 font-semibold">Places</th>
                      <th className="px-4 py-3 font-semibold">Duration</th>
                      <th className="px-4 py-3 font-semibold">Bond</th>
                      <th className="px-4 py-3 font-semibold">2026 Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Speedbird Pilot Academy
                      </td>
                      <td className="px-4 py-3">British Airways</td>
                      <td className="px-4 py-3 text-green-400">Fully funded</td>
                      <td className="px-4 py-3">£0 upfront</td>
                      <td className="px-4 py-3">~160</td>
                      <td className="px-4 py-3">18–24 months</td>
                      <td className="px-4 py-3">5 years</td>
                      <td className="px-4 py-3 text-yellow-400">
                        Window closed (April 2026)
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Jet2FlightPath
                      </td>
                      <td className="px-4 py-3">Jet2</td>
                      <td className="px-4 py-3 text-green-400">Fully funded</td>
                      <td className="px-4 py-3">£0 upfront</td>
                      <td className="px-4 py-3">at least 60 total</td>
                      <td className="px-4 py-3">18 months</td>
                      <td className="px-4 py-3">TBC</td>
                      <td className="px-4 py-3 text-yellow-400">
                        Window closed (Feb 2026)
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Generation easyJet (MPL)
                      </td>
                      <td className="px-4 py-3">easyJet</td>
                      <td className="px-4 py-3 text-red-400">Self-funded</td>
                      <td className="px-4 py-3">€102,942 (~£88k)</td>
                      <td className="px-4 py-3">~30–50</td>
                      <td className="px-4 py-3">~24 months</td>
                      <td className="px-4 py-3">None</td>
                      <td className="px-4 py-3 text-green-400">
                        Open (CAE, May 2026)
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        FlightCrew Futures (ATPL)
                      </td>
                      <td className="px-4 py-3">easyJet</td>
                      <td className="px-4 py-3 text-red-400">Self-funded</td>
                      <td className="px-4 py-3">~£129,000</td>
                      <td className="px-4 py-3">~20/intake</td>
                      <td className="px-4 py-3">~18 months</td>
                      <td className="px-4 py-3">None</td>
                      <td className="px-4 py-3 text-green-400">
                        New — launched April 2026
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Ryanair Mentored Cadet
                      </td>
                      <td className="px-4 py-3">Ryanair</td>
                      <td className="px-4 py-3 text-red-400">Self-funded</td>
                      <td className="px-4 py-3">£47,000–£65,000</td>
                      <td className="px-4 py-3">Open</td>
                      <td className="px-4 py-3">~18 months</td>
                      <td className="px-4 py-3">None</td>
                      <td className="px-4 py-3 text-green-400">
                        Open (rolling)
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Wizz Air Pilot Academy
                      </td>
                      <td className="px-4 py-3">Wizz Air</td>
                      <td className="px-4 py-3 text-yellow-400">
                        Pre-financed
                      </td>
                      <td className="px-4 py-3">€14,000 upfront</td>
                      <td className="px-4 py-3">Varies</td>
                      <td className="px-4 py-3">~24 months</td>
                      <td className="px-4 py-3">5 years</td>
                      <td className="px-4 py-3 text-green-400">
                        Open (rolling)
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        TUI MPL
                      </td>
                      <td className="px-4 py-3">TUI</td>
                      <td className="px-4 py-3 text-green-400">Fully funded</td>
                      <td className="px-4 py-3">£0 upfront</td>
                      <td className="px-4 py-3">at least 60 total</td>
                      <td className="px-4 py-3">~24 months</td>
                      <td className="px-4 py-3">TBC</td>
                      <td className="px-4 py-3 text-red-400">
                        Paused — no 2026 intake
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-white/50">
                Sources: BA Careers (April 2026), CAE Generation easyJet
                programme page (June 2026), Leading Edge Aviation news (February
                2026), Ryanair Careers (June 2026), Airmappr (January 2026).
              </p>
            </>
          ),
        },
        {
          heading: "Why Cadet Programmes Matter — And What They Actually Offer",
          content: (
            <>
              <p>
                Before you commit to self-funded training, you should seriously
                consider applying to airline cadet programmes. These programmes
                offer something that no amount of self-funded training can: a{" "}
                <strong>conditional job offer before you start</strong>.
              </p>
              <p>
                When you train self-funded, you spend £80,000–£120,000 and then
                compete in the open market for a First Officer position. When
                you train through a funded cadet programme, you start with a
                defined airline pathway — provided you complete training, pass
                airline assessments, meet medical/security requirements, and
                satisfy the airline's final employment criteria.
              </p>
              <p>
                The catch is that funded cadet programmes are intensely
                competitive. The BA Speedbird Academy received over 20,000
                applications for approximately 160 places in 2026 — an
                acceptance rate of under 1% . If you are rejected, you are not
                barred from the airlines; many successful pilots trained
                self-funded. But if you can secure a funded cadet place, the
                financial security it provides is significant.
              </p>
              <p>
                It is also important to understand the difference between a{" "}
                <strong>funded</strong> programme (BA, Jet2) and a{" "}
                <strong>structured pathway</strong> programme (easyJet
                Generation, Ryanair mentored). The latter still requires you to
                pay for training — the airline is providing a pathway and
                conditional job offer, not funding.
              </p>
            </>
          ),
        },
        {
          heading: "BA Speedbird Pilot Academy: The Gold Standard",
          content: (
            <>
              <p>
                The BA Speedbird Academy is a major fully funded UK
                network-carrier cadet programme. British Airways covers 100% of
                training costs — no upfront payment, no loan required. The 2026
                intake funded approximately 160 places, with British Airways
                investing £18 million in the programme.
              </p>
              <p>
                <strong>Training:</strong> Full integrated ATPL training (18–24
                months) at Skyborne Airline Academy (Gloucestershire and Vero
                Beach, Florida) or FTEJerez (Spain). On successful graduation
                and subject to meeting BA employment, licence, medical, security
                and operational requirements, the pathway is toward joining BA
                as a First Officer, commonly on short-haul Airbus operations at
                Gatwick or Heathrow.
              </p>
              <p>
                <strong>The bond:</strong> BA programme terms can include a
                multi-year service commitment and repayment obligations if you
                leave early; verify the current bond terms directly with BA
                before applying. A short-haul freeze may also apply, so check
                the latest fleet-bidding restrictions before relying on
                long-haul progression timelines.
              </p>
              <p>
                <strong>Entry requirements:</strong> 6 GCSEs at grade 4–9 (A*–C)
                including Maths, English Language, and a Science. No degree,
                A-levels, or prior flying experience required. Age: must be 18
                by training start, no upper age limit stated. Height
                1.57m–1.91m. Right to work in the UK without sponsorship. You
                must hold the required Class 1 Medical for the advertised
                licence pathway; verify whether BA requires UK CAA, EASA or dual
                medical documentation for the current window.
              </p>
              <p>
                <strong>Selection process:</strong> Online application →
                cognitive aptitude tests (numerical, verbal, spatial reasoning)
                → assessment centre (group exercise, interview, further aptitude
                tests) → simulator assessment → final panel interview. The
                process takes approximately 3–6 months from application to
                offer.
              </p>
              <p>
                <strong>2026 status:</strong> The application window opened 14
                April 2026 and closed 23 April 2026. The next window is expected
                to open in April 2027. Register for job alerts on the BA Careers
                website (careers.ba.com) to be notified when applications
                reopen.
              </p>
            </>
          ),
        },
        {
          heading: "Jet2FlightPath: The Underrated Fully Funded Option",
          content: (
            <>
              <p>
                Jet2FlightPath is a fully funded cadet programme — British
                Airways' main competition for the "zero upfront cost" category.
                It relaunched in February 2026 in partnership with{" "}
                <strong>Leading Edge Aviation</strong> (Oxford, UK + Alhama de
                Murcia, Spain), replacing the previous Skyborne partnership.
              </p>
              <p>
                <strong>What you get:</strong> Fully funded integrated ATPL
                training (18 months) at Leading Edge Aviation. A conditional
                Second Officer pathway at Jet2 upon successful graduation and
                meeting airline standards, with immediate progression to First
                Officer training on Boeing or Airbus aircraft at one of Jet2's
                14 UK bases.
              </p>
              <p>
                <strong>Why it's underrated:</strong> The competition is
                significantly less intense than BA Speedbird. Jet2 is
                consistently rated one of the stronger-rated UK airlines for
                culture and work-life balance in some employee/review surveys.
                The programme is also newer and less well-known, meaning fewer
                applicants per place.
              </p>
              <p>
                <strong>Entry requirements:</strong> Minimum 17 years old at
                application, turning 18 by 1 August 2026. Minimum 5 GCSEs at
                grade C/4 or higher including Mathematics. Right to work in the
                UK. Class 1 Medical.
              </p>
              <p>
                <strong>2026 status:</strong> Applications opened 17 February
                2026. The window is now closed for the current intake. Check
                jet2careers.com/pilot-careers/jet2flightpath/ for the next
                intake.
              </p>
            </>
          ),
        },
        {
          heading: "easyJet Generation Pilot (MPL): Self-Funded, Not Sponsored",
          content: (
            <>
              <p>
                The easyJet Generation Pilot programme is widely misunderstood.
                It is <strong>not a funded programme</strong>. You pay €102,942
                (approximately £88,000) for training at CAE, conducted at
                Brussels, Madrid, or London Gatwick. In return, you receive a
                structured MPL training pathway and a conditional First Officer
                position at easyJet upon successful graduation.
              </p>
              <p>
                <strong>What the MPL licence means:</strong> The Multi-Crew
                Pilot Licence (MPL) is trained specifically for multi-crew jet
                operations. It is initially restricted to easyJet A320
                operations. After accumulating approximately 500 hours, you can
                convert to a full frozen ATPL. If you leave easyJet before
                conversion, your licence options are limited — this is the key
                difference from an integrated ATPL.
              </p>
              <p>
                <strong>What's included in the €102,942:</strong> All ground,
                simulator, and flight training; ATPL theory exams; A-UPRT;
                flight bag; uniform; resits and remedial training (CAE's First
                Officer Quality Insurance). Not included: Class 1 Medical,
                accommodation, travel, iPad.
              </p>
              <p>
                <strong>Entry requirements:</strong> Age 18+ by course start.
                Right to live and work in UK/EEA/EU/Switzerland (no visa
                sponsorship). 5 GCSEs grade C/4+ including Maths, English, and a
                Science. Minimum height 157cm. UK CAA or the required Class 1
                Medical for the advertised licence pathway; verify whether BA
                requires UK CAA, EASA or dual medical documentation for the
                current window. No previous flying experience required. Maximum
                200 hours total flight time.
              </p>
              <p>
                <strong>2026 status:</strong> CAE reopened MPL applications in
                May 2026. Applications are open. Assessment is free of charge.
              </p>
            </>
          ),
        },
        {
          heading: "easyJet FlightCrew Futures (ATPL): New for 2026",
          content: (
            <>
              <p>
                Announced at Pilot Careers Live in April 2026, the easyJet
                FlightCrew Futures programme is a new integrated ATPL pathway
                delivered through <strong>Skyborne Airline Academy</strong>.
                This is easyJet's second cadet route and is distinct from the
                CAE MPL programme in one critical way: it produces a
                conventional frozen ATPL, not an MPL. Your licence is not
                restricted to easyJet operations.
              </p>
              <p>
                <strong>Cost:</strong> Approximately £129,000, including the
                A320 type rating. Self-funded.
              </p>
              <p>
                <strong>What you get:</strong> A conditional job offer from
                easyJet before training begins. Training phases: 28 weeks ground
                school (Gloucestershire or Bournemouth) → 26 weeks flying (Vero
                Beach, Florida) → 9.5 weeks multi-engine IR (UK). Accommodation
                is included in the course fee. Approximately 20 trainees per
                intake.
              </p>
              <p>
                <strong>Why this matters:</strong> The ATPL route gives you a
                portable licence. If you complete training and decide not to
                join easyJet (or fail the final assessment), you have a full
                frozen ATPL that any airline will accept. The MPL route does not
                offer this flexibility.
              </p>
            </>
          ),
        },
        {
          heading: "Ryanair Mentored Cadet: Self-Funded, Structured Pathway",
          content: (
            <>
              <p>
                Ryanair does not offer a funded cadet programme. Instead, they
                partner with specific flight schools — FTEJerez (Spain),
                Bartolini Air (Poland), and MATS (Malta) — to offer mentored
                programmes where you self-fund training but receive a structured
                pathway directly to a Ryanair First Officer assessment.
              </p>
              <p>
                <strong>Cost:</strong> Approximately £47,000–£65,000 depending
                on school and location. Bartolini Air in Poland is typically the
                cheapest option. This is significantly cheaper than the easyJet
                MPL because Ryanair's mentored programme does not include a type
                rating — you complete the type rating after being hired.
              </p>
              <p>
                <strong>What you get:</strong> Training using Ryanair's standard
                operating procedures. Priority access to Ryanair simulator
                assessments upon graduation. If you pass, a First Officer
                position. Ryanair's acceptance rate for their own mentored
                programme graduates is very high.
              </p>
              <p>
                <strong>The reality:</strong> This is not a guaranteed job
                offer. You pay for training, and employment depends on passing
                the relevant Ryanair assessment, meeting current recruitment
                standards and satisfying right-to-work, medical and operational
                requirements. If you are not selected, you are a qualified
                commercial pilot who must find employment elsewhere. Ryanair can
                offer comparatively fast command opportunities in growth
                periods, but time-to-command varies by base, fleet growth and
                seniority.
              </p>
            </>
          ),
        },
        {
          heading: "Wizz Air Pilot Academy: Pre-Financed Model",
          content: (
            <>
              <p>
                Wizz Air offers a model that sits between fully funded and
                self-funded. You pay an initial fee of approximately €14,000 and
                Wizz Air pre-finances the remaining training costs. You repay
                the airline via salary deductions over your first five years of
                employment.
              </p>
              <p>
                <strong>What you get:</strong> Integrated ATPL training with a
                conditional Wizz Air First Officer position. Wizz Air is
                Europe's fastest-growing airline, with a rapidly expanding
                network of bases across the UK and Europe.
              </p>
              <p>
                <strong>The reality:</strong> The pre-financing model means you
                do not need £80,000–£100,000 upfront, but you will have salary
                deductions for several years after joining. Wizz Air's working
                conditions and roster patterns are more demanding than Jet2 or
                BA, but the career progression can be fast given the airline's
                growth rate.
              </p>
            </>
          ),
        },
        {
          heading: "Which Programme Is Right for You?",
          content: (
            <>
              <p>
                The right programme depends on your financial situation, career
                goals, and risk tolerance:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-white/5 text-white/70 border-b border-white/10">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">
                        If you want...
                      </th>
                      <th className="px-4 py-3 font-semibold">Best option</th>
                      <th className="px-4 py-3 font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Zero upfront cost, long-haul career
                      </td>
                      <td className="px-4 py-3">BA Speedbird Academy</td>
                      <td className="px-4 py-3">
                        Fully funded; BA long-haul is the ultimate destination
                        for many UK pilots
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Zero upfront cost, work-life balance
                      </td>
                      <td className="px-4 py-3">Jet2FlightPath</td>
                      <td className="px-4 py-3">
                        Fully funded; Jet2 is often rated strongly for culture
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Fastest route to command
                      </td>
                      <td className="px-4 py-3">Ryanair mentored cadet</td>
                      <td className="px-4 py-3">
                        potentially fast command in growth periods; verify
                        current base/seniority timelines
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Portable licence, easyJet job offer
                      </td>
                      <td className="px-4 py-3">
                        easyJet FlightCrew Futures (ATPL)
                      </td>
                      <td className="px-4 py-3">
                        Frozen ATPL — not restricted to easyJet if plans change
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        easyJet job offer, lower cost
                      </td>
                      <td className="px-4 py-3">
                        Generation easyJet MPL (CAE)
                      </td>
                      <td className="px-4 py-3">
                        ~£88k vs ~£129k for ATPL route; but licence initially
                        restricted
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 font-medium text-white">
                        Low upfront, fast-growing airline
                      </td>
                      <td className="px-4 py-3">Wizz Air Pilot Academy</td>
                      <td className="px-4 py-3">
                        €14k upfront; rest repaid via salary; Europe's
                        fastest-growing LCC
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The most important rule:{" "}
                <strong>
                  apply to funded programmes first, every year, while also
                  progressing with self-funded training in parallel.
                </strong>{" "}
                If you get a funded place, you take it. If you don't, you have
                not wasted time. Many pilots who eventually secured funded
                places had already started their PPL or ATPL theory studies.
              </p>
            </>
          ),
        },
        {
          heading: "References",
          content: (
            <>
              <p className="text-xs text-white/50">
                British Airways Media Centre. "British Airways' fully-funded
                pilot training programme opens for applications for fourth year
                running." 14 April 2026. <em>mediacentre.britishairways.com</em>
                . Application window: 14–23 April 2026. ~160 places. BA invested
                £18m in the programme.
                <br />
                CAE. "Generation easyJet Multi Crew Pilot Licence (MPL) Training
                Programme."{" "}
                <em>
                  cae.com/civil-aviation/become-a-pilot/our-pilot-training-programmes/generation-easyjet-pilot-training-programme/
                </em>
                . Programme cost: €102,942. Accessed June 2026.
                <br />
                Leading Edge Aviation. "Jet2 relaunches Jet2flightpath in
                collaboration with Leading Edge Aviation." 17 February 2026.{" "}
                <em>leadingedgeaviation.com/news/</em>. ~20 places. Applications
                opened 17 February 2026.
                <br />
                Airmappr. "easyJet Pilot Application &amp; Cadet Program 2026 —
                Full Guide." 31 January 2026.{" "}
                <em>airmappr.com/articles/career/easyjet-pilot-application</em>.
                Skyborne FlightCrew Futures ATPL announced April 18, 2026 at
                Pilot Careers Live; ~£129,000 including A320 type rating.
              </p>
            </>
          ),
        },
      ]}
      relatedGuides={[
        {
          title: "BA Speedbird Academy 2026",
          href: "/guides/ba-speedbird-academy",
          time: "10 min",
        },
        {
          title: "easyJet Generation Pilot 2026",
          href: "/guides/easyjet-generation-pilot",
          time: "9 min",
        },
        {
          title: "Ryanair Cadet Programme 2026",
          href: "/guides/ryanair-cadet-programme",
          time: "8 min",
        },
        {
          title: "UK Pilot Training Costs 2026",
          href: "/guides/pilot-training-costs",
          time: "8 min",
        },
        {
          title: "How to Finance Pilot Training UK",
          href: "/guides/how-to-finance-pilot-training-uk",
          time: "9 min",
        },
      ]}
      sources={[
        { name: "UK Civil Aviation Authority (CAA)" },
        { name: "EASA Part-FCL" },
        { name: "BALPA Pay & Conditions Survey" },
      ]}
    />
  );
}
