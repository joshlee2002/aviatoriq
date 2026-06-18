/**
 * Email: Welcome Blueprint
 * Fires after a user completes the full assessment (leads.submit).
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
  Preview,
} from "@react-email/components";

interface WelcomeBlueprintProps {
  firstName: string;
  score: number;
  category: "Hot" | "Warm" | "Cold";
  resultsUrl: string;
}

const NAVY = "#0A1628";
const NAVY_LIGHT = "#0F1E35";
const ORANGE = "#F97316";
const WHITE = "#FFFFFF";
const GREY = "#94A3B8";
const LIGHT_GREY = "#CBD5E1";
const AMBER = "#F59E0B";
const BLUE = "#60A5FA";
const CARD_BG = "#111C2E";

function getScoreColor(category: string): string {
  if (category === "Hot") return ORANGE;
  if (category === "Warm") return AMBER;
  return BLUE;
}

function getPhaseLabel(category: string): string {
  if (category === "Hot") return "Flight Ready";
  if (category === "Warm") return "Development Phase";
  return "Exploration Phase";
}

function getPhaseMessage(category: string, firstName: string): string {
  if (category === "Hot")
    return `${firstName}, your profile is strong. You're in a great position to move forward with training — your roadmap will show you exactly how.`;
  if (category === "Warm")
    return `${firstName}, you're on the right track. Your roadmap identifies the key areas to develop before you're ready to commit to training.`;
  return `${firstName}, every pilot started exactly where you are. Your roadmap will give you a clear picture of what the journey looks like and what to focus on first.`;
}

export default function WelcomeBlueprint({
  firstName = "there",
  score = 65,
  category = "Warm",
  resultsUrl = "https://aviatoriq-production.up.railway.app",
}: WelcomeBlueprintProps) {
  const scoreColor = getScoreColor(category);
  const phaseLabel = getPhaseLabel(category);
  const phaseMessage = getPhaseMessage(category, firstName);

  return (
    <Html lang="en">
      <Head />
      <Preview>
        Your AviatorIQ Score is {score}/100 — your personalised pilot training blueprint is ready.
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
                  Your Pilot Blueprint
                </Text>
              </Column>
            </Row>
          </Section>

          {/* ── Score Hero ── */}
          <Section style={{ backgroundColor: NAVY_LIGHT, margin: "24px 24px 0 24px", borderRadius: "16px", padding: "40px 32px", border: `1px solid ${scoreColor}30` }}>
            <Text style={{ color: GREY, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" as const, margin: "0 0 16px 0", textAlign: "center" as const }}>
              Your AviatorIQ Score
            </Text>
            <Text style={{ color: scoreColor, fontSize: "72px", fontWeight: "900", margin: "0 0 4px 0", textAlign: "center" as const, lineHeight: "1" }}>
              {score}
            </Text>
            <Text style={{ color: WHITE, fontSize: "14px", fontWeight: "700", margin: "0 0 20px 0", textAlign: "center" as const }}>
              out of 100 — <span style={{ color: scoreColor }}>{phaseLabel}</span>
            </Text>
            <Text style={{ color: LIGHT_GREY, fontSize: "14px", margin: 0, textAlign: "center" as const, lineHeight: "1.6" }}>
              {phaseMessage}
            </Text>
          </Section>

          {/* ── What's in your blueprint ── */}
          <Section style={{ margin: "16px 24px 0 24px" }}>
            <Text style={{ color: GREY, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" as const, margin: "0 0 12px 0" }}>
              Your free blueprint includes
            </Text>
            {[
              { icon: "🎯", text: "Your biggest barrier — identified and explained" },
              { icon: "✈️", text: "Your recommended training route with rationale" },
              { icon: "💰", text: "Estimated total training cost range" },
              { icon: "🏫", text: "Matched flight schools for your profile" },
              { icon: "📋", text: "Your 5 most important next steps" },
            ].map((item, i) => (
              <Row key={i} style={{ marginBottom: "8px" }}>
                <Column style={{ width: "32px", verticalAlign: "middle" }}>
                  <Text style={{ fontSize: "16px", margin: 0 }}>{item.icon}</Text>
                </Column>
                <Column style={{ backgroundColor: CARD_BG, borderRadius: "8px", padding: "10px 14px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <Text style={{ color: LIGHT_GREY, fontSize: "13px", margin: 0 }}>
                    {item.text}
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
              View My Blueprint →
            </Button>
            <Text style={{ color: GREY, fontSize: "11px", margin: "12px 0 0 0" }}>
              Your AI Flight Plan is being generated — it will be ready when you visit the page.
            </Text>
          </Section>

          {/* ── Premium Upsell ── */}
          <Section style={{ margin: "24px 24px 0 24px", backgroundColor: CARD_BG, borderRadius: "12px", padding: "20px 24px", border: `1px solid ${ORANGE}20` }}>
            <Text style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" as const, margin: "0 0 8px 0" }}>
              Want the full picture?
            </Text>
            <Text style={{ color: WHITE, fontSize: "14px", fontWeight: "700", margin: "0 0 6px 0" }}>
              Unlock your Premium Roadmap for £9
            </Text>
            <Text style={{ color: GREY, fontSize: "12px", margin: "0 0 12px 0", lineHeight: "1.5" }}>
              Get your month-by-month training timeline, a personalised risk analysis, verified 2026 school costs, and a 30-day action plan — all built around your exact profile.
            </Text>
            <Button
              href={resultsUrl}
              style={{
                backgroundColor: `${ORANGE}20`,
                color: ORANGE,
                fontSize: "12px",
                fontWeight: "600",
                padding: "8px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                border: `1px solid ${ORANGE}40`,
                display: "inline-block",
              }}
            >
              Unlock for £9 →
            </Button>
          </Section>

          {/* ── Divider ── */}
          <Hr style={{ borderColor: "rgba(255,255,255,0.08)", margin: "32px 24px" }} />

          {/* ── Footer ── */}
          <Section style={{ padding: "0 24px 32px 24px" }}>
            <Text style={{ color: GREY, fontSize: "11px", margin: "0 0 4px 0", lineHeight: "1.6" }}>
              You received this email because you completed the AviatorIQ assessment. We'll never share your details with schools without your permission.
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
