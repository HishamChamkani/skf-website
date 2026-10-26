import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import CtaBanner from "@/components/cta-banner";
import { AboutCompany, Founder, Team, WhyChoose } from "@/components/about/about-sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet the founder and team behind ${site.fullName}, a video production studio creating films, commercials and event coverage across Pakistan since 2019.`,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        heading={`About ${site.fullName}`}
        image="/images/about/hero.webp"
        alt="Two photographers smiling while reviewing a print, with lenses on the table"
      />
      <Founder />
      <AboutCompany />
      <Team />
      <WhyChoose />
      <CtaBanner />
    </>
  );
}
