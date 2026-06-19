/**
 * AuthorBox.tsx
 * Displays author attribution for a guide.
 * No fake credentials — use honest placeholders where credentials cannot be verified.
 */

import React from "react";
import { User } from "lucide-react";

export interface AuthorBoxProps {
  name: string;
  role: string;
  bio?: string;
  profileUrl?: string;
  /** If true, shows "Editorially reviewed by AviatorPath" instead of a named individual */
  editorialOnly?: boolean;
}

export const AuthorBox: React.FC<AuthorBoxProps> = ({
  name,
  role,
  bio,
  profileUrl,
  editorialOnly = false,
}) => {
  if (editorialOnly) {
    return (
      <div
        className="flex items-start gap-3 rounded-lg p-4"
        style={{
          background: "oklch(0.14 0.08 250)",
          border: "1px solid oklch(1 0 0 / 0.08)",
        }}
      >
        <div
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "oklch(0.45 0.18 240 / 0.15)" }}
        >
          <User className="w-4 h-4" style={{ color: "oklch(0.65 0.18 240)" }} />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">
            Editorially reviewed by AviatorPath
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "oklch(0.55 0.04 240)" }}
          >
            This guide has been reviewed by the AviatorPath editorial team against
            primary regulatory sources. Expert review by a named individual is
            pending.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-start gap-3 rounded-lg p-4"
      style={{
        background: "oklch(0.14 0.08 250)",
        border: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
        style={{ background: "oklch(0.45 0.18 240 / 0.15)" }}
      >
        <User className="w-4 h-4" style={{ color: "oklch(0.65 0.18 240)" }} />
      </div>
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          {profileUrl ? (
            <a
              href={profileUrl}
              className="text-xs font-semibold text-white underline hover:opacity-80"
            >
              {name}
            </a>
          ) : (
            <p className="text-xs font-semibold text-white">{name}</p>
          )}
          <span className="text-xs" style={{ color: "oklch(0.55 0.04 240)" }}>
            {role}
          </span>
        </div>
        {bio && (
          <p className="text-xs mt-1" style={{ color: "oklch(0.55 0.04 240)" }}>
            {bio}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthorBox;
