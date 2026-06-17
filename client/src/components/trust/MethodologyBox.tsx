/**
 * MethodologyBox.tsx
 * Displays how a guide was researched and verified.
 * Renders a collapsible methodology section for transparency.
 */

import React, { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";

export interface MethodologyBoxProps {
  /** Short summary shown when collapsed */
  summary: string;
  /** Full methodology text shown when expanded */
  detail: string;
  /** Primary sources used */
  primarySources?: { name: string; url: string }[];
  /** Last verified date */
  lastVerified?: string;
  className?: string;
}

export const MethodologyBox: React.FC<MethodologyBoxProps> = ({
  summary,
  detail,
  primarySources,
  lastVerified,
  className = "",
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-lg p-4 ${className}`}
      style={{
        background: "oklch(0.45 0.18 240 / 0.06)",
        border: "1px solid oklch(0.45 0.18 240 / 0.18)",
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-3 text-left"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.65 0.18 240)" }} />
          <div>
            <p className="text-xs font-semibold text-white">How we researched this guide</p>
            {!expanded && (
              <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 240)" }}>
                {summary}
              </p>
            )}
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.04 240)" }} />
        ) : (
          <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.04 240)" }} />
        )}
      </button>

      {expanded && (
        <div className="mt-3 space-y-3">
          <p className="text-xs leading-relaxed" style={{ color: "oklch(0.65 0.04 240)" }}>
            {detail}
          </p>

          {primarySources && primarySources.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-white mb-1">Primary sources consulted:</p>
              <ul className="space-y-0.5">
                {primarySources.map((src, i) => (
                  <li key={i}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline hover:opacity-80"
                      style={{ color: "oklch(0.65 0.18 240)" }}
                    >
                      {src.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {lastVerified && (
            <p className="text-xs" style={{ color: "oklch(0.45 0.04 240)" }}>
              Last verified: {lastVerified}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MethodologyBox;
