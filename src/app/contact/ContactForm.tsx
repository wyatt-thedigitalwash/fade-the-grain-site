"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "mt-1 w-full rounded border border-text-dark/20 bg-white px-4 py-3 text-sm text-text-dark transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block font-heading text-sm font-semibold uppercase"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-heading text-sm font-semibold uppercase"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block font-heading text-sm font-semibold uppercase"
        >
          Phone <span className="font-body text-xs font-normal normal-case text-text-dark/50">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-heading text-sm font-semibold uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded bg-accent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p role="alert" className="text-sm font-medium text-green-700">
          Message sent! We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Something went wrong. Please call us or try again later.
        </p>
      )}
    </form>
  );
}
