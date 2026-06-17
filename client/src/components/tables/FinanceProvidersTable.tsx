/**
 * FinanceProvidersTable.tsx
 * Reusable table component for rendering pilot training finance provider data.
 * Accepts a country filter.
 */

import React from "react";
import {
  TRAINING_FINANCE_PROVIDERS_2026,
  FINANCE_DISCLAIMER,
} from "../../data/trainingFinanceProviders2026";

interface FinanceProvidersTableProps {
  country: string;
  className?: string;
}

export const FinanceProvidersTable: React.FC<FinanceProvidersTableProps> = ({
  country,
  className = "",
}) => {
  const providers = TRAINING_FINANCE_PROVIDERS_2026.filter(p =>
    p.country.toLowerCase().includes(country.toLowerCase())
  );

  if (providers.length === 0) {
    return (
      <p className="text-sm text-gray-500 italic">
        No verified finance provider data available for this country. Check your
        national financial regulator for authorised lenders.
      </p>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Finance disclaimer */}
      <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-800">
        <p className="font-semibold mb-1">
          Financial information — not financial advice
        </p>
        <p>{FINANCE_DISCLAIMER}</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Provider
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Product Type
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Amount Range
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Representative APR
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Key Eligibility
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {providers.map((p, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <a
                    href={p.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline hover:text-blue-800"
                  >
                    {p.providerName}
                  </a>
                </td>
                <td className="px-4 py-3 text-gray-700">{p.productType}</td>
                <td className="px-4 py-3 text-gray-700">
                  {p.minAmount} – {p.maxAmount}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {p.representativeApr}
                </td>
                <td className="px-4 py-3 text-xs text-gray-600">
                  {p.eligibilityNotes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 space-y-1">
        <p className="font-semibold">Important caveats</p>
        <ul className="list-disc list-inside space-y-0.5">
          {providers.map((p, i) => (
            <li key={i}>
              <span className="font-medium">{p.providerName}:</span> {p.caveat}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-gray-400">Data last checked: June 2026.</p>
    </div>
  );
};

export default FinanceProvidersTable;
