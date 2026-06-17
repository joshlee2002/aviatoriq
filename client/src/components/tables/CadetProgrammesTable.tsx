/**
 * CadetProgrammesTable.tsx
 * Reusable table component for rendering cadet programme data.
 * Accepts an optional country filter to show only relevant programmes.
 */

import React from "react";
import {
  CADET_PROGRAMMES_2026,
  CadetProgramme,
} from "../../data/cadetProgrammes2026";

interface CadetProgrammesTableProps {
  country?: string; // Filter by country — if omitted, shows all
  className?: string;
}

const statusColour = (status: CadetProgramme["status"]): string => {
  if (status.startsWith("Open")) return "bg-green-100 text-green-800";
  if (status.startsWith("Paused")) return "bg-red-100 text-red-800";
  if (status.startsWith("Closed")) return "bg-yellow-100 text-yellow-800";
  if (status.startsWith("Ongoing")) return "bg-blue-100 text-blue-800";
  return "bg-gray-100 text-gray-700";
};

const fundingColour = (
  funding: CadetProgramme["fundedOrSelfFunded"]
): string => {
  if (funding === "Fully funded by airline")
    return "bg-green-50 text-green-700 font-semibold";
  if (funding === "Deferred payment (repaid from salary)")
    return "bg-yellow-50 text-yellow-700";
  return "bg-gray-50 text-gray-600";
};

export const CadetProgrammesTable: React.FC<CadetProgrammesTableProps> = ({
  country,
  className = "",
}) => {
  const programmes = country
    ? CADET_PROGRAMMES_2026.filter(p =>
        p.country.toLowerCase().includes(country.toLowerCase())
      )
    : CADET_PROGRAMMES_2026;

  if (programmes.length === 0) {
    return (
      <p className="text-sm text-gray-500 italic">
        No cadet programme data available for this region. Check the airline's
        official careers page directly.
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
                Airline / Programme
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Status (June 2026)
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Funding
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Estimated Cost
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Training Partner
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {programmes.map((p, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{p.airline}</div>
                  <div className="text-xs text-gray-500">{p.programmeName}</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColour(p.status)}`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block rounded px-2 py-0.5 text-xs ${fundingColour(p.fundedOrSelfFunded)}`}
                  >
                    {p.fundedOrSelfFunded}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700">{p.estimatedCost}</td>
                <td className="px-4 py-3 text-gray-600 text-xs">
                  {p.trainingPartner}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Caveats */}
      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 space-y-1">
        <p className="font-semibold">
          Important: Verify all information directly with the airline
        </p>
        <ul className="list-disc list-inside space-y-0.5">
          {programmes.map((p, i) => (
            <li key={i}>
              <span className="font-medium">{p.airline}:</span> {p.caveat}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-gray-400">
        Data last checked: June 2026. Sources:{" "}
        {programmes.map((p, i) => (
          <span key={i}>
            <a
              href={p.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              {p.airline}
            </a>
            {i < programmes.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
    </div>
  );
};

export default CadetProgrammesTable;
