import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Newsletter sign-up.
 * Set NEWSLETTER_WEBHOOK_URL (e.g. a Mailchimp/Brevo/Zapier webhook) to start
 * collecting emails. Until then the endpoint says so honestly instead of
 * pretending the address was saved.
 */
export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || email.length > 254 || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { message: "Newsletter sign-up isn't connected yet. Please check back soon." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase(), source: "skf-website" }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch {
    return NextResponse.json({ message: "Couldn't subscribe right now. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thanks for subscribing!" });
}
