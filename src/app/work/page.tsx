import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import CtaBanner from "@/components/cta-banner";
import WorkGallery from "@/components/work/work-gallery";
import { SectionTitle } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: `Selected projects by ${site.fullName}: video editing, motion graphics, thumbnails, content repurposing and promo videos.`,
};

export default function WorkPage() {
  return (
    <>
      <Hero heading={`Our Work | ${site.fullName}`} />
      <section aria-labelledby="works-title" className="bg-white pb-12 pt-12">
        <div className="container-site flex flex-col items-center">
          <SectionTitle id="works-title" lead="Our" accent="Works" className="text-center leading-[23px]!" />
          <WorkGallery />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
