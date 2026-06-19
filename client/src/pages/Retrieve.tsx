import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import PublicNav from "@/components/PublicNav";
import PublicFooter from "@/components/PublicFooter";
import SEO from "@/components/SEO";
import { Mail, ArrowRight, CheckCircle2, Plane, Loader2 } from "lucide-react";

const surface = "oklch(0.14 0.08 250)";
const border = "oklch(1 0 0 / 0.08)";
const ctaGradient = "linear-gradient(135deg, oklch(0.72 0.18 65), oklch(0.65 0.2 50))";

export default function Retrieve() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const retrieveMutation = trpc.leads.retrieveByEmail.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: () => setSubmitted(true), // show success regardless to prevent enumeration
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    retrieveMutation.mutate({ email });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.10 0.08 252)" }}>
      <SEO
        title="Retrieve Your Results — AviatorPath"
        description="Lost your AviatorPath results link? Enter your email and we'll send it straight to your inbox."
        canonical="/retrieve"
        noindex={true}
      />
      <PublicNav />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto"
            style={{ background: "oklch(0.45 0.18 240 / 0.15)", border: "1px solid oklch(0.45 0.18 240 / 0.3)" }}
          >
            <Plane className="w-7 h-7" style={{ color: "oklch(0.65 0.18 240)" }} />
          </div>

          {!submitted ? (
            <div
              className="rounded-2xl p-8"
              style={{ background: surface, border: `1px solid ${border}` }}
            >
              <h1 className="font-display font-bold text-white text-2xl mb-2 text-center">
                Retrieve Your Results
              </h1>
              <p className="text-sm text-center mb-6" style={{ color: "oklch(0.6 0 0)" }}>
                Enter the email address you used when you completed the assessment. We'll send your results link straight to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-widest">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                      style={{ color: "oklch(0.55 0.04 240)" }}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none text-white placeholder-white/30"
                      style={{
                        background: "oklch(0.18 0.08 250)",
                        border: "1px solid oklch(1 0 0 / 0.12)",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={retrieveMutation.isPending || !email}
                  className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: ctaGradient }}
                >
                  {retrieveMutation.isPending ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                  ) : (
                    <>Send my results link <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>

              <p className="text-xs text-center mt-4" style={{ color: "oklch(0.45 0 0)" }}>
                Haven't taken the assessment yet?{" "}
                <Link href="/quiz" className="no-underline" style={{ color: "oklch(0.65 0.18 240)" }}>
                  Start here →
                </Link>
              </p>
            </div>
          ) : (
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: surface, border: `1px solid ${border}` }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto"
                style={{ background: "oklch(0.55 0.18 145 / 0.15)", border: "1px solid oklch(0.55 0.18 145 / 0.3)" }}
              >
                <CheckCircle2 className="w-7 h-7" style={{ color: "oklch(0.7 0.18 145)" }} />
              </div>
              <h2 className="font-display font-bold text-white text-xl mb-2">Check your inbox</h2>
              <p className="text-sm mb-6" style={{ color: "oklch(0.6 0 0)" }}>
                If we have results on file for <strong className="text-white">{email}</strong>, we've sent you a link to access them. Check your spam folder if you don't see it within a few minutes.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white no-underline transition-all hover:scale-[1.01]"
                style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.15)" }}
              >
                Back to home
              </Link>
            </div>
          )}
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
