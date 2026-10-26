import { SectionTitle } from "@/components/ui";

type Client = { name: string; category: string };

const rowOne: Client[] = [
  { name: "PepsiCo", category: "FMCG / Beverages" },
  { name: "Unilever", category: "FMCG" },
  { name: "Cadbury", category: "Confectionery" },
  { name: "Hyundai", category: "Automotive" },
  { name: "Omoda", category: "Automotive" },
  { name: "Jazz", category: "Telecom" },
  { name: "Zong", category: "Telecom" },
  { name: "PTCL", category: "Telecom" },
  { name: "Carrefour", category: "Retail" },
];

const rowTwo: Client[] = [
  { name: "BankIslami", category: "Banking" },
  { name: "HBL", category: "Banking" },
  { name: "DHA", category: "Real Estate" },
  { name: "Huawei", category: "Technology" },
  { name: "TCL", category: "Technology" },
  { name: "Syngenta", category: "Agriculture" },
  { name: "Fatima Fertilizer", category: "Agriculture" },
  { name: "Kia", category: "Automotive" },
  { name: "Honda", category: "Automotive" },
];

function ClientCell({ client, hidden }: { client: Client; hidden?: boolean }) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className="flex h-[148.92px] w-[298.833px] shrink-0 flex-col items-center justify-center gap-[11px] bg-white px-5 py-7"
    >
      {/* Reserved 36px slot for the client logo (logos not supplied yet). */}
      <div className="h-9 w-full" />
      <p className="font-jakarta text-[11.2px] font-bold uppercase leading-[17.92px] tracking-[0.672px] text-sub">
        {client.name}
      </p>
      <p className="font-jakarta text-[9.6px] leading-[15.36px] text-[rgba(122,122,122,0.6)]">{client.category}</p>
    </li>
  );
}

function MarqueeRow({ clients, reverse }: { clients: Client[]; reverse?: boolean }) {
  return (
    <div className="group overflow-hidden motion-reduce:overflow-x-auto">
      <ul
        className={`flex w-max gap-px ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {clients.map((c) => (
          <ClientCell key={c.name} client={c} />
        ))}
        {/* Duplicate set for a seamless loop; hidden from assistive tech and when motion is reduced. */}
        {clients.map((c) => (
          <ClientCell key={`${c.name}-dup`} client={c} hidden />
        ))}
      </ul>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="bg-white pb-12 pt-12">
      <div className="container-site flex flex-col items-center text-center">
        <p className="mb-[-5px] text-[8px] font-bold uppercase leading-[17.41px] tracking-[1.088px] text-brand">
          Who Trusts Us
        </p>
        <SectionTitle lead="Our" accent="Clients" className="mb-[-5px]" />
        <p className="max-w-[520px] text-[12px] leading-[23px] text-sub">
          Pakistan&apos;s most iconic brands - across FMCG, Automotive, Telecom, Banking, and more.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-px bg-[#e2e4e9] pb-px pt-[43px]">
        <MarqueeRow clients={rowOne} />
        <MarqueeRow clients={rowTwo} reverse />
      </div>
    </section>
  );
}
