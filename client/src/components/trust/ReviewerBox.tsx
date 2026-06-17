/**
 * ReviewerBox.tsx
 * Displays reviewer attribution for a guide.
 * Uses "Editorially reviewed by AviatorIQ" as the honest default placeholder
 * when no named expert reviewer has been confirmed.
 */

import React from "react";
import { ShieldCheck } from "lucide-react";

export interface ReviewerBoxProps {
  /** Named reviewer — only use if credentials are independently verifiable */
  reviewerName?: string;
  reviewerRole?: string;
  /** If true (default), shows "Editorially reviewed by AviatorIQ" */
  editorialReview?: boolean;
  /** Optional note about what kind of expert review is pending */
  pendingReviewNote?: string;
}

export const ReviewerBox: React.FC<ReviewerBoxProps> = ({
  reviewerName,
  reviewerRole,
  editorialReview = true,
  pendingReviewNote,
}) => {
  const hasNamedReviewer = reviewerName && !editorialReview;

  return (
    <div
      className="flex items-start gap-3 rounded-lg p-4"
      style={{
        background: "oklch(0.55 0.18 145 / 0.06)",
        border: "1px solid oklch(0.55 0.18 145 / 0.2)",
      }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "oklch(0.55 0.18 145 / 0.12)" }}
      >
        <ShieldCheck className="w-4 h-4" style={{ color: "oklch(0.65 0.18 145)" }} />
      </div>
      <div>
        {hasNamedReviewer ? (
          <>
            <p className="text-xs font-semibold text-white">
              Reviewed by: {reviewerName}
            </p>
            {reviewerRole && (
              <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 240)" }}>
                {reviewerRole}
              </p>
            )}
          </>
        ) : (
          <>
            <p className="text-xs font-semibold text-white">
              Editorially reviewed by AviatorIQ
            </p>
            <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 240)" }}>
              {pendingReviewNote
                ? pendingReviewNote
                : "This guide has been reviewed against primary regulatory and official sources by the AviatorIQ editorial team. Expert review by a named specialist is pending."}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewerBox;
