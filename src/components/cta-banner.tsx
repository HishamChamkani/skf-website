import Image from "next/image";
import Link from "next/link";

const timeLabels = [
  "00:00", "00:10", "00:15", "00:20", "00:30", "00:40", "00:50", "01:00",
  "01:10", "01:20", "01:30", "01:40", "01:50", "02:00", "02:10",
];

/** Video-editor style timeline ruler across the top of the banner. */
function TimeScale() {
  return (
    <div aria-hidden className="relative h-6 w-full overflow-hidden">
      {timeLabels.map((label, i) => (
        <div key={label} className="absolute top-0 flex items-start gap-[7.5px]" style={{ left: `${i * 82.5}px` }}>
          <span className="h-6 w-px bg-[#919191]" />
          <span className="flex items-center gap-[7.5px]">
            {Array.from({ length: 9 }, (_, j) => (
              <span key={j} className="h-2.5 w-px bg-[#919191]" />
            ))}
          </span>
          <span className="absolute inset-y-0 left-0 flex w-9 items-end justify-center">
            <span className="font-geist text-[9px] leading-[12.6px] text-[#c6c6c6]">{label}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-12">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1118px]">
        <div className="relative flex min-h-[420px] flex-col items-center justify-center gap-6 overflow-hidden rounded-[20px] px-5 py-16 text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] md:h-[484px] md:py-0">
          <div aria-hidden className="absolute inset-y-0 left-0 right-[-82px] flex flex-col overflow-hidden rounded-[20px] bg-black">
            <TimeScale />
            <div className="relative mt-auto h-[460px] w-[1200px] max-w-none">
              <Image src="/images/home/cta-stars.webp" alt="" fill sizes="1200px" className="object-fill" />
            </div>
          </div>

          <Image src="/images/home/cta-logo.png" alt="" width={40} height={40} className="relative size-10" />
          <h2
            id="cta-title"
            className="relative text-[clamp(30px,4vw,48px)] font-semibold leading-[1.2] tracking-[-0.04em] text-white"
          >
            Ready to Scale Your Content?
          </h2>
          <p className="relative text-[clamp(16px,1.6vw,20px)] font-medium leading-[30px] tracking-[-0.4px] text-[#ababab]">
            Get high-quality video editing without the stress.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center rounded-[40px] bg-white px-5 py-[14px] text-[16px] font-semibold leading-[19.2px] text-brand shadow-[0px_0.796px_1.433px_-0.625px_rgba(0,0,0,0.08),0px_2.415px_4.346px_-1.25px_rgba(0,0,0,0.08),0px_6.383px_11.489px_-1.875px_rgba(0,0,0,0.08),0px_20px_36px_-2.5px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
