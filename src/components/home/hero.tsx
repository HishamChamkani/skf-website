import Image from "next/image";
import { site } from "@/lib/site";

export default function Hero({ heading }: { heading?: string }) {
  return (
    <section aria-label={site.fullName} className="relative h-[clamp(440px,48.62vw,700px)] overflow-hidden bg-[#fcf9f5]">
      <Image
        src="/images/home/hero.webp"
        alt="SKF crew filming an interview on a large studio set"
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <h1 className="sr-only">
        {heading ?? `${site.fullName}: ${site.tagline}`}
      </h1>
    </section>
  );
}
