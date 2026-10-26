"use client";

import { useState } from "react";
import { serviceOptions } from "@/lib/services";

type Status = { kind: "idle" | "loading" | "success" | "error"; message?: string; errors?: Record<string, string> };

const fieldBox =
  "w-full rounded-[10px] border border-[rgba(136,136,136,0.1)] bg-[rgba(187,187,187,0.15)] px-3 text-[15.1px] font-medium leading-[normal] text-[#1c1c1e] outline-none transition-colors placeholder:text-[#999] focus:border-[#121212]/40 focus:bg-[rgba(187,187,187,0.22)] aria-[invalid=true]:border-red-500";

function Field({
  id,
  label,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[13px] font-medium leading-[15.6px] tracking-[-0.26px] text-black/55">
        {label}
      </label>
      <div className="mt-[9px]">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-[12.5px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const errors = status.errors ?? {};

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: { message?: string; errors?: Record<string, string> } = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setStatus({ kind: "success", message: data.message });
      } else {
        setStatus({ kind: "error", message: data.message ?? "Something went wrong. Please try again.", errors: data.errors });
      }
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." });
    }
  }

  const invalid = (name: string) => (errors[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {});

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-x-20 gap-y-6 md:grid-cols-2 md:gap-y-[38.4px]">
      <Field id="name" label="Name" error={errors.name}>
        <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Sikandar Khattak" className={`${fieldBox} h-11`} {...invalid("name")} />
      </Field>
      <Field id="company" label="Company" error={errors.company}>
        <input id="company" name="company" type="text" maxLength={120} autoComplete="organization" placeholder="skf" className={`${fieldBox} h-11`} {...invalid("company")} />
      </Field>
      <Field id="phone" label="Phone Number" error={errors.phone}>
        <input id="phone" name="phone" type="tel" maxLength={30} autoComplete="tel" placeholder="+92 345 9313393" className={`${fieldBox} h-11`} {...invalid("phone")} />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="skf@gmail.com" className={`${fieldBox} h-11`} {...invalid("email")} />
      </Field>
      <Field id="service" label="Service" error={errors.service} className="md:col-span-2">
        <div className="relative">
          <select id="service" name="service" defaultValue="" className={`${fieldBox} h-11 appearance-none pr-10 invalid:text-[#999]`} required {...invalid("service")}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <svg aria-hidden width="12" height="8" viewBox="0 0 12 8" fill="none" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <path d="M1 1.5l5 5 5-5" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Field>
      <Field id="message" label="Message" error={errors.message} className="md:col-span-2">
        <textarea id="message" name="message" required maxLength={5000} rows={6} placeholder="Message" className={`${fieldBox} block h-[157px] resize-y py-[11px]`} {...invalid("message")} />
      </Field>

      {/* Honeypot for spam bots: hidden from people and screen readers. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="relative flex flex-col items-center md:col-span-2 md:-mt-1">
        <button
          type="submit"
          disabled={status.kind === "loading"}
          className="h-[41px] w-full max-w-[440px] rounded-[10px] bg-coal pb-2 pt-[7px] text-[15.4px] font-medium leading-[25.6px] tracking-[-0.32px] text-white transition-colors duration-200 hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coal disabled:opacity-60"
        >
          {status.kind === "loading" ? "Sending…" : "Submit"}
        </button>
        <p role="status" className={`mt-3 text-center text-[14px] md:absolute md:inset-x-0 md:top-full md:mt-2 ${status.kind === "error" ? "text-red-600" : "text-[#2a7a3b]"}`}>
          {status.message}
        </p>
      </div>
    </form>
  );
}
