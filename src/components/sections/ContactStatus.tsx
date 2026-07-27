"use client";

import { useEffect, useState } from "react";

/**
 * The contact route redirects back with a `sent` flag. The page
 * itself stays static, so the flag is read on the client after
 * mount rather than from server-side search params.
 */
const MESSAGES = {
  ok: {
    tone: "text-success",
    text: "Thank you — your message is with the studio. We reply to every enquiry within two working days.",
  },
  invalid: {
    tone: "text-error",
    text: "Something in the form was incomplete. Check your name, email and message, then send it again.",
  },
  error: {
    tone: "text-error",
    text: "The message did not send. Please email the studio directly and we will pick it up from there.",
  },
} as const;

type StatusKey = keyof typeof MESSAGES;

function isStatusKey(value: string | null): value is StatusKey {
  return value !== null && Object.hasOwn(MESSAGES, value);
}

export function ContactStatus() {
  const [status, setStatus] = useState<StatusKey | null>(null);

  useEffect(() => {
    const sent = new URLSearchParams(window.location.search).get("sent");
    if (!isStatusKey(sent)) return;

    setStatus(sent);

    // Clear the flag so a refresh does not replay the message.
    const url = new URL(window.location.href);
    url.searchParams.delete("sent");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }, []);

  return (
    <p role="status" aria-live="polite" className="min-h-[1.5rem] text-body-sm">
      {status === null ? null : (
        <span className={MESSAGES[status].tone}>{MESSAGES[status].text}</span>
      )}
    </p>
  );
}
