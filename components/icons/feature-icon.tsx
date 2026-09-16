export function FeatureIcon({ icon }: { icon: string }) {
  return (
    <span
      className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/10 text-lg"
      aria-hidden
    >
      {icon}
    </span>
  );
}
