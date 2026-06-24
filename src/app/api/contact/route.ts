import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

/**
 * Contact / inquiry endpoint.
 *
 * Receives membership, rental, contact, and newsletter submissions and emails
 * them to the center via Resend. If no provider is configured (no
 * RESEND_API_KEY / CONTACT_TO_EMAIL), it logs the submission and still returns
 * success — so the site works the moment it's deployed and the buyer can wire
 * up email later by adding two env vars. See `.env.example`.
 */

type FormType = "membership" | "rental" | "contact" | "newsletter";
const FORM_TYPES: FormType[] = ["membership", "rental", "contact", "newsletter"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

interface BuiltEmail {
  subject: string;
  text: string;
  replyTo?: string;
  summary: string;
}

/** Validate a submission and build the email body, or return an error message. */
function buildEmail(formType: FormType, data: Record<string, unknown>): BuiltEmail | { error: string } {
  switch (formType) {
    case "membership": {
      const firstName = str(data.firstName);
      const lastName = str(data.lastName);
      const email = str(data.email);
      const phone = str(data.phone);
      if (!firstName || !lastName || !email || !phone) return { error: "Please fill in all required fields." };
      if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
      return {
        subject: `New membership inquiry — ${firstName} ${lastName}`,
        replyTo: email,
        summary: `${firstName} ${lastName} <${email}>`,
        text: [
          "New membership inquiry from the website:",
          "",
          `Name:  ${firstName} ${lastName}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
        ].join("\n"),
      };
    }
    case "rental": {
      const contactName = str(data.contactName);
      const orgName = str(data.orgName);
      const email = str(data.email);
      const phone = str(data.phone);
      const eventDate = str(data.eventDate);
      const guestCount = str(data.guestCount);
      const eventDetails = str(data.eventDetails);
      if (!contactName || !email || !phone || !eventDate || !eventDetails)
        return { error: "Please fill in all required fields." };
      if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
      return {
        subject: `New facility rental request — ${contactName}`,
        replyTo: email,
        summary: `${contactName} <${email}> for ${eventDate}`,
        text: [
          "New facility rental request from the website:",
          "",
          `Name:         ${contactName}`,
          `Organization: ${orgName || "—"}`,
          `Email:        ${email}`,
          `Phone:        ${phone}`,
          `Preferred date: ${eventDate}`,
          `Estimated guests: ${guestCount || "—"}`,
          "",
          "Event details:",
          eventDetails,
        ].join("\n"),
      };
    }
    case "contact": {
      const name = str(data.name);
      const email = str(data.email);
      const message = str(data.message);
      if (!name || !email || !message) return { error: "Please fill in all required fields." };
      if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
      return {
        subject: `New website message — ${name}`,
        replyTo: email,
        summary: `${name} <${email}>`,
        text: [`New message from the website:`, "", `Name:  ${name}`, `Email: ${email}`, "", message].join("\n"),
      };
    }
    case "newsletter": {
      const email = str(data.email);
      if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
      return {
        subject: `New newsletter sign-up — ${email}`,
        replyTo: email,
        summary: email,
        text: `New newsletter subscriber from the website: ${email}`,
      };
    }
  }
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields humans never see. Silently accept, send nothing.
  if (str(data.company) !== "") {
    return Response.json({ ok: true });
  }

  const formType = data.formType as FormType;
  if (!FORM_TYPES.includes(formType)) {
    return Response.json({ ok: false, error: "Unknown form type." }, { status: 400 });
  }

  const built = buildEmail(formType, data);
  if ("error" in built) {
    return Response.json({ ok: false, error: built.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "TOTH Website <onboarding@resend.dev>";

  // Graceful fallback when no email provider is configured yet.
  if (!apiKey) {
    console.info(`[contact] ${formType} submission (email provider not configured): ${built.summary}`);
    return Response.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: built.replyTo,
      subject: built.subject,
      text: built.text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json(
        { ok: false, error: "We couldn't send your message right now. Please try again or call us." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return Response.json(
      { ok: false, error: "We couldn't send your message right now. Please try again or call us." },
      { status: 502 },
    );
  }
}
