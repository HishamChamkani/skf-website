"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui";

type Status = { kind: "idle" | "loading" | "success" | "error"; message?: string };

export default function Newsletter() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data: { message?: string } = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setStatus({ kind: "success", message: data.message ?? "Thanks for subscribing!" });
      } else {
        setStatus({ kind: "error", message: data.message ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <section aria-labelledby="newsletter-title" className="bg-white">
      <div className="container-site">
        <div className="flex flex-col gap-6 pt-12 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-[74px]">
          <div>
            <SectionTitle id="newsletter-title" lead="Join Our" accent="Newsletter" size="text-[26px]" className="leading-8!" />
            <p className="mt-1.5 text-[14px] capitalize leading-[normal] tracking-[-0.21px] text-black">
              Only updates and special offers. No spam.
            </p>
          </div>

          <form onSubmit={onSubmit} className="relative w-full md:w-[410px]">
            <div className="relative flex items-center border border-black">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email address"
                maxLength={254}
                className="w-full bg-transparent py-[13px] pl-[18px] pr-14 text-[14px] leading-[normal] tracking-[-0.21px] text-black outline-none placeholder:capitalize placeholder:text-[#aaa] focus-visible:bg-black/[0.02]"
              />
              <button
                type="submit"
                disabled={status.kind === "loading"}
                aria-label="Subscribe"
                className="absolute right-[14px] top-1/2 flex h-5 w-[22px] -translate-y-1/2 items-center justify-center disabled:opacity-50"
              >
                <img src="/images/icons/news-arrow.svg" alt="" width={20} height={22} className="h-[22px] w-5 rotate-90" />
              </button>
            </div>
            <p
              role="status"
              className={`mt-2 text-[13px] md:absolute md:left-0 md:top-full ${status.kind === "error" ? "text-red-600" : "text-[#4a4a4a]"}`}
            >
              {status.message}
            </p>
          </form>
        </div>
        <div aria-hidden className="mt-4 h-0 w-full border-t-[0.5px] border-[#aaa] md:mt-[41px]" />
        <div className="h-[22px]" />
      </div>
    </section>
  );
}
