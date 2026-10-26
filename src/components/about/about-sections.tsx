import Image from "next/image";
import { DarkButton } from "@/components/ui";
import { team, type TeamMember } from "@/lib/team";

/** 48px Instrument Serif italic heading with an optional orange second part. */
function AboutTitle({
  lead,
  accent,
  id,
  className = "",
  size = "text-[36px] md:text-[48px]",
}: {
  lead: string;
  accent?: string;
  id?: string;
  className?: string;
  size?: string;
}) {
  return (
    <h2 id={id} className={`font-serif font-normal italic leading-[1.2] text-[#141414] ${size} ${className}`}>
      {lead}
      {accent && (
        <>
          {" "}
          <span className="text-brand">{accent}</span>
        </>
      )}
    </h2>
  );
}

const bodyText = "text-[17px] leading-[1.5] text-[#454545] md:text-[20px]";

const founderPoints = [
  "1000+ projects delivered since 2019",
  "A 10-person core team in Lahore, plus a vetted network of 30-50 crew across Lahore, Karachi and Islamabad",
  "Clients including Nestlé, Unilever, PepsiCo, Coca-Cola, Aramco, LUMS and Allied Bank",
  "Live events as the strongest practice, including six straight years of CMH Lahore Medical College convocation livestreams",
];

export function Founder() {
  return (
    <section aria-labelledby="founder-title" className="bg-white py-16 md:pb-[110px] md:pt-[63px]">
      <div className="container-site flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
        <figure className="mx-auto w-full max-w-[530px] shrink-0 lg:mx-0">
          <div className="relative aspect-[530/640] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about/founder.webp"
              alt="Sikandar Khattak, founder and CEO of SKF"
              fill
              sizes="(min-width: 1024px) 530px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-[37px] text-center text-[18px] font-semibold leading-[1.5] text-[#454545] md:text-[20px]">
            Meet Sikandar Khattak
          </figcaption>
        </figure>

        <div className="w-full max-w-[541px] lg:pt-[46.5px]">
          <AboutTitle id="founder-title" lead="Meet The" accent="Founder" />
          <p className={`mt-[25px] max-w-[510px] text-justify ${bodyText}`}>
            Founder &amp; Chief Executive Officer of Sikandar Khattak Films, leading SKF with a focus on creative
            storytelling, professional production, and reliable delivery.
          </p>

          <AboutTitle lead="What he's" accent="built" className="mt-10" />
          <ul className="mt-[17px] flex flex-col gap-5">
            {founderPoints.map((point) => (
              <li key={point} className="relative pl-[31px]">
                <img
                  src="/images/icons/about-bullet.svg"
                  alt=""
                  aria-hidden
                  width={10}
                  height={10}
                  className="absolute left-0 top-[10px] size-2.5"
                />
                <p className={`max-w-[510px] text-justify ${bodyText}`}>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AboutCompany() {
  return (
    <section aria-labelledby="about-skf-title" className="bg-white py-16 md:py-[120px]">
      <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[1140px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-1 flex-col gap-6">
          <AboutTitle id="about-skf-title" lead="About" accent="SKF" />
          <p className={`text-justify ${bodyText}`}>
            At Sikandar Khattak Films, we believe every brand has a story worth telling well. Since 2019, we have been
            creating corporate films, commercials, event coverage, photography, and brand content across Pakistan. With
            an experienced team, professional production standards, and a focus on reliability, we turn ideas into
            visual stories that represent brands with purpose.
          </p>
          <h3 className="font-serif text-[32px] font-normal italic leading-[1.5] text-[#141414] md:text-[38px]">
            Our <span className="text-brand">Mission</span>
          </h3>
          <p className={`text-justify ${bodyText}`}>
            Our mission is to create powerful visual stories that represent brands at their best. We combine creative
            storytelling, professional production, and reliable execution to deliver content that meets corporate
            standards and leaves a lasting impression.
          </p>
        </div>
        <div className="relative aspect-[530/640] w-full max-w-[530px] flex-1 overflow-hidden rounded-2xl lg:aspect-auto lg:h-[640px]">
          <Image
            src="/images/about/about-skf.webp"
            alt="SKF team in a meeting around a conference table"
            fill
            sizes="(min-width: 1024px) 530px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon, label }: { href?: string; icon: string; label: string }) {
  const img = <img src={`/images/icons/${icon}.svg`} alt="" width={24} height={24} className="size-6" />;
  if (!href) return <span aria-hidden>{img}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition-opacity hover:opacity-70">
      {img}
    </a>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <li className="flex flex-col gap-6">
      <div className="relative aspect-[348/395] w-full overflow-hidden rounded-2xl">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1024px) 348px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
        />
      </div>
      <div className="leading-[1.5]">
        <h3 className="text-[20px] font-semibold text-[#141414]">{member.name}</h3>
        <p className="text-[16px] text-[#454545]">{member.role}</p>
      </div>
      <div className="flex gap-4">
        <SocialIcon href={member.links?.linkedin} icon="icon-linkedin" label={`${member.name} on LinkedIn`} />
        <SocialIcon href={member.links?.x} icon="icon-x" label={`${member.name} on X`} />
        <SocialIcon href={member.links?.dribbble} icon="icon-dribbble" label={`${member.name} on Dribbble`} />
      </div>
    </li>
  );
}

export function Team() {
  return (
    <section aria-labelledby="team-title" className="bg-white pb-12 pt-12">
      <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[1140px] flex-col items-center">
        <div className="flex max-w-[862px] flex-col items-center gap-6 text-center">
          <AboutTitle id="team-title" lead="Meet The" accent="Team" />
          <p className="max-w-[650px] text-[17px] font-medium leading-[1.5] text-[#454545] md:text-[20px]">
            Get to Know the Creative and Skilled Professionals Behind Every Story We Bring to Life.
          </p>
        </div>
        <ul className="mt-12 grid w-full grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </ul>
      </div>
    </section>
  );
}

const reasons = [
  {
    title: "Professional Production",
    text: "From concept to final delivery, we maintain high production standards and attention to every detail.",
  },
  {
    title: "Nationwide Reach",
    text: "With crews across Lahore, Karachi, Peshawar and Islamabad, we can deliver productions anywhere in Pakistan.",
  },
  {
    title: "Reliable Execution",
    text: "Fixed delivery dates, one point of contact, and a structured workflow keep every project clear and on schedule.",
  },
];

export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="bg-white py-16 md:py-[120px]">
      <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[1140px] flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="relative aspect-[530/640] w-full max-w-[530px] flex-1 overflow-hidden rounded-2xl lg:aspect-auto lg:h-[640px]">
          <Image
            src="/images/about/why-skf.webp"
            alt="SKF studio with cameras, lights and an editing setup"
            fill
            sizes="(min-width: 1024px) 530px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-1 flex-col items-start gap-8">
          <div className="flex flex-col gap-6">
            <AboutTitle id="why-title" lead="Why Choose Sikandar Khattak Films?" />
            <p className="text-[17px] font-medium leading-[1.5] text-[#454545] md:text-[20px]">
              Discover What Sets SKF Apart and Brings Your Story to Life.
            </p>
          </div>
          <ul className="flex flex-col gap-6">
            {reasons.map((r) => (
              <li key={r.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <img src="/images/icons/check-circle.svg" alt="" aria-hidden width={24} height={24} className="size-6 shrink-0" />
                  <h3 className="text-[18px] font-medium leading-[1.5] text-[#141414] md:text-[20px]">{r.title}</h3>
                </div>
                <p className="text-[16px] leading-[1.5] text-[#454545]">{r.text}</p>
              </li>
            ))}
          </ul>
          <DarkButton href="/contact">Contact Us</DarkButton>
        </div>
      </div>
    </section>
  );
}
