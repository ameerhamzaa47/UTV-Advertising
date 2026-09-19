import Link from "next/link";
import {
  footerBrand,
  footerCompany,
  footerIndustries,
  footerLegal,
  footerServices,
} from "@/content/footer";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 4.5h12v7H2v-7zm0 0l6 4.5 6-4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 14s5-4.2 5-7.5A5 5 0 003 6.5C3 9.8 8 14 8 14z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group/link inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
    >
      <span className="h-px w-0 bg-accent transition-all duration-200 group-hover/link:w-2.5" />
      {children}
    </Link>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <span className="mt-2 block h-0.5 w-8 rounded-full bg-gradient-to-r from-accent to-accent-end" />
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-card-border bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-10 size-[380px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[320px] rounded-full bg-accent-end/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent via-[#5eb8ff] to-accent-end text-[11px] font-extrabold tracking-wide text-white shadow-[0_8px_20px_rgba(59,158,255,0.35)] ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/25 to-transparent" />
                <span className="relative">UVT</span>
              </span>
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-base font-bold tracking-tight text-transparent">
                {footerBrand.name}
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footerBrand.description}
            </p>

            <div className="mt-5 space-y-2">
              <a
                href={`mailto:${footerBrand.email}`}
                className="group flex items-center gap-2.5 rounded-xl border border-transparent px-2.5 py-2 text-sm text-muted transition-all hover:border-accent/20 hover:bg-accent/5 hover:text-accent"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <MailIcon className="size-3.5" />
                </span>
                {footerBrand.email}
              </a>
              <p className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm text-muted">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-end/10 text-accent-end">
                  <PinIcon className="size-3.5" />
                </span>
                {footerBrand.location}
              </p>
            </div>
          </div>

          <FooterColumn title="Services">
            {footerServices.map((item) => (
              <li key={item.label}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {footerCompany.map((item) => (
              <li key={item.label}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Industries">
            {footerIndustries.map((item) => (
              <li key={item.label}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-card-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted sm:text-[13px]">
            © {year} UVT Advertising Ltd. All rights reserved. Company
            registered in England &amp; Wales.
          </p>
          <div className="flex flex-wrap gap-x-1 gap-y-1">
            {footerLegal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-2.5 py-1.5 text-xs text-muted transition-colors hover:bg-accent/10 hover:text-accent sm:text-[13px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
