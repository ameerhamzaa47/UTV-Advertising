import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050a15]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,158,255,0.16),transparent_55%)]" />
      <div className="relative mb-8">
        <div className="absolute -inset-6 animate-pulse rounded-full bg-accent/20 blur-2xl" />
        <Image
          src="/images/Logo.png"
          alt="UTV Advertising"
          width={140}
          height={112}
          priority
          className="relative h-auto w-[120px] object-contain sm:w-[140px]"
        />
      </div>
      <div className="h-1 w-44 overflow-hidden rounded-full bg-white/10 sm:w-52">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-accent to-accent-end" />
      </div>
      <p className="mt-4 text-[11px] font-semibold tracking-[0.2em] text-muted uppercase">
        Loading experience
      </p>
    </div>
  );
}
