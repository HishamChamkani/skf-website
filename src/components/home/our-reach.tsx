import Image from "next/image";

/**
 * "Our Reach" map. On hover/focus the section turns Pakistan green
 * (#01411C → #005223, top to bottom) and the text turns white.
 */
export default function OurReach() {
  return (
    <section
      id="reach"
      aria-labelledby="reach-title"
      tabIndex={0}
      className="group relative overflow-hidden bg-white outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#005223]"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#01411c] to-[#005223] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
      />

      <div className="container-site relative flex flex-col gap-8 py-16 lg:block lg:h-[720px] lg:py-0">
        <h2
          id="reach-title"
          className="font-serif text-[40px] font-normal leading-[normal] text-reach transition-colors duration-500 group-hover:text-white group-focus-visible:text-white lg:absolute lg:left-[-2px] lg:top-[106px] lg:text-[48px]"
        >
          OUR REACH
        </h2>

        <div className="relative aspect-[755/531] w-full lg:absolute lg:left-[367px] lg:top-[95px] lg:w-[755px]">
          <Image
            src="/images/home/pakistan-map.webp"
            alt="Map of Pakistan marking the cities SKF covers, including Islamabad, Lahore, Karachi, Peshawar and Quetta"
            fill
            sizes="(min-width: 1024px) 755px, 100vw"
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-2.5 lg:absolute lg:left-[-2px] lg:top-[600px]">
          <img
            src="/images/icons/star.svg"
            alt=""
            aria-hidden
            width={20}
            height={20}
            className="size-5 transition-[filter] duration-500 group-hover:brightness-0 group-hover:invert group-focus-visible:brightness-0 group-focus-visible:invert"
          />
          <p className="font-roboto text-[16px] font-medium leading-[normal] text-black transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
            All Our Pakistan
          </p>
        </div>
      </div>
    </section>
  );
}
