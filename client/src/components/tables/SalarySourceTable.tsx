/**
 * SalarySourceTable.tsx
 * Reusable table component for rendering pilot salary source data.
 * Uses the updated schema with payBasis field.
 */

import React from "react";
import {
  PILOT_SALARY_SOURCES_2026,
  type PilotSalarySource,
} from "../../data/pilotSalarySources2026";

interface SalarySourceTableProps {
  country?: string;
  className?: string;
}

const sourceTypeBadge = (type: PilotSalarySource["sourceType"]) => {
  const map: Record<PilotSalarySource["sourceType"], string> = {
    "Official body": "bg-green-100 text-green-700",
    "Official airline": "bg-blue-100 text-blue-700",
    "Industry survey": "bg-purple-100 text-purple-700",
    "Press report": "bg-amber-100 text-amber-700",
    "CBA / ALPA-reported": "bg-sky-100 text-sky-700",
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${map[type] ?? "bg-gray-100 text-gray-600"}`}
    >
      {type}
    </span>
  );
};

const payBasisBadge = (basis: PilotSalarySource["payBasis"]) => {
  const map: Record<PilotSalarySource["payBasis"], string> = {
    "Annual (basic)": "bg-gray-100 text-gray-600",
    "Annual (total remuneration)": "bg-blue-100 text-blue-700",
    "Monthly (tax-free)": "bg-emerald-100 text-emerald-700",
    "Hourly (flying pay)": "bg-indigo-100 text-indigo-700",
    "Annual (estimated)": "bg-yellow-100 text-yellow-700",
    "Annual (CBA base, 900 hrs)": "bg-sky-100 text-sky-700",
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${map[basis] ?? "bg-gray-100 text-gray-600"}`}
    >
      {basis}
    </span>
  );
};

export const SalarySourceTable: React.FC<SalarySourceTableProps> = ({
  country,
  className = "",
}) => {
  const rows = country
    ? PILOT_SALARY_SOURCES_2026.filter(r =>
        r.country.toLowerCase().includes(country.toLowerCase())
      )
    : PILOT_SALARY_SOURCES_2026;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Country
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Source
              </th>
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
                Source Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-xs text-gray-600">
                  {row.country}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={row.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 underline hover:text-blue-800 text-xs"
                  >
                    {row.airlineOrSource}
                  </a>
                </td>
                <td className="px-4 py-3 text-xs text-gray-700">{row.role}</td>
                <td className="px-4 py-3 font-semibold text-gray-900 text-xs">
                  {row.salaryRange}
                </td>
                <td className="px-4 py-3">{payBasisBadge(row.payBasis)}</td>
                <td className="px-4 py-3">{sourceTypeBadge(row.sourceType)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <p className="font-semibold mb-1">
          Salary figures are ranges, not guarantees
        </p>
        <p>
          Actual pay depends on airline, seniority, fleet type, roster, and
          allowances. "Annual (basic)" figures exclude duty pay, sector pay, and
          allowances. "Annual (total remuneration)" includes these but is an
          estimate. Upper-end figures typically reflect senior captains — not
          representative of a new entrant. Always verify current pay scales
          directly with the airline or via the relevant pilots' union.
        </p>
      </div>

      <p className="text-xs text-gray-400">
        Data last checked: June 2026. Sources: BALPA, ALPA, AFAP, and individual
        airline careers pages.
      </p>
    </div>
  );
};

export default SalarySourceTable;
