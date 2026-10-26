import Image from "next/image";
import Link from "next/link";
import { CornerBrackets } from "@/components/ui";
import { navLinks, site, socialLinks } from "@/lib/site";

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[14px]">
      <div className="border-b border-white/20 pb-[9px]">
        <h2 className="text-[16px] font-medium leading-[22.4px] text-footer-muted">{title}</h2>
      </div>
      <div className="flex flex-col gap-[7px] text-[16px] font-medium leading-[22.4px] text-white">{children}</div>
    </div>
  );
}

export default function SiteFooter() {
  const { contact } = site;
  return (
    <footer className="bg-coal">
      <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[1118px] flex-col gap-20 pb-11 pt-16 md:pt-[88px]">
        {/* Top: brand + contact details */}
        <div className="flex flex-col gap-12 lg:min-h-[238px] lg:flex-row lg:gap-[253px]">
          <div className="flex max-w-[324px] shrink-0 flex-col gap-[38.9px]">
            <Link href="/" aria-label={`${site.fullName} home`} className="relative block h-[61px] w-[126px]">
              <Image src="/images/logo-footer.webp" alt={site.fullName} fill sizes="126px" className="object-cover" />
            </Link>
            <p className="text-[16px] leading-[22.4px] text-footer-muted">{site.description}</p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-[minmax(0,381.5px)_minmax(0,1fr)]">
            <InfoBlock title="Contact">
              <a href={`mailto:${contact.email}`} className="w-fit hover:underline">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="w-fit hover:underline">
                {contact.phone}
              </a>
            </InfoBlock>
            <InfoBlock title="Working Hour">
              <p>{contact.hoursDays}</p>
              <p>{contact.hoursTime}</p>
            </InfoBlock>
            <div className="sm:-mt-[1px]">
              <InfoBlock title="Address">
                <address className="not-italic">
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </InfoBlock>
            </div>
          </div>
        </div>

        {/* Bottom panel with corner brackets */}
        <div className="flex flex-col gap-10">
          <div className="relative border border-footer-line px-6 py-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-[488px]">
              <div className="w-full max-w-[324px]">
                <h2 className="text-[18px] font-medium leading-[25.2px] text-footer-muted">Stay connected</h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={s.href === "#" ? undefined : "_blank"}
                        rel={s.href === "#" ? undefined : "noopener noreferrer"}
                        className="group flex flex-col gap-[14px] px-2 pt-[14px]"
                      >
                        <span className="flex items-center justify-between">
                          <span className="text-[18px] leading-[25.2px] text-white">{s.label}</span>
                          <img
                            src="/images/icons/footer-arrow.svg"
                            alt=""
                            width={14}
                            height={14}
                            className="size-[14px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                        <span className="h-px w-full bg-footer-line transition-colors group-hover:bg-white/40" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <nav aria-label="Footer" className="min-w-0">
                <h2 className="text-[18px] font-medium leading-[25.2px] text-footer-muted">Pages</h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-[18px] leading-[25.2px] text-white hover:text-brand ${i === 0 ? "font-medium" : "font-normal"}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <CornerBrackets />
          </div>

          <div className="flex flex-col gap-2 text-[16px] font-medium leading-[25.2px] text-white sm:flex-row sm:justify-between md:text-[18px]">
            <p>©2026 {site.name}, All Right Reserved</p>
            <p>Powered by Swix Studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
