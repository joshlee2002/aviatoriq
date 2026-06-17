import { useState } from "react";
import { trpc } from "@/lib/trpc";
import {
  Lock,
  Unlock,
  Mail,
  User,
  Loader2,
  Globe,
  Phone,
  CreditCard,
  ExternalLink,
} from "lucide-react";

interface SchoolUnlockModalProps {
  schoolId: number;
  schoolName: string;
  schoolCountry?: string;
  website?: string | null;
  contactEmail?: string | null;
  phone?: string | null;
  priceRange?: string | null;
  airlinePartnerships?: string | null;
  onClose: () => void;
}

const surface = "oklch(0.14 0.08 250)";
const border = "oklch(1 0 0 / 0.10)";
const muted = "oklch(0.55 0.04 240)";
const ctaGradient =
  "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";
const brandGradient =
  "linear-gradient(135deg, oklch(0.45 0.18 240), oklch(0.6 0.18 200))";

export default function SchoolUnlockModal({
  schoolId,
  schoolName,
  schoolCountry,
  website,
  contactEmail,
  phone,
  priceRange,
  airlinePartnerships,
  onClose,
}: SchoolUnlockModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const unlockMutation = trpc.leads.captureSchoolUnlock.useMutation({
    onSuccess: () => {
      setUnlocked(true);
    },
    onError: err => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    unlockMutation.mutate({
      name: name.trim(),
      email: email.trim(),
      schoolId,
      schoolName,
      country: schoolCountry,
    });
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "oklch(0 0 0 / 0.75)", backdropFilter: "blur(4px)" }}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: "oklch(0.12 0.09 252)",
          border: `1px solid ${border}`,
          boxShadow: "0 24px 64px oklch(0 0 0 / 0.6)",
        }}
      >
        {/* Header */}
        <div className="p-6 pb-0">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: unlocked
                    ? "oklch(0.55 0.18 145 / 0.15)"
                    : "oklch(0.45 0.18 240 / 0.15)",
                }}
              >
                {unlocked ? (
                  <Unlock
                    className="w-5 h-5"
                    style={{ color: "oklch(0.65 0.18 145)" }}
                  />
                ) : (
                  <Lock
                    className="w-5 h-5"
                    style={{ color: "oklch(0.65 0.18 240)" }}
                  />
                )}
              </div>
              <div>
                <h2 className="font-display font-bold text-white text-lg leading-tight">
                  {schoolName}
                </h2>
                <p className="text-xs mt-0.5" style={{ color: muted }}>
                  {unlocked
                    ? "Full details unlocked"
                    : "Enter your details to unlock full information"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-sm transition-colors flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg"
              style={{ color: muted, background: "oklch(1 0 0 / 0.05)" }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {!unlocked ? (
          /* ── Gate form ── */
          <form onSubmit={handleSubmit} className="p-6 pt-4">
            <div
              className="p-4 rounded-xl mb-5"
              style={{
                background: "oklch(0.45 0.18 240 / 0.08)",
                border: "1px solid oklch(0.45 0.18 240 / 0.15)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.72 0.04 240)" }}
              >
                Get the full details for{" "}
                <strong className="text-white">{schoolName}</strong> — including
                exact pricing, website, contact details, and airline
                partnerships. We'll also send you a free personalised school
                comparison.
              </p>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: muted }}
                >
                  Your name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: muted }}
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="First name"
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-white placeholder-opacity-40 outline-none transition-all"
                    style={{
                      background: surface,
                      border: `1px solid ${border}`,
                      color: "white",
                    }}
                    onFocus={e =>
                      (e.currentTarget.style.borderColor =
                        "oklch(0.45 0.18 240 / 0.6)")
                    }
                    onBlur={e => (e.currentTarget.style.borderColor = border)}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold mb-1.5"
                  style={{ color: muted }}
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: muted }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-white outline-none transition-all"
                    style={{
                      background: surface,
                      border: `1px solid ${border}`,
                      color: "white",
                    }}
                    onFocus={e =>
                      (e.currentTarget.style.borderColor =
                        "oklch(0.45 0.18 240 / 0.6)")
                    }
                    onBlur={e => (e.currentTarget.style.borderColor = border)}
                  />
                </div>
              </div>
            </div>

            {error && (
              <p
                className="text-xs mb-3 px-3 py-2 rounded-lg"
                style={{
                  color: "oklch(0.65 0.18 25)",
                  background: "oklch(0.65 0.18 25 / 0.1)",
                  border: "1px solid oklch(0.65 0.18 25 / 0.2)",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={unlockMutation.isPending}
              className="w-full py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all"
              style={{
                background: ctaGradient,
                opacity: unlockMutation.isPending ? 0.7 : 1,
              }}
            >
              {unlockMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Unlocking...
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" /> Unlock Full Details
                </>
              )}
            </button>

            <p
              className="text-xs text-center mt-3"
              style={{ color: "oklch(0.45 0.04 240)" }}
            >
              No spam. We'll only contact you about pilot training.
            </p>
          </form>
        ) : (
          /* ── Unlocked details ── */
          <div className="p-6 pt-4">
            <div
              className="p-4 rounded-xl mb-5 flex items-center gap-3"
              style={{
                background: "oklch(0.55 0.18 145 / 0.08)",
                border: "1px solid oklch(0.55 0.18 145 / 0.2)",
              }}
            >
              <Unlock
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "oklch(0.65 0.18 145)" }}
              />
              <p className="text-sm" style={{ color: "oklch(0.72 0.04 240)" }}>
                Full details unlocked. Check your email for a personalised
                school comparison.
              </p>
            </div>

            <div className="space-y-3">
              {priceRange && (
                <div
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: surface, border: `1px solid ${border}` }}
                >
                  <CreditCard
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.65 0.18 240)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold mb-0.5"
                      style={{ color: muted }}
                    >
                      Course pricing
                    </p>
                    <p className="text-sm font-bold text-white">{priceRange}</p>
                  </div>
                </div>
              )}
              {airlinePartnerships && (
                <div
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: surface, border: `1px solid ${border}` }}
                >
                  <Globe
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.65 0.18 240)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold mb-0.5"
                      style={{ color: muted }}
                    >
                      Airline partnerships
                    </p>
                    <p className="text-sm text-white">{airlinePartnerships}</p>
                  </div>
                </div>
              )}
              {phone && (
                <div
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: surface, border: `1px solid ${border}` }}
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.65 0.18 240)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold mb-0.5"
                      style={{ color: muted }}
                    >
                      Phone
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="text-sm text-white no-underline hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              )}
              {contactEmail && (
                <div
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: surface, border: `1px solid ${border}` }}
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.65 0.18 240)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold mb-0.5"
                      style={{ color: muted }}
                    >
                      Email
                    </p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-sm text-white no-underline hover:underline"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white no-underline transition-all"
                  style={{ background: brandGradient }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit {schoolName} website
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full mt-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{ border: `1px solid ${border}`, color: muted }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
