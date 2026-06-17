"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  business: string;
  revenue: string;
  message: string;
};

export async function sendContactEmail(
  payload: ContactPayload,
): Promise<{ ok: boolean; error?: string }> {
  try {
    await resend.emails.send({
      from: "Scale Enquiries <onboarding@resend.dev>",
      to: "scalxeleads@gmail.com",
      replyTo: payload.email,
      subject: `New enquiry from ${payload.name} — ${payload.business}`,
      text: `
Name: ${payload.name}
Email: ${payload.email}
Business: ${payload.business}
Monthly Revenue: ${payload.revenue}

Message:
${payload.message}
      `.trim(),
    });
    return { ok: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { ok: false, error: "Failed to send message." };
  }
}
