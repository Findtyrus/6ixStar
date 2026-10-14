"use client";

import { FormEvent, useState } from "react";

const recipient = "sixstarsports79@gmail.com";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const inquiryType = String(formData.get("inquiryType") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`SixStar Contact Form: ${inquiryType || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setStatus(`Your email draft is ready. Press send in your email app, or email us directly at ${recipient}.`);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid content-start gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          aria-label="Full name"
          type="text"
          placeholder="Full Name"
          required
          className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-gold"
        />
        <input
          name="email"
          aria-label="Email address"
          type="email"
          placeholder="Email Address"
          required
          className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-gold"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="phone"
          aria-label="Phone number"
          type="tel"
          placeholder="Phone Number"
          className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-gold"
        />
        <select
          name="inquiryType"
          aria-label="Inquiry type"
          required
          defaultValue=""
          className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 outline-none transition focus:border-gold"
        >
          <option value="" disabled>
            Inquiry Type
          </option>
          <option value="Athlete Representation">Athlete Representation</option>
          <option value="Brand Partnership">Brand Partnership</option>
          <option value="Media Request">Media Request</option>
          <option value="General">General</option>
        </select>
      </div>

      <textarea
        name="message"
        aria-label="Message"
        rows={5}
        placeholder="Tell us how SixStar Sports can help..."
        required
        className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-gold"
      />

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-gold px-7 py-3.5 text-sm font-semibold text-black transition hover:brightness-110 md:w-auto"
      >
        Send Inquiry
      </button>

      {status ? <p role="status" className="text-sm text-zinc-400">{status}</p> : null}
    </form>
  );
}
