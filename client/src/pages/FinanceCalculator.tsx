import { useState, useMemo } from "react";
import SEO from "@/components/SEO";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import { Link } from "wouter";
import { Calculator, AlertTriangle, Info, TrendingDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface LoanInputs {
  loanAmount: number;
  apr: number;
  termYears: number;
  startingSalary: number;
  salaryGrowthRate: number;
}

interface RepaymentRow {
  year: number;
  openingBalance: number;
  annualInterest: number;
  annualPayment: number;
  closingBalance: number;
  salary: number;
  paymentAsPercentOfSalary: number;
}

// ─── Calculation Engine ───────────────────────────────────────────────────────
function calculateRepayment(inputs: LoanInputs): RepaymentRow[] {
  const { loanAmount, apr, termYears, startingSalary, salaryGrowthRate } = inputs;
  const monthlyRate = apr / 100 / 12;
  const totalMonths = termYears * 12;

  // Monthly payment using standard annuity formula
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / totalMonths
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const annualPayment = monthlyPayment * 12;
  const rows: RepaymentRow[] = [];
  let balance = loanAmount;

  for (let year = 1; year <= termYears; year++) {
    const openingBalance = balance;
    const annualInterest = balance * (apr / 100);
    const closingBalance = Math.max(0, openingBalance + annualInterest - annualPayment);
    const salary = startingSalary * Math.pow(1 + salaryGrowthRate / 100, year - 1);
    const paymentAsPercentOfSalary = (annualPayment / salary) * 100;

    rows.push({
      year,
      openingBalance,
      annualInterest,
      annualPayment,
      closingBalance,
      salary,
      paymentAsPercentOfSalary,
    });

    balance = closingBalance;
    if (balance <= 0) break;
  }

  return rows;
}

// ─── Preset Scenarios ─────────────────────────────────────────────────────────
const PRESETS = [
  {
    label: "Lendwise (Integrated UK)",
    loanAmount: 95000,
    apr: 7.9,
    termYears: 10,
    startingSalary: 38000,
    salaryGrowthRate: 5,
  },
  {
    label: "Sallie Mae (ATP USA)",
    loanAmount: 100000,
    apr: 8.5,
    termYears: 10,
    startingSalary: 90000,
    salaryGrowthRate: 8,
  },
  {
    label: "Modular UK (lower loan)",
    loanAmount: 65000,
    apr: 7.9,
    termYears: 8,
    startingSalary: 38000,
    salaryGrowthRate: 5,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function FinanceCalculator() {
  const [inputs, setInputs] = useState<LoanInputs>({
    loanAmount: 95000,
    apr: 7.9,
    termYears: 10,
    startingSalary: 38000,
    salaryGrowthRate: 5,
  });
  const [currency, setCurrency] = useState<"GBP" | "USD" | "CAD" | "AUD" | "EUR">("GBP");

  const currencySymbols: Record<string, string> = {
    GBP: "£",
    USD: "$",
    CAD: "CA$",
    AUD: "A$",
    EUR: "€",
  };
  const sym = currencySymbols[currency];

  const rows = useMemo(() => calculateRepayment(inputs), [inputs]);

  const totalInterestPaid = rows.reduce((sum, r) => sum + r.annualInterest, 0);
  const totalPaid = rows.reduce((sum, r) => sum + Math.min(r.annualPayment, r.openingBalance + r.annualInterest), 0);
  const monthlyPayment = (inputs.loanAmount * (inputs.apr / 100 / 12) * Math.pow(1 + inputs.apr / 100 / 12, inputs.termYears * 12)) /
    (Math.pow(1 + inputs.apr / 100 / 12, inputs.termYears * 12) - 1);
  const peakDebtBurden = Math.max(...rows.map((r) => r.paymentAsPercentOfSalary));

  const fmt = (n: number) =>
    `${sym}${Math.round(n).toLocaleString("en-GB")}`;

  const update = (key: keyof LoanInputs, value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <SEO
        title="Pilot Training Finance Repayment Calculator | AviatorIQ"
        description="Calculate your monthly repayments, total interest, and debt burden as a percentage of your pilot salary. Free finance repayment calculator for UK, US, and international pilot training loans."
        canonical="https://aviatoriq.com/tools/finance-calculator"
      />
      <PublicNav />
      <main className="min-h-screen bg-[var(--color-navy)] text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-4">
              <Calculator className="w-4 h-4" />
              Finance Tool
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">
              Pilot Training Finance Repayment Calculator
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Model your loan repayments against your expected pilot salary. Understand your monthly payment, total interest cost, and debt burden before you borrow.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-4 mb-8 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200">
              <strong>This is an illustrative tool only.</strong> Actual repayment amounts depend on your lender's specific terms, fees, and interest calculation method. APR figures are indicative. Always obtain a formal loan illustration from your lender before borrowing. AviatorIQ is not a financial adviser.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Inputs Panel */}
            <div className="lg:col-span-1 space-y-6">
              {/* Preset Scenarios */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-sm font-semibold text-white/80 mb-3">Quick Presets</p>
                <div className="space-y-2">
                  {PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => {
                        setInputs({
                          loanAmount: preset.loanAmount,
                          apr: preset.apr,
                          termYears: preset.termYears,
                          startingSalary: preset.startingSalary,
                          salaryGrowthRate: preset.salaryGrowthRate,
                        });
                        setCurrency(preset.label.includes("USA") ? "USD" : preset.label.includes("Canada") ? "CAD" : "GBP");
                      }}
                      className="w-full text-left text-sm px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Currency */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <label className="block text-sm font-semibold text-white/80 mb-2">Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as typeof currency)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
                >
                  <option value="GBP">£ GBP (UK)</option>
                  <option value="USD">$ USD (USA)</option>
                  <option value="CAD">CA$ CAD (Canada)</option>
                  <option value="AUD">A$ AUD (Australia)</option>
                  <option value="EUR">€ EUR (Europe)</option>
                </select>
              </div>

              {/* Loan Inputs */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-4">
                <p className="text-sm font-semibold text-white/80">Loan Details</p>

                <div>
                  <label className="block text-xs text-white/60 mb-1">Loan Amount ({sym})</label>
                  <input
                    type="number"
                    value={inputs.loanAmount}
                    onChange={(e) => update("loanAmount", Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
                    min={1000}
                    max={300000}
                    step={1000}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/60 mb-1">
                    Representative APR (%)
                    <span className="ml-1 text-white/40 text-xs">— indicative only</span>
                  </label>
                  <input
                    type="number"
                    value={inputs.apr}
                    onChange={(e) => update("apr", Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
                    min={1}
                    max={30}
                    step={0.1}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/60 mb-1">Repayment Term (years)</label>
                  <input
                    type="number"
                    value={inputs.termYears}
                    onChange={(e) => update("termYears", Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
                    min={1}
                    max={25}
                    step={1}
                  />
                </div>
              </div>

              {/* Salary Inputs */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-4">
                <p className="text-sm font-semibold text-white/80">Salary Assumptions</p>
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 flex gap-2">
                  <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-200">
                    Salary figures are illustrative. Your actual salary will depend on the airline, seniority, and market conditions when you qualify.
                  </p>
                </div>

                <div>
                  <label className="block text-xs text-white/60 mb-1">Starting Salary ({sym})</label>
                  <input
                    type="number"
                    value={inputs.startingSalary}
                    onChange={(e) => update("startingSalary", Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
                    min={20000}
                    max={500000}
                    step={1000}
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/60 mb-1">Annual Salary Growth (%)</label>
                  <input
                    type="number"
                    value={inputs.salaryGrowthRate}
                    onChange={(e) => update("salaryGrowthRate", Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white"
                    min={0}
                    max={20}
                    step={0.5}
                  />
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Monthly Payment", value: fmt(monthlyPayment), sub: "per month" },
                  { label: "Total Interest", value: fmt(totalInterestPaid), sub: "over term" },
                  { label: "Total Repaid", value: fmt(totalPaid), sub: "principal + interest" },
                  { label: "Peak Debt Burden", value: `${peakDebtBurden.toFixed(1)}%`, sub: "of starting salary" },
                ].map((card) => (
                  <div key={card.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-xs text-white/50 mb-1">{card.label}</p>
                    <p className="text-xl font-bold text-white">{card.value}</p>
                    <p className="text-xs text-white/40 mt-1">{card.sub}</p>
                  </div>
                ))}
              </div>

              {/* Debt Burden Warning */}
              {peakDebtBurden > 30 && (
                <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4 flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-red-300 mb-1">High Debt Burden Warning</p>
                    <p className="text-sm text-red-200">
                      Your loan repayments represent <strong>{peakDebtBurden.toFixed(1)}%</strong> of your starting salary. Financial advisers generally recommend keeping total debt repayments below 30% of gross income. Consider a longer repayment term, a lower loan amount, or a higher starting salary assumption.
                    </p>
                  </div>
                </div>
              )}

              {/* Year-by-Year Table */}
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="px-5 py-4 border-b border-white/10">
                  <p className="font-semibold text-sm">Year-by-Year Repayment Schedule</p>
                  <p className="text-xs text-white/50 mt-1">All figures in {currency}. Interest calculated annually for illustration purposes.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-xs text-white/50 border-b border-white/10">
                      <tr>
                        <th className="px-4 py-3 text-left">Year</th>
                        <th className="px-4 py-3 text-right">Opening Balance</th>
                        <th className="px-4 py-3 text-right">Interest</th>
                        <th className="px-4 py-3 text-right">Annual Payment</th>
                        <th className="px-4 py-3 text-right">Closing Balance</th>
                        <th className="px-4 py-3 text-right">Salary</th>
                        <th className="px-4 py-3 text-right">% of Salary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {rows.map((row) => (
                        <tr key={row.year} className={`hover:bg-white/5 transition-colors ${row.paymentAsPercentOfSalary > 30 ? "bg-red-900/10" : ""}`}>
                          <td className="px-4 py-3 font-medium">Year {row.year}</td>
                          <td className="px-4 py-3 text-right text-white/70">{fmt(row.openingBalance)}</td>
                          <td className="px-4 py-3 text-right text-red-300">{fmt(row.annualInterest)}</td>
                          <td className="px-4 py-3 text-right text-white">{fmt(row.annualPayment)}</td>
                          <td className="px-4 py-3 text-right text-white/70">{fmt(row.closingBalance)}</td>
                          <td className="px-4 py-3 text-right text-green-300">{fmt(row.salary)}</td>
                          <td className={`px-4 py-3 text-right font-medium ${row.paymentAsPercentOfSalary > 30 ? "text-red-400" : row.paymentAsPercentOfSalary > 20 ? "text-amber-400" : "text-green-400"}`}>
                            {row.paymentAsPercentOfSalary.toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <p className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-blue-400" />
                  Reduce Your Repayment Burden
                </p>
                <ul className="text-sm text-white/70 space-y-2 list-disc pl-5">
                  <li>A <strong>fully funded cadet programme</strong> (e.g. BA Speedbird Academy) eliminates the loan entirely — but acceptance rates are below 1%.</li>
                  <li>A <strong>longer repayment term</strong> reduces monthly payments but significantly increases total interest paid.</li>
                  <li>Targeting a <strong>higher-paying first airline</strong> (e.g. long-haul carrier vs regional) reduces the debt burden percentage.</li>
                  <li>Some lenders allow <strong>overpayments</strong> without penalty — paying extra in high-salary years can significantly reduce total interest.</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/calculator" className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Full Cost Calculator
                  </Link>
                  <Link href="/guides/how-to-finance-pilot-training-uk" className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                    Finance Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
