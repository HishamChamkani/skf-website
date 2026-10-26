import { NextResponse } from "next/server";
import { EMAIL_RE, forwardToWebhook } from "@/lib/forward";
import { serviceOptions } from "@/lib/services";
import { site } from "@/lib/site";

const LIMITS = { name: 100, company: 120, phone: 30, email: 254, message: 5000 } as const;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Contact form submissions.
 * Set CONTACT_WEBHOOK_URL (e.g. a Zapier/Make/Formspree webhook that emails the team)
 * to start receiving messages. Until then the form says so honestly.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) {
    return NextResponse.json({ message: "Thanks! We'll be in touch soon." });
  }

  const data = {
    name: clean(body.name, LIMITS.name),
    company: clean(body.company, LIMITS.company),
    phone: clean(body.phone, LIMITS.phone),
    email: clean(body.email, LIMITS.email).toLowerCase(),
    service: clean(body.service, 60),
    message: clean(body.message, LIMITS.message),
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && !/^[+()\d\s-]{7,30}$/.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (!(serviceOptions as readonly string[]).includes(data.service)) errors.service = "Please choose a service.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      {
        message: `The contact form isn't connected yet. Please email us at ${site.contact.email} or call ${site.contact.phone}.`,
      },
      { status: 503 },
    );
  }

  try {
    await forwardToWebhook(webhook, { ...data, source: "skf-website/contact", submittedAt: new Date().toISOString() });
  } catch {
    return NextResponse.json(
      { message: `Couldn't send your message right now. Please email us at ${site.contact.email}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Thanks! Your message has been sent. We'll be in touch soon." });
}
