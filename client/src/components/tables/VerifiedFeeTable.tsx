/**
 * VerifiedFeeTable.tsx
 * Reusable table component for rendering UK flight school fee data.
 * Uses the updated schema: routeType, whatIsIncluded, whatIsExcluded, location.
 */

import React from "react";
import {
  UK_FLIGHT_SCHOOL_FEES_2026,
  UK_INTEGRATED_ATPL_COST_RANGE,
  UK_MODULAR_ATPL_COST_RANGE,
} from "../../data/ukFlightSchoolFees2026";

interface VerifiedFeeTableProps {
  routeType?: "Integrated ATPL" | "Modular ATPL" | "all";
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
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${map[level]}`}
    >
      {label[level]}
    </span>
  );
};

export const VerifiedFeeTable: React.FC<VerifiedFeeTableProps> = ({
  routeType = "all",
  className = "",
}) => {
  const rows =
    routeType === "all"
      ? UK_FLIGHT_SCHOOL_FEES_2026
      : UK_FLIGHT_SCHOOL_FEES_2026.filter(r =>
          r.routeType.toLowerCase().includes(routeType.toLowerCase())
        );

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Cost range summary */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
          <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
            Integrated ATPL (typical range)
          </p>
          <p className="text-lg font-bold text-blue-900">
            {UK_INTEGRATED_ATPL_COST_RANGE.typical}
          </p>
          <p className="text-xs text-blue-600 mt-1">
            {UK_INTEGRATED_ATPL_COST_RANGE.caveat}
          </p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-3">
          <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-1">
            Modular ATPL (typical range)
          </p>
          <p className="text-lg font-bold text-purple-900">
            {UK_MODULAR_ATPL_COST_RANGE.typical}
          </p>
          <p className="text-xs text-purple-600 mt-1">
            {UK_MODULAR_ATPL_COST_RANGE.caveat}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                School
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Location
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Route Type
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Fee
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Confidence
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                What's Included
              </th>
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
                    className="font-medium text-blue-600 underline hover:text-blue-800"
                  >
                    {row.schoolName}
                  </a>
                </td>
                <td className="px-4 py-3 text-xs text-gray-600">
                  {row.location}
                </td>
                <td className="px-4 py-3 text-gray-700">{row.routeType}</td>
                <td className="px-4 py-3 font-semibold text-gray-900">
                  {row.estimatedFee}
                </td>
                <td className="px-4 py-3">
                  {confidenceBadge(row.confidenceLevel)}
                </td>
                <td className="px-4 py-3 text-xs text-gray-600">
                  {row.whatIsIncluded}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
        <p className="font-semibold mb-1">
          Always request a current prospectus before committing
        </p>
        <p>
          Most UK flight schools do not publish their full fee schedule
          publicly. Fees change between intakes and may vary based on your
          starting point, chosen aircraft type, and pace of training.
          "Confirmed" fees are taken directly from the school's public website
          as of June 2026 — verify before relying on them.
        </p>
      </div>

      <p className="text-xs text-gray-400">
        Data last checked: June 2026. Sources:{" "}
        <a
          href="https://www.balpa.org/becoming-a-pilot/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          BALPA
        </a>{" "}
        and individual school websites.
      </p>
    </div>
  );
};

export default VerifiedFeeTable;
