import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

interface ContactBody {
  name: unknown;
  email: unknown;
  phone: unknown;
  message: unknown;
}

function isString(val: unknown): val is string {
  return typeof val === "string" && val.trim().length > 0;
}

function isValidEmail(val: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!isString(name)) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!isString(email) || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 }
    );
  }
  if (!isString(message)) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const phoneStr = isString(phone) ? phone.trim() : "Not provided";

  try {
    await resend.emails.send({
      from: "Fade The Grain Website <onboarding@resend.dev>",
      to: "placeholder@fadethegrain.com", // TODO: Replace with real email
      subject: `New Contact Form Message from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phoneStr}`,
        "",
        `Message:`,
        message.trim(),
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
