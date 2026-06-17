/**
 * PilotSalaryTable.tsx
 * Reusable table component for rendering pilot salary data.
 * Accepts a country filter to show only relevant salary rows.
 */

import React from "react";
import { PILOT_SALARY_SOURCES_2026 } from "../../data/pilotSalarySources2026";

interface PilotSalaryTableProps {
  country: string; // Required — always filter by country for localisation
  className?: string;
}

export const PilotSalaryTable: React.FC<PilotSalaryTableProps> = ({
  country,
  className = "",
}) => {
  const rows = PILOT_SALARY_SOURCES_2026.filter(s =>
    s.country.toLowerCase().includes(country.toLowerCase())
  );

  if (rows.length === 0) {
    return (
      <p className="text-sm text-gray-500 italic">
        No verified salary data available for this country. Check BALPA, ALPA,
        or AFAP for the latest figures.
      </p>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Role
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Salary Range
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Pay Basis
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Source
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Source Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{row.role}</div>
                  <div className="text-xs text-gray-500">
                    {row.airlineOrSource}
                  </div>
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800">
                  {row.salaryRange}
                  <span className="ml-1 text-xs font-normal text-gray-500">
                    ({row.currency})
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600">
                    {row.payBasis}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs">
                  <a
                    href={row.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {row.airlineOrSource.split(" (")[0]}
                  </a>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      row.sourceType === "Official body"
                        ? "bg-green-100 text-green-700"
                        : row.sourceType === "Official airline"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {row.sourceType}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <p className="font-semibold mb-1">
          Salary figures are indicative ranges, not guarantees
        </p>
        <p>
          Actual pay depends on airline, seniority, fleet type, roster, and
          allowances. Figures represent basic pay unless otherwise stated.
          Allowances (duty pay, sector pay, per diem) can add significantly to
          total remuneration. Always verify current scales with the relevant
          pilot association (BALPA, ALPA, AFAP) or the airline's careers page
          before making financial decisions.
        </p>
      </div>

      <p className="text-xs text-gray-400">Data last checked: June 2026.</p>
    </div>
  );
};

export default PilotSalaryTable;
