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
          className="border border-line bg-paper px-4 py-3 text-base outline-none transition placeholder:text-muted focus:border-ink"
        />
        <input
          name="email"
          aria-label="Email address"
          type="email"
          placeholder="Email Address"
          required
          className="border border-line bg-paper px-4 py-3 text-base outline-none transition placeholder:text-muted focus:border-ink"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="phone"
          aria-label="Phone number"
          type="tel"
          placeholder="Phone Number"
          className="border border-line bg-paper px-4 py-3 text-base outline-none transition placeholder:text-muted focus:border-ink"
        />
        <div className="relative">
          <select
            name="inquiryType"
            aria-label="Inquiry type"
            required
            defaultValue=""
            className="w-full appearance-none border border-line bg-paper px-4 py-3 pr-10 text-base text-muted outline-none transition invalid:text-muted focus:border-ink valid:text-ink"
          >
            <option value="" disabled>
              Inquiry Type
            </option>
            <option value="Athlete Representation">Athlete Representation</option>
            <option value="Brand Partnership">Brand Partnership</option>
            <option value="Media Request">Media Request</option>
            <option value="General">General</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true">
            &#9662;
          </span>
        </div>
      </div>

      <textarea
        name="message"
        aria-label="Message"
        rows={5}
        placeholder="Tell us how SixStar Sports can help..."
        required
        className="border border-line bg-paper px-4 py-3 text-base outline-none transition placeholder:text-muted focus:border-ink"
      />

      <button
        type="submit"
        className="bg-ink px-8 py-3 font-display text-xl font-bold uppercase tracking-wide text-paper transition hover:bg-ink/85 md:justify-self-start"
      >
        Send Inquiry
      </button>

      {status ? <p role="status" className="text-sm text-muted">{status}</p> : null}
    </form>
  );
}
