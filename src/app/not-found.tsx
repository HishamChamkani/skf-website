import { DarkButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-coal px-5 pb-20 pt-40 text-center text-white">
      <p className="text-sm font-medium uppercase tracking-[1px] text-brand">404</p>
      <h1 className="mt-3 font-serif text-[44px] italic leading-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-white/60">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <DarkButton href="/" className="mt-8 border-white/20">
        Back to home
      </DarkButton>
    </section>
  );
}
