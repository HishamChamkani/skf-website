import Image from "next/image";
import { DarkButton, SectionTitle } from "@/components/ui";

const services = [
  { key: "film", title: "Film & Commercial Production" },
  { key: "event", title: "Event & Conference Coverage" },
  { key: "photo", title: "Photography" },
  { key: "video", title: "Videography" },
  { key: "drone", title: "Drone Cinematography" },
  { key: "post", title: "Post Production & Live" },
  { key: "photo", title: "Photography" },
  { key: "video", title: "Videography" },
];

export default function Services() {
  return (
    <section id="services" className="bg-white pb-12 pt-12">
      <div className="container-site flex flex-col items-center">
        <SectionTitle lead="Our" accent="Services" className="text-center" />

        <ul className="mt-[30px] grid w-full max-w-[1114px] grid-cols-2 gap-x-[18px] gap-y-[30px] sm:gap-y-[34px] md:grid-cols-4">
          {services.map((s, i) => (
            <li key={`${s.key}-${i}`} className="group">
              <div className="relative aspect-[265/310] w-full overflow-hidden bg-[#f1f1f3]">
                <Image
                  src={`/images/services/${s.key}-bw.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 265px, 50vw"
                  className="object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
                />
                <Image
                  src={`/images/services/${s.key}-color.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 265px, 50vw"
                  className="object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-[19px] font-optima text-[14px] font-normal leading-[normal] tracking-[0.32px] text-black sm:text-[16px]">
                {s.title}
              </h3>
            </li>
          ))}
        </ul>

        <DarkButton href="/contact" className="mt-[70px]">
          Contact Us
        </DarkButton>
      </div>
    </section>
  );
}
