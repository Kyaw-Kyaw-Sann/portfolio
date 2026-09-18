"use client";
import { useState } from "react";
import { site } from "@/data/site";

export function EmailContact() {
  const email = site.socialLinks.find((link) => link.label === "Email")!.href.replace("mailto:", "");
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied.");
    } catch {
      setStatus("Unable to copy automatically. Select and copy the email address above.");
    }
  }

  return (
    <div className="min-w-0">
      <a href={`mailto:${email}`} className="editorial-link max-w-full break-all text-base sm:text-xl">{email}</a>
      <div className="mt-3 flex flex-wrap gap-5 text-sm">
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`} target="_blank" rel="noopener noreferrer" className="editorial-link">Write in Gmail</a>
        <button type="button" onClick={copyEmail} className="editorial-link">Copy email</button>
      </div>
      <p role="status" aria-live="polite" className="mt-2 text-sm text-muted">{status}</p>
    </div>
  );
}
