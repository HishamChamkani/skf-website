"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "@/components/ui";

type Testimonial = { quote: string; name: string; image: string };

// Add more entries here; the arrows page through them.
const testimonials: Testimonial[] = [
  {
    quote:
      "“You won’t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!”",
    name: "Ali khan",
    image: "/images/home/ali-khan.webp",
  },
];

function Arrow({ direction, disabled, onClick }: { direction: "prev" | "next"; disabled: boolean; onClick: () => void }) {
  const prev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={prev ? "Previous testimonial" : "Next testimonial"}
      className="relative size-10 shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coal disabled:cursor-default md:size-12"
    >
      <span className={`absolute inset-[-22.92%_-31.25%_-39.58%_-31.25%] ${prev ? "rotate-180" : ""}`}>
        <img
          src={prev ? "/images/icons/testi-arrow-left.svg" : "/images/icons/testi-arrow-right.svg"}
          alt=""
          className="block size-full max-w-none"
        />
      </span>
    </button>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const last = testimonials.length - 1;

  return (
    <section id="testimonials" className="scroll-mt-24 overflow-x-clip bg-white pb-12 pt-12">
      <div className="container-site flex flex-col items-center">
        <SectionTitle lead="Trusted" accent="Customers" className="text-center" />

        <div className="mt-[50px] flex w-full items-center justify-center gap-3 md:gap-[100px]">
          <Arrow direction="prev" disabled={index === 0} onClick={() => setIndex((i) => Math.max(0, i - 1))} />

          <figure
            aria-live="polite"
            className="relative flex w-full max-w-[614px] flex-col items-center gap-8 bg-white px-6 py-10 shadow-[-23px_-18px_60px_0px_rgba(0,0,0,0.04),23px_26px_60px_0px_rgba(46,33,61,0.04)] md:h-[259px] md:flex-row md:items-start md:gap-0 md:p-0"
          >
            <div className="relative size-[170px] shrink-0 md:absolute md:left-14 md:top-[45px] md:size-[170px]">
              <div aria-hidden className="absolute left-0 top-[12.93px] size-[156.426px] bg-[#d9d9d9]" />
              <div className="absolute left-[13.57px] top-0 size-[156.426px] overflow-hidden">
                <Image
                  src={t.image}
                  alt={`Portrait of ${t.name}`}
                  width={725}
                  height={580}
                  sizes="344px"
                  className="absolute left-[-61.14%] top-[-4.9%] h-[175.47%] w-[219.34%] max-w-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:absolute md:left-[268px] md:top-[54px] md:w-[318px]">
              <blockquote className="text-[16px] leading-[normal] text-[#484848]">{t.quote}</blockquote>
              <img
                src="/images/icons/testi-stars.svg"
                alt="5 out of 5 stars"
                width={95}
                height={18}
                className="mt-4 h-[17.636px] w-[95.327px] md:absolute md:top-[82px] md:mt-0"
              />
              <div aria-hidden className="mt-4 h-[0.802px] w-[230.794px] bg-[#484848] md:absolute md:top-[116.64px] md:mt-0" />
              <figcaption className="mt-1 font-serif text-[24px] italic leading-[63.36px] text-ink md:absolute md:top-[115px] md:mt-0">
                {t.name}
              </figcaption>
            </div>
          </figure>

          <Arrow direction="next" disabled={index === last} onClick={() => setIndex((i) => Math.min(last, i + 1))} />
        </div>
      </div>
    </section>
  );
}
