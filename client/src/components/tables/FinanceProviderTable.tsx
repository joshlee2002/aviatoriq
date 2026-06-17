/**
 * FinanceProviderTable.tsx
 * Reusable table component for rendering pilot training finance provider data.
 * Uses the updated schema with confidenceLevel field.
 */

import React from "react";
import { TRAINING_FINANCE_PROVIDERS_2026, FINANCE_DISCLAIMER, type TrainingFinanceProvider } from "../../data/trainingFinanceProviders2026";

interface FinanceProviderTableProps {
  country?: string;
  className?: string;
}

const confidenceBadge = (level: "high" | "medium" | "low") => {
  const map = {
    high: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-gray-100 text-gray-600",
  };
  const label = {
    high: "Confirmed",
    medium: "Estimated",
    low: "Not confirmed",
  };
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${map[level]}`}>
      {label[level]}
    </span>
  );
};

const productTypeBadge = (type: TrainingFinanceProvider["productType"]) => {
  const map: Record<TrainingFinanceProvider["productType"], string> = {
    "Specialist pilot training loan": "bg-blue-100 text-blue-700",
    "Student loan (government-backed)": "bg-green-100 text-green-700",
    "Personal loan": "bg-gray-100 text-gray-600",
    "Career development loan": "bg-purple-100 text-purple-700",
    "Aviation-specific loan": "bg-indigo-100 text-indigo-700",
  };
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${map[type] ?? "bg-gray-100 text-gray-600"}`}>
      {type}
    </span>
  );
};

export const FinanceProviderTable: React.FC<FinanceProviderTableProps> = ({
  country,
  className = "",
}) => {
  const rows = country
    ? TRAINING_FINANCE_PROVIDERS_2026.filter((r) => r.country.toLowerCase().includes(country.toLowerCase()))
    : TRAINING_FINANCE_PROVIDERS_2026;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Finance disclaimer */}
      <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-800">
        <p className="font-semibold mb-1">Not financial advice</p>
        <p>{FINANCE_DISCLAIMER}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Provider</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Country</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Product Type</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Max Amount</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Representative APR</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Data Confidence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <a
                    href={row.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline hover:text-blue-800 block"
                  >
                    {row.providerName}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">{row.eligibilityNotes}</p>
                </td>
                <td className="px-4 py-3 text-xs text-gray-600">{row.country}</td>
                <td className="px-4 py-3">{productTypeBadge(row.productType)}</td>
                <td className="px-4 py-3 text-xs text-gray-700">{row.maxAmount}</td>
                <td className="px-4 py-3 font-semibold text-gray-900 text-xs">{row.representativeApr}</td>
                <td className="px-4 py-3">{confidenceBadge(row.confidenceLevel)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <p className="font-semibold mb-1">APR figures are representative examples only</p>
        <p>
          Your actual interest rate will be personalised based on your credit profile, income, and the lender's
          assessment. The representative APR is the rate that at least 51% of successful applicants receive — your
          rate may be higher. Always read the full terms and conditions before accepting any loan offer.
        </p>
      </div>

      <p className="text-xs text-gray-400">
        Data last checked: June 2026. Sources: official provider websites and FCA register.
      </p>
    </div>
  );
};

export default FinanceProviderTable;
