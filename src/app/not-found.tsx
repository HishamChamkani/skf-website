import { DarkButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-coal px-5 pb-20 pt-40 text-center text-white">
      <p className="text-sm font-medium uppercase tracking-[1px] text-brand">Coming soon</p>
      <h1 className="mt-3 font-serif text-[44px] italic leading-tight">This page isn&apos;t ready yet</h1>
      <p className="mt-3 max-w-md text-white/60">It&apos;s either being built right now or the link is wrong.</p>
      <DarkButton href="/" className="mt-8 border-white/20">
        Back to home
      </DarkButton>
    </section>
  );
}
