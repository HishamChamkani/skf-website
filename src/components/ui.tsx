import Link from "next/link";

/** "Our <Services>" style heading: Instrument Serif italic, second word in brand orange. */
export function SectionTitle({
  lead,
  accent,
  as: Tag = "h2",
  className = "",
  size = "text-[32px]",
  id,
}: {
  id?: string;
  lead: string;
  accent: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: string;
}) {
  return (
    <Tag id={id} className={`font-serif italic font-normal leading-[63.36px] text-ink ${size} ${className}`}>
      {lead} <span className="text-brand">{accent}</span>
    </Tag>
  );
}

/** Dark pill button used for "Contact Us" / "See more" (#121212, 16px radius). */
export function DarkButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`relative inline-flex h-[49px] items-center justify-center overflow-hidden rounded-2xl border border-coal bg-coal px-10 pb-[14.6px] pt-[13.6px] text-[17px] font-medium leading-[19.8px] tracking-[-0.72px] text-white shadow-[0px_0.723px_0.723px_-1.25px_rgba(0,0,0,0.22),0px_2.746px_2.746px_-2.5px_rgba(0,0,0,0.19),0px_12px_12px_-3.75px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coal ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0.602px_1.084px_-0.917px_rgba(255,255,255,0.35),inset_0px_2.289px_4.119px_-1.833px_rgba(255,255,255,0.34),inset_0px_10px_18px_-2.75px_rgba(255,255,255,0.29)]"
      />
      <span className="relative">{children}</span>
    </Link>
  );
}

/** Four 12px corner brackets around a bordered box (Spatial Storytelling + footer panel). */
export function CornerBrackets() {
  const corners = [
    "left-0 top-0 rotate-180",
    "right-0 top-0 -rotate-90",
    "right-0 bottom-0",
    "left-0 bottom-0 rotate-90",
  ];
  return (
    <>
      {corners.map((pos) => (
        <img
          key={pos}
          src="/images/icons/corner.svg"
          alt=""
          aria-hidden
          width={12}
          height={12}
          className={`pointer-events-none absolute size-3 ${pos}`}
        />
      ))}
    </>
  );
}
