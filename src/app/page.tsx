import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Clients from "@/components/home/clients";
import Works from "@/components/home/works";
import SpatialStorytelling from "@/components/home/spatial-storytelling";
import OurReach from "@/components/home/our-reach";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/home/newsletter";
import CtaBanner from "@/components/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <Works />
      <SpatialStorytelling />
      <OurReach />
      <Testimonials />
      <Newsletter />
      <CtaBanner />
    </>
  );
}
