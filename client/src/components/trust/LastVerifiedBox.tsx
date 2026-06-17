/**
 * LastVerifiedBox.tsx
 * Displays the last verified date and primary regulator source for a guide.
 * Provides visible signal to readers that content has been checked recently.
 */

import React from "react";
import { Calendar, ExternalLink } from "lucide-react";

export interface LastVerifiedBoxProps {
  /** Date the guide was last verified, e.g. "June 2026" */
  lastVerified: string;
  /** Primary regulator or official source used for verification */
  regulatorName: string;
  /** URL of the primary regulator source */
  regulatorUrl: string;
  /** Optional note about what was verified */
  verificationNote?: string;
  className?: string;
}

export const LastVerifiedBox: React.FC<LastVerifiedBoxProps> = ({
  lastVerified,
  regulatorName,
  regulatorUrl,
  verificationNote,
  className = "",
}) => {
  return (
    <div
      className={`flex items-start gap-3 rounded-lg p-3 ${className}`}
      style={{
        background: "oklch(0.14 0.08 250)",
        border: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: "oklch(0.45 0.18 240 / 0.1)" }}
      >
        <Calendar className="w-3.5 h-3.5" style={{ color: "oklch(0.65 0.18 240)" }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-xs font-semibold text-white">
            Last verified: {lastVerified}
          </p>
          <span className="text-xs" style={{ color: "oklch(0.45 0.04 240)" }}>·</span>
          <a
            href={regulatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1 hover:opacity-80"
            style={{ color: "oklch(0.65 0.18 240)" }}
          >
            {regulatorName}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        {verificationNote && (
          <p className="text-xs mt-0.5" style={{ color: "oklch(0.45 0.04 240)" }}>
            {verificationNote}
          </p>
        )}
      </div>
    </div>
  );
};

export default LastVerifiedBox;
