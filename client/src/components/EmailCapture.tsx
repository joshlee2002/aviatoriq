import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface EmailCaptureProps {
  /** Where this capture is shown — used for analytics tracking */
  source: string;
  /** Headline shown above the form */
  headline?: string;
  /** Subtext shown below the headline */
  subtext?: string;
  /** CTA button label */
  ctaLabel?: string;
  /** Visual variant */
  variant?: "card" | "inline" | "banner";
}

export default function EmailCapture({
  source,
  headline = "Get your free pilot training guide",
  subtext = "Join 4,000+ aspiring pilots. Weekly insights, tool updates, and no spam.",
  ctaLabel = "Send me the guide",
  variant = "card",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const subscribe = trpc.guides.subscribe.useMutation({
    onError: () => {
      setError("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    // Fire PostHog event if available
    if (typeof window !== "undefined" && (window as any).posthog) {
      (window as any).posthog.capture("email_signup", { source, email });
    }

    subscribe.mutate({ email, source });
  };

  const loading = subscribe.isPending;
  const submitted = subscribe.isSuccess;

  if (submitted) {
    return (
      <div
        style={{
          background: "oklch(0.18 0.06 145 / 0.3)",
          border: "1px solid oklch(0.55 0.18 145 / 0.4)",
          borderRadius: "1rem",
          padding: variant === "banner" ? "1.25rem 1.5rem" : "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <CheckCircle size={28} style={{ color: "oklch(0.72 0.18 145)", flexShrink: 0 }} />
        <div>
          <p style={{ fontWeight: 700, color: "white", margin: 0 }}>You're in!</p>
          <p style={{ color: "oklch(0.65 0.04 240)", margin: 0, fontSize: "0.9rem" }}>
            Check your inbox — your guide is on its way.
          </p>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            flex: "1 1 220px",
            background: "oklch(1 0 0 / 0.07)",
            border: "1px solid oklch(1 0 0 / 0.15)",
            borderRadius: "0.5rem",
            padding: "0.65rem 1rem",
            color: "white",
            fontSize: "0.9rem",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.65rem 1.25rem",
            color: "oklch(0.12 0.04 250)",
            fontWeight: 700,
            fontSize: "0.85rem",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
            whiteSpace: "nowrap",
          }}
        >
          {loading ? "Sending…" : ctaLabel}
        </button>
        {error && <p style={{ color: "oklch(0.7 0.2 25)", fontSize: "0.8rem", width: "100%", margin: 0 }}>{error}</p>}
      </form>
    );
  }

  if (variant === "banner") {
    return (
      <div
        style={{
          background: "oklch(0.16 0.06 250)",
          border: "1px solid oklch(1 0 0 / 0.1)",
          borderRadius: "1rem",
          padding: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
          <Mail size={22} style={{ color: "oklch(0.72 0.18 65)", flexShrink: 0, marginTop: "2px" }} />
          <div>
            <p style={{ fontWeight: 700, color: "white", margin: "0 0 0.25rem" }}>{headline}</p>
            <p style={{ color: "oklch(0.55 0.04 240)", fontSize: "0.85rem", margin: 0 }}>{subtext}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{
              flex: "1 1 200px",
              background: "oklch(1 0 0 / 0.07)",
              border: "1px solid oklch(1 0 0 / 0.15)",
              borderRadius: "0.5rem",
              padding: "0.6rem 0.9rem",
              color: "white",
              fontSize: "0.85rem",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              background: "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))",
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.6rem 1.1rem",
              color: "oklch(0.12 0.04 250)",
              fontWeight: 700,
              fontSize: "0.82rem",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            {loading ? "Sending…" : <>{ctaLabel} <ArrowRight size={14} /></>}
          </button>
        </form>
        {error && <p style={{ color: "oklch(0.7 0.2 25)", fontSize: "0.8rem", margin: "0.5rem 0 0" }}>{error}</p>}
      </div>
    );
  }

  // Default: card variant
  return (
    <div
      style={{
        background: "linear-gradient(135deg, oklch(0.16 0.08 250), oklch(0.14 0.06 260))",
        border: "1px solid oklch(0.72 0.18 65 / 0.3)",
        borderRadius: "1.25rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          background: "oklch(0.72 0.18 65 / 0.15)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
        }}
      >
        <Mail size={22} style={{ color: "oklch(0.72 0.18 65)" }} />
      </div>
      <h3 style={{ color: "white", fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.5rem" }}>{headline}</h3>
      <p style={{ color: "oklch(0.55 0.04 240)", fontSize: "0.9rem", margin: "0 0 1.5rem" }}>{subtext}</p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            background: "oklch(1 0 0 / 0.07)",
            border: "1px solid oklch(1 0 0 / 0.15)",
            borderRadius: "0.625rem",
            padding: "0.75rem 1rem",
            color: "white",
            fontSize: "0.95rem",
            outline: "none",
            textAlign: "center",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))",
            border: "none",
            borderRadius: "0.625rem",
            padding: "0.8rem 1.5rem",
            color: "oklch(0.12 0.04 250)",
            fontWeight: 800,
            fontSize: "0.95rem",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          {loading ? "Sending…" : <>{ctaLabel} <ArrowRight size={16} /></>}
        </button>
      </form>
      {error && <p style={{ color: "oklch(0.7 0.2 25)", fontSize: "0.85rem", margin: "0.75rem 0 0" }}>{error}</p>}
      <p style={{ color: "oklch(0.4 0.03 240)", fontSize: "0.75rem", margin: "1rem 0 0" }}>
        No spam. Unsubscribe any time.
      </p>
    </div>
  );
}
