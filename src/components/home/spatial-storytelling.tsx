import Image from "next/image";
import { CornerBrackets } from "@/components/ui";

export default function SpatialStorytelling() {
  return (
    <section aria-labelledby="spatial-title" className="relative flex min-h-[420px] items-center overflow-hidden bg-[#1a1a1a] py-10 md:h-[637px] md:py-0">
      <Image
        src="/images/home/spatial.webp"
        alt="Filmmaker with a cinema camera on a gimbal talking to his crew"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[482px] bg-gradient-to-b from-[rgba(4,4,4,0)] to-[rgba(4,4,4,0.6)]"
      />

      <div className="relative mx-auto w-[calc(100%-2.5rem)] max-w-[1118px]">
        <div className="relative flex min-h-[340px] flex-col justify-between gap-10 border border-white/20 px-6 pb-8 pt-6 md:min-h-0 md:flex-row md:items-end md:px-10 md:pb-10 md:pt-7">
          <img
            src="/images/icons/spatial-globe.svg"
            alt=""
            aria-hidden
            width={48}
            height={48}
            className="order-2 size-12 shrink-0 md:order-none"
          />
          <div className="flex flex-col gap-10 md:w-[543px] md:shrink-0 md:gap-[283px]">
            <h2
              id="spatial-title"
              className="text-[clamp(44px,5.56vw,80px)] font-medium uppercase leading-none tracking-[-0.06em] text-white"
            >
              Spatial
              <br />
              Storytelling
            </h2>
            <img
              src="/images/icons/spatial-ruler.svg"
              alt=""
              aria-hidden
              width={332}
              height={48}
              className="h-12 w-[min(332px,100%)]"
            />
          </div>
          <CornerBrackets />
        </div>
      </div>
    </section>
  );
}
