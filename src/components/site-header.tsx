"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

const darkTopPages = ["/contact"];

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ContactIcon() {
  // Two-part "corner arrow" icon from the Figma header button.
  return (
    <span aria-hidden className="relative block size-4 shrink-0 overflow-hidden">
      <span className="absolute inset-[41.67%_16.67%_16.67%_62.5%]">
        <span className="absolute inset-[-10%_-20%]">
          <img alt="" src="/images/icons/hdr-arrow-a.svg" className="block size-full max-w-none" />
        </span>
      </span>
      <span className="absolute inset-[16.67%_16.67%_37.5%_16.67%]">
        <span className="absolute inset-[-9.09%_-6.25%]">
          <img alt="" src="/images/icons/hdr-arrow-b.svg" className="block size-full max-w-none" />
        </span>
      </span>
    </span>
  );
}

export function ContactButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`relative h-[37px] items-center justify-center gap-1.5 rounded-[10px] border border-[rgba(13,13,13,0.2)] bg-[#454545] px-4 text-[13.6px] font-medium leading-[19.6px] tracking-[-0.144px] text-white shadow-[inset_0px_0.602px_1.084px_-0.5px_rgba(255,255,255,0.07),inset_0px_2.289px_4.119px_-1px_rgba(255,255,255,0.08),inset_0px_10px_18px_-1.5px_rgba(255,255,255,0.14)] transition-colors duration-200 hover:border-brand hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
    >
      <ContactIcon />
      Contact Us
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Pages with a dark top area use the white logo (as in the Figma contact frame).
  const darkTop = darkTopPages.some((p) => pathname === p);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-site relative flex h-[88px] items-center justify-between">
        <Link href="/" aria-label={`${site.fullName} home`} className="relative block h-[52px] w-[111px] shrink-0">
          <Image
            src={darkTop ? "/images/logo-header-white.png" : "/images/logo-header.png"}
            alt={site.fullName}
            fill
            sizes="111px"
            preload
            className="object-contain"
          />
        </Link>

        <nav
          aria-label="Main"
          className="absolute left-1/2 top-[18px] hidden h-[52px] -translate-x-1/2 items-center rounded-[14px] border border-[rgba(33,33,33,0.08)] bg-[rgba(28,28,28,0.88)] pl-5 pr-2 backdrop-blur-[5px] md:flex"
        >
          <ul className="flex h-[37px] items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex h-7 items-center rounded-md px-2 text-[14px] font-medium leading-[19.6px] tracking-[-0.144px] transition-colors focus-visible:outline-2 focus-visible:outline-white ${
                      active ? "text-brand" : "text-white/60 hover:text-brand"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <ContactButton className="hidden md:flex" />

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-[10px] bg-[rgba(28,28,28,0.88)] text-white backdrop-blur-[5px] md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="container-site md:hidden">
          <nav
            aria-label="Mobile"
            className="rounded-[14px] bg-[rgba(28,28,28,0.95)] p-3 backdrop-blur-[5px]"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-md px-3 py-3 text-base font-medium ${active ? "text-brand" : "text-white/80 hover:text-brand"}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ContactButton className="mt-2 flex w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}
