import Image from "next/image";
import Link from "next/link";
import { DarkButton, SectionTitle } from "@/components/ui";

export type Work = { title: string; category: string; image: string; alt: string; href: string };

export const featuredWorks: Work[] = [
  { title: "Solstice", category: "Web design", image: "/images/works/mobile.webp", alt: "Phone mockup on a green stage", href: "/work" },
  { title: "Solstice", category: "Web design", image: "/images/works/laptop.webp", alt: "Laptop mockup with a statue and blue screen", href: "/work" },
  { title: "Solstice", category: "Web design", image: "/images/works/card.webp", alt: "Red ID card mockup on a lanyard", href: "/work" },
  { title: "Solstice", category: "Web design", image: "/images/works/text.webp", alt: "Dark typographic screen mockup", href: "/work" },
];

export function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={work.href} className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coal">
      <div className="relative aspect-[549/349] w-full overflow-hidden rounded-[14px]">
        <Image
          src={work.image}
          alt={work.alt}
          fill
          sizes="(min-width: 768px) 549px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 flex items-center justify-between gap-4">
        <h3 className="font-serif text-[28px] font-normal leading-[39.2px] text-black">{work.title}</h3>
        <p className="text-[15.5px] font-medium leading-[25.6px] tracking-[-0.32px] text-black/55">{work.category}</p>
      </div>
    </Link>
  );
}

export default function Works() {
  return (
    <section id="works" className="bg-white pb-12 pt-12">
      <div className="container-site flex flex-col items-center">
        <span className="inline-flex h-8 items-center rounded-[56px] border border-[rgba(33,33,33,0.12)] px-3 text-[12.6px] font-medium leading-[15.6px] tracking-[-0.26px] text-[#0d0d0d]">
          Portfolio
        </span>
        <SectionTitle lead="Our" accent="Works" className="-mt-[5px] text-center" />

        <ul className="mt-6 grid w-full grid-cols-1 gap-x-[21px] gap-y-10 md:grid-cols-2 md:gap-y-[46px]">
          {featuredWorks.map((work) => (
            <li key={work.image}>
              <WorkCard work={work} />
            </li>
          ))}
        </ul>

        <DarkButton href="/work" className="mt-12">
          See more
        </DarkButton>
      </div>
    </section>
  );
}
