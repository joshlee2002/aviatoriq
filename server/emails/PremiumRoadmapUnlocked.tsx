/**
 * Email: Premium Roadmap Unlocked
 * Fires immediately after a successful Stripe payment.
 */
import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Button,
  Hr,
  Img,
  Preview,
} from "@react-email/components";

interface PremiumRoadmapUnlockedProps {
  firstName: string;
  resultsUrl: string;
  pdfUrl: string | null;
  leadId: number;
}

const NAVY = "#0A1628";
const NAVY_LIGHT = "#0F1E35";
const ORANGE = "#F97316";
const WHITE = "#FFFFFF";
const GREY = "#94A3B8";
const LIGHT_GREY = "#CBD5E1";
const GREEN = "#22C55E";
const CARD_BG = "#111C2E";

export default function PremiumRoadmapUnlocked({
  firstName = "there",
  resultsUrl = "https://aviatoriq-production.up.railway.app",
  pdfUrl = null,
  leadId = 0,
}: PremiumRoadmapUnlockedProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        Your premium AviatorIQ roadmap is unlocked — your personalised pilot
        training plan is ready.
      </Preview>
      <Body style={{ backgroundColor: NAVY, margin: 0, padding: 0, fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "0" }}>

          {/* ── Header ── */}
          <Section style={{ backgroundColor: NAVY, padding: "32px 32px 0 32px" }}>
            <Row>
              <Column>
                <Text style={{ color: ORANGE, fontWeight: "800", fontSize: "22px", margin: 0, letterSpacing: "-0.5px" }}>
                  AVIATOR<span style={{ color: WHITE }}>IQ</span>
                </Text>
              </Column>
              <Column align="right">
                <Text style={{ color: GREY, fontSize: "12px", margin: 0 }}>
                  Premium Roadmap
                </Text>
              </Column>
            </Row>
          </Section>

          {/* ── Hero ── */}
          <Section style={{ backgroundColor: NAVY_LIGHT, margin: "24px 24px 0 24px", borderRadius: "16px", padding: "40px 32px", border: "1px solid rgba(249,115,22,0.2)" }}>
            <Text style={{ fontSize: "40px", margin: "0 0 16px 0", textAlign: "center" as const }}>
              🎉
            </Text>
            <Heading style={{ color: WHITE, fontSize: "26px", fontWeight: "800", margin: "0 0 12px 0", textAlign: "center" as const, lineHeight: "1.2" }}>
              Your Premium Roadmap is Unlocked
            </Heading>
            <Text style={{ color: LIGHT_GREY, fontSize: "16px", margin: "0 0 8px 0", textAlign: "center" as const, lineHeight: "1.6" }}>
              Hey {firstName} — your full personalised pilot training roadmap is ready. Everything you need to plan your path to the flight deck, built around your exact profile.
            </Text>
          </Section>

          {/* ── What's Unlocked ── */}
          <Section style={{ margin: "16px 24px 0 24px" }}>
            <Text style={{ color: GREY, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" as const, margin: "0 0 12px 0" }}>
              What's now available
            </Text>
            {[
              { icon: "📅", title: "Month-by-Month Training Timeline", desc: "Your personalised milestone plan from day one to airline interview." },
              { icon: "⚠️", title: "Risk Analysis", desc: "What could go wrong for your specific profile — and exactly how to handle it." },
              { icon: "🏫", title: "Matched Schools with Rationale", desc: "Why each school fits your budget, route, and goals — with verified 2026 costs." },
              { icon: "✅", title: "30-Day Action Plan", desc: "Concrete steps you can take right now to move forward." },
              { icon: "📄", title: "PDF Blueprint", desc: "Your full roadmap as a downloadable, shareable document." },
            ].map((item, i) => (
              <Row key={i} style={{ marginBottom: "10px" }}>
                <Column style={{ width: "40px", verticalAlign: "top" }}>
                  <Text style={{ fontSize: "20px", margin: 0 }}>{item.icon}</Text>
                </Column>
                <Column style={{ backgroundColor: CARD_BG, borderRadius: "10px", padding: "12px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <Text style={{ color: WHITE, fontSize: "13px", fontWeight: "700", margin: "0 0 2px 0" }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: GREY, fontSize: "12px", margin: 0, lineHeight: "1.5" }}>
                    {item.desc}
                  </Text>
                </Column>
              </Row>
            ))}
          </Section>

          {/* ── CTA ── */}
          <Section style={{ margin: "24px 24px 0 24px", textAlign: "center" as const }}>
            <Button
              href={resultsUrl}
              style={{
                backgroundColor: ORANGE,
                color: WHITE,
                fontSize: "15px",
                fontWeight: "700",
                padding: "14px 32px",
                borderRadius: "10px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View My Full Roadmap →
            </Button>
          </Section>

          {/* ── PDF Section ── */}
          {pdfUrl ? (
            <Section style={{ margin: "16px 24px 0 24px", backgroundColor: CARD_BG, borderRadius: "12px", padding: "20px 24px", border: "1px solid rgba(34,197,94,0.2)" }}>
              <Row>
                <Column style={{ width: "32px" }}>
                  <Text style={{ fontSize: "20px", margin: 0 }}>📄</Text>
                </Column>
                <Column>
                  <Text style={{ color: WHITE, fontSize: "13px", fontWeight: "700", margin: "0 0 2px 0" }}>
                    Your PDF Blueprint is ready
                  </Text>
                  <Text style={{ color: GREY, fontSize: "12px", margin: "0 0 8px 0" }}>
                    Download and save your personalised roadmap.
                  </Text>
                  <Button
                    href={pdfUrl}
                    style={{
                      backgroundColor: "rgba(34,197,94,0.15)",
                      color: GREEN,
                      fontSize: "12px",
                      fontWeight: "600",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      border: "1px solid rgba(34,197,94,0.3)",
                      display: "inline-block",
                    }}
                  >
                    Download PDF
                  </Button>
                </Column>
              </Row>
            </Section>
          ) : (
            <Section style={{ margin: "16px 24px 0 24px", backgroundColor: CARD_BG, borderRadius: "12px", padding: "16px 24px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Text style={{ color: GREY, fontSize: "12px", margin: 0, lineHeight: "1.5" }}>
                📄 <strong style={{ color: LIGHT_GREY }}>Your PDF Blueprint is being generated</strong> — it will be available on your results page within 60 seconds. You can also download it directly from the results page at any time.
              </Text>
            </Section>
          )}

          {/* ── Divider ── */}
          <Hr style={{ borderColor: "rgba(255,255,255,0.08)", margin: "32px 24px" }} />

          {/* ── Footer ── */}
          <Section style={{ padding: "0 24px 32px 24px" }}>
            <Text style={{ color: GREY, fontSize: "11px", margin: "0 0 4px 0", lineHeight: "1.6" }}>
              You received this email because you purchased the AviatorIQ Premium Roadmap. Questions? Reply to this email and we'll get back to you.
            </Text>
            <Text style={{ color: "rgba(148,163,184,0.5)", fontSize: "10px", margin: 0 }}>
              AviatorIQ · Helping aspiring pilots navigate their training journey · aviatoriq.com
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
