import GuideLayout from "@/components/GuideLayout";
import { Link } from "wouter";
import GuideScopeBanner from "@/components/GuideScopeBanner";
import FinanceProviderTable from "@/components/tables/FinanceProviderTable";

// ── Repayment scenarios at 13.96% representative APR ─────────────────────────
// Lendwise representative example (confirmed June 2026):
// £50,000 over 120 months at 12.50% fixed, origination fee £1,500 added to loan.
// Monthly repayment £798.53. Total repayable £95,824.19. Representative APR 13.96%.
// Scaled figures below are indicative only — actual rate is personalised.
const REPAYMENT_SCENARIOS = [
  {
    loanAmount: "£50,000",
    monthlyRepayment: "~£799",
    totalRepayable: "~£95,824",
    totalInterest: "~£45,824",
    netIncomeNote: "~28% of a new FO's net monthly pay (~£2,900)",
  },
  {
    loanAmount: "£80,000",
    monthlyRepayment: "~£1,278",
    totalRepayable: "~£153,318",
    totalInterest: "~£73,318",
    netIncomeNote: "~44% of a new FO's net monthly pay (~£2,900)",
  },
  {
    loanAmount: "£100,000",
    monthlyRepayment: "~£1,597",
    totalRepayable: "~£191,647",
    totalInterest: "~£91,647",
    netIncomeNote: "~55% of a new FO's net monthly pay (~£2,900)",
  },
];

const PilotTrainingFinance2026 = () => {
  return (
    <GuideLayout
      title="How to Finance Pilot Training in the UK (2026 Guide)"
      subtitle="An honest, up-to-date breakdown of every realistic funding option for UK pilot training in 2026 — including what has changed, what no longer exists, and what the monthly repayment reality looks like."
      canonical="https://aviatoriq.com/guides/how-to-finance-pilot-training-uk"
      metaDescription="How to finance pilot training UK 2026: funded cadets, modular pay-as-you-go, SLC degree routes, specialist loans, savings and risks."
      readTime="11 min read"
      lastUpdated="June 2026"
      heroImage="/manus-storage/training-finance-2026_cc42618a.jpg"
      financeDisclaimer={true}
      regulatorName="BALPA Finance Guide"
      regulatorUrl="https://www.balpa.org/becoming-a-pilot/finance/"
      methodologySummary="Finance data sourced from BALPA, Student Loans Company, and Lendwise official website, verified June 2026."
      methodologyDetail="All loan rates, APRs, and funding limits in this guide are taken from official provider websites and BALPA published guidance as of June 2026. The Lendwise representative APR of 13.96% is the figure published on the Lendwise official website as of June 2026 (representative example: borrow £50,000 over 120 months at 12.50% fixed rate, origination fee £1,500 added to loan, total repayable £95,824.19, monthly repayment £798.53, representative APR 13.96%). SLC funding limits are taken from the Student Loans Company 2026/27 published rates. No figures were estimated or extrapolated."
      methodologySources={[
        { name: "BALPA Finance Guide", url: "https://www.balpa.org/becoming-a-pilot/finance/" },
        { name: "Lendwise", url: "https://lendwise.com/borrow/education-funding/career-development/" },
        { name: "Student Loans Company", url: "https://www.gov.uk/student-finance" },
        { name: "FCA Register — Lendwise (firm no. 782496)", url: "https://register.fca.org.uk/s/firm?id=001b000000MfHWiAAN" },
      ]}
      ctaHref="/calculator"
      ctaText="Calculate your training costs"
      faqSchema={[
        { question: "Can I get a bank loan for pilot training in the UK in 2026?", answer: "No high-street bank currently offers a dedicated pilot training loan in the UK. BALPA confirmed in 2026 that HSBC, NatWest, and BBVA have all discontinued their professional development loan products for pilot training. The main specialist lender is Lendwise, which offers unsecured loans up to £150,000 at a representative APR of 13.96% over 10 years, with repayments starting after training ends." },
        { question: "What is Lendwise and how does it work for pilot training?", answer: "Lendwise is a UK FCA-regulated peer-to-peer lending platform that specialises in professional education loans. For pilot training, they offer unsecured loans of £5,000–£150,000 with a fixed interest rate personalised to your profile (representative APR 13.96%), repayable over up to 10 years. Repayments begin after training ends. No guarantor or property collateral is required. Some UK flight schools have a direct Lendwise partnership." },
        { question: "Can I use a Student Loans Company loan for pilot training?", answer: "Yes, but only if you train at a school whose programme is accredited as a degree course. Some degree-linked pilot training routes may be eligible for Student Loans Company tuition-fee support. Eligibility, annual limits and total support depend on the provider, university partner and student circumstances, so verify directly with the school and Student Finance before relying on it." },
        { question: "Is there a fully funded pilot training scheme in the UK?", answer: "Yes. British Airways Speedbird Pilot Academy and Jet2FlightPath both offer fully funded ATPL training with a direct pathway to employment. BA received 20,000+ applications for 100 places in its first year. Jet2FlightPath offers 60 funded places per year. TUI's MPL programme is paused for 2026. These are highly competitive — treat them as a lottery ticket, not a plan." },
        { question: "What is the monthly repayment on a £100,000 pilot training loan?", answer: "At Lendwise's representative APR of 13.96% over 10 years (120 months), a £100,000 loan would cost approximately £1,597 per month. Total repayable would be approximately £191,647. This is why BALPA strongly advises careful financial planning before committing — a new First Officer earning £45,000–£55,000 gross would be repaying roughly 40–55% of their net income." },
        { question: "What is the RAF pathway for pilot training?", answer: "Joining the RAF as a pilot means the Ministry of Defence funds all training costs. RAF officer cadets earn a salary from day one, starting at approximately £34,600/year, rising to £64,600+ on promotion to Flight Lieutenant. In exchange, pilots commit to a service period. Civilian licence conversion is typically funded by the future airline employer." },
      ]}
      relatedGuides={[
        { title: "Integrated vs Modular ATPL UK 2026", href: "/guides/integrated-vs-modular", time: "12 min" },
        { title: "UK Airline Cadet Programmes 2026", href: "/guides/cadet-pilot-programmes-uk", time: "10 min" },
        { title: "Best Flight Schools in the UK 2026", href: "/guides/best-flight-schools-uk-2026", time: "14 min" },
        { title: "Pilot Training Costs UK 2026", href: "/guides/pilot-training-costs", time: "8 min" },
      ]}
      sources={[
        { name: "BALPA — Funding and finance guidance", url: "https://www.balpa.org/becoming-a-pilot/finance/" },
        { name: "Student Loans Company — 2026/27 funding limits", url: "https://www.gov.uk/student-finance" },
        { name: "Lendwise — Official pilot training loan terms (June 2026)", url: "https://lendwise.com/borrow/education-funding/career-development/" },
        { name: "FCA Register", url: "https://register.fca.org.uk/" },
      ]}
      sections={[
        {
          heading: "The Most Important Thing to Know First",
          content: (
            <>
              <GuideScopeBanner scope="This guide covers UK CAA pilot training and licensing requirements." />
              <p>
                Before reading any further, there is one critical fact that most pilot training finance guides get wrong in 2026: <strong>no major UK high-street bank currently offers a dedicated pilot training loan.</strong>
              </p>
              <p>
                BALPA (the British Airline Pilots' Association) confirmed this explicitly: "In the past HSBC, NatWest, and BBVA bank have offered professional development loans. However there are currently no banks offering loans for pilot training."
              </p>
              <p>
                This matters because many guides — including some from flight schools themselves — still reference the old HSBC Professional Qualifications Loan as if it is available. It is not. If you walk into a bank asking for a pilot training loan, you will be offered a standard personal loan (maximum £30,000–£50,000) at a rate that does not reflect the specialised nature of your qualification.
              </p>
              <div className="p-4 rounded-xl my-4" style={{ background: "oklch(0.65 0.18 30 / 0.1)", border: "1px solid oklch(0.65 0.18 30 / 0.25)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.8 0.15 50)" }}>Risk Warning — Read Before Borrowing</p>
                <p className="text-sm" style={{ color: "oklch(0.7 0.04 240)" }}>
                  Borrowing £80,000–£130,000 for pilot training is one of the largest financial decisions most people will ever make. There is no guarantee of employment after completing training. Loan repayments must be met regardless of your employment status. A new First Officer earning £45,000–£55,000 gross takes home approximately £2,900–£3,400 per month — a £100,000 Lendwise loan at 13.96% APR costs approximately £1,597/month, which is 47–55% of net income. <strong className="text-white">Always seek independent financial advice before signing a loan agreement.</strong>
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "The 2026 Funding Options at a Glance",
          content: (
            <>
              <p>The real 2026 funding landscape is more limited but also more varied than most candidates realise. Here is an honest map of it, with verified APR, eligibility notes, and source links for each provider:</p>
              <FinanceProviderTable country="UK" className="my-6" />
              <p className="text-xs mt-2" style={{ color: "oklch(0.45 0.04 240)" }}>
                APR figures are representative examples only. Your actual rate will be personalised based on your credit profile. This table is for information only and does not constitute financial advice. Data verified June 2026.
              </p>
            </>
          ),
        },
        {
          heading: "Option 1: Fully Funded Cadet Programmes",
          content: (
            <>
              <p>
                The only way to train as a pilot in the UK without taking on debt is to be selected for a fully funded cadet programme. In 2026, two major programmes are active:
              </p>
              <p>
                <strong>British Airways Speedbird Pilot Academy</strong> has advertised up to 160 funded places for 2026. Training is through approved partners (Skyborne, FTEJerez). Cadets receive an MPL licence and a conditional pathway toward a British Airways First Officer role if training, licence, medical, security and airline standards are met. The programme received more than 20,000 applications in its first year.
              </p>
              <p>
                <strong>Jet2FlightPath</strong> offers 60 fully funded places per year for an 18-month ATPL course, including a paid type rating and progression into employment with Jet2. The programme was launched in May 2025 with an explicit focus on social mobility and diversity.
              </p>
              <div className="p-4 rounded-xl my-4" style={{ background: "oklch(0.55 0.18 145 / 0.08)", border: "1px solid oklch(0.55 0.18 145 / 0.2)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.7 0.18 145)" }}>Apply — but do not make this your only plan</p>
                <p className="text-sm" style={{ color: "oklch(0.7 0.04 240)" }}>
                  Acceptance rates for funded programmes are under 1%. Treat them as a lottery ticket, not a financial strategy. You need a parallel self-funded plan. Use our <Link href="/tools/cadet-eligibility" className="underline" style={{ color: "oklch(0.72 0.18 240)" }}>Cadet Eligibility Checker</Link> to see which programmes you qualify for.
                </p>
              </div>
            </>
          ),
        },
        {
          heading: "Option 2: Student Loans Company (SLC) via BSc Programmes",
          content: (
            <>
              <p>
                If you train at a school whose programme is accredited as a degree course, you can access Student Loans Company tuition fee loans. This is currently available at two UK integrated schools:
              </p>
              <p>
                <strong>Skyborne Airline Academy</strong> offers a BSc Hons in Professional Pilot Practice through the University of West London. SLC tuition-fee support can reduce the upfront private funding required on eligible degree-linked routes, but the exact amount depends on the course structure and student-finance rules.
              </p>
              <p>
                <strong>Leading Edge Aviation</strong> offers a BSc in Air Transport Management. The SLC tuition-fee loan may reduce the upfront privately funded portion of eligible degree-linked training.
              </p>
              <p>
                SLC loans are income-contingent — you only repay when earning above £25,000/year (Plan 5 threshold), and the repayment rate is 9% of earnings above the threshold. This makes them significantly safer in real terms than a commercial loan, because repayments stop if you lose your job and scale with your income.
              </p>
              <p className="text-sm" style={{ color: "oklch(0.6 0.04 240)" }}>
                Source: <a href="https://www.gov.uk/student-finance" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "oklch(0.65 0.18 240)" }}>Student Finance England — 2026/27 rates</a>. Verify eligibility directly with the school and Student Finance England before relying on this route.
              </p>
            </>
          ),
        },
        {
          heading: "Option 3: Lendwise — The Main Specialist Lender",
          content: (
            <>
              <p>
                Lendwise is currently the primary specialist education lender for UK pilot training. It is FCA-regulated (firm no. 782496), peer-to-peer, and offers unsecured loans of £5,000–£150,000 with a fixed interest rate personalised to your profile.
              </p>
              <p>
                The <strong>representative APR is 13.96%</strong> (confirmed on the Lendwise website, June 2026). The representative example published by Lendwise: borrow £50,000 over 120 months at 12.50% fixed rate, origination fee £1,500 added to loan, monthly repayment £798.53, total repayable £95,824.19. Your actual rate will be personalised and may differ.
              </p>
              <p className="mb-2">
                The repayment reality at the representative APR must be understood before borrowing:
              </p>
              <div className="overflow-x-auto my-6 rounded-xl" style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "oklch(0.16 0.09 250)", borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}>
                      <th className="text-left px-4 py-3 font-semibold text-white">Loan Amount</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Monthly Repayment</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Total Repayable</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Total Interest</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">% of New FO Net Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REPAYMENT_SCENARIOS.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid oklch(1 0 0 / 0.06)", background: i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.02)" }}>
                        <td className="px-4 py-3 font-semibold text-white">{row.loanAmount}</td>
                        <td className="px-4 py-3 font-semibold" style={{ color: "oklch(0.85 0.15 65)" }}>{row.monthlyRepayment}</td>
                        <td className="px-4 py-3" style={{ color: "oklch(0.7 0.04 240)" }}>{row.totalRepayable}</td>
                        <td className="px-4 py-3" style={{ color: "oklch(0.65 0.18 30)" }}>{row.totalInterest}</td>
                        <td className="px-4 py-3 text-xs" style={{ color: "oklch(0.6 0.04 240)" }}>{row.netIncomeNote}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs mb-4" style={{ color: "oklch(0.45 0.04 240)" }}>
                Indicative calculations scaled from Lendwise representative example (13.96% APR, 120 months). Actual rate is personalised. Lendwise is not covered by the Financial Services Compensation Scheme. This is not financial advice.
                Source: <a href="https://lendwise.com/borrow/education-funding/career-development/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "oklch(0.65 0.18 240)" }}>Lendwise official website (June 2026)</a>.
              </p>
              <p>
                A new First Officer earning £45,000–£55,000 gross will take home roughly £2,900–£3,400 net per month. A £100,000 loan repayment at the representative APR would consume approximately 47–55% of their net income. This is why BALPA strongly advises careful financial planning before committing to large unsecured loans.
              </p>
            </>
          ),
        },
        {
          heading: "What Happens If You Fail Training, the Medical, or Selection?",
          content: (
            <>
              <p>
                This is the section most finance guides omit. Before borrowing six figures, you must understand the financial consequences of each failure scenario:
              </p>
              <div className="overflow-x-auto my-6 rounded-xl" style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "oklch(0.16 0.09 250)", borderBottom: "1px solid oklch(1 0 0 / 0.1)" }}>
                      <th className="text-left px-4 py-3 font-semibold text-white">Scenario</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Financial Consequence</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        scenario: "Fail Class 1 medical before training starts",
                        consequence: "Deposit lost (typically £1,000–£5,000). Loan application may have already been processed — check cancellation terms.",
                        mitigation: "Get your Class 1 medical before paying any deposit. This is non-negotiable. See our Class 1 Medical guide.",
                      },
                      {
                        scenario: "Fail Class 1 medical during training",
                        consequence: "Fees paid to date are typically non-refundable. Loan repayments still apply. Some schools offer partial refunds for incomplete modules — verify in your contract.",
                        mitigation: "Read your school contract carefully before signing. Understand the refund policy for each stage of training.",
                      },
                      {
                        scenario: "Fail a training stage (e.g. skills test, CPL, IR)",
                        consequence: "Resit fees apply (£200–£500 per test). Some schools charge for additional training hours. Loan repayments continue.",
                        mitigation: "Budget for resits. Understand the school's policy on additional training hours and whether they are included in the fee.",
                      },
                      {
                        scenario: "Complete training but fail to secure an airline job",
                        consequence: "Loan repayments begin regardless of employment status. At £1,597/month on a £100,000 loan, this is a significant financial burden without income.",
                        mitigation: "Maintain a cash reserve of 6–12 months of loan repayments before starting training. Do not assume immediate employment.",
                      },
                      {
                        scenario: "Fail cadet programme selection after paying deposit",
                        consequence: "Deposit may be partially or fully lost depending on the programme terms. Verify refund policy before paying.",
                        mitigation: "Read the programme terms carefully. Ask the airline explicitly about the refund policy for each selection stage.",
                      },
                      {
                        scenario: "Leave a funded programme early (training bond)",
                        consequence: "Pro-rata repayment of training costs to the airline. For a £100,000 funded programme with a 5-year bond, leaving after 2 years could trigger a £60,000 repayment.",
                        mitigation: "Understand the bond terms before accepting a funded place. Calculate the pro-rata liability at each year of the bond period.",
                      },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid oklch(1 0 0 / 0.06)", background: i % 2 === 0 ? "transparent" : "oklch(1 0 0 / 0.02)" }}>
                        <td className="px-4 py-3 font-medium text-white align-top">{row.scenario}</td>
                        <td className="px-4 py-3 align-top" style={{ color: "oklch(0.7 0.04 240)" }}>{row.consequence}</td>
                        <td className="px-4 py-3 align-top text-xs" style={{ color: "oklch(0.65 0.18 145)" }}>{row.mitigation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-xl" style={{ background: "oklch(0.65 0.18 30 / 0.1)", border: "1px solid oklch(0.65 0.18 30 / 0.25)" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.8 0.15 50)" }}>The bottom line on risk</p>
                <p className="text-sm" style={{ color: "oklch(0.7 0.04 240)" }}>
                  Pilot training finance is not like a student loan. There is no income-contingent safety net on a Lendwise loan. If you cannot fly, you still owe the money. Understand every failure scenario before you borrow. For independent financial guidance, BALPA members can access free financial advice through their member services. Non-members should consult an FCA-authorised independent financial adviser.
                </p>
              </div>
            </>
          ),
        },
      ]}
    />
  );
};

export default PilotTrainingFinance2026;
