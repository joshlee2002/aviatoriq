/**
 * CadetProgrammeTable.tsx
 * Reusable table component for rendering airline cadet programme data.
 * Uses the updated schema: fundedOrSelfFunded (replaces fundingType).
 */

import React, { useState } from "react";
import {
  CADET_PROGRAMMES_2026,
  type CadetProgramme,
} from "../../data/cadetProgrammes2026";

interface CadetProgrammeTableProps {
  country?: string;
  className?: string;
}

const statusBadge = (status: CadetProgramme["status"]) => {
  const map: Record<CadetProgramme["status"], string> = {
    "Open — applications accepted": "bg-green-100 text-green-700",
    "Closed for 2026 — check for 2027": "bg-red-100 text-red-700",
    "Paused — no confirmed restart date": "bg-orange-100 text-orange-700",
    "Ongoing intake — rolling applications": "bg-blue-100 text-blue-700",
    "Not publicly confirmed": "bg-gray-100 text-gray-600",
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${map[status] ?? "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  );
};

const fundingBadge = (funding: CadetProgramme["fundedOrSelfFunded"]) => {
  const map: Record<CadetProgramme["fundedOrSelfFunded"], string> = {
    "Fully funded by airline": "bg-emerald-100 text-emerald-700",
    "Self-funded (trainee pays)": "bg-amber-100 text-amber-700",
    "Deferred payment (repaid from salary)": "bg-purple-100 text-purple-700",
    "Partially funded": "bg-yellow-100 text-yellow-700",
    "Not publicly confirmed": "bg-gray-100 text-gray-600",
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${map[funding] ?? "bg-gray-100 text-gray-600"}`}
    >
      {funding}
    </span>
  );
};

export const CadetProgrammeTable: React.FC<CadetProgrammeTableProps> = ({
  country,
  className = "",
}) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const rows = country
    ? CADET_PROGRAMMES_2026.filter(r =>
        r.country.toLowerCase().includes(country.toLowerCase())
      )
    : CADET_PROGRAMMES_2026;

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
                Status
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Funding
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Cost to Trainee
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Training Partner
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((row, i) => (
              <React.Fragment key={i}>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <a
                      href={row.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 underline hover:text-blue-800 block"
                    >
                      {row.airline}
                    </a>
                    <span className="text-xs text-gray-500">
                      {row.programmeName}
                    </span>
                  </td>
                  <td className="px-4 py-3">{statusBadge(row.status)}</td>
                  <td className="px-4 py-3">
                    {fundingBadge(row.fundedOrSelfFunded)}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-700">
                    {row.estimatedCost}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600">
                    {row.trainingPartner}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        setExpandedRow(expandedRow === i ? null : i)
                      }
                      className="text-xs text-blue-600 underline hover:text-blue-800"
                    >
                      {expandedRow === i ? "Hide" : "Show"}
                    </button>
                  </td>
                </tr>
                {expandedRow === i && (
                  <tr className="bg-blue-50">
                    <td colSpan={6} className="px-4 py-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">
                        Application status:
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        {row.applicationStatus}
                      </p>
                      <p className="text-xs font-semibold text-gray-700 mb-1">
                        Eligibility:
                      </p>
                      <p className="text-xs text-gray-600 mb-2">
                        {row.eligibilitySummary}
                      </p>
                      <p className="text-xs font-semibold text-amber-700 mb-1">
                        Important caveat:
                      </p>
                      <p className="text-xs text-amber-800">{row.caveat}</p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <p className="font-semibold mb-1">No programme guarantees employment</p>
        <p>
          All cadet programmes — including fully funded ones — offer a
          conditional offer of employment only. Completion of training, passing
          all assessments, obtaining licences, and meeting the airline's
          standards throughout are all required. Status, intake numbers, and
          eligibility criteria change frequently. Always verify directly with
          the airline or training partner before making any decisions.
        </p>
      </div>

      <p className="text-xs text-gray-400">
        Data last checked: June 2026. Sources: official airline press releases
        and careers pages.
      </p>
    </div>
  );
};

export default CadetProgrammeTable;
