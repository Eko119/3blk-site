import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request): Promise<NextResponse> {
  const formData = await request.formData();

  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.redirect(new URL("/?sent=ok#contact", request.url), 303);
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length === 0 ||
    !EMAIL_PATTERN.test(email) ||
    message.trim().length === 0
  ) {
    return NextResponse.redirect(new URL("/?sent=invalid#contact", request.url), 303);
  }

  const fromHost = new URL(SITE.url).hostname;
  const toAddress = process.env.CONTACT_TO_EMAIL ?? SITE.contactEmail;

  try {
    const resend = getResend();
    await resend.emails.send({
      from: `${SITE.name} <hello@${fromHost}>`,
      to: toAddress,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch {
    return NextResponse.redirect(new URL("/?sent=error#contact", request.url), 303);
  }

  return NextResponse.redirect(new URL("/?sent=ok#contact", request.url), 303);
}
