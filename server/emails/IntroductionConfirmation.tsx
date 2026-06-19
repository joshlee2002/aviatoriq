/**
 * Email: Introduction Confirmation
 * Fires after a user requests introductions to flight schools.
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

interface School {
  name: string;
  country: string;
}

interface IntroductionConfirmationProps {
  firstName: string;
  schools: School[];
  resultsUrl: string;
}

const NAVY = "#0A1628";
const NAVY_LIGHT = "#0F1E35";
const ORANGE = "#F97316";
const WHITE = "#FFFFFF";
const GREY = "#94A3B8";
const LIGHT_GREY = "#CBD5E1";
const GREEN = "#22C55E";
const CARD_BG = "#111C2E";

export default function IntroductionConfirmation({
  firstName = "there",
  schools = [],
  resultsUrl = "https://aviatorpath.com",
}: IntroductionConfirmationProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        Your introduction request has been sent to {String(schools.length)} flight school{schools.length !== 1 ? "s" : ""} — what to expect next.
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
                  Introduction Request
                </Text>
              </Column>
            </Row>
          </Section>

          {/* ── Hero ── */}
          <Section style={{ backgroundColor: NAVY_LIGHT, margin: "24px 24px 0 24px", borderRadius: "16px", padding: "40px 32px", border: "1px solid rgba(34,197,94,0.2)" }}>
            <Text style={{ fontSize: "40px", margin: "0 0 16px 0", textAlign: "center" as const }}>
              ✅
            </Text>
            <Heading style={{ color: WHITE, fontSize: "24px", fontWeight: "800", margin: "0 0 12px 0", textAlign: "center" as const, lineHeight: "1.2" }}>
              Introduction Request Sent
            </Heading>
            <Text style={{ color: LIGHT_GREY, fontSize: "14px", margin: 0, textAlign: "center" as const, lineHeight: "1.6" }}>
              Hey {firstName} — your introduction request has been sent to{" "}
              <strong style={{ color: WHITE }}>
                {schools.length} flight school{schools.length !== 1 ? "s" : ""}
              </strong>
              . You're in control — they won't contact you unless you've requested it.
            </Text>
          </Section>

          {/* ── Schools List ── */}
          {schools.length > 0 && (
            <Section style={{ margin: "16px 24px 0 24px" }}>
              <Text style={{ color: GREY, fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase" as const, margin: "0 0 12px 0" }}>
                Schools contacted
              </Text>
              {schools.map((school, i) => (
                <Row key={i} style={{ marginBottom: "8px" }}>
                  <Column style={{ width: "32px", verticalAlign: "middle" }}>
                    <Text style={{ fontSize: "16px", margin: 0 }}>🏫</Text>
                  </Column>
                  <Column style={{ backgroundColor: CARD_BG, borderRadius: "8px", padding: "12px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <Text style={{ color: WHITE, fontSize: "13px", fontWeight: "700", margin: "0 0 2px 0" }}>
                      {school.name}
                    </Text>
                    <Text style={{ color: GREY, fontSize: "11px", margin: 0 }}>
                      {school.country}
                    </Text>
                  </Column>
                </Row>
              ))}
            </Section>
          )}

          {/* ── What to expect ── */}
          <Section style={{ margin: "16px 24px 0 24px", backgroundColor: CARD_BG, borderRadius: "12px", padding: "20px 24px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <Text style={{ color: WHITE, fontSize: "13px", fontWeight: "700", margin: "0 0 12px 0" }}>
              What happens next
            </Text>
            {[
              { icon: "📬", text: "Schools will typically respond within 24–48 hours." },
              { icon: "🔒", text: "You won't receive unsolicited calls. Schools only contact you through the channels you've agreed to." },
              { icon: "🤝", text: "This introduction is completely free — AviatorPath never charges you for connecting with schools." },
              { icon: "❓", text: "Have questions before speaking to a school? Reply to this email and we'll help." },
            ].map((item, i) => (
              <Row key={i} style={{ marginBottom: "10px" }}>
                <Column style={{ width: "28px", verticalAlign: "top" }}>
                  <Text style={{ fontSize: "14px", margin: "2px 0 0 0" }}>{item.icon}</Text>
                </Column>
                <Column>
                  <Text style={{ color: LIGHT_GREY, fontSize: "12px", margin: 0, lineHeight: "1.6" }}>
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
                fontSize: "14px",
                fontWeight: "700",
                padding: "12px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Back to My Roadmap →
            </Button>
          </Section>

          {/* ── Divider ── */}
          <Hr style={{ borderColor: "rgba(255,255,255,0.08)", margin: "32px 24px" }} />

          {/* ── Footer ── */}
          <Section style={{ padding: "0 24px 32px 24px" }}>
            <Text style={{ color: GREY, fontSize: "11px", margin: "0 0 4px 0", lineHeight: "1.6" }}>
              You received this email because you requested introductions to flight schools through AviatorPath. We will never share your details with schools you haven't selected.
            </Text>
            <Text style={{ color: "rgba(148,163,184,0.5)", fontSize: "10px", margin: 0 }}>
              AviatorPath · Helping aspiring pilots navigate their training journey · aviatorpath.com
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
