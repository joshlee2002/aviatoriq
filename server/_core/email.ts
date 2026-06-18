/**
 * AviatorIQ Transactional Email Utility
 * Powered by Resend. Non-throwing — logs failures without crashing the caller.
 */
import { Resend } from "resend";
import { render } from "@react-email/render";
import type { ReactElement } from "react";

let _resend: Resend | null = null;

function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

export async function sendEmail({
  to,
  subject,
  react,
}: {
  to: string;
  subject: string;
  react: ReactElement;
}): Promise<boolean> {
  const resend = getResend();
  if (!resend) {
    console.warn("[Email] RESEND_API_KEY not set — email skipped.");
    return false;
  }
  try {
    const html = await render(react);
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "AviatorIQ <hello@aviatoriq.com>",
      to,
      subject,
      html,
    });
    if (error) {
      console.warn("[Email] Resend delivery error:", error);
      return false;
    }
    console.log(`[Email] Sent "${subject}" to ${to}`);
    return true;
  } catch (e) {
    console.warn("[Email] Send failed:", e);
    return false;
  }
}
