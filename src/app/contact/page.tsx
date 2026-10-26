import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Tell ${site.fullName} about your project: films, commercials, events, photography, drone and post production across Pakistan.`,
};

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" className="relative overflow-hidden bg-coal pb-16 pt-[120px] md:min-h-[926px] md:pb-[90px] md:pt-[161px]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 aspect-[1440/842] min-h-[420px]">
        <Image src="/images/contact-bg.webp" alt="" fill preload sizes="100vw" className="object-cover object-bottom" />
      </div>

      <div className="relative mx-auto w-[calc(100%-2.5rem)] max-w-[1118px] rounded-2xl bg-white px-5 pb-10 pt-8 sm:px-10 md:px-[69px] md:pb-[49px] md:pt-12">
        <h1 id="contact-title" className="sr-only">
          Contact {site.fullName}
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
