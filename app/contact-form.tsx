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

    const subject = encodeURIComponent(`6ixStar Contact Form: ${inquiryType || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setStatus("Your email draft is ready. Press send in your email app.");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-white/50"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-white/50"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-white/50"
        />
        <select
          name="inquiryType"
          required
          defaultValue=""
          className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 outline-none transition focus:border-white/50"
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
        rows={5}
        placeholder="Tell us how 6ixStar Sports can help..."
        required
        className="rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm outline-none transition focus:border-white/50"
      />

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 md:w-auto"
      >
        Send Inquiry
      </button>

      {status ? <p className="text-sm text-zinc-400">{status}</p> : null}
    </form>
  );
}
