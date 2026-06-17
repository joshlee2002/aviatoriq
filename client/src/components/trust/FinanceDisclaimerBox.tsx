/**
 * FinanceDisclaimerBox.tsx
 * Mandatory disclaimer for all finance-related guides.
 * Must be rendered at the top of any guide touching loans, APRs, costs,
 * repayment terms, or financial planning for pilot training.
 */

import React from "react";
import { AlertTriangle } from "lucide-react";

export interface FinanceDisclaimerBoxProps {
  /** Optional custom text to append after the standard disclaimer */
  additionalNote?: string;
  className?: string;
}

export const FinanceDisclaimerBox: React.FC<FinanceDisclaimerBoxProps> = ({
  additionalNote,
  className = "",
}) => {
  return (
    <div
      className={`flex items-start gap-3 rounded-lg p-4 ${className}`}
      style={{
        background: "oklch(0.6 0.18 60 / 0.06)",
        border: "1px solid oklch(0.6 0.18 60 / 0.25)",
      }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
        style={{ background: "oklch(0.6 0.18 60 / 0.12)" }}
      >
        <AlertTriangle
          className="w-4 h-4"
          style={{ color: "oklch(0.72 0.18 65)" }}
        />
      </div>
      <div>
        <p className="text-xs font-semibold text-white mb-1">
          Not financial advice
        </p>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "oklch(0.65 0.04 240)" }}
        >
          This guide is for general information only and does not constitute
          financial advice. Loan rates, APRs, eligibility criteria, and product
          availability change regularly. All costs, fees, and repayment figures
          shown are indicative only — your actual costs will depend on your
          personal circumstances, the lender's assessment, and the current terms
          offered. Always compare multiple providers, read the full terms and
          conditions, and consider seeking independent financial advice from an
          FCA-authorised adviser before taking on debt to fund pilot training.
        </p>
        {additionalNote && (
          <p
            className="text-xs mt-2 leading-relaxed"
            style={{ color: "oklch(0.65 0.04 240)" }}
          >
            {additionalNote}
          </p>
        )}
      </div>
    </div>
  );
};

export default FinanceDisclaimerBox;
